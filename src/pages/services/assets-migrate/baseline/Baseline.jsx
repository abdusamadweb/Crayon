import './Baseline.scss'
import React from 'react'
import {defaultImg} from "../../../../assets/scripts/global";
import {HtmlWithLineBreaks} from "../../../cloud-providers/microsoft/baseline/Baseline";

const Baseline = ({ img, content }) => {


    // desc3
    function formatData(data) {
        const lines = data?.split('\n')
        return lines?.map((line, index) => {
            const parts = line?.split(' – ')
            if (parts.length === 2) {
                const firstWord = parts[0]
                const restOfLine = parts[1]
                return (
                    <p className='desc' key={index}>
                        <span>{firstWord}</span> – {restOfLine}
                    </p>
                )
            } else {
                return <p className='desc' key={index}>{line}</p>
            }
        })
    }

    const list1 = content?.assess_baseline_items1?.text?.split("\n")?.filter(line => line.trim() !== "")
    const list2 = content?.assess_baseline_items2?.text?.split("\n")?.filter(line => line.trim() !== "")


    return (
        <div className='baseline'>
            <div className="container small">
                <img className='baseline__img' src={defaultImg(img)} alt="img"/>
                <div className="baseline__inner margin">
                    <div className='width'>
                        <h3 className="title">{ content?.assess_baseline_title1?.text || '...' }</h3>
                        <h5 className="title2">{ content?.assess_baseline_sub?.text || '...' }</h5>
                        <HtmlWithLineBreaks text={ content?.assess_baseline_desc1?.text || '...' } />
                    </div>
                    <div>
                        <h3 className="title">{ content?.assess_baseline_title2?.text || '...' }</h3>
                        {
                            formatData(content?.assess_baseline_desc2?.text)
                        }
                    </div>
                </div>
                <div className="baseline__inner">
                    <div className="width">
                        <h3 className="title">{ content?.assess_baseline_title3?.text || '...' }</h3>
                        <HtmlWithLineBreaks text={ content?.assess_baseline_desc3?.text || '...' } />
                        <ul className='list'>
                            {
                                list1?.map(i => (
                                    <li className="desc dot" key={i}>{ i }</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="title">{ content?.assess_baseline_title4?.text || '...' }</h3>
                        <ul className='list'>
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
