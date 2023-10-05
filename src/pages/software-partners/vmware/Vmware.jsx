import React from 'react'
import {useHref} from "react-router-dom";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../../../components/cloud-titles/Titles";
import img1 from "../../../assets/images/software-partners/vmware-img.jpg";
import Baseline from "./Baseline";
import ContactForm from "../../../components/contact-form/ContactForm";
import img2 from "../../../assets/images/software-partners/vmware-img2.jpg";

const Vmware = () => {

    const href = useHref()


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='veeam software-partners'>
            <BreadCrumb href={href}/>
            <Titles
                sub='VMWARE'
                title='Software-Defined Data Center'
                desc1={`${ data?.['app-name'] } holds several competencies with VMware to support our customers needs and offer flexibility in acquiring software, on premise and Cloud, such as VMware Managed Service Provider, VMware Aggregator and VMware Solution Provider.`}
                desc2='VMware, a leading innovator in enterprise software, powers the world’s digital infrastructure. Their solutions form a flexible, consistent digital foundation that
                enables technology-driven transformation without disruption.'
            />
            <img className='microsoft__img container d-block' src={img1} alt="img"/>
            <Baseline />
            <ContactForm/>
            <div className='container'>
                <img className='microsoft__img2' src={img2} alt="img"/>
            </div>
        </div>
    )
}

export default Vmware
