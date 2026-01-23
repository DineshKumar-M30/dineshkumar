import React, { useState } from 'react';
import { Star, X, Trash2, CheckCircle2 } from 'lucide-react';

const TodoList = () => {
    const [showAddForm, setShowAddForm] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([
        { id: 1, text: "Meeting with CEO", starred: false, completed: false },
        { id: 2, text: "Pick up kids from school", starred: true, completed: false },
        { id: 3, text: "Shopping with Brother", starred: false, completed: false },
        { id: 4, text: "Going to Dia's School", starred: false, completed: false },
        { id: 5, text: "Check design files", starred: true, completed: false },
        { id: 6, text: "Update File", starred: false, completed: false }
    ]);

    const handleAddTask = () => {
        if (inputValue.trim()) {
            const newTask = {
                id: Date.now(),
                text: inputValue,
                starred: false,
                completed: false
            };
            setTasks([newTask, ...tasks]);
            setInputValue("");
            setShowAddForm(false);
        }
    };

    const toggleStar = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, starred: !t.starred } : t));
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
        <div className="p-4 md:p-8 bg-gray-50 min-h-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 md:mb-10 gap-4">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {showAddForm ? "Add New To-Do" : "To-Do List"}
                </h2>
                {showAddForm ? (
                    <button
                        onClick={handleAddTask}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-8 md:px-12 py-3 rounded-lg transition-all shadow-lg shadow-blue-500/20 text-sm whitespace-nowrap"
                    >
                        Save
                    </button>
                ) : (
                    <button
                        onClick={() => setShowAddForm(true)}
                        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-blue-500/20 text-sm whitespace-nowrap"
                    >
                        Add New Task
                    </button>
                )}
            </div>

            <div className="max-w-7xl mx-auto space-y-6">
                {/* Input Section (Only if showAddForm is true) */}
                {showAddForm && (
                    <div className="bg-white rounded-[20px] p-10 border border-gray-100 shadow-sm mb-6">
                        <input
                            type="text"
                            placeholder="Write Your task name here"
                            className="w-full sm:w-[350px] bg-gray-50 border border-gray-100 rounded-xl p-4 text-gray-600 focus:bg-white focus:border-blue-500 transition-all outline-none font-medium"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            autoFocus
                        />
                    </div>
                )}

                {/* Task List */}
                <div className="space-y-4">
                    {tasks.map((task) => (
                        <div
                            key={task.id}
                            className="group relative flex items-center bg-white px-4 md:px-8 py-5 md:py-7 rounded-[20px] border border-gray-100 shadow-sm transition-all duration-300 hover:bg-blue-500"
                        >
                            {/* Checkbox */}
                            <div className="mr-4 md:mr-6">
                                <div
                                    onClick={() => toggleComplete(task.id)}
                                    className={`w-6 h-6 md:w-7 md:h-7 rounded-lg border-2 flex items-center justify-center transition-all cursor-pointer
                                        ${task.completed
                                            ? 'bg-blue-500 border-blue-500 group-hover:bg-white group-hover:border-white'
                                            : 'bg-white border-gray-200 group-hover:border-white/50 group-hover:bg-transparent'
                                        }`}
                                >
                                    {task.completed && (
                                        <div className={`w-3.5 h-3.5 bg-white rounded-[2px] ${task.completed ? 'group-hover:bg-blue-500' : ''}`}></div>
                                    )}
                                </div>
                            </div>

                            {/* Task Text */}
                            <div className="flex-1">
                                <span className={`text-[19px] font-semibold transition-colors
                                    ${task.completed ? 'text-gray-400 line-through' : 'text-gray-700'} 
                                    group-hover:text-white group-hover:no-underline`}
                                >
                                    {task.text}
                                </span>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-6">
                                <div className="group-hover:hidden flex items-center gap-6 text-gray-400">
                                    <Star
                                        size={26}
                                        onClick={() => toggleStar(task.id)}
                                        className={`cursor-pointer transition-all hover:scale-110 active:scale-90 ${task.starred ? 'fill-yellow-400 text-yellow-400' : 'text-gray-200'}`}
                                    />
                                    <div
                                        onClick={() => deleteTask(task.id)}
                                        className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all cursor-pointer"
                                    >
                                        <X size={20} />
                                    </div>
                                </div>

                                {/* Hover State Trash Icon */}
                                <div
                                    onClick={() => deleteTask(task.id)}
                                    className="hidden group-hover:flex items-center justify-center w-10 h-10 bg-white/20 rounded-xl cursor-pointer hover:bg-white/30 transition-all"
                                >
                                    <Trash2 size={22} className="text-white" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TodoList;
