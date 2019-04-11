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

    handleChange = e => {
      this.setState({
        [e.target.name]: e.target.value
        
      });
    };
   
    handleSubmit = e => {
      e.preventDefault();

      this.props.addItem({ ...this.state })

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
          <button>Add Friend</button>
        </form>
      )
    }
}