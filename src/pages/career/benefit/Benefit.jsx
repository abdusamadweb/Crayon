import './Benefit.scss'
import React from 'react'
import img from '../../../assets/images/career-benefit-img.jfif'

const Benefit = ({ content }) => {


    const list = content?.career_benefit_items?.text?.split('\n')


    return (
        <div className='benefit'>
            <div className="container">
                <div className="benefit__inner row no-wrap between">
                    <img className='benefit__img' src={img} alt="img"/>
                    <div>
                        <h3 className="benefit__title">{ content?.career_benefit_title?.text || '...' }</h3>
                        <p className="benefit__desc">{ content?.career_benefit_desc?.text || '...' }</p>
                        <ul className="benefit__list">
                            {
                                list?.map(i => (
                                    <li className='item' key={i}>{ i }</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefit
