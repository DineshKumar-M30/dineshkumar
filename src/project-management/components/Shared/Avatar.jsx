import React from 'react';

const Avatar = ({ src, alt, size = 'md', className = '' }) => {
    const sizes = {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-base",
        xl: "w-16 h-16 text-lg"
    };

    return (
        <div className={`relative rounded-full overflow-hidden border border-slate-200 dark:border-slate-700 ${sizes[size]} ${className}`}>
            {src ? (
                <img src={src} alt={alt} className="w-full h-full object-cover" />
            ) : (
                <div className="w-full h-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-300 font-bold">
                    {alt ? alt.charAt(0).toUpperCase() : '?'}
                </div>
            )}
        </div>
    );
};

export default Avatar;
