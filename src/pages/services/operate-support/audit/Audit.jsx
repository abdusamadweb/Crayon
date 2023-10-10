import './Audit.scss'
import React from 'react'
import {defaultImg} from "../../../../assets/scripts/global";

const Audit = ({ img, content }) => {
    return (
        <div className='audit'>
            <div className="container small">
                <div className="audit__inner">
                    <div className="audit__titles">
                        <h2 className="title">{ content?.operate_baseline_title?.text || '...' }</h2>
                        <h6 className="title2">{ content?.operate_baseline_sub?.text || '...' }</h6>
                        <p className="desc">{ content?.operate_baseline_desc?.text || '...' }</p>
                    </div>
                    <img className='audit__img' src={defaultImg(img)} alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default Audit
