import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Phone, SkipForward, Mic, Gamepad2, Image as ImageIcon, Sparkles } from 'lucide-react';

type FeatureType = 'music' | 'calls' | 'tracks' | 'assistant' | 'gaming' | 'wallpaper';

interface FeatureCard {
  id: FeatureType;
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
}

export default function Touchscreen() {
  const [activeFeature, setActiveFeature] = useState<FeatureType>('music');
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const features: FeatureCard[] = [
    {
      id: 'music',
      icon: <Play className="w-5 h-5 text-cyan-400" />,
      title: "Play & pause music",
      desc: "Tap the charging case screen to pause, play, or adjust volume in an instant.",
      color: "from-cyan-500/20 to-blue-500/10"
    },
    {
      id: 'calls',
      icon: <Phone className="w-5 h-5 text-emerald-400" />,
      title: "Manage calls",
      desc: "Accept incoming calls, decline, or end calls right from your case lid display.",
      color: "from-emerald-500/20 to-teal-500/10"
    },
    {
      id: 'tracks',
      icon: <SkipForward className="w-5 h-5 text-indigo-400" />,
      title: "Switch songs",
      desc: "Swipe or tap to skip tracks and browse your playlist on the fly.",
      color: "from-indigo-500/20 to-violet-500/10"
    },
    {
      id: 'assistant',
      icon: <Mic className="w-5 h-5 text-rose-400" />,
      title: "Activate voice assistant",
      desc: "Trigger Siri or Google Assistant directly with a quick double-tap on the case screen.",
      color: "from-rose-500/20 to-pink-500/10"
    },
    {
      id: 'gaming',
      icon: <Gamepad2 className="w-5 h-5 text-amber-400" />,
      title: "Gaming mode support",
      desc: "Toggle 40ms ultra-low latency mode on and off with a single dedicated touch control.",
      color: "from-amber-500/20 to-orange-500/10"
    },
    {
      id: 'wallpaper',
      icon: <ImageIcon className="w-5 h-5 text-teal-400" />,
      title: "Customizable wallpaper",
      desc: "Express yourself. Upload or cycle through gorgeous, vibrant landscape wallpapers.",
      color: "from-teal-500/20 to-cyan-500/10"
    }
  ];

  const handleScreenTouch = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { id: Date.now(), x, y };
    setRipples((prev) => [...prev, newRipple]);
    
    // Auto remove ripple
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 800);
  };

  const renderActiveScreenContent = () => {
    switch (activeFeature) {
      case 'music':
        return (
          <div className="flex flex-col items-center justify-between h-full p-6 text-center select-none">
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">NOW PLAYING</span>
            {/* Visual album art substitute */}
            <div className="relative w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center p-1 shadow-[0_0_30px_rgba(6,182,212,0.4)] animate-spin-slow">
              <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center border border-white/5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500" />
              </div>
            </div>
            {/* Playback Controls */}
            <div className="space-y-3 w-full">
              <div className="h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse" />
              </div>
              <div className="flex items-center justify-center gap-6">
                <button className="text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6L18 6v12z"/></svg>
                </button>
                <button className="w-12 h-12 rounded-full bg-cyan-400 text-black flex items-center justify-center hover:scale-105 transition-transform">
                  <Play className="w-5 h-5 fill-current" />
                </button>
                <button className="text-neutral-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M16 18h2V6h-2zM6 18l8.5-6L6 6z"/></svg>
                </button>
              </div>
            </div>
          </div>
        );
      case 'calls':
        return (
          <div className="flex flex-col items-center justify-between h-full p-6 text-center select-none">
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase animate-pulse">INCOMING CALL</span>
            <div className="space-y-1">
              <div className="text-sm font-sans font-medium text-neutral-400">Smart Connection</div>
              <div className="text-lg font-bold text-white tracking-tight">Suppliers Line</div>
            </div>
            {/* Animated ringing waves */}
            <div className="flex gap-1 h-8 items-center justify-center">
              {[1, 2, 3, 2, 1].map((scale, i) => (
                <span
                  key={i}
                  className="w-1.5 bg-emerald-400 rounded-full animate-bounce"
                  style={{ height: `${scale * 10}px`, animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            {/* Call Action Buttons */}
            <div className="flex items-center justify-center gap-8 w-full">
              <button className="w-11 h-11 rounded-full bg-rose-500 text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M21 12.22C21 10.45 19.55 9 17.78 9c-1.33 0-2.48.81-2.98 2H9.2c-.5-1.19-1.65-2-2.98-2C4.45 9 3 10.45 3 12.22c0 3.32 1.48 6.3 3.86 8.36L9 22.1l2.14-1.52c1.33.95 2.92 1.52 4.64 1.52 4.45 0 8.04-3.59 8.04-8.04z"/></svg>
              </button>
              <button className="w-11 h-11 rounded-full bg-emerald-400 text-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                <Phone className="w-5 h-5 fill-current" />
              </button>
            </div>
          </div>
        );
      case 'tracks':
        return (
          <div className="flex flex-col items-center justify-between h-full p-6 text-center select-none">
            <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">SWIPE TRACKS</span>
            <div className="relative w-full flex items-center justify-between px-2">
              <button onClick={() => setActiveFeature('music')} className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10">
                <SkipForward className="w-4 h-4 rotate-180 text-neutral-300" />
              </button>
              <div className="text-center">
                <div className="text-xs text-indigo-400 font-mono tracking-wider">TRACK 04</div>
                <div className="text-sm font-bold text-white mt-1">Horizon Beats</div>
              </div>
              <button onClick={() => setActiveFeature('music')} className="p-2 bg-white/5 border border-white/10 rounded-full hover:bg-white/10">
                <SkipForward className="w-4 h-4 text-neutral-300" />
              </button>
            </div>
            <div className="w-full flex justify-center py-2">
              <div className="flex gap-[2px] items-center">
                {[0.4, 0.7, 1, 0.7, 0.4].map((op, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-indigo-500" style={{ opacity: op }} />
                ))}
              </div>
            </div>
            <span className="text-[10px] text-neutral-500 italic">Tap arrow to cycle tracks</span>
          </div>
        );
      case 'assistant':
        return (
          <div className="flex flex-col items-center justify-between h-full p-6 text-center select-none">
            <span className="text-[10px] font-mono tracking-widest text-rose-400 uppercase">VOICE ASSISTANT</span>
            <div className="relative flex items-center justify-center my-4">
              <div className="absolute w-20 h-20 rounded-full bg-rose-500/20 animate-ping" />
              <div className="absolute w-16 h-16 rounded-full bg-rose-500/30 animate-pulse" />
              <div className="relative w-12 h-12 rounded-full bg-rose-500 flex items-center justify-center border border-white/10 shadow-lg">
                <Mic className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="space-y-1">
              <div className="text-xs font-sans text-rose-400 tracking-wide font-medium animate-pulse">LISTENING...</div>
              <div className="text-[10px] text-neutral-500">Ask &quot;What is the weather today?&quot;</div>
            </div>
          </div>
        );
      case 'gaming':
        return (
          <div className="flex flex-col items-center justify-between h-full p-6 text-center select-none">
            <span className="text-[10px] font-mono tracking-widest text-amber-500 uppercase">GAMING MODE</span>
            <div className="relative w-20 h-20 bg-neutral-900 border-2 border-amber-500/40 rounded-2xl flex items-center justify-center p-1 shadow-[0_0_20px_rgba(245,158,11,0.25)]">
              <Gamepad2 className="w-10 h-10 text-amber-400 animate-pulse" />
            </div>
            <div className="space-y-1.5">
              <div className="text-xs font-mono font-bold text-amber-400 tracking-wider">ULTRA-LOW LATENCY</div>
              <div className="text-xl font-extrabold text-white">40 ms</div>
            </div>
            <span className="text-[10px] text-neutral-500">Optimized for Competitive Play</span>
          </div>
        );
      case 'wallpaper':
        return (
          <div className="relative w-full h-full overflow-hidden select-none">
            <div className="absolute inset-0 bg-gradient-to-b from-teal-900/30 via-neutral-950 to-neutral-950" />
            
            {/* Landscape wallpaper background representation using modern CSS shapes */}
            <div className="absolute inset-0 z-0">
              <div className="absolute top-4 left-6 right-6 bottom-4 rounded-xl bg-gradient-to-tr from-cyan-900 via-emerald-800 to-amber-900 overflow-hidden opacity-80 border border-white/10">
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black to-transparent" />
                {/* Sun */}
                <div className="absolute top-6 right-8 w-10 h-10 rounded-full bg-gradient-to-b from-amber-400 to-rose-500 shadow-[0_0_20px_rgba(245,158,11,0.6)]" />
                {/* Mountain ridges */}
                <div className="absolute bottom-0 left-0 w-2/3 h-1/3 bg-emerald-950 rotate-12 transform origin-bottom-left" />
                <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-cyan-950 -rotate-12 transform origin-bottom-right" />
              </div>
            </div>

            {/* Time HUD */}
            <div className="absolute top-8 left-0 right-0 text-center z-10 space-y-1">
              <div className="text-2xl font-mono font-bold text-white tracking-widest drop-shadow-md">10:42</div>
              <div className="text-[9px] font-mono text-neutral-300 drop-shadow-md">MON, JUNE 24</div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 text-center z-10">
              <span className="text-[10px] font-semibold text-cyan-400 tracking-wider bg-black/60 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                Active Theme
              </span>
            </div>
          </div>
        );
    }
  };

  return (
    <section id="controls" className="py-24 bg-neutral-950 border-y border-white/5 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase block">
            Interactive Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight">
            Control is right at your fingertips.
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-2xl mx-auto">
            Experience absolute command. Simply interact with the high-contrast color screen on the case to activate widgets, swap interfaces, or sync settings instantly.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Feature Selection Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 order-2 lg:order-1">
            {features.map((feat) => {
              const isActive = activeFeature === feat.id;
              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveFeature(feat.id)}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between h-44 ${
                    isActive
                      ? 'bg-gradient-to-br from-neutral-900 to-neutral-950 border-cyan-500/30 shadow-[0_4px_30px_rgba(6,182,212,0.15)] scale-[1.02]'
                      : 'bg-neutral-900/40 hover:bg-neutral-900/70 border-white/5 hover:border-white/10'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl border w-fit transition-all ${
                    isActive
                      ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400'
                      : 'bg-white/5 border-white/5 text-neutral-400'
                  }`}>
                    {feat.icon}
                  </div>
                  <div className="space-y-1.5 mt-4">
                    <h3 className="font-sans font-bold text-white text-base flex items-center gap-1.5">
                      {feat.title}
                      {isActive && <Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Virtual Charging Case Smart Screen Interface */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            
            {/* Interactive Notice */}
            <span className="text-[11px] font-mono tracking-wider text-cyan-400 animate-pulse mb-3 uppercase">
              ★ TAP THE VIRTUAL DISPLAY SCREEN
            </span>

            {/* Smart Earbuds Case Mockup */}
            <div className="relative w-72 h-[420px] rounded-[48px] bg-neutral-900 border-[10px] border-neutral-800 shadow-[0_25px_60px_rgba(0,0,0,0.8)] p-1.5 flex flex-col items-center">
              
              {/* Outer Golden/Gold Accent Bezel Ring as seen in video */}
              <div className="absolute inset-2.5 rounded-[36px] border border-cyan-500/25 pointer-events-none" />

              {/* Speaker receiver slit */}
              <div className="w-16 h-1 bg-neutral-950 rounded-full my-2.5" />

              {/* Touchscreen Glass Screen Body */}
              <div
                onClick={handleScreenTouch}
                className="relative w-[232px] h-[330px] rounded-[28px] bg-neutral-950 overflow-hidden border border-white/10 flex flex-col cursor-pointer select-none"
              >
                {/* Click / Touch Ripple Simulator */}
                <AnimatePresence>
                  {ripples.map((rip) => (
                    <motion.span
                      key={rip.id}
                      initial={{ scale: 0, opacity: 0.8 }}
                      animate={{ scale: 4, opacity: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute rounded-full bg-cyan-400/25 pointer-events-none w-10 h-10 -ml-5 -mt-5"
                      style={{ left: rip.x, top: rip.y }}
                    />
                  ))}
                </AnimatePresence>

                {/* Simulated Glass Highlight Reflection */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-30" />

                {/* Top Status Bar Indicator (Clean icons) */}
                <div className="flex items-center justify-between px-4 pt-3.5 pb-1 z-10 text-[9px] font-mono text-neutral-400 tracking-wider">
                  <span>10:42 AM</span>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-2.5 h-2.5 fill-current text-cyan-400 animate-pulse" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                    <span>L 100%</span>
                    <span>R 100%</span>
                  </div>
                </div>

                {/* Render Dynamic Smart screen content based on active option */}
                <div className="flex-1 relative z-10">
                  {renderActiveScreenContent()}
                </div>
                
                {/* Case display home button accent */}
                <div className="h-6 w-full flex items-center justify-center bg-black/40 z-10">
                  <span className="w-8 h-[3px] bg-neutral-800 rounded-full" />
                </div>
              </div>

              {/* Lower Bezel spacer */}
              <div className="flex-1 flex items-center justify-center pb-2">
                <span className="w-10 h-10 rounded-full bg-neutral-950 border border-white/5 shadow-inner flex items-center justify-center font-bold text-neutral-700 text-xs tracking-widest font-mono">
                  G9
                </span>
              </div>
            </div>

            {/* Simulated Case Shadow */}
            <div className="w-60 h-6 bg-cyan-500/10 rounded-full blur-xl pointer-events-none mt-4 opacity-50" />
          </div>

        </div>
      </div>
    </section>
  );
}
