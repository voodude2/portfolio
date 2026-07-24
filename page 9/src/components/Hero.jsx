import React from 'react';
import { Box, Sparkles, Zap, Layers, ShieldCheck, ArrowRight, Play, Cpu, Eye, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32">
      
      {/* Glow background elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none animate-pulse-emerald"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Live Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-cyber border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide uppercase shadow-lg shadow-emerald-500/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Next-Gen Spatial AI Engine v4.2</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
              Transform Text into <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
                Photorealistic 3D Assets
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-slate-300 text-base sm:text-xl max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Generate game-ready 3D meshes, 8K PBR materials, and USDZ spatial models in seconds with neural topology optimization and WebXR preview.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#playground"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                <span>Start 3D Prompting (Free)</span>
              </a>

              <a
                href="#gallery"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-base font-semibold text-slate-300 hover:text-white glass-cyber rounded-2xl hover:border-emerald-500/40 transition-all"
              >
                <Eye className="w-5 h-5 mr-2 text-emerald-400" />
                <span>Explore Asset Library</span>
              </a>
            </div>

            {/* Metric Highlights */}
            <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-heading">2.4M+</div>
                <div className="text-xs text-slate-400 mt-1">3D Meshes Rendered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-heading">18ms</div>
                <div className="text-xs text-slate-400 mt-1">Neural Inference</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-heading">99.8%</div>
                <div className="text-xs text-slate-400 mt-1">Mesh Topology Precision</div>
              </div>
            </div>

          </div>

          {/* Right Interactive 3D Mesh Preview Widget */}
          <div className="lg:col-span-5">
            <div className="glass-cyber rounded-3xl p-6 border border-emerald-500/20 shadow-2xl relative group overflow-hidden">
              
              {/* Top Bar Controls */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                  <span className="w-3 h-3 rounded-full bg-teal-500"></span>
                  <span className="w-3 h-3 rounded-full bg-cyan-500"></span>
                  <span className="ml-2 font-mono text-slate-300">Viewport: Cyber_Rover_v2.gltf</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px]">
                  60 FPS • 128k Polys
                </span>
              </div>

              {/* Viewport Canvas Simulation Box */}
              <div className="mt-4 relative h-72 sm:h-80 rounded-2xl bg-gradient-to-b from-[#080d1a] to-[#04060d] border border-slate-800/80 flex items-center justify-center overflow-hidden">
                
                {/* Grid Overlay lines */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                {/* Animated Glowing 3D Wireframe Mesh Cube Representation */}
                <div className="relative w-40 h-40 flex items-center justify-center animate-float">
                  <div className="absolute inset-0 rounded-3xl border-2 border-emerald-400/60 shadow-[0_0_40px_rgba(16,185,129,0.3)] animate-spin-slow"></div>
                  <div className="absolute inset-3 rounded-2xl border border-cyan-400/50 transform rotate-45"></div>
                  <Box className="w-16 h-16 text-emerald-400 animate-pulse" />
                </div>

                {/* Floating Mesh Badges */}
                <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] font-mono text-emerald-300 flex items-center space-x-1.5">
                  <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                  <span>PBR Shader: Metallic Roughness</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-800 text-[11px] font-mono text-cyan-300 flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Quad Topology • 0 Tris N-gons</span>
                </div>
              </div>

              {/* Bottom Quick Feature Row */}
              <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Apple Vision Pro USDZ</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center space-x-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Unreal Engine 5 Nanite</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
