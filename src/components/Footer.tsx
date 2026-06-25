import { Globe, MessageSquare, ShieldCheck } from 'lucide-react';
import { BRAND_NAME, CONTACT_CONFIG } from '../config';

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { name: 'Shipping & returns', href: '#' },
    { name: 'Warranty policy', href: '#' },
    { name: 'Privacy policy', href: '#' },
    { name: 'Contact us', href: CONTACT_CONFIG.whatsappUrl },
  ];

  return (
    <footer className="border-t border-[#e5e5e7] bg-white px-5 py-12 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-10 border-b border-[#e5e5e7] pb-10 md:grid-cols-[1.2fr_1fr_0.85fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0071e3] text-[10px] font-extrabold tracking-[-0.08em] text-white">G9</span>
              <span><span className="block text-sm font-bold tracking-[-0.04em] text-[#1d1d1f]">{BRAND_NAME}</span><span className="mt-0.5 block text-[8px] font-medium uppercase tracking-[0.18em] text-[#6e6e73]">Smart audio</span></span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#6e6e73]">Smart listening designed around a touchscreen charging case and intuitive everyday control.</p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#6e6e73]">Support and legal</p>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {links.map((link) => <a key={link.name} href={link.href} className="text-sm text-[#515154] transition-colors hover:text-[#0071e3]">{link.name}</a>)}
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#6e6e73]">Need help?</p>
            <a href={CONTACT_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="secondary-button mt-4 w-fit px-4 py-2.5 text-xs font-bold"><MessageSquare className="h-4 w-4 text-[#0071e3]" /> WhatsApp support</a>
            <p className="mt-4 flex items-center gap-2 text-xs text-[#6e6e73]"><Globe className="h-4 w-4 text-[#0071e3]" /> Global shipments active</p>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-[#6e6e73] sm:flex-row sm:items-center">
          <span>© {year} {BRAND_NAME}. All rights reserved.</span>
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#0071e3]" /> Specifications subject to supplier confirmation.</span>
        </div>
      </div>
    </footer>
  );
}
