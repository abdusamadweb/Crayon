import './Header.scss'
import React from 'react';
import {Link, useHref} from "react-router-dom";
import NavBar from "./NavBar";

const Header = ({ openNav, setOpenNav }) => {


    const href = useHref()


    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className={`header ${openNav ? 'fixed' : ''} ${(href === '/' || href.includes('diversity')) ? 'absolute' : ''}`}>
            <div className="container">
                <div className={`header__inner row between align-center ${openNav ? 'open-nav' : ''}`}>
                    <Link className='header__logo' to='/'>
                        {
                            (href === '/' || href.includes('diversity')) ?
                                <img className='img' src={data?.logo?.full_url} alt="logo"/>
                                : <img className='img' src={data?.logoDark?.full_url} alt="logo"/>
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
