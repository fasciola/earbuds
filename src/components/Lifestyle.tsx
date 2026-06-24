import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, MessageSquare, Check, CreditCard, ShieldCheck } from 'lucide-react';
import { HERO_VIDEO_PATH, IMAGES } from '../assets-ref';
import { CONTACT_CONFIG } from '../config';

type SelectionColour = 'black' | 'white' | 'pink' | 'beige';

export default function Lifestyle() {
  const [selectedCol, setSelectedCol] = useState<SelectionColour>('black');
  const [quantity, setQuantity] = useState<number>(1);
  const [ordered, setOrdered] = useState<boolean>(false);

  const colors = [
    { id: 'black', label: 'Obsidian Black', colorClass: 'bg-neutral-900 border-neutral-700' },
    { id: 'white', label: 'Pure White', colorClass: 'bg-white border-neutral-200' },
    { id: 'pink', label: 'Pastel Pink', colorClass: 'bg-rose-300 border-rose-400' },
    { id: 'beige', label: 'Desert Beige', colorClass: 'bg-amber-100 border-amber-200' },
  ];

  const price = 49.99;
  const originalPrice = 89.99;
  const totalPrice = (price * quantity).toFixed(2);

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrdered(true);
    setTimeout(() => {
      setOrdered(false);
    }, 5000);
  };

  const activeColorObject = colors.find((c) => c.id === selectedCol) || colors[0];

  return (
    <section id="purchase-section" className="relative py-28 bg-black text-white overflow-hidden">
      
      {/* Background Video Layer with Dark Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={IMAGES.closeup}
          className="w-full h-full object-cover object-center opacity-40"
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_PATH} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-neutral-950" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Message & Closing Headline (7 columns) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase block">
              Limited Edition Launch
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-extrabold tracking-tight leading-[1.1]">
              Small case. <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Smarter listening.</span>
            </h2>
            <p className="text-neutral-300 font-sans text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Upgrade your everyday audio with a touchscreen charging case made to stand out. Enjoy smart custom interfaces, premium sound, and ultra-long battery life.
            </p>

            {/* Micro value tags */}
            <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start pt-4 text-xs text-neutral-400">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Free Express Shipping</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>1-Year Supplier Warranty</span>
              </div>
            </div>
          </div>

          {/* Right Column: Premium High-Converting Checkout Widget (5 columns) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md p-8 rounded-3xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-sans font-extrabold tracking-tight">Order Your G9</h3>
                  <p className="text-xs text-neutral-400 mt-1">Select preferences below</p>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline justify-end gap-2">
                    <span className="text-2xl font-mono font-bold text-cyan-400">${price}</span>
                    <span className="text-sm line-through text-neutral-500 font-mono">${originalPrice}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded font-mono font-semibold">SAVE 45% TODAY</span>
                </div>
              </div>

              {/* Order Form */}
              <form onSubmit={handleOrderSubmit} className="space-y-5">
                
                {/* Colour selection */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase">1. CHOOSE COLOR</span>
                  <div className="flex gap-3">
                    {colors.map((col) => {
                      const isSelected = selectedCol === col.id;
                      return (
                        <button
                          key={col.id}
                          type="button"
                          onClick={() => setSelectedCol(col.id as SelectionColour)}
                          className={`w-9 h-9 rounded-full ${col.colorClass} border transition-all duration-300 flex items-center justify-center cursor-pointer ${
                            isSelected ? 'scale-110 ring-2 ring-cyan-400 ring-offset-2 ring-offset-neutral-900' : 'opacity-60 hover:opacity-100'
                          }`}
                          title={col.label}
                        >
                          {isSelected && (
                            <Check className={`w-4 h-4 ${col.id === 'white' || col.id === 'beige' ? 'text-neutral-950' : 'text-white'}`} strokeWidth={3.5} />
                          )}
                        </button>
                      );
                    })}
                  </div>
                  <span className="text-xs text-neutral-400 block pt-1">
                    Selected finish: <strong className="text-white">{activeColorObject.label}</strong>
                  </span>
                </div>

                {/* Quantity adjust */}
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold tracking-wider text-neutral-400 uppercase">2. QUANTITY</span>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center rounded-xl border border-white/10 bg-neutral-950 p-1">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3.5 py-1 text-neutral-400 hover:text-white font-bold text-lg transition-colors cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-4 text-white font-mono font-bold text-sm">{quantity}</span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="px-3.5 py-1 text-neutral-400 hover:text-white font-bold text-lg transition-colors cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-xs text-neutral-400 font-mono">
                      Subtotal: <span className="text-white font-bold">${totalPrice}</span>
                    </div>
                  </div>
                </div>

                {/* Shipping & trust indicators */}
                <div className="p-3.5 rounded-2xl bg-neutral-950/50 border border-white/5 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                    <CreditCard className="w-4 h-4 text-cyan-400" />
                    <span>Secure checkout encrypted by Stripe</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" />
                    <span>Risk-free 14-day return framework</span>
                  </div>
                </div>

                {/* Action buttons */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-extrabold tracking-wider text-sm transition-all duration-300 shadow-[0_4px_25px_rgba(34,211,238,0.25)] hover:shadow-[0_4px_30px_rgba(34,211,238,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-4.5 h-4.5" />
                    <span>ORDER NOW</span>
                  </button>

                  <a
                    href={CONTACT_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 rounded-full bg-neutral-950 border border-white/10 hover:border-emerald-500/30 hover:bg-emerald-500/10 text-neutral-200 hover:text-emerald-400 font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4.5 h-4.5 text-emerald-400 fill-emerald-500/10" />
                    <span>CHAT ON WHATSAPP</span>
                  </a>
                </div>

              </form>

              {/* Order complete indicator */}
              <AnimatePresence>
                {ordered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-neutral-950/95 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-4 animate-bounce">
                      <Check className="w-7 h-7" strokeWidth={3} />
                    </div>
                    <h4 className="text-xl font-sans font-bold text-white">Order Initialized!</h4>
                    <p className="text-xs text-neutral-400 mt-2 max-w-xs leading-relaxed">
                      Thank you for your order! We are routing you to the secure checkout provider to finalize your shipment details for the <strong className="text-cyan-400">{activeColorObject.label} G9 Smart Earbuds</strong>.
                    </p>
                    <button
                      onClick={() => setOrdered(false)}
                      className="mt-6 px-5 py-2 rounded-full border border-white/10 text-xs hover:bg-white/5 text-neutral-300 transition-colors"
                    >
                      Dismiss
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
