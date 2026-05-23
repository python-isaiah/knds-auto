import React from 'react';
import Link from 'next/link';
// We are using universal icons here to avoid brand-name export errors
import { Camera, Send, Mail, ArrowUpRight, Globe } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-32 pb-10 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-32">
          
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="text-4xl font-black tracking-tighter uppercase italic mb-8 block">
              KNDS<span className="text-zinc-600 font-light">AUTO</span>
            </Link>
            <p className="text-zinc-500 text-[10px] tracking-[0.3em] uppercase leading-loose max-w-sm">
              Engineering the most vital point of contact between driver and machine. 
              Based in Albany, NY. Shipping Worldwide.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.4em] uppercase mb-10 opacity-30">Explore</h4>
            <ul className="space-y-4 text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400">
              <li><Link href="/" className="hover:text-white transition-colors">Collection</Link></li>
              <li><a href="#process" className="hover:text-white transition-colors">The Process</a></li>
              <li><Link href="/bespoke" className="hover:text-white transition-colors flex items-center gap-2">Custom Build <ArrowUpRight size={10}/></Link></li>
              <li><Link href="/shipping" className="hover:text-white transition-colors">Logistics</Link></li>
            </ul>
          </div>

          {/* Social/Contact Column */}
          <div>
            <h4 className="text-white text-[10px] font-bold tracking-[0.4em] uppercase mb-10 opacity-30">Connect</h4>
            <div className="flex gap-6 text-zinc-400">
              {/* Using Camera for IG, Send for Twitter/X/Telegram, and Globe for Web */}
              <a href="#" className="hover:text-white transition-colors"><Camera size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><Send size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><Globe size={18} /></a>
              <a href="#" className="hover:text-white transition-colors"><Mail size={18} /></a>
            </div>
            <div className="mt-10">
              <p className="text-[9px] text-zinc-600 tracking-[0.2em] uppercase font-bold">Inquiries</p>
              <p className="text-[10px] text-zinc-300 tracking-widest uppercase mt-2">support@kndsauto.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[9px] text-zinc-600 tracking-[0.4em] uppercase font-bold">
            © {currentYear} KNDS AUTO // All Rights Reserved.
          </div>
          <div className="flex gap-8 text-[9px] text-zinc-700 tracking-[0.2em] uppercase font-bold">
            <Link href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}