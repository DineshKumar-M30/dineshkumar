import React from 'react';
import { Bell, Heart, Star, Settings, Check, Mail, Trash, Share2 } from 'lucide-react';

const UIElements = () => {
    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">UI Elements</h2>

            <div className="space-y-8">
                {/* Buttons Section */}
                <section className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Buttons</h3>
                    <div className="flex flex-wrap gap-4">
                        <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-100">Primary</button>
                        <button className="px-6 py-2.5 bg-gray-900 text-white rounded-xl font-semibold hover:bg-black transition">Secondary</button>
                        <button className="px-6 py-2.5 border border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition">Outline</button>
                        <button className="px-6 py-2.5 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition">Danger</button>
                        <button className="px-6 py-2.5 bg-green-50 text-green-600 rounded-xl font-semibold hover:bg-green-100 transition">Success</button>
                    </div>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Badges Section */}
                    <section className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Badges</h3>
                        <div className="flex flex-wrap gap-3">
                            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold">New</span>
                            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-xs font-bold">Completed</span>
                            <span className="px-3 py-1 bg-amber-100 text-amber-600 rounded-full text-xs font-bold">Pending</span>
                            <span className="px-3 py-1 bg-red-100 text-red-600 rounded-full text-xs font-bold">Urgent</span>
                        </div>
                    </section>

                    {/* Icons Section */}
                    <section className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Icons</h3>
                        <div className="flex flex-wrap gap-6">
                            <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl"><Bell size={24} /></div>
                            <div className="p-3 bg-red-50 text-red-600 rounded-2xl"><Heart size={24} /></div>
                            <div className="p-3 bg-amber-50 text-amber-600 rounded-2xl"><Star size={24} /></div>
                            <div className="p-3 bg-purple-50 text-purple-600 rounded-2xl"><Settings size={24} /></div>
                            <div className="p-3 bg-green-50 text-green-600 rounded-2xl"><Check size={24} /></div>
                        </div>
                    </section>
                </div>

                {/* Progress Bars */}
                <section className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Progress Bars</h3>
                    <div className="space-y-6">
                        <div className="w-full">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-bold text-gray-700">Project Development</span>
                                <span className="text-sm font-bold text-blue-600">75%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-blue-600 rounded-full" style={{ width: '75%' }}></div>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-between mb-2">
                                <span className="text-sm font-bold text-gray-700">Database Setup</span>
                                <span className="text-sm font-bold text-green-600">100%</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-green-600 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default UIElements;
