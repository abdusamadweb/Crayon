import './Hero.scss'
import React from 'react'
import heroImg from '../../../assets/images/career-hero-img.jpg'

const Hero = () => {


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='hero'>
            <div className="container">
                <div className="hero__inner">
                    <div className="hero__titles">
                        <span className="sub">CAREER</span>
                        <h1 className="title">Life at { data?.['app-name'] }</h1>
                    </div>
                    <div className="hero__descs">
                        <p className='desc'>
                            What does the fourth technological revolution look like? We don’t know – but we do know it has to be evolved from and enabled by people.
                        </p>
                        <p className='desc'>
                            A career at { data?.['app-name'] } not only gives you the tools to tackle tomorrow’s technology – it connects you to a unique community.
                        </p>
                        <a className='btn' href="https://www.linkedin.com/jobs/search/?f_C=46899%2C2812437%2C333814%2C11842925%2C3218464%2C2217184%2C94650&geoId=92000000&location=Worldwide" target='_blank'>
                            Open positions
                        </a>
                    </div>
                </div>
                <div className="hero__wrapper">
                    <div className="titles">
                        <h3 className="title">Putting people first</h3>
                        <p className='desc1'>
                            { data?.['app-name'] } is a catalyst for progress because we infuse people’s know-how. That’s how we have built a powerful team where tech talents want to work.
                        </p>
                        <p className="desc2">
                            When you work at { data?.['app-name'] }, you can be confident your competence is centered and valued. This means you can use your knowledge and ideas in a variety of ways. We are flexible and welcome you into every area of our organization. We want to create opportunities for you so can develop as an individual and shape new technology with the team.
                        </p>
                    </div>
                    <img className='img' src={heroImg} alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default Hero
