import React, { useState, useRef } from 'react';
import { Camera } from 'lucide-react';

const Settings = () => {
    const [imagePreview, setImagePreview] = useState(null);
    const fileInputRef = useRef(null);

    const [settings, setSettings] = useState({
        siteName: 'Bright Web',
        copyRight: 'All rights Reserved@brightweb',
        seoTitle: 'Bright web is a hybrid dashboard',
        seoDescription: 'Bright web is a hybrid dashboard',
        seoKeywords: 'CEO'
    });

    const handlePhotoClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();
        console.log('Settings Saved:', settings);
        // Add toast notification or success message here if needed
    };

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">General Settings</h2>

            <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 p-12 max-w-5xl mx-auto">
                <form onSubmit={handleSave} className="space-y-10">
                    {/* Logo Upload */}
                    <div className="flex flex-col items-center gap-4">
                        <input
                            type="file"
                            ref={fileInputRef}
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                        <div
                            onClick={handlePhotoClick}
                            className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 cursor-pointer hover:bg-gray-100 transition-colors overflow-hidden"
                        >
                            {imagePreview ? (
                                <img src={imagePreview} alt="Logo Preview" className="w-full h-full object-cover" />
                            ) : (
                                <Camera size={24} className="text-gray-400" />
                            )}
                        </div>
                        <span
                            onClick={handlePhotoClick}
                            className="text-blue-500 font-bold text-sm cursor-pointer hover:text-blue-600 transition-colors"
                        >
                            Upload Logo
                        </span>
                    </div>

                    {/* Settings Form Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 text-left">
                        {/* Site Name */}
                        <div>
                            <label className="block text-gray-400 font-bold text-xs mb-3">Site Name</label>
                            <input
                                type="text"
                                placeholder="Enter site name"
                                className="w-full bg-gray-50 border border-transparent rounded-xl p-4 text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none font-medium"
                                value={settings.siteName}
                                onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                            />
                        </div>

                        {/* Copy Right */}
                        <div>
                            <label className="block text-gray-400 font-bold text-xs mb-3">Copy Right</label>
                            <input
                                type="text"
                                placeholder="Enter copyright info"
                                className="w-full bg-gray-50 border border-transparent rounded-xl p-4 text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none font-medium"
                                value={settings.copyRight}
                                onChange={(e) => setSettings({ ...settings, copyRight: e.target.value })}
                            />
                        </div>

                        {/* SEO Title */}
                        <div>
                            <label className="block text-gray-400 font-bold text-xs mb-3">SEO Title</label>
                            <input
                                type="text"
                                placeholder="Enter SEO title"
                                className="w-full bg-gray-50 border border-transparent rounded-xl p-4 text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none font-medium"
                                value={settings.seoTitle}
                                onChange={(e) => setSettings({ ...settings, seoTitle: e.target.value })}
                            />
                        </div>

                        {/* SEO Description (Textarea) */}
                        <div className="md:row-span-2">
                            <label className="block text-gray-400 font-bold text-xs mb-3">SEO Description</label>
                            <textarea
                                placeholder="Enter SEO description"
                                className="w-full bg-gray-50 border border-transparent rounded-xl p-4 text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none h-[155px] resize-none font-medium"
                                value={settings.seoDescription}
                                onChange={(e) => setSettings({ ...settings, seoDescription: e.target.value })}
                            />
                        </div>

                        {/* SEO Keywords */}
                        <div>
                            <label className="block text-gray-400 font-bold text-xs mb-3">SEO Keywords</label>
                            <input
                                type="text"
                                placeholder="Enter SEO keywords"
                                className="w-full bg-gray-50 border border-transparent rounded-xl p-4 text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none font-medium"
                                value={settings.seoKeywords}
                                onChange={(e) => setSettings({ ...settings, seoKeywords: e.target.value })}
                            />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex justify-center pt-6">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white font-extrabold px-20 py-4 rounded-xl transition-all shadow-xl shadow-blue-500/20 text-sm tracking-wide"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Settings;
