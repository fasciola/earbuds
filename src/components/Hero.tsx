import { motion } from 'motion/react';
import { ArrowRight, Bluetooth, Play, Smartphone, Zap } from 'lucide-react';
import { HERO_VIDEO_PATH, IMAGES } from '../assets-ref';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="premium-hero relative flex min-h-screen w-full items-end overflow-hidden bg-black md:items-center">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={IMAGES.closeup}
          className="premium-hero__media h-full w-full object-cover object-[67%_center] transition-opacity duration-700 md:object-center"
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_PATH} type="video/mp4" />
        </video>
      </div>

      <div className="relative z-20 mx-auto flex min-h-screen w-full max-w-[1440px] items-end px-6 pb-12 pt-28 sm:px-10 md:items-center md:px-14 md:py-28 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.82, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="premium-kicker mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-[#00a3e0]" />
            G9 / Smart audio system
          </div>

          <h1 className="max-w-xl text-5xl font-extrabold leading-[0.93] tracking-[-0.075em] text-white sm:text-6xl lg:text-8xl">
            Sound, <span className="text-[#00a3e0]">within</span> reach.
          </h1>

          <p className="mt-7 max-w-lg text-base leading-relaxed text-[#b8b8b8] sm:text-lg">
            A tactile wireless listening system with a full-colour smart display—designed to make music, calls, and everyday control feel beautifully immediate.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={() => handleScrollTo('#features')}
              className="premium-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition-all duration-300"
            >
              Explore the G9
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => handleScrollTo('#purchase-section')}
              className="premium-button--ghost inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300"
            >
              <Play className="h-4 w-4 fill-current" />
              See it in action
            </button>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-5 sm:gap-7">
            <div className="premium-stat border-l-0 pl-0">
              <Bluetooth className="mb-2 h-4 w-4 text-[#00a3e0]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#a8a8a8]">Bluetooth</p>
              <p className="mt-1 text-xs font-semibold text-white">5.3 connection</p>
            </div>
            <div className="premium-stat pl-4 sm:pl-7">
              <Smartphone className="mb-2 h-4 w-4 text-[#00a3e0]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#a8a8a8]">Display</p>
              <p className="mt-1 text-xs font-semibold text-white">Smart touch case</p>
            </div>
            <div className="premium-stat pl-4 sm:pl-7">
              <Zap className="mb-2 h-4 w-4 text-[#00a3e0]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#a8a8a8]">Power</p>
              <p className="mt-1 text-xs font-semibold text-white">Fast Type-C charge</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-5 right-6 z-20 hidden items-center gap-3 text-[10px] font-medium uppercase tracking-[0.15em] text-[#a8a8a8] md:flex lg:right-12">
        <span>Scroll to discover</span>
        <span className="h-px w-12 bg-white/20" />
      </div>
    </section>
  );
}
