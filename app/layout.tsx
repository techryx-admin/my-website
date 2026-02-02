import React, { Suspense } from 'react';
import { Navbar } from '../components/Navbar';
import { BackgroundEffects } from '../components/BackgroundEffects';
import { Footer } from '../components/Footer';
import Loading from './loading';

export const metadata = {
  title: 'Techryx | Future Engineering',
  description: 'A high-fidelity, professional technical agency website with a futuristic bento-grid aesthetic.',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    midnight: '#020617',
                    matte: '#080808',
                    emerald: '#10B981',
                    cyan: '#22D3EE',
                    slate: {
                      850: '#1e293b',
                    }
                  },
                  fontFamily: {
                    sans: ['Inter', 'sans-serif'],
                  },
                  animation: {
                    'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
                    'marquee': 'marquee 25s linear infinite',
                    'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                  },
                  keyframes: {
                    'border-beam': {
                      '100%': {
                        'offset-distance': '100%',
                      },
                    },
                    'marquee': {
                      '0%': { transform: 'translateX(0%)' },
                      '100%': { transform: 'translateX(-50%)' },
                    },
                  },
                },
              },
            }
          `
        }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <style>{`
          body {
            background-color: #020617;
            color: white;
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
          }
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: #020617; }
          ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 4px; }
          ::-webkit-scrollbar-thumb:hover { background: #334155; }
        `}</style>
      </head>
      <body className="min-h-screen bg-gradient-to-b from-midnight to-matte text-white selection:bg-cyan selection:text-midnight">
        <BackgroundEffects />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Navbar />
          <main className="mt-8 md:mt-16 pb-20 min-h-[600px]">
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}