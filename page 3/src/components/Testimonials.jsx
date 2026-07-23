import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Alexandre Dubois',
      role: 'VP of Engineering at CloudScale',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      text: 'Switching our core microservices telemetry to the React + Tailwind Project stack cut our infrastructure latency by 65%. The live dashboard feedback loop is incredible.',
      rating: 5,
      companyLogo: 'CloudScale'
    },
    {
      name: 'Elena Rostova',
      role: 'CTO at QuantumAI',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
      text: 'The edge AI playground and prompt caching saved us over $18,000 in OpenAI API costs in our first month alone. The developer experience is world-class.',
      rating: 5,
      companyLogo: 'QuantumAI'
    },
    {
      name: 'Marcus Vance',
      role: 'Lead Architect at HyperFlow',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      text: 'The speed of deployment and clean component architecture blew our team away. It allowed us to ship our SaaS product 3 weeks ahead of schedule.',
      rating: 5,
      companyLogo: 'HyperFlow'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-[#08090e] relative border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-indigo-400 text-indigo-400" />
            <span>Wall of Love</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Loved by Leading Engineers & Founders
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Discover how high-growth teams build and scale their products on our platform.
          </p>
        </div>

        {/* Testimonials Carousel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote Body */}
                <p className="text-slate-300 text-sm leading-relaxed mb-8 font-light italic">
                  "{rev.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <img
                  src={rev.image}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/40"
                />
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  </h4>
                  <p className="text-xs text-slate-400 font-light">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
