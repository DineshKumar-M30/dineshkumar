import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import belaleaLogo from '../assets/Belalea.png';

const Footer = () => {
    return (
        <footer className="bg-white py-16 font-sans animate-fade-in-up">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 text-[#2A4B56]">

                    {/* Contact Us */}
                    <div className="flex-1 text-center md:text-right md:pr-8 md:border-r border-gray-200 space-y-4">
                        <h3 className="font-bold text-xl mb-6">Contact Us</h3>

                        <div className="flex flex-col items-center md:items-end gap-1 group">
                            <span className="font-bold text-sm">Email</span>
                            <span className="text-gray-500 text-sm group-hover:text-[#7DAF56] transition-colors cursor-pointer">needhelp@Organia.com</span>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-1 group">
                            <span className="font-bold text-sm">Phone</span>
                            <span className="text-gray-500 text-sm group-hover:text-[#7DAF56] transition-colors cursor-pointer">666 888 888</span>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-1 group">
                            <span className="font-bold text-sm">Address</span>
                            <span className="text-gray-500 text-sm group-hover:text-[#7DAF56] transition-colors cursor-pointer">88 road, borklyn street, USA</span>
                        </div>
                    </div>

                    {/* Brand & Socials */}
                    <div className="flex-1 flex flex-col items-center text-center px-4">
                        <div className="flex items-center gap-2 mb-6 hover:scale-105 transition-transform duration-300">
                            {/* Using the logo image */}
                            <img src={belaleaLogo} alt="Belalea" className="h-10 w-auto" />
                            <span className="text-[#7DAF56] font-serif text-3xl font-bold">Belalea</span>
                        </div>

                        <p className="text-gray-500 text-sm mb-8 max-w-xs leading-relaxed">
                            Follow news and promotions on our social networks, subscribe!
                        </p>

                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 bg-[#EFF6F1] rounded-full flex items-center justify-center text-[#2A4B56] hover:bg-[#7DAF56] hover:text-white transition-all transform hover:scale-110">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#EFF6F1] rounded-full flex items-center justify-center text-[#2A4B56] hover:bg-[#7DAF56] hover:text-white transition-all transform hover:scale-110">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#EFF6F1] rounded-full flex items-center justify-center text-[#2A4B56] hover:bg-[#7DAF56] hover:text-white transition-all transform hover:scale-110">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-[#EFF6F1] rounded-full flex items-center justify-center text-[#2A4B56] hover:bg-[#7DAF56] hover:text-white transition-all transform hover:scale-110">
                                <Linkedin className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Utility Pages */}
                    <div className="flex-1 text-center md:text-left md:pl-8 md:border-l border-gray-200">
                        <h3 className="font-bold text-xl mb-6">Utility Pages</h3>
                        <ul className="space-y-3 text-gray-500 text-sm">
                            <li><a href="#" className="hover:text-[#7DAF56] transition-colors hover:translate-x-1 inline-block transform duration-200">Style Guide</a></li>
                            <li><Link to="/404" className="hover:text-[#7DAF56] transition-colors hover:translate-x-1 inline-block transform duration-200">404 Not Found</Link></li>
                            <li><a href="#" className="hover:text-[#7DAF56] transition-colors hover:translate-x-1 inline-block transform duration-200">Password Protected</a></li>
                            <li><a href="#" className="hover:text-[#7DAF56] transition-colors hover:translate-x-1 inline-block transform duration-200">Licences</a></li>
                            <li><a href="#" className="hover:text-[#7DAF56] transition-colors hover:translate-x-1 inline-block transform duration-200">Changelog</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
