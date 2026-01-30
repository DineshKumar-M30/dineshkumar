import React from 'react';
import { ShoppingCart, Leaf, PhoneCall } from 'lucide-react';

const AboutServices = () => {
    const services = [
        {
            icon: <ShoppingCart className="w-8 h-8 text-[#2A4B56]" />,
            title: 'Availability',
            description: 'Our production in all supermarkets',
        },
        {
            icon: <Leaf className="w-8 h-8 text-[#2A4B56]" />,
            title: '100% Freshness',
            description: 'We are local producers',
        },
        {
            icon: <PhoneCall className="w-8 h-8 text-[#2A4B56]" />,
            title: 'Support',
            description: 'We are always ready to answer all questions',
        }
    ];

    return (
        <section className="py-20 bg-[#F9F9F9] font-sans -mt-10 pb-32">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[30px] p-10 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className="w-16 h-16 bg-[#F4F4F4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#7DAF56] transition-colors duration-300">
                                {/* Clone element to add hover class if possible, or just style parent */}
                                <div className="text-[#2A4B56] group-hover:text-white transition-colors duration-300">
                                    {service.icon}
                                </div>
                            </div>
                            <h3 className="text-[#2A4B56] font-bold text-xl mb-3 group-hover:text-[#7DAF56] transition-colors">{service.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutServices;
