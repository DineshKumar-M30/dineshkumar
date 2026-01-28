import React, { useState, useRef, useEffect } from 'react';
import { Search, Archive, ChevronDown, Plus, Filter, Users, RefreshCcw, CheckCircle, Circle, ChevronLeft } from 'lucide-react';
import CreateGroupModal from './CreateGroupModal';

const ChatItem = ({ user, isSelected, onClick }) => (
    <div
        onClick={() => onClick(user)}
        className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors group ${isSelected ? 'bg-blue-500 hover:bg-blue-600' : 'hover:bg-gray-50'
            }`}
    >
        <div className="relative">
            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
            {user.status === 'active' && (
                <span className={`absolute bottom-0 right-0 w-3 h-3 border-2 rounded-full ${isSelected ? 'bg-green-400 border-blue-500' : 'bg-green-500 border-white'}`}></span>
            )}
        </div>

        <div className="flex-1 min-w-0">
            <div className="flex justify-between items-baseline mb-1">
                <h3 className={`font-semibold text-sm truncate ${isSelected ? 'text-white' : 'text-gray-900'}`}>{user.name}</h3>
                <span className={`text-xs whitespace-nowrap ${isSelected ? 'text-blue-100' : 'text-gray-400'}`}>{user.time}</span>
            </div>
            <div className="flex justify-between items-center">
                <p className={`text-sm truncate ${isSelected ? 'text-blue-100' :
                    user.unread ? 'text-gray-900 font-medium' : 'text-gray-500'
                    }`}>
                    {user.message}
                </p>
                {user.unread && (
                    <span className={`ml-2 w-5 h-5 rounded-full text-xs flex items-center justify-center font-medium ${isSelected ? 'bg-white text-blue-500' : 'bg-blue-500 text-white'
                        }`}>
                        {user.unread}
                    </span>
                )}
                {user.hasDropdown && (
                    <ChevronDown size={14} className={isSelected ? 'text-white' : 'text-gray-400'} />
                )}
            </div>
        </div>
    </div>
);

const ChatList = ({ chats, onChatSelect, selectedChatId, onCreateGroup, onNavigate }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isCreateGroupOpen, setIsCreateGroupOpen] = useState(false);
    const [title, setTitle] = useState('Chats');
    const filterRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) {
                setIsFilterOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleFilterSelect = (filterName) => {
        if (filterName === 'Group') {
            setTitle('Groups');
        } else if (filterName === 'Updates') {
            if (onNavigate) onNavigate('updates');
            setIsFilterOpen(false);
            return;
        } else if (filterName === 'Unread') {
            setTitle('Unread');
        } else if (filterName === 'Read') {
            setTitle('Read');
        } else if (filterName === 'Archived') {
            setTitle('Archived');
        } else {
            setTitle('Chats');
        }
        setIsFilterOpen(false);
    };

    const handleCreateGroup = (groupName, members) => {
        setIsCreateGroupOpen(false);
        // In a real app, you would create the group here
        if (onCreateGroup) onCreateGroup({ name: groupName, members });
    };

    let filteredUsers = chats.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (title === 'Unread') {
        // In Unread view, show only unread chats OR the currently selected chat
        filteredUsers = filteredUsers.filter(u => u.unread || u.id === selectedChatId);
    } else if (title === 'Read') {
        // In Read view, show only read chats (no unread count) OR the currently selected chat
        filteredUsers = filteredUsers.filter(u => !u.unread || u.id === selectedChatId);
    } else if (title === 'Archived') {
        // In Archived view, show pinned chats as requested
        filteredUsers = filteredUsers.filter(u => u.pinned);
    }

    const pinnedChats = filteredUsers.filter(u => u.pinned);
    const otherChats = filteredUsers.filter(u => !u.pinned);

    return (
        <div className="w-80 h-full bg-white flex flex-col border-r border-gray-200 relative">
            {/* Create Group Modal */}
            {isCreateGroupOpen && (
                <CreateGroupModal
                    onClose={() => setIsCreateGroupOpen(false)}
                    onCreate={handleCreateGroup}
                />
            )}

            {/* Header */}
            <div className="p-6 pb-2">
                {title === 'Unread' || title === 'Read' || title === 'Archived' ? (
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setTitle('Chats')}>
                            <ChevronLeft size={24} className="text-gray-900" />
                            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                        </div>
                        <div className="p-2 ml-auto cursor-pointer text-gray-400 hover:text-gray-600">
                            <svg className="animate-spin-slow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                            </svg>
                        </div>
                    </div>
                ) : (
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
                        <div className="p-2 ml-auto cursor-pointer text-gray-400 hover:text-gray-600">
                            <svg className="animate-spin-slow" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
                            </svg>
                        </div>
                    </div>
                )}

                {/* Search */}
                <div className="relative mb-4 z-20" ref={filterRef}>
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-blue-50/50 text-gray-700 rounded-2xl pl-10 pr-10 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 placeholder-blue-300/70 font-medium transition-all"
                    />
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors ${isFilterOpen ? 'text-blue-500' : 'text-gray-500 hover:text-gray-700'}`}
                    >
                        <Filter size={18} />
                    </button>

                    {/* Filter Dropdown */}
                    {isFilterOpen && (
                        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right z-30">
                            <div className="py-1">
                                <button
                                    onClick={() => handleFilterSelect('Group')}
                                    className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                                >
                                    <Users size={16} className="text-blue-500" />
                                    <span>Group</span>
                                </button>
                                <button
                                    onClick={() => handleFilterSelect('Updates')}
                                    className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                                >
                                    <RefreshCcw size={16} className="text-green-500" />
                                    <span>Updates</span>
                                </button>
                                <button
                                    onClick={() => handleFilterSelect('Read')}
                                    className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                                >
                                    <CheckCircle size={16} className="text-purple-500" />
                                    <span>Read</span>
                                </button>
                                <button
                                    onClick={() => handleFilterSelect('Unread')}
                                    className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                                >
                                    <Circle size={16} className="text-orange-500" />
                                    <span>Unread</span>
                                </button>
                                <button
                                    onClick={() => handleFilterSelect('Archived')}
                                    className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                                >
                                    <Archive size={16} className="text-indigo-500" />
                                    <span>Archived</span>
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Create New Group */}
                {title === 'Groups' && (
                    <button
                        onClick={() => setIsCreateGroupOpen(true)}
                        className="flex items-center justify-between w-full text-blue-500 hover:text-blue-600 mb-4 px-1"
                    >
                        <span className="text-sm font-medium">Create New Group</span>
                        <Plus size={20} />
                    </button>
                )}

                {/* Archived Link - Only show if not in Archived view, or maybe always show? Let's hide if active to avoid confusion, or keep it. Standard behavior usually hides it inside. The user just said "click archived". */}
                {/* Assuming user means the button at bottom or filter. I will add click handler to this button. */}
                {title !== 'Archived' && (
                    <button
                        onClick={() => setTitle('Archived')}
                        className="flex items-center gap-3 w-full text-gray-500 hover:text-blue-500 mb-6 px-1 transition-colors group"
                    >
                        <Archive size={18} className="group-hover:text-blue-500" />
                        <span className="text-sm font-semibold">Archived</span>
                    </button>
                )}

            </div>

            {/* Chat Lists */}
            <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">
                {/* Pinned */}
                <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-400 mb-3 px-2">Pinned</h4>
                    <div className="space-y-1">
                        {pinnedChats.map(user => (
                            <ChatItem
                                key={user.id}
                                user={user}
                                isSelected={selectedChatId === user.id}
                                onClick={onChatSelect}
                            />
                        ))}
                    </div>
                </div>

                {/* All Chats */}
                <div>
                    <h4 className="text-xs font-semibold text-gray-400 mb-3 px-2">All Chats</h4>
                    <div className="space-y-1">
                        {otherChats.map(user => (
                            <ChatItem
                                key={user.id}
                                user={user}
                                isSelected={selectedChatId === user.id}
                                onClick={onChatSelect}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatList;
