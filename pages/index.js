import Head from 'next/head'
import styled from 'styled-components'
import Nav from '../components/Nav'
import React, { useState, useEffect } from 'react';

export default function Home() {
  let getDarkMode = localStorage.getItem('darkMode')
    if (!getDarkMode)
        getDarkMode = true;
  const [darkMode, setDarkMode] = useState(getDarkMode);

  let classDark = 'dark '
  useEffect(() => {
    if (darkMode) {
      classDark += 'open'
    } else {
      classDark ='dark '
    }
    console.log(classDark);
  }, [darkMode])
  return ( 
    <StyledHome darkMode={darkMode}>
      <Head>
        <title>Luciano Castro - Portfolio</title>
        <meta name="description" content="Luciano Castro - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav darkMode={darkMode} setDarkMode={ setDarkMode}/>
      <p>
        Luciano Castro
      </p>    
      <div className= 'dark ' >
      </div>
      
    </StyledHome>
  )
} 

const StyledHome = styled.div`
  position: fixed;
  transition: all 0.5s ease-in-out;
  top:0;
  left: 0;
  width: 100%; 
  min-height: 100vh;
  background: linear-gradient( to top, #020c17, #072142);
  font-family: 'Poppins', sans-serif;
  ${props => props.darkMode ? `
    
    color: white;
  `: `
  color: black;`}
  
  .dark{
    position: fixed;
    top: 35px;
    right: 107px;
    z-index: -1;
    border-radius: 50%;
    background-image: linear-gradient( to top, #4178dd, #b2defe);
    transition: all 1s ease-in-out;
    ${props => props.darkMode ? `
    width: 0px;
    height: 0px;
  `: `
    top: 0;
    right: 0;
    width: inherit;
    height: 100vh;
    z-index: -1;
    border-radius: 0%;
  `}
  }
  `;
