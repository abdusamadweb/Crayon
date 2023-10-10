import './Baseline.scss'
import React from 'react'


export const HtmlWithLineBreaks = ({ text }) => {
    const htmlText = text.replace(/\n/g, '<br>')

    return (
        <p className='desc' dangerouslySetInnerHTML={{ __html: htmlText }} />
    )
}

const Baseline = ({ content }) => {


    return (
        <div className='baseline'>
            <div className="container small">
                <div className="baseline__inner">
                    <div>
                        <h3 className="title">{ content?.microsoft_baseline_title1?.text || '...' }</h3>
                        <HtmlWithLineBreaks text={content?.microsoft_baseline_desc1?.text || '...'} />
                    </div>
                    <div className='padding'>
                        <h3 className="title">{ content?.microsoft_baseline_title2?.text || '...' }</h3>
                        <p className="desc">Our services span across Microsoft’s 3 clouds:</p>
                        <ol className='list numeric py2'>
                            <li className="desc">Microsoft 365</li>
                            <li className="desc">Azure</li>
                            <li className="desc">Dynamics</li>
                        </ol>
                        <HtmlWithLineBreaks text={content?.microsoft_baseline_desc2?.text || '...'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseline
