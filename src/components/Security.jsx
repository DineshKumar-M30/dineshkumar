import React from 'react';
import { ArrowLeft, Lock, MessageSquare, Phone, Link, MapPin, CircleDashed } from 'lucide-react';

const Security = ({ onBack }) => {
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
                <h2 className="text-base font-bold text-gray-900">Security</h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 custom-scrollbar pb-6">
                {/* Hero Section */}
                <div className="flex flex-col items-center mb-8 mt-2">
                    <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mb-5 shadow-sm text-white">
                        <Lock size={32} strokeWidth={2} />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-3 self-start">Your Chats and calls are private</h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                        End-to-end encryption keeps your personal messages & call between you and person you choose to communicate with. Not even talk can read or listen to them. This includes your
                    </p>
                </div>

                {/* List Items */}
                <div className="space-y-5">
                    <div className="flex items-center gap-4">
                        <MessageSquare size={18} className="text-gray-600" />
                        <span className="text-sm text-gray-600">Text and voice messages</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone size={18} className="text-gray-600" />
                        <span className="text-sm text-gray-600">Audio & Video Calls</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link size={18} className="text-gray-600" />
                        <span className="text-sm text-gray-600">Photos, videos & documents</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <MapPin size={18} className="text-gray-600" />
                        <span className="text-sm text-gray-600">Location Sharing</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <CircleDashed size={18} className="text-gray-600" />
                        <span className="text-sm text-gray-600">Status Updates</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Security;
