import React, { useState } from 'react';
import { Search, Phone, Video, ArrowUpRight, ArrowDownLeft } from 'lucide-react';
import StartCallModal from './StartCallModal';

const CALL_HISTORY = [
    { id: 1, name: "Dinesh", date: "Yesterday, 21:29", type: "outgoing", status: "connected", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80", isVideo: false },
    { id: 2, name: "Dog Hat", date: "Yesterday, 16:53", type: "missed", status: "missed", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80", isVideo: false },
    { id: 3, name: "Cute Turtle", date: "Yesterday, 16:53", type: "missed", status: "missed", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80", isVideo: false },
    { id: 4, name: "Cool spirit", date: "Yesterday, 16:53", type: "missed", status: "missed", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80", isVideo: true },
    { id: 5, name: "strange cat", date: "Yesterday, 16:53", type: "outgoing", status: "connected", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80", isVideo: true },
];

const CallLogItem = ({ call }) => (
    <div className="bg-white p-4 rounded-2xl flex items-center justify-between hover:shadow-sm transition-shadow cursor-pointer">
        <div className="flex items-center gap-4">
            <img src={call.avatar} alt={call.name} className="w-12 h-12 rounded-full object-cover" />
            <div>
                <h3 className="font-bold text-gray-900">{call.name}</h3>
                <div className="flex items-center gap-1">
                    {call.status === 'missed' ? (
                        <ArrowDownLeft size={14} className="text-red-500" />
                    ) : (
                        <ArrowUpRight size={14} className="text-green-500" />
                    )}
                    <span className="text-xs text-gray-400">{call.date}</span>
                </div>
            </div>
        </div>
        <button className="text-green-500 hover:bg-green-50 p-2 rounded-full transition-colors">
            {call.isVideo ? <Video size={20} /> : <Phone size={20} />}
        </button>
    </div>
);

const CallLog = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="w-80 h-full bg-slate-50 flex flex-col border-r border-gray-200">
            <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Call Log</h1>

                {/* Search */}
                <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full bg-blue-50/50 text-gray-700 rounded-2xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder-blue-300/70 font-medium"
                    />
                </div>

                {/* Start New Conversation */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                    <span className="text-blue-400 text-sm font-medium cursor-pointer hover:underline" onClick={() => setIsModalOpen(true)}>Start new converstaion</span>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="text-blue-500 hover:bg-blue-50 p-2 rounded-full transition-colors"
                    >
                        <Phone size={20} />
                    </button>
                </div>

                {/* List */}
                <div className="space-y-3 overflow-y-auto custom-scrollbar pb-4 h-[calc(100vh-250px)]">
                    {CALL_HISTORY.map(call => (
                        <CallLogItem key={call.id} call={call} />
                    ))}
                </div>

                {isModalOpen && <StartCallModal onClose={() => setIsModalOpen(false)} />}
            </div>
        </div>
    );
};

export default CallLog;
