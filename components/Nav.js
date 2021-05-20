import React, { useState } from 'react';
import styled from 'styled-components'
import { FaSun, FaMoon } from "react-icons/fa";

const Nav = ({darkMode,setDarkMode}) => {
 
    const darkModeHandler = () => {
        setDarkMode(!darkMode);
        localStorage.setItem('darkMode', darkMode);
    }

    let menuOpen = false;
    const menuBtn = document.querySelector('.menu-btn');
    const hamburguerAnimationHandler = () => {
        
        if (menuOpen) {
            menuBtn.classList.remove('open');
            menuOpen = false;
        } else { 
            menuBtn.classList.add('open');
            menuOpen = true;
        }
    }

    return (
        <StyledNav darkMode={darkMode} >
            <Logo>Luciano Castro</Logo>
            <div className="clickable">
                <div className="sunmoon"  onClick={darkModeHandler}>
                {darkMode ? <FaSun style={{ fontSize: 30 }}/> : <FaMoon style={{ fontSize: 30 }}/>}
                </div>
            <div className="menu-btn" onClick={hamburguerAnimationHandler}>
                <div className="menu-btn-burger">
                </div>
            </div>
            </div>
        </StyledNav>
    )
}


const Logo = styled.a`
    text-decoration: none;
    cursor: pointer;
    font-size: 1.8rem;
    z-index: 1;
    font-weight: bold;
    
`;
 
const StyledNav = styled.nav`
    transition: all 0.5s ease-in-out;
    z-index: 5; 
    align-items: center;
    margin: 15px 30px 15px 30px;
    display: flex;
    justify-content: space-between;
    .sunmoon{
        margin-top: 7px;
        cursor: pointer;
    }
    .clickable{
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
    .menu-btn.open .menu-btn-burger{
        transform: translateX(-40px);
        background: transparent;
        ::before{
            transform: rotate(45deg) translate(35px, -35px);
        }
        ::after{
            transform: rotate(-45deg) translate(35px, 35px);
        }
    }
    .menu-btn{
        position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    cursor: pointer;
    margin-left: 15px;
    transition: all .5s ease-in-out;
    .menu-btn-burger{
        width: 40px;
        height: 4px;
        ${props => props.darkMode ? `
        background: white;
        `: `background: black;`}
        border-radius: 5px;
        transition: all .5s ease-in-out;
        ::after, ::before {
            content: '';
            position: absolute;
            width: 40px;
            height: 4px;
            ${props => props.darkMode ? `
            background: white;
            `: `background: black;`}
            border-radius: 5px;
            transition: all .5s ease-in-out;
        }
        ::before{
            transform: translateY(-12px);
        }
        ::after{
            transform: translateY(12px);
        }
    }
    }
`;

export default Nav
