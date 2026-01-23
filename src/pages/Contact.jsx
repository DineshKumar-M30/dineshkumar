import React, { useState, useRef } from 'react';
import { Mail, Camera, ChevronDown, ArrowLeft } from 'lucide-react';

const Contact = () => {
    const [view, setView] = useState('list'); // 'list' or 'add'
    const [contacts, setContacts] = useState([
        {
            name: "Jason Price",
            email: "kuhlman.jermey@yahoo.com",
            avatar: "https://i.pinimg.com/1200x/21/cb/68/21cb6819aa02232ebb4398ff272d0a99.jpg"
        },
        {
            name: "Duane Dean",
            email: "rusty.botsford@wilfrid.io",
            avatar: "https://i.pinimg.com/1200x/9f/c2/fa/9fc2facbfb77a7dc26c4c626d5308233.jpg"
        },
        {
            name: "Jonathan Barker",
            email: "cora_haley@quinn.biz",
            avatar: "https://i.pinimg.com/1200x/ce/bb/0a/cebb0ace4532e076ce996d1200cc5f10.jpg"
        },
        {
            name: "Rosie Glover",
            email: "lockman.marques@hotmail.com",
            avatar: "https://i.pinimg.com/1200x/21/c3/e1/21c3e166784a863350578f5d6d2ba6bc.jpg"
        },
        {
            name: "Patrick Greer",
            email: "peartie.eichmann@trevion.net",
            avatar: "https://i.pinimg.com/1200x/8c/dc/1b/8cdc1b3ecd021d43e8ae4d7513121b2f.jpg"
        },
        {
            name: "Darrell Ortega",
            email: "chaya.shields@ferry.info",
            avatar: "https://i.pinimg.com/1200x/b2/8a/54/b28a54f138a38869765515f0e710db4d.jpg"
        }
    ]);

    const [newContact, setNewContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        dob: '',
        gender: 'Male',
        avatar: null
    });

    const fileInputRef = useRef(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewContact(prev => ({ ...prev, [name]: value }));
    };

    const handlePhotoUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewContact(prev => ({ ...prev, avatar: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddContact = (e) => {
        e.preventDefault();
        const contactToAdd = {
            name: `${newContact.firstName} ${newContact.lastName}`,
            email: newContact.email,
            avatar: newContact.avatar || "https://i.pravatar.cc/150?u=" + newContact.email
        };
        setContacts(prev => [contactToAdd, ...prev]);
        setView('list');
        // Reset form
        setNewContact({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            dob: '',
            gender: 'Male',
            avatar: null
        });
    };

    if (view === 'add') {
        return (
            <div className="p-6 md:p-8 flex flex-col h-full bg-[#f8f9fa] animate-in fade-in duration-500">
                {/* Header */}
                <div className="flex items-center gap-4 mb-8">
                    <button
                        onClick={() => setView('list')}
                        className="p-2 bg-white rounded-lg shadow-sm text-gray-400 hover:text-blue-500 transition-colors"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <h2 className="text-3xl font-extrabold text-[#202224] font-outfit">Add New Contact</h2>
                </div>

                {/* Form Card */}
                <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-12 max-w-5xl mx-auto w-full">
                    <form onSubmit={handleAddContact} className="flex flex-col items-center">
                        {/* Photo Upload Area */}
                        <div className="flex flex-col items-center gap-4 mb-12">
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*"
                                onChange={handlePhotoUpload}
                            />
                            <div
                                onClick={() => fileInputRef.current.click()}
                                className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 cursor-pointer hover:bg-gray-100 transition-all overflow-hidden"
                            >
                                {newContact.avatar ? (
                                    <img src={newContact.avatar} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <div className="bg-gray-200/50 p-4 rounded-full">
                                        <Camera size={28} className="text-gray-400" />
                                    </div>
                                )}
                            </div>
                            <span
                                onClick={() => fileInputRef.current.click()}
                                className="text-[#4880FF] font-bold text-sm cursor-pointer hover:text-blue-600 transition-colors"
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
                                    value={newContact.firstName}
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
                                    value={newContact.lastName}
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
                                    value={newContact.email}
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
                                    value={newContact.phoneNumber}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your phone number"
                                    className="w-full bg-[#F5F6FA] border border-transparent rounded-xl p-4 text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-500 font-bold text-sm mb-3">Date of Birth</label>
                                <input
                                    name="dob"
                                    value={newContact.dob}
                                    onChange={handleInputChange}
                                    type="text"
                                    placeholder="Enter your birthdate"
                                    className="w-full bg-[#F5F6FA] border border-transparent rounded-xl p-4 text-gray-700 focus:bg-white focus:border-blue-500 transition-all outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-500 font-bold text-sm mb-3">Gender</label>
                                <div className="relative">
                                    <select
                                        name="gender"
                                        value={newContact.gender}
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
                        <div className="mt-16 w-full flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#4880FF] hover:bg-blue-600 text-white font-extrabold px-32 py-4 rounded-xl transition-all shadow-xl shadow-blue-500/20 text-sm tracking-wide"
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
        <div className="p-6 md:p-8 flex flex-col h-full bg-[#f8f9fa] animate-in fade-in duration-500">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-extrabold text-[#202224] font-outfit">Contact</h2>
                <button
                    onClick={() => setView('add')}
                    className="bg-[#4880FF] hover:bg-blue-600 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-all shadow-md active:scale-95"
                >
                    Add New Contact
                </button>
            </div>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {contacts.map((contact, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-transparent hover:border-blue-100 group flex flex-col animate-in slide-in-from-bottom-4"
                        style={{ animationDelay: `${index * 50}ms` }}
                    >
                        {/* Avatar Image */}
                        <div className="w-full h-72 overflow-hidden p-4">
                            <img
                                src={contact.avatar}
                                alt={contact.name}
                                className="w-full h-full object-cover rounded-[18px] transition-transform duration-700 group-hover:scale-110"
                            />
                        </div>

                        {/* info Container */}
                        <div className="px-6 pb-8 flex flex-col items-center text-center">
                            <h4 className="text-xl font-bold text-[#202224] mb-1">{contact.name}</h4>
                            <p className="text-sm font-medium text-gray-400 mb-6">{contact.email}</p>

                            <button className="w-fit flex items-center justify-center gap-2 px-8 py-2.5 border border-gray-100 rounded-xl text-sm font-bold text-gray-500 hover:bg-gray-50 hover:text-blue-500 transition-all group/btn">
                                <Mail size={16} className="text-gray-400 group-hover/btn:text-blue-500" />
                                <span>Message</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Contact;
