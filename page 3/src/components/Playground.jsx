import React, { useState } from 'react';
import { Terminal, Play, Copy, Check, Sparkles, Sliders, Code2, RefreshCw, Cpu } from 'lucide-react';

export default function Playground() {
  const [model, setModel] = useState('gpt-4o');
  const [temperature, setTemperature] = useState(0.7);
  const [tokens, setTokens] = useState(1024);
  const [prompt, setPrompt] = useState('Analyze system error logs and generate automated React component retry logic');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeViewTab, setActiveViewTab] = useState('output');
  const [generatedOutput, setGeneratedOutput] = useState(`{
  "status": "success",
  "execution_time_ms": 7.4,
  "model": "gpt-4o-edge-v4",
  "result": {
    "analysis": "Identified transient 504 gateway timeout on edge node US-East.",
    "action_taken": "Triggered exponential backoff retry loop.",
    "code_snippet": "const fetchWithRetry = async (url, retries = 3) => { ... }"
  }
}`);

  const handleGenerate = () => {
    setIsGenerating(true);
    setGeneratedOutput('Generating real-time AI response stream...');

    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedOutput(`{
  "timestamp": "${new Date().toISOString()}",
  "request_id": "req_${Math.random().toString(36).substring(2, 9)}",
  "model": "${model}",
  "temperature": ${temperature},
  "max_tokens": ${tokens},
  "prompt_tokens": ${prompt.length},
  "completion_tokens": 142,
  "output": {
    "status": "COMPLETED",
    "recommendation": "React + Tailwind Project optimization applied.",
    "code_gen": "// Auto-generated React component hook\\nuseEdgeSync({ endpoint: '/api/v1/sync', retry: true });"
  }
}`);
    }, 1200);
  };

  const codeSnippets = {
    curl: `curl -X POST "https://api.react-tailwind.project/v1/ai/generate" \\
  -H "Authorization: Bearer rtp_live_894729184912" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "${model}",
    "prompt": "${prompt}",
    "temperature": ${temperature},
    "max_tokens": ${tokens}
  }'`,
    js: `import { ReactTailwindSDK } from '@react-tailwind/sdk';

const sdk = new ReactTailwindSDK({ apiKey: process.env.RTP_API_KEY });

const response = await sdk.ai.generate({
  model: '${model}',
  prompt: '${prompt}',
  temperature: ${temperature},
  maxTokens: ${tokens}
});

console.log(response.output);`,
    python: `from react_tailwind_sdk import RTPClient

client = RTPClient(api_key="rtp_live_894729184912")

response = client.ai.generate(
    model="${model}",
    prompt="${prompt}",
    temperature=${temperature},
    max_tokens=${tokens}
)

print(response.output)`
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="playground" className="py-24 bg-[#06070b] relative border-t border-white/10">
      
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Developer Playground</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Test the API Live in Your Browser
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Adjust model parameters, run real-time inference, and copy production-ready SDK code instantly.
          </p>
        </div>

        {/* Playground Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
          
          {/* Left Controls Panel (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2 text-white font-bold text-base pb-3 border-b border-white/10">
              <Sliders className="w-4 h-4 text-indigo-400" />
              <span>Model & Parameter Config</span>
            </div>

            {/* Model Selector */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Select LLM Engine Model</label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full bg-[#0d0f19] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors"
              >
                <option value="gpt-4o">OpenAI GPT-4o (Default Edge)</option>
                <option value="claude-3-5">Anthropic Claude 3.5 Sonnet</option>
                <option value="llama-3-70b">Meta Llama 3 70B (Sub-5ms)</option>
              </select>
            </div>

            {/* Prompt Preset Input */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">Input Prompt</label>
              <textarea
                rows={3}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full bg-[#0d0f19] border border-white/15 rounded-xl p-3 text-xs font-mono text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              />
            </div>

            {/* Temperature Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                <span>Temperature</span>
                <span className="text-indigo-400 font-mono">{temperature}</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="1.0"
                step="0.1"
                value={temperature}
                onChange={(e) => setTemperature(parseFloat(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            {/* Max Tokens Slider */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                <span>Max Completion Tokens</span>
                <span className="text-indigo-400 font-mono">{tokens}</span>
              </div>
              <input
                type="range"
                min="256"
                max="4096"
                step="256"
                value={tokens}
                onChange={(e) => setTokens(parseInt(e.target.value))}
                className="w-full accent-indigo-500 cursor-pointer"
              />
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating}
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 hover:brightness-110 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  <span>Streaming Tokens...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Execute AI Inference</span>
                </>
              )}
            </button>
          </div>

          {/* Right Code & Console Panel (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col h-full bg-[#05060b] rounded-2xl border border-white/10 overflow-hidden">
            
            {/* View Selector Tabs */}
            <div className="bg-[#0b0d15] px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {['output', 'curl', 'js', 'python'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveViewTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all ${
                      activeViewTab === tab
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    {tab === 'output' ? 'Live Output JSON' : tab.toUpperCase()}
                  </button>
                ))}
              </div>

              {/* Copy Code button */}
              <button
                onClick={() => copyToClipboard(activeViewTab === 'output' ? generatedOutput : codeSnippets[activeViewTab])}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Copy Code</span>
                  </>
                )}
              </button>
            </div>

            {/* Code Output Display */}
            <div className="p-5 font-mono text-xs text-indigo-200 overflow-x-auto flex-1 bg-[#05060b] leading-relaxed">
              <pre className="text-slate-300">
                {activeViewTab === 'output' ? generatedOutput : codeSnippets[activeViewTab]}
              </pre>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
