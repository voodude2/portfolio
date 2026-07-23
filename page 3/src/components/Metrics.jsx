import React from 'react';
import { ShieldCheck, Cpu, Database, Server, Cloud, Globe } from 'lucide-react';

export default function Metrics() {
  const stats = [
    { label: 'Uptime SLA', value: '99.999%', subtext: 'Multi-region failover' },
    { label: 'Daily API Telemetry', value: '14.8 Billion', subtext: 'Global edge processing' },
    { label: 'Avg Global Latency', value: '< 8 ms', subtext: '300+ CDN edge locations' },
    { label: 'Active Developers', value: '85,000+', subtext: 'Across 140 countries' },
  ];

  const partners = [
    { name: 'React', icon: Globe },
    { name: 'Tailwind CSS', icon: Cpu },
    { name: 'Vite Engine', icon: Server },
    { name: 'TypeScript', icon: ShieldCheck },
    { name: 'Docker Edge', icon: Cloud },
    { name: 'PostgreSQL', icon: Database },
  ];

  return (
    <section className="py-16 border-y border-white/10 bg-[#07080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-indigo-300 mb-1">{stat.label}</div>
              <div className="text-xs text-slate-400 font-light">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Partners Banner */}
        <div className="pt-8 border-t border-white/5">
          <p className="text-center text-xs font-mono uppercase tracking-widest text-slate-400 mb-8">
            Engineered with Modern Industry Stack Technologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75">
            {partners.map((partner, idx) => {
              const Icon = partner.icon;
              return (
                <div key={idx} className="flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors cursor-pointer group">
                  <Icon className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-sm tracking-tight">{partner.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
