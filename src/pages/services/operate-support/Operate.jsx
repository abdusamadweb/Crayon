import React, {useEffect, useState} from 'react'
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../../../components/service-titles/Titles";
import {useHref} from "react-router-dom";
import ContactForm from "../../../components/contact-form/ContactForm";
import Audit from "./audit/Audit";
import Baseline from "./baseline/Baseline";
import $api from "../../../api";

const Operate = () => {

    const href = useHref()


    const [result, setResult] = useState([])
    useEffect(() => {
        $api
            .get('/operate-support')
            .then(res => setResult(res.data[0]))
    }, [href])


    return (
        <div className='operate'>
            <BreadCrumb href={href} />
            <Titles
                sub='OPERATE & SUPPORT'
                title={result?.title || 'OPERATE & SUPPORT'}
            />
            <Audit img={result?.image?.full_url} />
            <Baseline />
            <ContactForm />
        </div>
    )
}

export default Operate
