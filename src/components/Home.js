import React from 'react';
import '../styles/Home.css';
import heroImage from '../assets/Nerd-pana.png';
import { Link } from 'react-scroll';
import { RxDoubleArrowDown } from 'react-icons/rx';
import 'animate.css';

const Home = (props) => {
    return (
        <div className='hero-section'>
            <div className='content-box-md'>
                <div className='container'>
                    <div className='hero-section-content'>
                        <div className='hero-section-left'>
                            <h1 id={props.id}>Hi there! I'm a <span>software</span> developer</h1>
                            <p>Welcome to my <span>digital playground!</span> My name is Oladepo Majid
                                and I'm a software developer with a specialized focus on web technologies
                                and applications who's always exploring the latest technologies and pushing
                                the limits of what's possible on the web.
                            </p>
                            <div className='btn-group'>
                                <a href="/resume.pdf" className='resume' target='_blank'>Explore resumé</a>
                                <button className='skillset' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Explore skillset</button>
                            </div>
                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            ...
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Understood</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hero-section-right'>
                            <img src={heroImage} alt="" />
                        </div>
                    </div>

                    <div className='scroll-down'>
                        <Link to="About">
                            <RxDoubleArrowDown className='arrow-icon animate__animated animate__fadeOutDown animate__infinite animate__slow' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;