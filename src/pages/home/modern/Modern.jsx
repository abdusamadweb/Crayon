import './Modern.scss'
import React from 'react'
import img from '../../../assets/images/modern-img.png'

const Modern = () => {
    return (
        <div className='modern'>
            <div className="modern__inner row flex-column between">
                <div>
                    <span className='txt'>MODERN WORK ASSESSMENTS - FUNDING AVAILABLE</span>
                    <h4 className="title">Modern Work</h4>
                    <p className="desc">
                        Balance employee productivity, company security, and employee experience.
                    </p>
                </div>
                {/*<Link className='link' to=''>Learn more</Link>*/}
            </div>
            <div className="modern__inner modern__wrapper">
                <div className='row flex-column between'>
                    <div>
                        <span className='txt'>MODERN WORK ASSESSMENTS - FUNDING AVAILABLE</span>
                        <h4 className="title">Crayon Named a Leader by Gartner for the 2nd Consecutive Year</h4>
                        <p className="desc">
                            2021 Gartner Magic Quadrant for Software Asset Management Managed Services
                        </p>
                    </div>
                    {/*<Link className='link' to=''>Learn more</Link>*/}
                </div>
                <img className='img' src={img} alt="img"/>
            </div>
        </div>
    )
}

export default Modern
