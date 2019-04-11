import React from 'react'
import { Route, NavLink } from 'react-router-dom'

function Friend(props) {
const friend = props.friends.find(
  friend => `${friend.id}` === props.match.params.id
);

if (!props.friends.length || ! friend) {
  return <h2> This may take a moment to load... </h2>;
}

  return(
    <div className='friend-wrapper'>
    <h1>I am the friend component!</h1>

    </div>
  )

}


export default Friend