import React from 'react';
import { Zap, Github, Twitter, Linkedin, Disc as Discord } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#040508] border-t border-white/10 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#0d0e15] rounded-[7px] flex items-center justify-center">
                  <Zap className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="font-bold text-base text-white tracking-tight">
                React + Tailwind <span className="text-indigo-400">Project</span>
              </span>
            </div>
            <p className="text-slate-400 font-light max-w-sm leading-relaxed">
              Enterprise-grade SaaS starter platform built with React, Vite, and Tailwind CSS. Empowering developers to build, deploy, and scale in record time.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-lg glass-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg glass-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg glass-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg glass-card border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-indigo-500/40 transition-colors">
                <Discord className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-[11px] font-mono text-indigo-400">Product</h4>
            <ul className="space-y-2.5">
              <li><a href="#features" className="hover:text-white transition-colors">AI Engine</a></li>
              <li><a href="#dashboard" className="hover:text-white transition-colors">Edge Telemetry</a></li>
              <li><a href="#playground" className="hover:text-white transition-colors">API Playground</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Changelog v4.2</a></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-[11px] font-mono text-indigo-400">Developers</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GitHub Repository</a></li>
              <li><a href="#" className="hover:text-white transition-colors">System Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SDK Release Notes</a></li>
            </ul>
          </div>

          {/* Links 3 */}
          <div>
            <h4 className="font-bold text-white mb-4 uppercase tracking-wider text-[11px] font-mono text-indigo-400">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers (Hiring)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Enclave</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} React + Tailwind Project. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>All Global Edge Regions Operational</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
