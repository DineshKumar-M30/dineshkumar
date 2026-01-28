import React, { useState } from 'react';
import { Settings, ArrowUpRight, Phone, Mail, ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(1); // Default to the second item open as per screenshot

    const faqs = [
        {
            question: "What industries do you serve?",
            answer: "We serve a wide range of industries including automotive, aerospace, manufacturing, energy, and chemicals, providing tailored solutions for each sector."
        },
        {
            question: "How do you ensure product quality?",
            answer: "We implement rigorous quality control measures at every stage of production, ensuring consistency and high standards."
        },
        {
            question: "What sustainability practices do you follow?",
            answer: "We are committed to eco-friendly practices, optimizing energy consumption, reducing waste, and utilizing recyclable materials in our manufacturing processes."
        },
        {
            question: "Do you offer customized solutions?",
            answer: "Yes, we specialize in providing bespoke solutions tailored to meet specific client requirements and operational challenges."
        },
        {
            question: "How do you handle safety in the workplace?",
            answer: "Safety is our top priority. We adhere to strict safety protocols, conduct regular training, and maintain a hazard-free environment for all employees."
        }
    ];

    return (
        <section className="py-20 lg:py-28 bg-white font-sans">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-0.5 border border-dashed border-orange-500 rounded-full">
                                <Settings className="text-orange-500 w-3 h-3" />
                            </div>
                            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">FAQs</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-light text-gray-900 leading-[1.1] tracking-tight">
                            Frequently asked <br />
                            <span className="font-bold">questions</span>
                        </h2>
                    </div>

                    <div className="mb-4">
                        <button className="pl-6 pr-2 py-2 rounded-xl border border-gray-200 text-gray-900 font-bold text-[13px] flex items-center gap-4 hover:border-orange-500 transition-colors bg-white shadow-sm">
                            All FAQs
                            <span className="bg-orange-500 text-white w-9 h-9 flex items-center justify-center rounded-lg">
                                <ArrowUpRight size={16} strokeWidth={2.5} />
                            </span>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Left Image Section */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative aspect-square rounded-[48px] overflow-hidden shadow-2xl group">
                            <img
                                src="https://i.pinimg.com/736x/8d/eb/95/8deb95eee44321a094e8cf6173579e04.jpg"
                                alt="Factory Industries"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Overlay Info */}
                            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-end md:items-center">
                                <div className="flex items-center gap-3 text-white">
                                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center backdrop-blur-sm border border-orange-500/30">
                                        <Phone size={18} className="text-orange-500" />
                                    </div>
                                    <span className="text-[15px] font-medium">+91 1236547890</span>
                                </div>
                                <div className="flex items-center gap-3 text-white">
                                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center backdrop-blur-sm border border-orange-500/30">
                                        <Mail size={18} className="text-orange-500" />
                                    </div>
                                    <span className="text-[15px] font-medium">info@domainname.com</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Accordion Section */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="flex flex-col gap-4">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                                    className={`rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer
                                        ${openIndex === index
                                            ? 'bg-orange-500 text-white shadow-lg'
                                            : 'bg-white border border-gray-100 text-gray-900 hover:border-gray-200'
                                        }
                                    `}
                                >
                                    <div className={`p-6 flex items-center justify-between ${openIndex === index ? '' : ''}`}>
                                        <h3 className={`text-[16px] font-bold ${openIndex === index ? 'text-white' : 'text-gray-800'}`}>
                                            {faq.question}
                                        </h3>
                                        {openIndex === index ? (
                                            <ChevronUp size={20} className="text-white shrink-0" />
                                        ) : (
                                            <ChevronDown size={20} className="text-gray-400 shrink-0" />
                                        )}
                                    </div>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out
                                            ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
                                        `}
                                    >
                                        <div className="px-6 pb-6 text-[14px] leading-relaxed opacity-90 font-light border-t border-white/20 pt-4 mt-[-10px]">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default FAQ;
