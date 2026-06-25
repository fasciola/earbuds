import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Palette } from 'lucide-react';
import { IMAGES } from '../assets-ref';

type ColourType = 'black' | 'white' | 'pink' | 'beige';

const options: Array<{
  id: ColourType;
  name: string;
  description: string;
  swatch: string;
  image: string;
}> = [
  { id: 'black', name: 'Obsidian Black', description: 'A deep gloss finish with the signature gold case accent.', swatch: '#242426', image: IMAGES.blackG9 },
  { id: 'white', name: 'Pure White', description: 'A bright, clean finish with a minimal everyday character.', swatch: '#ffffff', image: IMAGES.whiteG9 },
  { id: 'pink', name: 'Pastel Pink', description: 'A soft, expressive option for a lighter look.', swatch: '#f6a9b6', image: IMAGES.pinkG9 },
  { id: 'beige', name: 'Desert Beige', description: 'A warm, subtle tone designed for quiet refinement.', swatch: '#ead69f', image: IMAGES.beigeG9 },
];

export default function Colours() {
  const [selectedColour, setSelectedColour] = useState<ColourType>('black');
  const active = options.find((option) => option.id === selectedColour) ?? options[0];

  return (
    <section id="colours" className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow mb-5">Personalise your G9</p>
          <h2 className="section-title">Choose your finish.</h2>
          <p className="section-copy mx-auto mt-5 max-w-xl">Four considered finishes, one intelligent listening system.</p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div className="soft-card flex min-h-[440px] items-center justify-center overflow-hidden p-8 sm:min-h-[520px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={active.id}
                initial={{ opacity: 0, scale: 0.94, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94, y: -10 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                src={active.image}
                alt={`${active.name} G9 touchscreen earbuds case`}
                className="product-shadow max-h-[390px] max-w-[88%] object-contain sm:max-h-[450px]"
              />
            </AnimatePresence>
          </div>

          <div>
            <p className="text-sm font-semibold text-[#6e6e73]">Selected finish</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <h3 className="text-3xl font-extrabold tracking-[-0.055em] text-[#1d1d1f]">{active.name}</h3>
              <span className="rounded-full bg-[#e9f5ff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.11em] text-[#0071e3]">Available</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#6e6e73]">{active.description}</p>

            <div className="mt-8 space-y-3">
              {options.map((option) => {
                const selected = option.id === selectedColour;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedColour(option.id)}
                    className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all ${selected ? 'border-[#0071e3] bg-[#f5faff] shadow-[0_8px_18px_rgba(0,113,227,0.09)]' : 'border-[#e5e5e7] bg-white hover:border-[#b9dfff]'}`}
                  >
                    <span className="flex items-center gap-4">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10" style={{ backgroundColor: option.swatch }}>
                        {selected && <Check className={`h-4 w-4 ${option.id === 'white' || option.id === 'beige' ? 'text-[#1d1d1f]' : 'text-white'}`} strokeWidth={3} />}
                      </span>
                      <span>
                        <span className="block text-sm font-bold text-[#1d1d1f]">{option.name}</span>
                        <span className="mt-1 block text-xs text-[#6e6e73]">Product render available</span>
                      </span>
                    </span>
                    <span className={`h-4 w-4 rounded-full border ${selected ? 'border-[#0071e3] bg-[#0071e3] shadow-[inset_0_0_0_4px_white]' : 'border-[#bdbdc2]'}`} />
                  </button>
                );
              })}
            </div>

            <p className="mt-5 flex items-center gap-2 text-xs text-[#6e6e73]"><Palette className="h-4 w-4 text-[#0071e3]" /> Select a finish to update the product preview.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
