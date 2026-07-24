import React, { useState } from 'react';
import { Box, Sparkles, Sliders, Activity, Download, RefreshCw, Layers, Eye, Cpu, Zap, Check, Play, Settings } from 'lucide-react';

export default function StudioPlayground() {
  const [activeTab, setActiveTab] = useState('generator');
  
  // Generator State
  const [selectedPrompt, setSelectedPrompt] = useState('Cyberpunk Hoverbike');
  const [polyCount, setPolyCount] = useState(120000);
  const [textureRes, setTextureRes] = useState('4K PBR');
  const [shaderPreset, setShaderPreset] = useState('Metallic Chrome');
  const [wireframeMode, setWireframeMode] = useState(false);
  const [isRendering, setIsRendering] = useState(false);
  const [exportedFormat, setExportedFormat] = useState(null);

  // Material Shader State
  const [metallic, setMetallic] = useState(0.85);
  const [roughness, setRoughness] = useState(0.15);
  const [emissive, setEmissive] = useState(0.60);
  const [glowColor, setGlowColor] = useState('emerald');

  const prompts = [
    'Cyberpunk Hoverbike',
    'Bio-Luminescent Mech',
    'Luxury Futuristic Chair',
    'Sci-Fi Quantum Helmet'
  ];

  const handlePromptChange = (prompt) => {
    setSelectedPrompt(prompt);
    triggerReRender();
  };

  const triggerReRender = () => {
    setIsRendering(true);
    setTimeout(() => {
      setIsRendering(false);
    }, 300);
  };

  const handleExport = (format) => {
    setExportedFormat(format);
    setTimeout(() => setExportedFormat(null), 2500);
  };

  return (
    <section id="playground" className="py-20 relative bg-[#050811]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
            Interactive Studio Playground
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Synthesize & Customize 3D Meshes Live
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Experience our neural 3D generator engine. Adjust geometry parameters, tweak PBR shader roughness, and export production-ready assets.
          </p>
        </div>

        {/* Main Studio Glass Container */}
        <div className="mt-12 glass-cyber rounded-3xl border border-emerald-500/20 shadow-2xl overflow-hidden">
          
          {/* Studio Navigation Top Bar */}
          <div className="bg-slate-950/90 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            
            {/* Tab Controls */}
            <div className="flex items-center space-x-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
              <button
                onClick={() => setActiveTab('generator')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'generator'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Box className="w-4 h-4" />
                <span>3D Mesh Synthesizer</span>
              </button>

              <button
                onClick={() => setActiveTab('materials')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'materials'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sliders className="w-4 h-4" />
                <span>PBR Shader & Lighting</span>
              </button>

              <button
                onClick={() => setActiveTab('telemetry')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'telemetry'
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg shadow-emerald-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Activity className="w-4 h-4" />
                <span>GPU & Render Metrics</span>
              </button>
            </div>

            {/* Quick Wireframe Toggle */}
            <button
              onClick={() => setWireframeMode(!wireframeMode)}
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                wireframeMode
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Wireframe Overlay: {wireframeMode ? 'ON' : 'OFF'}</span>
            </button>
          </div>

          {/* TAB 1: 3D MESH SYNTHESIZER */}
          {activeTab === 'generator' && (
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Controls Form (Left) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Prompt Presets */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Select Generative Prompt:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {prompts.map(prompt => (
                      <button
                        key={prompt}
                        onClick={() => handlePromptChange(prompt)}
                        className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold text-left transition-all border ${
                          selectedPrompt === prompt
                            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/50 shadow-sm'
                            : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {prompt}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Polygon Density Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs font-semibold mb-2">
                    <span className="text-slate-300">Polygon Mesh Density:</span>
                    <span className="text-emerald-400 font-mono font-bold">{(polyCount / 1000).toFixed(0)}k Polys</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="500000"
                    step="5000"
                    value={polyCount}
                    onChange={(e) => { setPolyCount(Number(e.target.value)); triggerReRender(); }}
                    className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                    <span>Mobile (5k)</span>
                    <span>Game Engine (120k)</span>
                    <span>Film VFX (500k)</span>
                  </div>
                </div>

                {/* Texture Resolution */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Texture Resolution:
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {['1K PBR', '2K PBR', '4K PBR', '8K Ultra'].map(res => (
                      <button
                        key={res}
                        onClick={() => { setTextureRes(res); triggerReRender(); }}
                        className={`py-2 rounded-xl text-xs font-semibold text-center border ${
                          textureRes === res
                            ? 'bg-teal-500/20 text-teal-300 border-teal-500/50'
                            : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {res}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Shader Preset */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Surface Material Finish:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Metallic Chrome', 'Carbon Fiber', 'Holographic Neon', 'Organic Obsidian'].map(shader => (
                      <button
                        key={shader}
                        onClick={() => { setShaderPreset(shader); triggerReRender(); }}
                        className={`py-2 px-3 rounded-xl text-xs font-semibold text-left border ${
                          shaderPreset === shader
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50'
                            : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white'
                        }`}
                      >
                        {shader}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Viewport & Export Box (Right) */}
              <div className="lg:col-span-7 flex flex-col">
                <div className="relative flex-1 min-h-[320px] rounded-2xl bg-gradient-to-b from-[#090e1f] to-[#04060d] border border-slate-800 p-6 flex flex-col justify-between overflow-hidden">
                  
                  {/* Canvas Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98115_1px,transparent_1px),linear-gradient(to_bottom,#10b98115_1px,transparent_1px)] bg-[size:32px_32px]"></div>

                  {/* Viewport Info Overlay */}
                  <div className="relative z-10 flex items-center justify-between text-xs">
                    <span className="font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                      Prompt: "{selectedPrompt}"
                    </span>
                    <span className="text-slate-400 font-mono">Shader: {shaderPreset}</span>
                  </div>

                  {/* Simulated 3D Model Display */}
                  <div className="relative z-10 my-auto flex flex-col items-center justify-center py-8">
                    {isRendering ? (
                      <div className="flex flex-col items-center space-y-3">
                        <RefreshCw className="w-10 h-10 text-emerald-400 animate-spin" />
                        <span className="text-xs font-mono text-emerald-300">Re-synthesizing Neural Topology...</span>
                      </div>
                    ) : (
                      <div className="relative w-44 h-44 flex items-center justify-center">
                        <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-500 ${
                          wireframeMode ? 'border-cyan-400 border-dashed animate-spin-slow' : 'border-emerald-500/80 shadow-[0_0_50px_rgba(16,185,129,0.3)]'
                        }`}></div>
                        
                        <Box className={`w-20 h-20 transition-all duration-300 ${
                          glowColor === 'emerald' ? 'text-emerald-400' : glowColor === 'cyan' ? 'text-cyan-400' : 'text-purple-400'
                        }`} />
                        
                        <div className="absolute -bottom-4 text-[11px] font-mono text-slate-400 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-800">
                          {wireframeMode ? 'Quad Mesh Overlay Active' : 'PBR Shader Rendered'}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Export Options Bar */}
                  <div className="relative z-10 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
                    <span className="text-xs text-slate-400">Download Production Asset:</span>
                    <div className="flex items-center space-x-2">
                      {['OBJ', 'GLTF', 'USDZ'].map(fmt => (
                        <button
                          key={fmt}
                          onClick={() => handleExport(fmt)}
                          className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-mono font-bold transition-all"
                        >
                          <Download className="w-3.5 h-3.5 inline mr-1" />
                          <span>{fmt}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Toast for Export confirmation */}
                  {exportedFormat && (
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-xl text-xs shadow-xl flex items-center space-x-2 animate-bounce">
                      <Check className="w-4 h-4" />
                      <span>{selectedPrompt} exported as .{exportedFormat.toLowerCase()} file!</span>
                    </div>
                  )}

                </div>
              </div>

            </div>
          )}

          {/* TAB 2: PBR SHADER & LIGHTING */}
          {activeTab === 'materials' && (
            <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Metallic Slider */}
              <div className="glass-cyber p-6 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                  <span>METALLIC REFLECTIVITY</span>
                  <span className="text-emerald-400 font-mono font-bold">{(metallic * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={metallic}
                  onChange={(e) => setMetallic(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                />
                <p className="text-xs text-slate-400 mt-4">
                  Controls specular reflectivity and metallic conductor response for specular highlights.
                </p>
              </div>

              {/* Roughness Slider */}
              <div className="glass-cyber p-6 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                  <span>SURFACE ROUGHNESS</span>
                  <span className="text-teal-400 font-mono font-bold">{(roughness * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={roughness}
                  onChange={(e) => setRoughness(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-teal-500"
                />
                <p className="text-xs text-slate-400 mt-4">
                  Micro-facet scatter density. Lower values yield mirror-smooth reflections.
                </p>
              </div>

              {/* Emissive Glow */}
              <div className="glass-cyber p-6 rounded-2xl border border-slate-800">
                <div className="flex justify-between items-center text-xs text-slate-400 mb-2">
                  <span>NEON EMISSIVE INTENSITY</span>
                  <span className="text-cyan-400 font-mono font-bold">{(emissive * 100).toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={emissive}
                  onChange={(e) => setEmissive(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                
                <div className="mt-4 flex items-center space-x-3">
                  <span className="text-xs text-slate-400">Glow Hue:</span>
                  {['emerald', 'cyan', 'purple'].map(color => (
                    <button
                      key={color}
                      onClick={() => setGlowColor(color)}
                      className={`w-6 h-6 rounded-full border-2 ${
                        color === 'emerald' ? 'bg-emerald-500' : color === 'cyan' ? 'bg-cyan-500' : 'bg-purple-500'
                      } ${glowColor === color ? 'border-white scale-110' : 'border-transparent'}`}
                    ></button>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: GPU & RENDER METRICS */}
          {activeTab === 'telemetry' && (
            <div className="p-6 sm:p-10 grid grid-cols-1 md:grid-cols-4 gap-6">
              
              <div className="glass-cyber p-6 rounded-2xl border border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase">Realtime FPS</span>
                <div className="text-3xl font-extrabold text-emerald-400 mt-2 font-heading">120 FPS</div>
                <p className="text-xs text-slate-400 mt-1">WebGPU Hardware Accelerated</p>
              </div>

              <div className="glass-cyber p-6 rounded-2xl border border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase">VRAM Usage</span>
                <div className="text-3xl font-extrabold text-teal-300 mt-2 font-heading">1.42 GB</div>
                <p className="text-xs text-slate-400 mt-1">Out of 8.0 GB Allocated</p>
              </div>

              <div className="glass-cyber p-6 rounded-2xl border border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase">Draw Calls</span>
                <div className="text-3xl font-extrabold text-cyan-400 mt-2 font-heading">14 / frame</div>
                <p className="text-xs text-slate-400 mt-1">Instanced Mesh Batching</p>
              </div>

              <div className="glass-cyber p-6 rounded-2xl border border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase">Mesh Topology</span>
                <div className="text-3xl font-extrabold text-purple-400 mt-2 font-heading">100% Quads</div>
                <p className="text-xs text-slate-400 mt-1">Subdivision Ready</p>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
