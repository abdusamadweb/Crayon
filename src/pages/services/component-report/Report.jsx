import './Report.scss'
import React from 'react'

const Report = ({ sub, title, desc, img }) => {
    return (
        <div className='report'>
            <div className="report__wrapper">
                <div className="container">
                    <div className="report__inner">
                        <div className="report__titles">
                            <span className="sub">{ sub }</span>
                            <h3 className="title">{ title }</h3>
                            <p className="desc">{ desc }</p>
                        </div>
                        <img className='report__img' src={img} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report
