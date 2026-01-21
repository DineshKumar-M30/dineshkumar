import React from 'react';
import { Search, Bell, User, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

const Navbar = () => {
    const { theme } = useTheme();

    return (
        <header className={cn(
            "h-16 sticky top-0 z-40 flex items-center justify-between px-8 border-b backdrop-blur-md transition-colors duration-300",
            theme === 'dark'
                ? "bg-[#111827]/80 border-slate-800"
                : "bg-white/80 border-slate-200"
        )}>
            {/* Search Bar - Center Aligned */}
            <div className="flex-1 flex justify-center max-w-2xl mx-auto">
                <div className="relative group w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search dashboard..."
                        className={cn(
                            "w-full pl-10 pr-4 py-2 bg-transparent border rounded-xl outline-none transition-all",
                            theme === 'dark'
                                ? "border-slate-800 focus:border-blue-500 text-slate-200 bg-slate-800/40"
                                : "border-slate-200 focus:border-blue-500 text-slate-800 bg-slate-50/50"
                        )}
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-4">
                    <Sun className="text-slate-400 cursor-pointer hover:text-white transition-colors" size={20} />
                    <Bell className="text-slate-400 cursor-pointer hover:text-white transition-colors" size={20} />
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm">
                        DK
                    </div>
                    <p className="text-sm font-semibold text-slate-200 hidden sm:block">Dinesh</p>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
