import React from 'react';
import { Link } from './Link';
import { Linkedin, Instagram, Facebook, Github } from 'lucide-react';

// Inline TikTok Icon as it is not always available in standard icon sets
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    strokeWidth="0" 
    className={className}
    height="1em" 
    width="1em" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="mt-20 border-t border-white/5 pt-10 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2 md:col-span-1">
                <h4 className="text-white font-bold tracking-tight mb-4">TECHRYX</h4>
                <p className="text-slate-500 text-sm">
                    Engineering the digital frontier with precision and foresight.
                </p>
            </div>
            
            <div>
                <h5 className="text-white font-medium mb-4">Services</h5>
                <ul className="space-y-2 text-sm text-slate-500">
                    <li><Link href="/services" className="hover:text-cyan cursor-pointer transition-colors">AI & Machine Learning</Link></li>
                    <li><Link href="/services" className="hover:text-cyan cursor-pointer transition-colors">Software Engineering</Link></li>
                    <li><Link href="/services" className="hover:text-cyan cursor-pointer transition-colors">Data Scraping</Link></li>
                    <li><Link href="/services" className="hover:text-cyan cursor-pointer transition-colors">Networking</Link></li>
                </ul>
            </div>

            <div>
                <h5 className="text-white font-medium mb-4">Company</h5>
                <ul className="space-y-2 text-sm text-slate-500">
                    {/* <li><Link href="/work" className="hover:text-cyan cursor-pointer transition-colors">Work</Link></li> */}
                    <li><Link href="/about" className="hover:text-cyan cursor-pointer transition-colors">About</Link></li>
                    <li><Link href="/contact" className="hover:text-cyan cursor-pointer transition-colors">Contact</Link></li>
                </ul>
            </div>

            <div>
                <h5 className="text-white font-medium mb-4">Connect</h5>
                <div className="flex gap-4 flex-wrap">
                    <a href="https://www.linkedin.com/company/techryx" target="_blank" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#0077b5]/20 hover:text-[#0077b5] transition-all" aria-label="LinkedIn">
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="https://www.instagram.com/techryx.official/"  target="_blank" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#E1306C]/20 hover:text-[#E1306C] transition-all" aria-label="Instagram">
                        <Instagram className="w-4 h-4" />
                    </a>
                    <a href="https://www.facebook.com/profile.php?id=61586900503556" target="_blank" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[#1877F2]/20 hover:text-[#1877F2] transition-all" aria-label="Facebook">
                        <Facebook className="w-4 h-4" />
                    </a>
                    <a href="https://www.tiktok.com/@techryx" target="_blank" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:text-cyan transition-all" aria-label="TikTok">
                        <TiktokIcon className="w-4 h-4" />
                    </a>
                    <a href="https://github.com/techryx-official" target="_blank" className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all" aria-label="GitHub">
                        <Github className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-slate-700">
            © 2024 Techryx Agency. All systems operational.
        </div>
    </footer>
  );
};