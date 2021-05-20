import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Nav from '../components/Nav'
import styles from '../styles/home.module.css'
import MyWorks from '../components/MyWorks'

import {useState} from 'react'

export default function Home() {

  const [darkMode, setDarkMode] = useState(true);

  return ( 
    <div className={styles.main + ` `+ `${darkMode? styles.darktheme : ``}`} id="home">
      <Head>
        <title>Luciano Castro - Portfolio</title>
        <meta name="description" content="Luciano Castro - Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <HeroSection 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className={styles.sidemenu}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className={styles.section} id="works">
        <MyWorks/>
      </div>
      <div className={styles.section} id="about">
        teste 2
      </div>
      <div className={styles.section} id="contact">
        teste 3
      </div>
      
    </div>
  )
}

