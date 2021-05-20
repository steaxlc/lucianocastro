import React from 'react'
import styles from '../styles/works.module.css'

const MyWorks = () => {
    return (
        <div className={styles.main}>
            <div className={styles.imagem}>
                <div className={styles.legenda}>
                    <h1 className={styles.shadow}>Works</h1>
                </div>
                <div className={styles.foto}>
                    <img src="/img/pc.jpg" alt="" />
                </div>
            </div>
            <div className={styles.texto}>
                <div>
                    <h1>Come to see</h1>
                    <h1 className={styles.castro}>My Projects</h1>
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

export default MyWorks
