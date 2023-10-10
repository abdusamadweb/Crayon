import './Baseline.scss'
import React from 'react'

const Baseline = ({ content }) => {


    const list = content?.healthcare_baseline_desc2?.text?.split("\n")?.filter(line => line.trim() !== "")


    return (
        <div className='baseline'>
            <div className="container small">
                <div className="baseline__inner">
                    <div className="width">
                        <h3 className="title">{ content?.healthcare_baseline_title1?.text || '...' }</h3>
                        <h4 className="title2">{ content?.healthcare_baseline_sub1?.text || '...' }</h4>
                        <p className="desc">{ content?.healthcare_baseline_desc1?.text || '...' }</p>
                    </div>
                    <div>
                        <h3 className="title">{ content?.healthcare_baseline_title2?.text || '...' }</h3>
                        <h4 className="title2">{ content?.healthcare_baseline_sub2?.text || '...' }</h4>
                        <ol className='list numeric'>
                            {
                                list?.map(i => (
                                    <li className="desc" key={i}>{ i }</li>
                                ))
                            }
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseline
