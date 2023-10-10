import './Baseline.scss'
import React from 'react'

const Baseline = ({ content }) => {


    const list = content?.govern_baseline_items?.text?.split("\n")?.filter(line => line.trim() !== "")


    return (
        <div className='baseline'>
            <div className="container small">
                <div className="baseline__inner">
                    <div className='width'>
                        <h4 className="title">{ content?.govern__baseline_title?.text || '...' }</h4>
                        <h5 className="title2">{ content?.govern_baseline_desc?.text || '...' }</h5>
                    </div>
                    <div>
                        <strong className='strong'>{ content?.govern_baseline_title2?.text || '...' }</strong>
                        <ul className='list'>
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
