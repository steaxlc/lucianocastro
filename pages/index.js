import Head from 'next/head'
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
      <div className={styles.teste}>
        teste
      </div>
      <div className={styles.teste}>
        teste
      </div>
      <div className={styles.teste}>
        teste
      </div>
      <div className={styles.teste}>
        teste
      </div>
      
    </div>
  )
}

