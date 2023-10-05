import './Ceo.scss'
import React from 'react'
import vd from '../../../../assets/images/diversity/diversity-video.mp4'

const Ceo = () => {


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    return (
        <div className='ceo human'>
            <div className="container small">
                <div className="human__inner align-center">
                    <div className="padd">
                        <h3 className="title">CEO Action for Diversity</h3>
                        <p className="desc">
                            We're thrilled that { data?.['app-name'] } has joined the #CEOAction pledge, aligning with over 2,400 other global organizations. This CEO-driven commitment is a testament to our steadfast dedication to enhancing diversity and inclusion within our workspace, creating an environment where everyone is recognized and valued.
                        </p>
                        <p className="desc">
                            At { data?.['app-name'] }, diversity and inclusion are fundamental tenets of our culture. This pledge reinforces our mission to ensure that every voice is heard and every person is seen. We aim to cultivate an environment where each unique perspective contributes to our collective vision, propelling us toward an even more inclusive future.
                        </p>
                    </div>
                    <video
                        className='img vd'
                        loop={true}
                        controls={true}
                    >
                        <source src={vd} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Ceo
