import React from 'react';
import '../styles/Footer.css';
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

  return (
    <div className='footer-section'>
        <div className='content-box-md'>
            <div className='container'>
                <div className='footer-section-content'>
                    <div className='footer-section-left'>
                        <div className='icon-group'>
                            <div className='icon-circle'>
                                <a href="https://www.linkedin.com/in/majid-oladepo-017b06252/" target='_blank' rel="noreferrer"><FaLinkedinIn className='footer-icon' /></a>
                            </div>
                            <div className='icon-circle'>
                                <a href="https://github.com/majid-the-dev" target='_blank' rel="noreferrer"><FaGithub className='footer-icon' /></a>
                            </div>
                            <div className='icon-circle'>
                                <a href="https://www.instagram.com/" target='_blank' rel="noreferrer"><FaInstagram className='footer-icon' /></a>
                            </div>
                            <div className='icon-circle'>
                                <a href="https://www.twitter.com/" target='_blank' rel="noreferrer"><FaTwitter className='footer-icon' /></a>
                            </div>
                        </div>
                    </div>
                    <div className='footer-section-right'>
                        <p>Designed & developed by Oladepo Majid</p>
                        <p>©{year}. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer