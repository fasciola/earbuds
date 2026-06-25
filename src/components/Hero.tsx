import { motion } from 'motion/react';
import { ArrowRight, Bluetooth, Play, Smartphone, Zap } from 'lucide-react';
import { HERO_VIDEO_PATH, IMAGES } from '../assets-ref';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="bg-[#f5f5f7] px-5 pb-12 pt-28 sm:px-8 md:pb-16 md:pt-32 lg:px-12">
      <div className="mx-auto grid max-w-[1440px] items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-14">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-xl lg:pl-5"
        >
          <p className="section-eyebrow mb-5">G9 smart earbuds</p>
          <h1 className="text-5xl font-extrabold leading-[0.93] tracking-[-0.07em] text-[#1d1d1f] sm:text-6xl lg:text-7xl">
            Sound, <span className="text-[#0071e3]">within</span> reach.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#6e6e73] sm:text-lg">
            A wireless listening system with a colour touch display, built to put music, calls, and everyday control in the palm of your hand.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button onClick={() => handleScrollTo('#features')} className="primary-button px-6 py-3.5 text-sm font-semibold">
              Explore G9
              <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={() => handleScrollTo('#purchase-section')} className="secondary-button px-6 py-3.5 text-sm font-semibold">
              <Play className="h-4 w-4 fill-current" />
              Shop now
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-[#d2d2d7] pt-5 sm:gap-6">
            <div>
              <Bluetooth className="mb-2 h-4 w-4 text-[#0071e3]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-[#6e6e73]">Wireless</p>
              <p className="mt-1 text-xs font-semibold text-[#1d1d1f]">Bluetooth 5.3</p>
            </div>
            <div className="border-l border-[#d2d2d7] pl-3 sm:pl-6">
              <Smartphone className="mb-2 h-4 w-4 text-[#0071e3]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-[#6e6e73]">Display</p>
              <p className="mt-1 text-xs font-semibold text-[#1d1d1f]">Touchscreen case</p>
            </div>
            <div className="border-l border-[#d2d2d7] pl-3 sm:pl-6">
              <Zap className="mb-2 h-4 w-4 text-[#0071e3]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.11em] text-[#6e6e73]">Charge</p>
              <p className="mt-1 text-xs font-semibold text-[#1d1d1f]">Fast Type-C</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.08 }}
          className="hero-media relative min-h-[390px] overflow-hidden rounded-[2rem] sm:min-h-[480px] lg:min-h-[590px]"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster={IMAGES.closeup}
            className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
            aria-label="G9 touchscreen earbuds product video"
          >
            <source src={HERO_VIDEO_PATH} type="video/mp4" />
          </video>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-black/55 px-5 py-4 text-white backdrop-blur-sm sm:px-7">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/65">Smart charging case</p>
              <p className="mt-1 text-sm font-semibold">Touch. Listen. Control.</p>
            </div>
            <span className="rounded-full border border-white/25 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em]">G9</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
