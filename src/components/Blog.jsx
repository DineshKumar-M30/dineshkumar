import React from 'react';
import { Settings, ArrowUpRight } from 'lucide-react';

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "Sustainable Practices Reducing Waste in Industrial Production",
            image: "https://i.pinimg.com/1200x/8c/d5/a9/8cd5a9c735c4eca9b32b66d84358cd5a.jpg" 
        },
        {
            id: 2,
            title: "Advanced Robotics Revolutionizing Industrial Workflows",
            image: "https://i.pinimg.com/736x/1a/7d/55/1a7d552fbd57db90cc051f86eb5e78f1.jpg" 
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white font-sans">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-0.5 border border-dashed border-orange-500 rounded-full">
                                <Settings className="text-orange-500 w-3 h-3" />
                            </div>
                            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Latest Blog</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-light text-gray-900 leading-[1.1] tracking-tight">
                            Insights from our <br />
                            <span className="font-bold">latest blogs</span>
                        </h2>
                    </div>

                    <div className="max-w-md lg:mb-2 lg:text-right">
                        <p className="text-gray-400 text-[13px] leading-relaxed">
                            Stay updated with the latest trends, innovations, and expert insights in the manufacturing and industrial sectors
                        </p>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {posts.map((post) => (
                        <div key={post.id} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="w-full aspect-[16/10] rounded-[48px] overflow-hidden mb-6 shadow-sm">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex justify-between items-start gap-6 px-2">
                                <h3 className="text-lg md:text-[22px] font-bold text-gray-900 leading-tight max-w-[85%] group-hover:text-orange-500 transition-colors">
                                    {post.title}
                                </h3>
                                <button className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center text-white shrink-0 group-hover:bg-orange-600 transition-colors">
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Blog;
