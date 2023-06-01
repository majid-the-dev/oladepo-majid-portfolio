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

const Homepage = () => {

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
      <section>
        <Navbar />
      </section>

      <section>
        <Home />
      </section>

      <section>
        <About />
      </section>

      <section className='box-section'>
        <div className='content-box-md'>
          <div className='container'>
            <div className='card-section'>
              {boxes}
            </div>
          </div>
        </div>
      </section>

      <section>
        <Project />
      </section>

      <section className='tabs-section'>
        <Tabs />
      </section>

      <section>
        <Contact />
      </section>

      <section>
        <Blog />
      </section>

      <section className='footer-section'>
        <Footer />
      </section>
    </div>
  )
}

export default Homepage