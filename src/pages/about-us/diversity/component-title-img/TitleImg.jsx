import './TitleImg.scss'
import React from 'react'

const TitleImg = ({ title, desc1, desc2, desc3, desc4, img, bgColor, color, alignItems, reverse }) => {
    return (
        <div className='titleImg' style={{background: bgColor, color: color}}>
            <div className="container small">
                <div className="titleImg__inner" style={{alignItems: alignItems}}>
                    {
                        !reverse ?
                            <>
                                <div className='padd'>
                                    <h6 className="title sub">{ title }</h6>
                                    <p className="desc">{ desc1 }</p>
                                    <p className="desc">{ desc2 }</p>
                                    <p className="desc">{ desc3 }</p>
                                    <p className="desc">{ desc4 }</p>
                                </div>
                                <img className='img' src={img} alt="img"/>
                            </>
                            :
                            <>
                                <img className='img padd' src={img} alt="img"/>
                                <div>
                                    <h6 className="title sub">{ title }</h6>
                                    <p className="desc">{ desc1 }</p>
                                    <p className="desc">{ desc2 }</p>
                                    <p className="desc">{ desc3 }</p>
                                    <p className="desc">{ desc4 }</p>
                                </div>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default TitleImg
