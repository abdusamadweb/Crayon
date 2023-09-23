import './Talent.scss'
import React from 'react'
import item1 from '../../../../assets/images/diversity/future1.png'
import item2 from '../../../../assets/images/diversity/future2.png'
import item3 from '../../../../assets/images/diversity/future3.png'
import item4 from '../../../../assets/images/diversity/future4.png'

const Talent = () => {

    const arr = [
        {
            img: item1,
            desc: 'As a candidate, your interview panel at Crayon will have diverse representation. This is not just a goal; it is our requirement that a diverse representative be on every hiring panel.'
        },
        {
            img: item2,
            desc: 'Crayon leverages values-based interviewing to acknowledge gender differences and help to alleviate unconscious bias and impartiality as we assess candidates for cultural fit.'
        },
        {
            img: item3,
            desc: 'Recruiters present diverse candidates and interview slates to hiring managers.'
        },
        {
            img: item4,
            desc: 'To acquire diverse talent successfully, we partner with strategic organizations, including the Women Executive Channel Advisory Network (WECAN).'
        }
    ]


    return (
        <div className='talent'>
            <div className="container small">
                <div className="talent__inner">
                    <h2 className="title">Driving an Inclusive Culture</h2>
                    <p className="desc">
                        <b>Employee Advisory Council:</b> Represents Crayon employees through feedback and evaluation of current programs and recommendations for future initiatives to drive employee success, development, and morale.
                    </p>
                    <p className="desc">
                        <b>Crayon Culture Committee:</b> This committee is dedicated to promoting and honoring diversity in our workplace and seeks to leverage & encourage varying perspectives within Crayon.
                    </p>
                </div>
                <div className="talent__wrapper">
                    <h2 className="title">Talent for the future</h2>
                    <ul className="list">
                        {
                            arr.map((i, index) => (
                                <li className="item" key={index}>
                                    <div className="item__imgs grid-center">
                                        <img className='img' src={i.img} alt="img"/>
                                    </div>
                                    <p className="item__desc desc">{ i.desc }</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Talent
