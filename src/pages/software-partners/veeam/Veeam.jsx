import React from 'react'
import {useHref} from "react-router-dom";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../../../components/cloud-titles/Titles";
import img1 from "../../../assets/images/software-partners/veeam-img.jpg";
import Baseline from "./Baseline";
import ContactForm from "../../../components/contact-form/ContactForm";
import img2 from "../../../assets/images/software-partners/veeam-img2.png";

const Veeam = () => {

    const href = useHref()


    return (
        <div className='veeam software-partners'>
            <BreadCrumb href={href}/>
            <Titles
                sub='VEEAM'
                title='Back up for cloud, virtual and physical'
                desc1='Crayon offer license agreements for Veeam backup solutions- a simple, flexible and reliable backup product for your datacentre and cloud through one platform.'
                desc2='Veeam solution is a fit for companies of any size, private or public sector.'
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

export default Veeam
