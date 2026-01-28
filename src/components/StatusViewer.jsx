import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Smile, Send, Paperclip } from 'lucide-react';

const StatusViewer = ({ status, onClose }) => {
    const [progress, setProgress] = useState(0);

    // Auto-progress simulation
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) return 0;
                return prev + 1;
            });
        }, 50);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex-1 w-full h-full bg-[#F8FAFC] flex flex-col relative">
            {/* Header */}
            <div className="flex items-center justify-between px-12 py-8 flex-shrink-0">
                <h2 className="font-bold text-gray-900 text-[15px] tracking-wide">{status.name}</h2>
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center relative w-full min-h-0 py-4 overflow-hidden">
                {/* Left Arrow */}
                <button className="absolute left-10 p-2 text-gray-400 hover:text-gray-600 transition-colors z-20">
                    <ChevronLeft size={28} />
                </button>

                {/* Story Card */}
                <div className="relative h-full max-h-[700px] w-auto aspect-[9/16] rounded-[24px] overflow-hidden shadow-2xl ring-1 ring-black/5 z-10">
                    {/* Progress Bars */}
                    <div className="absolute top-5 left-0 w-full px-5 flex gap-1.5 z-10">
                        <div className="h-[3px] flex-1 bg-white/40 rounded-full overflow-hidden">
                            <div className="h-full bg-white w-full"></div>
                        </div>
                        <div className="h-[3px] flex-1 bg-white/40 rounded-full overflow-hidden">
                            <div className="h-full bg-white transition-all duration-75 ease-linear" style={{ width: `${progress}%` }}></div>
                        </div>
                        <div className="h-[3px] flex-1 bg-white/40 rounded-full overflow-hidden">
                            <div className="h-full bg-white/0"></div>
                        </div>
                    </div>

                    {/* Image */}
                    <img
                        src={status.image || "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"}
                        alt="Status"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right Arrow */}
                <button className="absolute right-10 p-2 text-gray-400 hover:text-gray-600 transition-colors z-20">
                    <ChevronRight size={28} />
                </button>
            </div>

            {/* Footer Input */}
            <div className="px-10 py-5 bg-white border-t border-gray-100 flex-shrink-0">
                <div className="flex items-center gap-4 bg-[#EBF2FF] rounded-2xl px-5 py-3.5">
                    <button className="text-blue-400 hover:text-blue-600 transition-colors">
                        <Paperclip size={20} className="-rotate-45" />
                    </button>
                    <input
                        type="text"
                        placeholder="Write a message ..."
                        className="flex-1 bg-transparent border-none focus:outline-none text-gray-600 placeholder-blue-300 font-medium text-[15px]"
                    />
                    <button className="text-blue-400 hover:text-blue-600 transition-colors">
                        <Smile size={22} />
                    </button>
                    <button className="bg-[#5B96F7] hover:bg-blue-600 text-white rounded-[10px] p-2 transition-colors shadow-lg shadow-blue-500/20">
                        <Send size={18} className="translate-x-0.5 translate-y-0.5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StatusViewer;
