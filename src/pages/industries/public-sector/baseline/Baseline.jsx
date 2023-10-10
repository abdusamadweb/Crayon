import './Baseline.scss'
import React from 'react'
import {HtmlWithLineBreaks} from "../../../cloud-providers/microsoft/baseline/Baseline";

const Baseline = ({ content }) => {


    const list1 = content?.sector_baseline_items1?.text?.split("\n")?.filter(line => line.trim() !== "")
    const list2 = content?.sector_baseline_items2?.text?.split("\n")?.filter(line => line.trim() !== "")


    return (
        <div className='baseline'>
            <div className="container small">
                <div className="baseline__inner">
                    <div className="width">
                        <h3 className="title">{ content?.sector_baseline_title1?.text || '...' }</h3>
                        <HtmlWithLineBreaks text={ content?.sector_baseline_desc1?.text || '...' } />
                        <ul className="list">
                            {
                                list1?.map(i => (
                                    <li className="desc dot" key={i}>{ i }</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="title">{ content?.sector_baseline_title2?.text || '...' }</h3>
                        <HtmlWithLineBreaks text={ content?.sector_baseline_desc2?.text || '...' } />
                        <ul className='list2'>
                            {
                                list2?.map(i => (
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
