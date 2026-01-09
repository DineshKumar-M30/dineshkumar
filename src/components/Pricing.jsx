import React, { useState } from 'react';

const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 shrink-0">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
);

const CrossIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-red-500 shrink-0">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const WindowsIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M0 3.449L9.75 2.1v9.451H0v-8.102zm10.949-1.432L24 0v11.551H10.949V2.017zM0 12.45h9.75v8.102L0 19.201V12.45zm10.949 0H24v11.55l-13.051-1.983V12.45z" />
    </svg>
);

const AndroidIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4055-6.1067l2.256-3.9069c.1706-.2947.0734-.6721-.2191-.8408-.2929-.1686-.6701-.0697-.8405.223l-2.2789 3.9472c-1.9366-.8824-4.148-1.3735-6.516-1.3735-2.4277 0-4.6908.5134-6.6625 1.4326l-2.3168-4.0125c-.1705-.2929-.5476-.3918-.8404-.223-.2927.1687-.3897.5461-.2192.8408l2.2952 3.9748c-3.134 1.7063-5.2644 4.8878-5.5298 8.6041h26.357c-.2506-3.6669-2.3486-6.819-5.485-8.6658" />
    </svg>
);

const AppleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 384 512" fill="currentColor">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
);

const PricingCard = ({ title, duration, features, price, gradientFrom, gradientTo, buttonGradientFrom, buttonGradientTo, headerShape, footerShape, containerRounded }) => {
    return (
        <div className={`bg-white ${containerRounded} overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-300 relative flex flex-col items-stretch`}>
            {/* Header with specific border-radius shape */}
            <div
                className={`py-6 min-h-[5rem] flex items-center justify-center text-white font-bold text-xl uppercase tracking-wider relative z-20 ${headerShape}`}
                style={{ background: `linear-gradient(to right, ${gradientFrom}, ${gradientTo})` }}
            >
                {title}
            </div>

            {/* Content Body */}
            <div className="bg-white relative z-10 pt-8 pb-4 px-8 flex-1 flex flex-col">
                <div className="text-center mb-6">
                    <h3 className="text-4xl font-bold text-gray-800">{duration}</h3>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                    {features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-gray-600 text-[15px] font-medium">
                            {feature.included ? <CheckIcon /> : <CrossIcon />}
                            <span className={feature.included ? "" : "text-gray-400"}>{feature.text}</span>
                        </li>
                    ))}
                </ul>

                <div className="text-center mt-auto mb-6">
                    <div className="text-5xl font-black text-[#1e293b] flex items-baseline justify-center gap-1">
                        {price} <span className="text-3xl font-bold text-gray-500">₽</span>
                    </div>
                </div>
            </div>

            {/* Footer Button with specific border-radius shape - Full width block */}
            <button
                className={`${footerShape} w-full py-6 text-white font-bold text-lg flex items-center justify-center gap-2 hover:brightness-110 transition-all cursor-pointer relative z-20`}
                style={{ background: `linear-gradient(to right, ${buttonGradientFrom}, ${buttonGradientTo})` }}
            >
                Purchase <ArrowRightIcon />
            </button>
        </div>
    );
};

const Pricing = () => {
    const [platform, setPlatform] = useState('windows');

    const featuresRegular = [
        { text: "Full cheat functionality", included: true },
        { text: "Monthly updates", included: true },
        { text: "Technical support", included: true },
        { text: "Anti-Ban", included: true },
        { text: "Improved optimization", included: false },
        { text: "Run on other phones", included: false },
        { text: "DPI+, ASN, SKK", included: false },
    ];

    const featuresStandard = [
        { text: "Full cheat functionality", included: true },
        { text: "Constant updates", included: true },
        { text: "24/7 Support", included: true },
        { text: "Improved Anti-Ban", included: true },
        { text: "Improved optimization", included: true },
        { text: "Run on other phones", included: true },
        { text: "DPI+, ASN, SKK", included: false },
    ];

    const featuresPro = [
        { text: "Full cheat functionality + NEW", included: true },
        { text: "All updates + BETA test", included: true },
        { text: "24/7 Support", included: true },
        { text: "Strongest Anti-Ban", included: true },
        { text: "Maximum optimization", included: true },
        { text: "Run on other phones", included: true },
        { text: "DPI+, ASN, SKK", included: true },
    ];

    return (
        <section id="pricing" className="bg-white py-20 relative overflow-hidden">
            {/* Background styles */}
            <div className="container mx-auto px-4 relative z-30">

                {/* Title Section */}
                <div className="text-center mb-12 relative">
                    <div className="flex items-center justify-center gap-4">
                        <span className="w-8 h-1.5 bg-orange-500 transform -rotate-45 rounded-full"></span>
                        <h2 className="text-5xl font-black text-[#1e293b] uppercase tracking-wide">PRICING</h2>
                        <span className="w-8 h-1.5 bg-orange-500 transform -rotate-45 rounded-full"></span>
                    </div>
                </div>

                {/* Platform Toggle */}
                <div className="flex justify-center items-center flex-wrap gap-6 mb-16">
                    {/* Platform Toggle - Separated Buttons for Mobile/Desktop match */}
                    <div className="flex justify-center flex-wrap gap-4 md:gap-6">
                        <button
                            onClick={() => setPlatform('windows')}
                            className={`bg-white px-6 md:px-8 py-3 rounded-2xl shadow-sm flex items-center gap-2 font-bold transition-all border ${platform === 'windows' ? 'border-transparent ring-2 ring-gray-100 text-gray-800' : 'border-gray-100 text-gray-400 hover:text-gray-600'}`}
                        >
                            <WindowsIcon /> <span className="text-sm md:text-base">Windows</span>
                        </button>

                        <button
                            onClick={() => setPlatform('android')}
                            className={`bg-white px-6 md:px-8 py-3 rounded-2xl shadow-sm flex items-center gap-2 font-bold transition-all border ${platform === 'android' ? 'border-transparent ring-2 ring-gray-100 text-gray-800' : 'border-gray-100 text-gray-400 hover:text-gray-600'}`}
                        >
                            <AndroidIcon /> <span className="text-sm md:text-base">Android</span>
                        </button>
                    </div>

                    {/* iOS Button - separate */}
                    <button className="bg-[#00ACFF] text-white px-8 py-3 rounded-2xl font-bold flex items-center gap-2 hover:bg-[#009be6] transition-colors shadow-lg shadow-blue-200">
                        <AppleIcon /> ios
                    </button>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <PricingCard
                        title="BASIC"
                        duration="1 Month"
                        features={featuresRegular}
                        price="649"
                        gradientFrom="#00E5FF"
                        gradientTo="#009EFF"
                        buttonGradientFrom="#FF9900"
                        buttonGradientTo="#FFB800"
                        headerShape="rounded-br-none rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-none"
                        footerShape="rounded-bl-[4rem] rounded-br-none"
                        containerRounded="rounded-br-none rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-none"
                    />
                    <PricingCard
                        title="STANDARD"
                        duration="3 Months"
                        features={featuresStandard}
                        price="1 499"
                        gradientFrom="#D946EF"
                        gradientTo="#A855F7"
                        buttonGradientFrom="#FF9900"
                        buttonGradientTo="#FFB800"
                        headerShape="rounded-br-none rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-none"
                        footerShape="rounded-bl-[4rem] rounded-br-none"
                        containerRounded="rounded-br-none rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-none"
                    />
                    <PricingCard
                        title="PRO VERSION"
                        duration="Lifetime"
                        features={featuresPro}
                        price="2 899"
                        gradientFrom="#FF5E5E"
                        gradientTo="#FF8C42"
                        buttonGradientFrom="#FF9900"
                        buttonGradientTo="#FFB800"
                        headerShape="rounded-br-none rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-none"
                        footerShape="rounded-bl-[4rem] rounded-br-none"
                        containerRounded="rounded-br-none rounded-tr-[4rem] rounded-bl-[4rem] rounded-br-none"
                    />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
