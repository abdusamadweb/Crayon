import React from 'react'
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../../../components/cloud-titles/Titles";
import img1 from "../../../assets/images/software-partners/flexera-img.jpg";
import Baseline from "./Baseline";
import ContactForm from "../../../components/contact-form/ContactForm";
import img2 from "../../../assets/images/software-partners/flexera-img2.jpg";
import {useHref} from "react-router-dom";

const Flexera = () => {

    const href = useHref()


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='flexera software-partners'>
            <BreadCrumb href={href}/>
            <Titles
                sub='FLEXERA'
                title='Release the value of your ITAM solution'
                desc1={`${ data?.['app-name'] } has built a dedicated Flexera team made of ex-Flexera consultants as well as passionate Flexnet Manager experts, to help organizations maximize the value of their Flexera Solutions.`}
                desc2='This team has been involved over the years in the most complex Flexera projects worldwide and has the ability to release the full potential of your Flexera investment.'
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

export default Flexera
