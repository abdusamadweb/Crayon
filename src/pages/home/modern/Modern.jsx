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
                    <h4 className="title">{ result?.modernTitle1 || 'Title' }</h4>
                    <p className="desc">{ result?.modernDesc1 || '...' }</p>
                </div>
                {/*<Link className='link' to=''>Learn more</Link>*/}
            </div>
            <div className="modern__inner modern__wrapper">
                <div className='row flex-column between'>
                    <div>
                        <span className='txt'>MODERN WORK ASSESSMENTS - FUNDING AVAILABLE</span>
                        <h4 className="title">{ result?.modernTitle2 || 'Title' }</h4>
                        <p className="desc">{ result?.modernDesc2 || '...' }</p>
                    </div>
                    {/*<Link className='link' to=''>Learn more</Link>*/}
                </div>
                <img className='img' src={defaultImg(result?.['modern-image']?.full_url)} alt="img"/>
            </div>
        </div>
    )
}

export default Modern
