import './Audit.scss'
import React from 'react'
import auditImg from '../../../../assets/images/services/audit-img.png'

const Audit = () => {
    return (
        <div className='audit'>
            <div className="container small">
                <div className="audit__inner">
                    <div className="audit__titles">
                        <h2 className="title">Audit Support</h2>
                        <h6 className="title2">
                            HAVE YOU EVER RECEIVED AN AUDIT FROM A SOFTWARE VENDOR AND NEEDED HELP PREPARING THE REQUIRED REPORTS?
                        </h6>
                        <p className="desc">
                            Our software asset management know-how enables us to specifically identify missing data and thus avoid negative assumptions from the auditors. Benefit from our extensive experience from a large number of license audits from all major vendors (Microsoft, IBM, Adobe, Oracle, and more).
                        </p>
                    </div>
                    <img className='audit__img' src={auditImg} alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default Audit
