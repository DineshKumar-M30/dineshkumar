import React from 'react';
import Navbar from '../components/Landing/Navbar';
import Hero from '../components/Landing/Hero';
import Features from '../components/Landing/Features';
import HowItWorks from '../components/Landing/HowItWorks';
import Testimonials from '../components/Landing/Testimonials';
import Pricing from '../components/Landing/Pricing';
import FAQ from '../components/Landing/FAQ';
import Footer from '../components/Landing/Footer';

const LandingPage = () => {
    return (
        <div className="bg-white dark:bg-slate-950 min-h-screen text-slate-800 dark:text-slate-100 overflow-x-hidden">
            <Navbar />
            <Hero />
            <Features />
            <HowItWorks />
            <Testimonials />
            <Pricing />
            <FAQ />
            <Footer />
        </div>
    );
};

export default LandingPage;
