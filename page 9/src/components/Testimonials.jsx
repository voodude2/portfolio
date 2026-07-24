import React from 'react';
import { Star, Quote, ShieldCheck } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      quote: "HyperRender 3D completely transformed our indie game pipeline. What used to take our 3D modeling team 3 days now takes 15 seconds. The quad topology output in Unreal Engine 5 is spotless.",
      name: "Marcus Vance",
      role: "Lead 3D Tech Artist at CyberForge Games",
      rating: 5
    },
    {
      quote: "The 8K PBR shader diffusion quality is unbelievable. Having normal maps and roughness pre-baked for Apple Vision Pro USDZ format saved us hundreds of production hours.",
      name: "Elena Rostova",
      role: "Spatial AR Architect at Lumina VR",
      rating: 5
    },
    {
      quote: "Private tenant cloud deployment was essential for our enterprise studio. Zero IP leakage, lightning fast 18ms GPU inference, and native Unity Nanite integration.",
      name: "David K. Chen",
      role: "VP of Interactive Media at Nexon Spatial Labs",
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative bg-[#050811]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-teal-400 uppercase px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30">
            Validated by Game Creators
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Trusted by 500+ Game & VFX Studios
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-cyber rounded-3xl p-8 border border-slate-800 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-1 text-amber-400 mb-6">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-emerald-500/20 mb-4" />
                <p className="text-slate-300 text-sm leading-relaxed font-light italic">
                  "{rev.quote}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center text-slate-950 font-bold font-mono text-sm">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{rev.name}</h4>
                  <p className="text-xs text-slate-400">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
