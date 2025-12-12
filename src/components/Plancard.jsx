import React from "react";

export default function PlanCard({ plan, billing }) {
    return (
        <div
            className={`
        p-6 rounded-2xl border w-80 shadow-xl transition transform
        ${plan.highlighted
                    ? `
            scale-105 
            text-white
             bg-linear-to-b 
            from-[#070010] 
            via-[#35010790] 
            to-[#0727b1]
            border-green-600
            shadow-[0_0_25px_rgba(255,221,0,0.5)]
          `
                    : `
            bg-linear-to-b 
            from-[#7e0202e2] 
            via-[#1E1E1E] 
            to-[rgb(3,14,115)]
            text-white
          `
                }
      `}
        >
            <h2 className="text-xl font-semibold mb-2">{plan.title}</h2>

            <div className="text-4xl font-bold mb-4">
                ${billing === "monthly" ? plan.priceMonthly : plan.priceYearly}
                <span className="text-sm font-light">/month</span>
            </div>

            <div className="mb-3 text-sm bg-white text-black rounded-full px-3 py-1 w-fit">
                {plan.users} USER
            </div>

            <ul className="space-y-2 mb-6 opacity-90">
                {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                        ✓ {f}
                    </li>
                ))}
            </ul>

            <button
                className={`w-full py-3 rounded-full ${plan.highlighted
                        ? "bg-white text-purple-700 font-semibold"
                        : "bg-white/10 text-white border border-white/20"
                    }`}
            >
                {plan.highlighted ? "Upgrade to Pro" : plan.active ? "Active" : "Upgrade"}
            </button>
        </div>
    );
}