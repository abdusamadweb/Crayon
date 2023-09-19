import React from 'react'
import {useHref} from "react-router-dom";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../../../components/cloud-titles/Titles";
import ContactForm from "../../../components/contact-form/ContactForm";
import img1 from "../../../assets/images/software-partners/citrix-img.png";
import img2 from "../../../assets/images/software-partners/citrix-img2.png";
import Baseline from "./Baseline";

const Citrix = () => {

    const href = useHref()


    return (
        <div className='citrix software-partners'>
            <BreadCrumb href={href}/>
            <Titles
                sub='CITRIX'
                title='Digital workspace, network & security'
                desc1='Crayon is a Platinum partner and a long-term strategic partner of Citrix, with certified employees on both the technical and sales side.'
                desc2='As a top global Microsoft partner we have the expertise to integrate your Citrix solutions with Microsoft 365.'
            />
            <img className='microsoft__img container d-block' src={img1} alt="img"/>
            <Baseline />
            <ContactForm/>
            <div className='container'>
                <img className='microsoft__img' src={img2} alt="img"/>
            </div>
        </div>
    )
}

export default Citrix
