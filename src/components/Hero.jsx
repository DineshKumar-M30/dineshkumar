import React from 'react';
import heroBg from '../assets/9.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h1 className="hero-title">Timeless <br /> <span className="highlight">Elegance</span></h1>
                <p className="hero-subtitle">Discover the golden age of automotive design.</p>
                <a href="#gallery" className="btn">View Collection</a>
            </div>
        </section>
    );
};

export default Hero;
