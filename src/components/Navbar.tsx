import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, ArrowRight } from 'lucide-react';
import { BRAND_NAME, CONTACT_CONFIG } from '../config';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Controls', href: '#controls' },
    { name: 'Colours', href: '#colours' },
    { name: 'Specifications', href: '#specifications' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => handleScrollTo(e, '#root')}
          className="text-white font-sans font-bold text-xl tracking-tight hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-blue-500 flex items-center justify-center text-black font-extrabold text-sm shadow-[0_0_15px_rgba(34,211,238,0.3)]">
            G9
          </span>
          <span className="text-white tracking-wider uppercase font-medium text-lg">{BRAND_NAME}</span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-neutral-400 hover:text-white font-sans text-sm font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={CONTACT_CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/10 text-neutral-300 hover:text-emerald-400 text-sm font-medium transition-all duration-300"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <a
            href={CONTACT_CONFIG.checkoutUrl}
            onClick={(e) => handleScrollTo(e, '#purchase-section')}
            className="flex items-center gap-1 px-5 py-2 rounded-full bg-white hover:bg-neutral-200 text-neutral-950 text-sm font-semibold tracking-wide transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.25)]"
          >
            <span>Buy Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[68px] bg-neutral-950 z-40 flex flex-col px-8 py-10 border-t border-white/5 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-6 mb-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="text-neutral-300 hover:text-white font-sans text-lg font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          <div className="flex flex-col gap-4 mt-auto">
            <a
              href={CONTACT_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-white/10 text-neutral-300 font-medium hover:text-emerald-400 hover:border-emerald-500/20"
            >
              <MessageSquare className="w-5 h-5 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href={CONTACT_CONFIG.checkoutUrl}
              onClick={(e) => handleScrollTo(e, '#purchase-section')}
              className="flex items-center justify-center gap-1 w-full py-3.5 rounded-xl bg-white text-neutral-950 font-bold tracking-wide shadow-lg hover:bg-neutral-100"
            >
              <span>Buy Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
