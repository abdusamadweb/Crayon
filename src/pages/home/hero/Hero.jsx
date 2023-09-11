import './Hero.scss'
import React from 'react'
import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <h1 className="hero__title">
                    We help clients optimize and innovate with software, cloud, data and AI.
                </h1>
                <div className='hero__btns row g2'>
                    <Link className='btn' to='/services/assess-migrate'>Our Services</Link>
                    <Link className='btn' to='/contact-us'>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
