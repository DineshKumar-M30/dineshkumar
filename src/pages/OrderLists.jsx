import React, { useState, useRef, useEffect } from 'react';
import { Filter, RotateCw, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const CalendarFilter = ({ onClose, onApply, initialSelectedDates }) => {
    // Start viewing from 2019 since that's where the mock data is
    const [viewDate, setViewDate] = useState(new Date(2019, 1, 1)); // Feb 2019
    const [tempSelectedDates, setTempSelectedDates] = useState(initialSelectedDates || []);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const getDaysInMonth = (year, month) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (year, month) => {
        return new Date(year, month, 1).getDay();
    };

    const formatDate = (date) => {
        const d = date.getDate().toString().padStart(2, '0');
        const m = date.toLocaleString('default', { month: 'short' });
        const y = date.getFullYear();
        return `${d} ${m} ${y}`;
    };

    const handlePrevMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
    };

    const handleNextMonth = () => {
        setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
    };

    const toggleDate = (day) => {
        const date = new Date(viewDate.getFullYear(), viewDate.getMonth(), day);
        const dateStr = formatDate(date);

        if (tempSelectedDates.includes(dateStr)) {
            setTempSelectedDates(tempSelectedDates.filter(d => d !== dateStr));
        } else {
            setTempSelectedDates([...tempSelectedDates, dateStr]);
        }
    };

    const generateCalendarDays = () => {
        const year = viewDate.getFullYear();
        const month = viewDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        const daysInPrevMonth = getDaysInMonth(year, month - 1);

        const days = [];

        // Previous month days
        for (let i = firstDay - 1; i >= 0; i--) {
            days.push({ d: daysInPrevMonth - i, current: false });
        }

        // Current month days
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(year, month, i);
            const dateStr = formatDate(date);
            days.push({
                d: i,
                current: true,
                selected: tempSelectedDates.includes(dateStr)
            });
        }

        // Next month days to fill grid (assuming 6 rows max = 42 cells, or just 5 rows = 35)
        const remainingCells = 35 - days.length; // Keeping it compact like the design
        if (remainingCells > 0) {
            for (let i = 1; i <= remainingCells; i++) {
                days.push({ d: i, current: false });
            }
        }

        return days;
    };

    const days = generateCalendarDays();

    return (
        <div className="absolute top-full left-0 mt-2 z-50 bg-white rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-6 w-[320px] max-w-[calc(100vw-32px)] animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-gray-900 font-bold text-base">
                    {months[viewDate.getMonth()]} {viewDate.getFullYear()}
                </h3>
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={handlePrevMonth}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        type="button"
                        onClick={handleNextMonth}
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500"
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="mb-4">
                <div className="grid grid-cols-7 mb-4">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                        <div key={i} className="text-center text-xs font-bold text-gray-400">
                            {d}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-y-2">
                    {days.map((day, i) => (
                        <div key={i} className="flex items-center justify-center">
                            <button
                                type="button"
                                disabled={!day.current}
                                onClick={() => day.current && toggleDate(day.d)}
                                className={`w-8 h-8 md:w-9 md:h-9 flex items-center justify-center rounded-xl text-sm font-medium transition-all
                                    ${day.selected
                                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                                        : day.current
                                            ? 'text-gray-600 hover:bg-gray-50'
                                            : 'text-gray-300 cursor-default'
                                    }`}
                            >
                                {day.d}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="space-y-4">
                <p className="text-[10px] text-gray-400 text-left">*You can choose multiple date</p>
                <button
                    type="button"
                    onClick={() => onApply(tempSelectedDates)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition-colors shadow-lg shadow-blue-500/30 text-sm"
                >
                    Apply Now
                </button>
            </div>
        </div>
    );
};

const OrderTypeFilter = ({ onClose, onApply, initialSelectedTypes }) => {
    const [tempSelectedTypes, setTempSelectedTypes] = useState(initialSelectedTypes || []);

    const types = [
        "Health & Medicine",
        "Book & Stationery",
        "Services & Industry",
        "Fashion & Beauty",
        "Home & Living",
        "Electronics",
        "Mobile & Phone",
        "Accessories"
    ];

    const toggleType = (type) => {
        if (tempSelectedTypes.includes(type)) {
            setTempSelectedTypes(tempSelectedTypes.filter(t => t !== type));
        } else {
            setTempSelectedTypes([...tempSelectedTypes, type]);
        }
    };

    return (
        <div className="absolute top-full left-0 mt-2 z-50 bg-white rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-6 w-[500px] max-w-[calc(100vw-32px)] animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-gray-900 font-bold text-lg mb-6">Select Order Type</h3>

            <div className="flex flex-wrap gap-3 mb-8">
                {types.map((type) => (
                    <button
                        type="button"
                        key={type}
                        onClick={() => toggleType(type)}
                        className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium border transition-all
                            ${tempSelectedTypes.includes(type)
                                ? 'bg-gray-900 text-white border-gray-900'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                <p className="text-[10px] text-gray-400 text-left">*You can choose multiple Order type</p>
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={() => onApply(tempSelectedTypes)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-lg shadow-blue-500/30 text-sm"
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

const OrderStatusFilter = ({ onClose, onApply, initialSelectedStatuses }) => {
    const [tempSelectedStatuses, setTempSelectedStatuses] = useState(initialSelectedStatuses || []);

    const statuses = [
        "Completed",
        "Processing",
        "Rejected",
        "On Hold",
        "In Transit"
    ];

    const toggleStatus = (status) => {
        if (tempSelectedStatuses.includes(status)) {
            setTempSelectedStatuses(tempSelectedStatuses.filter(s => s !== status));
        } else {
            setTempSelectedStatuses([...tempSelectedStatuses, status]);
        }
    };

    return (
        <div className="absolute top-full left-0 mt-2 z-50 bg-white rounded-3xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-gray-100 p-6 w-[400px] max-w-[calc(100vw-32px)] animate-in fade-in zoom-in-95 duration-200">
            <h3 className="text-gray-900 font-bold text-lg mb-6">Select Order Status</h3>

            <div className="flex flex-wrap gap-3 mb-8">
                {statuses.map((status) => (
                    <button
                        type="button"
                        key={status}
                        onClick={() => toggleStatus(status)}
                        className={`px-6 py-2 rounded-full text-xs md:text-sm font-medium border transition-all
                            ${tempSelectedStatuses.includes(status)
                                ? 'bg-gray-900 text-white border-gray-900'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                            }`}
                    >
                        {status}
                    </button>
                ))}
            </div>

            <div className="space-y-4">
                <p className="text-[10px] text-gray-400 text-left">*You can choose multiple Order Status</p>
                <div className="flex justify-center">
                    <button
                        type="button"
                        onClick={() => onApply(tempSelectedStatuses)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl transition-colors shadow-lg shadow-blue-500/30 text-sm"
                    >
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

const OrderLists = () => {
    const [isDateOpen, setIsDateOpen] = useState(false);
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const [isStatusOpen, setIsStatusOpen] = useState(false);

    const [selectedDates, setSelectedDates] = useState([]);
    const [selectedTypes, setSelectedTypes] = useState([]);
    const [selectedStatuses, setSelectedStatuses] = useState([]);

    const dateRef = useRef(null);
    const typeRef = useRef(null);
    const statusRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dateRef.current && !dateRef.current.contains(event.target)) {
                setIsDateOpen(false);
            }
            if (typeRef.current && !typeRef.current.contains(event.target)) {
                setIsTypeOpen(false);
            }
            if (statusRef.current && !statusRef.current.contains(event.target)) {
                setIsStatusOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Mock Data based on the screenshot
    const orders = [
        { id: '00001', name: 'Christine Brooks', address: '089 Kutch Green Apt. 448', date: '04 Sep 2019', type: 'Electric', status: 'Completed' },
        { id: '00002', name: 'Rosie Pearson', address: '979 Immanuel Ferry Suite 526', date: '28 May 2019', type: 'Book', status: 'Processing' },
        { id: '00003', name: 'Darrell Caldwell', address: '8587 Frida Ports', date: '23 Nov 2019', type: 'Medicine', status: 'Rejected' },
        { id: '00004', name: 'Gilbert Johnston', address: '768 Destiny Lake Suite 600', date: '05 Feb 2019', type: 'Mobile', status: 'Completed' },
        { id: '00005', name: 'Alan Cain', address: '042 Mylene Throughway', date: '29 Jul 2019', type: 'Watch', status: 'Processing' },
        { id: '00006', name: 'Alfred Murray', address: '543 Weimann Mountain', date: '15 Aug 2019', type: 'Medicine', status: 'Completed' },
        { id: '00007', name: 'Maggie Sullivan', address: 'New Scottieberg', date: '21 Dec 2019', type: 'Watch', status: 'Processing' },
        { id: '00008', name: 'Rosie Todd', address: 'New Jon', date: '30 Apr 2019', type: 'Medicine', status: 'On Hold' },
        { id: '00009', name: 'Dollie Hines', address: '124 Lyla Forge Suite 975', date: '09 Jan 2019', type: 'Book', status: 'In Transit' },
    ];

    const getStatusStyles = (status) => {
        switch (status) {
            case 'Completed': return 'bg-teal-50 text-teal-500';
            case 'Processing': return 'bg-purple-50 text-purple-500';
            case 'Rejected': return 'bg-red-50 text-red-500';
            case 'On Hold': return 'bg-orange-50 text-orange-500';
            case 'In Transit': return 'bg-pink-50 text-pink-500';
            default: return 'bg-gray-100 text-gray-500';
        }
    };

    const handleApplyDateFilter = (dates) => {
        setSelectedDates(dates);
        setIsDateOpen(false);
    };

    const handleApplyTypeFilter = (types) => {
        setSelectedTypes(types);
        setIsTypeOpen(false);
    };

    const handleApplyStatusFilter = (statuses) => {
        setSelectedStatuses(statuses);
        setIsStatusOpen(false);
    };

    const handleResetFilter = () => {
        setSelectedDates([]);
        setSelectedTypes([]);
        setSelectedStatuses([]);
    };

    // Mapping for filter types to data types
    const typeMapping = {
        "Health & Medicine": "Medicine",
        "Book & Stationery": "Book",
        "Electronics": "Electric",
        "Mobile & Phone": "Mobile",
        "Accessories": "Watch"
    };

    const filteredOrders = orders.filter(order => {
        const matchesDate = selectedDates.length === 0 || selectedDates.includes(order.date);

        let matchesType = true;
        if (selectedTypes.length > 0) {
            // Map selected complex types to simple data types
            const mappedSelectedTypes = selectedTypes.map(t => typeMapping[t] || t);
            matchesType = mappedSelectedTypes.includes(order.type);
        }

        const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(order.status);

        return matchesDate && matchesType && matchesStatus;
    });

    return (
        <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Order Lists</h2>

            {/* Filter Section */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 px-3 border-r border-gray-100">
                    <Filter size={18} className="text-gray-500" />
                    <span className="text-gray-900 font-medium whitespace-nowrap text-sm">Filter By</span>
                </div>

                <div
                    ref={dateRef}
                    className="relative"
                >
                    <div
                        className={`flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors text-sm ${isDateOpen || selectedDates.length > 0 ? 'bg-blue-50 ring-1 ring-blue-100' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsDateOpen(!isDateOpen);
                        }}
                    >
                        <span className={`font-semibold ${selectedDates.length > 0 ? 'text-blue-600' : 'text-gray-900'}`}>
                            {selectedDates.length > 0 ? `${selectedDates.length} Date(s)` : 'Date'}
                        </span>
                        <ChevronDown size={14} className={`text-gray-400 transition-transform ${isDateOpen ? 'rotate-180' : ''}`} />
                    </div>
                    {isDateOpen && (
                        <div className="absolute top-full left-0 mt-2 z-50">
                            <CalendarFilter
                                onClose={() => setIsDateOpen(false)}
                                onApply={handleApplyDateFilter}
                                initialSelectedDates={selectedDates}
                            />
                        </div>
                    )}
                </div>

                <div
                    ref={typeRef}
                    className="relative"
                >
                    <div
                        className={`flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors text-sm ${isTypeOpen || selectedTypes.length > 0 ? 'bg-blue-50 ring-1 ring-blue-100' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsTypeOpen(!isTypeOpen);
                        }}
                    >
                        <span className={`font-semibold ${selectedTypes.length > 0 ? 'text-blue-600' : 'text-gray-900'}`}>
                            {selectedTypes.length > 0 ? `${selectedTypes.length} Type(s)` : 'Order Type'}
                        </span>
                        <ChevronDown size={14} className={`text-gray-400 transition-transform ${isTypeOpen ? 'rotate-180' : ''}`} />
                    </div>
                    {isTypeOpen && (
                        <div className="absolute top-full left-0 mt-2 z-50">
                            <OrderTypeFilter
                                onClose={() => setIsTypeOpen(false)}
                                onApply={handleApplyTypeFilter}
                                initialSelectedTypes={selectedTypes}
                            />
                        </div>
                    )}
                </div>

                <div
                    ref={statusRef}
                    className="relative"
                >
                    <div
                        className={`flex items-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors text-sm ${isStatusOpen || selectedStatuses.length > 0 ? 'bg-blue-50 ring-1 ring-blue-100' : ''}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsStatusOpen(!isStatusOpen);
                        }}
                    >
                        <span className={`font-semibold ${selectedStatuses.length > 0 ? 'text-blue-600' : 'text-gray-900'}`}>
                            {selectedStatuses.length > 0 ? `${selectedStatuses.length} Status` : 'Order Status'}
                        </span>
                        <ChevronDown size={14} className={`text-gray-400 transition-transform ${isStatusOpen ? 'rotate-180' : ''}`} />
                    </div>
                    {isStatusOpen && (
                        <div className="absolute top-full left-0 mt-2 z-50">
                            <OrderStatusFilter
                                onClose={() => setIsStatusOpen(false)}
                                onApply={handleApplyStatusFilter}
                                initialSelectedStatuses={selectedStatuses}
                            />
                        </div>
                    )}
                </div>

                <button
                    type="button"
                    onClick={handleResetFilter}
                    className="flex items-center gap-2 text-red-500 font-semibold ml-auto px-3 hover:opacity-80 transition-opacity text-sm"
                >
                    <RotateCw size={16} />
                    <span className="hidden sm:inline">Reset Filter</span>
                </button>
            </div>

            {/* Table Section */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[800px]">
                        <thead>
                            <tr className="border-b border-gray-100">
                                <th className="text-left py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-wider">ID</th>
                                <th className="text-left py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-wider">Name</th>
                                <th className="text-left py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-wider">Address</th>
                                <th className="text-left py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-wider">Date</th>
                                <th className="text-left py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-wider">Type</th>
                                <th className="text-left py-5 px-8 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredOrders.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="py-8 text-center text-gray-500">No orders found for selected criteria</td>
                                </tr>
                            ) : (
                                filteredOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="py-5 px-8 text-sm font-medium text-gray-900">{order.id}</td>
                                        <td className="py-5 px-8 text-sm text-gray-900">{order.name}</td>
                                        <td className="py-5 px-8 text-sm text-gray-600">{order.address}</td>
                                        <td className="py-5 px-8 text-sm text-gray-900">{order.date}</td>
                                        <td className="py-5 px-8 text-sm text-gray-900">{order.type}</td>
                                        <td className="py-5 px-8">
                                            <span className={`inline-block px-4 py-1.5 rounded-md text-xs font-bold ${getStatusStyles(order.status)}`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-6 border-t border-gray-100 flex items-center justify-between bg-gray-50/30">
                    <span className="text-sm text-gray-500 font-medium">
                        Showing {filteredOrders.length} of {orders.length}
                    </span>
                    <div className="flex gap-2">
                        <button type="button" className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
                            <ChevronLeft size={16} />
                        </button>
                        <button type="button" className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderLists;
