import React, { useState } from 'react'
//icons
import { FaSun, FaMoon } from 'react-icons/fa';
//css
import styles from '../styles/nav.module.css'

const Nav = ({darkMode, setDarkMode}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const hamburguerAnimationHandler = () => {
        setMenuOpen(!menuOpen);
    }
    const darkModeHandler = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className={styles.stylednav}>
            <div className={styles.logo}>
                Luciano Castro
            </div>
            <div className={styles.clickable}>
                <div className={styles.sunmoon} onClick={darkModeHandler}>
                    {darkMode? <FaSun style={{fontSize: 25}}/> : <FaMoon style={{fontSize: 25}}/>}
                </div>
                <div className={styles.menubtn + ` `+ `${menuOpen? styles.open : ``}`} onClick={hamburguerAnimationHandler}>
                    <div className={styles.menubtnburguer + ` `+ `${!darkMode? styles.darkback : ``}`}></div>
                </div>
            </div>
            
        </div>
    )
}


export default Nav
