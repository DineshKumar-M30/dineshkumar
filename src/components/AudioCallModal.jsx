import React, { useState, useEffect } from 'react';

const AudioCallModal = ({ onClose, contact }) => {
    const [callStatus, setCallStatus] = useState('connecting'); // connecting, connected
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        // Simulate connection delay
        const timer = setTimeout(() => {
            setCallStatus('connected');
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        let interval;
        if (callStatus === 'connected') {
            interval = setInterval(() => {
                setDuration(prev => prev + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [callStatus]);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, '0')}: ${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/5 backdrop-blur-[1px]">
            <div className="bg-white rounded-[32px] shadow-2xl p-12 w-[600px] flex flex-col items-center animate-in zoom-in-95 duration-200">

                {/* Avatars Section */}
                <div className="flex items-center justify-center gap-12 mb-10 w-full relative">

                    {/* Caller (You/Camel) */}
                    <div className="flex flex-col items-center gap-3 relative z-10">
                        <div className="w-32 h-32 rounded-full flex items-center justify-center bg-gray-50 border border-gray-100">
                            <div className="w-24 h-24 rounded-full p-1 bg-white shadow-sm">
                                <img
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="Camel"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </div>
                        <span className="font-semibold text-gray-900 mt-1">Camel</span>
                    </div>

                    {/* Receiver (Contact/Horse) */}
                    <div className="flex flex-col items-center gap-3 relative z-10">
                        <div className="w-32 h-32 rounded-full flex items-center justify-center bg-gray-50 border border-gray-100">
                            <div className="w-24 h-24 rounded-full p-1 bg-white shadow-sm">
                                <img
                                    src={contact?.avatar || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                                    alt="Horse"
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </div>
                        <span className="font-semibold text-gray-900 mt-1">Horse</span>
                    </div>
                </div>

                {/* Status & Timer Area */}
                <div className="flex flex-col items-center justify-center w-full h-[88px] mb-8">
                    {callStatus === 'connecting' ? (
                        <>
                            {/* Wave Animation when connecting */}
                            <div className="w-48 h-12 flex items-center justify-center">
                                <svg width="100%" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                                    <path d="M0 20 C 20 10, 40 30, 60 20 C 80 10, 100 30, 120 20 C 140 10, 160 30, 180 20 C 200 10, 220 30, 240 20" stroke="#60A5FA" strokeWidth="2" fill="none" />
                                    <path d="M0 20 C 20 30, 40 10, 60 20 C 80 30, 100 10, 120 20 C 140 30, 160 10, 180 20 C 200 30, 220 10, 240 20" stroke="#93C5FD" strokeWidth="2" fill="none" opacity="0.6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mt-4">Connecting...</h3>
                        </>
                    ) : (
                        <>
                            {/* Connected State */}
                            <span className="text-[#34D399] font-medium text-base mb-2">Connected</span>
                            <div className="text-3xl font-bold text-gray-900 font-mono tracking-wider">
                                {formatTime(duration)}
                            </div>
                        </>
                    )}
                </div>

                {/* Hang Up Button */}
                <button
                    onClick={onClose}
                    className="px-8 py-2.5 rounded-xl border border-red-200 text-red-500 font-medium hover:bg-red-50 hover:border-red-300 transition-colors shadow-sm"
                >
                    Hang Up
                </button>
            </div>
        </div>
    );
};

export default AudioCallModal;
