import React from 'react';
import '../styles/Blog.css';
import { RxDoubleArrowRight } from 'react-icons/rx';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div className='blog-section'>
            <div className='content-box-md'>
                <div className='container'>
                    <div className='blog-section-content'>
                        <div className='blog-section-left'>
                            <h1>Tech insights <span>and</span> more
                                <GiMagnifyingGlass className='glasses-icon' />
                            </h1>
                            <p>I share my insights and experiences as a
                                software developer, as well as tips and tutorials
                                for those who are just starting out in the field.
                                I'm excited to share knowledge and contribute my own
                                perspectives to the conversation.
                            </p>
                        </div>

                        <div className='blog-section-right'>
                            <Link to='/Blogpage' className='blog-btn'>Explore <RxDoubleArrowRight className='explore-icon animate__animated animate__slideOutRight animate__infinite animate__slow' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog