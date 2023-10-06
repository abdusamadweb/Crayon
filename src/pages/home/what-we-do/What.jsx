import './What.scss'
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import navList from "../../../assets/scripts/navList";
import $api from "../../../api";

const What = () => {


    const [result, setResult] = useState([])
    useEffect(() => {
        $api
            .get('/services')
            .then(res => setResult(res.data))
    }, [])


    return (
        <div className='what'>
            <div className="container">
                <div className="what__inner">
                    <h2 className="what__title">What we do</h2>
                    <div className="what__wrapper">
                        <ul className='list'>
                            {
                                result?.map(i => (
                                    <li className='item'>
                                        <span className='item__txt'>{ i.subtitle }</span>
                                        <h5 className="item__title">{ i.title }</h5>
                                        <Link className='item__link' to={'/services/' + i.link}>Read more</Link>
                                    </li>
                                ))
                            }
                        </ul>
                        <ul className='links'>
                            <li className="txt item">CLOUD PROVIDERS</li>
                            {
                                navList[2].list.map(i => (
                                    <li className='item' key={i.title}>
                                        <Link className='item__link' to={'/cloud-providers' + i.link}>{ i.title }</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default What
