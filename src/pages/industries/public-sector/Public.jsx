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

const Public = () => {

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
        <div className='public'>
            <BreadCrumb href={href} />
            <Titles
                sub='SOLUTIONS BY INDUSTRY'
                title='Public Sector'
                desc='Expertise in cybersecurity, on-premises VS cloud assessments, and cloud migration make Crayon the right choice to serve the public sector.'
            />
            <Bubles
                sub='PUBLIC SECTOR'
                title='Is your cybersecurity insurance requiring more?'
                data={data}
            />
            <Baseline />
            <ContactForm />
        </div>
    )
}

export default Public
