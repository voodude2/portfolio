import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield, HelpCircle } from 'lucide-react';

export default function Pricing() {
  const [annualBilling, setAnnualBilling] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      id: 'starter',
      name: 'Developer',
      tagline: 'Ideal for indie hackers & early-stage projects',
      monthlyPrice: 39,
      annualPrice: 29,
      features: [
        'Up to 15 Active Workflows',
        '100,000 Tokens / Month Included',
        'Claude 3.5 & GPT-4o Mini Access',
        'Standard Vector Search (Pinecone)',
        'Community Discord Support',
        '99.9% Uptime Guarantee'
      ],
      cta: 'Start Free Trial',
      popular: false
    },
    {
      id: 'pro',
      name: 'Pro Team',
      tagline: 'For scaling tech startups & growth engineering teams',
      monthlyPrice: 99,
      annualPrice: 79,
      features: [
        'Up to 100 Active Workflows',
        '2,500,000 Tokens / Month Included',
        'All Frontier LLMs (Claude 3.5, GPT-4o)',
        'Self-Healing Circuit Breaker Retry',
        'Custom Vector DB Connectors',
        'Priority 24/7 Dedicated Support',
        'SOC-2 Compliance Addon Available'
      ],
      cta: 'Get Started Pro',
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise Neural',
      tagline: 'Mission-critical security & dedicated AI infrastructure',
      monthlyPrice: 299,
      annualPrice: 249,
      features: [
        'Unlimited Autonomous Workflows',
        '15,000,000+ Tokens / Month Included',
        'Private VPC & Air-Gapped Deployment',
        'Field-Level AES-256 Data Encryption',
        'Custom Fine-Tuned Model Hosting',
        'Dedicated Solutions Architect (1-on-1)',
        'Guaranteed 99.99% SLA Agreement'
      ],
      cta: 'Contact Sales / Custom',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-purple-400 uppercase px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            Transparent Pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Simple Plans for Teams of All Sizes
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Deploy your first autonomous workflow in under 2 minutes. Upgrade or cancel anytime.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-8 flex items-center justify-center space-x-3">
            <span className={`text-sm font-medium ${!annualBilling ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative w-14 h-8 bg-slate-800 rounded-full p-1 transition-colors border border-slate-700 focus:outline-none"
            >
              <div
                className={`w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-transform ${
                  annualBilling ? 'translate-x-6' : 'translate-x-0'
                }`}
              ></div>
            </button>
            <div className="flex items-center space-x-1.5">
              <span className={`text-sm font-medium ${annualBilling ? 'text-white' : 'text-slate-400'}`}>Annual Billing</span>
              <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                SAVE 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const price = annualBilling ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`glass-card p-8 rounded-3xl relative flex flex-col justify-between transition-all ${
                  plan.popular
                    ? 'border-purple-500/80 ring-2 ring-purple-500/30 bg-slate-900/90 shadow-xl shadow-purple-500/15 scale-105 z-10'
                    : 'border-slate-800/80'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold shadow-md">
                    MOST POPULAR CHOICE
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                  <p className="mt-2 text-xs text-slate-400 min-h-[32px]">{plan.tagline}</p>

                  <div className="mt-6 flex items-baseline">
                    <span className="text-4xl font-extrabold text-white font-heading">${price}</span>
                    <span className="text-slate-400 text-sm ml-1.5">/ month</span>
                  </div>
                  {annualBilling && (
                    <span className="text-[11px] text-emerald-400 block mt-1">Billed annually (${price * 12}/yr)</span>
                  )}

                  <div className="mt-8 pt-6 border-t border-slate-800 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-purple-400 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/30 hover:scale-[1.02]'
                        : 'bg-slate-800 text-white hover:bg-slate-700'
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Plan Confirmation Toast */}
        {selectedPlan && (
          <div className="mt-8 p-4 glass-card rounded-2xl border border-emerald-500/30 text-center max-w-lg mx-auto flex items-center justify-between">
            <span className="text-xs text-emerald-300 font-semibold">
              🎉 Selected Plan: <strong>{selectedPlan}</strong> ({annualBilling ? 'Annual' : 'Monthly'})
            </span>
            <button
              onClick={() => setSelectedPlan(null)}
              className="text-xs text-slate-400 hover:text-white px-2 py-1 bg-slate-800 rounded-md"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
