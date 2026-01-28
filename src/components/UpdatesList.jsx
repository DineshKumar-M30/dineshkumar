import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, Plus, Edit2, Zap } from 'lucide-react';

const UpdatesList = ({ onBack, onSelectUpdate, onEditUpdate }) => {
    const [isPlusMenuOpen, setIsPlusMenuOpen] = useState(false);
    const plusMenuRef = useRef(null);

    // ... (useEffect remains same)

    return (
        <div className="w-80 h-full bg-white flex flex-col border-r border-gray-200" onClick={() => setIsPlusMenuOpen(false)}>
            {/* Header */}
            <div className="p-6 pb-2">
                <div className="flex items-center justify-between mb-6 relative">
                    {/* ... (back button and title remain same) */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={onBack}
                            className="text-slate-500 hover:text-slate-700 transition-colors"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <h1 className="text-2xl font-bold text-[#0F172A]">Updates</h1>
                    </div>

                    <div className="relative" ref={plusMenuRef}>
                        {/* ... (plus button remains same) */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsPlusMenuOpen(!isPlusMenuOpen);
                            }}
                            className={`transition-colors ${isPlusMenuOpen ? 'text-blue-500' : 'text-slate-400 hover:text-slate-600'}`}
                        >
                            <Plus size={24} />
                        </button>

                        {/* Plus Menu Dropdown */}
                        {isPlusMenuOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200 origin-top-right z-30">
                                <div className="py-1">
                                    <button
                                        onClick={() => {
                                            if (onEditUpdate) onEditUpdate();
                                            setIsPlusMenuOpen(false);
                                        }}
                                        className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors"
                                    >
                                        <Edit2 size={16} className="text-gray-500" />
                                        <span>Edit</span>
                                    </button>
                                    <button className="w-full px-4 py-2.5 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors">
                                        <Zap size={16} className="text-gray-500" />
                                        <span>Create channel</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-4 custom-scrollbar">

                {/* Not seen Section */}
                <div className="mb-6">
                    <h4 className="text-xs font-semibold text-gray-400 mb-3 px-2">Not seen</h4>
                    <div className="space-y-1">
                        {/* Me Item (Active) */}
                        <div
                            onClick={() => onSelectUpdate({
                                name: 'Pink Panda (Me)',
                                image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
                            })}
                            className="flex items-center gap-3 p-3 rounded-xl cursor-pointer bg-blue-500 text-white"
                        >
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full p-[2px] border-2 border-green-300 border-dashed">
                                    <img
                                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="Me"
                                        className="w-full h-full rounded-full object-cover border-2 border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className="font-semibold text-sm truncate text-white">Pink Panda (Me)</h3>
                                    <span className="text-xs whitespace-nowrap text-blue-100">20hr</span>
                                </div>
                                <p className="text-sm truncate text-blue-100 font-medium">Edit</p>
                            </div>
                        </div>

                        {/* Other Item */}
                        <div
                            onClick={() => onSelectUpdate({
                                name: 'Dog Hat',
                                image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
                            })}
                            className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors"
                        >
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full p-[2px] border-2 border-green-400 border-dashed">
                                    <img
                                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt="Dog Hat"
                                        className="w-full h-full rounded-full object-cover border-2 border-white"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className="font-semibold text-sm truncate text-gray-900">Dog Hat</h3>
                                    <span className="text-xs whitespace-nowrap text-gray-400">3 min</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Seen Section */}
                <div>
                    <h4 className="text-xs font-semibold text-gray-400 mb-3 px-2">Seen</h4>
                    <div className="space-y-1">
                        {/* Seen Item 1 */}
                        <div className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full p-[2px] border-2 border-gray-300">
                                    <img
                                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                                        alt="Cute Turtle"
                                        className="w-full h-full rounded-full object-cover border-2 border-white"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className="font-semibold text-sm truncate text-gray-900">Cute Turtle</h3>
                                    <span className="text-xs whitespace-nowrap text-gray-400">50 min</span>
                                </div>
                            </div>
                        </div>

                        {/* Seen Item 2 */}
                        <div className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                            <div className="relative">
                                <div className="w-10 h-10 rounded-full p-[2px] border-2 border-gray-300">
                                    <img
                                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                                        alt="Cool spirit"
                                        className="w-full h-full rounded-full object-cover border-2 border-white"
                                    />
                                </div>
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-0.5">
                                    <h3 className="font-semibold text-sm truncate text-gray-900">Cool spirit</h3>
                                    <span className="text-xs whitespace-nowrap text-gray-400">23 hr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpdatesList;
