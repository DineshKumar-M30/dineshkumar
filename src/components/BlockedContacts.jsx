import React, { useState } from 'react';
import { ArrowLeft, Plus, X } from 'lucide-react';
import BlockNewContactDialog from './BlockNewContactDialog';

const BlockedContacts = ({ onBack }) => {
    const [showBlockDialog, setShowBlockDialog] = useState(false);
    const [blockedUsers, setBlockedUsers] = useState([
        { id: 1, name: "Dinesh", status: "Enjoy life to the fullest", img: "https://i.pinimg.com/1200x/62/16/9f/62169fb4f961f71ff689f1d6a215dc6f.jpg" },
        { id: 2, name: "Dog Hat", status: "You can call me at random..", img: "https://i.pravatar.cc/150?u=2" },
        { id: 3, name: "Cute Turtle", status: "Almost there", img: "https://i.pravatar.cc/150?u=3" },
        { id: 4, name: "Cool spirit", status: "Fiddling with ideas", img: "https://i.pravatar.cc/150?u=4" },
        { id: 5, name: "strange cat", status: "Omw to discover myself", img: "https://i.pravatar.cc/150?u=5" },
    ]);

    const handleUnblock = (id) => {
        setBlockedUsers(blockedUsers.filter(user => user.id !== id));
    };

    return (
        <div className="w-[380px] h-full bg-slate-50 border-r border-gray-200 flex flex-col relative">
            {/* Header */}
            <div className="flex items-center gap-4 p-6 bg-slate-50 flex-shrink-0">
                <button
                    onClick={onBack}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <ArrowLeft size={20} />
                </button>
                <h2 className="text-base font-bold text-gray-900">Blocked Contacts</h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 custom-scrollbar pb-6">
                {/* Block New Contact Action */}
                <button
                    onClick={() => setShowBlockDialog(true)}
                    className="w-full flex items-center justify-between py-4 cursor-pointer group mb-2 text-left"
                >
                    <span className="text-sm font-medium text-blue-500 group-hover:text-blue-600">Block New Contact</span>
                    <Plus size={20} className="text-blue-500 group-hover:text-blue-600" />
                </button>

                {/* Separator */}
                {/* <div className="h-[1px] bg-gray-200 w-full mb-4"></div> */}

                {/* Blocked List */}
                <div className="space-y-2">
                    {blockedUsers.map((user) => (
                        <div key={user.id} className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                    <img src={user.img} alt={user.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-sm font-semibold text-gray-900">{user.name}</span>
                                    <span className="text-xs text-gray-400 truncate max-w-[150px]">{user.status}</span>
                                </div>
                            </div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleUnblock(user.id);
                                }}
                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    ))}
                </div>

                {blockedUsers.length === 0 && (
                    <div className="text-center py-10">
                        <p className="text-sm text-gray-400">No blocked contacts</p>
                    </div>
                )}
            </div>

            {/* Block Dialog */}
            {showBlockDialog && <BlockNewContactDialog onClose={() => setShowBlockDialog(false)} />}
        </div>
    );
};

export default BlockedContacts;

