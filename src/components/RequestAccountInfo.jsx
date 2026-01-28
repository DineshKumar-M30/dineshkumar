import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

const RequestAccountInfo = ({ onBack }) => {
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
                <h2 className="text-base font-bold text-gray-900">Request Account Info</h2>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 custom-scrollbar">
                {/* Hero Icon */}
                <div className="flex flex-col items-center mb-8 mt-2">
                    <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-5 shadow-sm text-white">
                        <FileText size={48} strokeWidth={1.5} />
                    </div>
                </div>

                {/* Request Report Section */}
                <div className="space-y-4">
                    <button className="w-full flex items-center gap-4 py-4 text-left group">
                        <div className="flex items-center gap-4">
                            <FileText size={20} className="text-gray-500" />
                            <span className="text-sm font-medium text-gray-700">Request Report</span>
                        </div>
                    </button>

                    {/* Formatting the single item into a list-like style if needed, 
                        or just a standalone clickable item as per screenshot which looks like a list item title 
                        but effectively is "Request Report" action. 
                        The screenshot shows "Request Report" with a line below it presumably. 
                        Let's adjust to match the visual of a list item or section header.
                    */}
                    <div className="w-full h-[1px] bg-gray-200"></div>

                    <p className="text-xs text-gray-500 leading-relaxed">
                        Create a report of your Talk Account Information and settings, which you can access or port to another app. This report does not include your messages.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RequestAccountInfo;
