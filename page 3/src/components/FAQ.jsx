import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      question: 'What is included in the React + Tailwind Project platform?',
      answer: 'React + Tailwind Project provides a production-ready SaaS template complete with Vite build engine, Tailwind v3/v4 responsive styles, Lucide icon libraries, interactive live telemetry dashboards, AI playground generator, and pre-built components for authentication, billing, and global edge deployments.'
    },
    {
      question: 'How do I customize the theme and color palettes?',
      answer: 'All design tokens are defined inside tailwind.config.js and src/index.css. You can easily adjust brand colors, gradient highlights, font stacks (Google Fonts), or border radii with simple Tailwind utility classes.'
    },
    {
      question: 'Can I connect custom AI models or my own API endpoints?',
      answer: 'Yes! The API Playground component is designed to connect seamlessly with OpenAI, Anthropic, Ollama, or any custom REST/GraphQL backend endpoint.'
    },
    {
      question: 'Is there a free tier available for open source or personal projects?',
      answer: 'Absolutely. Our Starter Developer tier is free forever and includes 100,000 monthly API calls, global edge routing, and access to all core UI components.'
    },
    {
      question: 'How does edge latency compare to traditional server hosting?',
      answer: 'Our global edge CDN operates across 300+ locations worldwide, delivering sub-10ms response times by executing logic closest to your end users.'
    }
  ];

  return (
    <section id="faq" className="py-24 bg-[#06070c] relative border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Everything you need to know about setting up and scaling your React + Tailwind application.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-white text-base hover:text-indigo-300 transition-colors"
                >
                  <span>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform ${isOpen ? 'rotate-180 bg-indigo-600/30 text-indigo-300' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 font-light leading-relaxed border-t border-white/5 pt-4 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
