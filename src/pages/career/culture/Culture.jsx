import './Culture.scss'
import React from 'react'
import img from '../../../assets/images/career-culture-img.webp'
import img2 from '../../../assets/images/career-culture-img2.png'
import {Link} from "react-router-dom";

const Culture = () => {


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='culture'>
            <div className="container">
                <h3 className="culture__title">Culture</h3>
                <div className="culture__inner">
                    <div className="mission row no-wrap between align-center">
                        <div className='pr3'>
                            <div>
                                <strong className='mission__title mb3'>Mission</strong>
                                <p className="mission__desc">
                                    We help our customers build the commercial and technical foundation for a successful digital transformation journey into the cloud. Through a reliable services framework, we help our customers to rightsize and optimize their IT estates unlock technology potential and innovation while saving costs.
                                </p>
                            </div>
                            <div>
                                <strong className='mission__title mb2'>Values</strong>
                                <ul className='mission__list'>
                                    <li className='item'>
                                        <strong>Integrity </strong>
                                        – with our actions we show integrity – we are accountable for actions and inaction
                                    </li>
                                    <li className='item'>
                                        <strong>Pace </strong>
                                        – we are customer-focused and act and execute with urgency
                                    </li>
                                    <li className='item'>
                                        <strong>Quality </strong>
                                        – what we do, we do with excellence and better than anyone else
                                    </li>
                                    <li className='item'>
                                        <strong>Agility </strong>
                                        – We innovate through continuous improvement & adapt quickly – yet purposefully - to change
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mission__imgs">
                            <p className="desc">
                                Do you know how it feels to look forward to your work day? We do! That's why 91% of { data?.['app-name'] } employees agreed we were a
                                <a className='link' href="https://www.greatplacetowork.com/certified-company/7046741">Great Place to Work</a>.
                            </p>
                            <img className='img' src={img} alt="webp"/>
                        </div>
                    </div>
                </div>
                <div className="culture__wrapper row no-wrap between align-center">
                    <img className='img' src={img2} alt="img"/>
                    <div className="titles">
                        <span className='title'>Diversity, Equity, and Inclusion</span>
                        <p className='desc'>
                            At { data?.['app-name'] }, we believe people are what makes us great. They are at the core of everything we do. We strive to foster an environment with diverse backgrounds and experiences and a culture where ALL perspectives are welcomed and heard, people are respected and valued, and innovation is encouraged.
                        </p>
                        <Link className="btn" to='/about-us/diversity-equity-inclusion'>Diversity, Equity, and Inclusion</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Culture
