import React, { useEffect, useRef, useState } from 'react';
import { Search, ChevronDown, Paperclip, Smile, Send, Image as ImageIcon, Video, Phone } from 'lucide-react';
import conversation from '../assets/conversation.png';
import AudioCallModal from './AudioCallModal';
import VideoCallModal from './VideoCallModal';

const ChatWindow = ({ chat, onProfileClick }) => {
    const messagesEndRef = useRef(null);
    const [showAudioCall, setShowAudioCall] = useState(false);
    const [showVideoCall, setShowVideoCall] = useState(false);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chat]);

    if (!chat) {
        return (
            <div className="flex-1 h-full bg-white flex flex-col items-center justify-center p-8 overflow-hidden">
                <div className="flex flex-col items-center text-center max-w-md w-full">
                    <div className="w-64 h-64 mb-6 flex items-center justify-center">
                        <img
                            src={conversation}
                            alt="Select conversation"
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <h2 className="text-gray-900 font-medium text-lg">
                        Select a conversation or start a <button className="text-blue-500 hover:underline focus:outline-none font-semibold">new one</button>
                    </h2>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 w-full h-full bg-slate-50 flex flex-col relative">
            {/* Audio Call Modal Overlay */}
            {showAudioCall && <AudioCallModal contact={chat} onClose={() => setShowAudioCall(false)} />}

            {/* Video Call Modal Overlay */}
            {showVideoCall && <VideoCallModal contact={chat} onClose={() => setShowVideoCall(false)} />}

            {/* Header */}
            <div className="h-[88px] bg-white border-b border-gray-200 flex items-center justify-between px-8 flex-shrink-0">
                <div
                    className="flex items-center gap-5 cursor-pointer hover:opacity-80 transition-opacity"
                    onClick={onProfileClick}
                >
                    <div className="relative">
                        <img src={chat.avatar} alt={chat.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                        <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 bg-[#4ADE80] border-[2.5px] border-white rounded-full"></span>
                    </div>
                    <div className="flex flex-col gap-0.5">
                        <h2 className="font-bold text-gray-900 text-[17px] tracking-tight">{chat.name}</h2>
                        <p className="text-[13px] text-gray-500 font-medium truncate max-w-[400px]">{chat.members || "Online"}</p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    <button
                        onClick={() => setShowVideoCall(true)}
                        className="text-gray-600 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-gray-50"
                    >
                        <Video size={22} strokeWidth={2} />
                    </button>
                    <button
                        onClick={() => setShowAudioCall(true)}
                        className="text-gray-600 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-gray-50"
                    >
                        <Phone size={20} strokeWidth={2} />
                    </button>
                    <button className="text-gray-600 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-gray-50">
                        <Search size={20} strokeWidth={2.5} />
                    </button>

                    <div className="w-[1px] h-8 bg-gray-200 mx-1"></div>

                    <button className="text-gray-600 hover:text-blue-500 transition-colors p-2 rounded-full hover:bg-gray-50">
                        <ChevronDown size={20} strokeWidth={2.5} />
                    </button>
                </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 custom-scrollbar">

                {/* User Message */}
                <div className="flex justify-start">
                    <div className="max-w-[70%]">
                        <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm mb-1 inline-block">
                            <p className="text-gray-900 text-sm">Hi 👋, How are ya ?</p>
                        </div>
                        <span className="text-xs text-gray-400 ml-1 block">0:12</span>
                    </div>
                </div>

                {/* Date Separator */}
                <div className="relative flex items-center py-2">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink-0 mx-4 text-xs text-gray-400 font-medium">Today</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>

                {/* My Message */}
                <div className="flex justify-end">
                    <div className="max-w-[70%] flex flex-col items-end">
                        <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-md mb-1 inline-block text-left">
                            <p className="text-sm">Hi 👋 Panda, not bad, u ?</p>
                        </div>
                        <span className="text-xs text-gray-400 mr-1 block">8:17</span>
                    </div>
                </div>

                {/* My Message */}
                <div className="flex justify-end">
                    <div className="max-w-[70%] flex flex-col items-end">
                        <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-md mb-1 inline-block text-left">
                            <p className="text-sm">Can you send me an abstarct image?</p>
                        </div>
                        <span className="text-xs text-gray-400 mr-1 block">8:17</span>
                    </div>
                </div>

                {/* Incoming Image Message */}
                <div className="flex justify-start">
                    <div className="max-w-[70%]">
                        <div className="relative rounded-2xl overflow-hidden shadow-sm mb-1 w-64 h-64">
                            <img
                                src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                                alt="Abstract"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center bg-white shadow-sm rounded-full px-2 py-1 gap-1">
                                <span className="text-xs">🔥</span>
                                <span className="text-xs font-semibold text-gray-600">1</span>
                            </div>
                            <span className="text-xs text-gray-400 block">10:35</span>
                        </div>
                    </div>
                </div>

                {/* My Message (File Request) */}
                <div className="flex justify-end">
                    <div className="max-w-[70%] flex flex-col items-end">
                        <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-md mb-1 inline-block text-left">
                            <p className="text-sm">Can you send it as file ?</p>
                        </div>
                        <span className="text-xs text-gray-400 mr-1 block">11:12</span>
                    </div>
                </div>

                {/* Incoming File Message */}
                <div className="flex justify-start">
                    <div className="max-w-[70%]">
                        <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm mb-1 flex items-center gap-3 w-64">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                                <ImageIcon size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">Abstract.png</p>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                            </button>
                        </div>
                        <span className="text-xs text-gray-400 ml-1 block">11:25</span>
                    </div>
                </div>

                {/* My Message (Thanks) */}
                <div className="flex justify-end">
                    <div className="max-w-[70%] flex flex-col items-end">
                        <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-md mb-1 inline-block text-left">
                            <p className="text-sm">Thnx!</p>
                        </div>
                        <span className="text-xs text-gray-400 mr-1 block">11:28</span>
                    </div>
                </div>

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex items-center gap-3 bg-blue-50/50 rounded-2xl px-4 py-3">
                    <button className="text-blue-400 hover:text-blue-600 transition-colors">
                        <Paperclip size={20} />
                    </button>
                    <input
                        type="text"
                        placeholder="Write a message ..."
                        className="flex-1 bg-transparent border-none focus:outline-none text-gray-700 placeholder-blue-300 font-medium"
                    />
                    <button className="text-blue-400 hover:text-blue-600 transition-colors">
                        <Smile size={20} />
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl p-2 transition-colors shadow-blue-200 shadow-lg">
                        <Send size={18} className="translate-x-0.5 translate-y-0.5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;
