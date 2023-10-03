import './ContactUs.scss'
import React from 'react'
import {useHref} from "react-router-dom";
import BreadCrumb from "../../components/bread-crumb/BreadCrumb";
import Offices from "../../components/offices/Offices";
import {formatPhone} from "../../assets/scripts/global";

const ContactUs = () => {


    const href = useHref()


    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


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
                        <div className='row pt2 pb2 border'>
                            <span className='contacts__txt'>Email Us</span>
                            <a className='link' href={`mailto: ${data?.email}`}>{ data?.email || '...' }</a>
                        </div>
                        <div className='row no-wrap between align-center g2 border'>
                            <div className='row py2'>
                                <span className='contacts__txt'>Call Us</span>
                                <a className='link' href={`tel: ${data?.phoneNumber}`}>{ formatPhone(data?.phoneNumber || '+12345') }</a>
                            </div>
                            <div className='txt2 txt3'>
                                Hours: 8:00
                                <br/>
                                AM to 5:00
                                <br/>
                                PM CT
                            </div>
                        </div>
                        <address className='address py2'>{ data?.address || '...' }</address>
                    </div>
                </div>
            </div>
            <Offices />
        </div>
    )
}

export default ContactUs
