import React from 'react';
import { ArrowLeft, Fingerprint, ChevronRight } from 'lucide-react';

const Help = ({ onBack }) => {
    const helpItems = [
        { label: "Help Center" },
        { label: "Contact Us" },
        { label: "Licenses" },
        { label: "Terms and Privacy Policy" },
    ];

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
                <h2 className="text-base font-bold text-gray-900">Help</h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 custom-scrollbar">
                {/* Hero Section */}
                <div className="flex flex-col items-center mb-8 mt-2">
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-5 shadow-sm text-white">
                        <Fingerprint size={48} strokeWidth={1.5} />
                    </div>
                </div>

                {/* List Items */}
                <div className="space-y-1">
                    {helpItems.map((item, index) => (
                        <button
                            key={index}
                            className="w-full flex items-center justify-between py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors group text-left"
                        >
                            <span className="text-sm font-medium text-gray-600 group-hover:text-gray-900">{item.label}</span>
                            {/* Screenshot doesn't unambiguously show chevrons, but they are standard for navigation lists. 
                                 However, looking closely at the screenshot provided for Help, there are NO chevrons visible on the right. 
                                 I will match the screenshot and omit them. */}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Help;
