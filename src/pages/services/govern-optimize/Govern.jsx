import React, {useEffect, useState} from 'react'
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../../../components/service-titles/Titles";
import Bubles from "../../../components/bubles/Bubles";
import {useHref} from "react-router-dom";
import img1 from "../../../assets/images/services/level1.png";
import img2 from "../../../assets/images/services/level2.png";
import img3 from "../../../assets/images/services/level3.png";
import Baseline from "./baseline/Baseline";
import Report from "../component-report/Report";
import reportImg from "../../../assets/images/services/govern-report.jpg";
import ContactForm from "../../../components/contact-form/ContactForm";
import $api from "../../../api";
import {getContent} from "../../../api/apiConfig";

const Govern = () => {

    const href = useHref()


    const data = [
        {
            img: img1,
            desc: 'Level 1: Cloud Economics Assessment'
        },
        {
            img: img2,
            desc: 'Level 2: Cloud Economics & Billing Reporting'
        },
        {
            img: img3,
            desc: 'Level 3: Cloud Governance Managed Service'
        },
    ]


    const [result, setResult] = useState([])
    useEffect(() => {
        $api
            .get(`/services/46`)
            .then(res => setResult(res.data))
    }, [href])


    // page title
    const storedData = localStorage.getItem('globalData')
    const dataa = JSON.parse(storedData)


    // content
    const [content, setContent] = useState([])
    const str = 'govern__baseline_title' +
        'govern_baseline_title2' +
        'govern_baseline_desc' +
        'govern_baseline_items' +
        'govern_report_title' +
        'govern_report_desc'
    useEffect(() => {
        const get = async () => {
            const res = await getContent(str)
            setContent(res)
        }
        get()
    }, [])


    return (
        <div className='govern'>
            <BreadCrumb href={href} />
            <Titles
                sub='GOVERN & OPTIMIZE'
                title={result?.title || 'GOVERN & OPTIMIZE'}
            />
            <Bubles
                sub='CLOUD GOVERNANCE'
                title={result?.title2 || 'Bubles'}
                data={data}
            />
            <Baseline content={content} />
            <Report
                sub={`${ dataa?.['app-name'] } REPORTS`}
                title={ content?.govern_report_title?.text || '...' }
                desc={ content?.govern_report_desc?.text || '...' }
                img={reportImg}
            />
            <ContactForm />
        </div>
    )
}

export default Govern
