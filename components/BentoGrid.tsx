'use client';

import React from 'react';
import { HeroModule } from './modules/HeroModule';
import { AIModule } from './modules/AIModule';
import { NetworkModule } from './modules/NetworkModule';
import { DataModule } from './modules/DataModule';
import { DevModule } from './modules/DevModule';
import { StatsModule } from './modules/StatsModule';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const BentoGrid: React.FC = () => {
  const hoverEffects = "hover:scale-[1.02] hover:shadow-[0_0_30px_-10px_rgba(34,211,238,0.3)] transition-all duration-300 hover:z-10";

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid mt-24 grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-6 md:min-h-[850px] auto-rows-[minmax(220px,auto)]"
    >
      {/* 
        Grid Area Mapping
        Row 1: Hero (2) | AI (1) | Stats (1)
        Row 2: Hero (2) | AI (1) | Data (1)
        Row 3: Network (2) | Dev (2)
      */}
      
      {/* Hero: Top Left 2x2 */}
      <div className={`col-span-1 md:col-span-2 md:row-span-2 shadow-2xl shadow-black/50 rounded-3xl ${hoverEffects}`}>
        <HeroModule />
      </div>

      {/* AI: Middle Top 1x2 */}
      <div className={`col-span-1 md:col-span-1 md:row-span-2 shadow-xl shadow-black/30 rounded-3xl ${hoverEffects}`}>
        <AIModule />
      </div>

      {/* Stats: Top Right 1x1 */}
      <div className={`col-span-1 md:col-span-1 md:row-span-1 shadow-xl shadow-black/30 rounded-3xl ${hoverEffects}`}>
        <StatsModule />
      </div>

      {/* Data: Below Stats 1x1 */}
      <div className={`col-span-1 md:col-span-1 md:row-span-1 shadow-xl shadow-black/30 rounded-3xl ${hoverEffects}`}>
        <DataModule />
      </div>

      {/* Network: Bottom Left 2x1 */}
      <div className={`col-span-1 md:col-span-2 md:row-span-1 shadow-xl shadow-black/30 rounded-3xl ${hoverEffects}`}>
        <NetworkModule />
      </div>

      {/* Dev: Bottom Right 2x1 (Expanded) */}
      <div className={`col-span-1 md:col-span-2 md:row-span-1 shadow-xl shadow-black/30 rounded-3xl ${hoverEffects}`}>
        <DevModule />
      </div>

    </motion.div>
  );
};