import React from 'react';
import bag from "../assets/bag.png"

const ProductInfo = () => {
    return (
        <section className="py-20 bg-white font-sans">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left: Product Image */}
                    <div className="w-full lg:w-1/2">
                        <div className="bg-[#F9F9F9] rounded-[40px] p-12 flex items-center justify-center h-[500px] animate-fade-in-scale">
                            <img
                                src={bag}
                                alt="Rice Flour"
                                className="h-full w-auto object-contain mix-blend-multiply drop-shadow-xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        {/* Thumbnails Row (Placeholder) */}
                        <div className="flex gap-4 mt-6 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-20 h-20 bg-[#F9F9F9] rounded-xl p-2 flex items-center justify-center hover:border-2 border-[#2A4B56] cursor-pointer transition-all hover:scale-105">
                                    <img src={bag} alt="thumb" className="h-full w-auto object-contain mix-blend-multiply" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Info */}
                    <div className="w-full lg:w-1/2 pt-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        <span className="bg-[#2A4B56] text-white text-xs font-bold px-3 py-1 rounded w-fit uppercase tracking-wider mb-4 inline-block shadow-sm">
                            Flour
                        </span>

                        <h2 className="text-[#2A4B56] text-4xl md:text-5xl font-bold mb-8">
                            Rice Flour
                        </h2>

                        <div className="space-y-6 text-gray-500 text-sm leading-relaxed mb-10">
                            <p>
                                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                            </p>
                            <p>
                                Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                            </p>
                        </div>

                        {/* Marketplace Buttons */}
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-[#CB11AB] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#a60e8c] transition-all hover:scale-105 hover:shadow-xl min-w-[200px] flex items-center justify-center gap-2">
                                Wildberries
                            </button>
                            <button className="bg-[#005BFF] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#004acc] transition-all hover:scale-105 hover:shadow-xl min-w-[200px] flex items-center justify-center gap-2">
                                OZON
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductInfo;
