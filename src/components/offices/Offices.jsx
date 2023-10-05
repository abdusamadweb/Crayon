import './Offices.scss'
import React, {useState} from 'react'
import {formatPhone} from "../../assets/scripts/global";

const OfficesItem = ({ i }) => {

    const [open, setOpen] = useState(false)


    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <li className={`item ${open ? 'active' : ''}`}>
            <div className='bor row between align-center' onClick={() => setOpen(!open)}>
                <span className='item__title'>{ i }</span>
                <i className={`fa-solid fa-chevron-right icon ${open ? 'active' : ''}`}/>
            </div>
            <div className={`clicked ${open ? 'active' : ''}`}>
                <a className='link' href={`mailto: ${data?.email}`}>{ data?.email || '...' }</a>
                <a className='link' href={`tel: ${data?.phoneNumber}`}>{ formatPhone(data?.phoneNumber || '+12345') }</a>
            </div>
        </li>
    )
}

const Offices = () => {

    const states = [
        'Texas'
    ]


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='offices'>
            <div className='offices__inner'>
                <div className="offices__titles">
                    <span className="txt sub">OUR OFFICES</span>
                    <h4 className="title dotted">
                        Find your closest { data?.['app-name'] } office
                    </h4>
                </div>
                <div className='offices__office row between align-center'>
                    <span className='txt'>United Sates</span>
                    <i className="fa-solid fa-chevron-right icon"/>
                </div>
            </div>
            <div className='offices__wrapper'>
                <span className='txt'>United States</span>
                <ul className='list row'>
                    {
                        states.map(i => (
                            <OfficesItem i={i} key={i} />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default Offices
