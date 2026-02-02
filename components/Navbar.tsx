'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Link } from './Link';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCurrentView = () => {
    if (pathname === '/') return 'home';
    return pathname?.substring(1) || 'home';
  };
  
  const currentView = getCurrentView();

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#020617]/80 backdrop-blur-xl border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link 
          href="/"
          className="flex items-center group cursor-pointer"
        >
          <img src="/techryx.png" className="w-16 h-16 text-cyan group-hover:text-white transition-colors" alt="" />
          <span className="text-xl -ml-1.5 font-bold tracking-tight text-white group-hover:text-cyan transition-colors">
            TECHRYX
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {['services', 'about'].map((item) => {
            const isActive = currentView === item;
            return (
              <Link 
                key={item}
                href={`/${item}`}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative group overflow-hidden ${isActive ? 'text-white' : 'text-slate-400 hover:text-white'}`}
              >
                <span className="relative z-10 capitalize">{item}</span>
                {isActive && (
                  <motion.div layoutId="nav-bg" className="absolute inset-0 bg-white/5 rounded-full" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
                )}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
              </Link>
            );
          })}
          
          <div className="w-px h-6 bg-white/10 mx-2" />

          <Link 
            href="/contact"
            className={`ml-2 px-6 py-2.5 rounded-full border text-sm font-semibold transition-all duration-300 ${
              currentView === 'contact' 
              ? 'bg-cyan text-midnight border-cyan shadow-[0_0_20px_-5px_rgba(34,211,238,0.6)]' 
              : 'border-white/10 text-white hover:border-cyan/50 hover:text-cyan hover:bg-cyan/5'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 right-0 bg-[#020617] border-b border-white/10 overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                <Link onClick={() => setIsOpen(false)} href="/services" className="text-lg font-medium text-slate-300 hover:text-cyan text-left py-2 border-b border-white/5">Services</Link>
                {/* <Link onClick={() => setIsOpen(false)} href="/work" className="text-lg font-medium text-slate-300 hover:text-cyan text-left py-2 border-b border-white/5">Work</Link> */}
                <Link onClick={() => setIsOpen(false)} href="/about" className="text-lg font-medium text-slate-300 hover:text-cyan text-left py-2 border-b border-white/5">About</Link>
                <Link 
                  onClick={() => setIsOpen(false)}
                  href="/contact"
                  className="w-full mt-4 py-4 rounded-xl bg-gradient-to-r from-cyan to-emerald text-midnight font-bold text-center"
                >
                  Initiate Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};