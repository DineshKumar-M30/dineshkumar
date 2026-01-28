import React from 'react';
import { ArrowLeft, Image as ImageIcon, Download } from 'lucide-react';

const StarredMessages = ({ onBack }) => {
    return (
        <div className="w-[380px] h-full bg-slate-50 border-l border-gray-200 flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-4 p-6 bg-slate-50 flex-shrink-0">
                <button
                    onClick={onBack}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <ArrowLeft size={20} />
                </button>
                <h2 className="text-base font-medium text-gray-700">Starred Messages</h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-6 pb-6">
                <h3 className="text-xs font-medium text-gray-500 mb-6">27th Oct 22</h3>

                <div className="space-y-6">
                    {/* Incoming Text Message */}
                    <div className="flex flex-col items-start gap-1">
                        <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm inline-block max-w-[85%]">
                            <p className="text-gray-900 text-sm">Hi 👋, How are ya ?</p>
                        </div>
                        <span className="text-xs text-gray-400 font-medium ml-1">0:12</span>
                    </div>

                    {/* Outgoing Text Message */}
                    <div className="flex flex-col items-end gap-1">
                        <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-md inline-block max-w-[85%] text-left">
                            <p className="text-sm">Hi 👋 Panda, not bad, u ?</p>
                        </div>
                        <span className="text-xs text-gray-400 font-medium mr-1">8:17</span>
                    </div>

                    {/* Outgoing Text Message */}
                    <div className="flex flex-col items-end gap-1">
                        <div className="bg-blue-500 text-white rounded-2xl rounded-tr-sm px-4 py-3 shadow-md inline-block max-w-[85%] text-left">
                            <p className="text-sm">Can you send it as file ?</p>
                        </div>
                        <span className="text-xs text-gray-400 font-medium mr-1">11:12</span>
                    </div>

                    {/* Incoming File Message */}
                    <div className="flex flex-col items-start gap-1">
                        <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm flex items-center gap-3 w-64">
                            <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
                                <ImageIcon size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">Abstract.png</p>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <Download size={20} />
                            </button>
                        </div>
                        <span className="text-xs text-gray-400 font-medium ml-1">11:25</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StarredMessages;
