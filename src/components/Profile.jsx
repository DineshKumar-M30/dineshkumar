import React from 'react';
import { ChevronLeft } from 'lucide-react';

const Profile = ({ onBack }) => {
    return (
        <div className="w-80 h-full bg-white flex flex-col border-r border-gray-200">
            {/* Header */}
            <div className="p-4 flex items-center gap-3 bg-red-500/0">
                <button
                    onClick={onBack}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                >
                    <ChevronLeft size={24} className="text-gray-600" />
                </button>
                <h1 className="text-xl font-bold text-gray-900">Profile</h1>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
                {/* Avatar */}
                <div className="flex justify-center mb-8">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-100">
                        <img
                            src="https://i.pinimg.com/736x/de/b2/99/deb2991ad6942f53f3c1c40e39e3f940.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Name Field */}
                <div className="mb-2 relative">
                    <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-medium text-blue-500">
                        Name
                    </label>
                    <input
                        type="text"
                        defaultValue="Shreyansh shah"
                        className="w-full border border-blue-500 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                </div>
                <p className="text-xs text-gray-400 mb-6 px-1">
                    This name is visible to your contacts
                </p>

                {/* About Field */}
                <div className="mb-6 relative">
                    <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs font-medium text-gray-400">
                        About
                    </label>
                    <textarea
                        rows={4}
                        defaultValue="Hey there, I am learning from coding monk"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                    />
                </div>

                {/* Save Button */}
                <div className="flex justify-end">
                    <button className="px-8 py-2 bg-blue-50 text-blue-600 font-medium rounded-lg hover:bg-blue-100 transition-colors">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Profile;
