import React from 'react';

// Button Component
export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        success: 'bg-emerald-600 text-white hover:bg-emerald-700',
        outline: 'border border-slate-200 text-slate-600 hover:bg-slate-50',
    };

    return (
        <button
            className={`px-5 py-2.5 rounded-xl font-semibold transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm hover:shadow-md ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

// Card Component
export const Card = ({ children, className = '', title, subtitle, action }) => (
    <div className={`bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden ${className}`}>
        {(title || action) && (
            <div className="px-6 py-4 border-b border-slate-50 flex items-center justify-between bg-white">
                <div>
                    {title && <h3 className="font-bold text-slate-800 tracking-tight">{title}</h3>}
                    {subtitle && <p className="text-xs text-slate-400 mt-1">{subtitle}</p>}
                </div>
                {action && <div>{action}</div>}
            </div>
        )}
        <div className="p-6">{children}</div>
    </div>
);

// Input Component
export const Input = ({ label, error, className = '', ...props }) => (
    <div className={`space-y-1 ${className}`}>
        {label && <label className="block text-sm font-medium text-slate-700">{label}</label>}
        <input
            className={`w-full px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-shadow ${error ? 'border-red-500' : 'border-slate-200 focus:border-blue-500'}`}
            {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
);

// Table Component
export const Table = ({ headers, children, className = '' }) => (
    <div className={`overflow-x-auto -mx-6 ${className}`}>
        <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50 border-y border-slate-200">
                <tr>
                    {headers.map((header, idx) => (
                        <th key={idx} className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                            {header}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
                {children}
            </tbody>
        </table>
    </div>
);

// Modal Component
export const Modal = ({ isOpen, onClose, title, children, footer }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                    <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-lg text-slate-400">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-6">{children}</div>
                {footer && (
                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-end gap-3">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    );
};

// Badge Component
export const Badge = ({ children, variant = 'neutral' }) => {
    const variants = {
        neutral: 'bg-slate-100 text-slate-600',
        success: 'bg-emerald-100 text-emerald-700',
        warning: 'bg-amber-100 text-amber-700',
        danger: 'bg-red-100 text-red-700',
        blue: 'bg-blue-100 text-blue-700',
    };
    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
            {children}
        </span>
    );
};
