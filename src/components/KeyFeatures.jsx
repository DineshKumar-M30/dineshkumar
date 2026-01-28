import React from 'react';
import { Settings, Factory, ShieldCheck, Flame, Boxes } from 'lucide-react';

const KeyFeatures = () => {
    return (
        <section className="py-20 lg:py-28 bg-white font-sans">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

                {/* Header */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
                    <div className="max-w-xl">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="p-0.5 border border-dashed border-orange-500 rounded-full">
                                <Settings className="text-orange-500 w-3 h-3" />
                            </div>
                            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-500 uppercase">Our Key Feature</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-light text-gray-900 leading-[1.1] tracking-tight">
                            Core strengths in <br />
                            <span className="font-bold">industrial innovation</span>
                        </h2>
                    </div>
                    <div className="max-w-md text-gray-400 text-[14px] leading-relaxed lg:text-right">
                        Our expertise in industrial innovation combines advanced technology, sustainable practices, and a skilled workforce to deliver efficient, future-ready solutions that drive industry progress.
                    </div>
                </div>

                {/* Content Grid */}
                <div className="border border-gray-100 rounded-[40px] overflow-hidden shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* Item 1 */}
                        <div className="p-12 md:p-16 border-b border-gray-100 md:border-r">
                            <div className="mb-6">
                                <Flame strokeWidth={1} className="w-10 h-10 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Advanced Technology Integration
                            </h3>
                            <p className="text-[14px] text-gray-400 leading-relaxed font-light">
                                We integrate cutting-edge technologies into every aspect of our operations, enhancing efficiency, precision, and innovation to deliver superior industrial solutions.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="p-12 md:p-16 border-b border-gray-100">
                            <div className="mb-6">
                                <Boxes strokeWidth={1} className="w-10 h-10 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Uncompromising Quality Standards
                            </h3>
                            <p className="text-[14px] text-gray-400 leading-relaxed font-light">
                                We uphold the highest quality standards across all processes, ensuring consistency, reliability, and excellence in every product and service we deliver.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className="p-12 md:p-16 border-b md:border-b-0 border-gray-100 md:border-r">
                            <div className="mb-6">
                                <Factory strokeWidth={1} className="w-10 h-10 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                Continuous Innovation and R&D
                            </h3>
                            <p className="text-[14px] text-gray-400 leading-relaxed font-light">
                                We prioritize ongoing research and development to drive continuous innovation, staying ahead of industry trends and creating advanced solutions that meet evolving market demands.
                            </p>
                        </div>

                        {/* Item 4 - Image */}
                        <div className="relative min-h-[300px]">
                            <img
                                src="https://i.pinimg.com/736x/8d/09/07/8d09071f08c3d5551c5186f0873d2398.jpg"
                                alt="Industrial Work"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default KeyFeatures;
