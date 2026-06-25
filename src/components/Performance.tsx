import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Battery, Cable, Clock, Disc, Zap } from 'lucide-react';
import { IMAGES } from '../assets-ref';
import { POWER_STATS } from '../config';

type View = 'live' | 'specs';

const metrics = [
  { icon: Battery, label: 'Total playback', valueKey: 'totalListeningEndurance', copy: 'Listening time across the earbuds and charging case.' },
  { icon: Clock, label: 'Charge time', valueKey: 'chargingTime', copy: 'A full top-up in a compact part of your day.' },
  { icon: Disc, label: 'Case battery', valueKey: 'caseCapacity', copy: 'High-density power built into the charging case.' },
  { icon: Cable, label: 'Earbud + cable', valueKey: 'earbudCapacity', copy: 'Lightweight earbud cells with universal Type-C charging.' },
] as const;

export default function Performance() {
  const [view, setView] = useState<View>('live');

  return (
    <section id="performance" className="bg-[#f5f5f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow mb-5">Battery and charging</p>
          <h2 className="section-title">Power that keeps up.</h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl">Efficient charging, a compact case, and power that is ready when the next track starts.</p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="apple-card flex min-h-[485px] flex-col p-7 sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <div>
                <div className="flex items-center gap-2 text-[#0071e3]"><Zap className="h-4 w-4 fill-current" /><span className="text-[10px] font-bold uppercase tracking-[0.12em]">Smart battery system</span></div>
                <h3 className="mt-4 text-2xl font-extrabold tracking-[-0.05em] text-[#1d1d1f]">Rapid charge.<br />Long playback.</h3>
              </div>
              <div className="flex rounded-full border border-[#d2d2d7] bg-[#f5f5f7] p-1 text-[10px] font-bold">
                <button type="button" onClick={() => setView('live')} className={`rounded-full px-3 py-1.5 ${view === 'live' ? 'bg-[#0071e3] text-white' : 'text-[#6e6e73]'}`}>Live</button>
                <button type="button" onClick={() => setView('specs')} className={`rounded-full px-3 py-1.5 ${view === 'specs' ? 'bg-[#0071e3] text-white' : 'text-[#6e6e73]'}`}>Specs</button>
              </div>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#6e6e73]">Get {POWER_STATS.perEarbudCharge} of music on a single earbud charge, with up to {POWER_STATS.totalListeningEndurance} total listening time from the G9 case.</p>

            <div className="flex flex-1 items-center justify-center py-7">
              <AnimatePresence mode="wait">
                {view === 'live' ? (
                  <motion.div key="live" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} className="text-center">
                    <div className="relative mx-auto flex h-48 w-28 items-end rounded-[1.65rem] border-[5px] border-[#1d1d1f] bg-[#f5f5f7] p-2 shadow-inner">
                      <div className="absolute -top-3 left-1/2 h-3 w-9 -translate-x-1/2 rounded-t-md bg-[#1d1d1f]" />
                      <motion.div initial={{ height: '40%' }} animate={{ height: ['40%', '84%', '40%'] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="flex w-full items-center justify-center rounded-[1.12rem] bg-[#0071e3] text-white">
                        <Zap className="h-7 w-7 fill-current" />
                      </motion.div>
                    </div>
                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#6e6e73]">Current charge level</p>
                    <p className="mt-1 text-lg font-extrabold text-[#0071e3]">85% charged</p>
                  </motion.div>
                ) : (
                  <motion.div key="specs" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} className="w-full max-w-sm overflow-hidden rounded-2xl border border-[#e5e5e7] bg-[#f5f5f7] p-3">
                    <img src={IMAGES.batteryInfographic} alt="G9 battery and charging information" className="h-64 w-full rounded-xl object-cover object-center" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-2 border-t border-[#e5e5e7] pt-5 text-xs text-[#6e6e73]"><Clock className="h-4 w-4 text-[#0071e3]" /> A full charge takes approximately {POWER_STATS.chargingTime}.</div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((metric) => {
              const Icon = metric.icon;
              const value = metric.valueKey === 'earbudCapacity'
                ? `${POWER_STATS.earbudCapacity} / ${POWER_STATS.interface}`
                : POWER_STATS[metric.valueKey];
              return (
                <article key={metric.label} className="apple-card flex min-h-[220px] flex-col justify-between p-7 transition-shadow hover:shadow-[0_15px_34px_rgba(0,0,0,0.08)]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0071e3]"><Icon className="h-5 w-5" /></span>
                  <div className="mt-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#6e6e73]">{metric.label}</p>
                    <p className="mt-2 text-3xl font-extrabold tracking-[-0.055em] text-[#1d1d1f]">{value}</p>
                    <p className="mt-3 border-t border-[#e5e5e7] pt-3 text-xs leading-relaxed text-[#6e6e73]">{metric.copy}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
