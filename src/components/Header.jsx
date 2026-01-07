import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-content">
                <Link to="/" className="logo">Cars Classic Autotrader</Link>
                <nav className="nav">
                    <ul className="nav-list">
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Cars</NavLink></li>
                        <li><NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>About Us</NavLink></li>
                        <li><NavLink to="/services" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Services</NavLink></li>
                        <li><NavLink to="/contacts" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contacts</NavLink></li>
                    </ul>
                </nav>
                <div className="header-contact">
                    +1 (240) 375-1288
                </div>
            </div>
        </header>
    );
};

export default Header;
