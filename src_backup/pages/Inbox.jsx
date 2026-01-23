import React, { useState } from 'react';
import {
    Plus,
    Mail,
    Star,
    Send,
    File,
    AlertOctagon,
    Bookmark,
    Trash,
    Square,
    Search,
    Archive,
    Info,
    Trash2,
    ChevronLeft,
    ChevronRight,
    Reply,
    MoreVertical,
    Printer,
    ArrowLeft
} from 'lucide-react';

const emailData = [
    {
        id: 1,
        sender: "Jullu Jalal",
        email: "jullu.jalal@example.com",
        label: "Primary",
        subject: "Our Bachelor of Commerce program is ACBSP-accredited.",
        time: "8:38 AM",
        starred: false,
        content: "Hello, I hope you are doing well. I am writing to inform you that our Bachelor of Commerce program has officially received ACBSP accreditation. This is a significant milestone for our institution...",
        avatar: "https://i.pravatar.cc/150?u=jullu"
    },
    {
        id: 2,
        sender: "Minerva Barnett",
        email: "minerva.b@design.com",
        label: "Work",
        subject: "Get Best Advertiser In Your Side Pocket",
        time: "8:13 AM",
        starred: false,
        content: "Hi team, I've attached the latest marketing presentation. We need to review the advertiser metrics before the afternoon meeting. Let me know if you have any questions.",
        avatar: "https://i.pravatar.cc/150?u=minerva"
    },
    {
        id: 3,
        sender: "Peter Lewis",
        email: "peter.lewis@gmail.com",
        label: "Friends",
        subject: "Vacation Home Rental Success",
        time: "7:52 PM",
        starred: false,
        content: "Hey! The vacation home was amazing. Everyone had a great time. Check out these photos from the trip!",
        avatar: "https://i.pravatar.cc/150?u=peter"
    },
    { id: 4, sender: "Anthony Briggs", email: "anthony@briggs.me", label: null, subject: "Free Classifieds Using Them To Promote Your Stuff Online", time: "7:52 PM", starred: true },
    { id: 5, sender: "Clifford Morgan", email: "c.morgan@social.com", label: "Social", subject: "Enhance Your Brand Potential With Giant Advertising Blimps", time: "4:13 PM", starred: false },
    { id: 6, sender: "Cecilia Webster", email: "cecilia@webster.net", label: "Friends", subject: "Always Look On The Bright Side Of Life", time: "3:52 PM", starred: false },
    { id: 7, sender: "Harvey Manning", email: "harvey@manning.com", label: null, subject: "Curling Irons Are As Individual As The Women Who Use Them", time: "2:30 PM", starred: true },
];

const getLabelColor = (label) => {
    switch (label) {
        case 'Primary': return 'bg-[#00B69B] bg-opacity-[0.1] text-[#00B69B]';
        case 'Work': return 'bg-[#FD5454] bg-opacity-[0.1] text-[#FD5454]';
        case 'Friends': return 'bg-[#D64BC9] bg-opacity-[0.1] text-[#D64BC9]';
        case 'Social': return 'bg-[#279EFF] bg-opacity-[0.1] text-[#279EFF]';
        default: return 'bg-gray-100 text-gray-600';
    }
};

const Inbox = () => {
    const [selectedEmail, setSelectedEmail] = useState(null);

    const folders = [
        { icon: Mail, label: 'Inbox', count: '1253', active: true },
        { icon: Star, label: 'Starred', count: '245', active: false },
        { icon: Send, label: 'Sent', count: '24,532', active: false },
        { icon: File, label: 'Draft', count: '09', active: false },
        { icon: AlertOctagon, label: 'Spam', count: '14', active: false },
        { icon: Bookmark, label: 'Important', count: '18', active: false },
        { icon: Trash, label: 'Bin', count: '9', active: false },
    ];

    const labels = [
        { label: 'Primary', color: 'text-[#00B69B]' },
        { label: 'Social', color: 'text-[#279EFF]' },
        { label: 'Work', color: 'text-[#FD5454]' },
        { label: 'Friends', color: 'text-[#D64BC9]' },
    ];

    return (
        <div className="p-6 h-full flex flex-col overflow-hidden">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 font-outfit">Inbox</h2>

            <div className="flex gap-6 flex-1 min-h-0 overflow-hidden">
                {/* Left Sidebar */}
                <div className="w-64 bg-white rounded-3xl p-6 shadow-sm border border-gray-100 h-full flex flex-col overflow-y-auto shrink-0 no-scrollbar">
                    <button className="w-full bg-[#4880FF] hover:bg-blue-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 mb-8 transition-colors shadow-lg shadow-blue-500/30">
                        <Plus size={20} />
                        <span>Compose</span>
                    </button>

                    <div className="mb-8">
                        <h3 className="text-gray-900 font-bold mb-4 px-2">My Email</h3>
                        <div className="space-y-1">
                            {folders.map((item, index) => (
                                <button
                                    key={index}
                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-colors ${item.active
                                        ? 'bg-[#E8F0FE] text-[#4880FF]'
                                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon size={18} />
                                        <span>{item.label}</span>
                                    </div>
                                    <span className={`${item.active ? 'text-[#4880FF]' : 'text-gray-500'}`}>
                                        {item.count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-gray-900 font-bold mb-4 px-2">Label</h3>
                        <div className="space-y-1 mb-4">
                            {labels.map((item, index) => (
                                <button
                                    key={index}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                                >
                                    <Square size={18} className={item.color} strokeWidth={3} />
                                    <span>{item.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Content Area */}
                <div className="flex-1 bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col overflow-hidden relative">
                    {selectedEmail ? (
                        /* Email Detail View */
                        <div className="flex flex-col h-full animate-in fade-in slide-in-from-right-4 duration-300">
                            {/* Detail Header */}
                            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                                <button
                                    onClick={() => setSelectedEmail(null)}
                                    className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors font-semibold"
                                >
                                    <ArrowLeft size={20} />
                                    <span>Back</span>
                                </button>
                                <div className="flex items-center gap-2">
                                    <button className="w-9 h-9 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-lg border border-gray-200"><Archive size={16} /></button>
                                    <button className="w-9 h-9 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-lg border border-gray-200"><Trash2 size={16} /></button>
                                    <button className="w-9 h-9 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-lg border border-gray-200"><Printer size={16} /></button>
                                </div>
                            </div>

                            {/* Email Content */}
                            <div className="flex-1 overflow-y-auto p-8">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="flex items-center gap-4">
                                        <img src={selectedEmail.avatar || "https://i.pravatar.cc/150"} alt="" className="w-12 h-12 rounded-full" />
                                        <div>
                                            <h4 className="font-bold text-gray-900 text-lg">{selectedEmail.sender}</h4>
                                            <p className="text-sm text-gray-500">From: {selectedEmail.email}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500 font-medium">{selectedEmail.time}</p>
                                        <button className="text-gray-300 hover:text-yellow-400 transition-colors mt-2">
                                            <Star size={20} className={selectedEmail.starred ? "fill-yellow-400 text-yellow-400" : ""} />
                                        </button>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-6">{selectedEmail.subject}</h3>

                                <div className="text-gray-700 leading-relaxed mb-12 whitespace-pre-wrap">
                                    {selectedEmail.content || "No content available for this preview."}
                                </div>

                                {/* Reply Box */}
                                <div className="mt-8 border-t border-gray-100 pt-8">
                                    <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                                        <p className="text-sm text-gray-400 mb-2">Click here to <span className="text-blue-600 font-bold cursor-pointer">Reply</span> or <span className="text-blue-600 font-bold cursor-pointer">Forward</span></p>
                                        <div className="h-20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* Email List View */
                        <div className="flex flex-col h-full">
                            {/* List Header */}
                            <div className="p-5 border-b border-gray-100 flex items-center justify-between bg-white">
                                <div className="relative w-full max-w-lg">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search mail"
                                        className="w-full pl-12 pr-4 py-2.5 bg-[#F5F6FA] border border-transparent rounded-full text-sm text-gray-600 focus:outline-none focus:bg-white focus:border-gray-200 transition-colors"
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <button className="w-9 h-9 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200"><Archive size={16} /></button>
                                    <button className="w-9 h-9 flex items-center justify-center text-gray-400 hover:bg-gray-50 rounded-lg transition-colors border border-gray-200"><Info size={16} /></button>
                                    <button className="w-9 h-9 flex items-center justify-center text-gray-400 hover:bg-red-50 hover:text-red-500 rounded-lg transition-colors border border-gray-200"><Trash2 size={16} /></button>
                                </div>
                            </div>

                            {/* Email List */}
                            <div className="flex-1 overflow-y-auto">
                                {emailData.map((email) => (
                                    <div
                                        key={email.id}
                                        onClick={() => setSelectedEmail(email)}
                                        className="flex items-center px-6 py-4 border-b border-gray-50 hover:bg-gray-50/80 transition-all group cursor-pointer"
                                    >
                                        <div className="flex items-center gap-4 w-16 flex-shrink-0">
                                            <input type="checkbox" onClick={(e) => e.stopPropagation()} className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer" />
                                            <Star
                                                size={20}
                                                className={email.starred ? "fill-yellow-400 text-yellow-400" : "text-gray-300 hover:text-gray-400"}
                                            />
                                        </div>

                                        <div className="w-48 flex-shrink-0">
                                            <span className="font-bold text-gray-900 text-[14px]">{email.sender}</span>
                                        </div>

                                        <div className="flex-1 min-w-0 flex items-center gap-3">
                                            <div className="w-24 flex-shrink-0 flex justify-end">
                                                {email.label && (
                                                    <span className={`px-3 py-1 rounded text-[11px] font-bold uppercase tracking-wide ${getLabelColor(email.label)}`}>
                                                        {email.label}
                                                    </span>
                                                )}
                                            </div>
                                            <p className="text-[14px] text-gray-600 truncate whitespace-nowrap font-medium block">{email.subject}</p>
                                        </div>

                                        <div className="text-right pl-4 w-20 flex-shrink-0">
                                            <span className="text-xs font-bold text-gray-500 whitespace-nowrap">{email.time}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Pagination */}
                            <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-white">
                                <span className="text-sm text-gray-500 font-medium">Showing 1-7 of 1,253</span>
                                <div className="flex items-center gap-2">
                                    <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"><ChevronLeft size={18} /></button>
                                    <button className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"><ChevronRight size={18} /></button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Inbox;
