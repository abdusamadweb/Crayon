import './Hero.scss'
import React from 'react'

const Hero = ({ content }) => {


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='hero'>
            <div className="container small">
                <div className="hero__inner">
                    <div className="hero__titles">
                        <span className="sub">{ data?.['app-name'] } CHANNEL BUSINESS</span>
                        <h1 className="title">{ content?.partner_title?.text || '...' }</h1>
                    </div>
                    <div className="hero__descs">
                        <p className="desc">{ content?.partner_desc1?.text || '...' }</p>
                        <p className="desc">{ content?.partner_desc2?.text || '...' }</p>
                        <a className='btn' href="#contact">TALK TO AN EXPERT</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
