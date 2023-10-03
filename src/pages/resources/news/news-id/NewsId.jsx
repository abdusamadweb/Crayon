import './NewsId.scss'
import React, {useEffect, useState} from 'react'
import {Link, useHref, useParams} from "react-router-dom"
import BreadCrumb from "../../../../components/bread-crumb/BreadCrumb"
import $api from "../../../../api"
import {defaultImg} from "../../../../assets/scripts/global"

const NewsId = ({ name }) => {

    const { id } = useParams()
    const href = useHref()


    const [result, setResult] = useState([])
    useEffect(() => {
        $api
            .get(`/${name}/${id}`)
            .then(res => {
                setResult(res.data)
            })
    }, [name, id])


    const [otherNews, setOtherNews] = useState([])
    useEffect(() => {
        $api
            .get(`/${name}?where[id][not]=${id}`)
            .then(res => {
                setOtherNews(res.data)
            })
    }, [name, id])


    const lines = result?.['long-description']?.split('\n')


    return (
        <div className='newsId'>
            <BreadCrumb href={href} />
            <div className='other'>
                <span className="sub">{ `More ${name}` }</span>
                <ul className='other__list row flex-column g1'>
                    {
                        otherNews?.map(i => (
                            <li className="item" key={i.id}>
                                <Link className='item__link' to={`/resources/${name}/${i.id}`}>
                                    <div className='pt1'>
                                        <span className='date'>{ new Date(i.date).toLocaleDateString() }</span>
                                        <span className='title'>{ i.title }</span>
                                    </div>
                                    <img className='img' src={defaultImg(i.image.full_url)} alt="img"/>
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="container small">
                <div className="newsId__titles">
                    <span className="sub">{ name }</span>
                    <h2 className="title">{ result?.title }</h2>
                    <p className="desc">{ result?.description }</p>
                </div>
                <img className='newsId__img' src={defaultImg(result?.image?.full_url)} alt="img"/>
                <p className="desc double-dot">{ result?.quote }</p>
                <div>
                    {lines?.map((line, index) => (
                        <p className='desc mb2' key={index}>{line}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewsId
