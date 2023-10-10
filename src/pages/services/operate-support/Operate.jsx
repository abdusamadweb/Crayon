import React, {useEffect, useState} from 'react'
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../../../components/service-titles/Titles";
import {useHref} from "react-router-dom";
import ContactForm from "../../../components/contact-form/ContactForm";
import Audit from "./audit/Audit";
import Baseline from "./baseline/Baseline";
import $api from "../../../api";
import {getContent} from "../../../api/apiConfig";

const Operate = () => {

    const href = useHref()


    const [result, setResult] = useState([])
    useEffect(() => {
        $api
            .get(`/services/47`)
            .then(res => setResult(res.data))
    }, [href])


    // content
    const [content, setContent] = useState([])
    const str = 'operate_baseline_title' +
        'operate_baseline_sub' +
        'operate_baseline_desc' +
        'operate_service_title' +
        'operate_service_italic' +
        'operate_service_title2' +
        'operate_service_desc1' +
        'operate_service_desc2' +
        'operate_service_items'
    useEffect(() => {
        const get = async () => {
            const res = await getContent(str)
            setContent(res)
        }
        get()
    }, [])


    return (
        <div className='operate'>
            <BreadCrumb href={href} />
            <Titles
                sub='OPERATE & SUPPORT'
                title={result?.title || 'OPERATE & SUPPORT'}
            />
            <Audit img={result?.image?.full_url} content={content} />
            <Baseline content={content} />
            <ContactForm />
        </div>
    )
}

export default Operate
