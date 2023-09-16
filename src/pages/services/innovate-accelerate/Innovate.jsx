import React from 'react'
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Titles from "../../../components/titles/Titles";
import Bubles from "../../../components/bubles/Bubles";
import Report from "../component-report/Report";
import ContactForm from "../../../components/contact-form/ContactForm";
import {useHref} from "react-router-dom";
import img1 from "../../../assets/images/services/new-revenue.png";
import img2 from "../../../assets/images/services/cut-costs.png";
import img3 from "../../../assets/images/services/increase.png";
import reportImg from "../../../assets/images/services/innovate-report.jpg";
import Baseline from "./baseline/Baseline";

const Innovate = () => {

    const href = useHref()


    const data = [
        {
            img: img1,
            desc: 'Create new revenue streams'
        },
        {
            img: img2,
            desc: 'Cut costs through automation and optimization'
        },
        {
            img: img3,
            desc: 'Increase operational efficiency'
        },
    ]


    return (
        <div className='innovate'>
            <BreadCrumb href={href} />
            <Titles
                sub='INNOVATE & ACCELERATE'
                title='Innovate with a scalable data platform, AI, and IoT'
            />
            <Bubles
                sub='AI SOLUTIONS SERVICES'
                title='Gain competitive edge with innovative data-driven solutions'
                data={data}
            />
            <Baseline />
            <Report
                sub='NEW BLOG'
                title='AI Image Generation Reshapes the Creative Industry'
                desc='AI Image Generation is going viral. Tools use multiple types of artificial intelligence to generate high-quality, photorealistic images from text prompts.'
                img={reportImg}
            />
            <ContactForm />
        </div>
    )
}

export default Innovate
