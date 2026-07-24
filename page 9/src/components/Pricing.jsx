import React, { useState } from 'react';
import { Check, Sparkles, Zap, ShieldCheck, Box } from 'lucide-react';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plans = [
    {
      name: "Creator Starter",
      desc: "Ideal for indie game developers & hobbyists exploring generative 3D.",
      monthlyPrice: 0,
      annualPrice: 0,
      badge: "Free Forever",
      popular: false,
      features: [
        "50 Generative 3D Meshes / Month",
        "2K PBR Material Shader Export",
        "Standard OBJ & GLTF Formats",
        "WebXR & Browser Viewport Preview",
        "Community Discord Support"
      ]
    },
    {
      name: "Pro Studio",
      desc: "For professional 3D artists, game studios & AR spatial creators.",
      monthlyPrice: 39,
      annualPrice: 29,
      badge: "Most Popular",
      popular: true,
      features: [
        "Unlimited Generative 3D Meshes",
        "8K Ultra PBR Texture Maps (All Layers)",
        "Apple Vision Pro USDZ & Unreal Engine 5 Nanite",
        "Quad Topology Optimization Engine",
        "Direct Live-Link Unity & UE5 Plugins",
        "Priority GPU Inference Pipeline (18ms)"
      ]
    },
    {
      name: "Enterprise Studio",
      desc: "Dedicated cloud clusters & private custom model training.",
      monthlyPrice: 129,
      annualPrice: 99,
      badge: "Custom Cloud",
      popular: false,
      features: [
        "Everything in Pro Studio",
        "Private Tenant Dedicated GPU Nodes",
        "Custom Fine-Tuned 3D Diffusion Weights",
        "Zero Training Data Leaks & SSO SAML",
        "SLA 99.99% Uptime Guarantee",
        "24/7 Dedicated Technical Account Manager"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            Transparent Pricing
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Choose Your Spatial 3D Engine Plan
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Start creating photorealistic 3D assets for free. Upgrade anytime for 8K PBR textures and Unreal Engine live-link export.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="mt-10 inline-flex items-center space-x-4 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                !isAnnual ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                isAnnual ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] uppercase tracking-wider font-extrabold bg-slate-950 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/30">
                Save 25%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={idx}
                className={`glass-cyber rounded-3xl p-8 border relative flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'border-emerald-500 ring-2 ring-emerald-500/30 bg-emerald-950/20 shadow-[0_0_50px_rgba(16,185,129,0.25)]'
                    : 'border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Badge */}
                  <div className="flex justify-between items-center mb-6">
                    <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${
                      plan.popular 
                        ? 'bg-emerald-500 text-slate-950 border-emerald-400 font-extrabold' 
                        : 'bg-slate-900 text-slate-300 border-slate-800'
                    }`}>
                      {plan.badge}
                    </span>
                    {isAnnual && price > 0 && (
                      <span className="text-[11px] text-emerald-400 font-mono">Billed annually</span>
                    )}
                  </div>

                  <h3 className="text-2xl font-extrabold text-white font-heading">{plan.name}</h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed font-light">{plan.desc}</p>

                  {/* Price display */}
                  <div className="mt-6 flex items-baseline">
                    <span className="text-5xl font-extrabold text-white font-heading">${price}</span>
                    <span className="text-slate-400 text-sm font-medium ml-2">/ month</span>
                  </div>

                  {/* Feature list */}
                  <ul className="mt-8 space-y-3.5 border-t border-slate-800/80 pt-6">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 mr-2.5 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-10">
                  <button
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full py-4 px-6 rounded-2xl font-bold text-sm transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30 hover:scale-[1.02] active:scale-[0.98]'
                        : 'bg-slate-900 text-slate-200 border border-slate-800 hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-500'
                    }`}
                  >
                    Select {plan.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Confirmation Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="glass-cyber rounded-3xl p-8 max-w-md w-full border border-emerald-500/40 text-center shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/30 mb-4">
              <Sparkles className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">Plan Selected!</h3>
            <p className="mt-2 text-sm text-slate-300">
              You have chosen the <strong className="text-emerald-400">{selectedPlan}</strong> plan with {isAnnual ? 'annual' : 'monthly'} billing.
            </p>
            <p className="mt-3 text-xs text-slate-400">
              Free trial activated. No credit card required to start generating 3D models.
            </p>
            <button
              onClick={() => setSelectedPlan(null)}
              className="mt-6 w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-colors"
            >
              Continue to 3D Dashboard
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
