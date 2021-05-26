import React, {useEffect, useState} from 'react'
import styles from '../styles/hero.module.css'
import { Image } from 'next/image'
import Scroll from './Scroll'

const HeroSection = ({ darkMode, hideHero }) => {

    return (
        <div className={styles.main} id="home">
            <div className={styles.sky + ` `+ `${!darkMode? styles.hidemoon : styles.showmoon}`}>
                <img src="/img/halo.png" className="layer" data-speed="4" alt="shine" />
                <img src="/img/whiteclouds.png" data-speed="-4" className={`layer ` + `${hideHero? styles.hideHero : ``}`} alt="whiteclouds"  />
                <img src="/img/moon.png" alt="moon"  data-speed="4" className={`layer ` + styles.smaller} />
                <img src="/img/stars.png"  className="layer" data-speed="-2"  alt="stars" />
                <img src="/img/portfolio.png"  alt="portfolio"  data-speed="4" className={`layer ` + styles.smaller  + ` `+ `${hideHero? styles.hideHero : ``}`} />
                <img src="/img/darkclouds.png" alt="clouds"   data-speed="2" className={`layer ` + `${hideHero? styles.hideHero : ``}`}  />
            </div>
            <div className={styles.daysky + ` `+ `${darkMode? styles.hidesun : styles.showsun}`}>
                <img src="/img/sun.png" alt="moon" className={styles.smaller} />
                <img src="/img/dayportfolio.png" alt="moon" className={styles.smaller + ` `+ styles.portfolio  + ` `+ `${hideHero? styles.hideHero : ``}`} />
            </div>
            
            <div className={styles.texto}>
                <div>
                    <h1>Luciano</h1>
                    <h1 className={styles.castro}>Castro</h1>
                    <div className={styles.boxline}>
                        <div></div>
                    <div className={styles.line}></div>
                    </div>
                    <p>Frontend Developer</p>
                    <div className={styles.scrolldown}>
                        <p><span><Scroll/></span> Scrolldown</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
