import React from 'react'

function FriendList(props) {

  const goHome = event => {
    event.preventDefault();
    props.history.push('/')
  }

  function routeToFriend(event, friend) {
    event.preventDefault();
    props.history.push(`/item-list/${friend.id}`)
  }

  return(
    <div className='friend-list-container'>
      {props.friends.map(friend => (
        <div 
          onClick={event => routeToFriend(event, friend)}
          className='friend-card'
          key={friend.id}
        >


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