import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({ children, isLoading, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-4 py-2 rounded-lg font-medium transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95";

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30",
        secondary: "bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white",
        outline: "border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 text-slate-600 dark:text-slate-300 hover:text-blue-500"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            disabled={isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {children}
        </button>
    );
};

export default Button;
