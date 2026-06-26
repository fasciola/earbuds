import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, CreditCard, MessageSquare, Minus, Plus, ShieldCheck, ShoppingBag } from 'lucide-react';
import { IMAGES } from '../assets-ref';
import { CONTACT_CONFIG } from '../config';

type SelectionColour = 'black' | 'white' | 'pink' | 'beige';

const colours: Array<{ id: SelectionColour; label: string; colour: string; image: string }> = [
  { id: 'black', label: 'Obsidian Black', colour: '#242426', image: IMAGES.blackG9 },
  { id: 'white', label: 'Pure White', colour: '#ffffff', image: IMAGES.whiteG9 },
  { id: 'pink', label: 'Pastel Pink', colour: '#f6a9b6', image: IMAGES.pinkG9 },
  { id: 'beige', label: 'Desert Beige', colour: '#ead69f', image: IMAGES.beigeG9 },
];

export default function Lifestyle() {
  const [selected, setSelected] = useState<SelectionColour>('black');
  const [quantity, setQuantity] = useState(1);
  const [ordered, setOrdered] = useState(false);
  const active = colours.find((colour) => colour.id === selected) ?? colours[0];
  const price = 120;
  const formattedPrice = `AED ${price}`;
  const formattedTotal = `AED ${(price * quantity).toFixed(2)}`;

  const handleOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOrdered(true);
  };

  return (
    <section id="purchase-section" className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <p className="section-eyebrow mb-5">Your everyday audio</p>
          <h2 className="section-title max-w-lg">Small case.<br /><span className="text-[#0071e3]">Smarter listening.</span></h2>
          <p className="section-copy mt-6 max-w-lg">A full-colour control display, touch-responsive earbuds, and a compact charging case—ready to travel with you every day.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-4 py-2 text-xs font-semibold text-[#515154]"><Check className="h-3.5 w-3.5 text-[#0071e3]" /> Free express shipping</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d2d2d7] bg-white px-4 py-2 text-xs font-semibold text-[#515154]"><Check className="h-3.5 w-3.5 text-[#0071e3]" /> 1-year supplier warranty</span>
          </div>

          <div className="mt-10 flex min-h-[330px] items-center justify-center rounded-[2rem] bg-[#f5f5f7] p-8 sm:min-h-[410px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.3 }}
                src={active.image}
                alt={`${active.label} G9 case`}
                className="product-shadow max-h-[300px] max-w-[80%] object-contain sm:max-h-[370px]"
              />
            </AnimatePresence>
          </div>
        </div>

        <div className="relative apple-card overflow-hidden p-6 sm:p-8">
          <div className="flex items-start justify-between gap-5 border-b border-[#e5e5e7] pb-6">
            <div>
              <p className="section-eyebrow">Order G9</p>
              <h3 className="mt-2 text-2xl font-extrabold tracking-[-0.05em] text-[#1d1d1f]">Make it yours.</h3>
              <p className="mt-2 text-xs text-[#6e6e73]">Select a finish and quantity below.</p>
            </div>
            <div className="text-right"><p className="text-2xl font-extrabold tracking-[-0.055em] text-[#0071e3]">{formattedPrice}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[0.09em] text-[#6e6e73]">Launch price</p></div>
          </div>

          <form onSubmit={handleOrder} className="mt-6 space-y-6">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#6e6e73]">1. Choose your finish</p>
              <div className="mt-3 flex gap-3">
                {colours.map((colour) => {
                  const isSelected = colour.id === selected;
                  return (
                    <button key={colour.id} type="button" title={colour.label} onClick={() => setSelected(colour.id)} className={`flex h-10 w-10 items-center justify-center rounded-full border transition-transform ${isSelected ? 'scale-110 border-[#0071e3] ring-2 ring-[#c9e6ff]' : 'border-black/10 opacity-75 hover:opacity-100'}`} style={{ backgroundColor: colour.colour }}>
                      {isSelected && <Check className={`h-4 w-4 ${colour.id === 'white' || colour.id === 'beige' ? 'text-[#1d1d1f]' : 'text-white'}`} strokeWidth={3} />}
                    </button>
                  );
                })}
              </div>
              <p className="mt-3 text-xs text-[#6e6e73]">Selected finish: <span className="font-bold text-[#1d1d1f]">{active.label}</span></p>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#6e6e73]">2. Quantity</p>
              <div className="mt-3 flex items-center justify-between gap-5">
                <div className="flex items-center rounded-full border border-[#d2d2d7] bg-[#f5f5f7] p-1">
                  <button type="button" onClick={() => setQuantity((count) => Math.max(1, count - 1))} className="flex h-8 w-8 items-center justify-center rounded-full text-[#515154] hover:bg-white hover:text-[#0071e3]" aria-label="Decrease quantity"><Minus className="h-4 w-4" /></button>
                  <span className="w-9 text-center text-sm font-bold text-[#1d1d1f]">{quantity}</span>
                  <button type="button" onClick={() => setQuantity((count) => count + 1)} className="flex h-8 w-8 items-center justify-center rounded-full text-[#515154] hover:bg-white hover:text-[#0071e3]" aria-label="Increase quantity"><Plus className="h-4 w-4" /></button>
                </div>
                <p className="text-sm text-[#6e6e73]">Subtotal <span className="ml-1 font-bold text-[#1d1d1f]">{formattedTotal}</span></p>
              </div>
            </div>

            <div className="rounded-2xl bg-[#f5f5f7] p-4 text-xs text-[#515154]">
              <p className="flex items-center gap-2"><CreditCard className="h-4 w-4 text-[#0071e3]" /> Secure checkout route</p>
              <p className="mt-3 flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[#0071e3]" /> 14-day return framework</p>
            </div>

            <button type="submit" className="primary-button w-full py-4 text-sm font-bold"><ShoppingBag className="h-4 w-4" /> Order now</button>
            <a href={CONTACT_CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" className="secondary-button w-full py-4 text-sm font-semibold"><MessageSquare className="h-4 w-4 text-[#0071e3]" /> Chat on WhatsApp</a>
          </form>

          <AnimatePresence>
            {ordered && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white p-8 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e9f5ff] text-[#0071e3]"><Check className="h-7 w-7" strokeWidth={3} /></span>
                <h4 className="mt-5 text-xl font-extrabold tracking-[-0.045em] text-[#1d1d1f]">Order initialised.</h4>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#6e6e73]">Your {active.label} G9 selection is ready. Connect this button to your final checkout provider when it is available.</p>
                <button type="button" onClick={() => setOrdered(false)} className="secondary-button mt-6 px-5 py-2.5 text-xs font-bold">Close</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
