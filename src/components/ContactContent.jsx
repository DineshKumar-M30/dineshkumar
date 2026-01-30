import React from 'react';
import { Mail, Phone, Instagram, Facebook, Twitter, PinIcon as Pinterest } from 'lucide-react';
import fruitsBlue from "../assets/fruitsBlue.png"; // Fallback/Placeholder
// Note: Ideally we'd use the specific blue image from the screenshot, but I'll use a placeholder or specific URL if available.
// Using a placeholder URL for the specific 'blue background falling fruit' image if not available locally.
const blueFruitImage = "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1887&auto=format&fit=crop";

const ContactContent = () => {
    return (
        <section className="py-20 bg-white font-sans">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Image (Blue background with fruits) */}
                    <div className="w-full lg:w-1/2">
                        <div className="rounded-[40px] overflow-hidden h-[500px] md:h-[600px] shadow-xl relative animate-fade-in-scale">
                            {/* Trying to match the 'blue background with floating fruits' vibe */}
                            <div className="absolute inset-0 bg-[#0096C7]"></div>
                            <img
                                src={fruitsBlue}
                                alt="Fruits"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            {/* If we strictly want the image provided in screenshot, user might need to upload it. 
                                For now, creating a nice placeholder effect.
                            */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Only if no image is loaded */}
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full lg:w-1/2 animate-slide-up">
                        <h2 className="text-[#2A4B56] text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            We'd love to talk about how we can work together.
                        </h2>

                        <p className="text-gray-500 mb-10 leading-relaxed">
                            Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                        </p>

                        <div className="flex flex-col gap-4 mb-10">
                            {/* Message Card */}
                            <div className="bg-white border rounded-2xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#F4F4EB] rounded-2xl flex items-center justify-center text-[#2A4B56]">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-[#2A4B56] font-bold text-lg">Message</h4>
                                    <p className="text-gray-500 text-sm">support@belalea.by</p>
                                </div>
                            </div>

                            {/* Call Card */}
                            <div className="bg-white border rounded-2xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                                <div className="w-12 h-12 bg-[#F4F4EB] rounded-2xl flex items-center justify-center text-[#2A4B56]">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-[#2A4B56] font-bold text-lg">Call</h4>
                                    <p className="text-gray-500 text-sm">+375 (29) 789 789 5</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-12 h-12 rounded-full bg-[#EFF6F1] flex items-center justify-center text-[#2A4B56] hover:bg-[#2A4B56] hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-[#EFF6F1] flex items-center justify-center text-[#2A4B56] hover:bg-[#2A4B56] hover:text-white transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-[#EFF6F1] flex items-center justify-center text-[#2A4B56] hover:bg-[#2A4B56] hover:text-white transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full bg-[#EFF6F1] flex items-center justify-center text-[#2A4B56] hover:bg-[#2A4B56] hover:text-white transition-all">
                                <Pinterest className="w-5 h-5" />
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactContent;
