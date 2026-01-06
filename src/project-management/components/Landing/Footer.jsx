import React from 'react';
import { LayoutDashboard, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <LayoutDashboard className="h-6 w-6 text-blue-600" />
                            <span className="text-lg font-bold text-slate-900 dark:text-white">Nexus</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-4">
                            The last project management tool you'll ever need. Built for speed, designed for teams.
                        </p>
                        <div className="flex space-x-4">
                            <Twitter className="w-5 h-5 text-slate-400 hover:text-blue-500 cursor-pointer transition-colors" />
                            <Github className="w-5 h-5 text-slate-400 hover:text-black dark:hover:text-white cursor-pointer transition-colors" />
                            <Linkedin className="w-5 h-5 text-slate-400 hover:text-blue-700 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Product</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-blue-600">Features</a></li>
                            <li><a href="#" className="hover:text-blue-600">Integrations</a></li>
                            <li><a href="#" className="hover:text-blue-600">Pricing</a></li>
                            <li><a href="#" className="hover:text-blue-600">Changelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><a href="#" className="hover:text-blue-600">About</a></li>
                            <li><a href="#" className="hover:text-blue-600">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                            <li><a href="#" className="hover:text-blue-600">Puppies</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-4">Subscribe</h4>
                        <p className="text-xs text-slate-500 mb-4">Get the latest news and updates.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-l-lg px-4 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 text-sm font-bold">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-slate-400">© 2026 Nexus Inc. All rights reserved.</p>
                    <div className="flex space-x-6 text-xs text-slate-400 mt-4 md:mt-0">
                        <a href="#" className="hover:text-slate-600">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-600">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
