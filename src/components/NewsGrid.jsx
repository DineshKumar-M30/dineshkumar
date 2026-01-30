
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, User, Circle } from 'lucide-react';
import Man from "../assets/Man in Market.png"

const newsItems = [
    {
        id: 1,
        date: '25',
        month: 'Nov',
        image: 'https://i.pinimg.com/736x/41/24/37/412437dc7fbf90c506483240f8a064d2.jpg', // Salad
        title: 'The Benefits of Vitamin D & How to Get It',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
    },
    {
        id: 2,
        date: '25',
        month: 'Nov',
        image: 'https://i.pinimg.com/736x/cf/86/4e/cf864e802ed4bd342da7ac9fab602275.jpg', // Tomatoes
        title: 'The Benefits of Vitamin D & How to Get It',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
    },
    {
        id: 3,
        date: '25',
        month: 'Nov',
        image: 'https://i.pinimg.com/736x/c7/14/5d/c7145d79efd85a4e9d4dce8f34f72c1d.jpg', // Veggies/Fruits
        title: 'Benefits of Vitamin C & How to Get It',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
    },
    {
        id: 4,
        date: '25',
        month: 'Nov',
        image: Man, // Man in market/nature
        title: 'Research More Organic Foods',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
    },
    {
        id: 5,
        date: '25',
        month: 'Nov',
        image: 'https://i.pinimg.com/736x/f3/63/00/f3630075ef7e63f4fcf39456933aed40.jpg', // Girl picking fruit
        title: 'Everyday Fresh Fruites',
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
    },
    {
        id: 6,
        date: '25',
        month: 'Nov',
        image: 'https://i.pinimg.com/736x/1b/cd/19/1bcd19aac7f70b520bcf21f001e1c7a4.jpg', // Plastic trash
        title: "Don't Use Plastic Product! it's Kill Nature",
        description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        author: 'Rachi Card',
    },
];

const NewsGrid = () => {
    return (
        <section className="py-20 bg-white font-sans">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-8">
                    {newsItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="relative rounded-[30px] overflow-hidden shadow-lg group h-[500px] animate-fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Date Badge */}
                            <div className="absolute top-8 left-8 bg-white w-16 h-16 rounded-full flex flex-col items-center justify-center z-10 font-bold text-[#2A4B56] shadow-md group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl leading-none">{item.date}</span>
                                <span className="text-xs leading-none">{item.month}</span>
                            </div>

                            {/* Content Card Overlay */}
                            <div className="absolute bottom-[-100px] left-8 right-8 bg-white rounded-[30px] p-8 shadow-2xl transition-all duration-300 group-hover:bottom-8">
                                <div className="flex items-center gap-2 text-[#2A4B56] text-xs font-semibold mb-3">
                                    <User className="w-4 h-4 text-[#EBD96B]" />
                                    By {item.author}
                                </div>
                                <h3 className="text-[#2A4B56] font-bold text-xl mb-3 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                    {item.description}
                                </p>
                                <Link to="/news-details" className="flex items-center gap-2 text-[#2A4B56] font-bold text-sm bg-[#EBD96B] px-5 py-3 rounded-full hover:bg-[#e0cd5a] transition-colors w-fit">
                                    Read More
                                    <div className="bg-[#2A4B56] rounded-full p-0.5">
                                        <ArrowRight className="w-3 h-3 text-white" />
                                    </div>
                                </Link>
                            </div>

                            {/* Initial Visible Content (Title only state) - To match design where the card is visible but maybe expands? 
                                Actually, the design shows the full white card visible. 
                                Let's make it fixed at bottom.
                            */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white rounded-[30px] p-8 shadow-2xl group-hover:opacity-0 transition-opacity duration-300">
                                <div className="flex items-center gap-2 text-[#2A4B56] text-xs font-semibold mb-3">
                                    <User className="w-4 h-4 text-[#EBD96B]" />
                                    By {item.author}
                                </div>
                                <h3 className="text-[#2A4B56] font-bold text-xl mb-3 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                                    {item.description}
                                </p>
                                <Link to="/news-details" className="flex items-center gap-2 text-[#2A4B56] font-bold text-sm hover:text-[#7DAF56] transition-colors">
                                    Read More
                                    <div className="bg-[#2A4B56] rounded-full p-0.5">
                                        <ArrowRight className="w-3 h-3 text-white" />
                                    </div>
                                </Link>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsGrid;
