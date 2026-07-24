import React from 'react';
import { Cpu, Layers, Glasses, Zap, ShieldCheck, Globe, CheckCircle2 } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      icon: Cpu,
      title: "Neural Mesh Topology",
      desc: "Generates clean quad-dominant meshes with zero non-manifold edges. Optimized instantly for real-time physics and subdivision deformation.",
      badge: "AI Geometry"
    },
    {
      icon: Layers,
      title: "Auto 8K PBR Shader Synthesis",
      desc: "Simultaneously bakes Normal, Metallic, Roughness, Ambient Occlusion, and Height maps using neural material diffusion models.",
      badge: "8K Materials"
    },
    {
      icon: Glasses,
      title: "WebXR & Apple Vision Pro USDZ",
      desc: "Export spatial computing objects in one click. Fully compatible with Safari QuickLook, WebXR, Meta Quest 3, and VisionOS.",
      badge: "Spatial Computing"
    },
    {
      icon: Zap,
      title: "Unreal Engine 5 & Unity Bridge",
      desc: "Direct live-link plugin imports generated assets directly into your UE5 content browser with Nanite and Lumen configuration.",
      badge: "Game Engine Ready"
    },
    {
      icon: ShieldCheck,
      title: "Enterprise IP & Commercial License",
      desc: "100% full commercial copyright ownership. Zero training data leaks with private enterprise tenant cloud encryption.",
      badge: "100% IP Secure"
    },
    {
      icon: Globe,
      title: "Multi-User Collaborative Canvas",
      desc: "Invite team 3D artists, game directors, and clients to inspect, review, and tweak 3D spatial prompts in real time.",
      badge: "Real-time Cloud"
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            Enterprise Architecture
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Built for Game Studios, VFX & Spatial AR
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Empower your creative pipeline with industrial-grade generative 3D tools engineered for maximum fidelity and performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresList.map((feat, idx) => {
            const Icon = feat.icon;

            return (
              <div
                key={idx}
                className="glass-cyber glass-cyber-hover rounded-3xl p-8 border border-emerald-500/15 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <span className="text-[11px] font-mono font-bold text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      {feat.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-emerald-300 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="mt-3 text-slate-400 text-sm leading-relaxed font-light">
                    {feat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center space-x-2 text-xs font-semibold text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Production Ready Spec</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
