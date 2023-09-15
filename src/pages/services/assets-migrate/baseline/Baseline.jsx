import './Baseline.scss'
import React from 'react'
import img from '../../../../assets/images/services/assets-img.jpg'

const Baseline = () => {
    return (
        <div className='baseline'>
            <div className="container small">
                <img className='baseline__img' src={img} alt="img"/>
                <div className="baseline__inner margin">
                    <div className='width'>
                        <h3 className="title">What is a Baseline?</h3>
                        <h5 className="title2">Get more visibility and control over your IT estate.</h5>
                        <p className='desc'>
                            A Microsoft Baseline is a review of the software estate based on entitlements and deployments. A baseline engagement will use the entitlement and deployment report to uncover opportunities for improvement.
                        </p>
                        <p className='desc'>
                            The first step to software compliance is to see exactly what is entitled and deployed. A baseline engagement will provide you immediate visibility into your software estate and give you access to a team of experts to understand your current compliance state.
                        </p>
                        <p className="desc">
                            Our recent in-house study on IT cost optimization in 2023 offers strategies for refining cost structures in today's tech landscape. The study highlights how the global economic downturn affected IT spending, why so many businesses struggle gaining control and where they look for cost savings.
                        </p>
                    </div>
                    <div>
                        <h3 className="title">Deliverables</h3>
                        <p className="desc">
                            <span>Entitlements –</span> Crayon will analyze license reports and help the organization understand what software your organization is entitled to deploy
                        </p>
                        <p className="desc">
                            <span>Deployments –</span> Crayon will perform a review of installed products to give you visibility around how licenses are deployed across the entire organization
                        </p>
                        <p className="desc">
                            <span>Reporting –</span> Crayon will develop an Effective License Position (ELP) comparing entitlements and deployments, uncovering opportunities for improvement Gap
                        </p>
                        <p className="desc">
                            <span>Analysis –</span> Crayon will analyze current organizational practices relative to the organization’s desired future software and cloud state, surfacing gaps between the two
                        </p>
                        <p className="desc">
                            <span>Risk Assessment –</span> Crayon will demonstrate risks to the organization in order to assist in reducing the software footprint through rationalization and consolidation, lowering the risk and cost of software license audits, identifying security and cyber threats, upholding reputation, anticipating future needs, and improving overall business performance
                        </p>
                    </div>
                </div>
                <div className="baseline__inner">
                    <div className="width">
                        <h3 className="title">Benefits of a Microsoft Baseline</h3>
                        <p className="desc">
                            This service prepares customers for digital transformation providing a complete view of their current Microsoft product deployments and entitlements. After this engagement customers will be able to:
                        </p>
                        <ul className='list'>
                            <li className="desc dot">
                                Control business and legal risks related to improper software deployment ​
                            </li>
                            <li className="desc dot">
                                Optimize software investments based on accurate and detailed inventory and user data ​
                            </li>
                            <li className="desc dot">
                                Align IT with organizational goals ​
                            </li>
                            <li className="desc dot">
                                Create ongoing processes for monitoring and provisioning current and future assets ​
                            </li>
                            <li className="desc dot">
                                Highlight migration and consolidation opportunities​
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="title">General Painpoints Addressed</h3>
                        <p className="desc dot">
                            Risk of audits and non-compliance​
                        </p>
                        <p className="desc dot">
                            Provides the customer with complete control of their software investments​
                        </p>
                        <p className="desc dot">
                            Surprise and unbudgeted true-up costs​
                        </p>
                        <p className="desc dot">
                            Overspending/Shelfware (software that is owned, but not used)​
                        </p>
                        <p className="desc dot">
                            Inability to measure and track the deployment of software​
                        </p>
                        <p className="desc dot">
                            Mergers and acquisitions requiring software license transference and optimization​
                        </p>
                        <p className="desc dot">
                            Upcoming contract renewal – a need to decrease spend and control costs​
                        </p>
                        <p className="desc dot">
                            A reactive vs proactive approach to vendor management
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseline
