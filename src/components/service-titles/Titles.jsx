import './Titles.scss'
import React, {useEffect, useState} from 'react'
import $api from "../../api";

const Titles = ({ sub, title, desc }) => {

    return (
        <div className='services-titles'>
            <div className="container">
                <span className="sub">{ sub }</span>
                <div className='width'>
                    <h1 className="title">{ title }</h1>
                    {(
                        desc &&
                        <p className="desc">{ desc }</p>
                    )}
                </div>
                <a className='btn' href="#contact">TALK TO AN EXPERT</a>
            </div>
        </div>
    )
}

export default Titles
