import './Volunteer.scss'
import React from 'react'
import vol1 from '../../../assets/images/career-volunteer1.jpg'
import vol2 from '../../../assets/images/career-volunteer2.png'
import vol3 from '../../../assets/images/career-volunteer3.jpg'

const Volunteer = ({ content }) => {


    return (
        <div className='volunteer'>
            <div className="container">
                <h3 className="volunteer__title">{ content?.career_volunteer_title?.text || '...' }</h3>
                <div className="volunteer__inner row no-wrap between">
                    <div className='descs'>
                        <p className="desc">{ content?.career_volunteer_desc?.text || '...' }</p>
                        <img className='img' src={vol1} alt="img"/>
                    </div>
                    <div className="imgs">
                        <img className='img' src={vol2} alt="img"/>
                        <img className='img' src={vol3} alt="img"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Volunteer
