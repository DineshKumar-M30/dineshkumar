import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MoreHorizontal, Paperclip } from 'lucide-react';
import Avatar from '../Shared/Avatar';

const TaskCard = ({ task, onEdit, onDelete }) => {
    const priorityColors = {
        High: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
        Medium: 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400',
        Low: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
    };

    return (
        <motion.div
            layout
            layoutId={task.id}
            draggable
            onDragStart={(e) => {
                e.dataTransfer.setData('taskId', task.id);
                e.dataTransfer.effectAllowed = 'move';
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            whileHover={{ y: -2, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
            className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm cursor-grab active:cursor-grabbing mb-3 group"
        >
            <div className="flex justify-between items-start mb-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${priorityColors[task.priority] || priorityColors.Low}`}>
                    {task.priority || 'Low'}
                </span>
                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreHorizontal className="w-4 h-4" />
                </button>
            </div>

            <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1">{task.title}</h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">{task.description}</p>

            <div className="flex items-center justify-between mt-auto pt-3 border-t border-slate-100 dark:border-slate-700">
                <div className="flex -space-x-1.5">
                    {task.assignees?.map((user, i) => (
                        <Avatar key={i} src={user.avatar} alt={user.name} size="xs" className="ring-2 ring-white dark:ring-slate-800" />
                    )) || <Avatar size="xs" />}
                </div>

                <div className="flex items-center space-x-3 text-slate-400 text-xs">
                    {task.attachments > 0 && (
                        <div className="flex items-center">
                            <Paperclip className="w-3.5 h-3.5 mr-1" />
                            <span>{task.attachments}</span>
                        </div>
                    )}
                    <div className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        <span>{task.dueDate ? new Date(task.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : 'No date'}</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TaskCard;
