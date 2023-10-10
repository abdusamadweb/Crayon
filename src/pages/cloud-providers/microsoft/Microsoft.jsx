import React, {useEffect, useState} from 'react'
import Titles from "../../../components/cloud-titles/Titles";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import {useHref} from "react-router-dom";
import ContactForm from "../../../components/contact-form/ContactForm";
import microsoftImg from '../../../assets/images/microsoft-img.png'
import Baseline from "./baseline/Baseline";
import CrayonPlatforms from "../../../components/crayon-platforms/CrayonPlatforms";
import {getContent} from "../../../api/apiConfig";

const Microsoft = () => {

    const href = useHref()


    const arr = ['We are a top 10 global Microsoft LSP', 'A top 3 Global SPLA', 'Azure Expert MSP partner']


    // content
    const [content, setContent] = useState([])
    const str = 'microsoft_title' +
        'microsoft_desc1' +
        'microsoft_desc2' +
        'microsoft_baseline_title1' +
        'microsoft_baseline_title2' +
        'microsoft_baseline_desc1' +
        'microsoft_baseline_desc2'
    useEffect(() => {
        const get = async () => {
            const res = await getContent(str)
            setContent(res)
        }
        get()
    }, [])


    return (
        <div className='microsoft cloud-providers'>
            <BreadCrumb href={href} />
            <Titles
                sub='MICROSOFT'
                title={ content?.microsoft_title?.text || '...' }
                desc1={ content?.microsoft_desc1?.text || '...' }
                desc2={ content?.microsoft_desc1?.text || '...' }
                strong='Partner of the Year'
                list={arr}
            />
            <img className='microsoft__img container' src={microsoftImg} alt="img"/>
            <Baseline content={content} />
            <CrayonPlatforms />
            <ContactForm />
        </div>
    )
}

export default Microsoft
