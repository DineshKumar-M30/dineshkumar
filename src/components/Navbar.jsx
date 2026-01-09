import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="fixed top-0 w-full z-50 py-6 px-6 md:px-10 flex justify-between md:justify-center items-center backdrop-blur-sm bg-dark/80 md:bg-transparent">
            {/* Mobile Logo/Brand (Optional, keeps layout balanced on mobile) */}
            <div className="md:hidden text-lime font-black text-xl tracking-widest uppercase">
                DINESHKUMAR
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-12 uppercase font-bold text-xs tracking-[0.2em] bg-black/50 px-10 py-4 rounded-full border border-white/5 backdrop-blur-md">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className={`transition-all duration-300 hover:scale-110 ${location.pathname === link.path ? 'text-lime' : 'text-white hover:text-lime'
                            }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Toggle */}
            <button
                className="md:hidden text-white hover:text-lime transition-colors"
                onClick={toggleMenu}
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-dark border-b border-gray-800 flex flex-col items-center py-10 space-y-8 md:hidden shadow-2xl"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-xl uppercase font-bold tracking-[0.2em] transition-colors duration-300 ${location.pathname === link.path ? 'text-lime' : 'text-white hover:text-lime'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
