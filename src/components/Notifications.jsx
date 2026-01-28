import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const Notifications = ({ onBack }) => {
    const [settings, setSettings] = useState([
        { id: 1, title: "Notifications", subtitle: "Show notifications for new messages", checked: true },
        { id: 2, title: "Show Previews", subtitle: "", checked: true },
        { id: 3, title: "Show Reaction Notifications", subtitle: "", checked: false },
        { id: 4, title: "Incoming call ringtone", subtitle: "", checked: false },
        { id: 5, title: "Sounds", subtitle: "Play sounds for incoming messages", checked: true },
    ]);

    const handleToggle = (id) => {
        setSettings(settings.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        ));
    };

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
                <h2 className="text-base font-bold text-gray-900">Notifications</h2>
            </div>

            {/* List */}
            <div className="flex-1 overflow-y-auto px-6 custom-scrollbar">
                <div className="space-y-6">
                    {settings.map((item) => (
                        <div key={item.id} className="flex justify-between items-start pt-2 first:pt-0">
                            <div className="flex flex-col gap-1 pr-4">
                                <span className="text-sm font-medium text-gray-700">{item.title}</span>
                                {item.subtitle && (
                                    <p className="text-xs text-gray-400 max-w-[200px] leading-relaxed">{item.subtitle}</p>
                                )}
                                {/* Separator line */}
                                <div className="h-[1px] bg-gray-200 w-full mt-4 min-w-[280px]"></div>
                            </div>
                            <div className="pt-0.5">
                                <input
                                    type="checkbox"
                                    checked={item.checked}
                                    onChange={() => handleToggle(item.id)}
                                    className="w-4 h-4 rounded border-gray-300 text-blue-500 focus:ring-transparent cursor-pointer"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Notifications;
