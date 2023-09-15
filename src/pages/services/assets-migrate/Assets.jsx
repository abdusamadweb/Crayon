import React from 'react'
import Titles from "../titles-component/Titles";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import {useHref} from "react-router-dom";
import Bubles from "../bubles-component/Bubles";
import img1 from '../../../assets/images/services/optimize-software.png'
import img2 from '../../../assets/images/services/controll-business.png'
import img3 from '../../../assets/images/services/visibility-over.png'
import img from '../../../assets/images/services/assets-img.jpg'
import Baseline from "./baseline/Baseline";
import Report from "../report-component/Report";
import ContactForm from "../../../components/contact-form/ContactForm";

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


    return (
        <div className='assets'>
            <BreadCrumb href={href} />
            <Titles
                sub='ASSESS & MIGRATE'
                title='Rightsize your IT estate for a cloud future'
            />
            <Bubles
                sub='MICROSOFT BASELINE ENGAGEMENT'
                title='Begin Your Software Compliance Journey'
                data={data}
            />
            <Baseline />
            <Report
                sub='CRAYON REPORTS'
                title='Report: The State of IT Cost Optimization in 2023'
                desc='New global research into how businesses manage their budgets, where they struggle and how they are cutting costs.'
                img={img}
            />
            <ContactForm />
        </div>
    )
}

export default Assets
