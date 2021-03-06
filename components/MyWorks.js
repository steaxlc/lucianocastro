import React, {useEffect} from 'react'
import styles from '../styles/works.module.css'

const MyWorks = () => {
    var inWidth = 1000;
    useEffect(() => {
        inWidth = window.innerWidth;
    }, [])

    return (
        <div className={styles.main}>
            <div className={styles.left}>

            </div>
            <div className={styles.right}>
            <div></div>
                <div className={styles.content}>
                    
                    <h1>Come to see</h1>
                    <h1 className={styles.secondline}>My Projects</h1>
                    <div className={styles.boxline}>
                        <div className={inWidth <= 768 ? styles.line: ``}></div>
                    <div className={inWidth > 768 ? styles.line: ``}></div>
                    </div>
                    <p>In this section will be described and showed my latest projects.</p>
                    <a href="#" ><div className={styles.buttons}>Show me more</div></a>
                </div>
            </div>
        </div>
    )
}

export default MyWorks
