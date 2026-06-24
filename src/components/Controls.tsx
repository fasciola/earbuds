import React from 'react';
import { motion } from 'motion/react';
import { Sliders, Music, Phone, SkipForward, Gamepad, HelpCircle, Mic } from 'lucide-react';

interface ControlGesture {
  icon: React.ReactNode;
  gesture: string;
  action: string;
  category: "music" | "calls" | "system";
}

export default function Controls() {
  const controlsList: ControlGesture[] = [
    {
      icon: <Music className="w-5 h-5 text-cyan-400" />,
      gesture: "Single Tap",
      action: "Play or pause music",
      category: "music"
    },
    {
      icon: <Phone className="w-5 h-5 text-emerald-400" />,
      gesture: "Single Tap",
      action: "Answer or end an active call",
      category: "calls"
    },
    {
      icon: <SkipForward className="w-5 h-5 text-indigo-400" />,
      gesture: "Double Tap",
      action: "Skip to previous or next track",
      category: "music"
    },
    {
      icon: <Gamepad className="w-5 h-5 text-amber-400" />,
      gesture: "Four Taps",
      action: "Toggle 40ms Gaming Mode on or off",
      category: "system"
    },
    {
      icon: <Mic className="w-5 h-5 text-rose-400" />,
      gesture: "Long Press (3s)",
      action: "Activate voice assistant (Siri / Google Assistant)",
      category: "system"
    }
  ];

  return (
    <section id="controls-guide" className="relative py-24 bg-neutral-950 text-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/5 to-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase block">
            Gesture Matrix
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight">
            Designed for everyday control.
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-2xl mx-auto">
            Each earbud features integrated capacitive smart touch sensors. Get seamless, physical responsiveness without pressing or causing discomfort.
          </p>
        </div>

        {/* Refined Glass Card Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Gesture Explanation Card (Visual representation of an earbud) */}
          <div className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-white/[0.02] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-6">
              <div className="p-3 w-fit rounded-2xl bg-white/5 border border-white/10 text-cyan-400">
                <Sliders className="w-6 h-6" />
              </div>
              <div className="space-y-3">
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-white tracking-tight">
                  Responsive Tap Feedback
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Both left and right earbuds are equipped with an ultra-thin, highly sensitive touch pad on the stem. A micro-acoustic sound confirms your gesture instantly.
                </p>
              </div>

              {/* Graphic representation of an earbud touch surface */}
              <div className="py-6 flex justify-center">
                <div className="relative w-24 h-48 bg-gradient-to-b from-neutral-800 to-neutral-900 rounded-full border border-white/10 flex flex-col items-center p-2 shadow-inner">
                  <div className="w-16 h-16 rounded-full bg-neutral-950 border border-cyan-500/30 flex items-center justify-center relative shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                    {/* Ring Pulse */}
                    <div className="absolute inset-1 rounded-full border border-dashed border-cyan-400/40 animate-spin-slow" />
                    <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-500/20" />
                    <Sliders className="w-5 h-5 text-cyan-400 relative z-10" />
                  </div>
                  {/* Stem of Earbud */}
                  <div className="w-6 flex-1 bg-gradient-to-b from-neutral-800 to-neutral-950 rounded-b-full border-t border-white/5 mt-[-1px] flex justify-center pt-8">
                    <span className="w-1 h-12 rounded-full bg-cyan-400/30" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-2.5 p-4 rounded-2xl bg-neutral-950/40 border border-white/5 text-xs text-neutral-400 mt-6 lg:mt-0">
              <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Left and Right earbuds are configured symmetrically. You can perform any of the commands on either earbud depending on your preference.</span>
            </div>
          </div>

          {/* Column 2: The Gesture List Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3 flex-1">
              {controlsList.map((ctrl, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-center justify-between p-5 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-cyan-500/10 hover:bg-white/[0.03] transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 text-neutral-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-all duration-300">
                      {ctrl.icon}
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-white text-base group-hover:text-cyan-400 transition-colors">
                        {ctrl.gesture}
                      </h4>
                      <p className="text-neutral-400 text-xs mt-0.5">
                        {ctrl.action}
                      </p>
                    </div>
                  </div>

                  {/* Category Pill Tag */}
                  <span className={`text-[9px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded border ${
                    ctrl.category === 'music'
                      ? 'bg-cyan-500/5 border-cyan-500/10 text-cyan-400'
                      : ctrl.category === 'calls'
                      ? 'bg-emerald-500/5 border-emerald-500/10 text-emerald-400'
                      : 'bg-indigo-500/5 border-indigo-500/10 text-indigo-400'
                  }`}>
                    {ctrl.category}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="text-neutral-500 font-sans text-xs italic text-center lg:text-left mt-4 pt-2 border-t border-white/5">
              Controls may vary slightly by device model, operating system, and media player software version.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
