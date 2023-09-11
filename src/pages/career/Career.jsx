import React from 'react'
import Hero from "./hero/Hero";
import BreadCrumb from "../../components/bread-crumb/BreadCrumb";
import {useHref} from "react-router-dom";
import Culture from "./culture/Culture";
import Volunteer from "./volunteer/Volunteer";
import Benefit from "./benefit/Benefit";

const Career = () => {

    const href = useHref()


    return (
        <div className='career'>
            <BreadCrumb href={href} />
            <Hero />
            <Culture />
            <Volunteer />
            <Benefit />
        </div>
    )
}

export default Career
