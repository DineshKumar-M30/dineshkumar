import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';
import { Search, Filter, MoreHorizontal, UserCheck, UserPlus, Mail } from 'lucide-react';
import avatars from '../../assets/dashboard/avatars.png';

const CustomersPage = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const customers = [
        { name: 'Alex Johnson', email: 'alex.j@example.com', status: 'Active', plan: 'Enterprise', joined: 'Oct 12, 2025', avatar_idx: 0 },
        { name: 'Sarah Wilson', email: 'sarah.w@example.com', status: 'Active', plan: 'Professional', joined: 'Nov 05, 2025', avatar_idx: 2 },
        { name: 'Mike Ross', email: 'mike.r@example.com', status: 'Pending', plan: 'Free', joined: 'Dec 01, 2025', avatar_idx: 3 },
        { name: 'Elena Gilbert', email: 'elena.g@example.com', status: 'Inactive', plan: 'Professional', joined: 'Aug 22, 2025', avatar_idx: 5 },
        { name: 'David Miller', email: 'david.m@example.com', status: 'Active', plan: 'Enterprise', joined: 'Sep 15, 2025', avatar_idx: 7 },
        { name: 'Sophia Chen', email: 'sophia.c@example.com', status: 'Active', plan: 'Professional', joined: 'Jan 02, 2026', avatar_idx: 10 },
    ];

    return (
        <div className="space-y-8 animate-in zoom-in-95 duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className={cn("text-3xl font-bold mb-2", isDark ? "text-white" : "text-slate-900")}>
                        Customers
                    </h1>
                    <p className="text-slate-400">Manage your users and monitor their activities.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-800 text-slate-400 font-bold hover:bg-slate-800 transition-all text-sm">
                        <Filter size={18} /> Filters
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-600/20 hover:scale-105 transition-transform text-sm">
                        <UserPlus size={18} /> Add Customer
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {customers.map((customer, idx) => (
                    <div key={customer.email} className={cn(
                        "p-6 rounded-3xl border group hover:border-blue-500/50 transition-all duration-300",
                        isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200"
                    )}>
                        <div className="flex justify-between items-start mb-6">
                            <div className="relative">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-slate-700">
                                    {/* Grid-based avatar simulation from the generated image */}
                                    <div className="w-full h-full relative bg-slate-800">
                                        <img
                                            src={avatars}
                                            alt={customer.name}
                                            className="absolute max-w-none transform scale-50"
                                            style={{
                                                left: `-${(customer.avatar_idx % 4) * 64}px`,
                                                top: `-${Math.floor(customer.avatar_idx / 4) * 64}px`,
                                                width: '256px',
                                                height: '256px'
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className={cn(
                                    "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-[#111827]",
                                    customer.status === 'Active' ? "bg-emerald-500" : "bg-slate-500"
                                )} />
                            </div>
                            <button className="p-2 rounded-lg hover:bg-slate-800 text-slate-500">
                                <MoreHorizontal size={20} />
                            </button>
                        </div>

                        <h3 className={cn("text-lg font-bold mb-1", isDark ? "text-white" : "text-slate-900")}>{customer.name}</h3>
                        <p className="text-xs text-slate-500 font-medium mb-4">{customer.email}</p>

                        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800/50">
                            <div>
                                <p className="text-[10px] uppercase font-black text-slate-600 mb-1">Plan</p>
                                <p className={cn("text-xs font-bold", isDark ? "text-slate-300" : "text-slate-700")}>{customer.plan}</p>
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-black text-slate-600 mb-1">Joined</p>
                                <p className={cn("text-xs font-bold", isDark ? "text-slate-300" : "text-slate-700")}>{customer.joined}</p>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-2">
                            <button className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all text-xs font-bold flex items-center justify-center gap-2">
                                <Mail size={14} /> Message
                            </button>
                            <button className="p-2 rounded-xl bg-blue-600/10 text-blue-500 hover:bg-blue-600 hover:text-white transition-all">
                                <UserCheck size={18} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CustomersPage;
