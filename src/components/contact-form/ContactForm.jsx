import './ContactForm.scss'
import React, {useState} from 'react'
import {Link} from "react-router-dom";

const ContactForm = () => {


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [hear, setHear] = useState('')
    const [desc, setDesc] = useState('')
    const [agree, setAgree] = useState(false)

    const postForm = (e) => {
        e.preventDefault()


    }


    return (
        <div className='contact-form' id='contact'>
            <div className="container small">
                <div className="contact-form__inner">
                    <h1 className="title">Talk To Our Partner Team</h1>
                    <form className='form' onSubmit={postForm}>
                        <div className='row no-wrap g1'>
                            <label className='half'>
                                <span className='txt'>First Name <span>*</span></span>
                                <input
                                    className='inp'
                                    type="text"
                                    required={true}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </label>
                            <label className='half'>
                                <span className='txt'>Last Name <span>*</span></span>
                                <input
                                    className='inp'
                                    type="text"
                                    required={true}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className='row no-wrap g1'>
                            <label className='half'>
                                <span className='txt'>Phone Number <span>*</span></span>
                                <input
                                    className='inp'
                                    type="tel"
                                    required={true}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </label>
                            <label className='half'>
                                <span className='txt'>Email <span>*</span></span>
                                <input
                                    className='inp'
                                    type="email"
                                    required={true}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </label>
                        </div>
                        <label>
                            <span className='txt'>Company Name <span>*</span></span>
                            <input
                                className='inp'
                                type="text"
                                required={true}
                                onChange={(e) => setCompanyName(e.target.value)}
                            />
                        </label>
                        <label>
                            <span className='txt'>How did you hear about us? <span>*</span></span>
                            <input
                                className='inp'
                                type="text"
                                required={true}
                                onChange={(e) => setHear(e.target.value)}
                            />
                        </label>
                        <label>
                            <span className='txt'>How did you hear about us? <span>*</span></span>
                            <textarea
                                className='inp area'
                                required={true}
                                onChange={(e) => setDesc(e.target.value)}
                            />
                        </label>
                        <p className="desc">
                            By completing this form you agree to Crayon storing your information so that you can receive information related to licensing, cloud, and AI&ML services. Read more about how we manage your personal data <Link className='link' to='/about-us/global-privacy-notice'>here</Link>.
                        </p>
                        <label className='row align-center mb2'>
                            <input
                                className='inp checkbox'
                                type="checkbox"
                                required={true}
                                onChange={() => setAgree(!agree)}
                            />
                            <span className='txt checkbox-txt'>I agree <span>*</span></span>
                        </label>
                        <button className='btn'>SUBMIT</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
