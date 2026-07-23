import React from 'react';
import { Cpu, ArrowLeft, Heart, ShieldCheck, Globe, Share2, Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative z-10 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white font-bold">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg text-white font-heading">AetherFlow AI</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              The next-generation autonomous AI orchestration platform built for high-growth tech teams. Deploy fault-tolerant LLM pipelines in minutes.
            </p>
            
            <div className="flex items-center space-x-3 text-emerald-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Systems Operational (99.99% SLA)</span>
            </div>
          </div>

          {/* Links Col 1 */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">Product</h4>
            <ul className="space-y-2.5">
              <li><a href="#features" className="hover:text-purple-400 transition-colors">Neural Swarms</a></li>
              <li><a href="#demo" className="hover:text-purple-400 transition-colors">Visual Studio</a></li>
              <li><a href="#calculator" className="hover:text-purple-400 transition-colors">ROI Engine</a></li>
              <li><a href="#pricing" className="hover:text-purple-400 transition-colors">Enterprise Pricing</a></li>
            </ul>
          </div>

          {/* Links Col 2 */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">Resources</h4>
            <ul className="space-y-2.5">
              <li><a href="#faq" className="hover:text-purple-400 transition-colors">Documentation</a></li>
              <li><a href="#faq" className="hover:text-purple-400 transition-colors">API Reference</a></li>
              <li><a href="#faq" className="hover:text-purple-400 transition-colors">SOC-2 Compliance</a></li>
              <li><a href="#faq" className="hover:text-purple-400 transition-colors">System Status</a></li>
            </ul>
          </div>

          {/* Links Col 3 */}
          <div>
            <h4 className="font-bold text-white uppercase tracking-wider text-xs mb-4">Developer Portfolio</h4>
            <div className="space-y-3">
              <p className="text-slate-400">Created as part of the modern React + Tailwind portfolio showcase.</p>
              <a
                href="../index.html"
                className="inline-flex items-center space-x-2 text-amber-400 hover:text-amber-300 font-bold bg-amber-500/10 px-3 py-2 rounded-lg border border-amber-500/20"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Portfolio</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 AetherFlow AI Inc. Built with React 19 & Tailwind CSS v4.</p>
          <div className="flex items-center space-x-4">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-200 cursor-pointer">Security</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
