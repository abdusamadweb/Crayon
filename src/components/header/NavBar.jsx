import React, {useState} from 'react'
import navList from "../../assets/scripts/navList";
import {Link, NavLink} from "react-router-dom";

const NavBar = ({ openNav, setOpenNav }) => {


    const [activeNav, setActiveNav] = useState(0)
    const [activeNavTitle, setActiveNavTitle] = useState(navList[0].title)


    return (
        <nav className={`nav ${openNav ? 'active' : ''}`}>
            <div className="container">
                <ul className='nav__list row flex-column'>
                    {
                        navList.map((i, index) => (
                            <li
                                className='item d-flex align-center'
                                key={index}
                                onMouseEnter={() => {
                                    setActiveNav(index)
                                    setActiveNavTitle(i.title)
                                }}
                            >
                                <Link
                                    className='link'
                                    to={i.link}
                                    onClick={() => setOpenNav(false)}
                                >
                                    { i.title }
                                </Link>
                                {
                                    i.list &&
                                    <i className="fa-solid fa-chevron-right icon"/>
                                }
                            </li>
                        ))
                    }
                </ul>
                <ul className='nav__list list2 row flex-column'>
                    <li className='txt'>{ activeNavTitle }</li>
                    {
                        navList[activeNav].list?.map(i => (
                            <li className='item' key={i.title}>
                                <NavLink
                                    className='item__link'
                                    to={navList[activeNav].link + i.link}
                                    onClick={() => setOpenNav(false)}
                                >
                                    { i.title }
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}

export default NavBar
