import React from 'react';
import { Search, X } from 'lucide-react';

const BlockNewContactDialog = ({ onClose }) => {
    const contacts = [
        { id: 1, name: "Dinesh", status: "Enjoy life to the fullest", img: "https://i.pinimg.com/1200x/62/16/9f/62169fb4f961f71ff689f1d6a215dc6f.jpg" },
        { id: 2, name: "Dog Hat", status: "You can call me at random..", img: "https://i.pravatar.cc/150?u=2" },
        { id: 3, name: "Cute Turtle", status: "Almost there", img: "https://i.pravatar.cc/150?u=3" },
        { id: 4, name: "Cool spirit", status: "Fiddling with ideas", img: "https://i.pravatar.cc/150?u=4" },
        { id: 5, name: "strange cat", status: "Omw to discover myself", img: "https://i.pravatar.cc/150?u=5" },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="w-[400px] bg-white rounded-xl shadow-xl p-6 transform transition-all relative">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <X size={20} />
                    </button>
                    <h3 className="text-base font-bold text-gray-900 flex-1 ml-4">Block New Contact</h3>
                </div>

                {/* Search Bar */}
                <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500" size={18} />
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full h-10 pl-10 pr-4 bg-blue-50/50 border-none rounded-lg text-sm text-gray-900 placeholder-blue-400 focus:ring-0 focus:outline-none"
                    />
                </div>

                {/* Contacts List */}
                <div className="space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                    {contacts.map((contact) => (
                        <div key={contact.id} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors -mx-2">
                            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                                <img src={contact.img} alt={contact.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold text-gray-900">{contact.name}</span>
                                <span className="text-xs text-gray-500">{contact.status}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlockNewContactDialog;
