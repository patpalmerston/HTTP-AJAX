import React from 'react'
import styled from 'styled-components'
import img from '../img/rsz_expats2.jpg'

const HomeWrapper = styled.div`
  border: 1px solid #000;
  background-image: url(${img});
  width: 100%;
  height: 27rem;
  color: white;

`;

function Home(props) {

  const friendHandler = event => {
    event.preventDefault();
    props.history.push('/friend-list')
  }

  return(
    <HomeWrapper>
      <h1> I am the home Page!</h1>
      <button onClick={friendHandler} className='Home-button'>Find friends!</button>
    </HomeWrapper>
  )
}

export default Home;