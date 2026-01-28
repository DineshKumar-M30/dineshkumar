import React from 'react';
import { Settings, ArrowUpRight } from 'lucide-react';

const OurTeam = () => {
    return (
        <section className="py-20 lg:py-28 bg-white font-sans">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-0.5 border border-dashed border-orange-500 rounded-full">
                                <Settings className="text-orange-500 w-3 h-3" />
                            </div>
                            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Our Team</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-light text-gray-900 leading-[1.1] tracking-tight">
                            Core strengths in <br />
                            <span className="font-bold">industrial innovation</span>
                        </h2>
                    </div>

                    <div className="mb-4">
                        <button className="pl-6 pr-2 py-2 rounded-xl border border-gray-200 text-gray-900 font-bold text-[13px] flex items-center gap-4 hover:border-orange-500 transition-colors bg-white shadow-sm">
                            All Member
                            <span className="bg-orange-500 text-white w-9 h-9 flex items-center justify-center rounded-lg">
                                <ArrowUpRight size={16} strokeWidth={2.5} />
                            </span>
                        </button>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        {
                            name: "Ronald Richards",
                            role: "Manufacturing Executive",
                            img: "https://i.pinimg.com/1200x/2a/1d/3b/2a1d3b2d5c453dacea3b22c4d4335002.jpg" // Temporary placeholder, will try to match better
                        },
                        {
                            name: "Brooklyn Simmons",
                            role: "Industrial Engineer",
                            img: "https://i.pinimg.com/1200x/21/aa/cb/21aacbd705d1f4cbec7890d10c23dc73.jpg"
                        },
                        {
                            name: "Cameron Williamson",
                            role: "Production Supervisor",
                            img: "https://i.pinimg.com/1200x/3b/6e/36/3b6e36894292a312c65044affb1216f8.jpg"
                        },
                        {
                            name: "Darlene Robertson",
                            role: "Manufacturing Executive",
                            img: "https://i.pinimg.com/736x/db/8a/7c/db8a7cd024c35a5e60197e7f8f3f59b8.jpg"
                        },
                    ].map((member, idx) => (
                        <div key={idx} className="flex flex-col items-center group">
                            <div className="w-full aspect-square rounded-[32px] overflow-hidden mb-6 filter contrast-[1.05]">
                                <img
                                    src={member.img}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                                />
                            </div>
                            <h3 className="text-[17px] font-bold text-gray-900 mb-1">{member.name}</h3>
                            <p className="text-[13px] text-gray-400 font-medium">{member.role}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default OurTeam;
