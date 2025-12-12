import React from "react";

export default function BillingToggle({ billing, setBilling }) {
    return (
        <div className="flex items-center justify-center mb-10">
            <div className="bg-purple-900 flex rounded-full p-1">
                <button
                    onClick={() => setBilling("monthly")}
                    className={`px-5 py-2 rounded-full transition ${billing === "monthly" ? "bg-white shadow font-semibold" : ""
                        }`}
                >
                    Monthly billing
                </button>

                <button
                    onClick={() => setBilling("yearly")}
                    className={`px-5 py-2 rounded-full transition ${billing === "yearly" ? "bg-white shadow font-semibold" : ""
                        }`}
                >
                    Annual billing
                </button>
            </div>
        </div>
    );
}