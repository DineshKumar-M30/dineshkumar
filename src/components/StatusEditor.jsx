import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Trash2, Plus, Send } from 'lucide-react';

const StatusEditor = ({ onClose }) => {
    // Dummy images for the carousel/thumbnails
    const images = [
        "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <div className="flex-1 w-full h-full bg-[#F8FAFC] flex flex-col relative">
            {/* Header */}
            <div className="flex items-center justify-between px-12 py-8 flex-shrink-0">
                <h2 className="font-bold text-gray-900 text-[15px] tracking-wide">Pink Panda (Me)</h2>
                <div className="flex items-center gap-6">
                    <button className="text-gray-900 hover:text-red-600 transition-colors">
                        <Trash2 size={20} />
                    </button>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex items-center justify-center relative w-full min-h-0 py-4 overflow-hidden">
                {/* Story Card */}
                <div className="relative h-full max-h-[700px] w-auto aspect-[9/16] rounded-[24px] overflow-hidden shadow-2xl ring-1 ring-black/5 z-10">
                    {/* Progress Bars */}
                    <div className="absolute top-5 left-0 w-full px-5 flex gap-1.5 z-10">
                        <div className="h-[3px] flex-1 bg-white/40 rounded-full overflow-hidden">
                            <div className="h-full bg-white w-full"></div>
                        </div>
                        <div className="h-[3px] flex-1 bg-white/40 rounded-full overflow-hidden">
                            <div className="h-full bg-white transition-all duration-75 ease-linear" style={{ width: '50%' }}></div>
                        </div>
                        <div className="h-[3px] flex-1 bg-white/40 rounded-full overflow-hidden">
                            <div className="h-full bg-white/0"></div>
                        </div>
                    </div>

                    {/* Image */}
                    <img
                        src={selectedImage}
                        alt="Status Edit"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Footer Thumbnails */}
            <div className="px-12 py-8 flex-shrink-0 relative">
                <div className="flex items-center gap-4">
                    {/* Add Button */}
                    <button className="w-[72px] h-[72px] rounded-2xl border-2 border-blue-200 flex items-center justify-center text-blue-500 hover:bg-blue-50 transition-colors">
                        <Plus size={24} />
                    </button>

                    {/* Thumbnails */}
                    {images.map((img, index) => (
                        <div key={index} className="relative w-[72px] h-[72px] rounded-2xl overflow-hidden cursor-pointer border border-gray-100 shadow-sm group">
                            <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
                            {/* Delete overlay */}
                            <button className="absolute top-1 right-1 w-5 h-5 bg-black/50 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500">
                                <X size={12} />
                            </button>
                            {/* Selection border */}
                            {selectedImage === img && (
                                <div className="absolute inset-0 border-2 border-blue-500 rounded-2xl pointer-events-none"></div>
                            )}
                        </div>
                    ))}

                    {/* Send Button (Floating Right) */}
                    <button className="absolute right-12 bottom-8 w-12 h-12 bg-[#5B96F7] text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 hover:bg-blue-600 transition-colors">
                        <Send size={20} className="translate-x-0.5 translate-y-0.5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StatusEditor;
