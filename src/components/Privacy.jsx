import React, { useState } from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import LastSeen from './LastSeen';
import ProfilePhotoPrivacy from './ProfilePhotoPrivacy';
import AboutPrivacy from './AboutPrivacy';
import GroupsPrivacy from './GroupsPrivacy';
import BlockedContacts from './BlockedContacts';

const Privacy = ({ onBack }) => {
    const [readReceipts, setReadReceipts] = useState(true);
    const [view, setView] = useState('main'); // 'main', 'last_seen', 'profile_photo', 'about', 'groups', 'blocked'

    const privacyItems = [
        { title: "Last Seen", value: "Everyone", id: 'last_seen' },
        { title: "Profile Photo", value: "Everyone", id: 'profile_photo' },
        { title: "About", value: "Everyone", id: 'about' },
    ];

    if (view === 'last_seen') {
        return <LastSeen onBack={() => setView('main')} />;
    }

    if (view === 'profile_photo') {
        return <ProfilePhotoPrivacy onBack={() => setView('main')} />;
    }

    if (view === 'about') {
        return <AboutPrivacy onBack={() => setView('main')} />;
    }

    if (view === 'groups') {
        return <GroupsPrivacy onBack={() => setView('main')} />;
    }

    if (view === 'blocked') {
        return <BlockedContacts onBack={() => setView('main')} />;
    }

    const bottomItems = [
        { title: "Groups", value: "Everyone", id: "groups" },
        { title: "Blocked contacts", value: "9", id: "blocked" },
    ];

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
                <h2 className="text-base font-bold text-gray-900">Privacy</h2>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto px-6 custom-scrollbar pb-6">
                <div className="space-y-6">
                    {/* Top Section items */}
                    {privacyItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                if (item.id === 'last_seen') setView('last_seen');
                                if (item.id === 'profile_photo') setView('profile_photo');
                                if (item.id === 'about') setView('about');
                            }}
                            className="flex justify-between items-center cursor-pointer group"
                        >
                            <div className="flex-1">
                                <span className="text-sm font-medium text-gray-700 block mb-0.5">{item.title}</span>
                                <span className="text-xs text-gray-500">{item.value}</span>
                                <div className="h-[1px] bg-gray-200 w-full mt-3"></div>
                            </div>
                            <ChevronRight size={18} className="text-gray-400 group-hover:text-gray-600 transition-colors ml-2" />
                        </div>
                    ))}

                    {/* Read Receipts */}
                    <div className="flex justify-between items-start pt-1">
                        <div className="flex flex-col gap-1 pr-4">
                            <span className="text-sm font-medium text-gray-700">Read receipts</span>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                if turned off, you won't send or receive read receipts. Read receipts are always sent for group chats.
                            </p>
                            <div className="h-[1px] bg-gray-200 w-full mt-4"></div>
                        </div>
                        <div className="pt-0.5">
                            <input
                                type="checkbox"
                                checked={readReceipts}
                                onChange={() => setReadReceipts(!readReceipts)}
                                className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-transparent cursor-pointer"
                            />
                        </div>
                    </div>

                    {/* Bottom Section Items */}
                    {bottomItems.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                if (item.id === 'groups') setView('groups');
                                if (item.id === 'blocked') setView('blocked');
                            }}
                            className="flex justify-between items-center cursor-pointer group"
                        >
                            <div className="flex-1">
                                <span className="text-sm font-medium text-gray-700 block mb-0.5">{item.title}</span>
                                <span className="text-xs text-gray-500">{item.value}</span>
                                <div className="h-[1px] bg-gray-200 w-full mt-3"></div>
                            </div>
                            <ChevronRight size={18} className="text-gray-400 group-hover:text-gray-600 transition-colors ml-2" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Privacy;
