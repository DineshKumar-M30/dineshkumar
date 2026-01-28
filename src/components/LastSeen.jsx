import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

const LastSeen = ({ onBack, initialValue = 'everyone' }) => {
    const [selected, setSelected] = useState(initialValue); // 'everyone', 'contacts', 'nobody'

    const options = [
        { id: 'everyone', label: 'Everyone' },
        { id: 'contacts', label: 'My Contacts' },
        { id: 'nobody', label: 'Nobody' },
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
                <h2 className="text-base font-bold text-gray-900">Last Seen</h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 custom-scrollbar">
                <p className="text-xs text-blue-500 mb-6 leading-relaxed">
                    If you don't share your Last Seen, you won't be able to see other people's Last Seen
                </p>

                <div className="space-y-6">
                    {options.map((option) => (
                        <div
                            key={option.id}
                            className="flex items-center justify-start gap-4 cursor-pointer group"
                            onClick={() => setSelected(option.id)}
                        >
                            <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selected === option.id ? 'border-blue-500' : 'border-gray-400 group-hover:border-blue-500'}`}>
                                {selected === option.id && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full" />}
                            </div>
                            <div className="flex-1 pb-4 border-b border-gray-200">
                                <span className="text-sm font-medium text-gray-700">{option.label}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LastSeen;
