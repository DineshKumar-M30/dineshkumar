import React from 'react';

const ShortcutsDialog = ({ onClose }) => {
    const shortcuts = [
        { label: "Mark as unread", keys: ["Cmd", "Shift", "U"] },
        { label: "Mute", keys: ["Cmd", "Shift", "M"] },
        { label: "Archive chat", keys: ["Cmd", "Shift", "E"] },
        { label: "Delete chat", keys: ["Cmd", "Shift", "D"] },
        { label: "Pin chat", keys: ["Cmd", "Shift", "P"] },
        { label: "Search", keys: ["Cmd", "F"] },
        { label: "Search Chat", keys: ["Cmd", "Shift", "F"] },
        { label: "New Chat", keys: ["Cmd", "N"] },
        { label: "Next Chat", keys: ["Ctrl", "Tab"] },
        { label: "Previous Chat", keys: ["Ctrl", "Shift", "Tab"] },
        { label: "New Group", keys: ["Cmd", "Shift", "N"] },
        { label: "Profile & About", keys: ["Cmd", "P"] },
        { label: "Increase speed of voice message", keys: ["Shift", "."] },
        { label: "Decrease speed of voice message", keys: ["Shift", ","] },
        { label: "Settings", keys: ["Shift", ","] }, // Note: Duplicate label in screenshot "Settings" twice, one with Shift+, one with Cmd+G. I'll include both as per visual.
        { label: "Emoji Panel", keys: ["Cmd", "E"] },
        { label: "Settings", keys: ["Cmd", "G"] }, // Second settings entry
        { label: "Sticker Panel", keys: ["Cmd", "S"] },
    ];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
            <div className="w-[800px] bg-white rounded-xl shadow-xl p-8 transform transition-all relative">
                <h3 className="text-xl font-bold text-gray-900 mb-8">Keyboard Shortcuts</h3>

                <div className="grid grid-cols-2 gap-x-12 gap-y-4 mb-8">
                    {shortcuts.map((shortcut, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">{shortcut.label}</span>
                            <div className="flex gap-2">
                                {shortcut.keys.map((key, keyIndex) => (
                                    <span
                                        key={keyIndex}
                                        className="h-7 min-w-[32px] px-2 flex items-center justify-center text-xs font-semibold text-gray-600 bg-gray-100 border border-gray-200 rounded shadow-sm"
                                    >
                                        {key}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-end mt-8">
                    <button
                        onClick={onClose}
                        className="px-8 py-2.5 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                    >
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShortcutsDialog;
