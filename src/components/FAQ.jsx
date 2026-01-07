import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
    {
        question: "Do you offer financing options for purchasing classic cars?",
        answer: "Yes, we partner with specialized vintage car lenders to offer competitive financing rates for our qualified buyers."
    },
    {
        question: "Are the showcased cars fully restored or in original condition?",
        answer: "Our collection features a mix of both. Each listing clearly specifies whether the vehicle is a survivor (original) or has undergone a partial/full restoration."
    },
    {
        question: "Do you assist with shipping for purchased classic cars?",
        answer: "Absolutely. We work with trusted enclosed carriers to ensure your vehicle arrives safely anywhere in the world."
    },
    {
        question: "Are your vintage cars certified or inspected for authenticity?",
        answer: "Every car undergoes a rigorous 150-point inspection and comes with a certificate of authenticity and historical documentation where available."
    },
    {
        question: "Can I request additional photos before purchasing?",
        answer: "Yes, we welcome and encourage requests for more detailed photographs or videos of any vehicle in our inventory. Contact our team, and we'll arrange the necessary details for your peace of mind."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(4); // Open the last one by default as in reference (or similar)

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section">
            <div className="container faq-container">
                <div className="faq-left">
                    <h2 className="faq-title">FAQ</h2>
                    <button className="btn-outline btn-ask">Ask a Question &#8599;</button>
                </div>

                <div className="faq-right">
                    <div className="faq-list">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleFAQ(index)}
                            >
                                <div className="faq-header">
                                    <h3 className="faq-question">{faq.question}</h3>
                                    <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
                                </div>
                                <div className="faq-body">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
