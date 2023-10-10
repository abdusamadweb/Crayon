import './News.scss'
import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom";
import $api from "../../../api";
import {getContent} from "../../../api/apiConfig";

const News = () => {


    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        $api
            .get('/blogs')
            .then(res => setBlogs(res.data))
    }, [])

    const [news, setNews] = useState([])
    useEffect(() => {
        $api
            .get('/news')
            .then(res => setNews(res.data))
    }, [])


    // content
    const [content, setContent] = useState([])
    const str = 'home_news_title'
    useEffect(() => {
        const get = async () => {
            const res = await getContent(str)
            setContent(res)
        }
        get()
    }, [])


    return (
        <div className='news'>
            <div className="container">
                <div className="news__inner">
                    <div className="news__titles">
                        <span className='txt'>NEWS</span>
                        <h1 className="title">{ content?.home_news_title?.text || 'News' }</h1>
                        <Link className='btn' to='/resources/blogs'>View all articles</Link>
                    </div>
                    <ul className="news__teams">
                        {
                            news?.slice(0, 2)?.map(i => (
                                <li className='mb3' key={i.id}>
                                    <span className='date'>{ new Date(i.date).toLocaleDateString() }</span>
                                    <h4 className="title">{ i.title }</h4>
                                    <p className="desc">{ i.description }</p>
                                    <Link className='link read-more' to={`/resources/news/${i.id}`}>Read more</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <ul className="news__wrapper">
                    {
                        blogs?.slice(0, 4)?.map(i => (
                            <li className="item" key={i.id}>
                                <img className='item__img' src={i?.image?.full_url} alt="img"/>
                                <div className='p1 row flex-column between h100'>
                                    <div>
                                        <span className='item__date'>{ new Date(i.date).toLocaleDateString() }</span>
                                        <h5 className="item__title">{ i.title }</h5>
                                        <p className='item__desc'>{ i.description }</p>
                                    </div>
                                    <Link className='item__link read-more' to={`/resources/blogs/${i.id}`}>Read more</Link>
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
