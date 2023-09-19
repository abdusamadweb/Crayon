import React from 'react'
import img from '../../../assets/images/software-partners/ibm-img3.png'

const Baseline = () => {
    return (
        <div className='baseline'>
            <div className="container small">
                <div className="baseline__inner">
                    <div>
                        <h3 className="title">
                            Reduce cost and increase flexibility on your IBM agreement
                        </h3>
                        <p className="desc">
                            The IBM licensing landscape is as vast as it is complex. Knowing how to optimize your IBM estate whilst remaining compliant can be challenging.
                        </p>
                        <p className="desc">
                            It is a continuous job being updated on the license metrics, contract structures and compliance policies.
                        </p>
                        <p className="desc">
                            With Crayon as your advisor, you can rest assured that you are up to date on any changes affecting your IBM agreement, and/or potential optimizations for increased flexibility or reduced cost.
                        </p>
                        <p className="desc">
                            Crayon believe that having the optimized IBM agreement is achieved through paying for licenses that you consume (no more and no less), and further having the optimized commercial structure for this license portfolio.
                        </p>
                        <div className='sam'>
                            <h5 className='sam__title'>
                                <span>IBM</span> SAM + <span>IBM</span> LICENCE KNOWLEDGE = <span>OPTIMIZED IBM</span> AGREEMENT
                            </h5>
                            <img className='sam__img' src={img} alt="img"/>
                        </div>
                    </div>
                    <div className="padding">
                        <h3 className="title">
                            Crayon can assist with the following services on IBM:
                        </h3>
                        <div>
                            <h4 className="title2">Licensing: </h4>
                            <ul className="list2">
                                <li className="desc dot">Competitive quotes for one-off purchases</li>
                                <li className="desc dot">Competitive quotes for IBM renewals</li>
                                <li className="desc dot">Negotiating large deals such as ELA, IULA, ESSO, ISSO etc.</li>
                                <li className="desc dot">Optimization opportunities on existing agreements</li>
                                <li className="desc dot">Benchmark on discounts</li>
                                <li className="desc dot">Administrative tasks, such as license migration or contract consolidation</li>
                                <li className="desc dot">Help with understanding IBM T&C’s and agreement frameworks </li>
                            </ul>
                        </div>
                        <div className='mt2'>
                            <h4 className="title2">Software Asset Management: </h4>
                            <ul className="list2">
                                <li className="desc dot">Effective License Positions (ELP/ Baseline</li>
                                <li className="desc dot">ILMT installation and configuration</li>
                                <li className="desc dot">ILMT upgrade, maintenance and on-going managed service</li>
                                <li className="desc dot">Managed SAM service covering quarterly reporting requirements</li>
                                <li className="desc dot">Hosted ILMT </li>
                                <li className="desc dot">Audit Support  </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseline
