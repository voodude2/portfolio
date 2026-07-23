import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Play, Zap, CheckCircle2, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card border border-purple-500/30 text-purple-300 text-xs font-semibold shadow-lg shadow-purple-500/10">
            <Sparkles className="w-4 h-4 text-purple-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>Introducing AetherFlow 3.0 Autonomous Swarms</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
            <span className="text-white/80 hover:text-white flex items-center cursor-pointer">
              Read Docs <ArrowRight className="w-3 h-3 ml-1" />
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Orchestrate Enterprise AI Workflows at{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-300 bg-clip-text text-transparent">
              Neural Speed
            </span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Connect databases, LLM reasoning clusters, and Webhooks into self-healing autonomous workflows. Reduce engineering overhead by 84% with zero code complexity.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 rounded-2xl shadow-xl shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] transition-all active:scale-[0.98]"
            >
              <Zap className="w-5 h-5 mr-2" />
              <span>Deploy Workflow Free</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>

            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-200 glass-card rounded-2xl border border-slate-700/60 hover:bg-slate-800/80 hover:border-slate-600 transition-all"
            >
              <Play className="w-4 h-4 mr-2 fill-purple-400 text-purple-400" />
              <span>Explore Interactive Studio</span>
            </a>
          </div>

          {/* Guarantee Pill */}
          <div className="mt-6 flex items-center justify-center space-x-6 text-xs text-slate-400">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC-2 Type II Certified</span>
            </div>
          </div>
        </div>

        {/* Real-Time Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-5 text-center border border-slate-800">
            <div className="text-3xl font-extrabold text-white font-heading">99.99%</div>
            <div className="text-xs text-slate-400 mt-1">Uptime SLA Guaranteed</div>
          </div>

          <div className="glass-card rounded-2xl p-5 text-center border border-slate-800">
            <div className="text-3xl font-extrabold text-purple-400 font-heading">10B+</div>
            <div className="text-xs text-slate-400 mt-1">Tokens Evaluated / Day</div>
          </div>

          <div className="glass-card rounded-2xl p-5 text-center border border-slate-800">
            <div className="text-3xl font-extrabold text-pink-400 font-heading">84%</div>
            <div className="text-xs text-slate-400 mt-1 font-semibold flex items-center justify-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Cost Cut Average</span>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 text-center border border-slate-800">
            <div className="text-3xl font-extrabold text-amber-400 font-heading">&lt; 14ms</div>
            <div className="text-xs text-slate-400 mt-1">Global Pipeline Latency</div>
          </div>
        </div>

        {/* Customer Logo Cloud */}
        <div className="mt-16 border-t border-slate-800/80 pt-10 text-center">
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">
            Empowering Next-Gen AI Infrastructure At Leading Tech Pioneers
          </p>
          <div className="mt-6 flex flex-wrap justify-center items-center gap-8 md:gap-14 opacity-60">
            <span className="font-bold text-lg text-slate-300 font-heading">GOOGLE CLOUD</span>
            <span className="font-bold text-lg text-slate-300 font-heading">VERCEL</span>
            <span className="font-bold text-lg text-slate-300 font-heading">STRIPE</span>
            <span className="font-bold text-lg text-slate-300 font-heading">LINEAR</span>
            <span className="font-bold text-lg text-slate-300 font-heading">DATADOG</span>
          </div>
        </div>

      </div>
    </section>
  );
}
