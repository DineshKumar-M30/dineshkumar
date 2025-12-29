import React, { useState } from 'react';
import { useHospital } from '../context/HospitalContext';
import { Card, Button, Input, Table, Badge, Modal } from '../components/UIComponents';
import { Calendar, Plus, Clock, Stethoscope, User, AlertCircle } from 'lucide-react';
import { APPOINTMENT_STATUS } from '../data/mockData';

const Appointments = () => {
    const { appointments, patients, doctors, bookAppointment, updateAppointmentStatus } = useHospital();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        patientId: '', doctorId: '', date: '', time: '', reason: ''
    });

    const getStatusVariant = (status) => {
        switch (status) {
            case APPOINTMENT_STATUS.CONFIRMED: return 'blue';
            case APPOINTMENT_STATUS.COMPLETED: return 'success';
            case APPOINTMENT_STATUS.PENDING: return 'warning';
            case APPOINTMENT_STATUS.CANCELLED: return 'danger';
            default: return 'neutral';
        }
    };

    const handleBook = (e) => {
        e.preventDefault();
        bookAppointment({
            ...formData,
            patientId: parseInt(formData.patientId),
            doctorId: parseInt(formData.doctorId),
            status: APPOINTMENT_STATUS.PENDING
        });
        setIsModalOpen(false);
        setFormData({ patientId: '', doctorId: '', date: '', time: '', reason: '' });
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Appointments</h1>
                    <p className="text-slate-500">Manage and schedule patient visits.</p>
                </div>
                <Button onClick={() => setIsModalOpen(true)} className="w-full sm:w-auto">
                    <Plus className="w-4 h-4" />
                    Book Appointment
                </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Status Filters */}
                <div className="lg:col-span-1 space-y-4">
                    <Card title="Overview">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 bg-blue-50 text-blue-700 rounded-lg border border-blue-100">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span className="text-sm font-medium">Pending</span>
                                </div>
                                <span className="font-bold">{appointments.filter(a => a.status === APPOINTMENT_STATUS.PENDING).length}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-100">
                                <div className="flex items-center gap-2">
                                    <AlertCircle className="w-4 h-4" />
                                    <span className="text-sm font-medium">Confirmed</span>
                                </div>
                                <span className="font-bold">{appointments.filter(a => a.status === APPOINTMENT_STATUS.CONFIRMED).length}</span>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Appointments Table */}
                <div className="lg:col-span-3">
                    <Card>
                        <Table headers={['Date/Time', 'Patient', 'Doctor', 'Status', 'Actions']}>
                            {appointments.length > 0 ? (
                                [...appointments].reverse().map((appt) => {
                                    const patient = patients.find(p => p.id === appt.patientId);
                                    const doctor = doctors.find(d => d.id === appt.doctorId);
                                    return (
                                        <tr key={appt.id} className="hover:bg-slate-50">
                                            <td className="px-6 py-4">
                                                <div className="font-semibold text-slate-900">{appt.date}</div>
                                                <div className="text-xs text-slate-500 flex items-center gap-1">
                                                    <Clock className="w-3 h-3" /> {appt.time}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-slate-900 font-medium">
                                                    <User className="w-4 h-4 text-slate-400" />
                                                    {patient?.name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-slate-600">
                                                    <Stethoscope className="w-4 h-4 text-slate-400" />
                                                    {doctor?.name}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <Badge variant={getStatusVariant(appt.status)}>{appt.status}</Badge>
                                            </td>
                                            <td className="px-6 py-4">
                                                <select
                                                    className="bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                                                    value={appt.status}
                                                    onChange={(e) => updateAppointmentStatus(appt.id, e.target.value)}
                                                >
                                                    {Object.values(APPOINTMENT_STATUS).map(s => (
                                                        <option key={s} value={s}>{s}</option>
                                                    ))}
                                                </select>
                                            </td>
                                        </tr>
                                    );
                                })
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-6 py-12 text-center text-slate-400">No appointments scheduled.</td>
                                </tr>
                            )}
                        </Table>
                    </Card>
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Schedule Appointment"
                footer={
                    <>
                        <Button variant="secondary" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                        <Button onClick={handleBook}>Confirm Booking</Button>
                    </>
                }
            >
                <form className="space-y-4" onSubmit={handleBook}>
                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-slate-700">Select Patient</label>
                        <select
                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            value={formData.patientId}
                            onChange={(e) => setFormData({ ...formData, patientId: e.target.value })}
                            required
                        >
                            <option value="">Choose a patient...</option>
                            {patients.map(p => (
                                <option key={p.id} value={p.id}>{p.name} (#{p.id})</option>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-1">
                        <label className="block text-sm font-medium text-slate-700">Select Doctor</label>
                        <select
                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                            value={formData.doctorId}
                            onChange={(e) => setFormData({ ...formData, doctorId: e.target.value })}
                            required
                        >
                            <option value="">Choose a doctor...</option>
                            {doctors.map(d => (
                                <option key={d.id} value={d.id}>{d.name} ({d.specialization})</option>
                            ))}
                        </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="Date"
                            type="date"
                            value={formData.date}
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                            required
                        />
                        <Input
                            label="Time"
                            type="time"
                            value={formData.time}
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                            required
                        />
                    </div>
                    <Input
                        label="Reason for Visit"
                        placeholder="e.g. Fever, Consultation, X-Ray"
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    />
                </form>
            </Modal>
        </div>
    );
};

export default Appointments;
