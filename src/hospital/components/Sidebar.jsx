import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Users,
    UserRound,
    CalendarCheck,
    Receipt,
    LogOut,
    PlusCircle
} from 'lucide-react';
import { useHospital } from '../context/HospitalContext';
import { ROLES } from '../data/mockData';

const Sidebar = ({ isOpen, setIsOpen }) => {
    const { user, logout } = useHospital();

    const menuItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/hospital', roles: [ROLES.ADMIN, ROLES.DOCTOR, ROLES.RECEPTIONIST] },
        { name: 'Patients', icon: Users, path: '/hospital/patients', roles: [ROLES.ADMIN, ROLES.RECEPTIONIST] },
        { name: 'Doctors', icon: UserRound, path: '/hospital/doctors', roles: [ROLES.ADMIN] },
        { name: 'Appointments', icon: CalendarCheck, path: '/hospital/appointments', roles: [ROLES.ADMIN, ROLES.DOCTOR, ROLES.RECEPTIONIST] },
        { name: 'Billing', icon: Receipt, path: '/hospital/billing', roles: [ROLES.ADMIN, ROLES.RECEPTIONIST] },
    ];

    const filteredItems = menuItems.filter(item => item.roles.includes(user?.role));

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <aside className={`fixed top-0 left-0 h-full bg-white border-r border-slate-200 z-30 transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full md:w-20'}`}>
                <div className="flex flex-col h-full">
                    {/* Logo Section */}
                    <div className="p-4 flex items-center justify-between border-b border-slate-100 h-16">
                        {isOpen ? (
                            <div className="flex items-center gap-2 font-bold text-blue-600 text-xl">
                                <PlusCircle className="w-8 h-8" />
                                <span>LifeCare HMS</span>
                            </div>
                        ) : (
                            <PlusCircle className="w-8 h-8 text-blue-600 mx-auto" />
                        )}
                    </div>

                    {/* Navigation Items */}
                    <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                        {filteredItems.map((item) => (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                end
                                className={({ isActive }) => `
                  flex items-center gap-3 p-3.5 rounded-xl transition-all duration-300
                  ${isActive
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 translate-x-1'
                                        : 'text-slate-500 hover:bg-slate-50 hover:text-blue-600 hover:translate-x-1'}
                  ${!isOpen && 'justify-center p-2.5 translate-x-0'}
                `}
                                title={!isOpen ? item.name : ''}
                            >
                                <item.icon className="w-5 h-5 flex-shrink-0" />
                                {isOpen && <span className="font-medium">{item.name}</span>}
                            </NavLink>
                        ))}
                    </nav>

                    {/* User Info / Logout */}
                    <div className="p-4 border-t border-slate-100">
                        <div className={`flex items-center ${isOpen ? 'gap-3' : 'justify-center'} mb-4`}>
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">
                                {user?.name?.[0] || 'U'}
                            </div>
                            {isOpen && (
                                <div className="overflow-hidden">
                                    <p className="text-sm font-semibold text-slate-900 truncate">{user?.name}</p>
                                    <p className="text-xs text-slate-500 capitalize">{user?.role}</p>
                                </div>
                            )}
                        </div>
                        <button
                            onClick={logout}
                            className={`w-full flex items-center gap-3 p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors ${!isOpen && 'justify-center p-2'}`}
                            title={!isOpen ? 'Logout' : ''}
                        >
                            <LogOut className="w-5 h-5 flex-shrink-0" />
                            {isOpen && <span className="font-medium">Logout</span>}
                        </button>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
