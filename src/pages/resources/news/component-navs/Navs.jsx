import './Navs.scss'
import React from 'react'

const Navs = ({ activeNav, setActiveNav, title, nav }) => {
    return (
        <div className='navs'>
            <div className="container small">
                <h1 className="navs__title">{ title }</h1>
                <span className="sub">CATEGORIES</span>
                <ul className="navs__list row">
                    {
                        nav?.map(i => (
                            <li
                                className={`item ${activeNav === i.id ? 'active' : ''}`}
                                onClick={() => setActiveNav(i.id)}
                                key={i.id}
                            >
                                { i.title }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navs
