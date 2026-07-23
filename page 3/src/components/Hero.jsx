import React from 'react';
import { ArrowRight, Sparkles, Play, Shield, Cpu, Zap, Star } from 'lucide-react';
import DashboardPreview from './DashboardPreview';

export default function Hero({ onOpenModal }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-grid-pattern">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-pink-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Animated Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wide uppercase shadow-lg shadow-indigo-950/40 mb-8 animate-bounce duration-1000">
          <Sparkles className="w-4 h-4 text-indigo-400" />
          <span>React + Tailwind Enterprise SaaS Platform</span>
          <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
          <span className="text-white font-mono lowercase">v4.2 Release</span>
        </div>

        {/* Main Title - Prominently showing React + Tailwind Project */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          Build & Scale Faster with <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500 text-glow">
            React + Tailwind Project
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          The ultimate SaaS architecture engineered for extreme performance. Automate complex workflows, query real-time AI telemetry, and deliver sub-10ms response times globally.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => onOpenModal('signup')}
            className="w-full sm:w-auto relative group overflow-hidden rounded-full p-[1px] font-bold text-base shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 group-hover:opacity-90 transition-opacity"></span>
            <span className="relative block px-8 py-4 rounded-full bg-[#0b0d14] text-white group-hover:bg-opacity-80 transition-all flex items-center justify-center gap-3">
              <span>Start 14-Day Free Trial</span>
              <ArrowRight className="w-5 h-5 text-indigo-400 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>

          <button
            onClick={() => onOpenModal('demo')}
            className="w-full sm:w-auto px-8 py-4 rounded-full glass-card border border-white/15 text-white font-semibold text-base hover:bg-white/10 hover:border-white/25 transition-all flex items-center justify-center gap-3"
          >
            <Play className="w-4 h-4 fill-white text-white" />
            <span>Watch Live Interactive Demo</span>
          </button>
        </div>

        {/* User Rating Badge */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-16 text-slate-400 text-xs font-medium">
          <div className="flex items-center gap-1 text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
            <span className="ml-2 font-bold text-white text-sm">4.9 / 5.0</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span>Trusted by 25,000+ engineers at scale</span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="text-emerald-400 flex items-center gap-1 font-mono">
            <Zap className="w-3.5 h-3.5" /> No Credit Card Required
          </span>
        </div>

        {/* Embedded Interactive SaaS Dashboard Preview */}
        <div id="dashboard" className="max-w-6xl mx-auto">
          <DashboardPreview />
        </div>

      </div>
    </section>
  );
}
