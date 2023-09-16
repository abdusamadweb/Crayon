import './Bubles.scss'
import React from 'react'

const Bubles = ({ sub, title, data }) => {
    return (
        <div className='bubles'>
            <div className="container small">
                <div className="bubles__titles">
                    <span className="sub">{ sub }</span>
                    <h3 className='title'>{ title }</h3>
                </div>
                <ul className='bubles__list row between g1'>
                    {
                        data.map(i => (
                            <li className="item" key={i.desc}>
                                <img className='item__img' src={i.img} alt="img"/>
                                <p className="item__desc">{ i.desc }</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Bubles
