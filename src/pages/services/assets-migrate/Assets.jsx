import React, {useEffect, useState} from 'react'
import Titles from "../../../components/service-titles/Titles";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import {useHref} from "react-router-dom";
import Bubles from "../../../components/bubles/Bubles";
import img1 from '../../../assets/images/services/optimize-software.png'
import img2 from '../../../assets/images/services/controll-business.png'
import img3 from '../../../assets/images/services/visibility-over.png'
import img from '../../../assets/images/services/assets-img.jpg'
import Baseline from "./baseline/Baseline";
import Report from "../component-report/Report";
import ContactForm from "../../../components/contact-form/ContactForm";
import $api from "../../../api";
import {getContent} from "../../../api/apiConfig";

const Assets = () => {

    const href = useHref()


    const data = [
        {
            img: img1,
            desc: 'Optimize Software Investments'
        },
        {
            img: img2,
            desc: 'Control Business and Legal Risk'
        },
        {
            img: img3,
            desc: 'Gain Visibility Over Your IT Estate'
        },
    ]


    const [result, setResult] = useState([])
    useEffect(() => {
        $api
            .get(`/services/45`)
            .then(res => setResult(res.data))
    }, [href])


    // page title
    const storedData = localStorage.getItem('globalData')
    const dataa = JSON.parse(storedData)


    // content
    const [content, setContent] = useState([])
    const str = 'assess_baseline_title1' +
        'assess_baseline_title2' +
        'assess_baseline_title3' +
        'assess_baseline_title4' +
        'assess_baseline_sub' +
        'assess_baseline_desc1' +
        'assess_baseline_desc2' +
        'assess_baseline_desc3' +
        'assess_baseline_items1' +
        'assess_baseline_items2' +
        'assess_report_title' +
        'assess_report_desc'
    useEffect(() => {
        const get = async () => {
            const res = await getContent(str)
            setContent(res)
        }
        get()
    }, [])


    return (
        <div className='assets'>
            <BreadCrumb href={href} />
            <Titles
                sub='ASSESS & MIGRATE'
                title={result?.title || 'ASSESS & MIGRATE'}
            />
            <Bubles
                sub='MICROSOFT BASELINE ENGAGEMENT'
                title={result?.title2 || 'Bubles'}
                data={data}
            />
            <Baseline img={result?.image?.full_url} content={content} />
            <Report
                sub={`${ dataa?.['app-name'] } REPORTS`}
                title={ content?.assess_report_title?.text || '...' }
                desc={ content?.assess_report_desc?.text || '...' }
                img={img}
            />
            <ContactForm />
        </div>
    )
}

export default Assets
