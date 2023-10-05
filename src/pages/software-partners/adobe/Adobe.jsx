import React from 'react'
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import {useHref} from "react-router-dom";
import Titles from "../../../components/cloud-titles/Titles";
import ContactForm from "../../../components/contact-form/ContactForm";
import img1 from "../../../assets/images/software-partners/adobe-img.jpg";
import img2 from "../../../assets/images/software-partners/adobe-img2.png";
import Baseline from "./Baseline";

const Adobe = () => {

    const href = useHref()


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='adobe software-partners'>
            <BreadCrumb href={href}/>
            <Titles
                sub='ADOBE'
                title={`${ data?.['app-name'] } knows Adobe`}
                desc1='As one of the few Platinum certified resellers, our expert consultants are well equipped to help you find the best solution for your company.'
                desc2='We will get you the most competitive pricing, a dedicated contact person, the fastest support and control of your licenses.
                You won’t need your credit card – we will facilitate your Adobe licensing invoice with full visibility of what you are paying for.'
            />
            <img className='microsoft__img container d-block' src={img1} alt="img"/>
            <Baseline />
            <ContactForm/>
            <div className='container'>
                <img className='microsoft__img2' src={img2} alt="img"/>
            </div>
        </div>
    )
}

export default Adobe
