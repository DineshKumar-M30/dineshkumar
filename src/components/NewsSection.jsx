import React from 'react';
import { ArrowRight } from 'lucide-react';

const newsItems = [
    {
        id: 1,
        date: '25 Aug',
        image: 'https://i.pinimg.com/736x/41/24/37/412437dc7fbf90c506483240f8a064d2.jpg',
        title: 'Vitamin dressing for summer salad',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    },
    {
        id: 2,
        date: '25 Oct',
        image: 'https://i.pinimg.com/736x/cf/86/4e/cf864e802ed4bd342da7ac9fab602275.jpg',
        title: 'What vitamins are missing in autumn?',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
    }
];

const NewsSection = () => {
    return (
        <section className="py-24 bg-white font-sans">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="font-handwriting text-[#7DAF56] text-4xl mb-2 block italic">
                            News
                        </span>
                        <h2 className="text-[#2A4B56] text-4xl md:text-5xl font-bold leading-tight">
                            News about organic products and much more
                        </h2>
                    </div>

                    <button className="border-2 border-[#2A4B56] text-[#2A4B56] px-8 py-3 rounded-full font-bold flex items-center gap-3 hover:bg-[#2A4B56] hover:text-white transition-colors text-sm whitespace-nowrap">
                        More news
                        <div className="bg-[#2A4B56] rounded-full p-0.5 text-white group-hover:bg-white group-hover:text-[#2A4B56]">
                            <ArrowRight className="w-3 h-3" />
                        </div>
                    </button>
                </div>

                {/* News Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {newsItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="relative h-[500px] rounded-[40px] overflow-hidden group shadow-lg animate-fade-in-up"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay Gradient (optional, for contrast if needed) */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>

                            {/* Date Badge */}
                            <div className="absolute top-8 left-8 bg-white rounded-full w-16 h-16 flex flex-col items-center justify-center text-[#2A4B56] font-bold shadow-lg z-10 text-center leading-tight p-2 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl block">{item.date.split(' ')[0]}</span>
                                <span className="text-xs">{item.date.split(' ')[1]}</span>
                            </div>

                            {/* Content Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-[30px] p-8 shadow-xl transition-transform duration-300 group-hover:-translate-y-2">
                                <h3 className="text-[#2A4B56] text-xl font-bold mb-3 group-hover:text-[#7DAF56] transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                    {item.description}
                                </p>

                                <button className="bg-[#EBD96B] text-[#2A4B56] px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#e0cd5a] transition-all hover:scale-105 active:scale-95 text-sm w-fit">
                                    Read More
                                    <div className="bg-[#2A4B56] rounded-full p-0.5">
                                        <ArrowRight className="w-3 h-3 text-white" />
                                    </div>
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                <style jsx>{`
                    @keyframes fadeInUp {
                        from { opacity: 0; transform: translateY(20px); }
                        to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-fade-in-up {
                        animation: fadeInUp 0.8s ease-out forwards;
                        opacity: 0;
                    }
                `}</style>

            </div>
        </section>
    );
};

export default NewsSection;
