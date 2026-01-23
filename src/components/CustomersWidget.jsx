import React from 'react';

const CustomersWidget = () => {
    return (
        <div className="bg-white p-6 rounded-[14px] shadow-sm border-none transition-shadow hover:shadow-md h-full flex flex-col justify-between">
            <h3 className="text-[20px] font-bold text-[#202224] mb-8">Customers</h3>

            {/* Circular Chart Simulation */}
            <div className="relative w-48 h-48 mx-auto mb-8">
                <div className="w-full h-full rounded-full border-[12px] border-[#E8EFFE] flex items-center justify-center relative">
                    {/* Dots */}
                    <div className="absolute top-[-12px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#4379EE] rounded-full"></div>
                    <div className="absolute bottom-[-12px] left-1/2 -translate-x-1/2 w-4 h-4 bg-[#4379EE] rounded-full"></div>
                    <div className="absolute left-[-12px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#4379EE] rounded-full"></div>
                    <div className="absolute right-[-12px] top-1/2 -translate-y-1/2 w-4 h-4 bg-[#4379EE] rounded-full"></div>
                </div>
            </div>

            {/* Legend & Stats */}
            <div className="flex justify-between items-end px-4">
                <div className="flex flex-col gap-1">
                    <span className="text-[24px] font-bold text-[#202224]">34,249</span>
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#4379EE]"></div>
                        <span className="text-xs text-[#606060]">New Customers</span>
                    </div>
                </div>
                <div className="flex flex-col gap-1 items-end">
                    <span className="text-[24px] font-bold text-[#202224]">1420</span>
                    <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#E8EFFE]"></div>
                        <span className="text-xs text-[#606060]">Repeated</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomersWidget;
