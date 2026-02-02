'use client';

import React, { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const item: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 50 } }
};

export const StatsModule: React.FC = () => {
  const [count, setCount] = useState(0);
  const target = 10;

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const incrementTime = 40;
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === target) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      variants={item}
      className="h-full w-full rounded-3xl bg-slate-900/50 border border-white/10 p-6 flex flex-col justify-center items-center relative overflow-hidden group"
    >
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <Activity className="w-5 h-5 text-emerald-500 mb-2" />
        
        <div className="flex items-baseline gap-1 relative z-10">
            <span className="text-4xl font-bold text-white tabular-nums tracking-tighter">
                {count}+
            </span>
        </div>
        
        <p className="text-xs text-slate-400 font-medium uppercase tracking-wide mt-2 text-center">
            Active Deployments
        </p>
    </motion.div>
  );
};