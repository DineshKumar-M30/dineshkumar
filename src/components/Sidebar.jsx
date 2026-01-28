import React, { useState } from 'react';
import { MessageSquare, Users, Phone, Settings } from 'lucide-react';

const Sidebar = ({ activeView, onViewChange }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    return (
        <div className="w-[80px] bg-[#F8FAFF] h-full flex flex-col items-center py-5 flex-shrink-0 font-sans border-r border-transparent">
            {/* Logo */}
            <div className="w-10 h-10 bg-[#AFBBF7] rounded-xl flex items-center justify-center mb-6 shadow-sm cursor-pointer hover:opacity-90 transition-opacity">
                <img src="https://cdn-icons-png.flaticon.com/512/3220/3220556.png" className="w-6 h-6 object-contain" alt="Logo" />
            </div>

            {/* Navigation Section */}
            <nav className="flex flex-col gap-5 w-full items-center">

                {/* Chat (Active) */}
                <button
                    onClick={() => onViewChange('chatList')}
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 shadow-sm ${activeView === 'chatList'
                        ? 'bg-[#5B96F7] text-white shadow-blue-200'
                        : 'text-gray-400 hover:text-[#5B96F7]'
                        }`}
                >
                    <MessageSquare size={20} fill={activeView === 'chatList' ? "currentColor" : "none"} strokeWidth={activeView === 'chatList' ? 0 : 2} />
                </button>

                {/* Users (Groups) */}
                <button
                    className="text-gray-400 hover:text-[#5B96F7] transition-colors p-1.5"
                >
                    <Users size={20} />
                </button>

                {/* Calls */}
                <button
                    onClick={() => onViewChange('callLog')}
                    className={`transition-all duration-200 p-1.5 ${activeView === 'callLog'
                        ? 'text-[#5B96F7]'
                        : 'text-gray-400 hover:text-[#5B96F7]'
                        }`}
                >
                    <Phone size={20} />
                </button>

                {/* Divider */}
                <div className="w-10 h-[2px] bg-gray-200 mt-1 mb-1"></div>

                {/* Settings */}
                <button
                    onClick={() => onViewChange('settings')}
                    className={`transition-colors p-1.5 ${activeView === 'settings' ? 'text-[#5B96F7]' : 'text-gray-400 hover:text-[#5B96F7]'}`}
                >
                    <Settings size={20} />
                </button>
            </nav>

            {/* Spacer */}
            <div className="flex-1"></div>

            {/* Bottom Section */}
            <div className="flex flex-col items-center gap-5 mb-4">
                {/* Toggle Switch */}
                <div
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="relative inline-flex h-6 w-11 items-center rounded-full cursor-pointer shadow-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: isDarkMode ? '#5B96F7' : '#E2E8F0' }}
                >
                    <span className="sr-only">Toggle theme</span>
                    <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition duration-200 ease-in-out ${isDarkMode ? 'translate-x-[22px]' : 'translate-x-[4px]'
                            }`}
                    />
                </div>

                {/* Profile */}
                <div
                    onClick={() => onViewChange('profile')}
                    className="w-10 h-10 rounded-full overflow-hidden cursor-pointer hover:ring-2 hover:ring-[#5B96F7] hover:ring-offset-2 transition-all"
                >
                    <img
                        src="https://i.pinimg.com/736x/de/b2/99/deb2991ad6942f53f3c1c40e39e3f940.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
