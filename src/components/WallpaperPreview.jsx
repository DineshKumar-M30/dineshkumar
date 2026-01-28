import React from 'react';

const WallpaperPreview = ({ color = '#4a4a6a' }) => {
    return (
        <div className="flex-1 h-full flex flex-col bg-white">
            {/* Header */}
            <div className="h-[73px] flex items-center justify-center border-b border-gray-200">
                <span className="text-sm font-bold text-gray-900">Wallpaper Preview</span>
            </div>

            {/* Preview Area */}
            <div
                className="flex-1 transition-colors duration-300"
                style={{ backgroundColor: color }}
            >
                {/* Could add dummy chat bubbles here if needed, but screenshot shows empty */}
            </div>
        </div>
    );
};

export default WallpaperPreview;
