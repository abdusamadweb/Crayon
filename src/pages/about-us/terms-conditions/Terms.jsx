import './Terms.scss'
import React, {useEffect, useState} from 'react'
import {useHref} from "react-router-dom";
import BreadCrumb from "../../../components/bread-crumb/BreadCrumb";
import $api from "../../../api";

const Terms = () => {

    const href = useHref()


    // page title
    const storedData = localStorage.getItem('globalData')
    const data = JSON.parse(storedData)


    const [links, setLinks] = useState([])
    useEffect(() => {
        $api
            .get('/social-links')
            .then(res => setLinks(res.data[0]))
    }, [])


    return (
        <div className='terms'>
            <BreadCrumb href={href} />
            <div className="social absolute">
                <span className="sub">SHARE</span>
                <div>
                    <a className='link' href={links?.facebook} target='_blank'>
                        <i className="fa-brands fa-facebook-f icon"/>
                    </a>
                    <a className='link' href={links?.linkedin} target='_blank'>
                        <i className="fa-brands fa-linkedin-in icon"/>
                    </a>
                    <a className='link' href={links?.twitter} target='_blank'>
                        <i className="fa-brands fa-twitter icon"/>
                    </a>
                </div>
            </div>
            <div className="container small">
                <div className="terms__titles">
                    <span className="sub">CHANNEL SERVICES</span>
                    <h2 className="title">Terms and conditions</h2>
                </div>
                <span className='date'>04/02/2021</span>
                <div className='wrap'>
                    <h4 className="title2">1. General terms and conditions</h4>
                    <p className="desc">The following terms and expressions shall, whenever used in the Agreement, have the following meanings:</p>
                </div>
                <div className="wrap">
                    <h4 className="title2">1.1. Definitions</h4>
                    <p className="desc">The following terms and expressions shall, whenever used in the Agreement, have the following meanings:</p>
                    <ul className='list'>
                        <li className="desc dot">
                            <b>Agreement</b> means, as amended from time to time, the signed <b>Channel Partner</b> <b>Agreement</b> document to which this Terms and Conditions is part
                        </li>
                        <li className="desc dot">
                            <b>Partner</b> means, the Channel Partner that is signing this <b>Agreement</b>.
                        </li>
                        <li className="desc dot">
                            <b>Licensor/Publisher/Supplier</b> means (i) the manufacturer of the software provided, (ii) the company being the Partner’s counterpart in the software license agreement, and/or (iii) the company to which { data?.['app-name'] } reports Partner’s License Use and (if applicable) pays license fees on behalf of the
                        </li>
                        <li className="desc dot">
                            <b>License</b> Use means <b>Licensor/Publisher/Supplier</b> use rights of licensed
                        </li>
                        <li className="desc dot">
                            <b>Territory</b> means, the countries & regions where the Partner is allowed to sell and transact as per its local regulations. This agreement doesn’t limit the Partner to sell or transact in any country unless its explicitly mentioned in this
                        </li>
                        <li className="desc dot">
                            Third Party Product(s)/Product(s) means products or services provided by the Licensor/Publisher/Supplier under this Agreement.
                        </li>
                        <li className="desc dot">
                            <b>End User/End-Customer</b> means the individual and/or the organization who uses the <b>Product</b> after it has been fully developed, deployed and
                        </li>
                        <li className="desc dot">
                            <b>Cap</b> means the total monthly volume of Azure or Amazon services which the Partner is permitted to use, as further defined in Clause 3 below.
                        </li>
                        <li className="desc dot">
                            <b>Barrier</b> shall have the same meaning as described to such term in section 2.3.1 below.
                        </li>
                        <li className="desc dot">
                            <b>Deposit Amount</b> shall have the meaning ascribed to such term in Clause 2.3.3 below.
                        </li>
                    </ul>
                </div>
                <div className="wrap">
                    <h4 className="title2">1.2. Licensing programs support</h4>
                    <p className="desc">
                        { data?.['app-name'] } shall be available for general questions via telephone, e-mail and/or chat through the designated channel in regards to Licensor/Publisher/Supplier Products.
                    </p>
                </div>
                <div className="wrap">
                    <h4 className="title2">1.3. Term and termination</h4>
                    <p className="desc">
                        If one party breaches this Agreement, the other party may terminate this Agreement upon thirty (30) days’ notice by serving the breaching party either i) a written notice to that effect including a description of the breach or ii) the option to request for rectification of the breach. In case the breaching party rectifies the breach to satisfaction, within the thirty (30) days period, this Agreement shall continue in full force and effect. If the option to rectify is not exercised or the breach is not rectified to satisfaction, all Licensing Agreements covered by this Agreement shall be terminated within the notice period.
                    </p>
                    <p className="desc">
                        Either party may terminate this Agreement with immediate effect if the other part files or intends to file for reconstruction or bankruptcy or is declared bankrupt:
                    </p>
                    <ul className="list">
                        <li className="desc dot">
                            In case the Partner declare bankruptcy, { data?.['app-name'] } is willing to help moving the current end- customer(s) to another partner in agreement with the Partner
                        </li>
                        <li className="desc dot">
                            In case { data?.['app-name'] } declare bankruptcy, { data?.['app-name'] } will work with the partner to move their existing agreements to another reseller/distributor/aggregator in agreement with the
                        </li>
                    </ul>
                    <p className="desc">
                        If the Partner (i) repeatedly fails to report License Use timely to { data?.['app-name'] }, (ii) repeatedly obviously reports (or instructs { data?.['app-name'] } to report) incorrect License Use to { data?.['app-name'] }, or (iii) is in more than fourteen (14) days delayed with the payment of an invoice (or a part thereof), then that shall be deemed a material breach of this Agreement, which entitles { data?.['app-name'] } to terminate the Agreement forthwith.
                    </p>
                </div>
                <div className="wrap">
                    <h4 className="title2">1.4. Confidentiality</h4>
                    <p className="desc">
                        The Partner agrees to keep, and procure to be kept secret, strictly confidential, all information in any form or medium (whether disclosed orally or in writing, before or after the execution of this Agreement) that has been designated as confidential by { data?.['app-name'] }; together with all other information which relates to the business, affairs, products, Intellectual Property Rights, developments, trade secrets, personnel, sub- contractors, partners and suppliers, including the terms of this Agreement, or information which otherwise may reasonably be regarded as confidential information (“Confidential Information”).
                    </p>
                    <p className="desc">
                        { data?.['app-name'] } is the processor of such data and undertakes not to process personal data for any other purpose or in any other respect than strictly in accordance with this Agreement and the Partner’s instructions. The Partner is aware that Crayon, within the scope of this Agreement, may disclose personal data to Licensor/Publisher/Supplier without the Partner’s additional written consent.
                    </p>
                    <p className="desc">
                        If { data?.['app-name'] } receives an enquiry from an authority or another third party on the existence or content of personal data for which the Partner and/or another company/unit in the Partner Group is controller of personal data, { data?.['app-name'] } shall not disclose any data or content but pass on such enquiry to the Partner without delay.
                    </p>
                </div>
                <div className="wrap">
                    <h4 className="title2">1.5. Payment</h4>
                    <div>
                        <h5 className="title3">1.5.1 Payment terms</h5>
                        <p className="desc">
                            { data?.['app-name'] } may assign its right to payments under this Agreement to a factoring company, local representative or collection company.
                        </p>
                        <p className="desc">
                            Partner may not withhold payment or make deductions of any kind, including but not limited to returns, credit notes, price adjustments, billing errors, handling fees, fines imposed by Partner or any other claims or charges.
                        </p>
                        <p className="desc">
                            { data?.['app-name'] } may change credit or payment terms for unfilled orders if Partner’s financial condition, previous payment record, or relationship with { data?.['app-name'] }, merits such change.
                        </p>
                    </div>
                    <div>
                        <h5 className="title3">1.5.2 Late Payment</h5>
                        <p className="desc">
                            It is of utmost important that Partner settles all invoices on or before due date. Late payment may be charged 1.5% penalty of the amount due, for the given period, as a late payment charges.
                        </p>
                        <p className="desc">
                            If any part of an invoice is overdue, { data?.['app-name'] } is entitled to report zero (0) license usage to the Licensor/Publisher/Supplier and/or to reject any additional license usage until the Partner settles his outstanding balance (including interest) in full.
                        </p>
                    </div>
                </div>
                <div className="wrap">
                    <h4 className="title2">1.6. Force Majeure</h4>
                    <p className="desc">
                        If and to the extent that either party’s performance of any of its obligations pursuant to this Agreement is prevented, hindered or delayed by lightning, labour disputes, fire, amendments to regulations issued by governmental authorities, intervention of authorities, flood, earthquake, elements of nature or, acts of war, terrorism, riots, civil disorders, rebellions or revolutions, or any other cause beyond the reasonable
                    </p>
                    <p className="desc">
                        control of such party, then the non- performing party shall be excused from any performance of those obligations affected by the Force Majeure event for as long as such Force Majeure continues.
                    </p>
                    <p className="desc">
                        The party whose performance is prevented, hindered or delayed by a Force Majeure shall immediately notify the other party of the occurrence of the Force Majeure event and describe in reasonable detail the nature thereof. The non- performing party is, however, always obligated to mitigate the effects of the Force Majeure event. Where performance of a party’s obligations under this Agreement is materially prevented for a period in excess of three (3) months as a result of a Force Majeure event, each party is entitled to terminate this Agreement by a written notice to the other party to that effect.
                    </p>
                    <p className="desc">
                        If, as a result of a Force Majeure event, the performance by either party of such party’s obligations under this Agreement is only partially affected, such party shall nevertheless remain liable for the performance of those obligations not affected by the Force Majeure event.
                    </p>
                </div>
                <div className="wrap">
                    <h4 className="title2">1.7. Miscellaneous</h4>
                    <p className="desc">
                        All notices and other communications hereunder being in writing shall be deemed to have been duly given if delivered by messenger or by e-mail to an e-mail address provided by the receiving party.
                    </p>
                    <p className="desc">
                        No consent or waiver, express or implied, by either party of any breach or default of the other party in performing its obligations under this Agreement shall be deemed or construed to be a consent or waiver of any other breach or default by the other party of the same or any other obligation hereunder. Any failure by one party in default shall not constitute a waiver by the first party of its rights under this Agreement.
                    </p>
                    <p className="desc">
                        No waiver of any rights under this Agreement shall be effective unless in writing and signed by the Party purporting to give the same.
                    </p>
                    <p className="desc">
                        The headings of this Agreement are for convenience only and shall not define, extend or limit any of the terms or provisions hereof.
                    </p>
                    <p className="desc">
                        The Partner shall, without delay, notify { data?.['app-name'] } upon learning of circumstances which may necessitate a modification of any time schedule for the performance of and delivery by { data?.['app-name'] }.
                    </p>
                    <p className="desc">
                        To the maximum extent permissible by law, all conditions and warranties which may be excluded by applicable law are hereby expressly excluded. No express conditions or warranties are made by { data?.['app-name'] } except those expressly provided by { data?.['app-name'] } in this Agreement.
                    </p>
                    <p className="desc">
                        { data?.['app-name'] } is entitled to amend these general terms & conditions in order to reflect any changes and updates received from the Licensor/Publisher/Supplier or if { data?.['app-name'] } has reasonable grounds for such amendment. Should the partner disagree with those amendment, the partner has the right to terminate as per Section
                    </p>
                    <p className="desc">
                        1.3. Partner has to make payment all amounts due till the date of actual termination.
                    </p>
                </div>
                <div className="wrap">
                    <h4 className="title2">1.8. Dispute resolution</h4>
                    <p className="desc">
                        This Agreement shall be governed by the substantive laws of the principal place of business of the { data?.['app-name'] } affiliate being the party to this Agreement, without reference to its choice and conflict of law’s provisions. All disputes arising out of or in connection with this Agreement shall be finally settled by the ordinary court of the principal place of business of the { data?.['app-name'] } affiliate being the party to this Agreement, except that Crayon may, at its own option, bring suit for collection in the country where the Partner is located.
                    </p>
                </div>
                <div className="wrap">
                    <h4 className="title2">1.9. License use reporting</h4>
                    <p className="desc">
                        Partner shall be aware always of its reporting requirements. By providing Crayon the report through the proper provisioning of the services via the automated CloudIQ © portal, Partner certifies that the information is accurate and complete to the best of its knowledge.
                    </p>
                    <p className="desc">
                        Crayon shall verify the provisioning and reporting of the usage in all of the subscriptions and online services submitted by Partner. Partner acknowledges, however, that Crayon has no effective means to continuously control Partner’s License Use and that Crayon’s verification and reporting to Licensor will normally be based exclusively on Partner’s reports to Crayon. Thus, Partner understands that Partner’s correct reporting of its License Use is of imperative importance.
                    </p>
                    <p className="desc">
                        Crayon will use commercially reasonable efforts to help the Partner to correct any errors.
                    </p>
                    <p className="desc">
                        The previous paragraphs do not relieve Partner from reimbursing Crayon fully for any claims from a
                    </p>
                    <p className="desc">
                        Licensor if Partner’s License Use proves to be greater than the License Use reported to Licensor for any of the subscriptions and/or online services.
                    </p>
                </div>
                <h4 className="title2">
                    2. Cloud services for Microsoft (Cloud Solution Provider Program “CSP”) and for Amazon (Amazon Web Services “AWS”) – As applicable.
                </h4>
                <div className="wrap">
                    <h4 className="title2">2.1. General terms and conditions</h4>
                    <ul className="list">
                        <li className="desc dot">
                            Crayon’s Cloud Solution Provider program is a remotely hosted shared infrastructure, under which the Partner may order Cloud Services from Microsoft, Amazon and
                        </li>
                        <li className="desc dot">
                            The start date of Cloud Services is the date on which Crayon starts delivering the Cloud Services which have been agreed, or a part thereof.
                        </li>
                        <li className="desc dot">
                            Crayon does not warrant uninterrupted or error-free operation of the Cloud
                        </li>
                        <li className="desc dot">
                            The day on which the relevant Cloud Service has been approved pursuant to this section (“Actual Approval Day”) is the day upon which:
                            <ul className="list">
                                <li className="desc dot">
                                    the Cloud Service in question is provision and/or subscribed and/or approved by the Partner;
                                </li>
                                <li className="desc dot">
                                    the acceptance inspection period terminates without any legitimate complaints being asserted by the Partner in the acceptance inspection report;
                                </li>
                                <li className="desc dot">
                                    the acceptance inspection period terminates and the Order Form has not been fulfilled due to circumstances for which Crayon is not liable;
                                </li>
                                <li className="desc dot">
                                    the Cloud Service in question fulfils the Order Form following rectification by Crayon pursuant to legitimate complaints asserted by the Partner in the acceptance inspection report;
                                </li>
                                <li className="desc dot">
                                    the Cloud Service in question fulfils the Order Form following rectification by Crayon pursuant to legitimate complaints asserted by the Partner in the acceptance inspection report;
                                </li>
                                <li className="desc dot">
                                    the Partner, following the termination of the acceptance inspection period and the Actual Approval Day has not occurred according to the above, uses the Services (or parts thereof) in the operations of the Partner without Crayon’s written consent prior.
                                </li>
                            </ul>
                        </li>
                        <li className="desc dot">
                            Crayon may withdraw a Cloud Service on three months’ notice, or as specified in the Order Form or the terms and conditions of the Third-Party Product, and Crayon will then either continue to provide the Cloud Service for the remainder of the Partner’s unexpired term or work with the Partner to migrate to another cloud
                        </li>
                    </ul>
                </div>
                <div className="social">
                    <span className="sub">SHARE</span>
                    <div>
                        <a className='link' href={links?.facebook} target='_blank'>
                            <i className="fa-brands fa-facebook-f icon"/>
                        </a>
                        <a className='link' href={links?.linkedin} target='_blank'>
                            <i className="fa-brands fa-linkedin-in icon"/>
                        </a>
                        <a className='link' href={links?.twitter} target='_blank'>
                            <i className="fa-brands fa-twitter icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Terms
