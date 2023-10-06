import React, {useEffect, useState} from 'react'
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../../../components/service-titles/Titles";
import Bubles from "../../../components/bubles/Bubles";
import Report from "../component-report/Report";
import ContactForm from "../../../components/contact-form/ContactForm";
import {useHref} from "react-router-dom";
import img1 from "../../../assets/images/services/new-revenue.png";
import img2 from "../../../assets/images/services/cut-costs.png";
import img3 from "../../../assets/images/services/increase.png";
import reportImg from "../../../assets/images/services/innovate-report.jpg";
import Baseline from "./baseline/Baseline";
import $api from "../../../api";

const Innovate = () => {

    const href = useHref()


    const data = [
        {
            img: img1,
            desc: 'Create new revenue streams'
        },
        {
            img: img2,
            desc: 'Cut costs through automation and optimization'
        },
        {
            img: img3,
            desc: 'Increase operational efficiency'
        },
    ]


    const [result, setResult] = useState([])
    useEffect(() => {
        $api
            .get(`/services/48`)
            .then(res => setResult(res.data))
    }, [href])


    return (
        <div className='innovate'>
            <BreadCrumb href={href} />
            <Titles
                sub='INNOVATE & ACCELERATE'
                title={result?.title || 'INNOVATE & ACCELERATE'}
            />
            <Bubles
                sub='AI SOLUTIONS SERVICES'
                title={result?.title2 || 'Bubles'}
                data={data}
            />
            <Baseline />
            <Report
                sub='NEW BLOG'
                title='AI Image Generation Reshapes the Creative Industry'
                desc='AI Image Generation is going viral. Tools use multiple types of artificial intelligence to generate high-quality, photorealistic images from text prompts.'
                img={reportImg}
            />
            <ContactForm />
        </div>
    )
}

export default Innovate
