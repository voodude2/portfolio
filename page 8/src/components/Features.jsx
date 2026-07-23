import React from 'react';
import { Cpu, ShieldCheck, Zap, Database, Layers, GitBranch, Lock, BarChart3, Workflow } from 'lucide-react';

export default function Features() {
  const featureList = [
    {
      icon: Cpu,
      title: 'Autonomous Agent Swarms',
      desc: 'Deploy multi-agent LLM clusters that collaborate, reason through edge cases, and execute complex workflows without human intervention.',
      tag: 'Neural Core'
    },
    {
      icon: Database,
      title: 'Vector DB Context Pipeline',
      desc: 'Seamlessly query Pinecone, Qdrant, and pgvector with ultra-low latency semantic retrieval and automated chunk indexing.',
      tag: 'Memory Engine'
    },
    {
      icon: ShieldCheck,
      title: 'SOC-2 Type II Enterprise Security',
      desc: 'End-to-end AES-256 field-level encryption, role-based access control, zero data retention policies, and air-gapped VPC options.',
      tag: 'Bank-Grade'
    },
    {
      icon: Workflow,
      title: 'Visual Workflow Studio',
      desc: 'Drag-and-drop workflow canvas with real-time state inspection, conditional branching, and instant zero-downtime deployment.',
      tag: 'No-Code / Code'
    },
    {
      icon: GitBranch,
      title: 'Self-Healing Circuit Breakers',
      desc: 'Automatic fallback models, rate-limit queue management, and instant retry strategies to maintain 99.99% operational SLA.',
      tag: 'Resilience'
    },
    {
      icon: BarChart3,
      title: 'Real-Time Tracing & Cost Metrics',
      desc: 'Monitor token expenditure per agent, trace millisecond prompt execution paths, and optimize LLM budget allocation.',
      tag: 'Telemetry'
    }
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-purple-400 uppercase px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            Enterprise Architecture
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Engineered for Mission-Critical AI Workflows
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg">
            Everything your team needs to build, deploy, and scale autonomous AI microservices safely in production environments.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover p-8 rounded-3xl border border-slate-800/80 relative group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600/30 to-pink-500/30 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-purple-400 group-hover:text-purple-300">
                  <span>Explore Architecture</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
