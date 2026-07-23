import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function Faq() {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'How does AetherFlow AI connect to our existing tech stack?',
      a: 'AetherFlow provides native SDKs (Python, TypeScript, Go) as well as pre-built webhooks and connectors for PostgreSQL, Pinecone, Qdrant, Slack, GitHub, HubSpot, and 1,000+ APIs via OpenAPI specs.'
    },
    {
      q: 'Can we host AetherFlow on our own private VPC or air-gapped server?',
      a: 'Yes! Our Enterprise Neural plan offers Docker/Kubernetes Helm charts for self-hosted deployment inside AWS, Google Cloud, Azure, or on-premise air-gapped infrastructure.'
    },
    {
      q: 'What LLM models are supported out of the box?',
      a: 'We support Anthropic Claude 3.5 Sonnet/Haiku, OpenAI GPT-4o/o1, Meta Llama 3.3, Mistral Large, and custom fine-tuned models hosted on Hugging Face or vLLM.'
    },
    {
      q: 'Is there a limit to how many concurrent agent workflows we can run?',
      a: 'Our Starter plan includes up to 15 concurrent flows, Pro includes 100, and Enterprise offers unlimited concurrent flows with dedicated load balancing.'
    },
    {
      q: 'How does the 14-day free trial work?',
      a: 'You get full access to the Pro Team plan for 14 days with zero credit card required. At the end of the trial, you can choose to subscribe or remain on our free developer tier.'
    }
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <span className="text-xs font-bold tracking-widest text-purple-400 uppercase px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
            Got Questions?
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-slate-800 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-white text-base sm:text-lg focus:outline-none"
                >
                  <span className="flex items-center space-x-3">
                    <HelpCircle className="w-5 h-5 text-purple-400 shrink-0" />
                    <span>{item.q}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180 text-purple-400' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                    {item.a}
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
