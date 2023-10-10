import React, {useEffect, useState} from 'react'
import {useHref} from "react-router-dom";
import img1 from "../../../assets/images/services/monitor.png";
import img2 from "../../../assets/images/services/manage.png";
import img3 from "../../../assets/images/services/operate.png";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../../../components/service-titles/Titles";
import Bubles from "../../../components/bubles/Bubles";
import ContactForm from "../../../components/contact-form/ContactForm";
import Baseline from "./baseline/Baseline";
import {getContent} from "../../../api/apiConfig";

const Healthcare = () => {

    const href = useHref()


    const data = [
        {
            img: img1,
            desc: 'Monitor'
        },
        {
            img: img2,
            desc: 'Manage'
        },
        {
            img: img3,
            desc: 'Operate'
        },
    ]


    // content
    const [content, setContent] = useState([])
    const str = 'healthcare_title' +
        'healtcare_desc' +
        'healthcare_bubles_title' +
        'healthcare_baseline_title1' +
        'healthcare_baseline_title2' +
        'healthcare_baseline_sub1' +
        'healthcare_baseline_sub2' +
        'healthcare_baseline_desc1' +
        'healthcare_baseline_desc2'
    useEffect(() => {
        const get = async () => {
            const res = await getContent(str)
            setContent(res)
        }
        get()
    }, [])


    return (
        <div className='healthcare'>
            <BreadCrumb href={href} />
            <Titles
                sub='SOLUTIONS BY INDUSTRY'
                title={ content?.healthcare_title?.text || '...' }
                desc={ content?.healtcare_desc?.text || '...' }
            />
            <Bubles
                sub={ content?.healthcare_title?.text || '...' }
                title={ content?.healthcare_bubles_title?.text || '...' }
                data={data}
            />
            <Baseline content={content} />
            <ContactForm />
        </div>
    )
}

export default Healthcare
