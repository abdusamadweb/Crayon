import './OfferReview.scss'
import React from 'react'

const OfferReview = ({ content }) => {


    const list = content?.google_offer_items?.text?.split("\n")?.filter(line => line.trim() !== "")


    return (
        <div className='offer'>
            <div className="container small">
                <h3 className="offer__title">{ content?.google_offer_title?.text || '...' }</h3>
                <ul className="offer__list">
                    {
                        list?.map(i => (
                            <li className="item" key={i}>{ i }</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default OfferReview
