import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: "What file formats can I export from HyperRender 3D?",
      a: "HyperRender 3D supports OBJ, GLTF 2.0, GLB, Apple Vision Pro USDZ, FBX, and Unreal Engine 5 uasset formats with baked 8K PBR texture maps (Albedo, Normal, Roughness, Metallic, AO)."
    },
    {
      q: "Do I own 100% commercial rights to the generated 3D meshes?",
      a: "Yes. All 3D assets generated on Pro and Enterprise plans belong 100% to you or your studio with full commercial copyright ownership. You can use them in published games, films, AR apps, or commercial merchandise."
    },
    {
      q: "How clean is the generated mesh topology for game engines?",
      a: "Our neural inference pipeline generates quad-dominant topology with uniform poly-density and zero non-manifold geometry. It is fully pre-rigged for subdivision surfaces and physics deformation."
    },
    {
      q: "Do I need a powerful GPU on my local PC to use this?",
      a: "No! All heavy neural inference, diffusion mesh processing, and raytraced PBR texture baking happen on our dedicated cloud NVIDIA H100 GPU clusters. All you need is a modern web browser."
    },
    {
      q: "Is there a direct plugin for Unreal Engine 5 and Unity?",
      a: "Yes! Pro and Enterprise plans include access to our Live-Link UE5 and Unity C# plugins. You can search, generate, and import 3D meshes directly into your game project viewport without leaving the engine."
    }
  ];

  return (
    <section id="faq" className="py-20 relative bg-[#050811]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            Frequently Asked Questions
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Got Questions? We Have Answers.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="mt-12 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="glass-cyber rounded-2xl border border-slate-800 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-bold text-base text-white font-heading flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-emerald-400' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 font-light">
                    {faq.a}
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
