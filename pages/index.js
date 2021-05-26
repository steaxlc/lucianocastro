import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Nav from '../components/Nav'
import styles from '../styles/home.module.css'
import MyWorks from '../components/MyWorks'

import {useState, useEffect} from 'react'
import AboutSection from '../components/AboutSection'
import Scroll from '../components/Scroll'

export default function Home() {

  const [darkMode, setDarkMode] = useState(true);
  const [hideHero, setHideHero] = useState(false);
  const [whereScroll, setWhereScroll] = useState(0);
  const [inHeight, setInHeight] = useState(0);
  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setHideHero(true);
      } else {
        setHideHero(false);
      }
      setWhereScroll(window.scrollY);
      setInHeight(window.innerHeight);
    }
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])
  
  if (typeof window === 'object') {
    const parallax = (e) => {
      const target = document.querySelectorAll('.layer').forEach(layer => {
          const speed = layer.getAttribute('data-speed')
          const x = (window.innerWidth - e.pageX * speed)/100;
          const y = (window.innerHeight - e.pageY * speed)/100;
          console.log(x)
          layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      })
    }
    document.addEventListener("mousemove", parallax);
  }
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
        hideHero={hideHero}
      />
      <div className={styles.sidemenu}>
        <ul>
          <li><a href="#home"><div className={`${whereScroll < inHeight || inHeight == 0 ? styles.selected : styles.itemside}` + ` `+ `${!darkMode? styles.darkside : ``}`}></div></a></li>
          <li><a href="#works"><div className={`${whereScroll > (inHeight*0.7) && whereScroll < (inHeight*1.9) ? styles.selected : styles.itemside}` + ` `+ `${!darkMode? styles.darkside : ``}`}></div></a></li>
          <li><a href="#about"><div className={`${whereScroll > (inHeight*1.7) && whereScroll < (inHeight*2.9) ? styles.selected : styles.itemside}` + ` `+ `${!darkMode? styles.darkside : ``}`}></div></a></li>
          <li><a href="#contact"><div className={`${whereScroll > (inHeight*2.7) ? styles.selected : styles.itemside}` + ` `+ `${!darkMode? styles.darkside : ``}`}></div></a></li>
        </ul>
      </div>
      
      <div className={styles.section} id="works">
        <MyWorks/>
      </div>
      <div className={styles.section} id="about">
        <AboutSection/>
      </div>
      <div className={styles.section} id="contact">
        teste 3
      </div>
      
    </div>
  )
}
