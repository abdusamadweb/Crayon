import './Partners.scss'
import React from 'react'
import partner1 from '../../../assets/images/partner1.png'
import partner2 from '../../../assets/images/partner2.png'
import partner3 from '../../../assets/images/partner3.png'
import partner4 from '../../../assets/images/partner4.png'
import partner5 from '../../../assets/images/partner5.png'
import partner6 from '../../../assets/images/partner6.png'

const Partners = () => {
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
                            <li className="item">
                                <img className='item__img' src={partner1} alt="img"/>
                            </li>
                            <li className="item">
                                <img className='item__img' src={partner2} alt="img"/>
                            </li>
                            <li className="item">
                                <img className='item__img' src={partner3} alt="img"/>
                            </li>
                            <li className="item">
                                <img className='item__img' src={partner4} alt="img"/>
                            </li>
                            <li className="item">
                                <img className='item__img' src={partner5} alt="img"/>
                            </li>
                            <li className="item">
                                <img className='item__img' src={partner6} alt="img"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partners
