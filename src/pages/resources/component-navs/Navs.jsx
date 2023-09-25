import './Navs.scss'
import React from 'react'
import {caseNav} from "../../../assets/scripts/caseList";

const Navs = ({ activeNav, setActiveNav }) => {
    return (
        <div className='navs'>
            <div className="container small">
                <h1 className="navs__title">Case Studies</h1>
                <span className="sub">CATEGORIES</span>
                <ul className="navs__list row">
                    {
                        caseNav.map(i => (
                            <li
                                className={`item ${activeNav === i ? 'active' : ''}`}
                                onClick={() => setActiveNav(i)}
                                key={i}
                            >
                                { i }
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Navs
