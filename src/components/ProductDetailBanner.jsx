import React from 'react';


const ProductDetailBanner = () => {
    return (
        <section className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center font-sans overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-1 z-0">
                <img
                    src="https://i.pinimg.com/736x/c4/27/5d/c4275d8e4bbcdbfbf497a609eb829f00.jpg"
                    alt="Pomegranate seeds"
                    className="w-full h-[400px] object-cover object-center animate-fade-in-scale"
                />
                {/* Overlay */}


            </div>

            {/* Content */}
            <div className="relative z-10 animate-slide-up">
                <h1 className="text-[#2A4B56] text-5xl md:text-6xl font-bold tracking-tight">Flour</h1>
            </div>
        </section>
    );
};

export default ProductDetailBanner;
