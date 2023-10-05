import './Baseline.scss'
import React from 'react'

const Baseline = () => {


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='baseline'>
            <div className="container small">
                <div className="baseline__inner">
                    <div>
                        <h3 className="title">
                            { data?.['app-name'] } is Your Full-Service Google Consultant
                        </h3>
                        <div>
                            <h4 className="title2">Cloud Migrations</h4>
                            <p className="desc">
                                We specialize in Google Cloud Migrations. Not ready for a full-migration? No problem. We offer services to assess your current on-premises and hybrid cloud estate and make recommendations based on your business goals.
                            </p>
                        </div>
                        <div>
                            <h4 className="title2">Innovation</h4>
                            <p className="desc">
                                Some of our customers are ready for innovation. We can help with that too. { data?.['app-name'] } champions Data Centers of Excellence with Data & AI/ML managed services. Find out where you are in your data journey with our free Data Assessment below with instant results, no strings attached.
                            </p>
                        </div>
                        <div>
                            <h4 className="title2">Cloud Migrations</h4>
                            <p className="desc">
                                The Google Cloud platform is growing rapidly and we are here for it. By using Google and { data?.['app-name'] } technology and experience in extracting value from data to build infrastructure on an unprecedented scale – we aim to democratize IT Cost Optimization and lead companies to innovation through Data, Artificial Intelligence and Machine learning.
                            </p>
                        </div>
                    </div>
                    <div className="padding">
                        <h3 className="title">Google Cloud Areas of Expertise</h3>
                        <div className='row'>
                            <div>
                                <h4 className="title2">Infrastructure Modernization</h4>
                                <ul className='list'>
                                    <li className="desc dot">VMware as a Service</li>
                                    <li className="desc dot">Microsoft on GCP</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="title2">Productivity & Collaborat</h4>
                                <ul className='list'>
                                    <li className="desc dot">G Suite</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="title2">Data Management</h4>
                                <ul className='list'>
                                    <li className="desc dot">Enterprise Database Migration (Oracle)</li>
                                    <li className="desc dot">Enterprise Databases (MS SQL)</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="title2">Application Modernization</h4>
                                <ul className='list'>
                                    <li className="desc dot">Anthos - Hybrid/Multi-cloud</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="title2">Data, AI/ML</h4>
                                <ul className='list'>
                                    <li className="desc dot">Data and AI managed services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseline
