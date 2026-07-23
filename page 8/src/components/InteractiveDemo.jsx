import React, { useState, useEffect } from 'react';
import { Play, Database, Brain, ArrowRight, CheckCircle, Terminal, Activity, Zap, RefreshCw, Layers, ShieldCheck, Filter } from 'lucide-react';

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState('pipeline');
  const [isRunning, setIsRunning] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [logFilter, setLogFilter] = useState('all');

  // Simulated nodes
  const [nodes, setNodes] = useState([
    { id: 1, name: 'Database Event Trigger', type: 'Ingestion', status: 'ready', icon: Database, details: 'PostgreSQL Row Insert' },
    { id: 2, name: 'Neural Intent Classifier', type: 'AI Reasoning', status: 'idle', icon: Brain, details: 'Claude 3.5 Sonnet Model' },
    { id: 3, name: 'Vector Context Lookup', type: 'Memory', status: 'idle', icon: Layers, details: 'Pinecone 1536-dim Index' },
    { id: 4, name: 'Automated Webhook Action', type: 'Delivery', status: 'idle', icon: Zap, details: 'HTTP POST 200 OK' }
  ]);

  // Simulated logs
  const [logs, setLogs] = useState([
    { timestamp: '14:20:01.002', type: 'info', message: 'Pipeline [aether-pipe-88] initialized successfully.' },
    { timestamp: '14:20:01.145', type: 'info', message: 'Listening for CDC triggers on db.production.users' },
  ]);

  // Run simulation effect
  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setStepIndex(1);

    const now = () => new Date().toLocaleTimeString() + '.' + Math.floor(Math.random()*900 + 100);

    // Step 1
    setTimeout(() => {
      setNodes(prev => prev.map(n => n.id === 1 ? { ...n, status: 'active' } : n));
      setLogs(prev => [...prev, { timestamp: now(), type: 'info', message: '⚡ Event Triggered: New User Registered [ID: usr_9941]' }]);
      setStepIndex(2);
    }, 800);

    // Step 2
    setTimeout(() => {
      setNodes(prev => prev.map(n => n.id === 1 ? { ...n, status: 'done' } : n.id === 2 ? { ...n, status: 'active' } : n));
      setLogs(prev => [...prev, { timestamp: now(), type: 'reasoning', message: '🧠 Claude 3.5 Sonnet: Classifying intent... [Confidence: 99.4%]' }]);
      setStepIndex(3);
    }, 1800);

    // Step 3
    setTimeout(() => {
      setNodes(prev => prev.map(n => n.id === 2 ? { ...n, status: 'done' } : n.id === 3 ? { ...n, status: 'active' } : n));
      setLogs(prev => [...prev, { timestamp: now(), type: 'info', message: '🔍 Vector Search: Retrieved 5 relevant context documents from Pinecone' }]);
      setStepIndex(4);
    }, 2800);

    // Step 4
    setTimeout(() => {
      setNodes(prev => prev.map(n => n.id === 3 ? { ...n, status: 'done' } : n.id === 4 ? { ...n, status: 'done' } : n));
      setLogs(prev => [...prev, { timestamp: now(), type: 'success', message: '✅ Webhook Delivered: Sent onboarding payload to Slack & HubSpot (200 OK)' }]);
      setIsRunning(false);
      setStepIndex(0);
    }, 3800);
  };

  const filteredLogs = logs.filter(log => {
    if (logFilter === 'all') return true;
    return log.type === logFilter;
  });

  return (
    <section id="demo" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-purple-400 uppercase px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            Interactive Product Studio
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Experience Neural Orchestration Live
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Test drive our live workflow engine below. Trigger simulated events, inspect agent thoughts, and track millisecond latency in real time.
          </p>
        </div>

        {/* Studio Card Container */}
        <div className="mt-12 glass-card rounded-3xl border border-slate-800 shadow-2xl overflow-hidden">
          
          {/* Studio Top Control Bar */}
          <div className="bg-slate-900/90 px-6 py-4 border-b border-slate-800 flex flex-wrap items-center justify-between gap-4">
            
            {/* Studio Navigation Tabs */}
            <div className="flex items-center space-x-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab('pipeline')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'pipeline'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Brain className="w-4 h-4" />
                <span>Agent Pipeline</span>
              </button>

              <button
                onClick={() => setActiveTab('analytics')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'analytics'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Activity className="w-4 h-4" />
                <span>Telemetry Monitor</span>
              </button>

              <button
                onClick={() => setActiveTab('logs')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeTab === 'logs'
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-500/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Terminal className="w-4 h-4" />
                <span>Live Logs ({logs.length})</span>
              </button>
            </div>

            {/* Run Trigger CTA */}
            <button
              onClick={runSimulation}
              disabled={isRunning}
              className={`inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all ${
                isRunning
                  ? 'bg-purple-800 cursor-not-allowed opacity-80'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105 active:scale-95'
              }`}
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Processing Step {stepIndex}/4...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-white" />
                  <span>Simulate Workflow Trigger</span>
                </>
              )}
            </button>
          </div>

          {/* TAB 1: PIPELINE STUDIO */}
          {activeTab === 'pipeline' && (
            <div className="p-6 sm:p-10 bg-slate-950/60 min-h-[380px]">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-lg font-bold text-white">Active Pipeline: Onboarding Agent Flow</h3>
                  <p className="text-xs text-slate-400">Drag or trigger nodes to test fault-tolerant LLM execution.</p>
                </div>
                <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Health 100%</span>
                </span>
              </div>

              {/* Node Flow Track */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                {nodes.map((node, index) => {
                  const Icon = node.icon;
                  const isActive = node.status === 'active';
                  const isDone = node.status === 'done';

                  return (
                    <div
                      key={node.id}
                      className={`relative p-5 rounded-2xl glass-card transition-all duration-300 ${
                        isActive
                          ? 'border-purple-500 ring-2 ring-purple-500/30 scale-105 bg-purple-950/30'
                          : isDone
                          ? 'border-emerald-500/50 bg-emerald-950/10'
                          : 'border-slate-800'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className={`p-2.5 rounded-xl ${
                          isActive ? 'bg-purple-600 text-white' : isDone ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'
                        }`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{node.type}</span>
                      </div>

                      <h4 className="font-bold text-sm text-white">{node.name}</h4>
                      <p className="text-xs text-slate-400 mt-1">{node.details}</p>

                      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                        <span className="text-slate-400">Status:</span>
                        <span className={`font-semibold capitalize ${
                          isActive ? 'text-purple-400 animate-pulse' : isDone ? 'text-emerald-400' : 'text-slate-500'
                        }`}>
                          {node.status}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: TELEMETRY MONITOR */}
          {activeTab === 'analytics' && (
            <div className="p-6 sm:p-10 bg-slate-950/60 min-h-[380px]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Latency Gauge */}
                <div className="glass-card p-6 rounded-2xl border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>GLOBAL RESPONSE LATENCY</span>
                    <Zap className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="mt-4 text-4xl font-extrabold text-white font-heading">12.4 ms</div>
                  <p className="text-xs text-emerald-400 mt-2">↑ 4.2ms faster than p99 SLA benchmark</p>
                  
                  {/* Graph visual */}
                  <div className="mt-6 flex items-end space-x-1.5 h-20">
                    {[40, 65, 30, 85, 45, 90, 75, 50, 95, 60, 80, 55, 70].map((val, idx) => (
                      <div
                        key={idx}
                        className="flex-1 bg-gradient-to-t from-purple-600 to-pink-500 rounded-t"
                        style={{ height: `${val}%` }}
                      ></div>
                    ))}
                  </div>
                </div>

                {/* Token Throughput */}
                <div className="glass-card p-6 rounded-2xl border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>TOKEN THROUGHPUT</span>
                    <Brain className="w-4 h-4 text-purple-400" />
                  </div>
                  <div className="mt-4 text-4xl font-extrabold text-white font-heading">4,820 / sec</div>
                  <p className="text-xs text-slate-400 mt-2">Distributed across 16 Vector Nodes</p>
                  
                  {/* Progress bars */}
                  <div className="mt-6 space-y-3">
                    <div>
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>Claude 3.5 Sonnet</span>
                        <span>78% Allocated</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-purple-500 h-full w-[78%]"></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-slate-400 mb-1">
                        <span>GPT-4o Reasoning</span>
                        <span>42% Allocated</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-pink-500 h-full w-[42%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Error Rate */}
                <div className="glass-card p-6 rounded-2xl border border-slate-800">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>FAULT TOLERANCE RATE</span>
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="mt-4 text-4xl font-extrabold text-emerald-400 font-heading">0.001%</div>
                  <p className="text-xs text-slate-400 mt-2">Self-healing retry enabled</p>

                  <div className="mt-6 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-2">
                    <div className="flex justify-between text-slate-300">
                      <span>Auto Retry Fallback:</span>
                      <span className="text-emerald-400 font-semibold">ACTIVE</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>Circuit Breaker:</span>
                      <span className="text-purple-400 font-semibold font-mono">ARMED (0/5)</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: LIVE LOGS */}
          {activeTab === 'logs' && (
            <div className="p-6 bg-slate-950 min-h-[380px] font-mono text-xs">
              
              {/* Log filter bar */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                <div className="flex items-center space-x-2 text-slate-400">
                  <Filter className="w-4 h-4" />
                  <span>Filter Output:</span>
                </div>
                <div className="flex space-x-2">
                  {['all', 'info', 'reasoning', 'success'].map(filter => (
                    <button
                      key={filter}
                      onClick={() => setLogFilter(filter)}
                      className={`px-3 py-1 rounded-md capitalize text-xs font-semibold ${
                        logFilter === filter ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Log console output */}
              <div className="space-y-2 overflow-y-auto max-h-[260px] pr-2">
                {filteredLogs.map((log, idx) => (
                  <div key={idx} className="flex items-start space-x-3 hover:bg-slate-900/50 p-1.5 rounded">
                    <span className="text-slate-500 shrink-0">{log.timestamp}</span>
                    <span className={`uppercase font-bold shrink-0 text-[10px] px-1.5 py-0.5 rounded ${
                      log.type === 'info' ? 'bg-blue-500/10 text-blue-400' :
                      log.type === 'reasoning' ? 'bg-purple-500/10 text-purple-400' :
                      'bg-emerald-500/10 text-emerald-400'
                    }`}>
                      {log.type}
                    </span>
                    <span className="text-slate-200">{log.message}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
