import React from 'react'

const Baseline = () => {


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='baseline'>
            <div className="container small">
                <div className="baseline__inner">
                    <div>
                        <h3 className="title">
                            All of the tools your business needs and employees love
                        </h3>
                        <p className="desc">
                            { data?.['app-name'] } is an Adobe Premium Reseller, with extensive knowledge in both Creative Cloud, Acrobat DC and Adobe for the Education sector.
                        </p>
                        <p className="desc">The key benefits of buying Adobe from { data?.['app-name'] } are:  </p>
                        <ul className="list">
                            <li className="desc dot">Software that’s always up to date </li>
                            <li className="desc dot">A dedicated contact person at { data?.['app-name'] } and fast support when you need it </li>
                            <li className="desc dot">Thousands of tutorials to help you make the most of your software </li>
                            <li className="desc dot">The most competitive pricing and volume discounts </li>
                        </ul>
                    </div>
                    <div className="padding">
                        <h3 className="title">We’re here to help.</h3>
                        <p className="desc">
                            When you buy Adobe Creative Cloud through { data?.['app-name'] } you get a dedicated contact person. Our local experienced consultants are always ready to lend a helping hand.
                        </p>
                        <p className="desc">
                            Whether you want help with optimal license management or support for single applications and users, you will know who to turn to.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Baseline
