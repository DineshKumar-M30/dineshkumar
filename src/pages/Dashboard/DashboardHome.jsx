import { Heart, Briefcase, ShoppingBag, Gamepad2 } from "lucide-react";
import { Link } from "react-router-dom";
import ReportsChart from "./components/ReportsChart";
import AnalyticsChart from "./components/AnalyticsChart";
import { RecentOrders, TopSellingProducts } from "./components/Tables";

/* ================= STAT CARD ================= */
const StatCard = ({ value, label, icon: Icon, colorClass, iconBgClass }) => (
    <div className="bg-white p-5 rounded-2xl border border-gray-200 flex items-center gap-4 hover:shadow-md transition">
        <div className={`h-12 w-12 rounded-full flex items-center justify-center ${iconBgClass}`}>
            <Icon size={22} className={colorClass} />
        </div>
        <div>
            <h3 className="text-xl font-bold text-gray-800">{value}</h3>
            <p className="text-sm text-gray-500">{label}</p>
        </div>
    </div>
);

/* ================= DASHBOARD ================= */
export default function DashboardHome() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl bg-white border border-gray-300 rounded-2xl p-6 space-y-8">

                {/* HEADER */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

                    {/* DATE RANGE */}
                    <div className="flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden">
                        <div className="flex items-center gap-2 px-4 py-2 border-r">
                            <span className="text-sm text-gray-500">10-06-2021</span>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2">
                            <span className="text-sm text-gray-500">10-10-2021</span>
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* STATS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard
                        value="178+"
                        label="Saved Products"
                        icon={Heart}
                        colorClass="text-blue-500"
                        iconBgClass="bg-blue-100"
                    />

                    <Link to="/tictactoe">
                        <StatCard
                            value="Play Now"
                            label="XO Game Challenge"
                            icon={Gamepad2}
                            colorClass="text-yellow-500"
                            iconBgClass="bg-yellow-100"
                        />
                    </Link>

                    <StatCard
                        value="190+"
                        label="Sales Products"
                        icon={ShoppingBag}
                        colorClass="text-orange-500"
                        iconBgClass="bg-orange-100"
                    />

                    <StatCard
                        value="12+"
                        label="Job Applications"
                        icon={Briefcase}
                        colorClass="text-purple-500"
                        iconBgClass="bg-purple-100"
                    />
                </div>

                {/* CHARTS */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white border rounded-2xl p-4 h-[400px]">
                        <ReportsChart />
                    </div>
                    <div className="bg-white border rounded-2xl p-4 h-[400px]">
                        <AnalyticsChart />
                    </div>
                </div>

                {/* TABLES */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2 bg-white border rounded-2xl p-4">
                        <RecentOrders />
                    </div>
                    <div className="bg-white border rounded-2xl p-4">
                        <TopSellingProducts />
                    </div>
                </div>

            </div>
        </div>
    );
}
