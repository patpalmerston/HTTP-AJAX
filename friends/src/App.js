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
      friends: []
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

  addItem = item => {
    axios
      .post('http://localhost:5000/friends', item)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => console.log(err))
  }

  // updateItem = (id, itemUpdated) => {
  //   axios
  //     .put(`http://localhost:5000/friends/${id}`, itemUpdated)
  //     .then(res => {
  //       this.setState({ friends: res.data });
  //       this.props.history.push('/friend-list');
  //     })
  //     .catch(err => console.log(err))
  // }


  render() {
    return (
      <div className="App">
        <header className="App-header">

          <nav>
            <h1 className='friends-header'>BFFEMF</h1>
            <div className='nav-links'>
              <NavLink exact to='/'>Home</NavLink>
              <NavLink to='/friend-list'>Friends</NavLink>
              <NavLink to='/friend-form'>Add Friends</NavLink>
            </div>
          </nav>
        
          <Route exact path='/' component={Home} />

          <Route 
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
              />
            )} 
          />

          <Route 
            path='/friend-form'
            render={props => (
              <FriendForm 
              {...props}
                // updateItem={this.updateItem}
                addItem={this.addItem}
              />
            )} 
          />

          
        </header>
      </div>
    );
  }
}

