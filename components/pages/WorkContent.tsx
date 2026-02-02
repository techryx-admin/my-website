'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowUpRight, Cpu, Globe, Layers, ShieldCheck, Zap, BarChart3, Timer, Lock, Database } from 'lucide-react';
import { Link } from '../Link';

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
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40 } }
};

const projects = [
  {
    id: 1,
    client: "Nebula Finance",
    title: "High-Frequency Trading Protocol",
    category: "Fintech Architecture",
    description: "Architected a sub-millisecond latency trading engine using Rust and FPGA hardware acceleration. The system processes market data streams in real-time, executing arbitrage strategies with zero garbage collection overhead.",
    tags: ["Rust", "WebAssembly", "FPGA", "Cryptography"],
    metrics: [
        { label: "Latency", value: "< 80μs", icon: Timer },
        { label: "Daily Vol", value: "$4.2B", icon: BarChart3 },
        { label: "Uptime", value: "99.999%", icon: Zap }
    ],
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-teal-500/5",
    border: "group-hover:border-emerald-500/50",
    icon: Zap,
    span: "md:col-span-2"
  },
  {
    id: 2,
    client: "AeroDyne Systems",
    title: "Autonomous Swarm Logic",
    category: "AI & Robotics",
    description: "Developed decentralized swarm intelligence algorithms for commercial delivery drones, enabling real-time collision avoidance and route optimization without GPS dependancy.",
    tags: ["Python", "Computer Vision", "Edge Computing"],
    metrics: [
        { label: "Agents", value: "500+", icon: Cpu },
        { label: "Response", value: "12ms", icon: Timer }
    ],
    color: "text-cyan",
    gradient: "from-cyan/20 to-blue-500/5",
    border: "group-hover:border-cyan/50",
    icon: Cpu,
    span: "md:col-span-1"
  },
  {
    id: 3,
    client: "MediCore Health",
    title: "Zero-Knowledge Data Lake",
    category: "Healthcare Security",
    description: "Built a HIPAA-compliant, encrypted data storage system allowing researchers to query patient data without exposing personally identifiable information (PII).",
    tags: ["Blockchain", "Node.js", "ZK-Snarks"],
    metrics: [
        { label: "Records", value: "12M+", icon: Database },
        { label: "Encryption", value: "AES-256", icon: Lock }
    ],
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-pink-500/5",
    border: "group-hover:border-purple-500/50",
    icon: ShieldCheck,
    span: "md:col-span-1"
  },
  {
    id: 4,
    client: "Global Logistics Inc.",
    title: "Smart Supply Chain Digital Twin",
    category: "IoT & Big Data",
    description: "Created a real-time 3D digital twin of global shipping routes, integrating data from 50,000+ IoT sensors to predict delays and optimize container allocation across 4 continents.",
    tags: ["WebGL", "React", "TimescaleDB", "Three.js"],
    metrics: [
        { label: "Sensors", value: "50k+", icon: Globe },
        { label: "Data/Day", value: "2.5TB", icon: Database },
        { label: "ROI", value: "+240%", icon: BarChart3 }
    ],
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-red-500/5",
    border: "group-hover:border-orange-500/50",
    icon: Globe,
    span: "md:col-span-2"
  }
];

export const WorkContent = () => {
  return (
    <div className="w-full mt-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-20 pt-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-white/10 pb-12">
            <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-white/10 text-xs font-medium text-slate-300 mb-6">
                    <Layers className="w-3.5 h-3.5" />
                    SELECTED CASE STUDIES
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
                  ENGINEERING <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue-500 to-purple-500">
                    IMPACT.
                  </span>
                </h1>
                <p className="text-slate-400 text-xl max-w-2xl">
                  We solve the problems others can't. A showcase of high-performance infrastructure, intelligent systems, and mission-critical software.
                </p>
            </div>
            <div className="hidden md:block text-right">
                <div className="text-4xl font-mono font-bold text-white">04</div>
                <div className="text-sm text-slate-500 uppercase tracking-widest mt-1">Featured Projects</div>
            </div>
        </div>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
      >
        {projects.map((project) => (
            <motion.div 
                key={project.id}
                variants={item}
                className={`group relative rounded-[2rem] bg-[#0A0A0A] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500 ${project.span}`}
            >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

                <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-start mb-8">
                            <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${project.color} group-hover:scale-110 transition-transform duration-500`}>
                                <project.icon className="w-7 h-7" />
                            </div>
                            <div className="flex items-center gap-2">
                                <span className={`text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 ${project.color}`}>
                                    {project.category}
                                </span>
                                <button className="w-10 h-10 rounded-full bg-white text-midnight flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                            {project.title}
                        </h3>
                        <div className="text-slate-500 font-mono text-sm mb-6">Client: {project.client}</div>

                        <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mb-8">
                            {project.description}
                        </p>
                    </div>

                    <div className="mt-auto">
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                            {project.metrics.map((metric, i) => (
                                <div key={i} className="p-4 rounded-xl bg-black/40 border border-white/5 backdrop-blur-sm">
                                    <div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase tracking-wider mb-1">
                                        <metric.icon className="w-3 h-3" /> {metric.label}
                                    </div>
                                    <div className={`text-xl font-bold ${project.color}`}>{metric.value}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {project.tags.map(tag => (
                                <span key={tag} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/5 text-xs text-slate-400 font-mono group-hover:bg-white/10 transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        ))}
      </motion.div>

      <motion.div 
        variants={item}
        initial="hidden"
        animate="show"
        className="rounded-[2.5rem] bg-slate-900/20 border border-white/5 p-12 md:p-20 text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 to-purple-500/5" />
        <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Have a complex challenge?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                We thrive on the impossible. Let's discuss how we can engineer a custom solution for your enterprise.
            </p>
            <Link 
                href="/contact"
                className="inline-block px-10 py-4 rounded-full bg-white text-midnight font-bold hover:bg-cyan transition-colors duration-300"
            >
                Book Technical Consultation
            </Link>
        </div>
      </motion.div>
    </div>
  );
};