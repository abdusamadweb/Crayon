import './Footer.scss'
import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import {formatPhone} from "../../assets/scripts/global";

const Footer = ({openNav, setOpenNav}) => {
    return (
        <div className='footer'>
            <div className="container">
                <div className={`header__inner row between align-center ${openNav ? 'open-nav' : ''}`}>
                    <Link className='header__logo' to='/'>
                        <img className='img' src={logo} alt="logo"/>
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
                            <a className='link' href="mailto: contact.us@crayon.com">contact.us@crayon.com</a>
                            <a className='link' href="tel: +14696464038">{formatPhone('+14696464038')}</a>
                        </div>
                        <div className='social'>
                            <span className='txt'>Follow us</span>
                            <a className='item' href="https://www.facebook.com/CrayonITGroup/" target='_blank'>
                                <i className="fa-brands fa-facebook-f icon"/>
                            </a>
                            <a className='item' href="https://www.linkedin.com/company/crayon-group" target='_blank'>
                                <i className="fa-brands fa-linkedin-in icon"/>
                            </a>
                            <a className='item' href="https://twitter.com/crayonit" target='_blank'>
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
                        <Link className='link' to='/about-us/privacy-policy'>Privacy Policy</Link>
                        <Link className='link' to='/about-us/global-privacy-notice'>Global Privacy Notice</Link>
                    </div>
                    <address className='address'>
                        12221 Merit Dr. Suite #1400, Dallas, TX 75251, United States
                    </address>
                </div>
            </div>
        </div>
    )
}

export default Footer
