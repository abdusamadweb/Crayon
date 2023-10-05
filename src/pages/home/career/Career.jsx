import './Career.scss'
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import img from '../../../assets/images/career-img.jpg'
import {defaultImg} from "../../../assets/scripts/global";
import $api from "../../../api";

const Career = () => {


    const [result, setResult] = useState([])
    useEffect(() => {
        $api
            .get('/mainPage')
            .then(res => {
                setResult(res.data[0])
            })
    }, [])


    return (
        <div className='career'>
            <div className="container">
                <div className="career__inner">
                    <img className='career__img' src={defaultImg(result?.['work-image']?.full_url)} alt="img"/>
                    <div className="career__wrapper">
                        <div className='txt'>{ result?.['work-subtitle'] || 'CAREER' }</div>
                        <h2 className="title">{ result?.['work-title'] || 'Career Title' }</h2>
                        <p className='desc'>{ result?.['work-desc'] || 'Career Description' }</p>
                        <Link className='link' to='/careers'>Find Out More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career
