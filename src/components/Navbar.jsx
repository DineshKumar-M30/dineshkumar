import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown, Hammer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            // Forcing bg on non-home pages if needed, but keeping simple scroll logic for now
            // If on About page, we might want transparency at top too since it has a Hero image.
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => location.pathname === path;

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services', hasDropdown: true },
        { name: 'Blog', href: '/blog' },
        { name: 'Projects', href: '/projects' },
        { name: 'Page', href: '/pricing', hasDropdown: true },
        { name: 'Contact Us', href: '/contact' },
    ];

    return (
        <nav
            className={clsx(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans',
                isScrolled || isMobileMenuOpen
                    ? 'bg-black/90 backdrop-blur-md shadow-md py-4'
                    : 'bg-transparent py-6'
            )}
        >
            <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <div className="relative w-8 h-8">
                        <div className="absolute inset-0 border-2 border-orange-500 transform rotate-45 rounded-sm"></div>
                        <Hammer className="absolute inset-0 w-5 h-5 m-auto text-white -rotate-12" strokeWidth={2.5} />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">
                        Factory<span className="text-white">Pro</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={clsx(
                                "flex items-center gap-1 font-medium transition-colors duration-200 text-sm",
                                (link.href !== '#' && isActive(link.href)) ? "text-orange-500" : "text-gray-200 hover:text-white"
                            )}
                        >
                            {link.name}
                            {link.hasDropdown && <ChevronDown size={14} />}
                        </Link>
                    ))}
                </div>

                {/* Right Side - Phone */}
                <div className="hidden md:flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full border border-orange-500 flex items-center justify-center">
                        <Phone size={14} className="text-orange-500" />
                    </div>
                    <span className="text-white font-medium">+01 123456789</span>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 border-t border-gray-800 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={clsx(
                                        "flex items-center gap-2 font-medium transition-colors",
                                        (link.href !== '#' && isActive(link.href)) ? "text-orange-500" : "text-gray-300"
                                    )}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                    {link.hasDropdown && <ChevronDown size={14} />}
                                </Link>
                            ))}
                            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-800">
                                <div className="w-8 h-8 rounded-full border border-orange-500 flex items-center justify-center">
                                    <Phone size={14} className="text-orange-500" />
                                </div>
                                <span className="text-white font-medium">+01 123456789</span>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
