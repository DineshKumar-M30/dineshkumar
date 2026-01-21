import React from 'react';
import { MoreHorizontal, ExternalLink } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';
import { TableData } from '../../utils/mockData';

const DataTable = ({ title }) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className={cn(
            "rounded-2xl border transition-all duration-300 shadow-sm overflow-hidden",
            isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
        )}>
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                <h3 className={cn(
                    "font-bold text-lg",
                    isDark ? "text-slate-100" : "text-slate-900"
                )}>{title}</h3>
                <button className="text-blue-500 hover:text-blue-600 text-sm font-bold flex items-center gap-1">
                    View All <ExternalLink size={14} />
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className={cn(
                            "text-xs uppercase tracking-wider font-bold",
                            isDark ? "text-slate-500 bg-slate-800/50" : "text-slate-400 bg-slate-50"
                        )}>
                            <th className="px-6 py-4">Project Name</th>
                            <th className="px-6 py-4">Status</th>
                            <th className="px-6 py-4">Progress</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        {TableData.map((row) => (
                            <tr key={row.id} className={cn(
                                "group transition-colors",
                                isDark ? "hover:bg-slate-800/30" : "hover:bg-slate-50"
                            )}>
                                <td className="px-6 py-4">
                                    <p className={cn(
                                        "font-semibold",
                                        isDark ? "text-slate-100" : "text-slate-800"
                                    )}>{row.name}</p>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={cn(
                                        "px-2 py-1 rounded-lg text-[10px] font-bold uppercase",
                                        row.status === "Active" ? "bg-blue-500/10 text-blue-500" :
                                            row.status === "Completed" ? "bg-emerald-500/10 text-emerald-500" :
                                                "bg-amber-500/10 text-amber-500"
                                    )}>
                                        {row.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-blue-500"
                                                style={{ width: `${row.progress}%` }}
                                            />
                                        </div>
                                        <span className="text-xs text-slate-400 font-bold">{row.progress}%</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-400">{row.date}</td>
                                <td className="px-6 py-4 text-center">
                                    <button className="p-2 hover:bg-slate-700/50 rounded-lg text-slate-400 transition-colors">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;
