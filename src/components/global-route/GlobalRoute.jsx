import './GlobalRoute.scss'
import React, {useEffect} from 'react'
import {Link, useHref} from "react-router-dom"
import BreadCrumb from "../bread-crumb/BreadCrumb"

const GlobalRoute = ({ i }) => {

    const href = useHref()


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)
    useEffect(() => {
        document.title = `${data?.['app-name']} - ${href.slice(1).toUpperCase()}` || 'DIS'
    }, [data])


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
