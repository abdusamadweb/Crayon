import './Baseline.scss'
import React from 'react'

const Baseline = () => {
    return (
        <div className='baseline'>
            <div className="container small">
                <div className="baseline__inner">
                    <div>
                        <h3 className="title">Microsoft Experts for Two Decades</h3>
                        <p className='desc'>
                            Crayon has a long-standing relationship globally with Microsoft.
                        </p>
                        <p className="desc">
                            From our company’s beginning we’ve grown from being one of the best license resellers in the world to becoming a company that has built their services around cloud technology and digital transformation.
                        </p>
                        <p className="desc">
                            As well as being world leaders in Software Asset Management.
                        </p>
                    </div>
                    <div className='padding'>
                        <h3 className="title">All Three Clouds</h3>
                        <p className="desc">Our services span across Microsoft’s 3 clouds:</p>
                        <ol className='list numeric py2'>
                            <li className="desc">Microsoft 365</li>
                            <li className="desc">Azure</li>
                            <li className="desc">Dynamics</li>
                        </ol>
                        <p className="desc">
                            We are one of the few partners worldwide that has the Azure Expert MSP status, given to partners that can document deep technical knowledge of the Azure platform.
                        </p>
                        <p className="desc">
                            We help our customers adopt and utilize their Microsoft technology, as well as optimize their license and cloud costs.
                        </p>
                        <p className="desc">
                            We also build custom solutions with AI and Machine Learning.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseline
