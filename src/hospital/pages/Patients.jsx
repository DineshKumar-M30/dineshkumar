import React, { useState } from 'react';
import { useHospital } from '../context/HospitalContext';
import { Card, Button, Input, Table, Badge, Modal } from '../components/UIComponents';
import { Search, UserPlus, Edit2, Trash2, Filter } from 'lucide-react';

const Patients = () => {
    const { patients, addPatient, updatePatient, deletePatient } = useHospital();
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingPatient, setEditingPatient] = useState(null);

    // Form State
    const [formData, setFormData] = useState({
        name: '', age: '', gender: 'Male', bloodGroup: '', phone: '', address: ''
    });

    const filteredPatients = patients.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.phone.includes(searchTerm) ||
        p.id.toString().includes(searchTerm)
    );

    const handleOpenModal = (patient = null) => {
        if (patient) {
            setEditingPatient(patient);
            setFormData({ ...patient });
        } else {
            setEditingPatient(null);
            setFormData({ name: '', age: '', gender: 'Male', bloodGroup: '', phone: '', address: '' });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingPatient) {
            updatePatient(editingPatient.id, formData);
        } else {
            addPatient({ ...formData, lastVisit: new Date().toISOString().split('T')[0] });
        }
        setIsModalOpen(false);
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Patient Management</h1>
                    <p className="text-slate-500">View and manage all hospital patients.</p>
                </div>
                <Button onClick={() => handleOpenModal()} className="w-full sm:w-auto">
                    <UserPlus className="w-4 h-4" />
                    Add New Patient
                </Button>
            </div>

            <Card>
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                        <Input
                            placeholder="Search by name, ID or phone..."
                            className="pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" className="gap-2">
                        <Filter className="w-4 h-4" />
                        Filter
                    </Button>
                </div>

                <Table headers={['ID', 'Name', 'Age/Gender', 'Contact', 'Blood Group', 'Actions']}>
                    {filteredPatients.length > 0 ? (
                        filteredPatients.map((patient) => (
                            <tr key={patient.id} className="hover:bg-slate-50 group">
                                <td className="px-6 py-4 text-sm text-slate-500">#{patient.id}</td>
                                <td className="px-6 py-4">
                                    <div className="font-semibold text-slate-900">{patient.name}</div>
                                    <div className="text-xs text-slate-500">Last visit: {patient.lastVisit}</div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {patient.age} Yrs / {patient.gender}
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">{patient.phone}</td>
                                <td className="px-6 py-4">
                                    <Badge variant="blue">{patient.bloodGroup}</Badge>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => handleOpenModal(patient)}
                                            className="p-2 hover:bg-blue-50 text-blue-600 rounded-lg transition-colors"
                                            title="Edit"
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => deletePatient(patient.id)}
                                            className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                                            title="Delete"
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="6" className="px-6 py-12 text-center text-slate-400">
                                No patients found matching your search.
                            </td>
                        </tr>
                    )}
                </Table>
            </Card>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={editingPatient ? 'Edit Patient' : 'Register New Patient'}
                footer={
                    <>
                        <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button onClick={handleSubmit}>{editingPatient ? 'Update' : 'Register'}</Button>
                    </>
                }
            >
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <Input
                        label="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="Age"
                            type="number"
                            value={formData.age}
                            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                            required
                        />
                        <div className="space-y-1">
                            <label className="block text-sm font-medium text-slate-700">Gender</label>
                            <select
                                className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                value={formData.gender}
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                            >
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="Blood Group"
                            value={formData.bloodGroup}
                            onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })}
                        />
                        <Input
                            label="Phone Number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                        />
                    </div>
                    <Input
                        label="Address"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    />
                </form>
            </Modal>
        </div>
    );
};

export default Patients;
