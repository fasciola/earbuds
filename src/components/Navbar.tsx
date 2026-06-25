import { useEffect, useState, type MouseEvent } from 'react';
import { ArrowRight, Menu, MessageSquare, X } from 'lucide-react';
import { BRAND_NAME, CONTACT_CONFIG } from '../config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroMode = !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#features' },
    { name: 'Smart display', href: '#controls' },
    { name: 'Controls', href: '#controls-guide' },
    { name: 'Finishes', href: '#colours' },
    { name: 'Tech specs', href: '#specifications' },
  ];

  const handleScrollTo = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const topText = heroMode ? 'text-white' : 'text-[#1d1d1f]';
  const mutedText = heroMode ? 'text-white/70 hover:text-white' : 'text-[#515154] hover:text-[#0071e3]';

  return (
    <header
      id="navbar"
      className={`premium-nav fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'premium-nav--scrolled py-3' : 'premium-nav--stage py-4'
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a
          href="#hero"
          onClick={(event) => handleScrollTo(event, '#hero')}
          className={`group flex items-center gap-2.5 ${topText}`}
          aria-label={`${BRAND_NAME} home`}
        >
          <span className={`flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-extrabold tracking-[-0.08em] transition-transform duration-300 group-hover:scale-105 ${heroMode ? 'bg-white text-black' : 'bg-[#0071e3] text-white'}`}>
            G9
          </span>
          <span className="leading-none">
            <span className="block text-sm font-bold tracking-[-0.04em]">{BRAND_NAME}</span>
            <span className={`mt-1 block text-[8px] font-medium uppercase tracking-[0.18em] ${heroMode ? 'text-white/55' : 'text-[#6e6e73]'}`}>Smart audio</span>
          </span>
        </a>

        <nav className={`hidden items-center rounded-full border px-2 py-1 xl:flex ${heroMode ? 'border-white/15 bg-black/10' : 'border-[#e5e5e7] bg-white'}`}>
          {navLinks.slice(0, 5).map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleScrollTo(event, link.href)}
              className={`rounded-full px-4 py-2 text-[11px] font-medium transition-colors ${index === 0 && heroMode ? 'bg-white text-black' : mutedText}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={CONTACT_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`hidden items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all lg:flex ${heroMode ? 'border-white/25 bg-black/10 text-white hover:bg-black/25' : 'border-[#d2d2d7] bg-white text-[#1d1d1f] hover:border-[#0071e3] hover:text-[#0071e3]'}`}
          >
            <MessageSquare className={`h-3.5 w-3.5 ${heroMode ? 'text-white' : 'text-[#0071e3]'}`} />
            Enquire
          </a>
          <a
            href={CONTACT_CONFIG.checkoutUrl}
            onClick={(event) => handleScrollTo(event, '#purchase-section')}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition-all ${heroMode ? 'bg-white text-black hover:bg-white/85' : 'primary-button'}`}
          >
            Buy G9
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          className={`rounded-full border p-2 transition-colors md:hidden ${heroMode ? 'border-white/25 bg-black/10 text-white hover:bg-black/25' : 'border-[#d2d2d7] bg-white text-[#1d1d1f] hover:border-[#0071e3] hover:text-[#0071e3]'}`}
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-3 top-[calc(100%+8px)] rounded-2xl border border-[#e5e5e7] bg-white p-4 text-[#1d1d1f] shadow-[0_12px_36px_rgba(0,0,0,0.16)] md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => handleScrollTo(event, link.href)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#515154] transition-colors hover:bg-[#f5f5f7] hover:text-[#0071e3]"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#e5e5e7] pt-4">
            <a
              href={CONTACT_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#d2d2d7] bg-white px-3 py-3 text-xs font-bold text-[#1d1d1f]"
            >
              <MessageSquare className="h-4 w-4 text-[#0071e3]" />
              Enquire
            </a>
            <a
              href={CONTACT_CONFIG.checkoutUrl}
              onClick={(event) => handleScrollTo(event, '#purchase-section')}
              className="primary-button rounded-xl px-3 py-3 text-xs font-bold"
            >
              Buy G9
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
