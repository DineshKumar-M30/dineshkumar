import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import notfound from "../assets/404.png"

const NotFound = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="relative w-full h-[600px] md:h-screen min-h-[600px] flex items-center justify-center font-sans overflow-hidden bg-[#F1F4F6]">
            {/* Background Image / Composition */}
            <div className="absolute inset-0 z-0">
                {/* Right side background color/texture is already set on section */}
                {/* We can use an image for the dried flowers if we have one. 
                     For now, I'll use a nice nature texture or separate images if possible.
                     The screenshot shows a specific cutout of dried flowers. 
                     I will use a high-quality Unsplash image that has a similar vibe (flowers on neutral/blueish background).
                 */}
                <img
                    src={notfound}
                    alt="Background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center h-full">
                {/* Left Half - Spacer */}
                <div className="hidden md:block w-1/2"></div>

                {/* Right Half - Content */}
                <div className="w-full md:w-1/2 flex flex-col items-center text-center justify-center">
                    {/* 404 Text */}
                    <h1 className="text-[150px] md:text-[250px] font-bold text-[#8FA8A4] leading-none opacity-60 select-none">
                        404
                    </h1>

                    <h2 className="text-[#2A4B56] text-4xl md:text-5xl font-bold mb-4 -mt-10 md:-mt-16 z-10 relative">
                        Page not found
                    </h2>

                    <p className="text-gray-500 mb-8 max-w-md">
                        The page you are looking for doesn't exist or has been moved
                    </p>

                    <Link
                        to="/catalog"
                        className="flex items-center gap-2 bg-[#2A4B56] text-white font-bold py-4 px-10 rounded-2xl hover:bg-[#1e363e] transition-colors shadow-lg group"
                    >
                        Go to Catalog
                        <div className="bg-[#2A4B56] rounded-full p-0.5 group-hover:bg-[#3d606b] transition-colors">
                            <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default NotFound;
