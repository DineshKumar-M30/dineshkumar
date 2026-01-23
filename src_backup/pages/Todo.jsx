import React, { useState } from 'react';
import { Plus, Search, Trash2, CheckCircle2, Circle, Clock } from 'lucide-react';

const ToDo = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Finish design system update", completed: true, priority: 'High', deadline: 'Today' },
        { id: 2, text: "Review client feedback on dashboard", completed: false, priority: 'Medium', deadline: 'Tomorrow' },
        { id: 3, text: "Integrate new API endpoints", completed: false, priority: 'High', deadline: '2 days left' },
        { id: 4, text: "Team sync meeting", completed: false, priority: 'Low', deadline: 'Today, 2 PM' },
    ]);

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
        <div className="p-6 h-full flex flex-col">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">To-Do List</h2>

            <div className="flex-1 bg-white rounded-[32px] shadow-sm border border-gray-100 flex flex-col overflow-hidden max-w-4xl">
                {/* Header */}
                <div className="p-8 border-b border-gray-100">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            placeholder="Add a new task..."
                            className="flex-1 bg-gray-50 border border-transparent rounded-2xl px-6 py-4 focus:bg-white focus:border-blue-200 transition-all outline-none font-medium"
                        />
                        <button className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-2xl transition-all shadow-lg shadow-blue-200">
                            <Plus size={24} />
                        </button>
                    </div>
                </div>

                {/* Task List */}
                <div className="flex-1 overflow-y-auto p-8 no-scrollbar">
                    <div className="space-y-4">
                        {tasks.map((task) => (
                            <div
                                key={task.id}
                                className={`group flex items-center justify-between p-6 rounded-2xl border transition-all cursor-pointer ${task.completed ? 'bg-gray-50 border-transparent' : 'bg-white border-gray-100 hover:border-blue-200 shadow-sm'
                                    }`}
                                onClick={() => toggleTask(task.id)}
                            >
                                <div className="flex items-center gap-4">
                                    <button className="text-blue-600 shrink-0">
                                        {task.completed ? (
                                            <CheckCircle2 size={24} className="text-blue-600 fill-blue-50" />
                                        ) : (
                                            <Circle size={24} className="text-gray-300 group-hover:text-blue-400" />
                                        )}
                                    </button>
                                    <div>
                                        <p className={`font-bold transition-all ${task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
                                            {task.text}
                                        </p>
                                        <div className="flex items-center gap-4 mt-1">
                                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${task.priority === 'High' ? 'text-red-600 bg-red-50' :
                                                    task.priority === 'Medium' ? 'text-amber-600 bg-amber-50' : 'text-green-600 bg-green-50'
                                                }`}>
                                                {task.priority} Priority
                                            </span>
                                            <div className="flex items-center gap-1 text-gray-400 text-xs">
                                                <Clock size={12} />
                                                <span>{task.deadline}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={(e) => { e.stopPropagation(); deleteTask(task.id); }}
                                    className="p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all opacity-0 group-hover:opacity-100"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToDo;
