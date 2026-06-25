import { useEffect, useState } from 'react';
import { ArrowRight, Menu, MessageSquare, X } from 'lucide-react';
import { BRAND_NAME, CONTACT_CONFIG } from '../config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Experience', href: '#features' },
    { name: 'Smart display', href: '#controls' },
    { name: 'Touch controls', href: '#controls-guide' },
    { name: 'Finishes', href: '#colours' },
    { name: 'Specifications', href: '#specifications' },
  ];

  const handleScrollTo = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header
      id="navbar"
      className={`premium-nav fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'premium-nav--scrolled py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-14">
        <a
          href="#hero"
          onClick={(event) => handleScrollTo(event, '#hero')}
          className="group flex items-center gap-3 text-[#f7f3e9]"
          aria-label={`${BRAND_NAME} home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d6b46a]/60 bg-[#d6b46a] text-xs font-extrabold tracking-[-0.08em] text-[#0b0a08] transition-transform duration-300 group-hover:scale-105">
            G9
          </span>
          <span className="leading-none">
            <span className="block text-sm font-extrabold tracking-[-0.04em]">{BRAND_NAME}</span>
            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.2em] text-[#aaa396]">Audio objects</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(event) => handleScrollTo(event, link.href)}
              className="text-[11px] font-semibold uppercase tracking-[0.1em] text-[#aaa396] transition-colors hover:text-[#f7f3e9]"
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
            className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold text-[#c5c0b5] transition-all hover:border-[#d6b46a]/40 hover:text-[#f7f3e9] lg:flex"
          >
            <MessageSquare className="h-3.5 w-3.5 text-[#d6b46a]" />
            Enquire
          </a>
          <a
            href={CONTACT_CONFIG.checkoutUrl}
            onClick={(event) => handleScrollTo(event, '#purchase-section')}
            className="premium-button inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-extrabold transition-all duration-300"
          >
            Shop G9
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <button
          onClick={() => setMobileMenuOpen((open) => !open)}
          className="rounded-full border border-white/10 p-2 text-[#f7f3e9] transition-colors hover:border-[#d6b46a]/50 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="absolute inset-x-3 top-[calc(100%+8px)] rounded-2xl border border-white/10 bg-[#100f0c]/95 p-5 shadow-2xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(event) => handleScrollTo(event, link.href)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#c5c0b5] transition-colors hover:bg-white/[0.05] hover:text-[#f7f3e9]"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
            <a
              href={CONTACT_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 px-3 py-3 text-xs font-bold text-[#e0dacd]"
            >
              <MessageSquare className="h-4 w-4 text-[#d6b46a]" />
              Enquire
            </a>
            <a
              href={CONTACT_CONFIG.checkoutUrl}
              onClick={(event) => handleScrollTo(event, '#purchase-section')}
              className="premium-button inline-flex items-center justify-center gap-1.5 rounded-xl px-3 py-3 text-xs font-extrabold"
            >
              Shop G9
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
