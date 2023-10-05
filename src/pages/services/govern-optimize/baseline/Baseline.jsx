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
                    <div className='width'>
                        <h4 className="title">
                            { data?.['app-name'] } Cloud Governance gives you access to the right people, platforms, and tools necessary to ensure your IT Estate is taken care of and optimized.
                        </h4>
                        <h5 className="title2">
                            As an Azure Expert MSP, we can help businesses forecast their cloud spend and manage the commission and decommission of cloud consumption. Gain the ability to visualize your cloud spend and report to executives the "who, why, and how much."
                        </h5>
                    </div>
                    <div>
                        <strong className='strong'>
                            If you are wondering how { data?.['app-name'] } Cloud Governance is beneficial in managing cloud costs, ask yourself the following questions:
                        </strong>
                        <ul className='list'>
                            <li className="desc dot">
                                Is your current cloud consumption managed against your organization's standards and compliance rules? If so, how often is this consumption reviewed?
                            </li>
                            <li className="desc dot">
                                When you review cloud consumption for compliance and optimization how do you then engage to make sure all necessary changes are made?
                            </li>
                            <li className="desc dot">
                                How do you ensure that all cloud consumption is meeting a business requirement, solving a business problem, or driving business value to the organization's mission?
                            </li>
                            <li className="desc dot">
                                Do you have the ability to visualize your cloud spend and report to executives the who, why, and how much?
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseline
