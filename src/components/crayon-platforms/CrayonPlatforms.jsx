import './CrayonPlatforms.scss'
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import $api from "../../api";

const CrayonPlatforms = ({ title }) => {


    const [news, setNews] = useState([])
    useEffect(() => {
        $api
            .get('/news')
            .then(res => {
                setNews(res.data)
            })
    }, [])


    return (
        <div className='crayon-platforms'>
            <div className="container small">
                {
                    title &&
                    <div className="learn-more">Learn more:</div>
                }
                <ul className='crayon-platforms__list'>
                    {
                        news?.slice(0, 3)?.map(i => (
                            <li className="item" key={i.id}>
                                <div>
                                    <img className='item__img' src={i?.image?.full_url} alt="img"/>
                                    <span className="sub">{ new Date(i.date).toLocaleDateString() }</span>
                                    <h5 className="item__title">{ i.title }</h5>
                                    <p className='item__desc'>{ i.description }</p>
                                </div>
                                <Link className='item__btn read-more pl2' to={`/resources/news/${i.id}`}>Read More</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default CrayonPlatforms