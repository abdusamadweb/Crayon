import React, {useEffect, useState} from 'react'
import Hero from "./hero/Hero";
import BreadCrumb from "../../components/bread-crumb/BreadCrumb";
import {useHref} from "react-router-dom";
import Culture from "./culture/Culture";
import Volunteer from "./volunteer/Volunteer";
import Benefit from "./benefit/Benefit";
import {getContent} from "../../api/apiConfig";

const Career = () => {

    const href = useHref()


    // content
    const [content, setContent] = useState([])
    const str =
        'career_title' +
        'career_desc1' +
        'career_desc2' +
        'career_people_desc' +
        'carrer_people_title' +
        'career_culture_title' +
        'career_culture_desc1' +
        'career_culture_desc2' +
        'career_diversity_title' +
        'career_diversity_desc' +
        'career_volunteer_title' +
        'career_volunteer_desc' +
        'career_benefit_title' +
        'career_benefit_desc' +
        'career_benefit_items'
    useEffect(() => {
        const get = async () => {
            const res = await getContent(str)
            setContent(res)
        }
        get()
    }, [])


    return (
        <div className='career'>
            <BreadCrumb href={href} />
            <Hero content={content} />
            <Culture content={content} />
            <Volunteer content={content} />
            <Benefit content={content} />
        </div>
    )
}

export default Career
