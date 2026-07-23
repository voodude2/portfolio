import React, { useState } from 'react';
import { Calculator, DollarSign, Clock, TrendingUp, Sparkles, Check } from 'lucide-react';

export default function RoiCalculator() {
  const [workflows, setWorkflows] = useState(50);
  const [teamSize, setTeamSize] = useState(25);

  // Dynamic ROI calculation formula
  const hoursSavedPerMonth = Math.round(workflows * 18 + teamSize * 12);
  const dollarSavingsPerYear = Math.round(hoursSavedPerMonth * 85 * 12);
  const efficiencyMultiplier = (2.4 + (workflows / 100) * 0.8).toFixed(1);

  return (
    <section id="calculator" className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-3xl border border-purple-500/20 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          
          {/* Subtle Glow background */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            
            {/* Left Controls Column */}
            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 text-xs font-semibold border border-purple-500/20">
                <Calculator className="w-3.5 h-3.5" />
                <span>Interactive Cost Engine</span>
              </div>

              <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-heading">
                Calculate Your Enterprise ROI & Hours Saved
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                Adjust your team size and active workflow parameters to estimate real annual financial impact with AetherFlow AI.
              </p>

              {/* Slider 1: Active Workflows */}
              <div className="mt-8 space-y-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-300">Active Automated Workflows:</span>
                  <span className="text-purple-400 font-mono font-bold text-lg">{workflows} Workflows</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="500"
                  step="5"
                  value={workflows}
                  onChange={(e) => setWorkflows(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>10 Workflows</span>
                  <span>250 Workflows</span>
                  <span>500+ Workflows</span>
                </div>
              </div>

              {/* Slider 2: Team Size */}
              <div className="mt-8 space-y-3">
                <div className="flex justify-between items-center text-sm font-semibold">
                  <span className="text-slate-300">Engineering & Ops Team Size:</span>
                  <span className="text-pink-400 font-mono font-bold text-lg">{teamSize} Engineers</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500">
                  <span>5 Engineers</span>
                  <span>50 Engineers</span>
                  <span>100+ Engineers</span>
                </div>
              </div>

              <div className="mt-8 space-y-2">
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Calculated based on average $85/hr developer rate</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Includes self-healing error recovery savings</span>
                </div>
              </div>
            </div>

            {/* Right ROI Results Box */}
            <div className="glass-card bg-slate-900/90 rounded-2xl p-8 border border-slate-800 text-center relative">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                ESTIMATED ANNUAL IMPACT
              </span>

              <div className="mt-6">
                <div className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent font-heading">
                  ${dollarSavingsPerYear.toLocaleString()}
                </div>
                <div className="text-xs font-semibold text-emerald-400 mt-2 flex items-center justify-center space-x-1">
                  <TrendingUp className="w-4 h-4" />
                  <span>Estimated Annual Net Cost Savings</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-800/80 pt-6">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center justify-center text-purple-400 mb-1">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-xs font-bold">MONTHLY TIME</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{hoursSavedPerMonth.toLocaleString()} hrs</div>
                  <div className="text-[10px] text-slate-400">Saved / Month</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                  <div className="flex items-center justify-center text-pink-400 mb-1">
                    <Sparkles className="w-4 h-4 mr-1" />
                    <span className="text-xs font-bold">EFFICIENCY</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{efficiencyMultiplier}x</div>
                  <div className="text-[10px] text-slate-400">Team Velocity</div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="#pricing"
                  className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                >
                  Claim Your Enterprise Savings Now
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
