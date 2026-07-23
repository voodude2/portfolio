import React, { useState } from 'react';
import { Check, Zap, Sparkles, Shield, ArrowRight } from 'lucide-react';

export default function Pricing({ onOpenModal }) {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter Developer',
      tagline: 'Ideal for side projects & individual builders',
      priceMonthly: '$0',
      priceAnnual: '$0',
      period: 'forever free',
      popular: false,
      cta: 'Start Free Forever',
      features: [
        'Up to 100,000 requests/mo',
        '2 Global edge regions',
        'Basic telemetry dashboards',
        'Community Discord support',
        'Standard rate limiting',
      ],
    },
    {
      name: 'Pro Scale',
      tagline: 'Designed for scaling startups & SaaS teams',
      priceMonthly: '$29',
      priceAnnual: '$22',
      period: 'per month',
      popular: true,
      cta: 'Start 14-Day Free Trial',
      features: [
        'Up to 10,000,000 requests/mo',
        '300+ Edge location CDN',
        'Sub-10ms AI prompt caching',
        'Priority 24/7 Slack support',
        'Custom domain SSL certificates',
        '99.99% SLA Uptime Guarantee',
        'Audit logs & SOC2 security',
      ],
    },
    {
      name: 'Enterprise Ultra',
      tagline: 'Maximum security, isolation, and SLA guarantees',
      priceMonthly: 'Custom',
      priceAnnual: 'Custom',
      period: 'tailored billing',
      popular: false,
      cta: 'Contact Enterprise Sales',
      features: [
        'Unlimited API volume & throughput',
        'Dedicated single-tenant infrastructure',
        'Custom model fine-tuning & LoRA',
        'Dedicated Solutions Engineer',
        'HIPAA & GDPR compliance agreements',
        '99.999% SLA Uptime & credit refunds',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 relative bg-grid-pattern overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-t from-indigo-600/20 via-purple-600/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Simple Plans Built for Every Scale
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Start completely free. Upgrade seamlessly as your application traffic expands globally.
          </p>
        </div>

        {/* Monthly / Annual Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-semibold ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-8 rounded-full bg-[#171a29] border border-white/15 p-1 relative transition-colors"
            aria-label="Toggle annual pricing"
          >
            <div
              className={`w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-semibold ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Annual Billing
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold font-mono">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-3xl p-8 border relative flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'border-indigo-500/50 bg-gradient-to-b from-indigo-950/40 via-[#0e101b] to-[#0b0c15] shadow-2xl shadow-indigo-500/20 lg:-translate-y-3'
                  : 'border-white/10 bg-[#0c0e17]/80 hover:border-white/20'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-extrabold uppercase tracking-wider shadow-lg">
                  Most Popular Choice
                </div>
              )}

              <div>
                {/* Plan Header */}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-slate-400 mb-6 font-light">{plan.tagline}</p>

                {/* Price Display */}
                <div className="mb-6 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                    {isAnnual ? plan.priceAnnual : plan.priceMonthly}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">{plan.period}</span>
                </div>

                {/* Feature List */}
                <div className="space-y-3 pt-6 border-t border-white/10 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-3 text-sm text-slate-300">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-emerald-400" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenModal(plan.name)}
                className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/30 hover:brightness-110'
                    : 'glass-card border border-white/15 text-white hover:bg-white/10'
                }`}
              >
                <span>{plan.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
