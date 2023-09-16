import './Baseline.scss'
import React from 'react'

const Baseline = () => {
    return (
        <div className='baseline'>
            <div className="container small">
                <div className="baseline__inner">
                    <div className="width">
                        <h3 className="title">
                            Services Overview
                        </h3>
                    </div>
                    <div>
                        <h3 className="title d-block">
                            Discover our Data & AI solutions:
                        </h3>
                    </div>
                </div>
                <div className="baseline__inner">
                    <div className='width'>
                        <div>
                            <p className="desc">
                                Develop and deploy scalable AI-powered solutions for generating continuous business value:
                            </p>
                            <ol className="list numeric mb3">
                                <li className="item">
                                    <strong className='strong'>AI Opportunity Assessment</strong>
                                    <p className="desc">
                                        Identify AI opportunities that deliver real value by assessing the business problem and existing data.
                                    </p>
                                </li>
                                <li className="item">
                                    <strong className='strong'>AI Solution Validation</strong>
                                    <p className="desc">
                                        Ensure the business value and technical feasibility of the AI solution by developing a prototype.
                                    </p>
                                </li>
                                <li className="item">
                                    <strong className='strong'>AI Solution in Production</strong>
                                    <p className="desc">
                                        Deliver business value with actionable results by extending the prototype to a production-ready AI solution and deploying it.
                                    </p>
                                </li>
                                <li className="item">
                                    <strong className='strong'>AI Model Management</strong>
                                    <p className="desc">
                                        Ensure the continuous quality and relevance of your AI solution by automating model monitoring and maintenance.
                                    </p>
                                </li>
                            </ol>
                        </div>
                        <p className="desc">You'll get:</p>
                        <p className="desc">Purpose- and value-driven AI-powered solutions in production</p>
                        <ol className="list list2 numeric">
                            <li className="desc">
                                We ensure efficiency, quality, and speed in our end-to-end delivery process: from data assessment to AI model deployment and maintenance in production
                            </li>
                            <li className="desc">
                                We tailor our solutions to individual customer needs to deliver continuous business value
                            </li>
                            <li className="desc">We provide top quality advisory through our highly experienced experts in areas like Computer Vision, Natural Language Processing, Data Insights, and Data Platform.</li>
                        </ol>
                    </div>
                    <div>
                        <h3 className="title d-none">
                            Discover our Data & AI solutions:
                        </h3>
                        <div>
                            <h6 className="title2">DATA-DRIVEN MAINTENANCE</h6>
                            <p className="desc">
                                Data-Driven Maintenance is a customized end-to-end Data Insights solution that provides you with actionable insights which empower experts on the field to operate your assets with high efficiency through intelligent monitoring, notification and recommended actions.
                            </p>
                        </div>
                        <div>
                            <h6 className="title2">VISUAL QUALITY INSPECTION</h6>
                            <p className="desc">
                                Visual Quality Inspection is the process of using Computer Vision technologies and AI/ML models to detect defects or anomalies in images or videos of parts or products. This process can help manufacturers improve their quality control processes by reducing the risk of missed defects or false positives, and increasing efficiency by automating manual inspections.
                            </p>
                        </div>
                        <div>
                            <h6 className="title2">INCIDENT ANALYSIS</h6>
                            <p className="desc">
                                Incident Analysis is a customized end-to-end Language Technologies solution that includes stages from data integration and collection to machine learning model deployment to automatically generate insights on incoming safety incident descriptions.
                            </p>
                        </div>
                        <div>
                            <h6 className="title2">MACHINE LEARNING OPERATIONS</h6>
                            <p className="desc">
                                Machine Learning Operations extend established DevOps practice with the specific requirements of maintaining the lifecycle of machine learning models to speed up the time from idea to production while at the same time ensuring stability and reproducibility. Specifically, MLOps automates the data preparation, training and validation phases, and applies CI/CD to deploy the model to the target environment.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseline
