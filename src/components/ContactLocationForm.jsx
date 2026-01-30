import React from 'react';
import { MapPin } from 'lucide-react';

const ContactLocationForm = () => {
    return (
        <section className="font-sans">
            {/* Part 1: Leaf Banner with Overlay Card */}
            <div className="container mx-auto px-4 max-w-6xl mb-20">
                <div className="relative w-full md:h-[500px] rounded-[30px] md:rounded-[50px] overflow-hidden flex flex-col md:block">
                    {/* Leaf Background - on mobile it takes height, on desktop absolute full */}
                    <div className="h-[300px] md:absolute md:inset-0 md:h-full w-full">
                        <img
                            src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2074&auto=format&fit=crop" // Green leaf texture
                            alt="Green Leaf Texture"
                            className="w-full h-full object-cover animate-fade-in-scale"
                        />
                    </div>

                    {/* Address Card - Floating on Right (Desktop) / Overlapping (Mobile) */}
                    <div className="relative md:absolute top-auto md:top-1/2 right-auto md:right-12 lg:right-24 md:transform md:-translate-y-1/2 bg-white rounded-[30px] md:rounded-[40px] p-8 md:p-12 shadow-xl max-w-md w-full mx-auto md:mx-0 mt-[-60px] md:mt-0 mb-8 md:mb-0 z-10 animate-slide-up">
                        <span className="font-handwriting text-[#7DAF56] text-3xl mb-2 block italic text-font-cursive">
                            Location
                        </span>
                        <h2 className="text-[#2A4B56] text-4xl font-bold mb-6">
                            Our Address
                        </h2>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            We are located in the most ecologically clean region of Belarus.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 flex items-center justify-center text-[#7DAF56] shrink-0">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-[#2A4B56] font-bold">Office:</h4>
                                    <p className="text-gray-500 text-sm">Kletsk, Avetisova st.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 flex items-center justify-center text-[#7DAF56] shrink-0">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h4 className="text-[#2A4B56] font-bold">Production:</h4>
                                    <p className="text-gray-500 text-sm">Kletsk, Nagdalyana st.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Part 2: Contact Form - Completely Separate Below */}
            <div className="container mx-auto px-4 max-w-4xl pb-20 animate-fade-in-up">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                    <div className="col-span-2 md:col-span-1">
                        <label className="block text-[#2A4B56] font-bold text-sm mb-3">Full Name*</label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-white rounded-2xl border border-gray-200 px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#7DAF56] placeholder-gray-300 italic"
                        />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label className="block text-[#2A4B56] font-bold text-sm mb-3">Your Email*</label>
                        <input
                            type="email"
                            placeholder="example@yourmail.com"
                            className="w-full bg-white rounded-2xl border border-gray-200 px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#7DAF56] placeholder-gray-300 italic"
                        />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label className="block text-[#2A4B56] font-bold text-sm mb-3">Company</label>
                        <input
                            type="text"
                            placeholder="Your Company Name"
                            className="w-full bg-white rounded-2xl border border-gray-200 px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#7DAF56] placeholder-gray-300 italic"
                        />
                    </div>
                    <div className="col-span-2 md:col-span-1">
                        <label className="block text-[#2A4B56] font-bold text-sm mb-3">Subject*</label>
                        <input
                            type="text"
                            placeholder="How can we help?"
                            className="w-full bg-white rounded-2xl border border-gray-200 px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#7DAF56] placeholder-gray-300 italic"
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="block text-[#2A4B56] font-bold text-sm mb-3">Message*</label>
                        <textarea
                            rows="6"
                            placeholder="Hello there!"
                            className="w-full bg-white rounded-2xl border border-gray-200 px-6 py-4 focus:outline-none focus:ring-1 focus:ring-[#7DAF56] resize-none placeholder-gray-300 italic"
                        ></textarea>
                    </div>

                    <div className="col-span-2 mt-4">
                        <button type="button" className="bg-[#2A4B56] text-white font-bold py-4 px-12 rounded-2xl hover:bg-[#1e363e] transition-colors shadow-lg">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactLocationForm;
