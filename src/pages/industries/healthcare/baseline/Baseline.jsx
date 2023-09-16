import './Baseline.scss'
import React from 'react'

const Baseline = () => {
    return (
        <div className='baseline'>
            <div className="container small">
                <div className="baseline__inner">
                    <div className="width">
                        <h3 className="title">
                            Let's get your Data ready to go!
                        </h3>
                        <h4 className="title2">
                            What is a Crayon Envision Session?
                        </h4>
                        <p className="desc">
                            The Crayon Data Envision Session is a workshop aiming to understand your business and data use cases. The client will collaborate with Crayon data architects to identify business use cases and develop a roadmap that helps a business create a vision for its data, identify the biggest ROIs on data improvements, outline inefficiencies, and offer prescriptive approaches on how to realize the financial and business gains.
                        </p>
                    </div>
                    <div>
                        <h3 className="title">
                            Ready for a custom solution?
                        </h3>
                        <h4 className="title2">
                            Sample Envision Session Process
                        </h4>
                        <ol className='list numeric'>
                            <li className="desc">
                                Discovery/whiteboard sessions with business and IT stakeholders to gain insight into the current data estate
                            </li>
                            <li className="desc">
                                Crayon to provide a high-level solution design of possible future state addressing remediation of identified pain points and data/analytics platforms that support business strategy and identified needs
                            </li>
                            <li className="desc">
                                Identify initial pilots and PoC
                            </li>
                            <li className="desc">
                                Identify Migration and Transformation strategies
                            </li>
                            <li className="desc">
                                Crayon will provide a high-level roadmap and best practices to prepare for a scalable architecture
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseline
