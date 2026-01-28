import React, { useEffect, useState } from 'react';
import { ShieldCheck, ArrowUpRight, Phone, Mail, ChevronDown, ChevronUp, Clock, Target, CheckCircle2, TrendingUp, Search, Zap, Layers } from 'lucide-react';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [openFaqIndex, setOpenFaqIndex] = useState(1);

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

    const strategyItems = [
        { icon: <Search strokeWidth={1} />, title: "Needs Assessment" },
        { icon: <Clock strokeWidth={1} />, title: "Timeline and Milestones" },
        { icon: <Target strokeWidth={1} />, title: "Feasibility and ROI" },
        { icon: <Zap strokeWidth={1} />, title: "Technology Selection" },
        { icon: <SettingsIcon strokeWidth={1} />, title: "Process Optimization" }, // Placeholder for 'Process' icon
        { icon: <TrendingUp strokeWidth={1} />, title: "Scalability Planning" },
    ];

    // Custom icon for Process Optimization since 'Settings' is used but let's use a specific one
    function SettingsIcon(props) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        );
    }

    return (
        <div className="font-sans bg-white">

            {/* Hero Section */}
            <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://i.pinimg.com/736x/c2/6f/68/c26f68ef324a7b99a552da4aeac745bc.jpg"
                        alt="Factory Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
                <div className="relative z-10 text-center text-white px-4 mt-16">
                    <h1 className="text-4xl md:text-5xl lg:text-[64px] font-light mb-4">
                        Custom Manufacturing <span className="font-bold">Solution</span>
                    </h1>
                    <div className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-300">
                        <span>Home</span>
                        <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                        <span>Services</span>
                        <span className="w-1 h-1 bg-orange-500 rounded-full"></span>
                        <span className="text-orange-500">Custom Manufacturing Solution</span>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-20 lg:py-28">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">

                    {/* Sidebar */}
                    <aside className="w-full lg:w-[28%] flex flex-col gap-12">
                        {/* Services List */}
                        <div className="bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden p-2">
                            <div className="bg-orange-500 text-white py-4 px-6 rounded-t-[20px] rounded-b-lg mb-2 mx-1 mt-1 text-center font-bold">
                                Services Category
                            </div>
                            <div className="flex flex-col gap-1 p-2">
                                {[
                                    "Custom Manufacturing Solution",
                                    "Industrial Automation And Robotics",
                                    "Product Design And Prototyping",
                                    "Equipment Maintenance Support",
                                    "Research And Development"
                                ].map((item, idx) => (
                                    <a key={idx} href="#" className={`flex items-center justify-between px-5 py-4 rounded-xl text-[14px] font-medium transition-all duration-200 
                                        ${idx === 0
                                            ? 'bg-gray-50 text-gray-900 shadow-sm border border-gray-100'
                                            : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900 border border-transparent hover:border-gray-100'
                                        }`}>
                                        {item}
                                        <ArrowUpRight size={16} className={idx === 0 ? "text-orange-500" : "text-gray-400"} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Help Card */}
                        <div className="relative rounded-[32px] overflow-hidden aspect-[4/5] p-8 flex flex-col justify-end">
                            <img
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                                alt="Gears"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/80"></div>

                            <div className="relative z-10 text-white">
                                <div className="flex items-center gap-2 mb-6">
                                    <ShieldCheck className="text-orange-500" size={24} />
                                    <span className="font-bold text-lg">Toplax.</span>
                                </div>
                                <h3 className="text-3xl font-light leading-tight mb-4">
                                    Need <span className="font-bold">help!</span>
                                </h3>
                                <p className="text-gray-400 text-xs leading-relaxed mb-8">
                                    Got questions or need assistance with your industry needs?
                                </p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                                            <Phone size={16} className="text-orange-500" />
                                        </div>
                                        <span className="text-sm font-bold">+1 840 841 256</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/30">
                                            <Mail size={16} className="text-orange-500" />
                                        </div>
                                        <span className="text-sm font-bold">info@domain.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="w-full lg:w-[72%]">

                        {/* Main Image */}
                        <div className="w-full rounded-[48px] overflow-hidden mb-12 h-[450px]">
                            <img
                                src="https://i.pinimg.com/1200x/5c/1a/1d/5c1a1d35a5549ebb7138469f4001931a.jpg"
                                alt="Robotics"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-16">
                            <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                                Our business coaching services are designed to help entrepreneurs and professionals unlock their full potential, overcome challenges, and achieve sustainable growth. We provide tailored strategies and expert insights to improve leadership skills, enhance team performance, and streamline business operations. Whether you're launching a startup or scaling an established business, our coaching empowers you to make informed decisions, set clear goals, and drive meaningful results. With a focus on both personal development and business success, we guide you toward building a thriving, purpose-driven enterprise.
                            </p>
                            <p className="text-gray-500 text-[15px] leading-relaxed">
                                Through expert guidance, we focus on refining your vision, enhancing operations, and unlocking new opportunities for growth. With a collaborative approach, we empower you to make confident decisions and build a sustainable, thriving business.
                            </p>
                        </div>

                        {/* Why Choose Section */}
                        <div className="mb-20">
                            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-12">
                                Why choose <span className="font-bold">robotics services</span>
                            </h2>
                            <p className="text-gray-500 text-[15px] mb-12">
                                Through expert guidance, we focus on refining your vision, enhancing operations, and unlocking new opportunities for growth. With a collaborative approach, we empower you to make confident decisions and build a sustainable, thriving business.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 border-b border-gray-100 pb-12 mb-20">

                                {/* Item 1 - Blast Furnace Icon */}
                                <div className="flex flex-col gap-5">
                                    <div className="mb-1">
                                        <svg width="48" height="48" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14 42H36L32 18H18L14 42Z" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M18 18V12C18 9.79086 19.7909 8 22 8H28C30.2091 8 32 9.79086 32 12V18" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M22 8V4" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M28 8V4" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M25 14H25.01" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M36 12C38 10 40 10 42 12" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M8 12C10 10 12 10 14 12" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Enhanced Efficiency</h3>
                                    <p className="text-gray-500 text-[15px] leading-relaxed font-light">
                                        Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.
                                    </p>
                                </div>

                                {/* Item 2 - Factory Complex Icon */}
                                <div className="flex flex-col gap-5">
                                    <div className="mb-1">
                                        <svg width="48" height="48" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 42H44" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M10 42V24L18 18V42" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M18 42V30L26 24V42" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M26 42V18L34 12V42" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M34 42V24L40 18V42" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M36 12C38 10 40 8 42 10" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <rect x="13" y="26" width="3" height="3" stroke="#F97316" strokeWidth="1.2" />
                                            <rect x="21" y="32" width="3" height="3" stroke="#F97316" strokeWidth="1.2" />
                                            <rect x="29" y="22" width="3" height="3" stroke="#F97316" strokeWidth="1.2" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Enhanced Efficiency</h3>
                                    <p className="text-gray-500 text-[15px] leading-relaxed font-light">
                                        Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.
                                    </p>
                                </div>

                                {/* Item 3 - Conveyor/Production Icon */}
                                <div className="flex flex-col gap-5">
                                    <div className="mb-1">
                                        <svg width="48" height="48" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8 36H42" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx="12" cy="39" r="3" stroke="#F97316" strokeWidth="1.2" />
                                            <circle cx="25" cy="39" r="3" stroke="#F97316" strokeWidth="1.2" />
                                            <circle cx="38" cy="39" r="3" stroke="#F97316" strokeWidth="1.2" />
                                            <path d="M13 36V20C13 18.8954 13.8954 18 15 18H17C18.1046 18 19 18.8954 19 20V36" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M21 36V24C21 22.8954 21.8954 22 23 22H25C26.1046 22 27 22.8954 27 24V36" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 18V14" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Enhanced Efficiency</h3>
                                    <p className="text-gray-500 text-[15px] leading-relaxed font-light">
                                        Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.
                                    </p>
                                </div>

                                {/* Item 4 - Industrial Plant Icon */}
                                <div className="flex flex-col gap-5">
                                    <div className="mb-1">
                                        <svg width="48" height="48" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 42V20L18 16V42" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M26 42V12L34 8V42" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M38 42V24L44 20V42" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M6 42H44" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" />
                                            <path d="M18 24H26" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" />
                                            <path d="M34 20H38" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" />
                                            <rect x="13" y="24" width="3" height="3" stroke="#F97316" strokeWidth="1.2" />
                                            <rect x="13" y="30" width="3" height="3" stroke="#F97316" strokeWidth="1.2" />
                                            <rect x="29" y="16" width="3" height="3" stroke="#F97316" strokeWidth="1.2" />
                                            <rect x="29" y="22" width="3" height="3" stroke="#F97316" strokeWidth="1.2" />
                                            <path d="M34 8L30 6" stroke="#F97316" strokeWidth="1.2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">Enhanced Efficiency</h3>
                                    <p className="text-gray-500 text-[15px] leading-relaxed font-light">
                                        Robotics streamline complex tasks, reducing production time and minimizing downtime, which leads to higher output and faster delivery.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Planning & Strategy */}
                        <div className="mb-20">
                            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                                Planning & <span className="font-bold">strategy</span>
                            </h2>
                            <p className="text-gray-500 text-[15px] mb-12 max-w-2xl">
                                Our Industrial Automation and Robotics planning and strategy services focus on designing tailored automation solutions that align with your business goals.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-4 mb-16">
                                {strategyItems.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                                            {React.cloneElement(item.icon, { size: 14, strokeWidth: 2 })}
                                        </div>
                                        <span className="text-[14px] font-medium text-gray-700">{item.title}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="h-[300px] rounded-[32px] overflow-hidden">
                                    <img
                                        src="https://i.pinimg.com/736x/cd/75/14/cd7514e63bb4d18b31e50f5efc90a395.jpg"
                                        alt="Robotic Arm 1"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="h-[300px] rounded-[32px] overflow-hidden">
                                    <img
                                        src="https://i.pinimg.com/1200x/8b/0d/aa/8b0daaa85154f73367a1348ce340db96.jpg"
                                        alt="Robotic Arm 2"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <div className="mb-12">
                            <div className="mb-12">
                                <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-2">
                                    Frequently asked <span className="font-bold">questions</span>
                                </h2>
                            </div>

                            <div className="flex flex-col gap-4">
                                {faqs.map((faq, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setOpenFaqIndex(index === openFaqIndex ? -1 : index)}
                                        className={`rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer
                                            ${openFaqIndex === index
                                                ? 'bg-orange-500 text-white shadow-lg'
                                                : 'bg-white border border-gray-100 text-gray-900 hover:border-gray-200'
                                            }
                                        `}
                                    >
                                        <div className="p-6 flex items-center justify-between">
                                            <h3 className={`text-[16px] font-bold ${openFaqIndex === index ? 'text-white' : 'text-gray-800'}`}>
                                                {faq.question}
                                            </h3>
                                            {openFaqIndex === index ? (
                                                <ChevronUp size={20} className="text-white shrink-0" />
                                            ) : (
                                                <ChevronDown size={20} className="text-gray-400 shrink-0" />
                                            )}
                                        </div>

                                        <div
                                            className={`overflow-hidden transition-all duration-300 ease-in-out
                                                ${openFaqIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
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

        </div>
    );
};

export default Services;
