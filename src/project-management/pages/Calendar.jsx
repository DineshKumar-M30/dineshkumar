import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { motion } from 'framer-motion';

const Calendar = () => {
    const { tasks } = useApp();
    const [currentDate, setCurrentDate] = useState(new Date());

    const daysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = (date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const prevMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    };

    const nextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    };

    const renderCalendarDays = () => {
        const totalDays = daysInMonth(currentDate);
        const startDay = firstDayOfMonth(currentDate);
        const days = [];

        // Empty cells for previous month
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="h-32 border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50"></div>);
        }

        // Days
        for (let d = 1; d <= totalDays; d++) {
            const dateStr = new Date(currentDate.getFullYear(), currentDate.getMonth(), d).toDateString();
            const dayTasks = tasks.filter(t => t.dueDate && new Date(t.dueDate).toDateString() === dateStr);

            days.push(
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={d}
                    className="h-32 border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 p-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors relative"
                >
                    <span className={`text-sm font-bold ${new Date().toDateString() === dateStr ? 'bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center' : 'text-slate-700 dark:text-slate-300'
                        }`}>
                        {d}
                    </span>

                    <div className="mt-2 space-y-1 overflow-y-auto max-h-[calc(100%-2rem)] scrollbar-hide">
                        {dayTasks.map(task => (
                            <div key={task.id} className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 truncate">
                                {task.title}
                            </div>
                        ))}
                    </div>
                </motion.div>
            );
        }

        return days;
    };

    return (
        <div className="h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Calendar</h1>
                <div className="flex items-center space-x-4 bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
                    <button onClick={prevMonth} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">
                        <ChevronLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </button>
                    <span className="font-bold text-slate-900 dark:text-white w-32 text-center">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                    </span>
                    <button onClick={nextMonth} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg">
                        <ChevronRight className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="grid grid-cols-7 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                        <div key={day} className="py-3 text-center text-sm font-bold text-slate-500 uppercase tracking-wider">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7">
                    {renderCalendarDays()}
                </div>
            </div>
        </div>
    );
};

export default Calendar;
