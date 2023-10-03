import './Partners.scss'
import React, {useEffect, useState} from 'react'
import $api from "../../../api";
import {defaultImg} from "../../../assets/scripts/global";

const Partners = () => {


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
                        <h4 className="title">
                            We are accredited and have strong strategic relationships with all leading technology vendors worldwide.
                        </h4>
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
