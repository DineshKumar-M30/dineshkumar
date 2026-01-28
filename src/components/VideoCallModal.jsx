import React from 'react';
import { PhoneOff } from 'lucide-react';

const VideoCallModal = ({ onClose, contact }) => {
    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
            {/* Main Video Card */}
            <div className="relative w-[800px] h-[500px] bg-black rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200 border-4 border-white">

                {/* Remote Video (Full Size) */}
                <img
                    src="https://i.pinimg.com/1200x/42/ca/3f/42ca3f46f4cee593361ac54785cda7d8.jpg"
                    alt="Main Video"
                    className="w-full h-full object-cover"
                />

                {/* Local Video (PIP) */}
                <div className="absolute top-6 right-6 w-48 h-32 rounded-2xl overflow-hidden border-2 border-white shadow-lg">
                    <img
                        src="https://i.pinimg.com/736x/d0/30/3a/d0303a972df2bf818eb1d6fe727c3f61.jpg"
                        alt="Me"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Hang Up Button */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                    <button
                        onClick={onClose}
                        className="w-16 h-12 bg-red-500 hover:bg-red-600 active:bg-red-700 text-white rounded-2xl flex items-center justify-center transition-all shadow-lg hover:shadow-red-500/30 active:scale-95"
                    >
                        <PhoneOff size={24} fill="currentColor" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideoCallModal;
