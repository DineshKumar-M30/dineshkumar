import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Plus, MoreVertical, Calendar as CalendarIcon, Users } from 'lucide-react';
import Modal from '../components/Shared/Modal';
import Input from '../components/Shared/Input';
import Button from '../components/Shared/Button';
import Avatar from '../components/Shared/Avatar';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';

const Projects = () => {
    const { projects, addProject, updateProject, deleteProject } = useApp();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState(null);
    const [formData, setFormData] = useState({ name: '', description: '', status: 'Active', dueDate: '', image: '' });

    // Search, Filter, Sort State
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [sortBy, setSortBy] = useState('Newest');

    const handleOpenCreate = () => {
        setEditingProject(null);
        setFormData({ name: '', description: '', status: 'Active', dueDate: '', image: '' });
        setIsModalOpen(true);
    };

    const handleOpenEdit = (project) => {
        setEditingProject(project.id);
        setFormData({
            name: project.name,
            description: project.description,
            status: project.status,
            dueDate: project.dueDate,
            image: project.image || ''
        });
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name) return toast.error("Project name is required");

        if (editingProject) {
            updateProject(editingProject, formData);
            toast.success("Project updated successfully!");
        } else {
            addProject({
                ...formData,
                progress: 0,
                members: [1, 2, 3],
                createdAt: new Date().toISOString()
            });
            toast.success("Project created successfully!");
        }

        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            deleteProject(id);
            toast.success("Project deleted");
        }
    };

    // Filter and Sort Logic
    const filteredProjects = projects
        .filter(project => {
            const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description?.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesStatus = statusFilter === 'All' || project.status === statusFilter;
            return matchesSearch && matchesStatus;
        })
        .sort((a, b) => {
            if (sortBy === 'Newest') return new Date(b.createdAt) - new Date(a.createdAt);
            if (sortBy === 'Oldest') return new Date(a.createdAt) - new Date(b.createdAt);
            if (sortBy === 'Name (A-Z)') return a.name.localeCompare(b.name);
            if (sortBy === 'Name (Z-A)') return b.name.localeCompare(a.name);
            return 0;
        });

    return (
        <div className="space-y-8">
            {/* Header ... */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Projects</h1>
                    <p className="text-slate-500">Manage your ongoing projects and track progress.</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                    <Input
                        placeholder="Search projects..."
                        className="w-full md:w-48"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <select
                        className="px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                    >
                        <option value="All">All Status</option>
                        <option value="Active">Active</option>
                        <option value="On Hold">On Hold</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <select
                        className="px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option>Newest</option>
                        <option>Oldest</option>
                        <option>Name (A-Z)</option>
                        <option>Name (Z-A)</option>
                    </select>
                    <Button onClick={handleOpenCreate}>
                        <Plus className="w-5 h-5 md:mr-2" />
                        <span className="hidden md:inline">New Project</span>
                    </Button>
                </div>
            </div>

            {filteredProjects.length === 0 ? (
                <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                    <p className="text-slate-500 mb-4">No projects found matching your criteria.</p>
                    {projects.length === 0 && (
                        <Button variant="outline" onClick={handleOpenCreate}>Create Project</Button>
                    )}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group relative overflow-hidden flex flex-col"
                        >
                            {project.image && (
                                <div className="h-32 w-full overflow-hidden">
                                    <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                            )}

                            <div className="p-6 flex-1 flex flex-col">
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-1 bg-white/90 dark:bg-slate-900/90 rounded-lg p-1 shadow-sm backdrop-blur-sm">
                                    <button onClick={() => handleOpenEdit(project)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-blue-500 rounded-lg transition-colors" title="Edit">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
                                    </button>
                                    <button onClick={() => handleDelete(project.id)} className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-slate-400 hover:text-red-500 rounded-lg transition-colors" title="Delete">
                                        <MoreVertical className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="mb-4">
                                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${project.status === 'Active' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
                                        project.status === 'On Hold' ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400' : 'bg-slate-100 text-slate-600'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.name}</h3>
                                <p className="text-slate-500 text-sm mb-6 line-clamp-2">{project.description || 'No description provided.'}</p>

                                <div className="space-y-4">
                                    <div>
                                        <div className="flex justify-between text-xs font-medium text-slate-500 mb-2">
                                            <span>Progress</span>
                                            <span>{project.progress}%</span>
                                        </div>
                                        <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                                            <div
                                                className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                                                style={{ width: `${project.progress}%` }}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                                        <div className="flex -space-x-2">
                                            {[1, 2, 3].map(i => (
                                                <Avatar key={i} src={`https://ui-avatars.com/api/?name=User+${i}&background=random`} size="sm" className="ring-2 ring-white dark:ring-slate-900" />
                                            ))}
                                            <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-500 ring-2 ring-white dark:ring-slate-900">
                                                +2
                                            </div>
                                        </div>

                                        <div className="flex items-center text-slate-400 text-xs">
                                            <CalendarIcon className="w-4 h-4 mr-1" />
                                            {project.dueDate || 'No date'}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* Create/Edit Project Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingProject ? "Edit Project" : "Create New Project"}
            >
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Project Name"
                        placeholder="e.g. Website Redesign"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Description</label>
                        <textarea
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow h-24 resize-none"
                            placeholder="Briefly describe the project..."
                            value={formData.description}
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>

                    <Input
                        label="Cover Image URL (optional)"
                        placeholder="https://..."
                        value={formData.image}
                        onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                    />

                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Status</label>
                            <select
                                className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={formData.status}
                                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                            >
                                <option value="Active">Active</option>
                                <option value="On Hold">On Hold</option>
                                <option value="Completed">Completed</option>
                            </select>
                        </div>
                        <Input
                            label="Due Date"
                            type="date"
                            value={formData.dueDate}
                            onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
                        />
                    </div>

                    <div className="pt-4 flex justify-end space-x-3">
                        <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button type="submit">{editingProject ? "Update Project" : "Create Project"}</Button>
                    </div>
                </form>
            </Modal>
        </div >
    );
};

export default Projects;
