import React from 'react'
import {useHref} from "react-router-dom";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../../../components/cloud-titles/Titles";
import googleImg from "../../../assets/images/google-img.jpg";
import googleImg2 from "../../../assets/images/google-img2.jpg";
import ContactForm from "../../../components/contact-form/ContactForm";
import OfferReview from "./offer-review/OfferReview"
import Baseline from "./baseline/Baseline";

const Google = () => {

    const href = useHref()


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='google cloud-providers'>
            <BreadCrumb href={href} />
            <Titles
                sub='MICROSOFT'
                title='More than just a search engine'
                desc1={`${ data?.['app-name'] } has Premier Status, with 50+ certifications, and is a Global Google Partner.`}
                desc2='We are here to help you succeed based on your business needs, from beginning your cloud journey to innovating with data, artificial intelligence (AI), and machine learning (ML).'
            />
            <img className='microsoft__img container' src={googleImg} alt="img"/>
            <Baseline />
            <OfferReview />
            <ContactForm />
            <div className="container">
                <img className='microsoft__img2' src={googleImg2} alt="img"/>
            </div>
        </div>
    )
}

export default Google
