import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Battery, Zap, Clock, Disc, Cable } from 'lucide-react';
import { POWER_STATS } from '../config';
import { IMAGES } from '../assets-ref';

export default function Performance() {
  const [viewMode, setViewMode] = useState<'simulation' | 'infographic'>('simulation');

  return (
    <section id="performance" className="relative py-28 bg-neutral-950 text-white overflow-hidden">
      
      {/* Immersive Animated Battery-inspired Background Grid */}
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Subtle grid of vertical charging bars */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#020617_1px,transparent_1px),linear-gradient(to_bottom,#020617_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Soft color glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Headline */}
        <div className="max-w-3xl mx-auto text-center mb-20 space-y-4">
          <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase block">
            Endurance & Power
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight">
            Power that keeps up.
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-2xl mx-auto">
            Stay immersed in sound all day. Engineered with state-of-the-art power-efficient chips and highly optimized lithium polymer cells.
          </p>
        </div>

        {/* Bento Grid with Large Metrics & Interactive Animated Battery Cell */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column A: Interactive/Animated Battery Cell Block (5 columns) */}
          <div className="lg:col-span-5 p-8 rounded-3xl bg-white/[0.01] border border-white/5 flex flex-col justify-between relative overflow-hidden shadow-2xl min-h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 to-transparent pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Zap className="w-5 h-5 fill-current animate-pulse" />
                  <span className="text-xs font-mono font-bold tracking-widest uppercase">SMART BATTERY SYSTEM</span>
                </div>
                {/* Visual View Mode Toggler */}
                <div className="flex p-0.5 rounded-lg bg-white/5 border border-white/10 text-[9px] font-bold">
                  <button
                    onClick={() => setViewMode('simulation')}
                    className={`px-2 py-1 rounded-md cursor-pointer transition-colors ${viewMode === 'simulation' ? 'bg-cyan-500 text-neutral-950' : 'text-neutral-400 hover:text-white'}`}
                  >
                    LIVE
                  </button>
                  <button
                    onClick={() => setViewMode('infographic')}
                    className={`px-2 py-1 rounded-md cursor-pointer transition-colors ${viewMode === 'infographic' ? 'bg-cyan-500 text-neutral-950' : 'text-neutral-400 hover:text-white'}`}
                  >
                    SPECS
                  </button>
                </div>
              </div>
              <h3 className="text-2xl font-sans font-extrabold tracking-tight">
                Rapid charge. <br />Long playback.
              </h3>
              <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
                Get {POWER_STATS.perEarbudCharge} of nonstop music streaming on a single earbud charge, expanded further up to a full {POWER_STATS.totalListeningEndurance} with our custom smart touchscreen charging box.
              </p>
            </div>

            <div className="relative flex-grow flex items-center justify-center my-6">
              <AnimatePresence mode="wait">
                {viewMode === 'simulation' ? (
                  /* Immersive Vertical Interactive Battery Charging Animation */
                  <motion.div
                    key="simulation"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center w-full py-4"
                  >
                    <div className="relative w-28 h-48 rounded-[1.75rem] border-4 border-neutral-700 bg-neutral-950/60 flex items-end p-2 overflow-hidden shadow-inner">
                      {/* Battery terminal top cap */}
                      <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-8 h-[10px] bg-neutral-700 rounded-t-md" />
                      
                      {/* Charging fluid glow inside */}
                      <motion.div
                        initial={{ height: "15%" }}
                        whileInView={{ height: "85%" }}
                        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                        className="w-full rounded-[1.1rem] bg-gradient-to-t from-cyan-600 via-cyan-400 to-emerald-400 shadow-[0_0_25px_rgba(34,211,238,0.5)] flex items-center justify-center relative"
                      >
                        {/* Charging bolt logo inside the glowing fluid */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                          <Zap className="w-8 h-8 text-neutral-950 fill-neutral-950" />
                        </div>
                        {/* Bubble rises */}
                        <div className="absolute bottom-4 left-1/4 w-2.5 h-2.5 bg-white/40 rounded-full animate-bounce" />
                        <div className="absolute bottom-8 right-1/3 w-1.5 h-1.5 bg-white/50 rounded-full animate-ping" />
                      </motion.div>
                    </div>
                    
                    {/* Charge Status HUD */}
                    <div className="mt-4 text-center">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block">CURRENT CHARGE LEVEL</span>
                      <span className="text-base font-sans font-extrabold text-cyan-400">85% Charged</span>
                    </div>
                  </motion.div>
                ) : (
                  /* High-Quality Endurance Battery Infographic */
                  <motion.div
                    key="infographic"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center bg-[#070b0e] rounded-2xl overflow-hidden p-2 border border-white/5 shadow-2xl"
                  >
                    <img
                      src={IMAGES.batteryInfographic}
                      alt="G9 smart charging battery endurance specifications"
                      className="max-w-full max-h-[280px] object-contain rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-3 text-neutral-400 text-xs">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Only {POWER_STATS.chargingTime} for a full replenish.</span>
            </div>
          </div>

          {/* Column B: Grid of Large Stats Cards (7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Stat Card 1: Total Playback */}
            <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 flex flex-col justify-between hover:border-cyan-500/20 hover:bg-white/[0.02] transition-all duration-300 group">
              <div className="p-3 w-fit rounded-2xl bg-white/5 border border-white/5 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all">
                <Battery className="w-6 h-6" />
              </div>
              <div className="mt-8 space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase block">TOTAL PLAYBACK</span>
                <div className="text-3xl sm:text-4xl font-sans font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                  {POWER_STATS.totalListeningEndurance}
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed pt-2 border-t border-white/5">
                  Consolidated audio endurance with multiple fast charges provided directly inside the touchscreen case compartment.
                </p>
              </div>
            </div>

            {/* Stat Card 2: Charge Speed */}
            <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 flex flex-col justify-between hover:border-cyan-500/20 hover:bg-white/[0.02] transition-all duration-300 group">
              <div className="p-3 w-fit rounded-2xl bg-white/5 border border-white/5 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all">
                <Clock className="w-6 h-6" />
              </div>
              <div className="mt-8 space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase block">REPLENISH SPEED</span>
                <div className="text-3xl sm:text-4xl font-sans font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                  {POWER_STATS.chargingTime}
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed pt-2 border-t border-white/5">
                  Full 100% top-up in just an hour and a half, so you spend less time docked and more time locked in your flow.
                </p>
              </div>
            </div>

            {/* Stat Card 3: Case Capacity */}
            <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 flex flex-col justify-between hover:border-cyan-500/20 hover:bg-white/[0.02] transition-all duration-300 group">
              <div className="p-3 w-fit rounded-2xl bg-white/5 border border-white/5 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all">
                <Disc className="w-6 h-6" />
              </div>
              <div className="mt-8 space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase block">CASE DISCHARGE CAP</span>
                <div className="text-3xl sm:text-4xl font-sans font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                  {POWER_STATS.caseCapacity}
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed pt-2 border-t border-white/5">
                  High-density lithium accumulator pack provides up to three complete recharges for both earbuds in a compact case size.
                </p>
              </div>
            </div>

            {/* Stat Card 4: Earbud Capacity & Interface */}
            <div className="p-8 rounded-3xl bg-white/[0.01] border border-white/5 flex flex-col justify-between hover:border-cyan-500/20 hover:bg-white/[0.02] transition-all duration-300 group">
              <div className="p-3 w-fit rounded-2xl bg-white/5 border border-white/5 text-cyan-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-all">
                <Cable className="w-6 h-6" />
              </div>
              <div className="mt-8 space-y-2">
                <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase block">EARBUD CAP & CABLE</span>
                <div className="text-3xl sm:text-4xl font-sans font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                  {POWER_STATS.earbudCapacity} / {POWER_STATS.interface}
                </div>
                <p className="text-neutral-400 text-xs leading-relaxed pt-2 border-t border-white/5">
                  Lightweight {POWER_STATS.earbudCapacity} earbud cells coupled with universal fast {POWER_STATS.interface} port connector.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
