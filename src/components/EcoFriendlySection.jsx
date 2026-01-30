import React from 'react';
import greenland from '../assets/greenland.png';
const EcoFriendlySection = () => {
    return (
        <section className="relative w-full lg:h-[850px] flex flex-col lg:flex-row items-center font-sans overflow-hidden">

            {/* Left Image Section */}
            <div className="w-full lg:w-[60%] relative h-[400px] lg:h-full">
                <img
                    src={greenland}
                    alt="Green landscape"
                    className="w-full h-full object-cover animate-fade-in-scale"
                />
            </div>

            {/* Right Content Section */}
            <div className="w-full lg:w-[50%] relative bg-white lg:-ml-32 z-10 flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:pl-32 lg:pr-16 xl:pl-40 xl:pr-24 py-16 lg:py-24 rounded-none lg:rounded-l-[100px] shadow-2xl animate-slide-up">

                <div className="max-w-xl">
                    <span className="font-handwriting text-[#7DAF56] text-5xl mb-4 block italic">
                        Eco Friendly
                    </span>
                    <h2 className="text-[#2A4B56] text-4xl md:text-5xl font-bold mb-10 leading-tight">
                        Creating a healthy future
                    </h2>

                    {/* Feature 1 */}
                    <div className="mb-10 group hover:translate-x-2 transition-transform duration-300">
                        <h4 className="text-[#2A4B56] font-bold text-lg mb-3 group-hover:text-[#7DAF56] transition-colors">
                            Modern Agriculture
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="mb-10 group hover:translate-x-2 transition-transform duration-300">
                        <h4 className="text-[#2A4B56] font-bold text-lg mb-3 group-hover:text-[#7DAF56] transition-colors">
                            Technological Approach to Production
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="group hover:translate-x-2 transition-transform duration-300">
                        <h4 className="text-[#2A4B56] font-bold text-lg mb-3 group-hover:text-[#7DAF56] transition-colors">
                            Popularization of Natural Products
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Sed ut perspiciatis.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EcoFriendlySection;
