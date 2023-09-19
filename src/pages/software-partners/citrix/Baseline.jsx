import React from 'react'

const Baseline = () => {
    return (
        <div className='baseline'>
            <div className="container small">
                <div className="baseline__inner">
                    <div>
                        <h3 className="title">
                            Citrix digital workspace
                        </h3>
                        <p className="desc">
                            This solution from Citrix is a solution that collects information from your most used SaaS applications into one dashboard.
                        </p>
                        <p className="desc">
                            The user won't have to log into many different applications to perform different tasks, instead the tasks that are pending action are gathered smoothly into one feed, for example:
                        </p>
                        <ul className="list">
                            <li className="desc dot">applying for vacation days</li>
                            <li className="desc dot">approving invoices </li>
                            <li className="desc dot">IT helpdesk</li>
                            <li className="desc dot">CRM tasks </li>
                        </ul>
                        <p className="desc">
                            Digital workspace is a cloud application that enables users to be more productive by not having to switch around between applications.
                        </p>
                        <p className="desc">It integrates nicely with the Microsoft 365 suite. </p>
                    </div>
                    <div className="padding">
                        <h3 className="title">App delivery and security</h3>
                        <p className="desc">
                            Often referred to as "networks", Citrix application delivery and security solutions are designed to ensure that business-critical applications perform well and remain secure.
                        </p>
                        <p className="desc">
                            Centered around a comprehensive application delivery controller and advanced WAN, these solutions help companies succeed by ensuring an optimal user experience.
                        </p>
                        <div>
                            <strong className="strong">Citrix ADC</strong>
                            <p className="desc">
                                Enables IT to simplify the process of optimizing performance for SaaS, cloud-hosted and on-premises applications.
                            </p>
                        </div>
                        <p className="desc">
                            From a single pane of glass, organizations gain operational consistency and holistic visibility across multi-cloud and maintain a consistent application security posture.
                        </p>
                        <div>
                            <strong className="strong">Citrix SD-WAN</strong>
                            <p className="desc">
                                Uses a built-in control engine to identify more than 4,500 apps and automatically adapt network conditions to ensure all application traffic is delivered seamlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseline
