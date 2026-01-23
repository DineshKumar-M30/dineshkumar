import React from 'react';
import { Mail, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

const Team = () => {
    const team = [
        { name: "Moni Roy", role: "CEO & Founder", image: "https://i.pinimg.com/1200x/1c/85/2e/1c852ea928150dfcf54c5457dbca0a35.jpg", bio: "Tech visionary with 15+ years of experience in enterprise solutions." },
        { name: "Jessica Doe", role: "Lead Designer", image: "https://i.pravatar.cc/150?u=jessica", bio: "Creative mastermind behind our visual language and user experience." },
        { name: "Sarah Taylor", role: "Web Developer", image: "https://i.pravatar.cc/150?u=sarah", bio: "Full-stack expert specializing in React and modern cloud architectures." },
        { name: "David Miller", role: "Product Manager", image: "https://i.pravatar.cc/150?u=david", bio: "Bridging the gap between user needs and technical implementation." },
        { name: "Lisa Brown", role: "Marketing Lead", image: "https://i.pravatar.cc/150?u=lisa", bio: "Spreading the word and building our global community." },
        { name: "Richard Smith", role: "Sales Executive", image: "https://i.pravatar.cc/150?u=richard", bio: "Connecting clients with the best solutions for their business." },
    ];

    return (
        <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Team members</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member, index) => (
                    <div key={index} className="bg-white rounded-[32px] overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group">
                        <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
                        <div className="px-8 pb-8 -mt-16 text-center">
                            <div className="relative inline-block mb-4">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-32 h-32 rounded-3xl object-cover border-4 border-white shadow-lg mx-auto"
                                />
                                <div className="absolute bottom-2 right-0 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                            <p className="text-blue-600 text-sm font-bold mb-4">{member.role}</p>
                            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                                {member.bio}
                            </p>
                            <div className="flex items-center justify-center gap-4">
                                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
                                    <Github size={20} />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-blue-400 hover:bg-blue-50 rounded-xl transition-all">
                                    <Twitter size={20} />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all">
                                    <Linkedin size={20} />
                                </button>
                                <button className="p-2 text-gray-400 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-all">
                                    <ExternalLink size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
