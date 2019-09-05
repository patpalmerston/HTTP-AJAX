import React from 'react'


export default class FriendForm extends React.Component {
    constructor() {
      super()
      this.state = {
        name: '',
        age: '',
        email: ''
      }

    }

    componentDidMount() {
      
      const friendstuff = this.props.friends.find(friend => friend.id === Number(this.props.match.params.id))
      this.setState({
            name: friendstuff.name,
            age: friendstuff.age,
            email: friendstuff.email
          })
      console.log(friendstuff)
    }

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
        
      });
    };
   
    handleSubmit = e => {
      e.preventDefault();
          //this should be addFriend but vsCode acting wierd
      if (!this.props.currentFriend) {
      this.props.addFriend({ 
        ...this.state 
        })
      }

      else {
        this.props.updateFriend({
          ...this.state,
          id: this.props.currentFriend.id
        })
      }

      this.setState({
        name: '',
        age: '',
        email: ''
      });
      this.props.history.push('/friend-list');
    };

    render() {
      return(
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            placeholder='name'
          />
          <input 
            type='text'
            name='age'
            value={this.state.age}
            onChange={this.handleChange}
            placeholder='age'
          />
          <input 
            type='text'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            placeholder='email'
          />
          <button>submit</button>
        </form>
      )
    }
}