import React from 'react'
import Hero from "./hero/Hero";
import {useHref} from "react-router-dom";
import BreadCrumb from "../../components/bread-crumb/BreadCrumb";
import Grow from "./grow/Grow";
import CrayonPlatforms from "../../components/crayon-platforms/CrayonPlatforms";
import ContactForm from "../../components/contact-form/ContactForm";

const Partner = () => {

    const href = useHref()


    return (
        <div className='partner'>
            <BreadCrumb href={href} />
            <Hero />
            <Grow />
            <CrayonPlatforms />
            <ContactForm />
        </div>
    )
}

export default Partner
