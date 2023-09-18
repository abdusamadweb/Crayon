import React from 'react'
import Titles from "../component-titles/Titles";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import {useHref} from "react-router-dom";
import ContactForm from "../../../components/contact-form/ContactForm";
import microsoftImg from '../../../assets/images/microsoft-img.png'
import Baseline from "./baseline/Baseline";
import CrayonPlatforms from "../../../components/crayon-platforms/CrayonPlatforms";

const Microsoft = () => {

    const href = useHref()


    const arr = ['We are a top 10 global Microsoft LSP', 'A top 3 Global SPLA', 'Azure Expert MSP partner']


    return (
        <div className='microsoft cloud-providers'>
            <BreadCrumb href={href} />
            <Titles
                sub='MICROSOFT'
                title='A Proud Top 10 Global Microsoft Partner'
                desc1='If you need a partner with the highest expertise on Microsoft technology, and understand if you are buying the right solutions at the right price, choose Crayon.'
                desc2='With over 350 Microsoft Certified Professionals, we have Gold Partner status and have been named Partner of the Year in 2019 for Artificial Intelligence and Machine learning.'
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
