import React, { useState } from 'react';
import { X, Video, Phone, ChevronRight, Star, Bell, Ban, Trash2 } from 'lucide-react';
import SharedMedia from './SharedMedia';
import StarredMessages from './StarredMessages';

const ContactInfo = ({ chat, onClose }) => {
    const [isMuted, setIsMuted] = useState(true);
    const [view, setView] = useState('info'); // 'info', 'media', 'starred'

    if (view === 'media') {
        return <SharedMedia onBack={() => setView('info')} />;
    }

    if (view === 'starred') {
        return <StarredMessages onBack={() => setView('info')} />;
    }

    return (
        <div className="w-[380px] h-full bg-white border-l border-gray-200 flex flex-col overflow-y-auto custom-scrollbar">
            {/* Header */}
            <div className="flex items-center gap-4 p-6 border-b border-gray-100">
                <button
                    onClick={onClose}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X size={20} />
                </button>
                <h2 className="text-lg font-medium text-gray-700">Contact info</h2>
            </div>

            {/* Profile Section */}
            <div className="flex flex-col items-center pt-8 pb-6 border-b border-gray-100">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                    <img
                        src={chat?.avatar || "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{chat?.name || "Shreyansh shah"}</h3>
                <p className="text-gray-500 font-medium">+91 6265 081 928</p>

                {/* Call Actions */}
                <div className="flex gap-10 mt-8">
                    <div className="flex flex-col items-center gap-2 cursor-pointer group">
                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-gray-50 transition-colors">
                            <Video size={20} />
                        </div>
                        <span className="text-sm font-medium text-gray-900">Audio</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 cursor-pointer group">
                        <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 group-hover:bg-gray-50 transition-colors">
                            <Phone size={20} />
                        </div>
                        <span className="text-sm font-medium text-gray-900">Voice</span>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className="p-6 border-b border-gray-100">
                <h4 className="text-sm text-gray-500 font-medium mb-1">About</h4>
                <p className="text-gray-900 font-bold text-[15px]">Hi there, I am using</p>
            </div>

            {/* Media Section */}
            <div className="p-6 border-b border-gray-100">
                <div
                    onClick={() => setView('media')}
                    className="flex items-center justify-between mb-4 cursor-pointer hover:bg-gray-50 -mx-2 px-2 py-1 rounded-lg transition-colors"
                >
                    <span className="text-sm font-medium text-gray-600">Media, links and docs</span>
                    <div className="flex items-center gap-1 text-gray-500">
                        <span className="text-sm">201</span>
                        <ChevronRight size={16} />
                    </div>
                </div>

                <div className="flex gap-2 overflow-hidden">
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="https://i.pinimg.com/1200x/34/73/f1/3473f16ed29d28241b7559d6281d02de.jpg" alt="Car 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="https://i.pinimg.com/1200x/21/3d/09/213d09fd52b63d6da784f58d4d081d76.jpg" alt="Car 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img src="https://i.pinimg.com/1200x/77/2a/b7/772ab7e36aa7c3051bc30500ce326240.jpg" alt="Car 3" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>

            {/* Settings List */}
            <div className="border-b border-gray-100">
                <button
                    onClick={() => setView('starred')}
                    className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
                >
                    <div className="flex items-center gap-4">
                        <Star size={20} className="text-gray-500" />
                        <span className="text-gray-900 font-medium">Starred Messages</span>
                    </div>
                    <ChevronRight size={16} className="text-gray-400" />
                </button>

                <div className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                        <Bell size={20} className="text-gray-500" />
                        <span className="text-gray-900 font-medium">Mute Notifications</span>
                    </div>
                    <div
                        onClick={() => setIsMuted(!isMuted)}
                        className={`w-11 h-6 rounded-full p-1 cursor-pointer transition-colors ${isMuted ? 'bg-blue-500' : 'bg-gray-200'}`}
                    >
                        <div className={`w-4 h-4 rounded-full bg-white shadow-sm transition-transform ${isMuted ? 'translate-x-5' : 'translate-x-0'}`}></div>
                    </div>
                </div>
            </div>

            {/* Groups Common */}
            <div className="p-6">
                <h4 className="text-sm font-medium text-gray-500 mb-4">1 group in common</h4>
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src="https://i.pinimg.com/1200x/dd/ae/41/ddae41f2517cc72b25da473850d62993.jpg" alt="Camel's Gang" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <h5 className="font-bold text-gray-900 text-sm">Camel's Gang</h5>
                        <p className="text-xs text-gray-500">Owl, Parrot, Rabbit , You</p>
                    </div>
                </div>
            </div>

            {/* Footer Buttons */}
            <div className="mt-auto p-6 flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-blue-200 text-blue-500 font-semibold hover:bg-blue-50 transition-colors">
                    <Ban size={18} />
                    Block
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-red-200 text-red-500 font-semibold hover:bg-red-50 transition-colors">
                    <Trash2 size={18} />
                    Delete
                </button>
            </div>
        </div>
    );
};

export default ContactInfo;
