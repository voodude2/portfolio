import React, { useState } from 'react';
import { Box, ArrowLeft, Menu, X, Sparkles, ChevronRight, Layers, ShieldCheck } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-cyber border-b border-emerald-500/10 bg-[#050811]/85 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 p-0.5 shadow-lg shadow-emerald-500/20">
              <div className="w-full h-full bg-[#050811] rounded-[10px] flex items-center justify-center">
                <Box className="w-5 h-5 text-emerald-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-xl tracking-tight text-white font-heading">
                  Hyper<span className="text-emerald-400">Render</span>
                </span>
                <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
                  3D AI v4.2
                </span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Generative Spatial Asset & Mesh Engine</p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-slate-300">
            <a href="#playground" className="hover:text-emerald-400 transition-colors">3D Studio</a>
            <a href="#features" className="hover:text-emerald-400 transition-colors">Features</a>
            <a href="#gallery" className="hover:text-emerald-400 transition-colors">Asset Library</a>
            <a href="#pricing" className="hover:text-emerald-400 transition-colors">Pricing</a>
            <a href="#faq" className="hover:text-emerald-400 transition-colors">FAQ</a>
            <a 
              href="../index.html" 
              className="inline-flex items-center space-x-1.5 text-amber-400 hover:text-amber-300 font-semibold px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 transition-all hover:bg-amber-500/20"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Portfolio</span>
            </a>
          </nav>

          {/* Right CTA Action */}
          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="#playground"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Launch Studio Free</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <a 
              href="../index.html" 
              className="text-xs font-semibold px-2.5 py-1.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20"
            >
              ← Portfolio
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-cyber border-t border-emerald-500/10 px-4 pt-3 pb-6 space-y-3">
          <a href="#playground" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-emerald-400">3D Studio</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-emerald-400">Features</a>
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-emerald-400">Asset Library</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-emerald-400">Pricing</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-300 hover:text-emerald-400">FAQ</a>
          <div className="pt-2">
            <a 
              href="#playground"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-xl"
            >
              Launch Studio Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
