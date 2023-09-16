import './Baseline.scss'
import React from 'react'

const Baseline = () => {
    return (
        <div className='baseline'>
            <div className="container small">
                <div className="baseline__inner">
                    <div className="width">
                        <h3 className="title">
                            Streamline and strengthen your Security and Compliance
                        </h3>
                        <p className="desc">
                            Microsoft 365 is the market-leading communication, collaboration, and security platform utilized by millions of organizations across the world.
                        </p>
                        <p className="desc">
                            Crayon and Microsoft will help you monitor, manage, and operate your devices and Microsoft 365 environment in a secure fashion. We help public sector take a zero trust approach and meet new cybersecurity insurance requirements.
                        </p>
                        <p className="desc">
                            We can help you answer the questions:
                        </p>
                        <ul className="list">
                            <li className="desc dot">
                                Is my information secure and protected from all types of threats?
                            </li>
                            <li className="desc dot">
                                Can I be saving with any of my Microsoft 365 tools?
                            </li>
                            <li className="desc dot">
                                What is Endpoint Management and how do I get started?
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="title">
                            Modern Workshop Offerings:
                        </h3>
                        <p className="desc">
                            Not sure where to start? Customers often start with a workshop. Crayon is currently offering the following workshops:
                        </p>
                        <ul className='list2'>
                            <li className="desc dot">Endpoint Management</li>
                            <li className="desc dot">Modernized Communication</li>
                            <li className="desc dot">Hybrid Meetings</li>
                            <li className="desc dot">Employee Experience</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseline
