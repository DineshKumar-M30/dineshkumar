import React, { useState, useRef } from 'react';
import { Camera, ChevronDown, ArrowLeft } from 'lucide-react';

const Team = () => {
    const [view, setView] = useState('list'); // 'list' or 'add'
    const [teamMembers, setTeamMembers] = useState([
        { name: "Jason Price", role: "Admin", email: "janick_parisian@yahoo.com", avatar: "https://i.pinimg.com/736x/76/07/75/760775dfd783a04a3251e384b1a591eb.jpg" },
        { name: "Jukkoe Sisao", role: "CEO", email: "sibyl_kozey@gmail.com", avatar: "https://i.pinimg.com/736x/d7/73/69/d7736990b6cc88b1585dc3f059b23f40.jpg" },
        { name: "Harriet King", role: "CTO", email: "nadia_block@hotmail.com", avatar: "https://i.pinimg.com/1200x/ce/bb/0a/cebb0ace4532e076ce996d1200cc5f10.jpg" },
        { name: "Lenora Benson", role: "Lead", email: "feil.wallace@kunde.us", avatar: "https://i.pinimg.com/736x/ac/4e/ba/ac4ebaf46561a0ea3617ed706b7ff37d.jpg" },
        { name: "Olivia Reese", role: "Strategist", email: "kemmer.hattie@cremin.us", avatar: "https://i.pinimg.com/1200x/f5/8e/40/f58e405de9b164de66060bf787835126.jpg" },
        { name: "Bertha Valdez", role: "CEO", email: "loraine.koelpin@tromp.io", avatar: "https://i.pinimg.com/736x/a5/47/80/a547809ed2d134bdb794a5ff19a101b7.jpg" },
        { name: "Harriett Payne", role: "Digital Marketer", email: "nannie_west@estrella.tv", avatar: "https://i.pinimg.com/736x/33/c6/b2/33c6b28ead264db64bbcd39eb09c60c0.jpg" },
        { name: "George Bryant", role: "Social Media", email: "delmer.kling@gmail.com", avatar: "https://i.pinimg.com/736x/ed/97/17/ed97179b1a21251a1b4f3c2f03cd9273.jpg" },
        { name: "Lily French", role: "Strategist", email: "lucienne.herman@hotmail.com", avatar: "https://i.pinimg.com/736x/05/78/4a/05784abd5bd891b2c6b777e99cef3645.jpg" },
        { name: "Howard Adkins", role: "CEO", email: "wiegand.leonor@herman.us", avatar: "https://i.pinimg.com/736x/24/5b/44/245b44fa1f4d29dcd76434582962ce85.jpg" },
        { name: "Earl Bowman", role: "Digital Marketer", email: "waino_alternwerth@nicolette.tv", avatar: "https://i.pinimg.com/736x/a5/47/80/a547809ed2d134bdb794a5ff19a101b7.jpg" },
        { name: "Patrick Padilla", role: "Social Media", email: "octavia.nienow@gleichner.net", avatar: "https://i.pinimg.com/736x/90/95/af/9095af27f469ee3a1d4e3208bb067dcd.jpg" }
    ]);

    const [newMember, setNewMember] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        position: 'CEO',
        gender: 'Male',
        avatar: null
    });

    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMember(prev => ({ ...prev, [name]: value }));
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewMember(prev => ({ ...prev, avatar: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddMember = (e) => {
        e.preventDefault();
        const memberToAdd = {
            name: `${newMember.firstName} ${newMember.lastName}`,
            role: newMember.position,
            email: newMember.email,
            avatar: newMember.avatar || "https://i.pravatar.cc/150?u=" + newMember.email
        };
        setTeamMembers(prev => [memberToAdd, ...prev]);
        setView('list');
        // Reset form
        setNewMember({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            position: 'CEO',
            gender: 'Male',
            avatar: null
        });
    };

    const topoPattern = `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,100 C20,110 40,90 60,100 C80,110 100,90 120,100 C140,110 160,90 180,100 C200,110 220,90 240,100 M-40,80 C-20,90 0,70 20,80 C40,90 60,70 80,80 C100,90 120,70 140,80 C160,90 180,70 200,80 M40,120 C60,130 80,110 100,120 C120,130 140,110 160,120 C180,130 200,110 220,120 C240,130 260,110 280,120' stroke='%23f0f0f0' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`;

    if (view === 'add') {
        return (
            <div className="p-6 md:p-8 flex flex-col h-full bg-[#f8f9fa] animate-in fade-in duration-500 font-outfit">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={() => setView('list')}
                        className="p-1.5 md:p-2 bg-white rounded-lg shadow-sm text-gray-400 hover:text-blue-500 transition-colors"
                    >
                        <ArrowLeft size={18} md:size={20} />
                    </button>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-[#202224]">Add Team Member</h2>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-[24px] md:rounded-[40px] shadow-sm border border-gray-100 p-6 md:p-12 max-w-5xl mx-auto w-full">
                    <form onSubmit={handleAddMember} className="flex flex-col items-center">
                        {/* Photo Upload Area */}
                        <div className="flex flex-col items-center gap-3 mb-8 md:mb-12">
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handlePhotoUpload}
                            />
                            <div
                                onClick={() => fileInputRef.current.click()}
                                className="w-20 h-20 md:w-24 md:h-24 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 cursor-pointer hover:bg-gray-100 transition-all overflow-hidden"
                            >
                                {newMember.avatar ? (
                                    <img src={newMember.avatar} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="bg-gray-200/50 p-4 rounded-full">
                                        <Camera size={24} md:size={28} className="text-gray-400" />
                                    </div>
                                )}
                            </div>
                            <span
                                onClick={() => fileInputRef.current.click()}
                                className="text-[#4880FF] font-bold text-xs md:text-sm cursor-pointer hover:text-blue-600 transition-colors"
                            >
                                Upload Photo
                            </span>
                        </div>

                        {/* Form Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-full">
                            <div>
                                <label className="block text-gray-500 font-bold text-sm mb-3">First Name</label>
                                <input
                                    name="firstName"
                                    value={newMember.firstName}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your first name"
                                    className="w-full bg-[#F5F6FA] border border-transparent rounded-xl p-4 text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-500 font-bold text-sm mb-3">Last Name</label>
                                <input
                                    name="lastName"
                                    value={newMember.lastName}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your last name"
                                    className="w-full bg-[#F5F6FA] border border-transparent rounded-xl p-4 text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-500 font-bold text-sm mb-3">Your email</label>
                                <input
                                    name="email"
                                    value={newMember.email}
                                    onChange={handleInputChange}
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-[#F5F6FA] border border-transparent rounded-xl p-4 text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-500 font-bold text-sm mb-3">Phone Number</label>
                                <input
                                    name="phoneNumber"
                                    value={newMember.phoneNumber}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your phone number"
                                    className="w-full bg-[#F5F6FA] border border-transparent rounded-xl p-4 text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-500 font-bold text-sm mb-3">Position</label>
                                <input
                                    name="position"
                                    value={newMember.position}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="CEO"
                                    className="w-full bg-[#F5F6FA] border border-transparent rounded-xl p-4 text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-500 font-bold text-sm mb-3">Gender</label>
                                <div className="relative">
                                    <select
                                        name="gender"
                                        value={newMember.gender}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#F5F6FA] border border-transparent rounded-xl p-4 text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none appearance-none font-medium"
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Other</option>
                                    </select>
                                    <ChevronDown size={20} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-10 md:mt-16 w-full flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#4880FF] hover:bg-blue-600 text-white font-extrabold w-full md:w-auto md:px-32 py-3.5 md:py-4 rounded-xl transition-all shadow-xl shadow-blue-500/20 text-xs md:text-sm tracking-wide"
                            >
                                Add Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="p-6 md:p-8 flex flex-col h-full bg-[#f8f9fa] animate-in fade-in duration-500 font-outfit">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#202224]">Team</h2>
                <button
                    onClick={() => setView('add')}
                    className="bg-[#4880FF] hover:bg-blue-600 text-white font-bold px-6 py-2.5 rounded-lg text-xs md:text-sm transition-all shadow-md active:scale-95 w-full md:w-auto"
                >
                    Add New Member
                </button>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group relative animate-in fade-in slide-in-from-bottom-4"
                        style={{
                            backgroundImage: topoPattern,
                            backgroundSize: '300px',
                            backgroundPosition: 'center',
                            animationDelay: `${index * 50}ms`
                        }}
                    >
                        {/* Overlay to ensure readability and pattern subtlety */}
                        <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>

                        <div className="px-6 py-10 flex flex-col items-center relative z-10">
                            {/* Avatar */}
                            <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-4 border-white shadow-xl group-hover:scale-110 transition-transform duration-500 ring-1 ring-gray-100">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Info */}
                            <h4 className="text-lg font-bold text-[#202224] mb-1">{member.name}</h4>
                            <p className="text-sm font-semibold text-gray-400 mb-2">{member.role}</p>
                            <p className="text-[11px] font-medium text-gray-400 text-center truncate w-full px-2">
                                {member.email}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
