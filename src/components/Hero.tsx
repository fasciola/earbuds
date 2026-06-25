import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  ChevronRight,
  Instagram,
  MessageCircle,
  Music2,
  ShoppingBag,
} from 'lucide-react';
import { IMAGES } from '../assets-ref';

const modes = ['Music', 'Calls', 'EQ', 'Gaming'];

type FinishId = 'black' | 'white' | 'pink' | 'beige';

const finishes: Array<{
  id: FinishId;
  name: string;
  productName: string;
  image: string;
  background: string;
  surface: string;
  copy: string;
  price: string;
  swatch: string;
}> = [
  {
    id: 'black',
    name: 'Obsidian Black',
    productName: 'G9 Smart Earbuds',
    image: IMAGES.blackG9,
    background: '#121214',
    surface: '#1f1f23',
    copy: 'A touchscreen charging case, immersive sound, and intelligent everyday control in one compact object.',
    price: '$49.99',
    swatch: '#242426',
  },
  {
    id: 'white',
    name: 'Pure White',
    productName: 'G9 Smart Earbuds',
    image: IMAGES.whiteG9,
    background: '#576670',
    surface: '#6a7b85',
    copy: 'A bright, clean finish for smart listening that fits effortlessly into your everyday setup.',
    price: '$49.99',
    swatch: '#ffffff',
  },
  {
    id: 'pink',
    name: 'Pastel Pink',
    productName: 'G9 Smart Earbuds',
    image: IMAGES.pinkG9,
    background: '#b36478',
    surface: '#c9788a',
    copy: 'A softer expression of the same touchscreen experience, designed to stand out without trying too hard.',
    price: '$49.99',
    swatch: '#f5a5b5',
  },
  {
    id: 'beige',
    name: 'Desert Beige',
    productName: 'G9 Smart Earbuds',
    image: IMAGES.beigeG9,
    background: '#907752',
    surface: '#a88d65',
    copy: 'Warm, understated, and made to keep your listening controls close in every moment.',
    price: '$49.99',
    swatch: '#ead69f',
  },
];

export default function Hero() {
  const [selectedFinish, setSelectedFinish] = useState<FinishId>('black');
  const [activeMode, setActiveMode] = useState('Music');
  const activeIndex = finishes.findIndex((finish) => finish.id === selectedFinish);
  const active = finishes[activeIndex] ?? finishes[0];

  const changeFinish = (direction: number) => {
    const nextIndex = (activeIndex + direction + finishes.length) % finishes.length;
    setSelectedFinish(finishes[nextIndex].id);
  };

  const scrollToPurchase = () => {
    document.querySelector('#purchase-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="hero"
      className="g9-product-stage relative isolate min-h-[780px] overflow-hidden rounded-b-[2rem] px-5 pb-8 pt-28 text-white sm:px-8 md:min-h-[830px] md:pt-32 lg:px-12 lg:pb-10"
      style={{ backgroundColor: active.background }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.17] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:5px_5px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[38%] bg-black/25" />
      <div className="pointer-events-none absolute left-[45%] top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute left-[45%] top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

      <div className="relative mx-auto grid min-h-[720px] max-w-[1600px] grid-rows-[auto_1fr_auto] lg:min-h-[760px]">
        <div className="pointer-events-none absolute left-0 top-0 z-0 max-w-[720px]">
          <p className="text-[clamp(3.7rem,8vw,8.2rem)] font-extrabold leading-[0.78] tracking-[-0.09em] text-white sm:text-[clamp(4.8rem,8vw,8.2rem)]">
            Control every
          </p>
          <p className="mt-5 text-[clamp(3.7rem,8vw,8.2rem)] font-extrabold leading-[0.78] tracking-[-0.09em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.55)] sm:mt-7">
            sound.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 gap-8 pt-36 lg:grid-cols-[0.92fr_1.16fr_0.76fr] lg:gap-8">
          <div className="flex flex-col justify-between pb-8 lg:pt-40">
            <div className="max-w-md">
              <p className="text-[11px] font-bold uppercase tracking-[0.33em] text-white/70">Touchscreen earbuds</p>
              <h1 className="mt-5 border-b border-white/30 pb-5 text-2xl font-extrabold uppercase tracking-[0.28em] text-white sm:text-3xl">
                G9 Smart
              </h1>
            </div>

            <div className="hidden max-w-md lg:block">
              <p className="text-sm leading-relaxed text-white/85 sm:text-base">{active.copy}</p>
              <div className="mt-6 flex items-center gap-3">
                <button type="button" onClick={() => changeFinish(-1)} className="flex h-12 w-12 items-center justify-center rounded-full bg-black/25 text-white transition hover:bg-black/45" aria-label="Previous finish">
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/65">01 — 04</span>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[330px] items-center justify-center lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                initial={{ opacity: 0, scale: 0.83, rotate: -7, y: 22 }}
                animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -8, 0] }}
                exit={{ opacity: 0, scale: 0.85, rotate: 7, y: -16 }}
                transition={{ opacity: { duration: 0.26 }, scale: { duration: 0.45 }, rotate: { duration: 0.45 }, y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' } }}
                src={active.image}
                alt={`${active.name} G9 touchscreen earbuds`}
                className="relative z-10 max-h-[390px] max-w-[88%] object-contain drop-shadow-[0_30px_30px_rgba(0,0,0,0.38)] sm:max-h-[465px] lg:max-h-[550px]"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute bottom-3 left-1/2 h-20 w-[88%] -translate-x-1/2 rounded-[50%] border border-dashed border-white/35" />
            <div className="pointer-events-none absolute bottom-8 left-1/2 h-12 w-[67%] -translate-x-1/2 rounded-[50%] border border-white/18" />
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="w-full max-w-[355px] rounded-[1.65rem] border border-white/20 bg-black/10 p-7 backdrop-blur-[2px]" style={{ backgroundColor: `${active.surface}80` }}>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.19em] text-white"><span className="h-2.5 w-2.5 rounded-full bg-white" /> Finish: {active.name}</p>
              <p className="mt-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.19em] text-white"><span className="h-2.5 w-2.5 rounded-full bg-white" /> Smart screen mode</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {modes.map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setActiveMode(mode)}
                    className={`rounded-full border px-4 py-3 text-xs font-bold transition ${activeMode === mode ? 'border-white bg-white text-black' : 'border-white/30 bg-black/10 text-white hover:border-white/70'}`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              <div className="mt-7 border-t border-white/20 pt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/60">Selected</p>
                <p className="mt-1 text-lg font-bold text-white">{activeMode} control</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-20 grid items-end gap-5 pt-5 lg:grid-cols-[1fr_auto_1fr]">
          <div className="lg:hidden">
            <p className="max-w-md text-sm leading-relaxed text-white/85">{active.copy}</p>
          </div>

          <div className="hidden flex-col items-center justify-self-center lg:flex">
            <p className="text-xs font-medium text-white/65">Scroll</p>
            <span className="mt-3 h-11 w-px bg-white/60" />
          </div>

          <div className="flex items-center justify-between gap-4 lg:justify-self-end">
            <div className="flex gap-2 lg:hidden">
              {finishes.map((finish) => (
                <button
                  key={finish.id}
                  type="button"
                  onClick={() => setSelectedFinish(finish.id)}
                  aria-label={`Select ${finish.name}`}
                  className={`h-8 w-8 rounded-full border-2 transition ${selectedFinish === finish.id ? 'scale-110 border-white' : 'border-white/40 opacity-75'}`}
                  style={{ backgroundColor: finish.swatch }}
                />
              ))}
            </div>

            <div className="hidden flex-col items-center gap-4 lg:flex">
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-black/25 text-white transition hover:bg-black/45" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-black/25 text-white transition hover:bg-black/45" aria-label="Messages"><MessageCircle className="h-5 w-5" /></a>
              <a href="#" className="flex h-11 w-11 items-center justify-center rounded-full bg-black/25 text-white transition hover:bg-black/45" aria-label="Music"><Music2 className="h-5 w-5" /></a>
            </div>

            <div className="flex items-center gap-4">
              <button type="button" onClick={() => changeFinish(1)} className="flex h-14 w-14 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/50" aria-label="Next finish"><ChevronRight className="h-7 w-7" /></button>
              <button type="button" onClick={scrollToPurchase} className="group flex min-w-[220px] items-center justify-between rounded-full border border-white/45 bg-black/20 p-2 pl-6 text-white transition hover:bg-black/35">
                <span className="flex h-11 items-center gap-2 rounded-full bg-white px-5 text-xs font-extrabold uppercase tracking-[0.13em] text-black"><ShoppingBag className="h-4 w-4" /> Buy G9</span>
                <span className="pr-4 text-2xl font-extrabold tracking-[-0.05em]">{active.price}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
