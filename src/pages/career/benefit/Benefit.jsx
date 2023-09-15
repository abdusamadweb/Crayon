import './Benefit.scss'
import React from 'react'
import img from '../../../assets/images/career-benefit-img.jfif'

const Benefit = () => {
    return (
        <div className='benefit'>
            <div className="container">
                <div className="benefit__inner row no-wrap between">
                    <img className='benefit__img' src={img} alt="img"/>
                    <div>
                        <h3 className="benefit__title">Benefits</h3>
                        <p className="benefit__desc">
                            Crayon offers competitive benefits for all full-time employees. Some of our notable benefits include:
                        </p>
                        <ul className="benefit__list">
                            <li className='item'>Flex time off</li>
                            <li className='item'>401k matching up to 4%</li>
                            <li className='item'>HRA (Cancer & fertility treatment)</li>
                            <li className='item'>Lifestyle spending account</li>
                            <li className='item'>Presidents Club vacation for top-performing employees</li>
                        </ul>
                        <a className='btn' href="https://www.linkedin.com/jobs/search/?f_C=46899%2C2812437%2C333814%2C11842925%2C3218464%2C2217184%2C94650&geoId=92000000&location=Worldwide" target='_blank'>Open Positions</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit