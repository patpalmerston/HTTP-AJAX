import React from 'react'



function Home(props) {

  const friendHandler = event => {
    event.preventDefault();
    props.history.push('/friends')
  }

  return(
    <div className='home-wrapper'>
      <h1> I am the home Page!</h1>
      <button onClick={friendHandler} className='friend-button'>Find friends!</button>
    </div>
  )
}

export default Home;