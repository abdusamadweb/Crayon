import './Hero.scss'
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import $api from "../../../api"
import {defaultImg} from "../../../assets/scripts/global";

const Hero = () => {


    const [result, setResult] = useState([])
    useEffect(() => {
        $api
            .get('mainPage')
            .then(res => setResult(res.data[0]))
    }, [])


    return (
        <div className='hero' style={{backgroundImage: `url(${defaultImg(result?.bgImg?.full_url)})`}}>
            <div className="container">
                <h1 className="hero__title">{ result?.title || 'We help clients optimize and innovate with software, cloud, data and AI.' }</h1>
                <div className='hero__btns row g2'>
                    <Link className='btn' to='/services/assess-migrate'>Our Services</Link>
                    <Link className='btn' to='/contact-us'>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
