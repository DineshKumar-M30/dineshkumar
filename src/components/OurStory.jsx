import React from 'react';
import { Settings, PlayCircle } from 'lucide-react';

const OurStory = () => {
    return (
        <section className="relative py-24 lg:py-32 bg-white font-sans overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-10">

                {/* Top Section: Header & Small Images */}
                <div className="flex flex-col xl:flex-row items-center justify-between gap-8 mb-24 lg:mb-32">

                    {/* Left Content - Header */}
                    <div className="w-full xl:flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-6">
                            <Settings className="text-orange-500 w-5 h-5" />
                            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Our Story</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-5xl text-gray-900 leading-[1.1] tracking-tight whitespace-normal sm:whitespace-nowrap">
                            <span className="block font-light">Transforming industries</span>
                            <span className="block font-bold">with innovative efficient</span>
                            <span className="block font-bold">solutions</span>
                        </h2>
                    </div>

                    {/* Right Images */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full xl:w-auto justify-start xl:justify-end overflow-x-visible">
                        <div className="w-full sm:w-[320px] h-[240px] rounded-[40px] overflow-hidden shadow-xl border-[6px] border-white shrink-0">
                            <img
                                src="https://i.pinimg.com/736x/22/2e/48/222e4876bec7105582a4619d9ac2362e.jpg"
                                alt="Factory Workers"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full sm:w-[320px] h-[240px] rounded-[40px] overflow-hidden shadow-xl border-[6px] border-white shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1470&auto=format&fit=crop"
                                alt="Automated Production"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-end">

                    {/* Left Large Image */}
                    <div className="relative h-[550px] w-full rounded-[60px] overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1470&auto=format&fit=crop"
                            alt="Welding Works"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col gap-12 lg:mb-8">
                        <p className="text-gray-500 leading-relaxed font-normal text-[16px] max-w-[520px]">
                            We specialize in revolutionizing industries by delivering innovative, efficient solutions that enhance productivity and streamline processes. Through advanced technologies, precision engineering, and sustainable practices.
                        </p>

                        {/* Separation Line */}
                        <div className="w-full h-px bg-gray-200"></div>

                        {/* Stats Row */}
                        <div className="flex flex-wrap gap-16 lg:gap-24">
                            <div>
                                <div className="text-4xl lg:text-[42px] font-bold text-orange-500 mb-2">10k+</div>
                                <div className="text-[13px] font-bold text-gray-800 tracking-wide">Completed Project</div>
                            </div>
                            <div>
                                <div className="text-4xl lg:text-[42px] font-bold text-orange-500 mb-2">15+</div>
                                <div className="text-[13px] font-bold text-gray-800 tracking-wide">Satisfied Customer</div>
                            </div>
                            <div>
                                <div className="text-4xl lg:text-[42px] font-bold text-orange-500 mb-2">10k+</div>
                                <div className="text-[13px] font-bold text-gray-800 tracking-wide">Year Of Mastery</div>
                            </div>
                        </div>

                        {/* Intro / User Avatars Row */}
                        <div className="flex items-center gap-8 mt-2">
                            {/* Avatars */}
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-14 h-14 rounded-full border-[3px] border-white overflow-hidden bg-gray-200 shadow-sm">
                                        <img
                                            src={`https://randomuser.me/api/portraits/men/${i + 35}.jpg`}
                                            alt="User"
                                            className="w-full h-full object-cover grayscale opacity-90"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Watch Intro Button */}
                            <button className="flex items-center gap-4 group">
                                <div className="w-14 h-14 rounded-full border-[1.5px] border-orange-500 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                                    <PlayCircle size={24} className="ml-1" fill="currentColor" strokeWidth={0} />
                                </div>
                                <span className="text-[12px] font-bold tracking-[0.2em] text-gray-800 uppercase">Watch Intro</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default OurStory;
