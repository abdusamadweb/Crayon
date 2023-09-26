import './Blogs.scss'
import React, {useState} from 'react'
import {useHref} from "react-router-dom";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import Navs from "../component-navs/Navs";
import {blogsList, blogsNav} from "../../../assets/scripts/blogsList";
import CrayonPlatforms from "../../../components/crayon-platforms/CrayonPlatforms";

const Blogs = () => {

    const href = useHref()


    const [activeNav, setActiveNav] = useState('all');
    const blogs = blogsList[activeNav]


    return (
        <div className='blogs resources'>
            <BreadCrumb href={href} />
            <Navs
                activeNav={activeNav}
                setActiveNav={setActiveNav}
                title='Blogs'
                nav={blogsNav}
            />
            <div className="container small">
                <div>
                    <img className='blogs__img' src={blogs.img} alt="img"/>
                    <div className='blogs__titles'>
                        <h4 className="title">{ blogs.title }</h4>
                        <div>
                            <p className="desc">{ blogs.desc }</p>
                            {/*<Link className='read-more' to='/'>Read more</Link>*/}
                        </div>
                    </div>
                </div>
                <ul className="blogs__news">
                    {
                        blogs.news.map((i, index) => (
                            <li className="item" key={index}>
                                <span className='item__date'>{ i.date }</span>
                                <div className='item__title'>{ i.title }</div>
                                <p className="item__desc">{ i.desc }</p>
                                {/*<Link className='read-more' to='/'>Read More</Link>*/}
                            </li>
                        ))
                    }
                </ul>
                <ul className="blogs__clouds">
                    {
                        blogs.blogs.map((i, index) => (
                            <li className='item' key={index}>
                                <img className='item__img' src={i.img} alt="img"/>
                                <div className='item__inner'>
                                    <span className='date'>{ i.date }</span>
                                    <div className='title'>{ i.title }</div>
                                    <p className="desc">{ i.desc }</p>
                                    {/*<Link className='read-more' to='/'>Read More</Link>*/}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <CrayonPlatforms />
        </div>
    )
}

export default Blogs
