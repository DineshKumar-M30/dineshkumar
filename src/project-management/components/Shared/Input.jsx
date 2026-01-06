import React from 'react';

const Input = ({ label, error, ...props }) => {
    return (
        <div className="mb-4">
            {label && <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">{label}</label>}
            <input
                className={`w-full px-4 py-2 rounded-lg border ${error ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'} bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow`}
                {...props}
            />
            {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
        </div>
    );
};

export default Input;
