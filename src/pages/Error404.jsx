import React from 'react';

const Error404 = ({ onBack }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-[#4880FF]">
            {/* Organic Wavy Background (Same as Login for consistency) */}
            <div className="absolute inset-0 z-0">
                <svg className="absolute w-full h-full" viewBox="0 0 1440 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.1" d="M0 500C300 300 500 700 800 500C1100 300 1300 700 1600 500V1024H0V500Z" fill="white" />
                    <path opacity="0.05" d="M-200 800C100 600 400 1000 700 800C1000 600 1300 1000 1600 800V1024H-200V800Z" fill="white" />
                    <path opacity="0.08" d="M1440 200C1100 400 900 0 600 200C300 400 100 0 -200 200V-200H1440V200Z" fill="white" />
                </svg>
            </div>

            {/* Error Card */}
            <div className="relative z-10 w-[630px] bg-white rounded-[24px] p-[60px] shadow-2xl mx-4 flex flex-col items-center animate-in fade-in zoom-in-95 duration-500">
                {/* 404 Illustration / Icon */}
                <div className="w-[430px] mb-12">
                    <div className="bg-[#EBF2FF] rounded-xl overflow-hidden shadow-sm">
                        {/* Browser Header */}
                        <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-gray-50">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
                            </div>
                            <div className="w-20 h-2 bg-gray-100 rounded-full ml-4"></div>
                        </div>
                        {/* Content Area with 404 */}
                        <div className="bg-[#4880FF] p-12 flex flex-col items-center justify-center relative overflow-hidden h-[240px]">
                            <h1 className="text-[120px] font-black text-[#FF9F43] drop-shadow-md select-none tracking-tight leading-none mb-4">404</h1>
                            {/* Decorative Lines */}
                            <div className="absolute bottom-6 left-8 space-y-2">
                                <div className="w-10 h-2.5 bg-white rounded-full"></div>
                                <div className="w-16 h-2.5 bg-white rounded-full opacity-80"></div>
                            </div>
                            <div className="absolute bottom-6 right-8 flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-white opacity-40"></div>
                                <div className="w-3 h-3 rounded-full bg-white opacity-60"></div>
                                <div className="w-3 h-3 rounded-full bg-white"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center mb-10">
                    <h2 className="text-[32px] font-bold text-[#202224] mb-3">Looks like you’ve got lost....</h2>
                </div>

                {/* Action Button */}
                <button
                    onClick={onBack}
                    className="w-full max-w-[380px] bg-[#4880FF] hover:bg-[#3d6edb] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-[#4880FF]/20 text-sm tracking-wide"
                >
                    Back to Dashboard
                </button>
            </div>
        </div>
    );
};

export default Error404;
