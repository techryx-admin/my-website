'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Shield, Database, Code, Terminal, Users, Target, Rocket, Cpu } from 'lucide-react';

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

export const AboutContent = () => {
  return (
    <div className="w-full mt-16">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center max-w-4xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-xs font-medium text-cyan mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            WHO WE ARE
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6 leading-tight">
          Architects of the <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan via-blue-500 to-emerald-500">
            Digital Frontier
          </span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Techryx is not just a software agency; we are a collective of systems engineers, data scientists, and creative problem solvers dedicated to building the infrastructure of tomorrow.
        </p>
      </motion.div>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
      >
        <motion.div variants={item} className="p-8 rounded-3xl bg-slate-900/30 border border-white/5 hover:border-cyan/30 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-cyan/10 flex items-center justify-center mb-6 group-hover:bg-cyan/20 transition-colors">
                <Target className="w-6 h-6 text-cyan" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Precision Engineering</h3>
            <p className="text-slate-400 leading-relaxed">
                We don't guess. We measure, analyze, and execute with mathematical precision. Every line of code is scrutinized for performance and maintainability.
            </p>
        </motion.div>

        <motion.div variants={item} className="p-8 rounded-3xl bg-slate-900/30 border border-white/5 hover:border-purple-500/30 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
                <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Security First</h3>
            <p className="text-slate-400 leading-relaxed">
                In an era of digital volatility, we prioritize security at the architectural level. Zero-trust principles are embedded into everything we build.
            </p>
        </motion.div>

        <motion.div variants={item} className="p-8 rounded-3xl bg-slate-900/30 border border-white/5 hover:border-emerald-500/30 transition-colors group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                <Rocket className="w-6 h-6 text-emerald-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Scalability</h3>
            <p className="text-slate-400 leading-relaxed">
                We build for growth. Our solutions are designed to handle massive data loads and user spikes without compromising on latency or stability.
            </p>
        </motion.div>
      </motion.div>

      <motion.div 
        variants={item}
        initial="hidden"
        animate="show"
        className="relative rounded-[2.5rem] bg-[#030712] border border-white/10 overflow-hidden mb-20"
      >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px]" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/5 rounded-full blur-[100px]" />
          
          <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-1 space-y-8">
                 <h2 className="text-3xl font-bold text-white">The Tech Stack</h2>
                 <p className="text-slate-400 text-lg">
                    We leverage cutting-edge open source technologies to deliver enterprise-grade software. Our expertise spans the entire development lifecycle.
                 </p>
                 
                 <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-slate-300">
                        <Terminal className="w-5 h-5 text-emerald-500" /> <span>Node.js & Python</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                        <Code className="w-5 h-5 text-cyan" /> <span>React & TypeScript</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                        <Cpu className="w-5 h-5 text-purple-500" /> <span>TensorFlow & PyTorch</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                        <Database className="w-5 h-5 text-blue-500" /> <span>PostgreSQL & MongoDB</span>
                    </div>
                 </div>
             </div>

             <div className="flex-1 w-full">
                <div className="rounded-xl bg-[#0B1120] border border-white/10 p-4 font-mono text-sm overflow-hidden shadow-2xl">
                    <div className="flex gap-2 mb-4 border-b border-white/5 pb-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="space-y-1">
                        <div className="text-slate-500"># Techryx Core Systems Initialization</div>
                        <div><span className="text-purple-400">class</span> <span className="text-yellow-200">Agency</span>:</div>
                        <div className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">__init__</span>(self):</div>
                        <div className="pl-8">self.mission = <span className="text-green-400">"Future Engineering"</span></div>
                        <div className="pl-8">self.capabilities = [</div>
                        <div className="pl-12 text-cyan">"AI/ML",</div>
                        <div className="pl-12 text-cyan">"Full Stack Dev",</div>
                        <div className="pl-12 text-cyan">"System Architecture"</div>
                        <div className="pl-8">]</div>
                        <br/>
                        <div className="pl-4"><span className="text-purple-400">def</span> <span className="text-blue-400">deploy_solution</span>(self, client):</div>
                        <div className="pl-8"><span className="text-purple-400">return</span> client.transform(<span className="text-orange-400">True</span>)</div>
                    </div>
                </div>
             </div>
          </div>
      </motion.div>

      <motion.div 
        variants={item}
        initial="hidden"
        animate="show"
        className="text-center max-w-3xl mx-auto"
      >
        <div className="inline-block p-4 rounded-full bg-white/5 border border-white/10 mb-6">
            <Users className="w-6 h-6 text-slate-300" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">Distributed Intelligence</h2>
        <p className="text-slate-400 leading-relaxed">
            Techryx operates as a decentralized network of senior engineers. We remove the bloat of traditional agencies, connecting you directly with the experts building your product. No middle management, just pure engineering bandwidth.
        </p>
      </motion.div>
    </div>
  );
};