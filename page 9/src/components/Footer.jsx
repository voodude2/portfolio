import React from 'react';
import { Box, ArrowLeft, Heart, ShieldCheck, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#03050b] border-t border-slate-800/80 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-cyan-500 p-0.5">
                <div className="w-full h-full bg-[#050811] rounded-[10px] flex items-center justify-center">
                  <Box className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
              <span className="font-bold text-xl text-white font-heading">
                Hyper<span className="text-emerald-400">Render</span> 3D
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Industrial generative AI platform for 3D spatial mesh synthesis, PBR materials, and real-time WebXR graphics.
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Systems Operational (99.99%)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider font-heading mb-4">Platform</h4>
            <a href="#playground" className="block text-slate-400 hover:text-emerald-400 transition-colors">3D Mesh Studio</a>
            <a href="#features" className="block text-slate-400 hover:text-emerald-400 transition-colors">Neural Features</a>
            <a href="#gallery" className="block text-slate-400 hover:text-emerald-400 transition-colors">Asset Library</a>
            <a href="#pricing" className="block text-slate-400 hover:text-emerald-400 transition-colors">Pricing & Plans</a>
          </div>

          {/* Developer / Portfolio */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-white uppercase tracking-wider font-heading">Developer Portfolio</h4>
            <p className="text-xs text-slate-400">
              Built as a flagship showcase for modern React 19 + Tailwind CSS v4 spatial web applications.
            </p>
            <a
              href="../index.html"
              className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 border border-amber-500/20 text-xs font-bold transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Portfolio Hub</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 HyperRender 3D AI. Built with React 19 & Tailwind CSS v4.
          </div>
          <div className="flex items-center space-x-4">
            <a href="#playground" className="hover:text-slate-300">Privacy Policy</a>
            <span>•</span>
            <a href="#playground" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
