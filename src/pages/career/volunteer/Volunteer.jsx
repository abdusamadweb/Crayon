import './Volunteer.scss'
import React from 'react'
import vol1 from '../../../assets/images/career-volunteer1.jpg'
import vol2 from '../../../assets/images/career-volunteer2.png'
import vol3 from '../../../assets/images/career-volunteer3.jpg'

const Volunteer = () => {
    return (
        <div className='volunteer'>
            <div className="container">
                <h3 className="volunteer__title">Volunteering</h3>
                <div className="volunteer__inner row no-wrap between">
                    <div className='descs'>
                        <p className="desc">
                            Our focus on people goes beyond our business and reaches into the communities in which we all live. Since we were founded, we had a tradition of giving back to our local communities. In 2022, we formalized this into an initiative called Crayon Cares - an employee engagement and volunteering program that spans all 46 of our countries and reflects our philanthropic culture.
                        </p>
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
