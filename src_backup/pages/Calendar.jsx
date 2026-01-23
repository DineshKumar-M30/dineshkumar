import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date(2026, 0, 1)); // January 2026

    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const getDaysInMonth = (date) => {
        const year = date.getFullYear();
        const month = date.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        const days = [];
        // Padding for first day
        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }
        for (let i = 1; i <= daysInMonth; i++) {
            days.push(i);
        }
        return days;
    };

    const days = getDaysInMonth(currentDate);

    const events = [
        { day: 1, title: 'New Year Celebration', type: 'holiday' },
        { day: 15, title: 'Design Review', type: 'work' },
        { day: 22, title: 'Team Meeting', type: 'work' },
        { day: 28, title: 'Project Deadline', type: 'urgent' },
    ];

    const getEventTypeStyle = (type) => {
        switch (type) {
            case 'holiday': return 'bg-green-100 text-green-700 border-green-200';
            case 'work': return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'urgent': return 'bg-red-100 text-red-700 border-red-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    return (
        <div className="p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Calendar</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold flex items-center gap-2 transition-colors shadow-lg shadow-blue-200">
                    <Plus size={20} />
                    <span>Add Event</span>
                </button>
            </div>

            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex-1 flex flex-col">
                {/* Calendar Header */}
                <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">
                        {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                    </h3>
                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-gray-50 rounded-lg border border-gray-200 text-gray-600 transition-colors">
                            <ChevronLeft size={20} />
                        </button>
                        <button className="p-2 hover:bg-gray-50 rounded-lg border border-gray-200 text-gray-600 transition-colors">
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Days of Week */}
                <div className="grid grid-cols-7 bg-gray-50 border-b border-gray-100">
                    {daysOfWeek.map((day) => (
                        <div key={day} className="py-3 text-center text-sm font-bold text-gray-500 uppercase tracking-wider">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar Grid */}
                <div className="flex-1 grid grid-cols-7 auto-rows-fr h-full">
                    {days.map((day, index) => {
                        const dayEvents = events.filter(e => e.day === day);
                        return (
                            <div
                                key={index}
                                className={`min-h-[120px] p-2 border-r border-b border-gray-50 transition-colors hover:bg-gray-50/50 ${day === null ? 'bg-gray-50/30' : ''
                                    }`}
                            >
                                {day && (
                                    <>
                                        <span className={`text-sm font-bold ${day === new Date().getDate() &&
                                                currentDate.getMonth() === new Date().getMonth()
                                                ? 'bg-blue-600 text-white w-7 h-7 flex items-center justify-center rounded-full'
                                                : 'text-gray-900'
                                            }`}>
                                            {day}
                                        </span>
                                        <div className="mt-2 space-y-1">
                                            {dayEvents.map((event, i) => (
                                                <div
                                                    key={i}
                                                    className={`text-[10px] p-1.5 rounded border leading-tight ${getEventTypeStyle(event.type)}`}
                                                >
                                                    {event.title}
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
