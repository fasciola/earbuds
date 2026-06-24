import { BRAND_NAME, CONTACT_CONFIG } from '../config';
import { MessageSquare, ShieldCheck, Mail, Globe, Sparkles } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { name: "Shipping & Returns", href: "#" },
    { name: "Warranty Policy", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Contact Us", href: CONTACT_CONFIG.whatsappUrl },
  ];

  return (
    <footer className="bg-neutral-950 text-white border-t border-white/5 pt-16 pb-12 relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Upper footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Logo & Subtitle Block (5 columns) */}
          <div className="col-span-1 md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-black font-extrabold text-sm shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                G9
              </span>
              <span className="text-white tracking-wider uppercase font-medium text-lg">{BRAND_NAME}</span>
            </div>
            <p className="text-neutral-400 font-sans text-sm max-w-sm">
              Smart audio for everyday life. High-fidelity acoustics met with intelligent, color-screen interactive control boxes.
            </p>
          </div>

          {/* Quick links grid (4 columns) */}
          <div className="col-span-1 md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">SUPPORT & LEGAL</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-neutral-400">
              {legalLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="hover:text-cyan-400 transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect block (3 columns) */}
          <div className="col-span-1 md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-neutral-400 uppercase">CONNECT DIRECTLY</h4>
            <div className="space-y-3">
              <a
                href={CONTACT_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/5 hover:border-emerald-500/20 bg-white/[0.01] hover:bg-emerald-500/5 text-neutral-300 hover:text-emerald-400 transition-all duration-300 w-fit"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-medium">WhatsApp Support</span>
              </a>
              <div className="flex items-center gap-2 text-neutral-500 text-xs">
                <Globe className="w-3.5 h-3.5" />
                <span>Global Shipments Active</span>
              </div>
            </div>
          </div>

        </div>

        {/* Lower footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-sans">
          
          <div>
            &copy; {currentYear} {BRAND_NAME}. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Specifications subject to supplier confirmation. Made for smart listening.</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
