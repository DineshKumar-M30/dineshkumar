import React, { useState } from 'react';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="relative z-50 max-w-[1400px] mx-auto text-white">
            <div className="flex items-center justify-between px-6 md:px-12 py-4 lg:py-6 relative">

                {/* Left: Mobile Hamburger - Custom 2-line style */}
                <div className="lg:hidden z-50">
                    <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 -ml-2 text-white">
                        {mobileMenuOpen ? (
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        ) : (
                            <svg className="w-12 h-6" viewBox="0 0 40 20" fill="none" stroke="currentColor">
                                <line x1="0" y1="2" x2="40" y2="2" strokeWidth="2" strokeLinecap="round" />
                                <line x1="0" y1="18" x2="40" y2="18" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Logo - Centered on mobile, Left on Desktop */}
                <div className="text-2xl font-medium tracking-wide opacity-90 cursor-pointer hover:opacity-100 absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:left-auto z-50">
                    Logo
                </div>

                {/* Center: Desktop Menu */}
                <div className="hidden lg:flex items-center gap-10 text-[13px] font-bold tracking-wider uppercase">
                    <a href="#home" className="relative group py-2">
                        <span className="group-hover:text-blue-200 transition-colors">HOME</span>
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500 scale-x-100 transition-transform origin-left"></span>
                    </a>
                    <a href="#features" className="hover:text-cyan-200 transition-colors opacity-90 hover:opacity-100">FEATURES</a>
                    <a href="#pricing" className="hover:text-cyan-200 transition-colors opacity-90 hover:opacity-100">PRICING</a>
                    <a href="#reviews" className="hover:text-cyan-200 transition-colors opacity-90 hover:opacity-100">REVIEWS</a>
                    <a href="#faq" className="hover:text-cyan-200 transition-colors opacity-90 hover:opacity-100">FAQ</a>
                    <a href="#contacts" className="hover:text-cyan-200 transition-colors opacity-90 hover:opacity-100">CONTACTS</a>
                </div>

                {/* Right: Actions (Language, User) */}
                <div className="flex items-center gap-3 relative z-50">
                    <div className="flex items-center gap-3 bg-white text-[#1e293b] px-4 py-2.5 rounded-xl text-sm font-extrabold cursor-pointer hover:bg-gray-50 transition-colors shadow-lg min-w-[80px] justify-center">
                        <img src="https://flagcdn.com/w20/us.png" alt="EN" className="w-6 h-auto shadow-sm rounded-[2px]" />
                        <span className="uppercase tracking-wide">EN</span>
                        <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                    </div>

                    <button className="hidden lg:flex bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-xl transition-colors shadow-md active:scale-95 items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`lg:hidden fixed inset-0 bg-[#3b8dff] z-40 transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8 text-xl font-bold tracking-wider uppercase">
                    <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-400 transition-colors">HOME</a>
                    <a href="#features" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-400 transition-colors">FEATURES</a>
                    <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-400 transition-colors">PRICING</a>
                    <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-400 transition-colors">REVIEWS</a>
                    <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-400 transition-colors">FAQ</a>
                    <a href="#contacts" onClick={() => setMobileMenuOpen(false)} className="hover:text-orange-400 transition-colors">CONTACTS</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
