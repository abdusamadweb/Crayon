import React from 'react'
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../../../components/titles/Titles";
import {useHref} from "react-router-dom";
import ContactForm from "../../../components/contact-form/ContactForm";
import Audit from "./audit/Audit";
import Baseline from "./baseline/Baseline";

const Operate = () => {

    const href = useHref()


    return (
        <div className='operate'>
            <BreadCrumb href={href} />
            <Titles
                sub='OPERATE & SUPPORT'
                title='Operate a secure and managed modern workplace'
            />
            <Audit />
            <Baseline />
            <ContactForm />
        </div>
    )
}

export default Operate
