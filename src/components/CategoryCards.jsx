import React from 'react';

const categories = [
    {
        id: 1,
        title: 'Natural Oils',
        image: 'https://i.pinimg.com/736x/d2/10/ed/d210ed30f0e482dbc0b3f55796b7eb3f.jpg',
    },
    {
        id: 2,
        title: 'New Items',
        image: 'https://i.pinimg.com/736x/cc/f1/9f/ccf19fa90012cecd02495a68a91ebeed.jpg',
    },
    {
        id: 3,
        title: 'Healthy Flour',
        image: 'https://i.pinimg.com/736x/65/6a/56/656a56ac8d9bfad42486c9cdbc99fb46.jpg',
    }
];

const CategoryCards = () => {
    return (
        <section className="py-20 bg-[#F2F7F2] font-sans">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((cat) => (
                        <div key={cat.id} className="relative h-[400px] rounded-[30px] group overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
                            {/* Background Image */}
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Dark Overlay on Hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>

                            {/* Button */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <button className="pointer-events-auto bg-white/90 backdrop-blur-sm text-[#2A4B56] font-bold py-5 px-10 rounded-2xl shadow-lg hover:bg-white transition-all transform group-hover:scale-110 duration-300 uppercase tracking-widest text-sm border border-white/50">
                                    {cat.title}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoryCards;
