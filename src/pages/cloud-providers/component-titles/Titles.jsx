import './Titles.scss'
import React from 'react'

const Titles = ({ sub, title, desc1, desc2, strong, list }) => {
    return (
        <div className='titles'>
            <div className="container small">
                <div className="titles__inner">
                    <div>
                        <span className="sub">{ sub }</span>
                        <h1 className="title">{ title }</h1>
                    </div>
                    <div className='padding'>
                        <p className="desc">{ desc1 }</p>
                        {
                            list &&
                            <ul className='list py2'>
                                {
                                    list.map(i => (
                                        <li className='desc dot' key={i}>{ i }</li>
                                    ))
                                }
                            </ul>
                        }
                        <div>
                            {
                                strong &&
                                <strong className='desc strong'>{ strong }</strong>
                            }
                            <p className="desc">{ desc2 }</p>
                        </div>
                        <a className='btn mt2' href="#contact">Talk to an expert</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Titles
