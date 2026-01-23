import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const StatsCard = ({ title, value, icon: Icon, iconBgColor, iconColor, trend, trendValue, trendLabel }) => {
    const isPositive = trend === 'up';

    return (
        <div className="bg-white p-6 rounded-[14px] shadow-sm flex flex-col justify-between h-[161px] hover:shadow-xl transition-all duration-300 hover-lift premium-shadow-hover">
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <span className="text-[#202224] text-[16px] font-semibold opacity-70 mb-4">{title}</span>
                    <span className="text-[28px] font-bold text-[#202224] leading-none">{value}</span>
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
        </div>
    );
};

export default StatsCard;
