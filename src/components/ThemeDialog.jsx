import React, { useState } from 'react';

const ThemeDialog = ({ onClose }) => {
    const [selectedTheme, setSelectedTheme] = useState('light');

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="w-[400px] bg-white rounded-xl shadow-xl p-6 transform transition-all">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Choose Theme</h3>

                <div className="space-y-4 mb-8">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedTheme === 'light' ? 'border-blue-500' : 'border-gray-400 group-hover:border-blue-500'}`}>
                            {selectedTheme === 'light' && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />}
                        </div>
                        <input
                            type="radio"
                            name="theme"
                            value="light"
                            checked={selectedTheme === 'light'}
                            onChange={() => setSelectedTheme('light')}
                            className="hidden"
                        />
                        <span className="text-gray-700 text-sm font-medium">Light</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedTheme === 'dark' ? 'border-blue-500' : 'border-gray-400 group-hover:border-blue-500'}`}>
                            {selectedTheme === 'dark' && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />}
                        </div>
                        <input
                            type="radio"
                            name="theme"
                            value="dark"
                            checked={selectedTheme === 'dark'}
                            onChange={() => setSelectedTheme('dark')}
                            className="hidden"
                        />
                        <span className="text-gray-700 text-sm font-medium">Dark</span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedTheme === 'system' ? 'border-blue-500' : 'border-gray-400 group-hover:border-blue-500'}`}>
                            {selectedTheme === 'system' && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />}
                        </div>
                        <input
                            type="radio"
                            name="theme"
                            value="system"
                            checked={selectedTheme === 'system'}
                            onChange={() => setSelectedTheme('system')}
                            className="hidden"
                        />
                        <span className="text-gray-700 text-sm font-medium">System Default</span>
                    </label>
                </div>

                <div className="flex items-center justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-sm font-medium text-blue-500 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onClose}
                        className="px-6 py-2 text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-sm transition-colors"
                    >
                        Apply
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThemeDialog;
