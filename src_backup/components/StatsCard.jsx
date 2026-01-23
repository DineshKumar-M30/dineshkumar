import React, { useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

const AnimatedCounter = ({ value }) => {
    // Parse numeric value from string (e.g., "$89,000" -> 89000, "40,689" -> 40689)
    const numericValue = parseFloat(value.toString().replace(/[$,]/g, ''));
    const isCurrency = value.toString().includes('$');
    const hasComma = value.toString().includes(',');

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => {
        let formatted = Math.round(latest);
        if (hasComma) {
            return formatted.toLocaleString();
        }
        return formatted;
    });

    useEffect(() => {
        const controls = animate(count, numericValue, { duration: 1.5, ease: "easeOut" });
        return controls.stop;
    }, [numericValue]);

    return (
        <span className="text-[28px] font-bold text-[#202224] leading-none">
            {isCurrency && "$"}
            <motion.span>{rounded}</motion.span>
        </span>
    );
};

const StatsCard = ({ title, value, icon: Icon, iconBgColor, iconColor, trend, trendValue, trendLabel }) => {
    const isPositive = trend === 'up';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-[14px] shadow-sm flex flex-col justify-between h-[161px] hover:shadow-md transition-shadow duration-300"
        >
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <span className="text-[#202224] text-[16px] font-semibold opacity-70 mb-4">{title}</span>
                    <AnimatedCounter value={value} />
                </div>
                <div className={`w-[60px] h-[60px] flex items-center justify-center rounded-[20px] ${iconBgColor}`}>
                    <Icon size={32} className={iconColor} />
                </div>
            </div>

            <div className="flex items-center gap-2 text-sm mt-4">
                {isPositive ? (
                    <TrendingUp size={20} className="text-[#00B69B]" />
                ) : (
                    <TrendingDown size={20} className="text-[#F93C65]" />
                )}
                <span className={isPositive ? "text-[#00B69B] font-bold" : "text-[#F93C65] font-bold"}>
                    {trendValue}
                </span>
                <span className="text-[#606060] font-medium">{trendLabel}</span>
            </div>
        </motion.div>
    );
};

export default StatsCard;
