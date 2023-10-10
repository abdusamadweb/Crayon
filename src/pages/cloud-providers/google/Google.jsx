import React, {useEffect, useState} from 'react'
import {useHref} from "react-router-dom";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../../../components/cloud-titles/Titles";
import googleImg from "../../../assets/images/google-img.jpg";
import googleImg2 from "../../../assets/images/google-img2.jpg";
import ContactForm from "../../../components/contact-form/ContactForm";
import OfferReview from "./offer-review/OfferReview"
import Baseline from "./baseline/Baseline";
import {getContent} from "../../../api/apiConfig";

const Google = () => {

    const href = useHref()


    // content
    const [content, setContent] = useState([])
    const str = 'google_title' +
        'google_desc1' +
        'google_desc2' +
        'google_baseline_title1' +
        'google_baseline_title2' +
        'google_baseline_desc1' +
        'google_baseline_desc2' +
        'google_baseline_desc3' +
        'google_offer_title' +
        'google_offer_items'
    useEffect(() => {
        const get = async () => {
            const res = await getContent(str)
            setContent(res)
        }
        get()
    }, [])


    return (
        <div className='google cloud-providers'>
            <BreadCrumb href={href} />
            <Titles
                sub='GOOGLE CLOUD'
                title={ content?.google_title?.text || '...' }
                desc1={ content?.google_desc1?.text || '...' }
                desc2={ content?.google_desc2?.text || '...' }
            />
            <img className='microsoft__img container' src={googleImg} alt="img"/>
            <Baseline content={content} />
            <OfferReview content={content} />
            <ContactForm />
            <div className="container">
                <img className='microsoft__img2' src={googleImg2} alt="img"/>
            </div>
        </div>
    )
}

export default Google
