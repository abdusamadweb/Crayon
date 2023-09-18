import React from 'react'
import {useHref} from "react-router-dom";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../component-titles/Titles";
import googleImg from "../../../assets/images/google-img.jpg";
import googleImg2 from "../../../assets/images/google-img2.jpg";
import ContactForm from "../../../components/contact-form/ContactForm";
import OfferReview from "./offer-review/OfferReview"
import Baseline from "./baseline/Baseline";

const Google = () => {

    const href = useHref()


    return (
        <div className='google cloud-providers'>
            <BreadCrumb href={href} />
            <Titles
                sub='MICROSOFT'
                title='A Proud Top 10 Global Microsoft Partner'
                desc1='If you need a partner with the highest expertise on Microsoft technology, and understand if you are buying the right solutions at the right price, choose Crayon.'
                desc2='With over 350 Microsoft Certified Professionals, we have Gold Partner status and have been named Partner of the Year in 2019 for Artificial Intelligence and Machine learning.'
            />
            <img className='microsoft__img container' src={googleImg} alt="img"/>
            <Baseline />
            <OfferReview />
            <ContactForm />
            <img className='microsoft__img container' src={googleImg2} alt="img"/>
        </div>
    )
}

export default Google