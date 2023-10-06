import React from 'react'
import Titles from "../../../components/cloud-titles/Titles";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import {useHref} from "react-router-dom";
import ContactForm from "../../../components/contact-form/ContactForm";
import microsoftImg from '../../../assets/images/microsoft-img.png'
import Baseline from "./baseline/Baseline";
import CrayonPlatforms from "../../../components/crayon-platforms/CrayonPlatforms";

const Microsoft = () => {

    const href = useHref()


    const arr = ['We are a top 10 global Microsoft LSP', 'A top 3 Global SPLA', 'Azure Expert MSP partner']


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='microsoft cloud-providers'>
            <BreadCrumb href={href} />
            <Titles
                sub='MICROSOFT'
                title='A Top 10 Global Microsoft Partner with Pride'
                desc1={`Choose ${ data?.['app-name'] } if you require a partner with the greatest level of knowledge in Microsoft technology and want to know if you are purchasing the appropriate solutions at the appropriate cost.`}
                desc2='We hold Gold Partner accreditation, have over 350 Microsoft Certified Professionals, and were recognized as the AI and ML Partner of the Year in 2019.'
                strong='Partner of the Year'
                list={arr}
            />
            <img className='microsoft__img container' src={microsoftImg} alt="img"/>
            <Baseline />
            <CrayonPlatforms />
            <ContactForm />
        </div>
    )
}

export default Microsoft
