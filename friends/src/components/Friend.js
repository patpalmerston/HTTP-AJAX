import React from 'react'


function Friend (props) {
const friend = props.friends.find(
  friend => `${friend.id}` === props.match.params.id
);

if (!props.friends.length || ! friend) {
  return <h2> This may take a moment to load... </h2>;
}

  return(
    <div className='friend-wrapper'>
        <div className='friend-info'>
          <h1>{friend.name}</h1>
          <h2>Age: {friend.age}</h2>
          <h3>email: {friend.email}</h3>
        </div>

    <button onClick={() => {
      props.deleteFriend(friend, props.history)
      }}>Delete Item</button>

    <button onClick={() => {
      props.setupUpdate(friend, props.history)
      }}>Update Item</button>

    </div>
  )

}


export default Friend