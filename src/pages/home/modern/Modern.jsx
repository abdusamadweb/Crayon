import './Modern.scss'
import React, {useEffect, useState} from 'react'
import $api from "../../../api";
import {defaultImg} from "../../../assets/scripts/global";

const Modern = () => {


    const [result, setResult] = useState([])
    useEffect(() => {
        $api
            .get('/mainPage')
            .then(res => {
                setResult(res.data[0])
            })
    }, [])


    return (
        <div className='modern'>
            <div className="modern__inner row flex-column between">
                <div>
                    <span className='txt'>MODERN WORK ASSESSMENTS - FUNDING AVAILABLE</span>
                    <h4 className="title">Modern Work</h4>
                    <p className="desc">
                        Balance employee productivity, company security, and employee experience.
                    </p>
                </div>
                {/*<Link className='link' to=''>Learn more</Link>*/}
            </div>
            <div className="modern__inner modern__wrapper">
                <div className='row flex-column between'>
                    <div>
                        <span className='txt'>MODERN WORK ASSESSMENTS - FUNDING AVAILABLE</span>
                        <h4 className="title">Crayon Named a Leader by Gartner for the 2nd Consecutive Year</h4>
                        <p className="desc">
                            2021 Gartner Magic Quadrant for Software Asset Management Managed Services
                        </p>
                    </div>
                    {/*<Link className='link' to=''>Learn more</Link>*/}
                </div>
                <img className='img' src={defaultImg(result?.['modern-image']?.full_url)} alt="img"/>
            </div>
        </div>
    )
}

export default Modern
