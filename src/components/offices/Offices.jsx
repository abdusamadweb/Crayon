import './Offices.scss'
import React, {useState} from 'react'
import {formatPhone} from "../../assets/scripts/global";

const OfficesItem = ({ i }) => {

    const [open, setOpen] = useState(false)


    return (
        <li className={`item ${open ? 'active' : ''}`}>
            <div className='bor row between align-center' onClick={() => setOpen(!open)}>
                <span className='item__title'>{ i }</span>
                <i className={`fa-solid fa-chevron-right icon ${open ? 'active' : ''}`}/>
            </div>
            <div className={`clicked ${open ? 'active' : ''}`}>
                <a className='link' href="tel: +14696464038">{formatPhone('+14696464038')}</a>
                <a className='link' href="mailto: contact.us@crayon.com">Contact.us@crayon.com</a>
            </div>
        </li>
    )
}

const Offices = () => {

    const states = [
        'Austin',
        'Boston',
        'Charlotte',
        'Chicago',
        'Cleveland',
        'Dallas',
        'Denver',
        'Irvine',
        'Minneapolis',
        'New York',
        'Seattle',
        'Tampa',
    ]


    return (
        <div className='offices'>
            <div className='offices__inner'>
                <div className="offices__titles">
                    <span className="txt sub">OUR OFFICES</span>
                    <h4 className="title dotted">
                        Find your closest Crayon office
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
