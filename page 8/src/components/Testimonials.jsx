import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Elena Rostova',
      role: 'VP of Engineering',
      company: 'DataPulse Cloud',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      content: 'AetherFlow reduced our microservice automation build times from weeks to 3 hours. The self-healing circuit breakers saved our team during a major vector database outage.',
      stars: 5
    },
    {
      name: 'Marcus Vance',
      role: 'Head of AI Infrastructure',
      company: 'Nexus Dynamics',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      content: 'The millisecond telemetry tracing and multi-agent LLM reasoning pipeline allowed us to scale 10B tokens daily with 84% cost savings compared to raw OpenAI endpoints.',
      stars: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Architect',
      company: 'Hyperion Systems',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      content: 'The SOC-2 compliance and field-level AES encryption gave our enterprise security audit committee complete confidence. Phenomenal product execution.',
      stars: 5
    }
  ];

  return (
    <section className="py-20 relative bg-slate-950/60 border-t border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-purple-400 uppercase px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            Validated by Engineering Leaders
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Trusted By Modern AI Innovators
          </h2>
        </div>

        {/* Testimonials Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-4">
                  {[...Array(rev.stars)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "{rev.content}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center space-x-4">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                />
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-slate-400">{rev.role} • <span className="text-purple-400 font-semibold">{rev.company}</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
