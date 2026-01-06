import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import Avatar from '../components/Shared/Avatar';
import Button from '../components/Shared/Button';
import Modal from '../components/Shared/Modal';
import Input from '../components/Shared/Input';
import { Mail, Phone, Plus, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

const Team = () => {
    const { members, addMember, deleteMember } = useApp();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newMember, setNewMember] = useState({ name: '', role: '', email: '', status: 'Online' });

    // Search, Filter, Sort State
    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [roleFilter, setRoleFilter] = useState('All');
    const [sortBy, setSortBy] = useState('Name (A-Z)');

    const handleAddMember = (e) => {
        e.preventDefault();
        if (!newMember.name || !newMember.email) return toast.error("Name and Email are required");

        addMember(newMember);
        toast.success("Member invited successfully!");
        setNewMember({ name: '', role: '', email: '', status: 'Online' });
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to remove this member?")) {
            deleteMember(id);
            toast.success("Member removed");
        }
    };

    // Filter and Sort Logic
    const filteredMembers = members
        .filter(m =>
            m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            m.email.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .filter(m => statusFilter === 'All' || m.status === statusFilter)
        .filter(m => roleFilter === 'All' || m.role === roleFilter)
        .sort((a, b) => {
            if (sortBy === 'Name (A-Z)') return a.name.localeCompare(b.name);
            if (sortBy === 'Name (Z-A)') return b.name.localeCompare(a.name);
            if (sortBy === 'Status') return a.status.localeCompare(b.status);
            return 0;
        });

    const uniqueRoles = [...new Set(members.map(m => m.role).filter(Boolean))];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Team Members</h1>
                    <p className="text-slate-500">Manage your team and permissions.</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
                    <Input
                        placeholder="Search members..."
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
                        <option value="Online">Online</option>
                        <option value="Do not disturb">Do not disturb</option>
                        <option value="Offline">Offline</option>
                    </select>
                    <select
                        className="px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500"
                        value={roleFilter}
                        onChange={(e) => setRoleFilter(e.target.value)}
                    >
                        <option value="All">All Roles</option>
                        {uniqueRoles.map(role => (
                            <option key={role} value={role}>{role}</option>
                        ))}
                    </select>
                    <select
                        className="px-3 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm focus:ring-2 focus:ring-blue-500"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option>Name (A-Z)</option>
                        <option>Name (Z-A)</option>
                        <option>Status</option>
                    </select>
                    <Button onClick={() => setIsModalOpen(true)}>
                        <Plus className="w-5 h-5 md:mr-2" />
                        <span className="hidden md:inline">Invite</span>
                    </Button>
                </div>
            </div>

            {filteredMembers.length === 0 ? (
                <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                    <p className="text-slate-500 mb-4">No team members found matching your criteria.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredMembers.map(member => (
                        <div key={member.id} className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm relative group">
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button
                                    onClick={() => handleDelete(member.id)}
                                    className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                    title="Remove Member"
                                >
                                    <Trash2 className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <div className="relative">
                                    <Avatar src={`https://ui-avatars.com/api/?name=${member.name}&background=random`} size="xl" />
                                    <span className={`absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 ${member.status === 'Online' ? 'bg-green-500' :
                                            member.status === 'Do not disturb' ? 'bg-red-500' : 'bg-slate-300'
                                        }`}></span>
                                </div>

                                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
                                <p className="text-slate-500 text-sm">{member.role}</p>

                                <div className="flex space-x-3 mt-6">
                                    <button className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600">
                                        <Mail className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-green-100 dark:hover:bg-green-900/30 hover:text-green-600">
                                        <Phone className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Invite Team Member"
            >
                <form onSubmit={handleAddMember} className="space-y-4">
                    <Input
                        label="Full Name"
                        placeholder="e.g. Alex Johnson"
                        value={newMember.name}
                        onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                        required
                    />
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="alex@company.com"
                        value={newMember.email}
                        onChange={(e) => setNewMember({ ...newMember, email: e.target.value })}
                        required
                    />
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Role</label>
                        <select
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={newMember.role}
                            onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
                        >
                            <option value="">Select Role</option>
                            <option value="Product Manager">Product Manager</option>
                            <option value="Frontend Developer">Frontend Developer</option>
                            <option value="Backend Developer">Backend Developer</option>
                            <option value="UI/UX Designer">UI/UX Designer</option>
                            <option value="QA Tester">QA Tester</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Status</label>
                        <select
                            className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={newMember.status}
                            onChange={(e) => setNewMember({ ...newMember, status: e.target.value })}
                        >
                            <option value="Online">Online</option>
                            <option value="Do not disturb">Do not disturb</option>
                            <option value="Offline">Offline</option>
                        </select>
                    </div>

                    <div className="pt-4 flex justify-end space-x-3">
                        <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button type="submit">Invite Member</Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default Team;
