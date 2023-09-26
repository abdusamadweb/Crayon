import './Subscribe.scss'
import React from 'react'
import img from '../../../assets/images/subs-img.jpg'
import {Link, useHref} from "react-router-dom";
import ContactForm from "../../../components/contact-form/ContactForm";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";

const Subscribe = () => {

    const href = useHref()


    return (
        <div className='subs resources'>
            <BreadCrumb href={href} />
            <div className="container small">
                <div className="subs__inner">
                    <div>
                        <span className="sub">OPT-IN</span>
                        <h1 className="title">Subscribe to our monthly License Desk Newsletter</h1>
                    </div>
                    <div>
                        <h3 className='title2'>Grow your competitive edge with our monthly insights</h3>
                    </div>
                </div>
                <div className="subs__inner subs__wrapper">
                    <img className='img' src={img} alt="img"/>
                    <div>
                        <span className='bold'>Subscribers receive:</span>
                        <ul className="list">
                            <li className="item dot">Industry knowledge from our cloud experts </li>
                            <li className="item dot">Updates regarding licenses, products, pricing, promotions, and other relevant information  </li>
                            <li className="item dot">Insights, trends, and recommendations to optimize your IT estate </li>
                            <li className="item dot">Open access to <Link className='link' to='/resources/newsletters'>previous issues</Link></li>
                        </ul>
                        <span className='bold italic'>Opt-in to stay ahead of the latest industry trends!</span>
                    </div>
                </div>
                <div className="subs__quote">
                    <h3 className="title double-dot">
                        "Crayon's ability to share knowledge 'from the trenches' made this an incredible opportunity for my company. I don't think you will ever fully understand how profoundly this has changed our overall success."
                    </h3>
                    <span className='txt'><span>// </span> Ben Allen, CIO of Probi</span>
                </div>
            </div>
            <ContactForm />
        </div>
    )
}

export default Subscribe
