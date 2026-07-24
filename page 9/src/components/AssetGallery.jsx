import React, { useState } from 'react';
import { Box, Download, Eye, Sparkles, Filter, Check } from 'lucide-react';

export default function AssetGallery() {
  const [filter, setFilter] = useState('all');
  const [downloadedId, setDownloadedId] = useState(null);

  const assets = [
    { id: 1, title: 'Cyberpunk Hover-Bike X1', category: 'vehicles', polys: '145k', tex: '8K PBR', downloads: '4.2k', glow: 'emerald' },
    { id: 2, title: 'Quantum Exo-Suit Mech', category: 'characters', polys: '280k', tex: '4K PBR', downloads: '8.9k', glow: 'cyan' },
    { id: 3, title: 'Neo-Tokyo Skylight Lounge', category: 'architecture', polys: '320k', tex: '8K PBR', downloads: '3.1k', glow: 'purple' },
    { id: 4, title: 'Plasma Particle Blaster', category: 'sci-fi', polys: '85k', tex: '4K PBR', downloads: '6.7k', glow: 'emerald' },
    { id: 5, title: 'Autonomous Cargo Drone', category: 'vehicles', polys: '110k', tex: '4K PBR', downloads: '5.4k', glow: 'cyan' },
    { id: 6, title: 'Cybernetic Android Sculpt', category: 'characters', polys: '210k', tex: '8K PBR', downloads: '9.3k', glow: 'purple' }
  ];

  const filteredAssets = filter === 'all' 
    ? assets 
    : assets.filter(a => a.category === filter);

  const handleDownload = (id) => {
    setDownloadedId(id);
    setTimeout(() => setDownloadedId(null), 2000);
  };

  return (
    <section id="gallery" className="py-20 relative bg-[#050811]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
              Community & Studio Library
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
              Explore Generative 3D Models
            </h2>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
            {['all', 'vehicles', 'characters', 'architecture', 'sci-fi'].map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                  filter === cat
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Assets Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAssets.map(asset => (
            <div
              key={asset.id}
              className="glass-cyber rounded-3xl overflow-hidden border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group"
            >
              {/* Asset Preview Frame */}
              <div className="relative h-56 bg-gradient-to-b from-[#0a1122] to-[#050811] flex items-center justify-center p-6 border-b border-slate-800">
                
                {/* Background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98110_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                <div className="relative z-10 w-24 h-24 rounded-2xl border border-emerald-400/40 flex items-center justify-center bg-slate-900/80 group-hover:scale-110 transition-transform">
                  <Box className={`w-12 h-12 ${
                    asset.glow === 'emerald' ? 'text-emerald-400' : asset.glow === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                  }`} />
                </div>

                <span className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-full bg-slate-900/90 text-slate-300 border border-slate-800">
                  {asset.category}
                </span>

                <span className="absolute top-4 right-4 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded border border-emerald-500/20">
                  {asset.tex}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-bold text-lg text-white font-heading group-hover:text-emerald-300 transition-colors">
                  {asset.title}
                </h3>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <span>Poly Count: <strong className="text-white">{asset.polys}</strong></span>
                  <span>Downloads: <strong className="text-emerald-400">{asset.downloads}</strong></span>
                </div>

                <div className="mt-6 flex items-center space-x-3">
                  <button
                    onClick={() => handleDownload(asset.id)}
                    className="flex-1 inline-flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 border border-slate-800 hover:bg-emerald-500 hover:border-emerald-500 hover:text-slate-950 transition-all"
                  >
                    {downloadedId === asset.id ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-950" />
                        <span>Downloaded!</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download Asset</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
