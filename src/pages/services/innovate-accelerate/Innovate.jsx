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
import {getContent} from "../../../api/apiConfig";

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


    // content
    const [content, setContent] = useState([])
    const str = 'innovate_report_title' +
        'innovate_report_desc'
    useEffect(() => {
        const get = async () => {
            const res = await getContent(str)
            setContent(res)
        }
        get()
    }, [])


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
                title={ content?.innovate_report_title?.text || '...' }
                desc={ content?.innovate_report_desc?.text || '...' }
                img={reportImg}
            />
            <ContactForm />
        </div>
    )
}

export default Innovate
