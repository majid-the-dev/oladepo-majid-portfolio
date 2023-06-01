import React from 'react';
import '../styles/Project.css';

const Project = (props) => {
    return (
        <div className='project-section' id={props.id}>
            <div className='content-box-md'>
                <div className='container'>
                    <div className='project-section-content'>
                        <h1>What <span>have</span> I worked on?</h1>
                        <p> I've been honing my skills for a couple of years and have had
                            the privilege of working on a variety of projects. Today, I'm
                            constantly striving to stay up-to-date with the latest trends
                            and technologies in the industry, attending conferences and meetups,
                            and collaborating with other developers to learn new skills and approaches.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project