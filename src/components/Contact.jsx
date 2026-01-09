import React from 'react';

const DiscordIcon = () => (
    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 2.03 2.03 0 0 0-.865 1.78.1.1 0 0 0 .1.085 20.3 20.3 0 0 0 4.89 1.5.1.1 0 0 0 .12-.13 13.92 13.92 0 0 0-.29-1.74zM9.43 2.855a19.793 19.793 0 0 0-4.885 1.515.074.074 0 0 0-.079.037 2.03 2.03 0 0 0-.865 1.78.1.1 0 0 0 .1.085 20.3 20.3 0 0 0 4.89 1.5.1.1 0 0 0 .12-.13 13.92 13.92 0 0 0-.29-1.74zM3.682 4.37A19.5 19.5 0 0 0 0 19.5c.01.2.03.4.06.6.6 2.2 2 4 3.9 5.2.04.03.1.02.13-.02l.6-1.1a14.7 14.7 0 0 1-2.4-3.6.08.08 0 0 1 .1-.1c.3.2.7.4 1.1.6 4.3 2 9.2 2 13.5 0 .4-.2.7-.4 1-.6.1-.06.1-.2 0-.3a14.7 14.7 0 0 1-2.4 3.6l.6 1.1c.05.07.12.06.16.03 1.9-1.2 3.3-3 3.9-5.2.03-.2.05-.4.06-.6a19.5 19.5 0 0 0-3.68-15.13zm11.75 11.23c-1.2 0-2.18-1.1-2.18-2.45s.95-2.45 2.18-2.45c1.23 0 2.22 1.1 2.18 2.45 0 1.35-.95 2.45-2.18 2.45zm-6.86 0c-1.2 0-2.18-1.1-2.18-2.45s.95-2.45 2.18-2.45c1.23 0 2.22 1.1 2.18 2.45 0 1.35-.95 2.45-2.18 2.45z" />
    </svg>
);

const TelegramIcon = () => (
    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
    </svg>
);

const UserIcon = () => (
    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
    </svg>
);

const MailIcon = () => (
    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
);

const CommentIcon = () => (
    <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
    </svg>
);

const Footer = () => {
    return (
        <section id="contacts" className="relative w-full bg-white pt-32 pb-10 overflow-hidden z-20">

            {/* Blue Wave Background - Custom precise shape */}
            <div className="absolute bottom-0 left-0 w-full h-[75%] z-0 pointer-events-none">
                <svg className="w-full h-full absolute inset-0 text-[#3b8dff]" viewBox="0 0 1440 600" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#2b6bff" />
                            <stop offset="100%" stopColor="#4fa3ff" />
                        </linearGradient>
                    </defs>
                    {/*
                       Refined Path logic for exact Figma match:
                       Start higher on the left (y=250) to create the thick blue base.
                       Deep swoop down in the middle (y=580) under the loot box.
                       Sharp rise to the top right (y=80).
                    */}
                    <path fill="url(#waveGradient)" d="M0,250 C400,580 800,450 1440,80 L1440,600 L0,600 Z"></path>
                </svg>

                {/* Decoration dots - Right */}
                <div className="absolute right-20 bottom-1/3 grid grid-cols-6 gap-3 opacity-10">
                    {[...Array(36)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    ))}
                </div>

                {/* Decoration dots - Left */}
                <div className="absolute left-10 bottom-20 grid grid-cols-4 gap-3 opacity-10">
                    {[...Array(16)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    ))}
                </div>

                {/* Big Circle Decoration Left */}
                <div className="absolute left-[-100px] bottom-[-100px] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Title */}
                <div className="text-center mb-0 relative">
                    <div className="flex items-center justify-center gap-4">
                        <span className="w-8 h-1.5 bg-orange-500 transform -rotate-45 rounded-full"></span>
                        <div className="w-8 h-1.5 bg-orange-500 transform -rotate-45 rounded-full -ml-6 mt-2"></div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#1e293b] uppercase tracking-wide ml-3">CONTACTS</h2>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row items-end justify-between gap-0 relative">
                    {/* Left: 3D Loot Box - Positioned to sit on the wave */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start relative z-10 -mb-10 lg:pl-12">
                        <div className="relative w-[380px] md:w-[500px] lg:w-[600px] animate-float">
                            <img
                                src="/loot_box2.png"
                                alt="Loot Box"
                                className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                            />
                        </div>
                    </div>

                    {/* Right: Contact Form - Overlapping wave */}
                    <div className="w-full lg:w-1/2 max-w-lg mx-auto lg:mr-12 relative z-20 mb-20 lg:mb-32">
                        {/* Floating Icons */}
                        <div className="absolute -left-12 bottom-8 w-20 h-20 bg-[#00ACFF] rotate-12 rounded-[1.5rem] flex items-center justify-center shadow-xl z-30 animate-bounce-slow border-4 border-white/20 backdrop-blur-sm">
                            <div className="-rotate-12 transform scale-110"><DiscordIcon /></div>
                        </div>
                        <div className="absolute -right-10 -top-10 w-24 h-24 bg-[#00ACFF] -rotate-12 rounded-[2rem] flex items-center justify-center shadow-xl z-30 animate-bounce-slow delay-700 border-4 border-white/20 backdrop-blur-sm">
                            <div className="rotate-12 transform scale-125"><TelegramIcon /></div>
                        </div>

                        <div className="bg-white rounded-[20px] shadow-2xl p-10 md:p-12 relative z-10">
                            <h3 className="text-xl font-extrabold text-[#1e293b] mb-8">Feedback</h3>

                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-0 flex items-center pointer-events-none">
                                            <UserIcon />
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="w-full pl-8 pr-3 py-2 border-b-2 border-gray-100 focus:border-orange-500 outline-none transition-colors text-sm font-bold text-gray-700 placeholder-gray-400"
                                        />
                                    </div>
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-0 flex items-center pointer-events-none">
                                            <MailIcon />
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="E-mail"
                                            className="w-full pl-8 pr-3 py-2 border-b-2 border-gray-100 focus:border-orange-500 outline-none transition-colors text-sm font-bold text-gray-700 placeholder-gray-400"
                                        />
                                    </div>
                                </div>

                                <div className="relative pt-2">
                                    <div className="absolute top-4 left-0 pl-0 pointer-events-none">
                                        <CommentIcon />
                                    </div>
                                    <textarea
                                        placeholder="Comment"
                                        rows="1"
                                        className="w-full pl-8 pr-3 py-2 border-b-2 border-gray-100 focus:border-orange-500 outline-none transition-colors text-sm font-bold text-gray-700 placeholder-gray-400 resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-2 flex justify-end">
                                    <button type="button" className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-3.5 px-12 rounded-lg shadow-[0_10px_20px_-5px_rgba(249,115,22,0.4)] transition-all hover:-translate-y-1 transform">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom Nav */}
                <div className="border-t border-white/10 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6 text-white pb-8">
                    <div className="text-sm font-bold opacity-90 tracking-widest">LOGO</div>

                    <div className="hidden md:flex items-center gap-8 text-[11px] font-extrabold tracking-widest uppercase opacity-90">
                        <a href="#home" className="hover:text-amber-300 transition-colors">MAIN</a>
                        <a href="#pricing" className="hover:text-amber-300 transition-colors">PRICING</a>
                        <a href="#reviews" className="hover:text-amber-300 transition-colors">REVIEWS</a>
                        <a href="#faq" className="hover:text-amber-300 transition-colors">FAQ</a>
                        <a href="#contacts" className="hover:text-amber-300 transition-colors">CONTACTS</a>
                        <a href="#features" className="hover:text-amber-300 transition-colors">FEATURES</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded-md text-xs font-bold cursor-pointer hover:bg-gray-50 transition-colors shadow-lg">
                            <img src="https://flagcdn.com/w20/us.png" alt="EN" className="w-5 h-auto shadow-sm rounded-[2px]" />
                            <span className="mt-0.5">EN</span>
                            <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        <button className="bg-orange-500 p-2 rounded-md hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20">
                            <UserIcon className="text-white w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="text-center text-white/50 text-[11px] font-semibold tracking-wide mt-2">
                    Protected 2022 (C)
                </div>
            </div>
        </section>
    );
};

export default Footer;
