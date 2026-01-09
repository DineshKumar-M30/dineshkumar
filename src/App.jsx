import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BackgroundElements from './components/BackgroundElements';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Reviews from './components/Reviews';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden font-montserrat bg-[#3b8dff]">
      <BackgroundElements />
      <Navbar />
      <Hero />
      <Features />
      <Reviews />
      <Pricing />
      <FAQ />
      <Contact />
    </div>
  );
}

export default App;
