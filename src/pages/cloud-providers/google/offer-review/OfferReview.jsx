import './OfferReview.scss'
import React from 'react'

const OfferReview = () => {
    return (
        <div className='offer'>
            <div className="container">
                <h3 className="offer__title">Offer Review</h3>
                <ul className="offer__list">
                    <li className="item">
                        Ready for an implementation plan? This service is for you! We call this the "Move & Improve” infrastructure plan. Learn more about a Google Cloud Migration.
                    </li>
                    <li className="item">
                        How effective are you at transforming data into value? Find out with a 3-minute survey with instant results.
                    </li>
                    <li className="item">
                        This approach focuses on understanding your environment today, identifying and defining value-based opportunities, creating a total cost of ownership model, and building a roadmap.
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default OfferReview
