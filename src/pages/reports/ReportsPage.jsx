import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { cn } from '../../utils/cn';
import { Download, Calendar, FileText, ChevronRight, Zap } from 'lucide-react';
import reportsIllustration from '../../assets/dashboard/reports_illustration.png';

const ReportsPage = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const reports = [
        { title: 'Annual Financial Audit 2025', date: 'Jan 15, 2026', size: '4.2 MB', type: 'PDF' },
        { title: 'Q4 User Growth Analysis', date: 'Jan 10, 2026', size: '2.8 MB', type: 'XLS' },
        { title: 'System Security Log Summary', date: 'Jan 05, 2026', size: '1.5 MB', type: 'PDF' },
        { title: 'Marketing Campaign ROI', date: 'Dec 28, 2025', size: '5.1 MB', type: 'PDF' },
    ];

    return (
        <div className="space-y-8 animate-in slide-in-from-bottom duration-700">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className={cn("text-3xl font-bold mb-2", isDark ? "text-white" : "text-slate-900")}>
                        Reports & Documents
                    </h1>
                    <p className="text-slate-400">Generate and manage your business performance documents.</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform">
                    <FileText size={20} /> Generate New Report
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className={cn(
                        "p-8 rounded-3xl border overflow-hidden relative group",
                        isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200"
                    )}>
                        <div className="relative z-10">
                            <h2 className={cn("text-2xl font-bold mb-4", isDark ? "text-white" : "text-slate-900")}>Automatic Insights</h2>
                            <p className="text-slate-400 max-w-md mb-8">
                                Your weekly performance summary is ready. We've noticed a 15% boost in mobile engagement over the last 7 days.
                            </p>
                            <button className="px-5 py-2.5 rounded-xl bg-slate-800 text-white text-sm font-bold hover:bg-slate-700 transition-colors">
                                View Full Summary
                            </button>
                        </div>

                        {/* Visual Illustration */}
                        <div className="absolute -right-10 -bottom-10 w-80 h-80 opacity-40 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0">
                            <img
                                src={reportsIllustration}
                                alt="Reports Illustration"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className={cn("font-bold text-lg", isDark ? "text-white" : "text-slate-900")}>Recent Files</h3>
                        <div className="grid gap-4">
                            {reports.map((report) => (
                                <div key={report.title} className={cn(
                                    "p-4 rounded-2xl border flex items-center justify-between hover:border-blue-500/50 transition-colors cursor-pointer group",
                                    isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200"
                                )}>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500">
                                            <FileText size={24} />
                                        </div>
                                        <div>
                                            <p className={cn("font-bold", isDark ? "text-slate-200" : "text-slate-800")}>{report.title}</p>
                                            <p className="text-xs text-slate-500 font-medium">{report.date} • {report.size}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-1 rounded text-[10px] font-black bg-slate-800 text-slate-400 uppercase">{report.type}</span>
                                        <button className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 group-hover:text-blue-500 transition-colors">
                                            <Download size={18} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className={cn(
                        "p-6 rounded-3xl border",
                        isDark ? "bg-[#111827] border-slate-800" : "bg-white border-slate-200"
                    )}>
                        <h3 className={cn("font-bold mb-6", isDark ? "text-white" : "text-slate-900")}>Scheduled Reports</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-1 h-12 bg-blue-500 rounded-full" />
                                <div>
                                    <p className={cn("text-sm font-bold", isDark ? "text-slate-200" : "text-slate-800")}>Monthly Revenue</p>
                                    <p className="text-xs text-slate-500">Next: Feb 01, 2026</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-1 h-12 bg-emerald-500 rounded-full" />
                                <div>
                                    <p className={cn("text-sm font-bold", isDark ? "text-slate-200" : "text-slate-800")}>User Activity</p>
                                    <p className="text-xs text-slate-500">Next: Jan 28, 2026</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full mt-8 py-3 rounded-xl border border-dashed border-slate-700 text-slate-500 text-sm font-bold hover:text-slate-300 hover:border-slate-500 transition-all">
                            + Add Schedule
                        </button>
                    </div>

                    <div className="p-6 rounded-3xl bg-blue-600 text-white overflow-hidden relative">
                        <h3 className="font-bold relative z-10">Export Summary</h3>
                        <p className="text-blue-100 text-xs mt-2 relative z-10 mb-6 font-medium">Download everything in one click.</p>
                        <button className="w-full py-3 bg-white text-blue-600 font-black rounded-xl text-sm relative z-10 hover:bg-blue-50 transition-colors">
                            Full Backup (.ZIP)
                        </button>
                        <Zap className="absolute -right-4 -bottom-4 text-blue-500 opacity-20" size={120} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReportsPage;
