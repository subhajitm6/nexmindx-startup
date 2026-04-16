import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Features from './sections/Features';
import Process from './sections/Process';
import Portfolio from './sections/Portfolio';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Contact from './sections/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-gray-300 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <Process />
        <Portfolio />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
