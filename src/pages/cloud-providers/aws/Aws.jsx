import React, {useEffect, useState} from 'react'
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
import {getContent} from "../../../api/apiConfig";

const Aws = () => {

    const href = useHref()


    // content
    const [content, setContent] = useState([])
    const str = 'aws_title' +
        'aws_desc1' +
        'aws_desc2' +
        'aws_baseline_title1' +
        'aws_baseline_title2' +
        'aws_baseline_desc1' +
        'aws_baseline_desc2'
    useEffect(() => {
        const get = async () => {
            const res = await getContent(str)
            setContent(res)
        }
        get()
    }, [])


    return (
        <div className='aws cloud-providers'>
            <BreadCrumb href={href} />
            <Titles
                sub='AWS'
                title={ content?.aws_title?.text || '...' }
                desc1={ content?.aws_desc1?.text || '...' }
                desc2={ content?.aws_desc2?.text || '...' }
            />
            <img className='microsoft__img container small' src={awsImg} alt="img"/>
            <Baseline content={content} />
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
