import './Titles.scss'
import React from 'react'

const Titles = ({ sub, title }) => {
    return (
        <div className='services-titles'>
            <div className="container">
                <span className="sub">{ sub }</span>
                <h1 className="title">{ title }</h1>
                <a className='btn' href="#contact">TALK TO AN EXPERT</a>
            </div>
        </div>
    )
}

export default Titles
