import React, { useState } from 'react';
import { X } from 'lucide-react';

const CreateGroupModal = ({ onClose, onCreate }) => {
    const [groupName, setGroupName] = useState('');
    const [members, setMembers] = useState([
        { id: 1, name: 'Chip', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { id: 2, name: 'Chip', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }
    ]);

    const handleRemoveMember = (id) => {
        setMembers(members.filter(m => m.id !== id));
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-[2px] animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl shadow-2xl w-[500px] p-8 animate-in zoom-in-95 duration-200 relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <div className="bg-gray-100 rounded-full p-1.5 hover:bg-gray-200 transition-colors">
                        <X size={18} className="text-gray-500" />
                    </div>
                </button>

                {/* Header */}
                <h2 className="text-xl font-bold text-gray-900 mb-8">Create New Group</h2>

                {/* Form */}
                <div className="space-y-8">
                    {/* Name Input */}
                    <div className="relative">
                        <label className="absolute -top-2.5 left-4 text-sm font-semibold text-blue-500 bg-white px-1 z-10 transition-all">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Group Name"
                            value={groupName}
                            onChange={(e) => setGroupName(e.target.value)}
                            className="w-full border border-blue-500 rounded-xl px-5 py-3.5 focus:outline-none focus:ring-1 focus:ring-blue-500 text-gray-900 placeholder-gray-400 text-[15px] font-medium transition-all"
                        />
                    </div>

                    {/* Members Input */}
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-500 ml-1">Members</label>
                        <div className="border border-gray-200 rounded-xl p-3 flex flex-wrap gap-3 min-h-[58px] items-center">
                            {members.map((member) => (
                                <div key={member.id} className="bg-gray-100 rounded-full pl-1 pr-3 py-1 flex items-center gap-2.5 border border-transparent hover:border-gray-200 transition-all">
                                    <img src={member.avatar} alt={member.name} className="w-7 h-7 rounded-full object-cover" />
                                    <span className="text-sm font-medium text-gray-700">{member.name}</span>
                                    <button
                                        onClick={() => handleRemoveMember(member.id)}
                                        className="text-gray-400 hover:text-gray-600 transition-colors ml-0.5"
                                    >
                                        <div className="bg-white rounded-full p-0.5 shadow-sm">
                                            <X size={10} className="text-gray-400" />
                                        </div>
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end mt-10">
                    <button
                        onClick={() => onCreate(groupName, members)}
                        className="bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white px-10 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-500/25 active:scale-95"
                    >
                        Create
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateGroupModal;
