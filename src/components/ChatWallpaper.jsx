import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const ChatWallpaper = ({ onBack, onWallpaperChange }) => {
    const [enableDoodle, setEnableDoodle] = useState(true);
    const [selectedColor, setSelectedColor] = useState('#4a4a6a'); // Default selection matching screenshot roughly

    const colors = [
        { id: 'default', color: '#e5e7eb', label: 'Default' }, // Gray-ish
        { id: 'dark', color: '#111827' },
        { id: 'dark-green', color: '#164e3f' },
        { id: 'green', color: '#198055' },
        { id: 'blue', color: '#1e40af' },
        { id: 'rose', color: '#be7878' },
        { id: 'taupe', color: '#9ca3af' },
        { id: 'black', color: '#000000' },
        { id: 'olive', color: '#3f6212' },
        { id: 'magenta', color: '#be185d' },
        { id: 'teal', color: '#0f766e' },
        { id: 'orange', color: '#c26d40' },
        { id: 'lavender', color: '#c4b5fd' },
        { id: 'dark-2', color: '#022c22' },
        { id: 'pink', color: '#db8a98' },
        { id: 'dark-gray', color: '#374151' },
        { id: 'purple', color: '#7e22ce' },
        { id: 'blue-gray', color: '#475569' },
        { id: 'mint', color: '#6ee7b7' }, // Adjusted to match last row green
        { id: 'brown', color: '#78350f' },
        { id: 'navy', color: '#1e1b4b' },
    ];

    const handleColorClick = (color) => {
        setSelectedColor(color);
        if (onWallpaperChange) {
            onWallpaperChange(color);
        }
    };

    return (
        <div className="w-[380px] h-full bg-slate-50 border-r border-gray-200 flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-4 p-6 bg-slate-50 flex-shrink-0">
                <button
                    onClick={onBack}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <ArrowLeft size={20} />
                </button>
                <h2 className="text-base font-bold text-gray-900">Set Chat Wallpaper</h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 custom-scrollbar">
                {/* Doodle Toggle */}
                <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-medium text-gray-700">Enable Talk Doodle</span>
                    <input
                        type="checkbox"
                        checked={enableDoodle}
                        onChange={(e) => setEnableDoodle(e.target.checked)}
                        className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-transparent cursor-pointer"
                    />
                </div>

                {/* Color Grid */}
                <div className="grid grid-cols-3 gap-3 pb-6">
                    {colors.map((item) => (
                        <div
                            key={item.id}
                            onClick={() => handleColorClick(item.color)}
                            className={`aspect-square rounded-xl cursor-pointer transition-transform hover:scale-105 ${selectedColor === item.color ? 'ring-2 ring-blue-500 ring-offset-2' : ''}`}
                            style={{ backgroundColor: item.color }}
                        >
                            {item.label && (
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-xs font-medium text-gray-700">{item.label}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChatWallpaper;
