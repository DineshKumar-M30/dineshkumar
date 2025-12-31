import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogosMarquee from './components/LogosMarquee';
import About from './components/About';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import SignIn from './components/SignIn';
import './alignment-fix.css';

const LandingPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        // Check authentication status
        const authStatus = localStorage.getItem('isAuthenticated');
        setIsAuthenticated(authStatus === 'true');
        setIsLoading(false);

        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = 'smooth';
        return () => {
            document.documentElement.style.scrollBehavior = 'auto';
        };
    }, []);

    const handleSignIn = () => {
        setIsAuthenticated(true);
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#020617] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            </div>
        );
    }

    if (!isAuthenticated) {
        return <SignIn onSignIn={handleSignIn} />;
    }

    return (
        <div className="bg-[#020617] text-slate-200 min-h-screen font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-cyan-500 to-indigo-500 z-50 origin-left"
                style={{ scaleX }}
            />

            <Navbar />

            <main>
                <Hero />
                <LogosMarquee />
                <About />
                <Features />
                <HowItWorks />
                <Showcase />
                <Testimonials />
                <CTA />
            </main>

            {/* Background Decorative Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
            </div>
        </div>
    );
};

export default LandingPage;
