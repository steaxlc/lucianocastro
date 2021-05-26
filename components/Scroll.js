import React from 'react'
import { motion } from "framer-motion";
import styled from 'styled-components'

const Scroll = () => {

    const circleAnimation = {
        hidden: { y: 50 },
        show: {
            y: 10,
            transition: {duration: 1, ease: "easeOut", repeat: Infinity, repeatType: "reverse",}
        }
    }

    return (
        <motion.svg  variants={circleAnimation} initial="hidden" animate="show"  width="25" height="53" viewBox="0 0 34 65">
            <g id="Grupo_2" data-name="Grupo 2" transform="translate(-190 -611)">
                <circle id="Elipse_6" data-name="Elipse 6" cx="8" cy="8" r="8" transform="translate(199 622)" fill="#fff"/>
            </g>
        </motion.svg>

    )
}



export default Scroll
