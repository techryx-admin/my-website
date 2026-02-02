'use client';

import React from 'react';
import { Laptop, Database, Code } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const item: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 50 } }
};

export const DataModule: React.FC = () => {
  return (
    <motion.div 
      variants={item}
      className="h-full w-full rounded-3xl bg-slate-900/50 border border-white/10 p-8 flex flex-col justify-between hover:border-cyan/30 transition-all duration-300 group"
    >
        <div className="flex justify-between items-start">
            <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                <Laptop className="w-6 h-6 text-slate-200" />
            </div>
            <div className="w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_#22d3ee] animate-pulse" />
        </div>
        
        <div>
            <h4 className="text-xl font-bold text-white group-hover:text-cyan transition-colors mb-2">Full Stack</h4>
            <div className="flex flex-col gap-1.5">
                 <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <Code className="w-3 h-3 text-slate-600" /> Web & Mobile
                 </div>
                 <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <Database className="w-3 h-3 text-slate-600" /> Data Systems
                 </div>
            </div>
        </div>
    </motion.div>
  );
};