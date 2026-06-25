import { motion } from 'motion/react';
import { Gamepad2, HelpCircle, Mic, Music, Phone, SkipForward, Sliders } from 'lucide-react';

const gestures = [
  { icon: Music, gesture: 'Single tap', action: 'Play or pause music', tag: 'Music' },
  { icon: Phone, gesture: 'Single tap', action: 'Answer or end a call', tag: 'Calls' },
  { icon: SkipForward, gesture: 'Double tap', action: 'Move to the next track', tag: 'Music' },
  { icon: Gamepad2, gesture: 'Four taps', action: 'Turn low-latency mode on or off', tag: 'Mode' },
  { icon: Mic, gesture: 'Press and hold', action: 'Activate your voice assistant', tag: 'Assistant' },
];

export default function Controls() {
  return (
    <section id="controls-guide" className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow mb-5">Touch controls</p>
          <h2 className="section-title">Designed for everyday control.</h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl">Simple gestures, responsive feedback, and less time looking for the right button.</p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="soft-card flex min-h-[460px] flex-col justify-between p-7 sm:p-9">
            <div>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e9f5ff] text-[#0071e3]"><Sliders className="h-5 w-5" /></span>
              <h3 className="mt-6 text-2xl font-extrabold tracking-[-0.045em] text-[#1d1d1f]">Responsive tap feedback.</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#6e6e73]">Each earbud has a sensitive touch area on the stem. A subtle audio confirmation helps you know your command was received.</p>
            </div>

            <div className="flex justify-center py-8">
              <div className="relative flex h-52 w-28 flex-col items-center rounded-[2rem] border border-[#d2d2d7] bg-[#ececee] p-3 shadow-inner">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#0071e3] bg-white text-[#0071e3] shadow-[0_0_0_6px_rgba(0,113,227,0.1)]"><Sliders className="h-5 w-5" /></div>
                <span className="mt-3 h-24 w-8 rounded-b-full rounded-t-md bg-[#28282a]" />
                <span className="absolute bottom-11 h-10 w-1 rounded-full bg-[#0071e3]" />
              </div>
            </div>

            <div className="flex gap-3 rounded-2xl border border-[#d2d2d7] bg-white p-4 text-xs leading-relaxed text-[#6e6e73]">
              <HelpCircle className="h-4 w-4 shrink-0 text-[#0071e3]" />
              Both earbuds use the same commands, so control stays consistent on either side.
            </div>
          </div>

          <div className="apple-card divide-y divide-[#e5e5e7] overflow-hidden">
            {gestures.map((gesture, index) => {
              const Icon = gesture.icon;
              return (
                <motion.div
                  key={gesture.gesture + gesture.action}
                  initial={{ opacity: 0, x: 14 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center justify-between gap-4 p-5 sm:p-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0071e3]"><Icon className="h-4 w-4" /></span>
                    <div>
                      <h3 className="text-sm font-bold text-[#1d1d1f]">{gesture.gesture}</h3>
                      <p className="mt-1 text-xs text-[#6e6e73]">{gesture.action}</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-[#d6ecff] bg-[#f5faff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#0071e3]">{gesture.tag}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
