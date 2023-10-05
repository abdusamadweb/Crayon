import './Partners.scss'
import React, {useEffect, useState} from 'react'
import $api from "../../../api";
import {defaultImg} from "../../../assets/scripts/global";

const Partners = () => {


    const [result, setResult] = useState([])
    useEffect(() => {
        $api
            .get('/mainPage')
            .then(res => {
                setResult(res.data[0])
            })
    }, [])


    const [partners, setPartners] = useState([])
    useEffect(() => {
        $api
            .get('/partners')
            .then(res => setPartners(res.data))
    }, [])


    return (
        <div className='partners'>
            <div className="container">
                <div className="partners__inner">
                    <div className="partners__titles">
                        <span className="txt">OUR PARTNERS</span>
                        <h4 className="title">{ result?.['partners-title'] || 'Partners Title' }</h4>
                    </div>
                    <div className="partners__lists">
                        <span className="txt">SOFTWARE PARTNERS</span>
                        <ul className="list">
                            {
                                partners?.map(i => (
                                    <li className="item" key={i.id}>
                                        <img className='item__img' src={defaultImg(i.img?.full_url)} alt="img"/>
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

export default Partners
