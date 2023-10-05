import './Hero.scss'
import React from 'react'

const Hero = () => {


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='hero'>
            <div className="container small">
                <div className="hero__inner">
                    <div className="hero__titles">
                        <span className="sub">{ data?.['app-name'] } CHANNEL BUSINESS</span>
                        <h1 className="title">The IT Partners' Partner</h1>
                    </div>
                    <div className="hero__descs">
                        <p className="desc">
                            For hosters, MSPs, ISVs, system integrators or Dynamics partners; our channel business is a { data?.['app-name'] } entity that helps IT providers get the most profitable CSP and SPLA business.
                        </p>
                        <p className="desc">
                            Get a dedicated account manager, best-in-class technical support, a top-ranking software and cloud procurement platform and guidance on how to maximize your vendor incentive programs by partnering with us.
                        </p>
                        <a className='btn' href="#contact">TALK TO AN EXPERT</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
