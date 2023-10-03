import './Footer.scss'
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {formatPhone} from "../../assets/scripts/global";
import $api from "../../api";

const Footer = ({openNav, setOpenNav}) => {


    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    const [links, setLinks] = useState([])
    useEffect(() => {
        $api
            .get('/social-links')
            .then(res => setLinks(res.data[0]))
    }, [])


    return (
        <div className='footer'>
            <div className="container">
                <div className={`header__inner row between align-center ${openNav ? 'open-nav' : ''}`}>
                    <Link className='header__logo' to='/'>
                        <img className='img' src={data?.logo?.full_url} alt="logo"/>
                    </Link>
                    <div className='row align-center g2'>
                        <Link className={`header__search ${openNav ? 'open-nav' : ''}`} to='/search'>
                            <i className="fa-solid fa-magnifying-glass icon"/>
                            <span className='txt'>Search</span>
                        </Link>
                        <button className={`header__nav-btn ${openNav ? 'open-nav' : ''}`}
                                onClick={() => setOpenNav(!openNav)}>
                            {
                                !openNav ?
                                    <i className="fa-solid fa-bars icon"/>
                                    : <i className="fa-solid fa-xmark icon"/>
                            }
                            <span className='txt'>Menu</span>
                        </button>
                    </div>
                </div>
                <div className="footer__wrapper row between">
                    <div className="titles">
                        <div className='mb3'>
                            <span className='txt'>Let's talk</span>
                            <a className='link' href={`mailto: ${data?.email}`}>{ data?.email || '...' }</a>
                            <a className='link' href={`tel: ${data?.phoneNumber}`}>{ formatPhone(data?.phoneNumber || '+12345') }</a>
                        </div>
                        <div className='social'>
                            <span className='txt'>Follow us</span>
                            <a className='item' href={links?.facebook} target='_blank'>
                                <i className="fa-brands fa-facebook-f icon"/>
                            </a>
                            <a className='item' href={links?.linkedin} target='_blank'>
                                <i className="fa-brands fa-linkedin-in icon"/>
                            </a>
                            <a className='item' href={links?.twitter} target='_blank'>
                                <i className="fa-brands fa-twitter icon"/>
                            </a>
                        </div>
                    </div>
                    <nav className='nav'>
                        <ul className='nav__list row flex-column'>
                            <li className="item">
                                <Link className='item__link' to='/services/assess-migrate'>Services</Link>
                            </li>
                            <li className="item">
                                <Link className='item__link' to='/resources/blogs'>Resources</Link>
                            </li>
                            <li className="item">
                                <Link className='item__link' to='/careers'>Career</Link>
                            </li>
                            <li className="item">
                                <Link className='item__link' to='/about-us/diversity-equity-inclusion'>About us</Link>
                            </li>
                            <li className="item">
                                <Link className='item__link' to='/contact-us'>Contact Us</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="row between" style={{alignItems: 'flex-end'}}>
                    <div className='privacy'>
                        <Link className='link' to='/about-us/terms-conditions'>Privacy Policy</Link>
                        <Link className='link' to='/about-us/global-privacy-notice'>Global Privacy Notice</Link>
                    </div>
                    <address className='address'>{ data?.address || '...' }</address>
                </div>
            </div>
        </div>
    )
}

export default Footer
