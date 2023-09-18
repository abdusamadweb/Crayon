import React from 'react'

const Baseline = () => {
    return (
        <div className='baseline'>
            <div className="container small">
                <div className="baseline__inner">
                    <div>
                        <h3 className="title">
                            Crayon and AWS better together
                        </h3>
                        <p className="desc">
                            Crayon has long experience in helping customers migrate to the cloud, modernizing their applications to utilize cloud-native services, and delivering Managed Services to our customers.
                        </p>
                        <p className="desc">
                            Adoption of cloud services covers a wide range of topics from application requirements to technical skills and operational processes. When deploying your applications to the cloud we want to ensure that you identify the right workloads to move in the right order to the right technology platform.
                        </p>
                        <p className="desc">
                            Putting the customer first is in the DNA for both Crayon and AWS, to ensure your solution is secure, cost-effective and running at peak performance.
                        </p>
                        <p className="desc">
                            Following the Crayon Cloud Adoption Framework, we utilize a data-driven approach to assess and analyze the current infrastructure with a special focus on Cost, Performance, Optimization and Licensing.
                        </p>
                        <p className="desc">
                            This results in a Total Cost of Ownership (TCO) -based Cloud Migration plan that safely guides our customers to the cloud.
                        </p>
                    </div>
                    <div className="padding">
                        <h3 className="title">
                            Services delivered to our AWS customers
                        </h3>
                        <ol className="list numeric">
                            <li className="desc">
                                Cloud Economics. Using tools such as Cloudamize and CloudHealth we can propose the right size of your infrastructure.
                            </li>
                            <li className="desc">
                                Well-Architected Review. Optimizing workloads in the AWS cloud.
                            </li>
                            <li className="desc">
                                Cloud migration. We’ll help you build your business case for cloud migration with our migration assessments.
                            </li>
                            <li className="desc">
                                AI, Machine Learning and IoT. Streamline manual processes and develop data-based decision support.
                            </li>
                            <li className="desc">
                                DevOps. Fast-tracking your route to operational excellence in the cloud.
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseline
