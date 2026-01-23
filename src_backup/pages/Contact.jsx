import React from 'react';
import { Mail, Phone, MapPin, Globe, MessageSquare, Send } from 'lucide-react';

const Contact = () => {
    const contacts = [
        { name: "John Doe", email: "john@example.com", phone: "+1 234 567 890", role: "CEO", avatar: "https://i.pravatar.cc/150?u=john" },
        { name: "Sarah Smith", email: "sarah@example.com", phone: "+1 234 567 891", role: "UI Designer", avatar: "https://i.pravatar.cc/150?u=sarah" },
        { name: "Mike Johnson", email: "mike@example.com", phone: "+1 234 567 892", role: "Developer", avatar: "https://i.pravatar.cc/150?u=mike" },
        { name: "Emma Wilson", email: "emma@example.com", phone: "+1 234 567 893", role: "Manager", avatar: "https://i.pravatar.cc/150?u=emma" },
    ];

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact List */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contacts.map((contact, index) => (
                        <div key={index} className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                            <div className="flex items-center gap-4 mb-6">
                                <img src={contact.avatar} alt="" className="w-16 h-16 rounded-2xl object-cover" />
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">{contact.name}</h4>
                                    <p className="text-blue-600 text-sm font-semibold">{contact.role}</p>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-600 text-sm">
                                    <Mail size={16} className="text-gray-400" />
                                    <span>{contact.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 text-sm">
                                    <Phone size={16} className="text-gray-400" />
                                    <span>{contact.phone}</span>
                                </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-50 flex gap-2">
                                <button className="flex-1 py-2 bg-gray-50 text-gray-600 rounded-xl text-xs font-bold hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                    Message
                                </button>
                                <button className="flex-1 py-2 bg-gray-50 text-gray-600 rounded-xl text-xs font-bold hover:bg-blue-50 hover:text-blue-600 transition-colors">
                                    Call
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Message Form */}
                <div className="bg-white p-8 rounded-[32px] shadow-sm border border-gray-100 h-fit">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Send Message</h3>
                    <form className="space-y-4">
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Full Name</label>
                            <input type="text" className="w-full bg-gray-50 border border-transparent rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-200 outline-none transition-all" placeholder="Enter name" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Email Address</label>
                            <input type="email" className="w-full bg-gray-50 border border-transparent rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-200 outline-none transition-all" placeholder="Enter email" />
                        </div>
                        <div>
                            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block">Message</label>
                            <textarea className="w-full bg-gray-50 border border-transparent rounded-xl px-4 py-3 text-sm focus:bg-white focus:border-blue-200 outline-none transition-all h-32 resize-none" placeholder="Your message..."></textarea>
                        </div>
                        <button className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                            <Send size={18} />
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
