import './Culture.scss'
import React from 'react'
import img from '../../../assets/images/career-culture-img.webp'
import img2 from '../../../assets/images/career-culture-img2.png'
import {Link} from "react-router-dom";

const Culture = ({ content }) => {


    return (
        <div className='culture'>
            <div className="container">
                <h3 className="culture__title">{ content?.career_culture_title?.text || '...' }</h3>
                <div className="culture__inner">
                    <div className="mission row no-wrap between align-center">
                        <div className='pr3'>
                            <div>
                                <strong className='mission__title mb3'>Mission</strong>
                                <p className="mission__desc">{ content?.career_culture_desc1?.text || '...' }</p>
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
                            <p className="desc">{ content?.career_culture_desc2?.text || '...' }</p>
                            <img className='img' src={img} alt="webp"/>
                        </div>
                    </div>
                </div>
                <div className="culture__wrapper row no-wrap between align-center">
                    <img className='img' src={img2} alt="img"/>
                    <div className="titles">
                        <span className='title'>{ content?.career_diversity_title?.text || '...' }</span>
                        <p className='desc'>{ content?.career_diversity_desc?.text || '...' }</p>
                        <Link className="btn" to='/about-us/diversity-equity-inclusion'>Diversity, Equity, and Inclusion</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Culture
