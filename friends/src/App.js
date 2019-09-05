import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom'

import axios from 'axios'

import FriendList from './components/FriendList'
import Home from './components/Home'
import FriendForm from './components/FriendForm'
import Friend from './components/Friend'

import './App.css';


export default class App extends Component {
  constructor() {
    super();
    this.state ={
      friends: [],
      currentFriend: null
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(res => {
      console.log(res);
      this.setState({ 
        friends: res.data
      });
    })
    .catch(err => console.log(err))
  }

  addFriend = friend => {
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  deleteFriend = (id, history) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data });
        history.push('/friend-list');
      })
      .catch(err => console.log(err))
  }



// I have an extra paramater.. check follow along
  updateFriend = (id, item) => {
    axios
      .put(`http://localhost:5000/friends/${id}`, item)
      .then(res => {
        this.setState({ friends: res.data, currentFriend: null });
        this.props.history.push('/friend-list');
      })
      .catch(err => console.log(err))
  }

  setupUpdate = (friend, history)=> {
    // this.setState({ currentFriend: friend });

    history.push(`/friend-form/${friend.id}`);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">

          <nav>
            <h1 className='friends-header'>Best Freinds</h1>
            <div className='nav-links'>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink to='/friend-list'>Friends</NavLink>
              <NavLink to='/friend-form/1'>Add Friends</NavLink>
            </div>
          </nav>
        
          <Route exact path='/' component={Home} />

          <Route 
            exact
            path='/friend-list' 
            render={props => (
                <FriendList 
                  {...props} 
                  friends={this.state.friends}
                />
              )} 
            />

          <Route 
            path='/friend-list/:id' 
            render={props => (
              <Friend 
                {...props} 
                friends={this.state.friends}
                setupUpdate={this.setupUpdate} 
                deleteFriend={this.deleteFriend}
              />
            )} 
          />

          <Route 
            path='/friend-form/:id'
            render={props => (
              <FriendForm 
              {...props}
                updateFriend={this.updateFriend}
                addFriend={this.addFriend}
                friends={this.state.friends}
              />
            )} 
          />

          
        </header>
      </div>
    );
  }
}

