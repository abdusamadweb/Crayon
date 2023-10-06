import React from 'react'
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb"
import Titles from "../../../components/cloud-titles/Titles"
import {useHref} from "react-router-dom"
import CrayonPlatforms from "../../../components/crayon-platforms/CrayonPlatforms"
import ContactForm from "../../../components/contact-form/ContactForm"
import awsImg from "../../../assets/images/aws-img.jpg"
import item1 from '../../../assets/images/aws-item1.png'
import item2 from '../../../assets/images/aws-item2.png'
import item3 from '../../../assets/images/aws-item3.png'
import item4 from '../../../assets/images/aws-item4.png'
import Baseline from "./Baseline"

const Aws = () => {

    const href = useHref()


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='aws cloud-providers'>
            <BreadCrumb href={href} />
            <Titles
                sub='AWS'
                title="AWS's International Advanced Consulting Partner"
                desc1={`${ data?.['app-name'] } offers top-notch Migration Services for AWS and boasts more than 150 AWS certifications. However, migration is only one aspect of our tale.`}
                desc2='We assist you in evaluating your infrastructure, software, and applications, choosing workloads and phasing, architecting a comprehensive solution, and defining and securing your estate on AWS thanks to our strong expertise in software assessment and TCO.'
            />
            <img className='microsoft__img container small' src={awsImg} alt="img"/>
            <Baseline />
            <CrayonPlatforms />
            <ContactForm />
            <ul className='microsoft__list row center container small'>
                <li className="item">
                    <img className='item__img' src={item1} alt="img"/>
                </li>
                <li className="item">
                    <img className='item__img' src={item2} alt="img"/>
                </li>
                <li className="item">
                    <img className='item__img' src={item3} alt="img"/>
                </li>
                <li className="item">
                    <img className='item__img' src={item4} alt="img"/>
                </li>
            </ul>
        </div>
    )
}

export default Aws
