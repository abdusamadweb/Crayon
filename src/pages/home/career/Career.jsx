import './Career.scss'
import React from 'react'
import {Link} from "react-router-dom";
import img from '../../../assets/images/career-img.jpg'

const Career = () => {
    return (
        <div className='career'>
            <div className="container">
                <div className="career__inner">
                    <img className='career__img' src={img} alt="img"/>
                    <div className="career__wrapper">
                        <div className='txt'>WE VALUE AND INVEST IN THE PEOPLE BEHIND INNOVATION</div>
                        <h2 className="title">Come work at Crayon</h2>
                        <p className='desc'>
                            Join our global team that tackles tomorrow’s technology. Crayon is a catalyst and creator of progress and possibilities because we infuse people’s know-how. Ideas and innovation rarely occur in isolation. In the Crayon community, we discover, design, and develop the journey to digital transformation together.
                        </p>
                        <Link className='link' to='/careers'>Find Out More</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career
