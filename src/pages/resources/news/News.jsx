import './News.scss'
import React, {useEffect, useState} from 'react'
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import {Link, useHref} from "react-router-dom";
import $api from "../../../api";
import Navs from "./component-navs/Navs";
import {defaultImg} from "../../../assets/scripts/global";

const News = ({ name }) => {

    const href = useHref()


    const [activeNav, setActiveNav] = useState('')
    const [navs, setNavs] = useState([])
    useEffect(() => {
        $api
            .get(`/${name}-category`)
            .then(res => {
                setNavs(res.data)
                setActiveNav(res.data[0].id)
            })
    }, [name])
    const nav = navs.find(i => i.id === activeNav)

    const [news, setNews] = useState([])
    useEffect(() => {
        if (activeNav !== '') {
            $api
                .get(`/${name}?where[${name}-category-id]=${activeNav}`)
                .then(res => {
                    setNews(res.data)
                })
        }
    }, [activeNav, name])


    return (
        <div className='blogs resources'>
            <BreadCrumb href={href} />
            <Navs
                activeNav={activeNav}
                setActiveNav={setActiveNav}
                title={name}
                nav={navs}
            />
            <div className="container small">
                <div>
                    <img className='blogs__img' src={defaultImg(nav?.image?.full_url)} alt="img"/>
                    <div className='blogs__titles'>
                        <h4 className="title">{ nav?.title }</h4>
                        <div>
                            <p className="desc">{ nav?.description }</p>
                            {/*<Link className='read-more' to='/'>Read more</Link>*/}
                        </div>
                    </div>
                </div>
                <ul className="blogs__news">
                    {
                        news?.map(i => (
                            <li className="item row flex-column between" key={i.id}>
                                <div>
                                    <span className='item__date'>{ new Date(i.date).toLocaleDateString() }</span>
                                    <div className='item__title'>{ i.title }</div>
                                    <p className="item__desc">{ i.description }</p>
                                </div>
                                <Link className='read-more' to={`${i.id}`}>Read More</Link>
                            </li>
                        ))
                    }
                </ul>
                <ul className="blogs__clouds">
                    {
                        news?.slice(0, 2)?.map(i => (
                            <li className='item' key={i.id}>
                                <img className='item__img' src={defaultImg(i.image?.full_url)} alt="img"/>
                                <div className='item__inner row flex-column between'>
                                    <div>
                                        <span className='date'>{ new Date(i.date).toLocaleDateString() }</span>
                                        <div className='title'>{ i.title }</div>
                                        <p className="desc">{ i.description }</p>
                                    </div>
                                    <Link className='read-more' to={`${i.id}`}>Read More</Link>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default News
