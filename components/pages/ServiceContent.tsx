'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Code2, BrainCircuit, Database, Network, PenTool, Layers, ChevronRight, Server, Globe, Cpu, Lock } from 'lucide-react';

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40 } }
};

const services = [
  {
    domain: "Core Engineering",
    items: [
      {
        title: 'Full-Stack Development',
        icon: Code2,
        desc: 'End-to-end application architecture using modern frameworks. We build scalable, type-safe web and mobile platforms.',
        deliverables: ['React / Next.js Web Apps', 'React Native Mobile Apps', 'Type-Safe APIs', 'Real-time Systems'],
        color: 'text-cyan'
      },
      {
        title: 'Backend Infrastructure',
        icon: Server,
        desc: 'High-availability server systems designed for millions of concurrent connections and low-latency data processing.',
        deliverables: ["Custom API's", 'Server-Side Logics', 'DataBases Design', 'Authentication & User Management'],
        color: 'text-orange-400'
      }
    ]
  },
  {
    domain: "Applied Intelligence",
    items: [
      {
        title: 'AI & Machine Learning',
        icon: BrainCircuit,
        desc: 'Custom models trained on your data. From predictive analytics to autonomous agents, we operationalize AI.',
        deliverables: ['Automation and Chatbots', 'Digital Image Processing', 'Prediction & Personalization', 'Data Solutions'],
        color: 'text-purple-400'
      },
      {
        title: 'Quality Assurance',
        icon: Database,
        desc: 'Rigorous testing for flawless performance. From automated scripts to load balancing, we engineer reliability.',
        deliverables: ['Test Automation', 'Manual & Functional Testing', 'Performance & Load Testing', 'Usability (UX) Testing'],
        color: 'text-blue-400'
      }
    ]
  },
  {
    domain: "Connectivity & Design",
    items: [
      {
        title: 'Networking & IoT',
        icon: Network,
        desc: 'Connecting the physical and digital worlds. Secure protocols for hardware integration and edge computing.',
        deliverables: ['IoT Dashboards & Control Panels', 'Network Architecture & Security', 'Real-Time Data Streams'],
        color: 'text-orange-400'
      },
      {
        title: 'Technical UI/UX',
        icon: PenTool,
        desc: 'Interfaces designed for engineers and power users. High-density data visualization and complex workflows.',
        deliverables: ['SaaS & Dashboard UI', 'Design Operations', 'User Flow Logic'],
        color: 'text-pink-400'
      }
    ]
  }
];

export const ServicesContent = () => {
  return (
    <div className="w-full mt-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 text-center max-w-4xl mx-auto pt-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-xs font-medium text-cyan mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            SYSTEM CAPABILITIES
        </div>
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
          Full-Spectrum <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-400 to-slate-600">
            Technical Solutions
          </span>
        </h2>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          We bridge the gap between ambitious concepts and production-ready reality. 
          Our stack is distinct, modern, and built for scale.
        </p>
      </motion.div>

      <div className="space-y-20">
        {services.map((section, idx) => (
          <motion.div 
            key={idx}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
             <div className="flex items-center gap-4 mb-8">
                <h3 className="text-2xl font-bold text-white">{section.domain}</h3>
                <div className="h-px flex-1 bg-white/10" />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {section.items.map((service, sIdx) => (
                    <motion.div 
                        key={sIdx} 
                        variants={item}
                        className="group relative p-8 rounded-3xl bg-[#080808] border border-white/10 hover:border-white/20 transition-all duration-300"
                    >

                        <div className="flex items-start gap-6">
                            <div className={`w-14 h-14 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                                <service.icon className={`w-7 h-7 ${service.color}`} />
                            </div>
                            
                            <div>
                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-slate-400 leading-relaxed mb-6 text-sm md:text-base">
                                    {service.desc}
                                </p>

                                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Deliverables</div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {service.deliverables.map((d, dIdx) => (
                                            <div key={dIdx} className="flex items-center gap-2 text-sm text-slate-300">
                                                <div className={`w-1 h-1 rounded-full ${service.color.replace('text-', 'bg-')}`} />
                                                {d}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
             </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mt-24 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8"
      >
            <div>
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-cyan" /> Global Standards
                </h4>
                <p className="text-slate-500 text-sm">ISO 27001 compliant development practices.</p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-emerald-400" /> GPU Accelerated
                </h4>
                <p className="text-slate-500 text-sm">Heavy compute tasks offloaded to CUDA cores.</p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-purple-400" /> Encrypted
                </h4>
                <p className="text-slate-500 text-sm">End-to-end encryption for all data streams.</p>
            </div>
            <div>
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-orange-400" /> Modular
                </h4>
                <p className="text-slate-500 text-sm">Composable architecture for infinite scale.</p>
            </div>
      </motion.div>
    </div>
  );
};