import React from 'react';

const PlaceholderPage = ({ title }) => {
    return (
        <div className="p-6 h-full flex flex-col items-center justify-center text-center">
            <div className="bg-gray-100 p-8 rounded-full mb-6">
                <h1 className="text-6xl text-gray-300 font-bold opacity-50">
                    {title && title.charAt(0)}
                </h1>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-500 max-w-md">
                This page is currently under implementation.
                Please check back later for updates.
            </p>
        </div>
    );
};

export default PlaceholderPage;
