import './Human.scss'
import React from 'react'
import img from '../../../../assets/images/diversity/diversity-img2.jpg'

const Human = () => {


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='human'>
            <div className="container small">
                <div className="human__inner align-center">
                    <img className='img padd' src={img} alt="img"/>
                    <div>
                        <h4 className="title double-dot">
                            At { data?.['app-name'] }, we firmly believe that our people are what make us truly remarkable. They are the foundation of our organization, and we strive to create an environment that celebrates diversity and inclusivity. We value and respect all perspectives and encourage innovation at every turn.
                        </h4>
                        <span className="txt">
                            <span>//</span> Bria Field, VP of Human Resources
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Human
