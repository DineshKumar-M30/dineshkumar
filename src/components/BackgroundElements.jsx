import React from 'react';

const BackgroundElements = () => {
    return (
        <>
            {/* Background Gradient & Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2b6bff] to-[#4fa3ff] z-0">
                {/* Abstract Text Background */}
                <div className="absolute top-[10%] left-[25%] text-[clamp(6rem,12vw,10rem)] font-black text-white/5 select-none transform -rotate-12 whitespace-nowrap">CHEATS</div>
                <div className="absolute top-[40%] right-[-5%] text-[clamp(5rem,10vw,8rem)] font-black text-white/5 select-none whitespace-nowrap">WALLHACK</div>
                <div className="absolute bottom-[20%] left-[-5%] text-[clamp(5rem,10vw,8rem)] font-black text-white/5 select-none whitespace-nowrap">ESP Player</div>
                <div className="absolute bottom-[5%] right-[10%] text-[clamp(5rem,10vw,8rem)] font-black text-white/5 select-none whitespace-nowrap">AntiRecoil</div>

                {/* Decorative Dots - Top Left */}
                <div className="absolute top-32 left-8 grid grid-cols-4 gap-3 opacity-30">
                    {[...Array(24)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-cyan-200 rounded-full"></div>
                    ))}
                </div>

                {/* Decorative Dots - Bottom Center area */}
                <div className="absolute bottom-40 left-1/3 grid grid-cols-6 gap-4 opacity-20">
                    {[...Array(24)].map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-white rounded-full"></div>
                    ))}
                </div>

                {/* Orange Squiggle - Centered */}
                <svg className="absolute top-[20%] left-[45%] w-24 h-24 text-orange-500/80 rotate-12" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
                    <path d="M10 50 Q 25 30 40 50 T 70 50 T 100 50" />
                </svg>

                {/* Small scattered particles */}
                <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white/60 rounded-full"></div>
                <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-white/50 rounded-full"></div>

                {/* Lighter Blue Glow behind Buggy (Right side) */}
                <div className="absolute top-1/2 right-10 w-[800px] h-[600px] bg-[#4fa3ff] brightness-110 opacity-40 blur-3xl rounded-full transform translate-x-1/4 -translate-y-1/4 pointer-events-none"></div>
            </div>

        </>
    );
};

export default BackgroundElements;
