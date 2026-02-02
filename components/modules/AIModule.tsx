'use client';

import React from 'react';
import { BrainCircuit } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const item: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 50 } }
};

export const AIModule: React.FC = () => {
  return (
    <motion.div 
      variants={item}
      className="h-full w-full rounded-3xl bg-slate-900/50 border border-white/10 relative overflow-hidden group flex flex-col p-6 hover:bg-slate-900/80 transition-colors duration-500"
    >
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/20 blur-[80px] group-hover:bg-purple-500/30 transition-all duration-500" />

        <div className="relative z-10 flex-1 flex items-center justify-center">
            {/* Abstract Neural Icon */}
            <div className="relative w-24 h-24">
                <BrainCircuit className="w-full h-full text-white/80 stroke-[1] drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                {/* Orbital particles */}
                <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
                    <div className="absolute top-0 left-1/2 w-2 h-2 bg-cyan rounded-full shadow-[0_0_10px_#22d3ee]" />
                </div>
                 <div className="absolute inset-0 animate-[spin_12s_linear_infinite_reverse] rotate-45">
                    <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full shadow-[0_0_10px_#a855f7]" />
                </div>
            </div>
        </div>

        <div className="relative z-10 mt-4">
            <h3 className="text-2xl font-semibold text-white tracking-tight">Artificial Intelligence</h3>
            <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                Neural networks & machine learning models optimized for enterprise data processing.
            </p>
        </div>
        
        {/* Hover Reveal Button */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                 <div className="w-1.5 h-1.5 bg-white rounded-full" />
            </div>
        </div>
    </motion.div>
  );
};