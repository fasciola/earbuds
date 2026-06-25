import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeft,
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
      className="g9-product-stage relative isolate h-[100svh] min-h-[650px] overflow-hidden rounded-b-[2rem] px-5 pt-24 text-white sm:px-8 lg:min-h-[680px] lg:px-12"
      style={{ backgroundColor: active.background }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:5px_5px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[30%] bg-black/25" />
      <div className="pointer-events-none absolute left-[45%] top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 lg:h-[34rem] lg:w-[34rem]" />
      <div className="pointer-events-none absolute left-[45%] top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 lg:h-[25rem] lg:w-[25rem]" />

      <div className="relative mx-auto h-full max-w-[1600px]">
        <div className="pointer-events-none absolute left-0 top-5 z-0 max-w-[660px] sm:top-8 lg:top-4">
          <p className="text-[clamp(3.35rem,6.2vw,6.65rem)] font-extrabold leading-[0.8] tracking-[-0.09em] text-white">
            Control every
          </p>
          <p className="mt-3 text-[clamp(3.35rem,6.2vw,6.65rem)] font-extrabold leading-[0.8] tracking-[-0.09em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.55)] sm:mt-4">
            sound.
          </p>
        </div>

        <div className="relative z-10 grid h-full grid-cols-1 items-center gap-6 pb-24 pt-32 lg:grid-cols-[0.9fr_1.08fr_0.78fr] lg:gap-8 lg:pb-20 lg:pt-24">
          <div className="self-center lg:mt-24">
            <div className="max-w-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.31em] text-white/70">Touchscreen earbuds</p>
              <h1 className="mt-3 border-b border-white/30 pb-4 text-xl font-extrabold uppercase tracking-[0.24em] text-white sm:text-2xl">
                G9 Smart
              </h1>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/85 sm:text-base">{active.copy}</p>

              <div className="mt-5 flex flex-wrap gap-2 lg:hidden">
                {finishes.map((finish) => {
                  const isSelected = finish.id === selectedFinish;
                  return (
                    <button
                      key={finish.id}
                      type="button"
                      onClick={() => setSelectedFinish(finish.id)}
                      title={finish.name}
                      aria-label={`Select ${finish.name}`}
                      className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition ${isSelected ? 'scale-110 border-white' : 'border-white/35 opacity-80 hover:opacity-100'}`}
                      style={{ backgroundColor: finish.swatch }}
                    >
                      {isSelected && <span className={`h-2.5 w-2.5 rounded-full ${finish.id === 'white' || finish.id === 'beige' ? 'bg-black' : 'bg-white'}`} />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[260px] items-center justify-center lg:min-h-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                initial={{ opacity: 0, scale: 0.83, rotate: -7, y: 22 }}
                animate={{ opacity: 1, scale: 1, rotate: 0, y: [0, -7, 0] }}
                exit={{ opacity: 0, scale: 0.85, rotate: 7, y: -16 }}
                transition={{
                  opacity: { duration: 0.26 },
                  scale: { duration: 0.45 },
                  rotate: { duration: 0.45 },
                  y: { duration: 4.8, repeat: Infinity, ease: 'easeInOut' },
                }}
                src={active.image}
                alt={`${active.name} G9 touchscreen earbuds`}
                className="relative z-10 max-h-[310px] max-w-[86%] object-contain drop-shadow-[0_28px_28px_rgba(0,0,0,0.4)] sm:max-h-[370px] lg:max-h-[455px]"
              />
            </AnimatePresence>
            <div className="pointer-events-none absolute bottom-1 left-1/2 h-16 w-[88%] -translate-x-1/2 rounded-[50%] border border-dashed border-white/35" />
            <div className="pointer-events-none absolute bottom-5 left-1/2 h-10 w-[67%] -translate-x-1/2 rounded-[50%] border border-white/18" />
          </div>

          <div className="hidden self-center justify-end lg:flex">
            <div className="w-full max-w-[340px] rounded-[1.5rem] border border-white/20 p-6 backdrop-blur-[2px]" style={{ backgroundColor: `${active.surface}d9` }}>
              <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.17em] text-white"><span className="h-2.5 w-2.5 rounded-full bg-white" /> Finish: {active.name}</p>

              <div className="mt-4 grid grid-cols-4 gap-2">
                {finishes.map((finish) => {
                  const isSelected = finish.id === selectedFinish;
                  return (
                    <button
                      key={finish.id}
                      type="button"
                      onClick={() => setSelectedFinish(finish.id)}
                      title={finish.name}
                      aria-label={`Select ${finish.name}`}
                      className={`flex h-10 items-center justify-center rounded-full border-2 transition ${isSelected ? 'scale-105 border-white bg-white/15' : 'border-white/25 hover:border-white/70'}`}
                    >
                      <span className={`h-5 w-5 rounded-full border border-black/10 ${finish.id === 'white' ? 'border-white/50' : ''}`} style={{ backgroundColor: finish.swatch }} />
                    </button>
                  );
                })}
              </div>

              <p className="mt-6 flex items-center gap-3 border-t border-white/20 pt-5 text-xs font-bold uppercase tracking-[0.17em] text-white"><span className="h-2.5 w-2.5 rounded-full bg-white" /> Smart screen mode</p>
              <div className="mt-4 grid grid-cols-2 gap-2.5">
                {modes.map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setActiveMode(mode)}
                    className={`rounded-full border px-4 py-2.5 text-xs font-bold transition ${activeMode === mode ? 'border-white bg-white text-black' : 'border-white/30 bg-black/10 text-white hover:border-white/70'}`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
              <div className="mt-5 border-t border-white/20 pt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/60">Selected</p>
                <p className="mt-1 text-base font-bold text-white">{activeMode} control</p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-5 z-20 flex items-end justify-between gap-4 lg:bottom-7">
          <div className="hidden items-center gap-3 lg:flex">
            <button type="button" onClick={() => changeFinish(-1)} className="flex h-11 w-11 items-center justify-center rounded-full bg-black/25 text-white transition hover:bg-black/45" aria-label="Previous finish"><ArrowLeft className="h-5 w-5" /></button>
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/65">{String(activeIndex + 1).padStart(2, '0')} — 04</span>
          </div>
          <div className="hidden flex-col items-center lg:flex"><p className="text-xs font-medium text-white/65">Scroll</p><span className="mt-2 h-8 w-px bg-white/60" /></div>
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden flex-col items-center gap-3 xl:flex">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-black/25 text-white transition hover:bg-black/45" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-black/25 text-white transition hover:bg-black/45" aria-label="Messages"><MessageCircle className="h-4 w-4" /></a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-black/25 text-white transition hover:bg-black/45" aria-label="Music"><Music2 className="h-4 w-4" /></a>
            </div>
            <button type="button" onClick={() => changeFinish(1)} className="flex h-12 w-12 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/50" aria-label="Next finish"><ChevronRight className="h-6 w-6" /></button>
            <button type="button" onClick={scrollToPurchase} className="flex min-w-[185px] items-center justify-between rounded-full border border-white/45 bg-black/20 p-1.5 pl-4 text-white transition hover:bg-black/35 sm:min-w-[220px] sm:pl-5">
              <span className="flex h-9 items-center gap-2 rounded-full bg-white px-4 text-[10px] font-extrabold uppercase tracking-[0.12em] text-black sm:h-10 sm:px-5"><ShoppingBag className="h-3.5 w-3.5" /> Buy G9</span>
              <span className="pr-3 text-xl font-extrabold tracking-[-0.05em] sm:text-2xl">{active.price}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
