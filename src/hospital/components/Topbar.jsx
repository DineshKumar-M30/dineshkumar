import React from 'react';
import { Menu, Bell, Search, User } from 'lucide-react';
import { useHospital } from '../context/HospitalContext';

const Topbar = ({ toggleSidebar }) => {
    const { user } = useHospital();

    return (
        <header className="fixed top-0 right-0 left-0 md:left-20 h-16 bg-white border-b border-slate-200 z-10 flex items-center justify-between px-4 transition-all duration-300">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="p-2 hover:bg-slate-100 rounded-lg text-slate-600"
                >
                    <Menu className="w-6 h-6" />
                </button>

                <div className="hidden sm:flex items-center bg-slate-100 rounded-lg px-3 py-1.5 gap-2 w-64 md:w-80">
                    <Search className="w-4 h-4 text-slate-500" />
                    <input
                        type="text"
                        placeholder="Search patients, appointments..."
                        className="bg-transparent border-none focus:outline-none text-sm w-full"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-4">
                <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 relative">
                    <Bell className="w-6 h-6" />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="h-8 w-px bg-slate-200 mx-1"></div>

                <div className="flex items-center gap-2 cursor-pointer hover:bg-slate-50 p-1.5 rounded-lg transition-colors">
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-semibold text-slate-900 leading-none">{user?.name}</p>
                        <p className="text-xs text-slate-500 capitalize leading-tight">{user?.role}</p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                        <User className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
