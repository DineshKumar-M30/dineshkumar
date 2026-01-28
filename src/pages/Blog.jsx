import React, { useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const blogPosts = [
        {
            title: "Sustainable Practices Reducing Waste in Industrial Production",
            image: "https://i.pinimg.com/736x/2f/0e/79/2f0e79ddee896ce49ebcc2c3ef9df912.jpg", // Industrial workers
            link: "#"
        },
        {
            title: "Advanced Robotics Revolutionizing Industrial Workflows",
            image: "https://i.pinimg.com/1200x/da/87/1e/da871ea1b9d698998747ffed63ff2a3f.jpg", // Robotic Arms (matching services page)
            link: "#"
        },
        {
            title: "Top Benefits of the Robotics in Manufacturing",
            image: "https://i.pinimg.com/736x/de/e9/e3/dee9e366cbf872a23ef7abacb066bf27.jpg", // Gears/Tech
            link: "#"
        },
        {
            title: "Leveraging Data Analytics for Smarter Production",
            image: "https://i.pinimg.com/1200x/e6/e1/f8/e6e1f89172ad616830265790fe377f0b.jpg", // Data/Screen
            link: "#"
        },
        {
            title: "Reducing Operational Costs Through Automation",
            image: "https://i.pinimg.com/736x/a2/37/dc/a237dcc9c4a042061903e10e9c4c2dfd.jpg", // Factory Line
            link: "#"
        },
        {
            title: "The Advantages of Customized Manufacturing Solutions",
            image: "https://i.pinimg.com/736x/c1/67/2c/c1672c68ae344458b702fef75c368269.jpg", // Metal welding/custom
            link: "#"
        }
    ];

    return (
        <div className="font-sans bg-white pb-32">

            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-start overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://i.pinimg.com/736x/c2/6f/68/c26f68ef324a7b99a552da4aeac745bc.jpg"
                        alt="Factory Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 text-white px-6 md:px-12 lg:px-20 mt-16 max-w-[1440px] mx-auto w-full">
                    <h1 className="text-4xl md:text-5xl lg:text-[64px] font-light mb-4 text-left">
                        Latest Post
                    </h1>
                    <div className="flex items-center gap-2 text-sm md:text-base text-gray-300">
                        <span>Home</span>
                        <span className="text-orange-500">•</span>
                        <span className="text-orange-500">Blog</span>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 lg:py-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="group flex flex-col h-full bg-white">
                            {/* Image Container with specific rounding */}
                            <div className="aspect-square w-full overflow-hidden rounded-[32px] mb-8 relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Optional: Subtle overlay on hover if needed */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1">
                                <h3 className="text-[22px] font-medium text-gray-900 leading-tight mb-4 pr-4">
                                    {post.title}
                                </h3>

                                <a href={post.link} className="inline-flex items-center gap-2 text-orange-500 text-sm font-bold tracking-wide mt-auto hover:text-orange-600 transition-colors uppercase">
                                    Read More
                                    <ArrowUpRight size={16} strokeWidth={2.5} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Blog;
