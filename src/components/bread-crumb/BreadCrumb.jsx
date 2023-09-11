import './BreadCrumb.scss'
import React from 'react'
import {Link, useHref} from "react-router-dom";

const BreadCrumb = ({ href }) => {

    const pathname = href.split('/').filter((x) => x)

    
    return (
        <ul className='bread-crumb container'>
            <li className='item'>
                <Link className='item__link' to="/">Home</Link>
            </li>
            {
                pathname.map((name, index) => {
                    const routeTo = `/${pathname.slice(0, index + 1).join('/')}`
                    return (
                        <li className='item' key={name}>
                            <span className='item__slash'>/</span>
                            <Link className='item__link' to={routeTo}>{name}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default BreadCrumb
