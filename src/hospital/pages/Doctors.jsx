import React from 'react';
import { useHospital } from '../context/HospitalContext';
import { Card, Badge, Button } from '../components/UIComponents';
import { Mail, Phone, Clock, Stethoscope, Search, UserPlus } from 'lucide-react';

const Doctors = () => {
    const { doctors } = useHospital();

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Medical Doctors</h1>
                    <p className="text-slate-500">View specialization and availability of medical staff.</p>
                </div>
                <Button className="w-full sm:w-auto">
                    <UserPlus className="w-4 h-4" />
                    Add New Doctor
                </Button>
            </div>

            <div className="flex bg-white p-2 rounded-xl border border-slate-200 gap-2 mb-8">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by name or specialization..."
                        className="w-full pl-10 pr-4 py-2 focus:outline-none"
                    />
                </div>
                <Button variant="secondary">Search</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {doctors.map((doctor) => (
                    <Card key={doctor.id} className="group hover:border-blue-300 hover:shadow-lg transition-all !p-0 overflow-hidden">
                        <div className="relative h-48 bg-slate-100 overflow-hidden flex items-center justify-center">
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden flex-col items-center justify-center text-slate-300">
                                <Stethoscope className="w-16 h-16 mb-2" />
                                <span className="text-xs font-semibold uppercase tracking-wider">Image Unavailable</span>
                            </div>
                            <div className="absolute top-4 right-4">
                                <Badge variant="blue">{doctor.specialization}</Badge>
                            </div>
                        </div>

                        <div className="p-6 space-y-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">{doctor.name}</h3>
                                <p className="text-sm text-blue-600 font-medium flex items-center gap-1">
                                    <Stethoscope className="w-4 h-4" />
                                    Senior Specialist
                                </p>
                            </div>

                            <div className="space-y-2 py-4 border-y border-slate-100">
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <Clock className="w-4 h-4 text-slate-400" />
                                    <span>{doctor.availability}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <Mail className="w-4 h-4 text-slate-400" />
                                    <span>{doctor.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-slate-600">
                                    <Phone className="w-4 h-4 text-slate-400" />
                                    <span>{doctor.phone}</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <Button variant="outline" className="flex-1">View Profile</Button>
                                <Button className="flex-1">Contact</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Doctors;
