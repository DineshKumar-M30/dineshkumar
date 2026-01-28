import React, { useState } from 'react';
import { ArrowLeft, Bell, Lock, Key, Globe, Image as ImageIcon, FileText, Keyboard, HelpCircle } from 'lucide-react';
import Notifications from './Notifications';
import Privacy from './Privacy';
import Security from './Security';
import Help from './Help';
import RequestAccountInfo from './RequestAccountInfo';
import ThemeDialog from './ThemeDialog';
import ShortcutsDialog from './ShortcutsDialog';
import ChatWallpaper from './ChatWallpaper';

const Settings = ({ onBack, onSettingsViewChange, onWallpaperChange }) => {
    const [view, setView] = useState('main'); // 'main', 'notifications', 'privacy', 'security', 'help', 'account_info', 'wallpaper'
    const [showThemeDialog, setShowThemeDialog] = useState(false);
    const [showShortcuts, setShowShortcuts] = useState(false);

    // Notify parent of view changes
    React.useEffect(() => {
        if (onSettingsViewChange) {
            onSettingsViewChange(view);
        }
    }, [view, onSettingsViewChange]);

    const settingsItems = [
        { icon: Bell, label: "Notifications", id: 'notifications' },
        { icon: Lock, label: "Privacy", id: 'privacy' },
        { icon: Key, label: "Security", id: 'security' },
        { icon: Globe, label: "Theme", id: 'theme' },
        { icon: ImageIcon, label: "Chat Wallpaper", id: 'wallpaper' },
        { icon: FileText, label: "Request Account Info", id: 'account_info' },
        { icon: Keyboard, label: "Keyboard shortcuts", id: 'shortcuts' },
        { icon: HelpCircle, label: "Help", id: 'help' },
    ];

    if (view === 'notifications') {
        return <Notifications onBack={() => setView('main')} />;
    }

    if (view === 'privacy') {
        return <Privacy onBack={() => setView('main')} />;
    }

    if (view === 'security') {
        return <Security onBack={() => setView('main')} />;
    }

    if (view === 'help') {
        return <Help onBack={() => setView('main')} />;
    }

    if (view === 'account_info') {
        return <RequestAccountInfo onBack={() => setView('main')} />;
    }

    if (view === 'wallpaper') {
        return <ChatWallpaper onBack={() => setView('main')} onWallpaperChange={onWallpaperChange} />;
    }

    return (
        <div className="w-[380px] h-full bg-white border-r border-gray-200 flex flex-col user-select-none relative">
            {/* Header */}
            <div className="flex items-center gap-4 p-6 pb-2">
                {/* ... existing header code ... */}
                <button
                    onClick={onBack}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <ArrowLeft size={24} />
                </button>
                <h2 className="text-xl font-bold text-gray-900">Settings</h2>
            </div>

            {/* Profile Info */}
            <div className="flex items-center gap-4 px-6 py-6 mb-2">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                    <img
                        src="https://i.pinimg.com/736x/de/b2/99/deb2991ad6942f53f3c1c40e39e3f940.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h3 className="text-base font-semibold text-gray-900">Shreyansh shah</h3>
                    <p className="text-sm text-gray-500">Exploring</p>
                </div>
            </div>

            {/* Settings List */}
            <div className="flex-1 overflow-y-auto px-6 custom-scrollbar">
                <div className="space-y-1">
                    {settingsItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                if (item.id === 'notifications') setView('notifications');
                                if (item.id === 'privacy') setView('privacy');
                                if (item.id === 'security') setView('security');
                                if (item.id === 'help') setView('help');
                                if (item.id === 'account_info') setView('account_info');
                                if (item.id === 'wallpaper') setView('wallpaper');
                                if (item.id === 'theme') setShowThemeDialog(true);
                                if (item.id === 'shortcuts') setShowShortcuts(true);
                            }}
                            className="w-full flex items-center gap-4 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors group text-left"
                        >
                            <item.icon size={20} strokeWidth={1.5} className="text-gray-500 group-hover:text-gray-700" />
                            <span className="text-[15px] font-medium text-gray-600 group-hover:text-gray-900">{item.label}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Dialogs */}
            {showThemeDialog && <ThemeDialog onClose={() => setShowThemeDialog(false)} />}
            {showShortcuts && <ShortcutsDialog onClose={() => setShowShortcuts(false)} />}
        </div>
    );
};

export default Settings;
