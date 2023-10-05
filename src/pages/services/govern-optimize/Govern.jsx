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
            .get('/govern-optimize')
            .then(res => setResult(res.data[0]))
    }, [href])


    // page title
    const storedData = localStorage.getItem('globalData')
    const dataa = JSON.parse(storedData)


    return (
        <div className='govern'>
            <BreadCrumb href={href} />
            <Titles
                sub='GOVERN & OPTIMIZE'
                title={result?.title || 'GOVERN & OPTIMIZE'}
            />
            <Bubles
                sub='CLOUD GOVERNANCE'
                title='Control, optimize, and forecast your cloud spend with three levels of governance designed to fit your needs.'
                data={data}
            />
            <Baseline />
            <Report
                sub={`${ dataa?.['app-name'] } REPORTS`}
                title='A Practical Guide to IT Cost Optimization'
                desc='IT cost optimization is the process of continually evaluating and configuring all the cloud resources that drive the applications, infrastructures, and workloads of your business.'
                img={reportImg}
            />
            <ContactForm />
        </div>
    )
}

export default Govern
