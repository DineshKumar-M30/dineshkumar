import React from 'react';

const NewsDetailsContent = () => {
    return (
        <section className="pb-20 pt-48 bg-white font-sans">
            <div className="container mx-auto px-4 max-w-3xl">

                <div className="prose prose-lg text-gray-500 max-w-none animate-slide-up">
                    <p className="mb-8">
                        Uniquely matrix economically sound value through cooperative technology. Competently parallel task fully researched data and enterprise process improvements. Collaboratively expedite quality manufactured products via client-focused results quickly communicate enabled technology and turnkey leadership skills. Uniquely enable accurate supply chains rather than friction technology.
                    </p>

                    <h2 className="text-[#2A4B56] text-3xl md:text-4xl font-bold mb-6 mt-12">
                        Preferred Form of Vitamin D?
                    </h2>

                    <p className="mb-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>

                    <ul className="list-disc pl-5 space-y-3 mb-10 marker:text-[#2A4B56]">
                        <li>Publishing packages and web pageLorem Ipsum as their default</li>
                        <li>Content here, content here', making it look like readable</li>
                        <li>Packages and web pageLorem Ipsum as their default</li>
                    </ul>

                    {/* Quote Block */}
                    <div className="bg-[#F9F8F8] rounded-[30px] p-10 my-12 text-center shadow-sm hover:shadow-md transition-shadow">
                        <p className="text-[#2A4B56] font-bold text-lg md:text-xl italic leading-relaxed">
                            “The first rule of any organic used in a business is that nature applied to an efficient operation will magnify the efficiency. The second is that organic applied to an inefficient operation will magnify the health.”
                        </p>
                    </div>

                    <h2 className="text-[#2A4B56] text-3xl md:text-4xl font-bold mb-6 mt-12">
                        Make perfect organic product with us
                    </h2>

                    <p className="mb-6">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
                    </p>

                    <ol className="list-decimal pl-5 space-y-3 mb-8 marker:text-[#2A4B56] marker:font-bold">
                        <li>Publishing packages and web pageLorem Ipsum as their default</li>
                        <li>Content here, content here', making it look like readable</li>
                        <li>Packages and web pageLorem Ipsum as their default</li>
                        <li>more-or-less normal distribution of letters</li>
                    </ol>

                </div>

            </div>
        </section>
    );
};

export default NewsDetailsContent;
