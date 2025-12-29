import React from 'react';
import {
    Users,
    Calendar,
    Stethoscope,
    TrendingUp,
    Clock,
    CheckCircle2,
    XCircle,
    Activity
} from 'lucide-react';
import { useHospital } from '../context/HospitalContext';
import { ROLES, APPOINTMENT_STATUS } from '../data/mockData';
import { Card, Badge, Table } from '../components/UIComponents';

const Dashboard = () => {
    const { user, patients, doctors, appointments } = useHospital();

    const stats = [
        { label: 'Total Patients', value: patients.length, icon: Users, color: 'bg-blue-100 text-blue-600' },
        { label: 'Total Doctors', value: doctors.length, icon: Stethoscope, color: 'bg-indigo-100 text-indigo-600' },
        { label: 'Appointments Today', value: appointments.filter(a => a.date === new Date().toISOString().split('T')[0]).length, icon: Calendar, color: 'bg-emerald-100 text-emerald-600' },
        { label: 'Pending Requests', value: appointments.filter(a => a.status === APPOINTMENT_STATUS.PENDING).length, icon: Clock, color: 'bg-amber-100 text-amber-600' },
    ];

    const recentAppointments = appointments.slice(-5).reverse();

    const getStatusVariant = (status) => {
        switch (status) {
            case APPOINTMENT_STATUS.CONFIRMED: return 'blue';
            case APPOINTMENT_STATUS.COMPLETED: return 'success';
            case APPOINTMENT_STATUS.PENDING: return 'warning';
            case APPOINTMENT_STATUS.CANCELLED: return 'danger';
            default: return 'neutral';
        }
    };

    return (
        <div className="space-y-8">
            {/* Welcome Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                        Welcome back, <span className="text-blue-600 font-black">{user?.name}</span>
                    </h1>
                    <p className="text-slate-500 font-medium">Here's what's happening at the hospital today.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Badge variant="blue" className="py-1 px-4 text-sm">System Online</Badge>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, idx) => (
                    <Card key={idx} className="!p-0 border-none shadow-md hover:shadow-xl hover-lift">
                        <div className="p-6 flex items-center gap-4 relative overflow-hidden group">
                            <div className={`p-4 rounded-2xl ${stat.color} z-10 transition-transform duration-500 group-hover:scale-110`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <div className="z-10">
                                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">{stat.label}</p>
                                <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                            </div>
                            {/* Decorative background circle */}
                            <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full opacity-10 ${stat.color.split(' ')[0]} transition-transform duration-700 group-hover:scale-150`} />
                        </div>
                        <div className="px-6 py-3 bg-slate-50/50 backdrop-blur-sm border-t border-slate-100/50 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <TrendingUp className="w-4 h-4 text-emerald-500" />
                                <span className="text-xs text-slate-500 font-medium"><span className="text-emerald-500 font-bold">+12%</span> today</span>
                            </div>
                            <Badge variant="success">Active</Badge>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Appointments */}
                <Card title="Recent Appointments" className="lg:col-span-2">
                    <Table headers={['Patient', 'Doctor', 'Date/Time', 'Status']}>
                        {recentAppointments.length > 0 ? (
                            recentAppointments.map((appt) => {
                                const patient = patients.find(p => p.id === appt.patientId);
                                const doctor = doctors.find(d => d.id === appt.doctorId);
                                return (
                                    <tr key={appt.id} className="hover:bg-slate-50 group">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-slate-900">{patient?.name}</div>
                                            <div className="text-xs text-slate-500">ID: {appt.patientId}</div>
                                        </td>
                                        <td className="px-6 py-4 text-slate-600 font-medium">{doctor?.name}</td>
                                        <td className="px-6 py-4 text-slate-500">
                                            <div>{appt.date}</div>
                                            <div className="text-xs">{appt.time}</div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <Badge variant={getStatusVariant(appt.status)}>{appt.status}</Badge>
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <tr>
                                <td colSpan="4" className="px-6 py-8 text-center text-slate-500">No appointments found</td>
                            </tr>
                        )}
                    </Table>
                </Card>

                {/* Action Center / Quick Links */}
                <div className="space-y-6">
                    <Card title="Quick Actions">
                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-100 hover:bg-blue-50 hover:border-blue-200 transition-all text-blue-600">
                                <Users className="w-6 h-6" />
                                <span className="text-xs font-semibold">New Patient</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-100 hover:bg-emerald-50 hover:border-emerald-200 transition-all text-emerald-600">
                                <Calendar className="w-6 h-6" />
                                <span className="text-xs font-semibold">Book Appt.</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-100 hover:bg-amber-50 hover:border-amber-200 transition-all text-amber-600">
                                <Activity className="w-6 h-6" />
                                <span className="text-xs font-semibold">Reports</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-4 rounded-xl border border-slate-100 hover:bg-indigo-50 hover:border-indigo-200 transition-all text-indigo-600">
                                <Receipt className="w-6 h-6" />
                                <span className="text-xs font-semibold">Invoice</span>
                            </button>
                        </div>
                    </Card>

                    <Card title="Today's Performance" subtitle="Activity overview">
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                                    <span className="text-sm text-slate-600">Completed</span>
                                </div>
                                <span className="text-sm font-bold">14</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                    <span className="text-sm text-slate-600">Confirmed</span>
                                </div>
                                <span className="text-sm font-bold">8</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                                    <span className="text-sm text-slate-600">Pending</span>
                                </div>
                                <span className="text-sm font-bold">3</span>
                            </div>
                            <div className="pt-2 border-t border-slate-100">
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div className="bg-emerald-500 h-full w-[65%]"></div>
                                </div>
                                <p className="mt-2 text-xs text-slate-500 text-center">65% efficiency today</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

// Dummy icon for Receipt
const Receipt = ({ className }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
);

export default Dashboard;
