import './Baseline.scss'
import React from 'react'

const Baseline = ({ content }) => {


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='baseline'>
            <div className="container small">
                <div className="baseline__inner">
                    <div>
                        <h3 className="title">{ content?.google_baseline_title1?.text || '...' }</h3>
                        <div>
                            <h4 className="title2">Cloud Migrations</h4>
                            <p className="desc">{ content?.google_baseline_desc1?.text || '...' }</p>
                        </div>
                        <div>
                            <h4 className="title2">Innovation</h4>
                            <p className="desc">{ content?.google_baseline_desc1?.text || '...' }</p>
                        </div>
                        <div>
                            <h4 className="title2">Cloud Migrations</h4>
                            <p className="desc">{ content?.google_baseline_desc1?.text || '...' }</p>
                        </div>
                    </div>
                    <div className="padding">
                        <h3 className="title">{ content?.google_baseline_title2?.text || '...' }</h3>
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
