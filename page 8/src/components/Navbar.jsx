import React, { useState } from 'react';
import { Cpu, ArrowLeft, Menu, X, Sparkles, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-500 p-0.5 shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Cpu className="w-5 h-5 text-purple-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-bold text-xl tracking-tight text-white font-heading">Aether<span className="text-purple-400">Flow</span></span>
                <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">AI v3.0</span>
              </div>
              <p className="text-xs text-slate-400 hidden sm:block">Enterprise Neural Workflow Platform</p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <button onClick={() => scrollToSection('features')} className="hover:text-purple-400 transition-colors">Features</button>
            <button onClick={() => scrollToSection('demo')} className="hover:text-purple-400 transition-colors">Live Studio</button>
            <button onClick={() => scrollToSection('calculator')} className="hover:text-purple-400 transition-colors">ROI Engine</button>
            <button onClick={() => scrollToSection('pricing')} className="hover:text-purple-400 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="hover:text-purple-400 transition-colors">FAQ</button>
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
            <button 
              onClick={() => scrollToSection('pricing')}
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span>Start Free Trial</span>
              <ChevronRight className="w-4 h-4 ml-1" />
            </button>
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
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-t border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 text-slate-300 hover:text-white">Features</button>
          <button onClick={() => scrollToSection('demo')} className="block w-full text-left py-2 text-slate-300 hover:text-white">Live Studio</button>
          <button onClick={() => scrollToSection('calculator')} className="block w-full text-left py-2 text-slate-300 hover:text-white">ROI Engine</button>
          <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-2 text-slate-300 hover:text-white">Pricing</button>
          <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 text-slate-300 hover:text-white">FAQ</button>
          <div className="pt-2">
            <button 
              onClick={() => scrollToSection('pricing')}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
