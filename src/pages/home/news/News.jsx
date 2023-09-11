import './News.scss'
import React from 'react'
import {Link} from "react-router-dom";
import blogs1 from '../../../assets/images/blogs1.jpg'

const News = () => {
    return (
        <div className='news'>
            <div className="container">
                <div className="news__inner">
                    <div className="news__titles">
                        <span className='txt'>NEWS</span>
                        <h1 className="title">
                            Stay updated on our latest news and articles
                        </h1>
                        <Link className='btn' to='/resources/blogs'>View all articles</Link>
                    </div>
                    <div className="news__teams">
                        <div className='mb3'>
                            <span className='date'>8/15/2023</span>
                            <h4 className="title">Teams Phone: Cloud Benefits</h4>
                            <p className="desc">
                                Boost collaboration with Teams Phone. Experience cloud telephony advantages, enhanced security, and expert integration with Anywhere365 and Crayon.
                            </p>
                            <Link className='link read-more' to='/blogs'>Read more</Link>
                        </div>
                        <div>
                            <h4 className="title">
                                Why and how to build a multicloud Center of Excellence
                            </h4>
                            <p className="desc">
                                Setting up a Cloud Center of Excellence is an ideal way to position your organization for success when you embrace the complexity of multicloud solutions
                            </p>
                            <Link className='link read-more' to='/blogs'>Read more</Link>
                        </div>
                    </div>
                </div>
                <ul className="news__wrapper">
                    <li className="item">
                        <img className='item__img' src={blogs1} alt="img"/>
                        <div className='p1'>
                            <h5 className="item__title">
                                Crayon Reduces Monthly Cloud Spend for Banyan Technology by 21% with Cloud Economics
                            </h5>
                            <p className='item__desc'>
                                Crayon identified 21% of monthly savings for Banyan Technology after performing a cloud economics to rightsize their azure environment and lower their spending.
                            </p>
                            <Link className='item__link read-more' to='/blogs/'>Read more</Link>
                        </div>
                    </li>
                    <li className="item">
                        <img className='item__img' src={blogs1} alt="img"/>
                        <div className='p1'>
                            <h5 className="item__title">
                                Crayon Reduces Monthly Cloud Spend for Banyan Technology by 21% with Cloud Economics
                            </h5>
                            <p className='item__desc'>
                                Crayon identified 21% of monthly savings for Banyan Technology after performing a cloud economics to rightsize their azure environment and lower their spending.
                            </p>
                            <Link className='item__link read-more' to='/blogs/'>Read more</Link>
                        </div>
                    </li>
                    <li className="item">
                        <img className='item__img' src={blogs1} alt="img"/>
                        <div className='p1'>
                            <h5 className="item__title">
                                Crayon Reduces Monthly Cloud Spend for Banyan Technology by 21% with Cloud Economics
                            </h5>
                            <p className='item__desc'>
                                Crayon identified 21% of monthly savings for Banyan Technology after performing a cloud economics to rightsize their azure environment and lower their spending.
                            </p>
                            <Link className='item__link read-more' to='/blogs/'>Read more</Link>
                        </div>
                    </li>
                    <li className="item">
                        <img className='item__img' src={blogs1} alt="img"/>
                        <div className='p1'>
                            <h5 className="item__title">
                                Crayon Reduces Monthly Cloud Spend for Banyan Technology by 21% with Cloud Economics
                            </h5>
                            <p className='item__desc'>
                                Crayon identified 21% of monthly savings for Banyan Technology after performing a cloud economics to rightsize their azure environment and lower their spending.
                            </p>
                            <Link className='item__link read-more' to='/blogs/'>Read more</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default News
