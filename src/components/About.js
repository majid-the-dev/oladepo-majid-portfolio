import React from 'react';
import '../styles/About.css';

const About = (props) => {
    return (
        <div className='about-section' id={props.id}>
            <div className='content-box-md'>
                <div className='container'>
                    <div className='about-section-content'>
                        <h1>Who <span>am</span> I?</h1>
                        <p>
                            My journey into the world of software development started
                            when I realized how much I loved tinkering with code to
                            solve real-world problems and create engaging user experiences.
                            When I'm not coding, you can usually find me exploring my creative side as
                            I'm always on the lookout for new experiences and perspectives that can
                            inform my work and help me grow both personally and professionally.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;