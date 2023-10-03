import './GlobalRoute.scss'
import React from 'react'
import {Link, useHref} from "react-router-dom"
import BreadCrumb from "../bread-crumb/BreadCrumb"

const GlobalRoute = ({ i }) => {

    const href = useHref()


    return (
        <div className='route'>
            <BreadCrumb href={href} />
            <div className="container small">
                <h2 className="route__title">{ i.title }</h2>
                <ul className="route__list">
                    {
                        i.list?.map(item => (
                            <li className='item'>
                                <Link className='item__link' to={`${i.link}${item.link}`}>{ item.title }</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default GlobalRoute
