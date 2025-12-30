import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/mockData';

const Testimonials = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Voices of Wanderlust</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it. Hear from the community of travelers who have explored the world with us.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow relative group"
                        >
                            <Quote className="absolute top-8 right-8 text-rose-100 w-12 h-12 group-hover:text-rose-200 transition-colors" />

                            <div className="flex items-center space-x-4 mb-6">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md"
                                />
                                <div>
                                    <h4 className="font-bold text-gray-900">{item.name}</h4>
                                    <p className="text-sm text-gray-500">{item.role}</p>
                                </div>
                            </div>

                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        className={`${i < Math.floor(item.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600 italic leading-relaxed">
                                "{item.text}"
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
