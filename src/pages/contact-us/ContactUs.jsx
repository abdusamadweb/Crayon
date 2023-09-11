import './ContactUs.scss'
import React from 'react'
import {useHref} from "react-router-dom";
import BreadCrumb from "../../components/bread-crumb/BreadCrumb";
import Offices from "../../components/offices/Offices";

const ContactUs = () => {

    const href = useHref()


    return (
        <div className='contact-us'>
            <BreadCrumb href={href} />
            <div className="container small">
                <div className="contact-us__titles">
                    <h2 className="title">Contact us</h2>
                    <div className="descs row no-wrap between g3 mb3">
                        <p className="desc">
                            When our customers need help – they can expect to access competent teammates in their own language
                        </p>
                        <p className="desc desc-small">
                            Our support desk operate in the same local market, speak the same language and have an implicit understanding of your business.
                        </p>
                    </div>
                    <div className='contacts'>
                        <h4 className="contacts__title">Get in touch with our team.</h4>
                        <div className='row pt1 pb2 border'>
                            <span className='contacts__txt'>Email Us</span>
                            <a className='link' href="mailto:contact.us@crayon.com">contact.us@crayon.com</a>
                        </div>
                        <div className='row no-wrap align-center g2 border'>
                            <div>
                                <div className='row py2 border'>
                                    <span className='contacts__txt'>Call Us</span>
                                    <a className='link' href="tel:+14696464038">+1 469 646 4038</a>
                                </div>
                                <div className='row py2'>
                                    <span className='contacts__txt'>Live Chat</span>
                                    <span className="txt2">See the bottom-right corner of your screen</span>
                                </div>
                            </div>
                            <div className='txt2 txt3'>
                                Hours: 8:00
                                <br/>
                                AM to 5:00
                                <br/>
                                PM CT
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Offices />
        </div>
    )
}

export default ContactUs
