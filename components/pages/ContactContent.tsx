'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { Send, Mail, MapPin, Radio, MessageSquare, Terminal, User, AtSign } from 'lucide-react';

export const ContactContent = () => {
  // 1. Setup Formspree Hook
  // REPLACE "YOUR_FORM_ID" WITH YOUR ACTUAL ID FROM FORMSPREE
  const [state, handleSubmit] = useForm("mykerjvn");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // 2. Effect to clear form when successfully sent
  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: '', email: '', message: '' });
    }
  }, [state.succeeded]);

  return (
    <div className="w-full max-w-6xl mx-auto mt-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-xs font-medium text-cyan mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
            COMMUNICATION UPLINK
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Initialize <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan to-emerald-400">Project</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Ready to engineer the future? Establish a connection with our team. 
          Responses are typically generated within 24 hours.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4"
      >
        <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 flex items-center gap-4 hover:border-white/10 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-cyan">
                <Mail className="w-6 h-6" />
            </div>
            <div>
                <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">Direct Feed</div>
                <div className="text-white font-medium">connect.techrx@gmail.com</div>
            </div>
        </div>
        <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 flex items-center gap-4 hover:border-white/10 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-emerald-500">
                <Radio className="w-6 h-6" />
            </div>
            <div>
                <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">Status</div>
                <div className="text-white font-medium flex items-center gap-2">
                    Systems Online
                </div>
            </div>
        </div>
        <div className="p-6 rounded-3xl bg-slate-900/40 border border-white/5 flex items-center gap-4 hover:border-white/10 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-purple-500">
                <MapPin className="w-6 h-6" />
            </div>
            <div>
                <div className="text-xs text-slate-500 font-mono uppercase tracking-wider">Base of Operations</div>
                <div className="text-white font-medium">Global / Distributed</div>
            </div>
        </div>
      </motion.div>

      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-80"
      >
        <div className="md:col-span-3 flex flex-col gap-4 h-full">
            <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-slate-900/40 rounded-3xl border border-white/10 group-focus-within:border-cyan/50 transition-colors duration-300" />
                <div className="relative z-10 h-full p-6 flex flex-col">
                    <label className="flex items-center gap-2 text-xs font-mono text-cyan mb-2">
                        <User className="w-3 h-3" /> IDENTITY
                    </label>
                    <input 
                        type="text"
                        name="name" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter Name"
                        className="w-full bg-transparent border-none outline-none text-white placeholder:text-slate-600 h-full text-lg"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-xs mt-1"/>
                </div>
            </div>
            <div className="flex-1 relative group">
                 <div className="absolute inset-0 bg-slate-900/40 rounded-3xl border border-white/10 group-focus-within:border-cyan/50 transition-colors duration-300" />
                 <div className="relative z-10 h-full p-6 flex flex-col">
                    <label className="flex items-center gap-2 text-xs font-mono text-cyan mb-2">
                        <AtSign className="w-3 h-3" /> EMAIL ADDRESS
                    </label>
                    <input 
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Enter Email"
                        className="w-full bg-transparent border-none outline-none text-white placeholder:text-slate-600 h-full text-lg"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1"/>
                </div>
            </div>
        </div>

        <div className="md:col-span-7 relative group h-64 md:h-full">
            <div className="absolute inset-0 bg-slate-900/40 rounded-3xl border border-white/10 group-focus-within:border-cyan/50 transition-colors duration-300" />
            <div className="relative z-10 h-full p-6 md:p-8 flex flex-col">
                <label className="flex items-center gap-2 text-xs font-mono text-cyan mb-4">
                    <Terminal className="w-3 h-3" /> HOW CAN WE HELP YOU?
                </label>
                <textarea 
                    required
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Describe the services you need or the problem we need to solve..."
                    className="w-full flex-1 bg-transparent border-none outline-none text-white placeholder:text-slate-600 resize-none text-lg leading-relaxed custom-scrollbar"
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1"/>
            </div>
        </div>

        <button 
            type="submit"
            disabled={state.submitting || state.succeeded}
            className="md:col-span-2 relative group h-24 md:h-full overflow-hidden rounded-3xl disabled:cursor-not-allowed"
        >
            {/* Background Gradients based on State */}
            <div className={`absolute inset-0 bg-gradient-to-b from-cyan to-blue-600 transition-all duration-300 ${state.succeeded ? 'opacity-0' : 'opacity-100 group-hover:scale-110'}`} />
            <div className={`absolute inset-0 bg-emerald-500 transition-all duration-300 ${state.succeeded ? 'opacity-100' : 'opacity-0'}`} />
            
            <div className="relative z-10 h-full flex flex-col items-center justify-center gap-3 text-midnight font-bold">
                {/* 1. IDLE STATE */}
                {!state.submitting && !state.succeeded && (
                    <>
                        <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
                            <Send className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white tracking-widest text-sm uppercase">Transmit</span>
                    </>
                )}
                
                {/* 2. SENDING STATE */}
                {state.submitting && (
                    <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                )}
                
                {/* 3. SUCCESS STATE */}
                {state.succeeded && (
                    <>
                        <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                            <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-white tracking-widest text-sm uppercase">Received</span>
                    </>
                )}
            </div>
        </button>

      </motion.form>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-4 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-slate-500"
      >
        <div className="flex gap-2">
            <span className="text-emerald-500">➜</span>
            <span>System ready for encrypted transmission...</span>
        </div>
        
        {state.submitting && (
             <div className="flex gap-2 mt-1">
                <span className="text-yellow-500">➜</span>
                <span className="animate-pulse">Establish uplink... Transmitting packet...</span>
            </div>
        )}

        {state.succeeded && (
            <div className="flex gap-2 mt-1">
                <span className="text-emerald-500">➜</span>
                <span className="text-emerald-400">Transmission successful. Acknowledgment received.</span>
            </div>
        )}
        
        {!state.submitting && !state.succeeded && (
             <div className="flex gap-2 mt-1">
                <span className="text-emerald-500">➜</span>
                <span>Awaiting user input packet...</span>
            </div>
        )}
      </motion.div>
    </div>
  );
};