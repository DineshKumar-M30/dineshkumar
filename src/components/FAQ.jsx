import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`bg-white rounded-xl mb-4 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 ${isOpen ? 'shadow-md' : ''}`}>
            <button
                onClick={onClick}
                className="w-full text-left px-8 py-6 flex items-center justify-between gap-4 select-none"
            >
                <span className={`text-[17px] transition-colors duration-300 ${isOpen ? 'font-bold text-gray-800' : 'font-semibold text-gray-700'}`}>
                    {question}
                </span>
                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full transition-colors">
                    {isOpen ? (
                        <svg className="w-5 h-5 text-[#00ACFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
                    ) : (
                        <svg className="w-6 h-6 text-[#00ACFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"></path></svg>
                    )}
                </span>
            </button>
            <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                    <div className="px-8 pb-8 pt-0">
                        <div className="border-l-2 border-[#00ACFF] pl-4 ml-1">
                            <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
                                {answer}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            q: "What guarantees do we have?",
            a: "We are official dealers of this cheat. A huge number of people trust us. Also, you can see the screenshots of cheats presented above."
        },
        {
            q: "How are cheats installed?",
            a: "Installation is simple and comes with a detailed video guide. Once purchased, you receive instant access to the loader, instructions, and support."
        },
        {
            q: "What will I get after payment?",
            a: "You receive the software key, detailed installation instructions, access to the user panel, and our 24/7 technical support."
        },
        {
            q: "What are DPI+, ASN, SKK?",
            a: "These are advanced modules for bypassing anti-cheat protections. SKK (Security Kernel Kit) ensures kernel-level safety, while DPI+ helps mask traffic."
        },
        {
            q: "Do cheats affect FPS in the game?",
            a: "Our software is highly optimized to minimize impact on game performance, ensuring a smooth experience with minimal FPS drop."
        }
    ];

    return (
        <section id="faq" className="bg-[#f2f6fc] py-24 relative">
            <div className="container mx-auto px-4 max-w-[800px]">
                {/* Title */}
                <div className="flex items-center justify-center gap-5 mb-16">
                    <span className="w-9 h-1.5 bg-orange-500 transform -rotate-[35deg] rounded-full"></span>
                    <h2 className="text-4xl md:text-5xl font-black text-[#1e293b] uppercase tracking-wide">FAQ</h2>
                    <span className="w-9 h-1.5 bg-[#00ACFF] transform -rotate-[35deg] rounded-full mt-2"></span>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <FAQItem
                            key={i}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={openIndex === i}
                            onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="/support" className="text-[#00ACFF] font-bold text-lg hover:text-blue-600 border-b-2 border-[#00ACFF]/30 hover:border-[#00ACFF] transition-all pb-1">
                        I have a question
                    </a>
                </div>
            </div>
        </section>
    );
}
export default FAQ;
