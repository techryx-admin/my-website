'use client';

import React from 'react';
import { Navbar } from './Navbar';
import { BackgroundEffects } from './BackgroundEffects';
import { Footer } from './Footer';

export const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <BackgroundEffects />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Navbar />
        <main className="mt-8 md:mt-16 pb-20 min-h-[600px]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};