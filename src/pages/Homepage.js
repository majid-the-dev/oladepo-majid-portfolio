import React from 'react';
import '../styles/Homepage.css';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import { data } from '../components/data';
import Box from '../components/Box';
import Project from '../components/Project';
import Tabs from '../components/Tabs';
import Contact from '../components/Contact';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const Homepage = (props) => {

  const boxes = data.map(item => {
    return (
      <Box
        {...item}
        key={item.id}
      />
    )
  });

  return (
    <div className='homepage'>
      <section id='navbar' className='navbar'>
        <Navbar />
      </section>

      <section id='home' className='home'>
        <Home />
      </section>

      <section id='about'>
        <About />

        <div className='box-section'>
          <div className='content-box-md'>
            <div className='container'>
              <div className='card-section'>
                {boxes}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='projects'>
        <Project />

        <div className='tabs-section'>
          <Tabs />
        </div>
      </section>

      <section id='contact'>
        <Contact />
      </section>

      <section id='blog'>
        <Blog />
      </section>

      <section className='footer-section'>
        <Footer />
      </section>
    </div>
  )
}

export default Homepage