import './Baseline.scss'
import React from 'react'

const Baseline = () => {
    return (
        <div className='baseline'>
            <div className="container small">
                <h3 className="title">About This Service</h3>
                <div className="baseline__inner">
                    <div className="width">
                        <h5 className="title2">
                            <em>
                                Helping you prepare for and negotiate a vendor audit.
                            </em>
                        </h5>
                        <p className="desc bold">
                            Crayon works closely with the customer to enable coordination and planning. Our consultants all have experience as auditors. We support you throughout the entire audit cycle, from when you receive the audit letter to the settlement negotiations.
                        </p>
                        <p className="desc">
                            For best results, contact us upon receipt of your audit notice. If you receive unexpectedly negative audit results and are suspicious of possible improvements to the balance sheet, or if you need assistance with the settlement, contact Crayon today.
                        </p>
                    </div>
                    <div>
                        <h5 className="title2">
                            Our services at a glance:
                        </h5>
                        <ul className="list">
                            <li className="desc dot">
                                Planning, monitoring, controlling and verifying the results of license audits
                            </li>
                            <li className="desc dot">
                                Cross-vendor services to protect customer interests and strengthen negotiating positions
                            </li>
                            <li className="desc dot">
                                Control of data flows against auditors and the prior assessment of impacts
                            </li>
                            <li className="desc dot">
                                Assessment and reporting of compliance results
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseline
