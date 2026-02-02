'use client';

import React from 'react';
import { Server } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export const NetworkModule: React.FC = () => {
  return (
    <motion.div 
      variants={item}
      className="h-full w-full rounded-3xl bg-slate-900/30 border border-white/5 relative overflow-hidden group flex flex-row items-center justify-between p-8"
    >
      <div className="absolute inset-0 rounded-3xl border border-transparent [mask-clip:padding-box,border-box] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)] after:absolute after:aspect-square after:w-[300px] after:animate-border-beam after:[animation-delay:0s] after:[background:linear-gradient(to_left,#10B981,transparent,transparent)] after:[offset-anchor:100%_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(1.5rem-1px))]" style={{"--duration": 10} as React.CSSProperties} />
      
      <div className="relative z-10 flex flex-col justify-center h-full max-w-[55%]">
        <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                <Server className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-emerald-500 text-xs font-bold tracking-wider uppercase">Infrastructure</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Global Networking</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
            Secure topology management and edge integration.
        </p>
      </div>

      <div className="relative z-10 h-full w-[40%] flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity">
        <div className="relative w-full h-24">
            <svg className="w-full h-full" viewBox="0 0 100 60">
                <circle cx="20" cy="30" r="4" fill="#10B981" className="animate-pulse" />
                <circle cx="50" cy="10" r="3" fill="#334155" />
                <circle cx="50" cy="50" r="3" fill="#334155" />
                <circle cx="80" cy="30" r="4" fill="#64748B" />
                
                <path d="M24 30 L47 12" stroke="#1e293b" strokeWidth="1" />
                <path d="M24 30 L47 48" stroke="#1e293b" strokeWidth="1" />
                <path d="M53 12 L77 28" stroke="#1e293b" strokeWidth="1" />
                <path d="M53 48 L77 32" stroke="#1e293b" strokeWidth="1" />
                
                <circle r="2" fill="#22D3EE">
                     <animateMotion dur="2s" repeatCount="indefinite" path="M24 30 L47 12 L77 28" />
                </circle>
                <circle r="2" fill="#22D3EE">
                     <animateMotion dur="2s" begin="1s" repeatCount="indefinite" path="M24 30 L47 48 L77 32" />
                </circle>
            </svg>
        </div>
      </div>
    </motion.div>
  );
};