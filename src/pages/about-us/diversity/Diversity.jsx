import React from 'react'
import Hero from "./hero/Hero";
import TitleImg from "./component-title-img/TitleImg";
import img1 from '../../../assets/images/diversity/diversity-img.jpg'
import img2 from '../../../assets/images/diversity/diversity-img3.jfif'
import img3 from '../../../assets/images/diversity/diversity-img4.jpg'
import img4 from '../../../assets/images/diversity/diversity-img5.jfif'
import img5 from '../../../assets/images/diversity/diversity-img6.png'
import img6 from '../../../assets/images/diversity/diversity-img7.jfif'
import Human from "./human-resources/Human";
import Ceo from "./ceo-action/Ceo";
import CrayonPlatforms from "../../../components/crayon-platforms/CrayonPlatforms";
import Talent from "./talent/Talent";

const Diversity = () => {


        // page title
        const storedData = localStorage.getItem('globalData')
        const data = JSON.parse(storedData)


    return (
        <div className='diversity'>
            <Hero />
            <TitleImg
                title={`DIVERSITY, EQUITY AND INCLUSION AT ${ data?.['app-name'] }`}
                desc1='We advance diversity, equity, inclusion, and respect through education, hiring practices, and positive workplace culture. We achieve that culture by making sure all individuals are treated fairly and respectfully and have equitable access to opportunities and resources.'
                desc2={`The contributions of all our teammates are highly valued and are an integral part of our success. We ensure that ${ data?.['app-name'] }’s core values are rooted throughout the organization.`}
                img={img1}
                alignItems='center'
            />
            <Human />
            <Ceo />
            <Talent />
            <TitleImg
                title='BENEFITS'
                desc1={`${ data?.['app-name'] } offers several industry-leading benefits to all of our employees. Some of our most notable ones include:`}
                desc2={`HRA Program: ${ data?.['app-name'] } has established a cancer and fertility treatment health reimbursement arrangement (HRA). All part-time and full-time employees are eligible for a one-time reimbursement of up to $5,000 in financial support for these treatments.`}
                desc3='Parental Leave: Parents receive an additional 4 weeks of bonding leave in addition to the Family Medical Leave Act (FMLA) to spend time with their family.'
                img={img2}
                bgColor='#F2F1ED'
                alignItems='center'
            />
            <TitleImg
                title='UNCONSCIOUS BIAS TRAINING'
                desc1={`It is a standard practice at ${ data?.['app-name'] } for all employees to go through comprehensive training sessions aimed at equipping them with the knowledge and skills to identify and conquer any personal biases they may possess. This process ensures that every team member is committed to promoting a fair and inclusive work environment, where everyone is treated with respect and dignity, regardless of their background or identity.`}
                img={img3}
                bgColor='#04242D'
                color='#fff'
                alignItems='flex-end'
                reverse={true}
            />
            <TitleImg
                title='SPONSORSHIP AND MENTORSHIP'
                desc1={`${ data?.['app-name'] }, in partnership with Deloitte, offers a comprehensive program designed to train and mentor female leaders who show exceptional promise. The program spans an entire year and provides participants with the necessary guidance and resources to help them reach their full potential.`}
                desc2='We are committed to supporting and empowering women in leadership roles, and this program is just one of the ways we strive to achieve that goal.'
                img={img4}
                alignItems='center'
            />
            <TitleImg
                title='INTERN ROTATIONAL PROGRAM: '
                desc1={`${ data?.['app-name'] } provides hands-on opportunities for individuals who identify as female or belong to underrepresented minorities and are interested in pursuing careers in the fields of Science, Technology, Engineering, and Mathematics (STEM).`}
                desc2={`Through its initiatives, ${ data?.['app-name'] } strives to give these individuals a chance to gain practical experience in STEM-related disciplines and equip them with the skills and knowledge necessary to succeed in their chosen fields.`}
                img={img5}
                bgColor='#F2F1ED'
                alignItems='center'
                reverse={true}
            />
            <TitleImg
                title='EVENTS'
                desc1={`At ${ data?.['app-name'] }, we take great pride in promoting and endorsing numerous social causes and observances. Among these are Asian-American & Pacific Islander Month, Black History Month, Hispanic Heritage Month, International Womens Day, and Pride Month. We firmly believe that acknowledging and honoring our diversity is crucial, and we make it our mission to enlighten others about the significance of these noteworthy occasions.`}
                img={img6}
                alignItems='flex-end'
            />
            <CrayonPlatforms title={true} />
        </div>
    )
}

export default Diversity
