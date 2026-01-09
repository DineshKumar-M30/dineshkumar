import React from 'react';

const Hero = () => {
    return (
        <div id="home" className="relative z-30 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-16 pb-40 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="col-span-1 lg:col-span-5 text-white space-y-8 relative z-20 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative pt-4">
                    {/* Orange accents on text - Adjusted for English text width */}
                    <div className="absolute -top-4 -left-6 w-10 h-0.5 bg-orange-500 transform -rotate-45 hidden lg:block"></div>
                    <div className="absolute -top-2 -left-4 w-10 h-0.5 bg-orange-500 transform -rotate-45 hidden lg:block"></div>

                    {/* Decorative Triangles near Title - Adjusted for English text 'CHEATS FOR' is longer than 'ЧИТЫ НА' */}
                    <div className="hidden lg:block absolute top-[20%] left-[340px] w-0 h-0 border-l-[8px] border-l-transparent border-b-[12px] border-b-cyan-400 border-r-[8px] border-r-transparent transform rotate-12"></div>
                    <div className="hidden lg:block absolute top-[30%] left-[350px] w-0 h-0 border-l-[6px] border-l-transparent border-b-[10px] border-b-orange-400 border-r-[6px] border-r-transparent transform -rotate-12"></div>

                    <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-black leading-[1.1]">
                        CHEATS FOR P<span className="relative inline-block text-cyan-300">
                            U
                            {/* Cyan Play Arrow */}
                            <svg className="absolute -left-3 top-1/2 -translate-y-1/2 w-8 h-8 text-cyan-400 transform -rotate-90 hidden lg:block" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 22h20L12 2z" />
                            </svg>
                        </span>BG <br />
                        BEST ON MARKET <br />
                        NO BANS!
                    </h1>
                </div>



                <p className="text-blue-50 text-base md:text-lg font-medium leading-relaxed opacity-90 max-w-lg">
                    Best builds on the market, proven by experience and time, as well as the optimal ratio of price, reliability and performance.
                </p>

                <p className="text-blue-200 font-semibold text-sm tracking-wide">
                    Lowest price guaranteed
                </p>

                <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 pt-4 w-full lg:w-auto px-4 lg:px-0">
                    <button className="relative w-full lg:w-auto px-10 py-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold rounded shadow-[0_10px_20px_-5px_rgba(249,115,22,0.4)] hover:shadow-orange-500/60 hover:-translate-y-0.5 transition-all text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                        <span>Buy Now</span>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                    </button>

                    <button className="w-full lg:w-auto px-8 py-4 border-2 border-[#4fa3ff] bg-[#4fa3ff]/10 text-white font-bold rounded shadow-[0_0_20px_rgba(79,163,255,0.3)] hover:bg-[#4fa3ff]/20 transition-all text-sm uppercase tracking-wider backdrop-blur-sm">
                        Watch Video
                    </button>
                </div>
            </div>

            {/* Right Content - Buggy Image */}
            <div className="col-span-1 lg:col-span-7 relative h-[400px] md:h-[550px] flex items-center justify-center lg:justify-end pointer-events-none">
                {/* Main Car Image */}
                <img
                    src="/buggy2.png"
                    alt="PUBG Buggy"
                    className="w-full max-w-[800px] h-auto object-contain transform translate-x-[6%] hover:scale-100 transition-transform duration-700 z-10"
                />
            </div>

            {/* Loot Collection Floating Element - Moved and Adjusted */}
            <div className="absolute bottom-[-100px] left-[-10px] w-[500px] md:w-[500px] z-30 pointer-events-none hidden xl:block">
                <img
                    src="/backpack1.png"
                    alt="PUBG Loot Collection"
                    className="w-full h-auto object-contain drop-shadow-2xl"
                />
            </div>

            {/* White Wave Bottom - Directly in Hero to ensure visibility */}
            <div className="absolute bottom-0 left-[calc(50%-50vw)] w-screen z-20 pointer-events-none">
                {/* 
                    Using calc(50%-50vw) and w-screen because the Hero container has max-width layout.
                    This breaks out to full width.
                 */}
                <svg viewBox="0 0 1440 320" className="w-full h-auto block" style={{ minHeight: '120px' }} preserveAspectRatio="none">
                    {/* 
                      Path Geometry: M0,200 C320,50 640,280 1440,250 ...
                    */}
                    <path fill="#ffffff" fillOpacity="1" d="M0,200 C320,50 640,280 1440,250 L1440,320 L0,320 Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Hero;
