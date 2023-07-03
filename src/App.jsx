import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Navbar from './component/Nav';
import Hero from './component/Hero';
import About from './component/About';
import Coiffeur from './component/Coiffeur';
import Footer from './component/Footer';
import Collection from './component/Collection';
import { Element } from 'react-scroll';
import backgroundVideo from './assets/video.mp4';

function App() {
  const coiffeurRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const aboutSection = document.getElementById('about');
    const coiffeurSection = document.getElementById('coiffeur');
    const windowHeight = window.innerHeight;

    if (
      aboutSection.getBoundingClientRect().top <= windowHeight / 2 &&
      aboutSection.getBoundingClientRect().bottom >= windowHeight / 2
    ) {
      coiffeurSection.style.opacity = '1';
    } else {
      coiffeurSection.style.opacity = '0';
    }
  };

  return (
    <div className="app">
      <Navbar />
      <Hero coiffeurRef={coiffeurRef} />
      <div className="background-video">
        <video autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <Element name="coiffeur" ref={coiffeurRef}>
          <Coiffeur />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="collection">
          <Collection />
        </Element>
        <Footer />
      </div>
    </div>
  );
}

export default App;
