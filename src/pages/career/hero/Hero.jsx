import './Hero.scss'
import React, {useEffect, useState} from 'react'
import heroImg from '../../../assets/images/career-hero-img.jpg'
import $api from "../../../api";

const Hero = ({ content }) => {


    const [links, setLinks] = useState([])
    useEffect(() => {
        $api
            .get('/social-links')
            .then(res => setLinks(res.data[0]))
    }, [])


    return (
        <div className='hero'>
            <div className="container">
                <div className="hero__inner">
                    <div className="hero__titles">
                        <span className="sub">CAREER</span>
                        <h1 className="title">{ content?.career_title?.text || '...' }</h1>
                    </div>
                    <div className="hero__descs">
                        <p className='desc'>{ content?.career_desc1?.text || '...' }</p>
                        <p className='desc'>{ content?.career_desc2?.text || '...' }</p>
                        <a className='btn' href={links?.linkedin} target='_blank'>
                            Open positions
                        </a>
                    </div>
                </div>
                <div className="hero__wrapper">
                    <div className="titles">
                        <h3 className="title">Putting people first</h3>
                        <p className='desc1'>{ content?.carrer_people_title?.text || '...' }</p>
                        <p className="desc2">{ content?.career_people_desc?.text || '...' }</p>
                    </div>
                    <img className='img' src={heroImg} alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default Hero
