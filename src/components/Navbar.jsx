import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronDown, Phone, Menu, X } from 'lucide-react';
import logo from '../assets/Belalea.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="w-full bg-white px-4 md:px-8 py-4 shadow-sm font-sans relative z-50">
            <div className="flex items-center justify-between">
                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-2 md:gap-3 animate-fade-in-scale" style={{ animationDuration: '0.5s' }}>
                    <img src={logo} alt="Belalea Logo" className="h-10 md:h-14 w-auto object-contain" />
                    <span className="text-2xl md:text-4xl font-serif text-[#7DAF56] tracking-wide">Belalea</span>
                </Link>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-8 text-[#374151] font-semibold text-sm uppercase tracking-wider">
                    <Link to="/about" className="hover:text-[#7DAF56] transition-colors">About Us</Link>
                    <Link to="/catalog" className="flex items-center gap-1 hover:text-[#7DAF56] transition-colors">
                        CATALOG <ChevronDown className="w-4 h-4" />
                    </Link>
                    <Link to="/dealers" className="hover:text-[#7DAF56] transition-colors">Dealers</Link>
                    <Link to="/news" className="hover:text-[#7DAF56] transition-colors">News</Link>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4">
                    {/* Search Bar */}
                    <div className="relative hidden lg:block">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="pl-4 pr-10 py-2 rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#7DAF56]/20 w-64 text-sm"
                        />
                        <button className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 bg-[#84B97C] text-white rounded-full hover:bg-[#72a36b] transition-colors">
                            <Search className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Contact Button (Desktop) */}
                    <div className="hidden md:block">
                        <Link to="/contact" className="flex items-center gap-3 border border-gray-200 rounded-full pl-1 pr-5 py-1 hover:bg-gray-50 transition-colors group">
                            <div className="w-8 h-8 rounded-full bg-[#2A4B56] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-[#2A4B56] font-semibold text-sm">Contacts</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-[#2A4B56]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden flex flex-col p-4 gap-4 border-t border-gray-100">
                    <Link to="/about" className="text-[#374151] font-semibold text-sm uppercase tracking-wider py-2 hover:text-[#7DAF56]" onClick={() => setIsMenuOpen(false)}>About Us</Link>
                    <Link to="/catalog" className="text-[#374151] font-semibold text-sm uppercase tracking-wider py-2 hover:text-[#7DAF56]" onClick={() => setIsMenuOpen(false)}>CATALOG</Link>
                    <Link to="/dealers" className="text-[#374151] font-semibold text-sm uppercase tracking-wider py-2 hover:text-[#7DAF56]" onClick={() => setIsMenuOpen(false)}>Dealers</Link>
                    <Link to="/news" className="text-[#374151] font-semibold text-sm uppercase tracking-wider py-2 hover:text-[#7DAF56]" onClick={() => setIsMenuOpen(false)}>News</Link>
                    <div className="py-2">
                        <Link to="/contact" className="flex items-center gap-3 w-fit border border-gray-200 rounded-full pl-1 pr-5 py-1 hover:bg-gray-50 transition-colors group" onClick={() => setIsMenuOpen(false)}>
                            <div className="w-8 h-8 rounded-full bg-[#2A4B56] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <span className="text-[#2A4B56] font-semibold text-sm">Contacts</span>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
