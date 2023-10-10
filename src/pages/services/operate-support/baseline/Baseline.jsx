import './Baseline.scss'
import React from 'react'

const Baseline = ({ content }) => {


    const list = content?.operate_service_items?.text?.split("\n")?.filter(line => line.trim() !== "")


    return (
        <div className='baseline'>
            <div className="container small">
                <h3 className="title">{ content?.operate_service_title?.text || '...' }</h3>
                <div className="baseline__inner">
                    <div className="width">
                        <h5 className="title2">
                            <em>{ content?.operate_service_italic?.text || '...' }</em>
                        </h5>
                        <p className="desc bold">{ content?.operate_service_desc1?.text || '...' }</p>
                        <p className="desc">{ content?.operate_service_desc2?.text || '...' }</p>
                    </div>
                    <div>
                        <h5 className="title2">{ content?.operate_service_title2?.text || '...' }</h5>
                        <ul className="list">
                            {
                                list?.map(i => (
                                    <li className="desc dot" key={i}>{ i }</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseline
