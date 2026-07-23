import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, Users, Activity, Zap, CheckCircle2, 
  ArrowUpRight, Clock, ShieldCheck, Terminal, Server, BarChart3, RefreshCw
} from 'lucide-react';

export default function DashboardPreview() {
  const [timeRange, setTimeRange] = useState('24h');
  const [activeTab, setActiveTab] = useState('overview');
  const [liveUsers, setLiveUsers] = useState(14820);
  const [reqCount, setReqCount] = useState(1894200);
  const [logs, setLogs] = useState([
    { id: 1, time: 'Just now', type: 'POST', endpoint: '/api/v1/ai/generate', status: 200, latency: '8ms' },
    { id: 2, time: '2s ago', type: 'GET', endpoint: '/api/v1/analytics/realtime', status: 200, latency: '4ms' },
    { id: 3, time: '5s ago', type: 'POST', endpoint: '/api/v1/auth/verify', status: 200, latency: '12ms' },
    { id: 4, time: '8s ago', type: 'PUT', endpoint: '/api/v1/pipeline/sync', status: 200, latency: '15ms' },
  ]);

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveUsers(prev => prev + Math.floor(Math.random() * 7) - 3);
      setReqCount(prev => prev + Math.floor(Math.random() * 12) + 5);

      // Add fresh log line
      const endpoints = ['/api/v1/ai/stream', '/api/v1/embeddings', '/api/v1/webhooks', '/api/v1/user/config'];
      const randomEp = endpoints[Math.floor(Math.random() * endpoints.length)];
      const randomLat = Math.floor(Math.random() * 12) + 3 + 'ms';
      
      setLogs(prevLogs => [
        { id: Date.now(), time: 'Just now', type: 'POST', endpoint: randomEp, status: 200, latency: randomLat },
        ...prevLogs.slice(0, 3)
      ]);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const chartData = {
    '24h': [35, 45, 60, 55, 78, 88, 95, 110, 105, 125, 140, 160],
    '7d':  [20, 30, 45, 40, 65, 80, 85, 90, 105, 120, 135, 150],
    '30d': [15, 25, 35, 50, 60, 75, 90, 110, 130, 145, 165, 185],
    '90d': [10, 20, 30, 45, 55, 70, 85, 100, 120, 140, 160, 190],
  };

  const currentChart = chartData[timeRange];

  return (
    <div className="w-full glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden text-left relative group">
      {/* Subtle glow border effect */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />

      {/* Header bar */}
      <div className="bg-[#0b0d14] px-4 py-3 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 mr-3">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-lg border border-white/10 text-xs text-slate-300 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>app.react-tailwind.project/dashboard</span>
          </div>
        </div>

        {/* Status indicator */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>SYSTEM ONLINE</span>
          </div>
        </div>
      </div>

      {/* Internal Navigation Sub-header */}
      <div className="bg-[#0d0f19] px-6 py-3 border-b border-white/5 flex flex-wrap items-center justify-between gap-4">
        {/* Navigation tabs */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'overview' ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Metrics Overview</span>
          </button>
          <button 
            onClick={() => setActiveTab('logs')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'logs' ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Live Stream</span>
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          </button>
          <button 
            onClick={() => setActiveTab('nodes')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'nodes' ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40' : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
            }`}
          >
            <Server className="w-3.5 h-3.5" />
            <span>Global Edge Nodes</span>
          </button>
        </div>

        {/* Time range selector */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-lg border border-white/10 text-xs">
          {['24h', '7d', '30d', '90d'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-2.5 py-1 rounded font-medium transition-all ${
                timeRange === range ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="p-6 bg-[#090b12]/90 backdrop-blur-xl">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Top Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="glass-card p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span>Active Live Users</span>
                  <Users className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono tracking-tight">
                  {liveUsers.toLocaleString()}
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-xs mt-2 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>+14.2% this hour</span>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span>Total API Calls</span>
                  <Activity className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono tracking-tight">
                  {reqCount.toLocaleString()}
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-xs mt-2 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>+28.4% vs last week</span>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span>Avg Latency</span>
                  <Zap className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-2xl font-bold text-emerald-400 font-mono tracking-tight">
                  4.8 ms
                </div>
                <div className="flex items-center gap-1 text-slate-400 text-xs mt-2 font-medium">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  <span>99.999% SLA Uptime</span>
                </div>
              </div>

              <div className="glass-card p-4 rounded-xl border border-white/10 bg-white/[0.02]">
                <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                  <span>MRR Revenue</span>
                  <TrendingUp className="w-4 h-4 text-pink-400" />
                </div>
                <div className="text-2xl font-bold text-white font-mono tracking-tight">
                  $94,850.00
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-xs mt-2 font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>+34% MoM</span>
                </div>
              </div>
            </div>

            {/* Dynamic Graph Section */}
            <div className="glass-card p-5 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-white">Throughput & Global Requests</h4>
                  <p className="text-xs text-slate-400">Real-time edge telemetry ({timeRange} window)</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-indigo-400 font-mono bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Auto-Sync Active</span>
                </div>
              </div>

              {/* Custom Animated Bar Chart */}
              <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2 px-2 border-b border-white/10">
                {currentChart.map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-2 group/bar relative">
                    {/* Tooltip on hover */}
                    <div className="absolute -top-8 bg-indigo-900/90 text-indigo-200 text-[10px] font-mono px-2 py-0.5 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-indigo-500/30">
                      {val * 120} req/s
                    </div>
                    <div className="w-full bg-white/5 rounded-t-md relative overflow-hidden flex items-end h-full">
                      <div 
                        className="w-full bg-gradient-to-t from-indigo-600 via-purple-600 to-pink-500 rounded-t-md transition-all duration-700 ease-out group-hover/bar:brightness-125"
                        style={{ height: `${(val / 200) * 100}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">{idx + 1}h</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Live Logs Tab */}
        {activeTab === 'logs' && (
          <div className="glass-card p-4 rounded-xl border border-white/10 font-mono text-xs space-y-3 bg-[#05060a]">
            <div className="flex items-center justify-between pb-2 border-b border-white/10 text-slate-400">
              <span>Timestamp</span>
              <span>Method / Path</span>
              <span>Status</span>
              <span>Latency</span>
            </div>
            {logs.map((log) => (
              <div key={log.id} className="flex items-center justify-between py-1.5 px-2 rounded hover:bg-white/5 transition-colors">
                <span className="text-slate-500 text-[11px]">{log.time}</span>
                <div className="flex items-center gap-2">
                  <span className="text-indigo-400 font-bold px-1.5 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20">{log.type}</span>
                  <span className="text-slate-200">{log.endpoint}</span>
                </div>
                <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">HTTP {log.status}</span>
                <span className="text-amber-300 font-semibold">{log.latency}</span>
              </div>
            ))}
          </div>
        )}

        {/* Nodes Tab */}
        {activeTab === 'nodes' && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { region: 'US-East (N. Virginia)', status: 'Healthy', ping: '3ms', load: '32%' },
              { region: 'EU-West (Frankfurt)', status: 'Healthy', ping: '8ms', load: '41%' },
              { region: 'AP-East (Tokyo)', status: 'Healthy', ping: '12ms', load: '29%' },
              { region: 'SA-East (São Paulo)', status: 'Healthy', ping: '16ms', load: '38%' },
              { region: 'EU-Central (London)', status: 'Healthy', ping: '5ms', load: '24%' },
              { region: 'AU-East (Sydney)', status: 'Healthy', ping: '19ms', load: '31%' },
            ].map((node, i) => (
              <div key={i} className="glass-card p-3 rounded-lg border border-white/10 bg-white/[0.02]">
                <div className="flex items-center justify-between text-xs font-semibold text-white mb-1">
                  <span>{node.region}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </div>
                <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-2">
                  <span>Latency: <strong className="text-emerald-400">{node.ping}</strong></span>
                  <span>CPU: <strong className="text-indigo-300">{node.load}</strong></span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
