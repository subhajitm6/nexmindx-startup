import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Features from '../sections/Features';
import Process from '../sections/Process';
import Portfolio from '../sections/Portfolio';
import Testimonials from '../sections/Testimonials';
import CTA from '../sections/CTA';
import Contact from '../sections/Contact';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Contact />
    </>
  );
};

export default Home;
