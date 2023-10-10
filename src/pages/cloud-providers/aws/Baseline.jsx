import React from 'react'
import {HtmlWithLineBreaks} from "../microsoft/baseline/Baseline";

const Baseline = ({ content }) => {


    const list = content?.aws_baseline_desc2?.text?.split("\n")?.filter(line => line.trim() !== "")


    return (
        <div className='baseline'>
            <div className="container small">
                <div className="baseline__inner">
                    <div>
                        <h3 className="title">{ content?.aws_baseline_title1?.text || '...' }</h3>
                        <HtmlWithLineBreaks text={ content?.aws_baseline_desc1?.text || '...' } />
                    </div>
                    <div className="padding">
                        <h3 className="title">{ content?.aws_baseline_title2?.text || '...' }</h3>
                        <ol className="list numeric">
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
