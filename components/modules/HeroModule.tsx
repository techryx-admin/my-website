'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { Link } from '../Link';

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } }
};

export const HeroModule: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "Full-stack solutions for AI, Networking, and Scalable Software.";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i > fullText.length) clearInterval(typing);
    }, 30);
    return () => clearInterval(typing);
  }, []);

  return (
    <motion.div 
      variants={item}
      className="h-full w-full rounded-3xl bg-[#030712] border border-white/10 relative overflow-hidden group flex flex-col"
    >
      {/* Abstract Background Animation */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#020617] to-[#020617] animate-pulse-slow" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
        <div className="space-y-8 max-w-xl">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-cyan/5 border border-cyan/20 text-xs font-semibold text-cyan/90 backdrop-blur-sm shadow-[0_0_15px_-5px_rgba(34,211,238,0.4)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
            </span>
            SYSTEMS NOMINAL V2.4
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05]">
            INNOVATING BEYOND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">
              CODE.
            </span>
          </h1>
          
          <div className="min-h-[3.5rem]">
            <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed font-mono">
              <span className="text-cyan mr-2">{'>'}</span>
              {text}
              <span className="animate-pulse ml-1 inline-block w-2 h-4 bg-cyan align-middle"></span>
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-0 flex flex-wrap gap-4">
          <Link 
            href="/services"
            className="mt-2 group relative inline-flex items-center justify-center px-8 py-4 font-bold text-midnight transition-all duration-300 bg-gradient-to-r from-cyan to-emerald rounded-full hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.6)] hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="mr-2">View Capabilities</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          {/* <Link 
             href="/work"
             className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 text-white font-medium hover:border-white/30 transition-all duration-300"
          >
            Explore Work
          </Link> */}
        </div>
      </div>

      {/* Futuristic Corner Accents */}
      <div className="absolute top-0 right-0 p-6 opacity-30">
         <div className="w-16 h-1 bg-gradient-to-l from-cyan to-transparent" />
         <div className="w-1 h-16 bg-gradient-to-b from-cyan to-transparent absolute top-6 right-6" />
      </div>
      
    </motion.div>
  );
};