'use client';

import React from 'react';
import { Settings, CheckCircle2, Terminal } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const item: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 50 } }
};

export const DevModule: React.FC = () => {
  return (
    <motion.div 
      variants={item}
      className="h-full w-full rounded-3xl bg-slate-900/50 border border-white/10 p-8 flex flex-row items-center justify-between hover:bg-slate-800/50 transition-all duration-300 group relative overflow-hidden"
    >
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 group-hover:bg-purple-500/10 transition-colors" />

        <div className="relative z-10 flex flex-col justify-center h-full max-w-[60%]">
             <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                    <Terminal className="w-5 h-5 text-purple-400" />
                </div>
                <span className="text-purple-400 text-xs font-bold tracking-wider uppercase">Engineering</span>
            </div>
            
            <h4 className="text-2xl font-bold text-white leading-tight mb-2">Scalable Solutions</h4>
            <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Tailored microservices & enterprise architecture designed for high throughput.
            </p>
        </div>

        {/* Visual Abstract */}
        <div className="relative z-10 hidden md:flex gap-2 items-center opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="flex flex-col gap-2">
                 <div className="w-16 h-2 bg-white/10 rounded-full" />
                 <div className="w-12 h-2 bg-white/10 rounded-full" />
                 <div className="w-20 h-2 bg-white/20 rounded-full" />
            </div>
             <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <Settings className="w-5 h-5 text-white" />
            </div>
        </div>
    </motion.div>
  );
};