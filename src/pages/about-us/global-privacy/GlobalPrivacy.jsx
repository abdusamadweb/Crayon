import React from 'react'
import {useHref} from "react-router-dom";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";

const GlobalPrivacy = () => {

    const href = useHref()


    return (
        <div className='terms global'>
            <BreadCrumb href={href} />
            <div className="social absolute">
                <span className="sub">SHARE</span>
                <div>
                    <a
                        className='link'
                        href="https://www.twitter.com/share?url=https://www.crayon.com/us/about-us/terms-and-conditions/"
                        target='_blank'
                    >
                        <i className="fa-brands fa-twitter icon"/>
                    </a>
                    <a
                        className='link'
                        href="https://www.facebook.com/sharer/sharer.php?u=https://www.crayon.com/us/about-us/terms-and-conditions/"
                        target='_blank'
                    >
                        <i className="fa-brands fa-facebook-f icon"/>
                    </a>
                    <a
                        className='link'
                        href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.crayon.com/us/about-us/terms-and-conditions/"
                        target='_blank'
                    >
                        <i className="fa-brands fa-linkedin-in icon"/>
                    </a>
                </div>
            </div>
            <div className="container small">
                <div className="terms__titles">
                    <span className="sub">DATA PROTECTION</span>
                    <h2 className="title">Global Privacy Notice</h2>
                </div>
                <div className="wrap">
                    <h4 className="title2">Introduction</h4>
                    <p className="desc">
                        This Privacy Notice applies to Crayon Group, in the following referred to (collectively, “Crayon Group AS,” “we” and “us”). We are global software and cloud experts. We help you gain clarity from complexity, optimise the ROI from your technology investments and simplify and secure your journey to digital transformation. This privacy notice aims to inform you about how we collect, store, use and disclose information about you when you:
                    </p>
                    <ul className="list numeric">
                        <li className="desc">
                            Interact or use our websites, including downloading materials from our resources page.
                        </li>
                        <li className="desc">
                            Register and/or attend any of our events or conferences we attend.
                        </li>
                        <li className="desc">If you use any of our products or services.</li>
                    </ul>
                </div>
                <div className="wrap">
                    <h4 className="title2">1. What are the contact details of Crayon Group?</h4>
                    <p className="desc">
                        Crayon Group AS is the Controller for the Personal Data we process, unless otherwise stated.
                    </p>
                    <div>
                        <span className="sub">CRAYON GROUP AS</span>
                        <div className="d-flex between g2">
                            <span className="desc">Postal Address:</span>
                            <span className="desc">Sandakerveien 114a, 0484 Oslo, Norway</span>
                        </div>
                        <div className="d-flex between g2">
                            <span className="desc">Address:</span>
                            <span className="desc">Landsvägen 50A, 17263 Sundbyberg, Stockholm, Sweden</span>
                        </div>
                        <div className="d-flex between g2">
                            <span className="desc">Telephone:</span>
                            <span className="desc">+47 22 89 1000</span>
                        </div>
                        <div className="d-flex between g2">
                            <span className="desc">Email address:</span>
                            <span className="desc">clouddesk@crayon.com </span>
                        </div>
                        <div className="d-flex between g2">
                            <span className="desc">Registration Number:</span>
                            <span className="desc">981125592</span>
                        </div>
                    </div>
                    <div>
                        <span className="sub">OUR DATA PROTECTION OFFICER</span>
                        <div className="d-flex between g2">
                            <span className="desc">Name and Title:</span>
                            <span className="desc">Dr. Scott Richardson</span>
                        </div>
                        <div className="d-flex between g2">
                            <span className="desc">Postal Address:</span>
                            <span className="desc">Landsvägen 50A, 17263 Sundbyberg, Stockholm, Sweden</span>
                        </div>
                        <div className="d-flex between g2">
                            <span className="desc">Telephone:</span>
                            <span className="desc">+47 22 89 1001</span>
                        </div>
                        <div className="d-flex between g2">
                            <span className="desc">Email address:</span>
                            <span className="desc">dpo@crayon.com</span>
                        </div>
                        <p className="desc">
                            For urgent security or data protection matters, please contact our 24/7 Hotline: +47 22 89 1001
                        </p>
                    </div>
                </div>
                <div className="wrap">
                    <h4 className="title2">2. What information does Crayon Group collect? </h4>
                    <p className="desc">
                        Most of the Personal Data we process is provided to us for one of the following reasons:
                    </p>
                    <div>
                        <span className="sub">WEBSITES OR EVENTS:</span>
                        <p className="desc">
                            We may collect Personal Data that you choose to send to us or provide to us such as your name, role/title, address, work e-mail address, or work phone number, for example, on our online forms, If you contact us through the Websites, we will keep a record of our correspondence.
                        </p>
                    </div>
                    <div>
                        <span className="sub">SERVICES: </span>
                        <p className="desc">
                            Typically, the types of Personal Data we may collect directly from our customers and their users to provide our Services include, but are not limited to: Names, role/title, usernames, IT user accounts, User license subscriptions, location data (IP-address) work e-mail address and work phone.
                        </p>
                    </div>
                </div>
                <div className="wrap">
                    <h4 className="title2">3. How does Crayon Group use the information? </h4>
                    <div>
                        <span className="sub">WEBSITES OR EVENTS:</span>
                        <p className="desc">
                            We will use the information we collect via our Websites or Events:
                        </p>
                        <ul className="list">
                            <li className="desc dot">
                                For website analytics, trend monitoring and marketing;
                            </li>
                            <li className="desc dot">
                                Managing a job application, connection with any job applications that you may make to us;
                            </li>
                            <li className="desc dot">
                                To improve the content and general administration of the website and our services.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span className="sub">SERVICES:</span>
                        <p className="desc">
                            We may use the information we collect from our customers and their users in connection with the Services we provide for a range of reasons, including to:
                        </p>
                        <ul className="list">
                            <li className="desc dot">
                                To set up a user account;
                            </li>
                            <li className="desc dot">
                                Provide, operate and maintain the Services;
                            </li>
                            <li className="desc dot">
                                Process and complete transactions, and send related information, including transaction confirmations and invoices;
                            </li>
                            <li className="desc dot">
                                Manage our customers use of the Services, respond to enquiries and comments and provide customer service and support;
                            </li>
                            <li className="desc dot">
                                Send customers technical alerts, updates, security notifications, and administrative communications;
                            </li>
                            <li className="desc dot">
                                For any other purposes about which we notify customers and users;
                            </li>
                            <li className="desc dot">
                                We use your Personal Data in this context based on the processing agreement that we have in place with you. Personal Data will be deleted or returned as defined in processing agreement.
                            </li>
                            <p className="desc">
                                And other processing necessary in connection with our legitimate interest to send you relevant information about our products and services.
                            </p>
                        </ul>
                    </div>
                </div>
                <div className="wrap">
                    <h4 className="title2">4. How does Crayon Group share and disclose information? </h4>
                    <p className="desc">
                        The confidentiality and integrity of data stored on our IT systems are protected by controls to ensure only authorized employees have access to those capabilities required for their duties. All employees have signed a confidentiality and privacy agreement.
                    </p>
                    <div>
                        <span className="sub">CRAYON GROUP COMPANIES:</span>
                        <p className="desc">
                            We may distribute your Personal Data to any member of Crayon Group, i.e. any of our subsidiaries, if it is necessary and reasonable for the purposes set out in this Privacy Notice. We have Binding Corporate Rules in place to ensure all the same consistent level of protection.
                        </p>
                    </div>
                    <div>
                        <span className="sub">VENDORS, CONSULTANTS AND OTHER SERVICE PROVIDERS:</span>
                        <p className="desc">
                            We may share your information with third party vendors, consultants and other service providers who we employ to perform tasks on our behalf, and require access to your information to carry out that work, such as provide customer support, etc. These service providers are authorized to use your Personal Data only as necessary to provide services.
                        </p>
                    </div>
                    <div>
                        <span className="sub">DISCLOSURES FOR NATIONAL SECURITY OR LAW ENFORCEMENT:</span>
                        <p className="desc">
                            Under certain circumstances, we may be required to disclose your Personal Data in response to valid requests by public authorities, including to meet national security or law enforcement requirements.
                        </p>
                    </div>
                </div>
                <div className="wrap">
                    <h4 className="title2">5. How does Crayon Group secure your personal data? </h4>
                    <p className="desc">
                        Crayon protects your Personal Data and has internal Information Security rules, processes and controls in place to protect your Personal Data. Our Information Security is based on a thorough evaluation of the risks involved taking into consideration the categories of Personal Data and the types of Data Processing in question.
                    </p>
                    <div>
                        <span className="sub">LOCATION OF YOUR PERSONAL DATA:</span>
                        <p className="desc">
                            Crayon Group operates in over 20 countries within and outside the European Union (EU) and European Economic Area (EEA). As a result, your personal data may be subject to international transfers.
                        </p>
                        <p className="desc">
                            Despite the limitations of the geographical scope of the General Data Protection Regulation (GDPR), we apply the same standards and principles governing data protection to every employee, contractor, consultant and agency staff employee working for any of our subsidiaries worldwide.
                        </p>
                        <p className="desc">
                            To ensure a consistent high level of protection, we have put in place our corporate binding rules. To request a copy of our corporate binding rules, please contact our DPO on the Contact Details listed on the top of this page.
                        </p>
                    </div>
                    <div>
                        <span className="sub">ACCESS TO YOUR PERSONAL DATA:</span>
                        <p className="desc">
                            The confidentiality and integrity of data stored on our IT systems are protected by controls to ensure only authorized employees have access to those capabilities required for their duties. All employees have signed a confidentiality agreement.
                        </p>
                        <p className="desc">
                            We may distribute your Personal Data to any member of Crayon Group, i.e. any of our subsidiaries, if it is necessary and reasonable for the purposes set out in this Privacy Notice. We have Binding Corporate Rules in place to ensure all the same consistent level of protection. To request a copy of our corporate binding rules, please contact our DPO on the Contact Details listed here.
                        </p>
                        <p className="desc">
                            We do not disclose your personal data to any third parties, public or private without your prior consent, unless we are obligated to by EU or national law, or it is necessary to protect the vital interests of you or any other natural person that we process personal data concerning.
                        </p>
                    </div>
                    <div>
                        <span className="sub">PROTECTION OF OUR PERSONAL DATA:</span>
                        <p className="desc">
                            Crayon protects your Personal Data and has internal Information Security rules, process and controls in place to protect your Personal Data. Our Information Security is based on a thorough evaluation of the risks involved taking into consideration the categories of Personal Data and the types of Data Processing in question.
                        </p>
                        <p className="desc">
                            We have put in place technical and organizational security measures to ensure that protect your Personal Data against unauthorized or unlawful processing and against accidental loss, destruction or damage.
                        </p>
                        <p className="desc">
                            Additionally, we ensure that only authorized persons gain access to your Personal Data. To prevent data loss, we continuously back up all data.
                        </p>
                    </div>
                    <div>
                        <span className="sub">LEGAL OBLIGATIONS:</span>
                        <p className="desc">
                            Notwithstanding the other provisions of this Section 5, we may retain your personal data where such it is necessary for compliance with a legal obligation, or in order to protect your vital interests or the vital interests of another natural person.
                        </p>
                    </div>
                </div>
                <div className="wrap">
                    <h4 className="title2">
                        6. What are your Data subject rights under the GDPR?
                    </h4>
                    <p className="desc">
                        In the interest of full disclosure and transparency we have summarized your rights under GDPR Chapter 3 in this section. However, some these rights are complex, and you are therefore encouraged to read the relevant laws and/or guidance from your local supervisory authority.
                    </p>
                    <div>
                        <span className="sub">THE RIGHT OF ACCESS:</span>
                        <p className="desc">
                            You have the right to know whether we process your personal data. If we do, you have also the right to access this personal data, providing the rights and freedoms of others are not affected.
                        </p>
                    </div>
                    <div>
                        <span className="sub">THE RIGHT TO RECTIFICATION:</span>
                        <p className="desc">
                            Should any of your Personal Data prove to be inaccurate or incomplete, you have the right to have this corrected/rectified.
                        </p>
                    </div>
                    <div>
                        <span className="sub">THE RIGHT TO ERASURE:</span>
                        <p className="desc">
                            The right to erasure is also known as the “right to be forgotten”. If any of the conditions in Article 17 apply, you have the right to have your Personal Data deleted from our records.
                        </p>
                    </div>
                    <div>
                        <span className="sub">THE RIGHT TO RESTRICT OF PROCESSING:</span>
                        <p className="desc">
                            In some circumstances you have the right to restrict the processing of your personal data, for example if:
                        </p>
                        <ul className="list">
                            <li className="desc dot">
                                You contest the accuracy of the personal data;
                            </li>
                            <li className="desc dot">
                                We no longer need the Personal Data for the purposes of our processing, but you require Personal Data for the establishment, exercise or defense of legal claims; and
                            </li>
                            <li className="desc dot">
                                You have objected to processing, pending the verification of that objection;
                            </li>
                        </ul>
                    </div>
                    <div>
                        <span className="sub">THE RIGHT TO BE NOTIFIED:</span>
                        <p className="desc">
                            As a general rule, you have a right to be notified of:
                        </p>
                        <ul className="list">
                            <li className="desc dot">Rectification of your personal data;</li>
                            <li className="desc dot">Erasure or your personal data;</li>
                            <li className="desc dot">Restriction of processing of your personal data.</li>
                        </ul>
                    </div>
                    <div>
                        <span className="sub">THE RIGHT TO DATA PORTABILITY:</span>
                        <p className="desc">
                            You have the right to receive your Personal Data from us in a structured, commonly used and machine-readable format. However, this right does not apply where it would adversely affect the rights and freedoms of others.
                        </p>
                        <p className="desc">
                            If you object to us processing your Personal Data we will cease to process the data unless we can demonstrate compelling legitimate grounds for the processing which override your interests, rights and freedoms, or the processing is for the establishment, exercise or defense of legal claims. You have the right to object to our processing of your Personal Data for direct marketing purposes (including profiling for direct marketing purposes). If you make such an objection, we will cease to process your Personal Data for this purpose
                        </p>
                    </div>
                </div>
                <div className="social">
                    <span className="sub">SHARE</span>
                    <div>
                        <a
                            className='link'
                            href="https://www.twitter.com/share?url=https://www.crayon.com/us/about-us/terms-and-conditions/"
                            target='_blank'
                        >
                            <i className="fa-brands fa-twitter icon"/>
                        </a>
                        <a
                            className='link'
                            href="https://www.facebook.com/sharer/sharer.php?u=https://www.crayon.com/us/about-us/terms-and-conditions/"
                            target='_blank'
                        >
                            <i className="fa-brands fa-facebook-f icon"/>
                        </a>
                        <a
                            className='link'
                            href="https://www.linkedin.com/sharing/share-offsite/?url=https://www.crayon.com/us/about-us/terms-and-conditions/"
                            target='_blank'
                        >
                            <i className="fa-brands fa-linkedin-in icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GlobalPrivacy
