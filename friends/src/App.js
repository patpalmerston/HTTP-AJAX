import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import axios from 'axios'

import FriendList from './components/FriendList'
import Home from './components/Home'

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
    .then(res => {this.setState({ friends: res.data})
    
    })
    .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <Route exact path='/' component={Home} />

          <Route 
            path='/friends' 
            render={props => <FriendList {...props} friends={this.state.friends}/>} 
          />

          
        </header>
      </div>
    );
  }
}

{/* <Route 
            path='/friends' 
            render={(props) => <Friends {...props} friends={this.state.friends} />} /> */}
