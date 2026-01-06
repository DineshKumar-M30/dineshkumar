import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import TaskCard from './TaskCard';
import { Plus, MoreHorizontal } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const columns = [
    { id: 'Todo', title: 'To Do', color: 'bg-slate-200 dark:bg-slate-700' },
    { id: 'In Progress', title: 'In Progress', color: 'bg-blue-200 dark:bg-blue-900' },
    { id: 'Review', title: 'Review', color: 'bg-orange-200 dark:bg-orange-900' },
    { id: 'Completed', title: 'Completed', color: 'bg-green-200 dark:bg-green-900' }
];

const KanbanBoard = ({ searchQuery, priorityFilter, sortBy }) => {
    const { tasks, moveTask } = useApp();
    const [draggedOverCol, setDraggedOverCol] = useState(null);

    const handleDrop = (e, status) => {
        e.preventDefault();
        const taskId = e.dataTransfer.getData('taskId');
        if (taskId) {
            moveTask(taskId, status);
            const columnTitle = columns.find(c => c.id === status)?.title || status;
            toast.success(`Task moved to ${columnTitle}`);
        }
        setDraggedOverCol(null);
    };

    const priorityOrder = { 'High': 3, 'Medium': 2, 'Low': 1 };

    const filteredTasks = tasks
        .filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter(t => priorityFilter === 'All' || t.priority === priorityFilter)
        .sort((a, b) => {
            if (sortBy === 'Priority') {
                return (priorityOrder[b.priority] || 0) - (priorityOrder[a.priority] || 0);
            }
            return 0; // Default
        });

    return (
        <div className="overflow-x-auto h-full pb-4">
            <div className="flex space-x-6 min-w-max h-full">
                {columns.map(col => (
                    <div
                        key={col.id}
                        className={`w-80 flex-shrink-0 flex flex-col rounded-2xl bg-slate-50 dark:bg-slate-900/50 border ${draggedOverCol === col.id ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-100 dark:border-slate-800'} transition-colors duration-200`}
                        onDragOver={(e) => {
                            e.preventDefault();
                            setDraggedOverCol(col.id);
                        }}
                        onDragLeave={() => setDraggedOverCol(null)}
                        onDrop={(e) => handleDrop(e, col.id)}
                    >
                        {/* Header */}
                        <div className="p-4 flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <div className={`w-2 h-2 rounded-full ${col.color.replace('bg-', 'bg-').split(' ')[0].replace('200', '500')}`}></div>
                                <h3 className="font-bold text-slate-700 dark:text-slate-200">{col.title}</h3>
                                <span className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs px-2 py-0.5 rounded-full font-bold">
                                    {filteredTasks.filter(t => t.status === col.id).length}
                                </span>
                            </div>
                            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                                <Plus className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Tasks List */}
                        <div className="flex-1 p-3 overflow-y-auto scrollbar-hide space-y-3">
                            <AnimatePresence>
                                {filteredTasks
                                    .filter(task => task.status === col.id)
                                    .map(task => (
                                        <TaskCard key={task.id} task={task} />
                                    ))
                                }
                            </AnimatePresence>
                            {filteredTasks.filter(t => t.status === col.id).length === 0 && (
                                <div className="h-24 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl flex items-center justify-center text-slate-400 text-sm italic">
                                    Drop tasks here
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KanbanBoard;
