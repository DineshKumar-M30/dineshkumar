import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';

const Navbar = () => {
    const { theme } = useTheme();

    return (
        <header className={cn(
            "h-16 sticky top-0 z-40 flex items-center justify-between px-8 border-b backdrop-blur-md transition-colors duration-300",
            theme === 'dark'
                ? "bg-slate-900/80 border-slate-800"
                : "bg-white/80 border-slate-200"
        )}>
            {/* Search Bar */}
            <div className="flex-1 max-w-md">
                <div className="relative group">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                    <input
                        type="text"
                        placeholder="Search analytics..."
                        className={cn(
                            "w-full pl-10 pr-4 py-2 bg-transparent border rounded-xl outline-none transition-all",
                            theme === 'dark'
                                ? "border-slate-800 focus:border-blue-500 text-slate-200 bg-slate-800/20"
                                : "border-slate-200 focus:border-blue-500 text-slate-800 bg-slate-50/50"
                        )}
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                <button className={cn(
                    "p-2 rounded-xl border relative transition-all",
                    theme === 'dark'
                        ? "border-slate-800 hover:bg-slate-800 text-slate-400"
                        : "border-slate-200 hover:bg-slate-50 text-slate-600"
                )}>
                    <Bell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-slate-900" />
                </button>

                <div className="h-8 w-px bg-slate-200 dark:bg-slate-800" />

                <button className="flex items-center gap-3 pl-2 group">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold dark:text-slate-200 text-slate-800">Dinesh Kumar</p>
                        <p className="text-xs text-slate-400">Administrator</p>
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
                        DK
                    </div>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
