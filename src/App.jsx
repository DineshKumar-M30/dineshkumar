import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Services from './components/Services';
import Contact from './components/Contact';

// Page Components
const HomePage = () => (
  <>
    <Hero />
    <Gallery />
    <About />
    <FAQ />
  </>
);

const AboutPage = () => (
  <>
    <About />
    <FAQ />
  </>
);

const ServicesPage = () => (
  <Services />
);

const ContactPage = () => (
  <Contact />
);

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
