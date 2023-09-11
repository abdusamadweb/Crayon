import './Header.scss'
import React, {useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import logo from '../../assets/images/logo.png'
import logoDark from '../../assets/images/logo-black.png'
import NavBar from "./NavBar";

const Header = ({ openNav, setOpenNav }) => {


    const location = useLocation()


    return (
        <div className={`header ${openNav ? 'fixed' : ''} ${location.pathname === '/' ? 'absolute' : ''}`}>
            <div className="container">
                <div className={`header__inner row between align-center ${openNav ? 'open-nav' : ''}`}>
                    <Link className='header__logo' to='/'>
                        {
                            location.pathname === '/' ?
                                <img className='img' src={logo} alt="logo"/>
                                : <img className='img' src={logoDark} alt="logo"/>
                        }
                    </Link>
                    <div className='row align-center g2'>
                        <Link className={`header__search ${openNav ? 'open-nav' : ''}`} to='/search'>
                            <i className="fa-solid fa-magnifying-glass icon"/>
                            <span className='txt'>Search</span>
                        </Link>
                        <button className={`header__nav-btn ${openNav ? 'open-nav' : ''}`} onClick={() => setOpenNav(!openNav)}>
                            {
                                !openNav ?
                                <i className="fa-solid fa-bars icon"/>
                                    : <i className="fa-solid fa-xmark icon"/>
                            }
                            <span className='txt'>Menu</span>
                        </button>
                    </div>
                </div>
                <NavBar openNav={openNav} setOpenNav={setOpenNav} />
            </div>
        </div>
    );
};

export default Header
