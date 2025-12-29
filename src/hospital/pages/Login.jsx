import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHospital } from '../context/HospitalContext';
import { ROLES } from '../data/mockData';
import { Button, Input, Card } from '../components/UIComponents';
import { PlusCircle, Stethoscope, ShieldCheck, UserCog, ChevronRight } from 'lucide-react';

const Login = () => {
    const { login } = useHospital();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleLogin = (role, name) => {
        setLoading(true);
        setTimeout(() => {
            login(role, name);
            navigate('/hospital');
            setLoading(false);
        }, 800);
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-slate-50 to-indigo-50">
            <div className="w-full max-w-lg">
                <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-blue-600 text-white shadow-2xl shadow-blue-100 mb-6 transform hover:rotate-12 transition-transform">
                        <PlusCircle className="w-12 h-12" />
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-2 uppercase">LifeCare Portal</h1>
                    <p className="text-slate-500 font-medium">Select your role to access the management system</p>
                </div>

                <div className="grid gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <button
                        onClick={() => handleLogin(ROLES.ADMIN, 'Admin Controller')}
                        className="group relative flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-300"
                    >
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                            <ShieldCheck className="w-8 h-8 transition-transform group-hover:scale-110" />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">Hospital Administrator</h3>
                            <p className="text-sm text-slate-500">Manage doctors, billing, and reports</p>
                        </div>
                        <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-blue-600 transition-colors" />
                    </button>

                    <button
                        onClick={() => handleLogin(ROLES.DOCTOR, 'Dr. Sarah Wilson')}
                        className="group relative flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-emerald-200 hover:-translate-y-1.5 transition-all duration-300"
                    >
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                            <Stethoscope className="w-8 h-8 transition-transform group-hover:scale-110" />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="font-bold text-slate-800 text-lg group-hover:text-emerald-600 transition-colors">Medical Doctor</h3>
                            <p className="text-sm text-slate-500">View appointments and history</p>
                        </div>
                        <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-emerald-600 transition-colors" />
                    </button>

                    <button
                        onClick={() => handleLogin(ROLES.RECEPTIONIST, 'Reception Desk')}
                        className="group relative flex items-center gap-6 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:border-amber-200 hover:-translate-y-1.5 transition-all duration-300"
                    >
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all duration-500">
                            <UserCog className="w-8 h-8 transition-transform group-hover:scale-110" />
                        </div>
                        <div className="flex-1 text-left">
                            <h3 className="font-bold text-slate-800 text-lg group-hover:text-amber-600 transition-colors">Receptionist</h3>
                            <p className="text-sm text-slate-500">Patient registration and booking</p>
                        </div>
                        <ChevronRight className="w-6 h-6 text-slate-300 group-hover:text-amber-600 transition-colors" />
                    </button>
                </div>

                <div className="mt-12 text-center text-slate-400 text-sm font-medium">
                    <p>© 2024 LifeCare HMS • Premium Medical Solutions</p>
                </div>
            </div>

            {loading && (
                <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center gap-4">
                    <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-blue-600 font-bold animate-pulse">Initializing Portal...</p>
                </div>
            )}
        </div>
    );
};

export default Login;
