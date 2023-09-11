import './CrayonPlatforms.scss'
import React from 'react'
import {Link} from "react-router-dom";
import platform1 from '../../assets/images/crayon-platforms/empower.png'
import platform2 from '../../assets/images/crayon-platforms/cloud.jpg'
import platform3 from '../../assets/images/crayon-platforms/COR.jpg'

const CrayonPlatforms = () => {

    const crayonPlatforms = [
        {
            img: platform1,
            sub: 'CRAYON',
            title: 'Empower-iQ',
            desc: 'Get the most from your Microsoft investments through Empower-iQ, a dedicated portal for Microsoft Software Training expenses.',
            link: '/'
        },
        {
            img: platform2,
            sub: 'CRAYON',
            title: 'Cloud-iQ',
            desc: 'Manage your cloud products, services, and economics across a single platform.',
            link: '/'
        },
        {
            img: platform3,
            sub: 'CRAYON',
            title: 'Crayon Online Room: COR',
            desc: 'Crayon provides a simplified, managed cloud service to give you all the benefits of the cloud, without any of the risks. Crayon\'s experience and expertise will ensure that costs are kept low and that the predictability is high.',
            link: '/'
        },
    ]


    return (
        <div className='crayon-platforms'>
            <div className="container small">
                <ul className='crayon-platforms__list'>
                    {
                        crayonPlatforms?.map(i => (
                            <li className="item" key={i.title}>
                                <div>
                                    <img className='item__img' src={i.img} alt="img"/>
                                    <span className="sub">{ i.sub }</span>
                                    <h5 className="item__title">{ i.title }</h5>
                                    <p className='item__desc'>{ i.desc }</p>
                                </div>
                                <Link className='item__btn read-more' to={i.link}>Read More</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default CrayonPlatforms
