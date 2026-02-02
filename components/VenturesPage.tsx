import React from 'react';
import { motion, Variants } from 'framer-motion';
import { FlaskConical, Github, ExternalLink, Lock, Cpu, Network, Zap, Eye, Box, ArrowUpRight } from 'lucide-react';

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
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

const ventures = [
  {
    title: "Aether UI",
    description: "An open-source React component library designed for high-density data dashboards and mission-critical interfaces. Features GPU-accelerated animations and strict type safety.",
    tags: ["React", "TypeScript", "WebGL"],
    status: "Live v1.0",
    statusColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    icon: Box,
    access: "Public"
  },
  {
    title: "SynapseDB",
    description: "A distributed, graph-based state management system for real-time neural network training on the edge. Optimizes tensor flow across fragmented device clusters.",
    tags: ["Rust", "WASM", "Networking"],
    status: "Public Beta",
    statusColor: "text-cyan border-cyan/20 bg-cyan/10",
    icon: Network,
    access: "Public"
  },
  {
    title: "Project: OMEGA",
    description: "Next-generation generative agent swarm for autonomous DevOps and infrastructure healing. Capable of self-diagnosing and patching server vulnerabilities in real-time.",
    tags: ["Python", "LLMs", "Autonomous Agents"],
    status: "Alpha / R&D",
    statusColor: "text-purple-400 border-purple-500/20 bg-purple-500/10",
    icon: Cpu,
    access: "Private"
  }
];

export const VenturesPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-400 mb-6">
            <FlaskConical className="w-3.5 h-3.5" />
            TECHRYX LABS
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight">
          Incubating the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Next Generation
          </span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          We don't just build for clients; we invent for the future. Explore our internal R&D projects, open-source contributions, and experimental ventures.
        </p>
      </motion.div>

      {/* Main Ventures Grid */}
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
      >
        {ventures.map((venture, idx) => (
            <motion.div 
                key={idx}
                variants={item}
                className="group relative flex flex-col justify-between p-8 rounded-3xl bg-slate-900/40 border border-white/10 hover:border-white/20 transition-all duration-300"
            >
                <div>
                    <div className="flex justify-between items-start mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <venture.icon className="w-6 h-6 text-white" />
                        </div>
                        <span className={`px-2.5 py-1 rounded-md border text-[10px] font-mono font-medium uppercase tracking-wider ${venture.statusColor}`}>
                            {venture.status}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan transition-colors">{venture.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {venture.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {venture.tags.map(tag => (
                            <span key={tag} className="text-xs text-slate-500 font-mono px-2 py-1 bg-black/20 rounded border border-white/5">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex items-center gap-3 mt-auto">
                    {venture.access === 'Public' ? (
                        <>
                            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all text-sm font-medium text-white group/btn">
                                <Github className="w-4 h-4 text-slate-400 group-hover/btn:text-white" />
                                <span>Repo</span>
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-cyan/10 hover:bg-cyan/20 border border-cyan/20 hover:border-cyan/40 transition-all text-sm font-medium text-cyan">
                                <ExternalLink className="w-4 h-4" />
                                <span>Demo</span>
                            </button>
                        </>
                    ) : (
                        <button className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 border border-white/5 cursor-not-allowed opacity-70 text-sm font-medium text-slate-500">
                            <Lock className="w-4 h-4" />
                            <span>Restricted Access</span>
                        </button>
                    )}
                </div>
            </motion.div>
        ))}
      </motion.div>

      {/* Stealth Section */}
      <motion.div 
        variants={item}
        initial="hidden"
        animate="show"
        className="relative rounded-3xl bg-[#050505] border border-white/5 overflow-hidden p-1"
      >
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat animate-[shimmer_3s_infinite]" />
        
        <div className="relative bg-slate-900/80 backdrop-blur-sm rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20 animate-pulse">
                    <Eye className="w-8 h-8 text-red-500" />
                 </div>
                 <div>
                    <h3 className="text-xl font-bold text-white mb-1">Stealth Operations</h3>
                    <p className="text-slate-500 text-sm max-w-md">
                        We currently have 2 classified projects in deep development involving Quantum Cryptography and Autonomous Drone Swarm logic.
                    </p>
                 </div>
            </div>
            
            <button className="px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 hover:border-red-500/50 text-slate-300 hover:text-white transition-all duration-300 flex items-center gap-2 text-sm font-medium">
                Request Clearance <ArrowUpRight className="w-4 h-4" />
            </button>
        </div>
      </motion.div>
    </div>
  );
};