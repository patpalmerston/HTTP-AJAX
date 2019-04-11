import React from 'react'

function FriendList(props) {

  const goHome = event => {
    event.preventDefault();
    props.history.push('/')
  }

  return(
    <div className='friend-list-wrapper'>
      {props.friends.map(friend => (
        <div className='friend-wrap'>
        <h1>{friend.name}</h1>
        <h2>Age: {friend.age}</h2>
        <h3>email: {friend.email}</h3>
        
        </div>
      ))}
   
      <button onClick={goHome} className='friend-button'>Home Page</button>
    </div>
  )
}



export default FriendList;