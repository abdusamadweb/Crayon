import React from 'react'
import {useHref} from "react-router-dom";
import img1 from "../../../assets/images/services/monitor.png";
import img2 from "../../../assets/images/services/manage.png";
import img3 from "../../../assets/images/services/operate.png";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../../../components/service-titles/Titles";
import Bubles from "../../../components/bubles/Bubles";
import ContactForm from "../../../components/contact-form/ContactForm";
import Baseline from "./baseline/Baseline";

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


    return (
        <div className='healthcare'>
            <BreadCrumb href={href} />
            <Titles
                sub='SOLUTIONS BY INDUSTRY'
                title='Healthcare'
                desc='Proficiency with data and AI services and solutions, modern work, and cloud migration.'
            />
            <Bubles
                sub='HEALTHCARE'
                title='Is your data estate ready for AI?'
                data={data}
            />
            <Baseline />
            <ContactForm />
        </div>
    )
}

export default Healthcare
