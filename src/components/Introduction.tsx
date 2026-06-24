import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Bluetooth, Smartphone, ShieldCheck, Heart } from 'lucide-react';
import { IMAGES } from '../assets-ref';

export default function Introduction() {
  const [selectedTab, setSelectedTab] = useState<'closeup' | 'infographic'>('closeup');
  const highlights = [
    {
      icon: <Smartphone className="w-5 h-5 text-cyan-400" />,
      title: "Full-color touch display",
      desc: "An intuitive screen that lets you navigate menus, adjust tracks, and customize wallpapers directly."
    },
    {
      icon: <Bluetooth className="w-5 h-5 text-blue-400" />,
      title: "Bluetooth 5.3 connectivity",
      desc: "Ultra-fast pairing, exceptionally low latency, and stable audio streaming up to 10 meters."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      title: "Smart charging compartment",
      desc: "Magnetic snap locks securely seat and instantly charge each earbud when placed inside."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-blue-400" />,
      title: "Compact pocket-ready design",
      desc: "Comfortable ergonomic fit styled to slide into your coin pocket with effortless portability."
    }
  ];

  return (
    <section id="features" className="relative py-24 bg-neutral-950 text-white overflow-hidden">
      {/* Glow Effects in Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content and Highlights */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase block">
                Next-Gen Interaction
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight">
                More than a charging case.
              </h2>
              <p className="text-neutral-400 font-sans text-base sm:text-lg leading-relaxed max-w-xl">
                A full-color touch display brings everyday controls closer. Manage your listening experience, check your earbuds, and enjoy a more interactive wireless experience.
              </p>
            </div>

            {/* List of features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {highlights.map((h, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  <div className="p-2 w-fit rounded-lg bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all duration-300 mb-4">
                    {h.icon}
                  </div>
                  <h3 className="font-sans font-semibold text-white text-base group-hover:text-cyan-400 transition-colors">
                    {h.title}
                  </h3>
                  <p className="text-neutral-400 text-xs mt-1.5 leading-relaxed">
                    {h.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Close product image with floating UI cards */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center gap-6">
            
            {/* Custom Tab Switcher for Product Visuals */}
            <div className="flex p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md z-20">
              <button
                onClick={() => setSelectedTab('closeup')}
                className={`px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedTab === 'closeup'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-lg font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                3D CLOSE-UP
              </button>
              <button
                onClick={() => setSelectedTab('infographic')}
                className={`px-4.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                  selectedTab === 'infographic'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black shadow-lg font-bold'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                SPEC BLUEPRINT
              </button>
            </div>

            {/* Visual glow frame backing */}
            <div className="absolute inset-0 max-w-md max-h-md mx-auto rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-purple-500/10 blur-[80px] opacity-60 pointer-events-none" />

            {/* Product Image Wrapper */}
            <div className="relative max-w-lg w-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-neutral-900 group aspect-square flex items-center justify-center">
              
              <AnimatePresence mode="wait">
                {selectedTab === 'closeup' ? (
                  <motion.div
                    key="closeup"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <img
                      src={IMAGES.closeup}
                      alt="G9 Touchscreen Close-up render"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Overlay shadow */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Floating Glass UI Card 1: Waveform Equalizer (Abstract animation) */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="absolute top-8 right-6 p-4 rounded-2xl bg-neutral-950/70 border border-white/10 backdrop-blur-lg flex flex-col gap-2 shadow-xl z-20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                        <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">EQUALIZER</span>
                      </div>
                      {/* Abstract Equalizer wave bars */}
                      <div className="flex items-end gap-[3px] h-6 px-1">
                        {[20, 60, 45, 90, 30, 75, 40, 85, 55, 70, 45, 90, 25, 60].map((h, i) => (
                          <span
                            key={i}
                            className="w-[2px] bg-gradient-to-t from-cyan-500 to-blue-400 rounded-full animate-pulse"
                            style={{
                              height: `${h}%`,
                              animationDelay: `${i * 0.08}s`,
                              animationDuration: '1.2s'
                            }}
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Floating Glass UI Card 2: Battery Charging Indicator (Abstract circular indicator) */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="absolute bottom-8 left-6 p-4 rounded-2xl bg-neutral-950/70 border border-white/10 backdrop-blur-lg flex items-center gap-3.5 shadow-xl z-20"
                    >
                      <div className="relative w-9 h-9 flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                          <circle cx="18" cy="18" r="15" className="stroke-white/10 fill-none" strokeWidth="2.5" />
                          <circle cx="18" cy="18" r="15" className="stroke-cyan-400 fill-none" strokeWidth="2.5" strokeDasharray="94" strokeDashoffset="14" strokeLinecap="round" />
                        </svg>
                        <span className="absolute text-[9px] font-sans font-bold text-white">85%</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono tracking-widest text-neutral-400 uppercase">CHARGING CASE</span>
                        <span className="text-white text-xs font-semibold">Fast Charging Active</span>
                      </div>
                    </motion.div>

                    {/* Floating Glass UI Card 3: Interactive Heart Sync */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="absolute bottom-1/3 right-4 p-3 rounded-xl bg-neutral-950/70 border border-white/10 backdrop-blur-lg flex items-center gap-2 shadow-xl z-20"
                    >
                      <div className="w-7 h-7 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center">
                        <Heart className="w-4 h-4 text-rose-500 fill-rose-500/20" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-mono text-neutral-400 tracking-wider">HEART RATE</span>
                        <span className="text-xs font-bold text-white">72 BPM</span>
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="infographic"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full p-4 flex items-center justify-center bg-[#070b0e]"
                  >
                    <img
                      src={IMAGES.featuresInfographic}
                      alt="G9 Specs blueprint and Bluetooth 5.3 features"
                      className="w-full h-full object-contain rounded-2xl drop-shadow-2xl"
                      referrerPolicy="no-referrer"
                    />
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
