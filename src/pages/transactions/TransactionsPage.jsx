import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';
import { CreditCard, ArrowUpRight, ArrowDownLeft, Search, Download } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { ChartData } from '../../utils/mockData';

const TransactionsPage = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const transactions = [
        { id: '#TRX-9482', user: 'Alex Johnson', amount: '+$1,200.00', date: 'Jan 20, 2026', type: 'Credit', status: 'Success' },
        { id: '#TRX-9481', user: 'Adobe Systems', amount: '-$240.00', date: 'Jan 19, 2026', type: 'Debit', status: 'Success' },
        { id: '#TRX-9480', user: 'Digital Ocean', amount: '-$56.00', date: 'Jan 19, 2026', type: 'Debit', status: 'Pending' },
        { id: '#TRX-9479', user: 'Sarah Wilson', amount: '+$450.00', date: 'Jan 18, 2026', type: 'Credit', status: 'Success' },
        { id: '#TRX-9478', user: 'OpenAI API', amount: '-$120.00', date: 'Jan 18, 2026', type: 'Debit', status: 'Failed' },
        { id: '#TRX-9477', user: 'Amazon Web Srv', amount: '-$890.00', date: 'Jan 17, 2026', type: 'Debit', status: 'Success' },
        { id: '#TRX-9476', user: 'Mike Ross', amount: '+$80.00', date: 'Jan 17, 2026', type: 'Credit', status: 'Success' },
    ];

    return (
        <div className="space-y-8 animate-in slide-in-from-right duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className={cn("text-3xl font-bold mb-2", isDark ? "text-white" : "text-slate-900")}>
                        Transactions
                    </h1>
                    <p className="text-slate-400">Track and manage your incoming and outgoing payments.</p>
                </div>
                <div className="flex gap-3">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                        <input
                            type="text"
                            placeholder="Search TXID..."
                            className={cn(
                                "pl-10 pr-4 py-2.5 rounded-xl border outline-none bg-transparent transition-all w-64",
                                isDark ? "border-slate-800 focus:border-blue-500 text-white" : "border-slate-200 focus:border-blue-500"
                            )}
                        />
                    </div>
                    <button className="p-2.5 rounded-xl border border-slate-800 text-slate-400 hover:bg-slate-800 transition-all">
                        <Download size={20} />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className={cn("p-6 rounded-3xl border lg:col-span-2", isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200")}>
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <p className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Balance Fluctuations</p>
                            <h2 className={cn("text-3xl font-black", isDark ? "text-white" : "text-slate-900")}>$42,850.00</h2>
                        </div>
                        <div className="px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-tighter">
                            Highly Stable
                        </div>
                    </div>
                    <div className="h-24">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={ChartData.slice(0, 7)}>
                                <Area type="monotone" dataKey="revenue" stroke="#3b82f6" fill="#3b82f633" strokeWidth={2} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className={cn("p-6 rounded-3xl border", isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200")}>
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 flex items-center justify-center text-emerald-600 mb-4">
                        <ArrowDownLeft size={24} />
                    </div>
                    <p className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Income</p>
                    <h2 className={cn("text-2xl font-black", isDark ? "text-white" : "text-slate-900")}>$12,400.00</h2>
                    <p className="text-xs text-slate-500 mt-4">Current month</p>
                </div>
                <div className={cn("p-6 rounded-3xl border", isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200")}>
                    <div className="w-12 h-12 rounded-2xl bg-rose-600/10 flex items-center justify-center text-rose-600 mb-4">
                        <ArrowUpRight size={24} />
                    </div>
                    <p className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Expenses</p>
                    <h2 className={cn("text-2xl font-black", isDark ? "text-white" : "text-slate-900")}>$3,820.00</h2>
                    <p className="text-xs text-slate-500 mt-4">Current month</p>
                </div>
            </div>

            <div className={cn(
                "rounded-3xl border overflow-hidden",
                isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200"
            )}>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className={cn("border-b", isDark ? "border-slate-800" : "border-slate-100")}>
                            <th className="p-5 text-xs font-black text-slate-500 uppercase tracking-widest">Transaction</th>
                            <th className="p-5 text-xs font-black text-slate-500 uppercase tracking-widest">Date</th>
                            <th className="p-5 text-xs font-black text-slate-500 uppercase tracking-widest">Amount</th>
                            <th className="p-5 text-xs font-black text-slate-500 uppercase tracking-widest">Status</th>
                            <th className="p-5 text-xs font-black text-slate-500 uppercase tracking-widest">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((trx) => (
                            <tr key={trx.id} className={cn("border-b hover:bg-slate-800/20 transition-colors", isDark ? "border-slate-800" : "border-slate-50")}>
                                <td className="p-5">
                                    <p className={cn("font-bold text-sm", isDark ? "text-slate-200" : "text-slate-800")}>{trx.user}</p>
                                    <p className="text-[10px] font-bold text-slate-500">{trx.id}</p>
                                </td>
                                <td className="p-5 text-xs font-bold text-slate-400">{trx.date}</td>
                                <td className={cn("p-5 font-black text-sm", trx.amount.startsWith('+') ? "text-emerald-500" : "text-slate-300")}>{trx.amount}</td>
                                <td className="p-5">
                                    <span className={cn(
                                        "px-2 py-1 rounded-md text-[10px] font-black uppercase",
                                        trx.status === 'Success' ? "bg-emerald-500/10 text-emerald-500" :
                                            trx.status === 'Pending' ? "bg-amber-500/10 text-amber-500" : "bg-rose-500/10 text-rose-500"
                                    )}>
                                        {trx.status}
                                    </span>
                                </td>
                                <td className="p-5 text-xs font-bold text-slate-500">{trx.type}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionsPage;
