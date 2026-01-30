import React from 'react';
import { Star } from 'lucide-react';
import DecorLeft from '../assets/Decoration Left.png';
import DecorRight from '../assets/Decoration Right.png';

const stats = [
    { value: '100%', label: 'Organic' },
    { value: '15', label: 'Products on market' },
    { value: '150+', label: 'Retail points' },
    { value: '5+', label: 'Years on market' },
];

const ReviewSection = () => {
    return (
        <section className="relative w-full py-24 bg-white font-sans overflow-hidden">

            {/* Decorative Background Elements (Left/Right) - Placeholders */}
            {/* In a real scenario, these would be the specific transparent PNGs of lemons/cinnamon */}
            <div className="absolute top-0 left-0 w-100 h-full hidden xl:block pointer-events-none">
                <img
                    src={DecorLeft}
                    alt="Decoration Left"
                    className="w-full h-full object-cover -ml-24"
                />
            </div>
            <div className="absolute top-0 right-0 w-100 h-full hidden xl:block pointer-events-none">
                <img
                    src={DecorRight}
                    alt="Decoration Right"
                    className="w-full h-full object-cover ml-24"
                />
            </div>

            <div className="container mx-auto px-4 max-w-4xl relative z-10">

                {/* Header */}
                <div className="text-center mb-12">
                    <span className="font-handwriting text-[#7DAF56] text-4xl mb-2 block italic">
                        Reviews
                    </span>
                    <h2 className="text-[#2A4B56] text-4xl md:text-5xl font-bold">
                        What do our buyers say?
                    </h2>
                </div>

                {/* Testimonial Card */}
                <div className="flex flex-col items-center text-center mb-20 animate-fade-in-scale">
                    {/* Avatar */}
                    <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-2 border-white shadow-md hover:scale-110 transition-transform duration-300">
                        <img
                            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop"
                            alt="Customer"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-[#FFB951] text-[#FFB951] animate-pulse" style={{ animationDelay: `${i * 100}ms` }} />
                        ))}
                    </div>

                    {/* Text */}
                    <p className="text-gray-500 max-w-2xl leading-relaxed mb-8 italic">
                        "Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
                    </p>

                    {/* Dots */}
                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#7DAF56]/40 cursor-pointer hover:bg-[#7DAF56] transition-colors"></div>
                        <div className="w-2 h-2 rounded-full bg-[#7DAF56] scale-125"></div>
                        <div className="w-2 h-2 rounded-full bg-[#7DAF56]/40 cursor-pointer hover:bg-[#7DAF56] transition-colors"></div>
                    </div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-100 mb-16"></div>

                {/* Stats Circles */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="w-40 h-40 rounded-full border-4 border-[#F1F8F5] bg-white flex flex-col items-center justify-center text-center p-4 transition-all duration-500 hover:scale-110 hover:border-[#7DAF56] hover:shadow-xl shadow-sm animate-pop-in"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <span className="text-[#2A4B56] text-3xl font-bold mb-1">{stat.value}</span>
                            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wide px-2">{stat.label}</span>
                        </div>
                    ))}
                </div>

                <style jsx>{`
                    @keyframes fadeScale {
                        from { opacity: 0; transform: scale(0.9); }
                        to { opacity: 1; transform: scale(1); }
                    }
                    @keyframes popIn {
                        0% { opacity: 0; transform: scale(0.5); }
                        70% { transform: scale(1.1); }
                        100% { opacity: 1; transform: scale(1); }
                    }
                    .animate-fade-in-scale {
                        animation: fadeScale 0.8s ease-out forwards;
                        opacity: 0;
                    }
                    .animate-pop-in {
                        animation: popIn 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
                        opacity: 0;
                    }
                `}</style>
            </div>
        </section>
    );
};

export default ReviewSection;
