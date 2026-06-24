import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Check, Sparkles } from 'lucide-react';
import { IMAGES } from '../assets-ref';

type ColourType = 'black' | 'white' | 'pink' | 'beige';

interface ColourOption {
  id: ColourType;
  name: string;
  tagline: string;
  swatchClass: string;
  glowColor: string;
  textColor: string;
  image?: string;
  isPlaceholder: boolean;
  placeholderText: string;
}

export default function Colours() {
  const [selectedColour, setSelectedColour] = useState<ColourType>('black');

  const options: ColourOption[] = [
    {
      id: 'black',
      name: 'Obsidian Black',
      tagline: 'Bold and modern finish with dark graphite accents',
      swatchClass: 'bg-neutral-900 border-neutral-700',
      glowColor: 'shadow-[0_0_40px_rgba(34,211,238,0.25)]',
      textColor: 'text-cyan-400',
      image: IMAGES.blackG9,
      isPlaceholder: false,
      placeholderText: ''
    },
    {
      id: 'white',
      name: 'Pure White',
      tagline: 'Clean and minimal look with high-gloss porcelain coating',
      swatchClass: 'bg-white border-neutral-200',
      glowColor: 'shadow-[0_0_40px_rgba(255,255,255,0.2)]',
      textColor: 'text-neutral-200',
      image: IMAGES.whiteG9,
      isPlaceholder: false,
      placeholderText: ''
    },
    {
      id: 'pink',
      name: 'Pastel Pink',
      tagline: 'Soft and expressive tone with frosted metallic joints',
      swatchClass: 'bg-rose-300 border-rose-400',
      glowColor: 'shadow-[0_0_40px_rgba(244,63,94,0.25)]',
      textColor: 'text-rose-400',
      image: IMAGES.pinkG9,
      isPlaceholder: false,
      placeholderText: ''
    },
    {
      id: 'beige',
      name: 'Desert Beige',
      tagline: 'Warm and refined finish styled with premium champagne accents',
      swatchClass: 'bg-amber-100 border-amber-200',
      glowColor: 'shadow-[0_0_40px_rgba(245,158,11,0.2)]',
      textColor: 'text-amber-300',
      image: IMAGES.beigeG9,
      isPlaceholder: false,
      placeholderText: ''
    }
  ];

  const activeOption = options.find((opt) => opt.id === selectedColour) || options[0];

  return (
    <section id="colours" className="relative py-24 bg-neutral-950 text-white overflow-hidden border-t border-white/5">
      
      {/* Dynamic Glowing Aura behind the active image - shifts color based on state */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] transition-all duration-1000 rounded-full blur-[140px] pointer-events-none opacity-40 z-0"
        style={{
          backgroundColor:
            selectedColour === 'black' ? '#06b6d4' :
            selectedColour === 'white' ? '#ffffff' :
            selectedColour === 'pink' ? '#f43f5e' :
            '#eab308'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase block">
            Aesthetic Customization
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight">
            Choose your finish.
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-xl mx-auto">
            Select an elegant casing finish tailored to fit your style. Four distinct pigments cured with state-of-the-art matte and high-gloss sealing coats.
          </p>
        </div>

        {/* Master Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block: The Interactive Product Display (7 columns) */}
          <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[400px]">
            <div className="relative w-full max-w-md aspect-square rounded-[2.5rem] bg-neutral-900/40 border border-white/5 p-8 flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-sm overflow-hidden">
              
              {/* Soft background grid accent inside card */}
              <div className="absolute inset-0 bg-radial-gradient from-transparent to-neutral-950 pointer-events-none" />
              
              <AnimatePresence mode="wait">
                {!activeOption.isPlaceholder ? (
                  // Real Renders (Black or White)
                  <motion.div
                    key={activeOption.id}
                    initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.95, rotate: 2 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 w-full h-full flex items-center justify-center"
                  >
                    <img
                      src={activeOption.image}
                      alt={`${activeOption.name} Touchscreen Earbuds Case`}
                      className={`max-w-[85%] max-h-[85%] object-contain rounded-2xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)] ${activeOption.glowColor}`}
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ) : (
                  // Premium Placeholder for Pink and Beige as requested!
                  <motion.div
                    key={activeOption.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center p-6"
                  >
                    {/* Minimalist modern graphic representation */}
                    <div className={`w-40 h-52 rounded-[2.5rem] border-2 border-dashed border-white/20 bg-white/[0.02] backdrop-blur-md flex flex-col items-center justify-between p-6 relative group shadow-2xl`}>
                      <div className="absolute -inset-1 rounded-[2.75rem] bg-gradient-to-tr from-white/10 to-transparent pointer-events-none" />
                      
                      {/* Top Swatch Glow */}
                      <div className={`w-8 h-8 rounded-full ${activeOption.swatchClass} border shadow-lg mt-4 flex items-center justify-center`}>
                        <div className="w-2.5 h-2.5 bg-neutral-950 rounded-full" />
                      </div>

                      {/* Display Label */}
                      <div className="space-y-1.5 z-10 mb-6">
                        <span className={`text-[10px] font-mono tracking-widest uppercase ${activeOption.textColor} font-bold block`}>
                          RENDER PLACEHOLDER
                        </span>
                        <h4 className="text-white text-base font-bold tracking-tight">
                          {activeOption.placeholderText}
                        </h4>
                        <span className="text-[10px] text-neutral-500 font-sans block">Coming Soon</span>
                      </div>
                    </div>
                    {/* Simulated Soft Shadow */}
                    <div className="w-36 h-4 bg-white/5 rounded-full blur-lg pointer-events-none mt-4 opacity-50" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Block: Selection Cards and Detail Sheets (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-1">
              <h3 className="text-lg font-sans font-bold text-neutral-400">Selected Option:</h3>
              <div className="flex items-center gap-2">
                <span className={`text-2xl font-sans font-extrabold ${activeOption.textColor}`}>
                  {activeOption.name}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono uppercase tracking-widest text-neutral-400">
                  {activeOption.isPlaceholder ? 'RESERVING' : 'READY TO SHIP'}
                </span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed pt-2">
                {activeOption.tagline}
              </p>
            </div>

            {/* Custom Interactive Radio Grid */}
            <div className="grid grid-cols-1 gap-3.5 pt-4">
              {options.map((opt) => {
                const isSelected = selectedColour === opt.id;
                return (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedColour(opt.id)}
                    className={`text-left p-4.5 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-white/[0.04] border-cyan-500/30 shadow-lg'
                        : 'bg-white/[0.01] hover:bg-white/[0.02] border-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Color Dot Swatch Indicator */}
                      <div className={`w-8 h-8 rounded-full ${opt.swatchClass} border shadow-inner flex items-center justify-center shrink-0`}>
                        {isSelected && (
                          <Check className={`w-4 h-4 ${opt.id === 'white' || opt.id === 'beige' ? 'text-neutral-950' : 'text-white'}`} strokeWidth={3.5} />
                        )}
                      </div>
                      <div>
                        <span className="text-white font-sans font-bold text-sm block">
                          {opt.name}
                        </span>
                        <span className="text-neutral-400 text-xs mt-0.5 block">
                          3D product render available
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        isSelected ? 'border-cyan-400 bg-cyan-500/10' : 'border-neutral-700'
                      }`}>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Micro aesthetic check */}
            <div className="flex items-center gap-2 text-xs text-neutral-500 font-sans pt-2">
              <Palette className="w-4 h-4 text-cyan-400" />
              <span>Glow intensity and accents dynamically shift to match selected case.</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
