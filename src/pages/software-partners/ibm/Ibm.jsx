import React from 'react'
import {useHref} from "react-router-dom";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../../../components/cloud-titles/Titles";
import img1 from "../../../assets/images/software-partners/ibm-img.jpg";
import Baseline from "./Baseline";
import ContactForm from "../../../components/contact-form/ContactForm";
import img2 from "../../../assets/images/software-partners/ibm-img2.jpg";

const Ibm = () => {

    const href = useHref()


    return (
        <div className='ibm software-partners'>
            <BreadCrumb href={href}/>
            <Titles
                sub='IBM'
                title='Experts in IBM license and contract optimization'
                desc1='Crayon is a global IBM Platinum Business Partner authorized to help customers with their IBM software in more than 30 countries across the world.'
                desc2='Crayon is also certified across the IBM software stack, allowing customers to use Crayon as a one-stop-shop.
                Crayon are experts at helping clients remain compliant towards IBM, while having the optimized commercial agreement with minimized cost attached to it.'
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

export default Ibm
