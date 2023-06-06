import React from 'react';
import '../styles/ComingSoon.css';
import { Link } from 'react-router-dom';
import heroImage from '../assets/crane-gif.gif';
import { FaClock } from 'react-icons/fa'

const ComingSoon = () => {
    return (
        <div className='coming-soon'>
            <div className='content-box-md'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='coming-soon-content-left'>
                                <h1>COMING SOON</h1>
                                <p>Website under construction <FaClock className='clock-icon' /></p>
                                <Link to='/' className='link-style'>Back To Portfolio</Link>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='coming-soon-content-right'>
                                <img src={heroImage} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon;