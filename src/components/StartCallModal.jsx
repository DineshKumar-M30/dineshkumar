import React from 'react';
import { Search, X, Phone, Video } from 'lucide-react';

const CONTACTS = [
    { id: 1, name: "Dinesh", status: "Yesterday, 21:29", avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 2, name: "Dog Hat", status: "Yesterday, 16:53", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 3, name: "Cute Turtle", status: "Yesterday, 16:53", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 4, name: "Cool spirit", status: "Yesterday, 16:53", avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
    { id: 5, name: "strange cat", status: "Yesterday, 16:53", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
];

const StartCallModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-6 relative animate-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <div className="relative flex-1">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-blue-50/50 text-gray-700 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder-blue-300 font-medium"
                        />
                    </div>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors bg-gray-100 rounded-full p-1"
                    >
                        <X size={20} className="fill-current text-gray-500" />
                    </button>
                </div>

                {/* List */}
                <div className="space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                    {CONTACTS.map(user => (
                        <div key={user.id} className="flex items-center justify-between p-2 rounded-xl hover:bg-gray-50 transition-colors group">
                            <div className="flex items-center gap-4">
                                <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm">{user.name}</h3>
                                    <p className="text-xs text-gray-400 font-medium mt-0.5">{user.status}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 text-green-500 hover:bg-green-50 rounded-full transition-colors">
                                    <Phone size={20} strokeWidth={2.5} />
                                </button>
                                <button className="p-2 text-green-500 hover:bg-green-50 rounded-full transition-colors">
                                    <Video size={20} strokeWidth={2.5} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StartCallModal;
