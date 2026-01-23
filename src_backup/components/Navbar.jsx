import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Menu, UserCog, Key, RotateCw, LogOut, Check } from 'lucide-react';

const Navbar = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState({
        name: 'English',
        code: 'gb',
        flag: 'https://i.pinimg.com/1200x/60/e1/2e/60e12ef8f91004862d6413b7f26f0b13.jpg'
    });

    const languages = [
        { name: 'English', code: 'gb', flag: 'https://i.pinimg.com/1200x/60/e1/2e/60e12ef8f91004862d6413b7f26f0b13.jpg' },
        { name: 'French', code: 'fr', flag: 'https://flagcdn.com/w40/fr.png' },
        { name: 'Spanish', code: 'es', flag: 'https://flagcdn.com/w40/es.png' },
    ];

    const handleLangSelect = (lang) => {
        setSelectedLang(lang);
        setIsLangOpen(false);
    };

    return (
        <nav className="w-full bg-white h-[70px] px-6 flex items-center justify-between shadow-sm border-b border-gray-100 relative z-50">
            {/* Left Section: Logo & Menu & Search */}
            {/* Left Section: Menu & Search */}
            <div className="flex items-center gap-6">
                {/* Search & Menu Container */}
                <div className="flex items-center gap-6">
                    {/* Hamburger Menu - Hidden on Desktop if Sidebar is present, but kept for responsive design */}
                    <button className="text-gray-500 hover:text-gray-700 cursor-pointer lg:hidden">
                        <Menu size={24} />
                    </button>

                    {/* Search Bar */}
                    <div className="relative hidden md:block">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                            <Search size={20} />
                        </span>
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-12 pr-4 py-2 bg-gray-100 rounded-full w-[380px] focus:outline-none focus:ring-2 focus:ring-blue-100 text-sm text-gray-700 placeholder-gray-400"
                        />
                    </div>
                </div>
            </div>

            {/* Right Section: Actions & Profile */}
            <div className="flex items-center gap-4 md:gap-8">
                {/* Notification */}
                <div className="relative cursor-pointer">
                    <Bell className="text-blue-600" size={24} />
                    <span className="absolute -top-1.5 -right-0.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                        6
                    </span>
                </div>

                {/* Language Selector */}
                <div className="relative">
                    <div
                        className="hidden md:flex items-center gap-3 cursor-pointer"
                        onClick={() => setIsLangOpen(!isLangOpen)}
                    >
                        <img
                            src={selectedLang.flag}
                            alt={`${selectedLang.name} Flag`}
                            className="w-6 h-4 object-cover rounded-sm"
                        />
                        <span className="text-gray-600 text-sm font-medium">{selectedLang.name}</span>
                        <ChevronDown size={16} className={`text-gray-500 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} />
                    </div>

                    {/* Language Dropdown */}
                    {isLangOpen && (
                        <div className="absolute top-full right-0 mt-3 w-48 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                            <div className="px-4 py-3 border-b border-gray-100">
                                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Select Language</span>
                            </div>
                            <div className="py-1">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLangSelect(lang)}
                                        className="w-full flex items-center justify-between px-4 py-2 hover:bg-gray-50 transition-colors"
                                    >
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={lang.flag}
                                                alt={`${lang.name} Flag`}
                                                className="w-6 h-4 object-cover rounded-sm shadow-sm"
                                            />
                                            <span className={`text-sm ${selectedLang.code === lang.code ? 'font-medium text-gray-900' : 'text-gray-600'}`}>
                                                {lang.name}
                                            </span>
                                        </div>
                                        {selectedLang.code === lang.code && (
                                            <Check size={16} className="text-blue-600" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* User Profile */}
                <div className="relative">
                    <div
                        className="flex items-center gap-3 cursor-pointer pl-4 select-none"
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                    >
                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                            <img
                                src="https://i.pinimg.com/1200x/1c/85/2e/1c852ea928150dfcf54c5457dbca0a35.jpg"
                                alt="User Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col hidden md:flex">
                            <span className="text-sm font-bold text-gray-900 leading-none">Moni Roy</span>
                            <span className="text-xs text-gray-500 font-medium mt-1">Admin</span>
                        </div>
                        <div className={`w-5 h-5 rounded-full border border-gray-200 flex items-center justify-center bg-white transition-transform duration-200 ${isProfileOpen ? 'rotate-180' : ''}`}>
                            <ChevronDown size={12} className="text-gray-500" />
                        </div>
                    </div>

                    {/* Dropdown Menu */}
                    {isProfileOpen && (
                        <div className="absolute top-full right-0 mt-3 w-64 bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 py-2 animate-in fade-in zoom-in-95 duration-200">
                            <a href="#" className="flex items-center gap-4 px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                                <UserCog size={20} className="text-blue-500" />
                                <span className="text-sm font-medium">Manage Account</span>
                            </a>
                            <a href="#" className="flex items-center gap-4 px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                                <Key size={20} className="text-pink-500" />
                                <span className="text-sm font-medium">Change Password</span>
                            </a>
                            <a href="#" className="flex items-center gap-4 px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                                <RotateCw size={20} className="text-purple-500" />
                                <span className="text-sm font-medium">Activity Log</span>
                            </a>
                            <div className="h-px bg-gray-100 my-1 mx-6"></div>
                            <a href="#" className="flex items-center gap-4 px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors">
                                <LogOut size={20} className="text-red-400" />
                                <span className="text-sm font-medium">Log out</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
