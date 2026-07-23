import React, { useState } from 'react';
import { 
  Bot, ShieldCheck, Zap, Layers, Cpu, Terminal, 
  GitBranch, Lock, BarChart3, Radio, ArrowRight, Check 
} from 'lucide-react';

export default function Features({ onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState('ai');

  const categories = [
    { id: 'ai', label: 'AI Engine & Agents', icon: Bot },
    { id: 'edge', label: 'Edge Infrastructure', icon: Cpu },
    { id: 'security', label: 'Zero-Trust Security', icon: Lock },
    { id: 'telemetry', label: 'Real-Time Telemetry', icon: BarChart3 },
  ];

  const featureCards = {
    ai: [
      {
        title: 'Autonomous AI Workflows',
        description: 'Deploy multi-modal AI agents that automatically ingest, process, and summarize raw telemetry in real-time.',
        icon: Bot,
        badge: 'AI v4.0',
        highlights: ['Multi-agent orchestration', 'Automatic fallback logic', 'Sub-100ms LLM routing']
      },
      {
        title: 'Dynamic Prompt Caching',
        description: 'Reduce API token costs by up to 80% with semantic prompt caching and edge vector storage.',
        icon: Zap,
        badge: 'Cost Savings',
        highlights: ['In-memory semantic cache', 'Zero-latency retrieval', 'Automatic TTL management']
      },
      {
        title: 'Custom Model Fine-tuning',
        description: 'Bring your proprietary dataset to fine-tune open-weights models directly within our secure enclave.',
        icon: GitBranch,
        badge: 'Enterprise',
        highlights: ['One-click training pipeline', 'LoRA & QLoRA support', 'Private Model Registry']
      }
    ],
    edge: [
      {
        title: 'Sub-10ms Edge Gateway',
        description: 'Deploy your serverless API handlers across 300+ edge locations worldwide for instant global delivery.',
        icon: Cpu,
        badge: 'Global CDN',
        highlights: ['Automatic Geo-routing', 'Edge KV storage', 'Zero cold starts']
      },
      {
        title: 'Serverless Cron Pipelines',
        description: 'Schedule recurring background data pipelines with millisecond accuracy and automatic retry backoff.',
        icon: Layers,
        badge: 'Scheduled Jobs',
        highlights: ['Cron syntax support', 'Dead-letter queues', 'Webhook alerts']
      },
      {
        title: 'Automated CI/CD Deployments',
        description: 'Git-push to deploy instant preview URLs for every pull request with automated unit & integration testing.',
        icon: Terminal,
        badge: 'DevOps',
        highlights: ['GitOps integration', 'Atomic rollbacks', 'Branch previews']
      }
    ],
    security: [
      {
        title: 'End-to-End Encryption',
        description: 'AES-256 and RSA-4096 hardware-isolated encryption for all customer data at rest and in transit.',
        icon: Lock,
        badge: 'SOC2 Compliant',
        highlights: ['KMS Key Rotation', 'Hardware Security Modules', 'Zero-knowledge architecture']
      },
      {
        title: 'Role-Based Access Control',
        description: 'Granular SSO and SAML 2.0 authentication with fine-grained API permission scopes.',
        icon: ShieldCheck,
        badge: 'Identity',
        highlights: ['Okta & Auth0 support', 'Audit log retention', 'IP Whitelisting']
      },
      {
        title: 'DDoS & Rate Limit Guardrails',
        description: 'Intelligent AI-driven web application firewall protecting your endpoints against malicious traffic spikes.',
        icon: Radio,
        badge: 'WAF Guard',
        highlights: ['Automatic IP blocking', 'Adaptive token bucket', 'Bot mitigation']
      }
    ],
    telemetry: [
      {
        title: 'Sub-second Metrics Stream',
        description: 'Watch live requests, error trace stacks, and memory footprints as they happen across your cluster.',
        icon: BarChart3,
        badge: 'Observability',
        highlights: ['OpenTelemetry support', 'Custom Grafana dashboards', 'Anomaly detection alerts']
      },
      {
        title: 'Distributed Distributed Tracing',
        description: 'Follow single API requests across dozens of microservices with waterfall execution timelines.',
        icon: GitBranch,
        badge: 'APM',
        highlights: ['Span correlation IDs', 'Database query profiling', 'Bottleneck detection']
      },
      {
        title: 'Intelligent Alert Slack Bots',
        description: 'Get actionable diagnostic context pushed directly to Slack or PagerDuty before users notice.',
        icon: Zap,
        badge: 'Alerts',
        highlights: ['Slack & Teams webhook', 'Auto-triage summaries', 'Escalation policies']
      }
    ]
  };

  const currentFeatures = featureCards[activeCategory];

  return (
    <section id="features" className="py-24 relative bg-grid-pattern overflow-hidden">
      
      {/* Radial background gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built for Modern High-Growth <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              SaaS Infrastructure
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light">
            Everything you need to ship production-ready applications with zero friction, enterprise security, and extreme scale.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 flex items-center gap-2.5 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                    : 'glass-card border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-indigo-400'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {currentFeatures.map((card, idx) => {
            const CardIcon = card.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-600/30 to-purple-600/30 border border-indigo-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <CardIcon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {card.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">
                    {card.description}
                  </p>

                  {/* Highlights checklist */}
                  <div className="space-y-2 mb-6">
                    {card.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA trigger */}
                <button
                  onClick={() => onOpenModal(card.title)}
                  className="w-full py-2.5 px-4 rounded-xl glass-card border border-white/10 hover:border-indigo-500/40 text-xs font-semibold text-slate-300 hover:text-white flex items-center justify-center gap-2 group/btn transition-all"
                >
                  <span>Explore Technical Spec</span>
                  <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
