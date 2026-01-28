import React from 'react';
import { Hammer, ArrowUpRight, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="relative bg-[#1A1A1A] pt-24 pb-12 overflow-hidden font-sans">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                <img
                    src="https://images.unsplash.com/photo-1542621746-81781297e6be?auto=format&fit=crop&q=80"
                    alt="Factory Background"
                    className="w-full h-full object-cover grayscale"
                />
            </div>

            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">

                {/* Top CTA Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-12">
                    <div className="max-w-2xl text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-[64px] text-white font-light mb-6 tracking-tight">
                            Ready to work with us?
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg font-light max-w-xl mx-auto lg:mx-0">
                            Join us to experience cutting-edge industrial solutions that drive innovation, lasting success.
                        </p>
                    </div>

                    {/* Rotating Button */}
                    <Link to="/contact">
                        <div className="relative w-32 h-32 lg:w-40 lg:h-40 bg-orange-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(249,115,22,0.4)]">
                            <div className="absolute inset-3 rounded-full border border-dashed border-white/40 animate-spin-slow"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg viewBox="0 0 100 100" width="100%" height="100%" className="animate-spin-slow p-2">
                                    <path id="curveFooter" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="transparent" />
                                    <text className="text-[10px] font-bold uppercase fill-white tracking-[0.2em]">
                                        <textPath xlinkHref="#curveFooter">
                                            Connect Now • Connect Now •
                                        </textPath>
                                    </text>
                                </svg>
                            </div>
                            <ArrowUpRight className="text-white w-10 h-10 relative z-10" strokeWidth={2} />
                        </div>
                    </Link>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-20"></div>

                {/* Bottom Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">

                    {/* Branding */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-6 text-white text-2xl font-bold tracking-tight">
                            <div className="p-1 border border-white/20 rounded-lg">
                                <Hammer className="text-orange-500 w-6 h-6 fill-orange-500" />
                            </div>
                            FactoryPro
                        </div>
                        <p className="text-gray-400 text-[14px] leading-relaxed mb-8 max-w-[260px]">
                            We are committed to providing personalized industrial solutions.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            <div className="w-10 h-10 rounded-full bg-[#262626] flex items-center justify-center hover:bg-orange-500 transition-colors group cursor-pointer group">
                                <span className="text-orange-500 group-hover:text-white font-bold font-serif italic text-lg pr-0.5">P</span>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#262626] flex items-center justify-center hover:bg-orange-500 transition-colors group cursor-pointer group">
                                <Facebook className="w-4 h-4 text-orange-500 group-hover:text-white fill-current" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-[#262626] flex items-center justify-center hover:bg-orange-500 transition-colors group cursor-pointer group">
                                <Instagram className="w-4 h-4 text-orange-500 group-hover:text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-[17px] font-medium mb-8">Quick Links</h4>
                        <ul className="space-y-5 text-gray-400 text-[14px]">
                            <li><Link to="/" className="hover:text-orange-500 cursor-pointer transition-colors block w-fit">Home</Link></li>
                            <li><Link to="/about" className="hover:text-orange-500 cursor-pointer transition-colors block w-fit">About Us</Link></li>
                            <li><Link to="/blog" className="hover:text-orange-500 cursor-pointer transition-colors block w-fit">Blog</Link></li>
                            <li><Link to="/services" className="hover:text-orange-500 cursor-pointer transition-colors block w-fit">Services</Link></li>
                        </ul>
                    </div>

                    {/* Security */}
                    <div>
                        <h4 className="text-white text-[17px] font-medium mb-8">Security</h4>
                        <ul className="space-y-5 text-gray-400 text-[14px]">
                            <li className="hover:text-orange-500 cursor-pointer transition-colors block w-fit">Term & Condition</li>
                            <li className="hover:text-orange-500 cursor-pointer transition-colors block w-fit">Privacy Policy</li>
                            <li className="hover:text-orange-500 cursor-pointer transition-colors block w-fit">Help</li>
                            <li><Link to="/contact" className="hover:text-orange-500 cursor-pointer transition-colors block w-fit">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white text-[17px] font-medium mb-8">Contact</h4>
                        <ul className="space-y-5 text-gray-400 text-[14px]">
                            <li>+91 123654789</li>
                            <li>info@domainname.com</li>
                            <li className="leading-relaxed max-w-[200px]">520, West Valley, Amin and minim</li>
                        </ul>
                    </div>

                </div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-[13px] border-t border-white/5 pt-10">
                    Copyright © 2024 All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
