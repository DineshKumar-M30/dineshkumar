import React, { useEffect } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans bg-white">

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
                        Contact <span className="font-bold">us</span>
                    </h1>
                    <div className="flex items-center gap-2 text-sm md:text-base text-gray-300">
                        <span>Home</span>
                        <div className="w-1 h-1 bg-orange-500 rounded-full"></div>
                        <span className="text-orange-500">Contact Us</span>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="relative py-20 lg:py-28 bg-[#F8F9FB] overflow-hidden">
                {/* Background Pattern Overlay */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>

                <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                        {/* Left Info Column */}
                        <div className="lg:w-5/12 pt-8">
                            <span className="flex items-center gap-2 text-orange-500 text-xs font-bold tracking-[0.2em] uppercase mb-4">
                                <span className="p-1 border border-orange-500 rounded-full bg-orange-500"></span>
                                Contact Us
                            </span>
                            <h2 className="text-4xl lg:text-[42px] leading-tight text-gray-900 mb-6 font-light">
                                Get in touch <span className="font-bold">with us</span>
                            </h2>
                            <p className="text-gray-500 text-[15px] leading-relaxed mb-12">
                                Reach out for any inquiries, support, or to discuss how we can meet your industrial needs.
                            </p>

                            <div className="flex flex-col gap-8">
                                {/* Phone */}
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center shrink-0 text-white shadow-lg shadow-orange-500/30">
                                        <Phone size={20} fill="currentColor" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Contact</h4>
                                        <p className="text-gray-500 text-sm font-light">+1.809.120.670</p>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center shrink-0 text-white shadow-lg shadow-orange-500/30">
                                        <Mail size={20} fill="currentColor" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">E-mail</h4>
                                        <p className="text-gray-500 text-sm font-light">info@domainname.com</p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center shrink-0 text-white shadow-lg shadow-orange-500/30">
                                        <MapPin size={20} fill="currentColor" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900 mb-1">Our Address</h4>
                                        <p className="text-gray-500 text-sm font-light max-w-[200px]">37 San Juan Lane Graaf Florisstraat 22A, 3021 CH</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Column */}
                        <div className="lg:w-7/12">
                            <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-sm">
                                <h3 className="text-4xl text-gray-900 mb-10 font-light">
                                    Contact <span className="font-bold">me</span>
                                </h3>

                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <input
                                                type="text"
                                                placeholder="Enter first name"
                                                className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <input
                                                type="text"
                                                placeholder="Enter last name"
                                                className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <input
                                            type="email"
                                            placeholder="Enter your e-mail"
                                            className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <input
                                            type="tel"
                                            placeholder="Enter your phone no."
                                            className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <textarea
                                            rows="5"
                                            placeholder="Write Message"
                                            className="w-full px-6 py-4 rounded-xl border border-gray-100 bg-white text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="button"
                                        className="px-8 py-3.5 rounded-lg border border-orange-500 text-gray-900 font-bold text-sm bg-transparent hover:bg-orange-500 hover:text-white transition-all duration-300"
                                    >
                                        Submit Message
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[400px] w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.5464673673553!2d-0.12167428407421876!3d51.50320701882414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2suk!4v1655118746761!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(0%)' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </section>

        </div>
    );
};

export default Contact;
