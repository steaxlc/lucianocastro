import React from 'react'
import styles from '../styles/hero.module.css'
import {Image} from 'next/image'

const HeroSection = ({darkMode}) => {
    return (
        <div className={styles.main} id="home">
            <div className={styles.sky + ` `+ `${!darkMode? styles.hidemoon : styles.showmoon}`}>
                <img src="/img/halo.png" alt="shine" />
                <img src="/img/whiteclouds.png" alt="whiteclouds"  />
                <img src="/img/moon.png" alt="moon" className={styles.smaller} />
                <img src="/img/stars.png" alt="stars" />
                <img src="/img/portfolio.png" alt="moon" className={styles.smaller} />
                <img src="/img/darkclouds.png" alt="clouds" />
            </div>
            <div className={styles.daysky + ` `+ `${darkMode? styles.hidemoon : styles.showmoon}`}>
                <img src="/img/sun.png" alt="moon" className={styles.smaller} />
                <img src="/img/dayportfolio.png" alt="moon" className={styles.smaller + ` `+ styles.portfolio} />
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
                </div>
            </div>
        </div>
    )
}

export default HeroSection
