import { useState, type ReactNode } from 'react';
import { motion } from 'motion/react';
import { Gamepad2, Image as ImageIcon, Mic, Phone, Play, SkipForward } from 'lucide-react';

type FeatureId = 'music' | 'calls' | 'tracks' | 'assistant' | 'gaming' | 'wallpaper';

interface Feature {
  id: FeatureId;
  icon: ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  { id: 'music', icon: <Play className="h-4 w-4" />, title: 'Play and pause', description: 'Keep music moving without reaching for your phone.' },
  { id: 'calls', icon: <Phone className="h-4 w-4" />, title: 'Manage calls', description: 'Answer, end, or decline a call from the display.' },
  { id: 'tracks', icon: <SkipForward className="h-4 w-4" />, title: 'Switch tracks', description: 'Move through your playlist with a quick tap.' },
  { id: 'assistant', icon: <Mic className="h-4 w-4" />, title: 'Voice assistant', description: 'Wake your preferred assistant in one place.' },
  { id: 'gaming', icon: <Gamepad2 className="h-4 w-4" />, title: 'Gaming mode', description: 'Enable low-latency listening when it matters.' },
  { id: 'wallpaper', icon: <ImageIcon className="h-4 w-4" />, title: 'Your wallpaper', description: 'Choose a personal look for the case display.' },
];

function ScreenContent({ active }: { active: FeatureId }) {
  if (active === 'music') {
    return (
      <div className="flex h-full flex-col items-center justify-between p-5 text-center">
        <span className="text-[9px] font-semibold tracking-[0.16em] text-white/55">NOW PLAYING</span>
        <div className="flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-[#0071e3] bg-[#111111] shadow-[0_0_0_6px_rgba(0,113,227,0.12)]">
          <div className="h-6 w-6 rounded-full bg-[#0071e3]" />
        </div>
        <div className="w-full">
          <div className="h-1 rounded-full bg-white/15"><div className="h-full w-2/3 rounded-full bg-[#0071e3]" /></div>
          <div className="mt-4 flex items-center justify-center gap-7">
            <SkipForward className="h-4 w-4 rotate-180 text-white/65" />
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0071e3] text-black"><Play className="h-4 w-4 fill-current" /></span>
            <SkipForward className="h-4 w-4 text-white/65" />
          </div>
        </div>
      </div>
    );
  }

  if (active === 'calls') {
    return (
      <div className="flex h-full flex-col items-center justify-between p-5 text-center">
        <span className="text-[9px] font-semibold tracking-[0.16em] text-[#71c9ff]">INCOMING CALL</span>
        <div><p className="text-xs text-white/55">Smart connection</p><p className="mt-1 text-sm font-bold text-white">G9 Support</p></div>
        <div className="flex gap-6"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff453a] text-white"><Phone className="h-4 w-4 rotate-[135deg]" /></span><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#34c759] text-black"><Phone className="h-4 w-4" /></span></div>
      </div>
    );
  }

  if (active === 'tracks') {
    return (
      <div className="flex h-full flex-col items-center justify-between p-5 text-center">
        <span className="text-[9px] font-semibold tracking-[0.16em] text-white/55">YOUR PLAYLIST</span>
        <div className="space-y-2"><p className="text-xs text-[#71c9ff]">TRACK 04</p><p className="text-base font-bold text-white">Horizon beats</p><p className="text-[10px] text-white/45">Tap an arrow to skip</p></div>
        <div className="flex w-full items-center justify-between"><span className="rounded-full border border-white/20 p-2"><SkipForward className="h-4 w-4 rotate-180 text-white" /></span><div className="flex gap-1">{[0, 1, 2, 3, 4].map((dot) => <span key={dot} className={`h-1.5 w-1.5 rounded-full ${dot === 2 ? 'bg-[#0071e3]' : 'bg-white/25'}`} />)}</div><span className="rounded-full border border-white/20 p-2"><SkipForward className="h-4 w-4 text-white" /></span></div>
      </div>
    );
  }

  if (active === 'assistant') {
    return (
      <div className="flex h-full flex-col items-center justify-between p-5 text-center">
        <span className="text-[9px] font-semibold tracking-[0.16em] text-[#71c9ff]">VOICE ASSISTANT</span>
        <span className="flex h-20 w-20 items-center justify-center rounded-full border border-[#0071e3] bg-[#0071e3]/15 text-[#71c9ff]"><Mic className="h-8 w-8" /></span>
        <p className="text-xs font-semibold text-white">Listening…</p>
      </div>
    );
  }

  if (active === 'gaming') {
    return (
      <div className="flex h-full flex-col items-center justify-between p-5 text-center">
        <span className="text-[9px] font-semibold tracking-[0.16em] text-[#71c9ff]">GAMING MODE</span>
        <Gamepad2 className="h-16 w-16 text-[#71c9ff]" />
        <div><p className="text-xl font-extrabold text-white">40 ms</p><p className="text-[10px] text-white/50">Low-latency mode</p></div>
      </div>
    );
  }

  return (
    <div className="relative h-full overflow-hidden rounded-[1.25rem] bg-[#6fa3bd]">
      <div className="absolute inset-x-0 top-0 h-1/2 bg-[#a7d3e9]" />
      <div className="absolute right-7 top-8 h-8 w-8 rounded-full bg-[#fff1a6]" />
      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-[#315f4b]" />
      <div className="absolute bottom-0 right-0 h-[42%] w-[70%] bg-[#244333] [clip-path:polygon(100%_0,0_100%,100%_100%)]" />
      <div className="absolute inset-x-0 top-6 text-center"><p className="text-xl font-bold text-white">10:42</p><p className="text-[9px] font-semibold tracking-[0.12em] text-white/80">YOUR DISPLAY</p></div>
      <div className="absolute bottom-5 left-0 right-0 text-center"><span className="rounded-full bg-black/30 px-3 py-1 text-[9px] font-semibold text-white">Landscape theme</span></div>
    </div>
  );
}

export default function Touchscreen() {
  const [activeFeature, setActiveFeature] = useState<FeatureId>('music');

  return (
    <section id="controls" className="bg-[#f5f5f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow mb-5">The smart display</p>
          <h2 className="section-title">Control is right at your fingertips.</h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl">Tap through essential listening controls on the case display. Every view is designed to be clear, quick, and uncomplicated.</p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => {
              const isActive = feature.id === activeFeature;
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveFeature(feature.id)}
                  className={`rounded-2xl border p-5 text-left transition-all ${isActive ? 'border-[#0071e3] bg-white shadow-[0_10px_24px_rgba(0,113,227,0.12)]' : 'border-[#e5e5e7] bg-white hover:border-[#b9dfff]'}`}
                >
                  <span className={`mb-5 flex h-8 w-8 items-center justify-center rounded-full ${isActive ? 'bg-[#0071e3] text-white' : 'bg-[#f0f7ff] text-[#0071e3]'}`}>{feature.icon}</span>
                  <h3 className="text-sm font-bold text-[#1d1d1f]">{feature.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">{feature.description}</p>
                </button>
              );
            })}
          </div>

          <div className="flex justify-center">
            <div className="relative w-[270px] rounded-[2.4rem] bg-[#2d2d2d] p-3 shadow-[0_24px_46px_rgba(0,0,0,0.26)]">
              <div className="absolute inset-0 rounded-[2.4rem] border border-black/30" />
              <div className="mx-auto mt-1 h-1 w-14 rounded-full bg-black/60" />
              <div className="mt-3 h-[355px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#101010]">
                <div className="flex items-center justify-between px-4 pt-3 text-[8px] font-semibold text-white/55"><span>10:42 AM</span><span>◉ L 100% R 100%</span></div>
                <div className="h-[310px] px-3 pb-3 pt-2"><ScreenContent active={activeFeature} /></div>
                <div className="mx-auto mb-3 h-1 w-8 rounded-full bg-white/20" />
              </div>
              <div className="flex h-12 items-center justify-center"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#171717] text-[9px] font-bold text-white/40">G9</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
