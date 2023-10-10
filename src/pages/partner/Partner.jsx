import React, {useEffect, useState} from 'react'
import Hero from "./hero/Hero";
import {useHref} from "react-router-dom";
import BreadCrumb from "../../components/bread-crumb/BreadCrumb";
import Grow from "./grow/Grow";
import CrayonPlatforms from "../../components/crayon-platforms/CrayonPlatforms";
import ContactForm from "../../components/contact-form/ContactForm";
import {getContent} from "../../api/apiConfig";

const Partner = () => {

    const href = useHref()


    // content
    const [content, setContent] = useState([])
    const str = 'partner_title partner_desc1 partner_desc2 partner_benefit_title partner_benefit_sub partner_business_title'
    useEffect(() => {
        const get = async () => {
            const res = await getContent(str)
            setContent(res)
        }
        get()
    }, [])


    return (
        <div className='partner'>
            <BreadCrumb href={href} />
            <Hero content={content} />
            <Grow content={content} />
            <CrayonPlatforms />
            <ContactForm />
        </div>
    )
}

export default Partner
