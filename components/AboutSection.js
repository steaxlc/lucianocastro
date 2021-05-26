import React from 'react'
import styles from '../styles/about.module.css'

const AboutSection = () => {
    var inWidth = 0;
    if (typeof window === 'object') {
        inWidth = window.innerWidth;
      }

    return (
        <div className={styles.main}>
            <div className={styles.left}>

            </div>
            <div className={styles.right}>
            <div></div>
                <div className={styles.content}>
                    
                    <h1>About me</h1>
                    <div className={styles.boxline}>
                        <div className={inWidth <= 768 ? styles.line: ``}></div>
                    <div className={inWidth > 768 ? styles.line: ``}></div>
                    </div>
                    <p>Who am i? What's my goals?</p>
                    <a href="#" ><div className={styles.buttons}>Show me more</div></a>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
