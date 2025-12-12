import React, { useState } from "react";
import BillingToggle from "./components/BillingToggle";
import PlanCard from "./components/PlanCard";
import { pricingPlans } from "./components/pricingData";

export default function App() {
  const [billing, setBilling] = useState("monthly");

  return (
    <div className="min-h-screen bg-gray-800 px-6 py-16">
      <h1 className="text-center text-4xl font-bold mb-2 text-white">Simple Pricing, Powerful Features</h1>
      <p className="text-center text-white mb-10">
        Simple, transparent pricing that grows with you. Try any plan free for 30 days.
      </p>

      <BillingToggle billing={billing} setBilling={setBilling} />

      <div className="flex justify-center gap-8 flex-wrap">
        {pricingPlans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} billing={billing} />
        ))}
      </div>
    </div>
  );
}