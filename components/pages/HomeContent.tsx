'use client';

import React from 'react';
import { BentoGrid } from '../BentoGrid';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Code2, ArrowRight, ShieldCheck, Zap, Layers, Workflow, CheckCircle2, Database, MessageSquareQuote } from 'lucide-react';
import { Link } from '../Link';

export const HomeContent = () => {
  return (
    <div className="space-y-32">
      <BentoGrid />

      <div className="w-full overflow-hidden border-y border-white/5 bg-white/5 py-10 backdrop-blur-sm relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-transparent to-[#020617] z-10 pointer-events-none" />
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-16 mx-8">
              <span className="text-xl font-mono font-medium text-slate-400 flex items-center gap-3"><Code2 className="text-cyan w-6 h-6" /> React Native</span>
              <span className="text-xl font-mono font-medium text-slate-400 flex items-center gap-3"><Terminal className="text-emerald-500 w-6 h-6" /> Python</span>
              <span className="text-xl font-mono font-medium text-slate-400 flex items-center gap-3"><Cpu className="text-purple-500 w-6 h-6" /> TensorFlow</span>
              <span className="text-xl font-mono font-medium text-slate-400 flex items-center gap-3"><Database className="text-blue-500 w-6 h-6" /> PostgreSQL</span>
              <span className="text-xl font-mono font-medium text-slate-400 flex items-center gap-3"><Layers className="text-orange-500 w-6 h-6" /> Docker</span>
              <span className="text-xl font-mono font-medium text-slate-400 flex items-center gap-3"><Zap className="text-yellow-500 w-6 h-6" /> Next.js</span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
         <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">The Techryx Protocol</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                We don't just write code; we engineer outcomes. Our three-phase methodology ensures precision, scalability, and speed from day one.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
                {
                    step: "01",
                    title: "Blueprint",
                    desc: "System architecture and technical feasibility analysis. We map the entire topology before writing a single line of code.",
                    icon: Workflow,
                    color: "text-cyan",
                    border: "group-hover:border-cyan/50",
                    bg: "group-hover:bg-cyan/5"
                },
                {
                    step: "02",
                    title: "Synthesize",
                    desc: "Rapid agile development cycles. We build modular, test-driven components that integrate seamlessly into the core stack.",
                    icon: Code2,
                    color: "text-purple-500",
                    border: "group-hover:border-purple-500/50",
                    bg: "group-hover:bg-purple-500/5"
                },
                {
                    step: "03",
                    title: "Deploy",
                    desc: "CI/CD pipeline execution and production hardening. We launch with zero-downtime strategies and real-time monitoring.",
                    icon: Zap,
                    color: "text-emerald-500",
                    border: "group-hover:border-emerald-500/50",
                    bg: "group-hover:bg-emerald-500/5"
                }
            ].map((item, idx) => (
                <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className={`group p-8 rounded-3xl bg-slate-900/40 border border-white/10 ${item.border} ${item.bg} transition-all duration-500 relative overflow-hidden`}
                >
                    <div className={`absolute top-0 right-0 p-8 opacity-5 font-bold text-9xl ${item.color} select-none transition-opacity group-hover:opacity-10`}>
                        {item.step}
                    </div>
                    <div className="relative z-10">
                        <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center mb-8 ${item.color} shadow-lg shadow-black/20`}>
                            <item.icon className="w-7 h-7" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed text-base">{item.desc}</p>
                    </div>
                </motion.div>
            ))}
         </div>
      </div>

      <div className="w-full bg-[#030712] border-y border-white/5 py-24 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
             <div className="flex items-center gap-3 mb-12">
                 <MessageSquareQuote className="text-cyan w-6 h-6" />
                 <h2 className="text-3xl font-bold text-white">Client Transmissions</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    {
                        quote: "Techryx engineered a solution that reduced our server costs by 40% while doubling throughput. Absolute wizardry.",
                        author: "Sarah J.",
                        role: "CTO, FinStream",
                        borderColor: "hover:border-emerald-500/40"
                    },
                    {
                        quote: "The level of technical detail in their deliverables is unmatched. They didn't just build an app; they built a platform.",
                        author: "Marcus R.",
                        role: "Director of AI, NexusLogic",
                        borderColor: "hover:border-purple-500/40"
                    },
                    {
                        quote: "Fast, secure, and incredibly scalable. The architecture they provided scaled to 1M users without a hitch.",
                        author: "Elena V.",
                        role: "Founder, HealthChain",
                        borderColor: "hover:border-cyan/40"
                    }
                ].map((testimonial, idx) => (
                    <div key={idx} className={`p-8 rounded-2xl bg-white/5 border border-white/10 ${testimonial.borderColor} transition-colors duration-300 flex flex-col justify-between h-full`}>
                        <div className="font-mono text-cyan text-xs mb-4 opacity-70">
                            {`// LOG_ENTRY_00${idx+1}`}
                        </div>
                        <p className="text-lg text-slate-300 leading-relaxed mb-6 italic">
                            "{testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center font-bold text-white">
                                {testimonial.author[0]}
                            </div>
                            <div>
                                <div className="text-white font-bold">{testimonial.author}</div>
                                <div className="text-sm text-slate-500">{testimonial.role}</div>
                            </div>
                        </div>
                    </div>
                ))}
             </div>
          </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-white/10 bg-slate-900/20">
            <div className="p-12 md:p-24 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
                <ShieldCheck className="w-16 h-16 text-emerald-500 mb-8" />
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Enterprise Grade Security</h3>
                <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                    We adhere to the strictest security standards. From SOC2 compliance to end-to-end encryption, your intellectual property is fortified.
                </p>
                <ul className="space-y-4">
                    {['Zero Trust Architecture', 'Real-time Threat Detection', 'Automated Compliance Audits'].map(item => (
                        <li key={item} className="flex items-center gap-3 text-slate-300 font-medium">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500" /> {item}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-12 md:p-24 flex flex-col justify-center bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent">
                 <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Techryx?</h3>
                 <div className="space-y-10 mt-4">
                    <div>
                        <h4 className="text-white text-xl font-bold mb-3 flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-cyan shadow-[0_0_10px_#22d3ee]" />
                            Elite Engineering Talent
                        </h4>
                        <p className="text-slate-400 text-base pl-6 border-l-2 border-white/10 ml-1.5">
                            Top 1% of developers from global tech hubs. No juniors, only seniors.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white text-xl font-bold mb-3 flex items-center gap-3">
                            <span className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
                            AI-Native Development
                        </h4>
                        <p className="text-slate-400 text-base pl-6 border-l-2 border-white/10 ml-1.5">
                            We leverage proprietary AI tools to accelerate coding by 40% without sacrificing quality.
                        </p>
                    </div>
                 </div>
            </div>
      </div>

      <div className="relative rounded-[2.5rem] overflow-hidden mx-4 md:mx-0">
         <div className="absolute inset-0 bg-gradient-to-r from-cyan/20 to-blue-600/20" />
         <div className="absolute inset-0 bg-[#020617] m-[1px] rounded-[2.5rem]" />
         
         <div className="relative z-10 py-24 px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8">
                Ready to Upgrade Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-emerald-400">Infrastructure?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                Join the forward-thinking companies building their future with Techryx. 
                Schedule your architectural consultation today.
            </p>
            <Link 
                href="/contact"
                className="inline-flex px-10 py-5 rounded-full bg-white text-midnight font-bold text-lg hover:bg-cyan hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] items-center gap-2 mx-auto"
            >
                Initialize Project <ArrowRight className="w-5 h-5" />
            </Link>
         </div>
      </div>
    </div>
  );
};