import React from 'react';

const CatalogBanner = () => {
    return (
        <section className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center font-sans overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://i.pinimg.com/1200x/be/c6/6b/bec66b9c4e110e27abf664e9afc7065f.jpg"
                    alt="Apricots and Greenery"
                    className="w-full h-full object-cover object-center animate-fade-in-scale"
                />
                {/* Overlay */}


            </div>

            {/* Content */}
            <div className="relative z-10 animate-slide-up">
                <h1 className="text-[#2A4B56] text-5xl md:text-6xl font-bold tracking-tight">Catalog</h1>
            </div>
        </section>
    );
};

export default CatalogBanner;
