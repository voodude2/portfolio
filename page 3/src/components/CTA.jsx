import React, { useState } from 'react';
import { ArrowRight, Sparkles, Check, Send } from 'lucide-react';

export default function CTA({ onOpenModal }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Background glow orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-indigo-600/30 via-purple-600/30 to-pink-600/30 blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-card p-10 sm:p-16 rounded-3xl border border-indigo-500/30 text-center relative overflow-hidden shadow-2xl">
          
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ready to Transform Your SaaS?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6 max-w-3xl mx-auto leading-tight">
            Deploy Your High-Performance App with <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              React + Tailwind Project Today
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 font-light">
            Join over 25,000 developers building lightning-fast SaaS web apps. Get full access to our edge engine and UI component kit.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => onOpenModal('signup')}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-extrabold text-base shadow-xl shadow-indigo-500/30 hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => onOpenModal('demo')}
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-card border border-white/20 text-white font-semibold text-base hover:bg-white/10 transition-all"
            >
              Schedule Enterprise Demo
            </button>
          </div>

          {/* Newsletter Input Form */}
          <form onSubmit={handleSubscribe} className="max-w-md mx-auto relative flex items-center">
            <input
              type="email"
              placeholder="Enter your work email for product updates..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0a0c14]/90 border border-white/15 rounded-full px-5 py-3.5 pr-32 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 bottom-1.5 px-5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
            >
              {subscribed ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-300" />
                  <span>Subscribed!</span>
                </>
              ) : (
                <>
                  <span>Join</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}
