import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Nav from '../components/Nav'
import styles from '../styles/home.module.css'

import {useState} from 'react'

export default function Home() {

  const [darkMode, setDarkMode] = useState(true);

  return ( 
    <div className={styles.main + ` `+ `${darkMode? styles.darktheme : ``}`}>
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
      <div className={styles.section}>
        teste 1
      </div>
      <div className={styles.section}>
        teste 2
      </div>
      <div className={styles.section}>
        teste 3
      </div>
      
    </div>
  )
}

