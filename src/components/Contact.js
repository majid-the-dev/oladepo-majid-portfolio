import React from 'react';
import '../styles/Contact.css';
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiFillMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import contactImage from '../assets/Contact-image.png';

const Contact = () => {
    return (
        <div className='contact-section'>
            <div className='content-box-md'>
                <div className='container'>
                    <div className='contact-section-content'>
                        <div className='contact-section-left'>
                            <h1>Want to <span>get</span> in touch?</h1>
                            <img src={contactImage} alt='contact' />
                        </div>

                        <div className='contact-section-right'>
                            <h1>I would love to hear from you!</h1>
                            <p>Got a project you would like me to
                                work on or a position you want me
                                to fill? How about just a friendly
                                chat?
                            </p>

                            <div className='contact-info-section'>
                                <a href='tel:+2347048505697' className='contact-info'>
                                    <div className='icon-box'>
                                        <BsFillTelephoneFill className='telephone-icon' />
                                    </div>
                                    <h6>PHONE NUMBER (click to place a call)</h6>
                                    <a href='tel:+2347048505697'>+234 7048 5056 97</a>
                                </a>
                                <a href='"mailto:contactmajidoladepo@gmail.com?subject = Feedback & body = Message"' className='contact-info'>
                                    <div className='icon-box'>
                                        <AiFillMail className='mail-icon' />
                                    </div>
                                    <h6>EMAIL (click to send a mail)</h6>
                                    <a href="mailto:contactmajidoladepo@gmail.com?subject = Feedback & body = Message">contactmajidoladepo@gmail.com</a>
                                </a>
                                <a href='https://github.com/majid-the-dev' className='contact-info'>
                                    <div className='icon-box'>
                                        <FaGithub className='github-icon' />
                                    </div>
                                    <h6>GITHUB (click to view my repo)</h6>
                                    <a href='https://github.com/majid-the-dev' target='_blank' rel="noreferrer">https://github.com/majid-the-dev</a>
                                </a>
                                <a href='https://www.linkedin.com/in/majid-oladepo-017b06252/' className='contact-info'>
                                    <div className='icon-box'>
                                        <FaLinkedinIn className='linkedin-icon' />
                                    </div>
                                    <h6>LINKEDIN (click to connect)</h6>
                                    <a href='https://www.linkedin.com/in/majid-oladepo-017b06252/' target='_blank' rel="noreferrer" className='linkedin-link'>https://www.linkedin.com/in/majid-oladepo-017b06252/</a>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;