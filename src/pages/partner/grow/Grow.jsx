import './Grow.scss'
import React from 'react'
import {Link} from "react-router-dom";

const Grow = () => {


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='grow'>
            <div className="container small">
                <div className="grow__inner">
                    <h3 className="title">{ data?.['app-name'] } Partner Benefits</h3>
                    <div className='grid'>
                        <div>
                            <div className='margin'>
                                <span className="sub">GROW YOUR SOFTWARE AND CLOUD BUSINESS</span>
                                <p className='desc'>
                                    Now you can leverage { data?.['app-name'] } expertise to have licensing <strong>optimization conversations with your customers.</strong>
                                </p>
                                <p className='desc'>
                                    We help our partners have more control over their software estate to optimize ROI while remaining compliant through our Software Analytics and Cloud Analytics practice. As a { data?.['app-name'] } partner, you will be able to bundle our professional services and partner together to enhance your offerings to your end customers. When engaging { data?.['app-name'] }, customers save an average of 20-30% on their software and cloud spend.​
                                </p>
                            </div>
                            <div>
                                <span className="sub">TRANSACT MICROSOFT CSP AND SPLA</span>
                                <p className='desc'>
                                    As the third-largest SPLA reseller​ and CSP indirect provider globally, { data?.['app-name'] } is positioned to help you make your reporting and consumption easy. You can own the customer relationship, and we will support you. Click here to learn specifically about <Link className='link' to='/services/operate-support'>{ data?.['app-name'] } CSP Partner benefits.</Link>
                                </p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <span className="sub">GAIN ACCESS TO DEEPER ANALYTICS THAN OUR COMPETITORS WITH { data?.['app-name'] } IP</span>
                                <p className="desc dot">
                                    <Link className='link' to=''>{ data?.['app-name'] } Cloud-iQ</Link> is a self-service platform where you can manage Cloud products, services, and economics across multiple vendors through a single pane portal view. Cloud-iQ provides instant access to cloud services, comprehensive live spending reports, and flexibility to adjust services and costs as you go.
                                </p>
                                <p className="desc dot">
                                    Get the most from your Microsoft investments through <Link className='link' to=''>Empower-iQ</Link>, a dedicated portal for Microsoft Software Training. Increase user productivity and drive Microsoft technology adoption for you and your customers.
                                </p>
                            </div>
                            <div>
                                <span className="sub">
                                    PARTNERS CAN ALSO BENEFIT FROM THESE AREAS WHERE { data?.['app-name'] } HAS DEEP EXPERTISE:
                                </span>
                                <p className="desc dot">
                                    Datacenter optimization: { data?.['app-name'] } will help develop cloud strategies and drive incremental revenue for your business.
                                </p>
                                <div className="desc dot">App modernization</div>
                                <div className="desc dot">Support: { data?.['app-name'] } offers best-in-class support for both on-premises and off-premises. We are here to complement or fully support your end customer support model.​</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grow__wrapper">
                    <h3 className="title">Your business is our business</h3>
                    <div className='grid'>
                        <div>
                            <div className='margin'>
                                <span className="sub">COST OPTIMIZATION</span>
                                <p className="desc">
                                    <strong className='d-block'>Control, manage and optimize your software purchase and cloud spend.</strong>
                                    Reduce costs by minimizing time spent on cloud and software purchases. Our partners benefit from { data?.['app-name'] }’s own platforms to handle software and cloud-related purchases.
                                </p>
                                <p className='desc'>
                                    Managing cloud products, services and economics across multiple vendors through a single-pane portal view will minimize common mistakes and lower your operational costs.
                                </p>
                            </div>
                            <div>
                                <span className="sub">PROFITABILITY</span>
                                <p className="desc">
                                    <strong className='d-block'>Find new opportunities and maximize profits. </strong>
                                    We help our partners find new opportunities and maximize profits through margin and back-end incentives. Positioning strategic products, lowering the overall cost for your customers, and increasing your service sales.
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className="margin">
                                <span className="sub">KNOWLEDGE</span>
                                <p className="desc">
                                    <strong className='d-block'>
                                        Proactive experts to support partners’ strategic decisions.
                                    </strong>
                                    Our team proactively supports your daily business with program and product knowledge.
                                </p>
                                <p className="desc">
                                    Backed up with our services organization, we contribute with technical knowledge, software and cloud analytics, and cloud cost management services, for your go-to-market strategies.
                                </p>
                            </div>
                            <div>
                                <span className="sub">SUPPORT</span>
                                <p className="desc">
                                    <strong className='d-block'>
                                        Technical and license support for cloud and on-premises services.
                                    </strong>
                                    { data?.['app-name'] } offers a license and technical support program to our partners, basic to premium plans covering all your needs. Our partners have access to the highest level of vendor support, with the best SLAs.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Grow
