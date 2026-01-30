import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import oilBottle from '../assets/Oil Bottle.png';

const offers = [
    {
        id: 1,
        tag: 'Oil',
        title: 'Pumpkin seed oil, 250ml',
        image: oilBottle,
    },
    {
        id: 2,
        tag: 'Oil',
        title: 'Pumpkin seed oil, 250ml',
        image: oilBottle,
    },
    {
        id: 3,
        tag: 'Oil',
        title: 'Pumpkin seed oil, 250ml',
        image: oilBottle,
    },
    {
        id: 4,
        tag: 'Oil',
        title: 'Pumpkin seed oil, 250ml',
        image: oilBottle,
    },
];

const BestOffers = () => {
    return (
        <section className="py-20 bg-[#84B97C] font-sans">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
                    <h2 className="text-white text-3xl md:text-4xl font-bold text-center md:text-left">
                        Best offers of the month
                    </h2>

                    <Link to="/catalog" className="bg-[#EBD96B] text-[#2A4B56] px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-[#e0cd5a] transition-colors text-sm shadow-md">
                        View All
                        <div className="bg-[#2A4B56] rounded-full p-0.5">
                            <ArrowRight className="w-3 h-3 text-white" />
                        </div>
                    </Link>
                </div>

                {/* Offers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offers.map((offer, index) => (
                        <Link
                            to="/product"
                            key={offer.id}
                            className="bg-white rounded-3xl p-4 md:p-6 flex flex-col h-full shadow-lg group hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl animate-fade-in-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >

                            {/* Tag */}
                            <div className="self-start">
                                <span className="bg-[#2A4B56] text-white text-xs font-bold px-3 py-1 rounded event-none">
                                    {offer.tag}
                                </span>
                            </div>

                            {/* Image */}
                            <div className="flex-1 flex items-center justify-center my-6">
                                <img
                                    src={offer.image}
                                    alt={offer.title}
                                    className="h-48 w-auto object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500 will-change-transform"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-[#2A4B56] font-semibold text-center text-sm md:text-base mb-2 group-hover:text-[#7DAF56] transition-colors">
                                {offer.title}
                            </h3>

                        </Link>
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

export default BestOffers;
