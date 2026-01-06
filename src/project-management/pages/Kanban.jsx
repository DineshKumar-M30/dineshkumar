import React, { useState } from 'react';
import KanbanBoard from '../components/Dashboard/KanbanBoard';
import Button from '../components/Shared/Button';
import { Plus, Filter, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import Modal from '../components/Shared/Modal';
import Input from '../components/Shared/Input';
import toast from 'react-hot-toast';
import AutomationModal from '../components/Smart/AutomationModal';

const Kanban = () => {
    const { addTask } = useApp();
    const [searchQuery, setSearchQuery] = useState('');
    const [priorityFilter, setPriorityFilter] = useState('All');
    const [sortBy, setSortBy] = useState('Default');

    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const [isAutoModalOpen, setIsAutoModalOpen] = useState(false);
    const [newTask, setNewTask] = useState({ title: '', status: 'Todo', priority: 'Medium' });

    const handleCreateTask = (e) => {
        e.preventDefault();
        if (!newTask.title) return toast.error("Task title is required");

        addTask({
            ...newTask,
            description: 'Created via Quick Add', // simplified for demo
            dueDate: new Date().toISOString(),
            assignees: [], // Mock
            attachments: 0,
            createdAt: new Date().toISOString()
        });

        toast.success("Task added!");
        setNewTask({ title: '', status: 'Todo', priority: 'Medium' });
        setIsTaskModalOpen(false);
    };

    return (
        <div className="h-[calc(100vh-8rem)] flex flex-col">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        Board <span className="text-slate-400 text-base font-normal">/ All Tasks</span>
                    </h1>
                </div>

                <div className="flex items-center space-x-3 w-full sm:w-auto overflow-x-auto pb-1 sm:pb-0 hide-scrollbar">
                    <div className="relative flex-1 sm:flex-none">
                        <input
                            type="text"
                            placeholder="Filter tasks..."
                            className="pl-4 pr-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500 w-full sm:w-48"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <select
                        className="px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500"
                        value={priorityFilter}
                        onChange={(e) => setPriorityFilter(e.target.value)}
                    >
                        <option value="All">All Priorities</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>

                    <button className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700" title="Sort Order" onClick={() => setSortBy(prev => prev === 'Default' ? 'Priority' : 'Default')}>
                        <span className="text-xs font-bold">{sortBy === 'Default' ? 'Sort: Def' : 'Sort: Prio'}</span>
                    </button>

                    <button
                        onClick={() => setIsAutoModalOpen(true)}
                        className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-200 dark:hover:bg-purple-900/50"
                        title="AI Auto-Prioritize / Automation"
                    >
                        <Sparkles className="w-5 h-5" />
                    </button>
                    <Button onClick={() => setIsTaskModalOpen(true)}>
                        <Plus className="w-5 h-5 mr-2" />
                        Add Task
                    </Button>
                </div>
            </div>

            <KanbanBoard
                searchQuery={searchQuery}
                priorityFilter={priorityFilter}
                sortBy={sortBy}
            />

            <AutomationModal isOpen={isAutoModalOpen} onClose={() => setIsAutoModalOpen(false)} />

            <Modal
                isOpen={isTaskModalOpen}
                onClose={() => setIsTaskModalOpen(false)}
                title="Create New Task"
            >
                <form onSubmit={handleCreateTask} className="space-y-4">
                    <Input
                        label="Task Title"
                        placeholder="e.g. Update Homepage"
                        value={newTask.title}
                        onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                        required
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Status</label>
                            <select
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={newTask.status}
                                onChange={(e) => setNewTask({ ...newTask, status: e.target.value })}
                            >
                                <option value="Todo">To Do</option>
                                <option value="In Progress">In Progress</option>
                                <option value="Review">Review</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Priority</label>
                            <select
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={newTask.priority}
                                onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                            >
                                <option value="Low">Low</option>
                                <option value="Medium">Medium</option>
                                <option value="High">High</option>
                            </select>
                        </div>
                    </div>
                    <div className="pt-4 flex justify-end space-x-3">
                        <Button type="button" variant="secondary" onClick={() => setIsTaskModalOpen(false)}>Cancel</Button>
                        <Button type="submit">Add Task</Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Kanban;
