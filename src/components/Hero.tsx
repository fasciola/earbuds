import { motion } from 'motion/react';
import { Play, ArrowRight, Bluetooth, Smartphone, Zap } from 'lucide-react';
import { HERO_VIDEO_PATH, IMAGES } from '../assets-ref';
import { CONTACT_CONFIG } from '../config';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="relative w-full min-h-screen bg-black flex items-center overflow-hidden">
      {/* Background Video with Muted Autoplay Loop */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={IMAGES.closeup}
          className="w-full h-full object-cover object-center md:object-right lg:object-center opacity-70 transition-opacity duration-700"
          aria-hidden="true"
        >
          <source src={HERO_VIDEO_PATH} type="video/mp4" />
          {/* Fallback image if video is not supported */}
          <img
            src={IMAGES.closeup}
            alt="G9 Touchscreen Earbuds Case"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </video>
        {/* Gradients to mask the video and improve text readability */}
        {/* On mobile, we use a stronger, dark radial/linear overlay near the bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/50 md:bg-gradient-to-r md:from-neutral-950 md:via-neutral-950/60 md:to-transparent z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-neutral-950/80 pointer-events-none z-10" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-24 pb-16 md:py-32 flex items-end md:items-center min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full">
          {/* Text Content Block */}
          {/* Mobile: bottom aligned and centered. Desktop: left aligned, 7 columns */}
          <div className="col-span-1 md:col-span-8 lg:col-span-7 flex flex-col justify-end md:justify-center text-center md:text-left pt-36 md:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              {/* Premium micro badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-semibold text-cyan-400 uppercase tracking-widest mx-auto md:mx-0 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                Next-Gen Audio Experience
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-sans font-extrabold tracking-tight text-white leading-[1.1]">
                Touch. <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 bg-clip-text text-transparent">Listen.</span> <br />
                Control.
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg lg:text-xl text-neutral-300 font-sans font-normal max-w-xl leading-relaxed mx-auto md:mx-0">
                Wireless earbuds with a smart touch-screen charging case designed for music, calls, and everyday control.
              </p>

              {/* CTA Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 justify-center md:justify-start">
                <button
                  onClick={() => handleScrollTo('#purchase-section')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-bold tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:shadow-[0_0_40px_rgba(34,211,238,0.5)] transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleScrollTo('#features')}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold transition-all duration-300 border border-white/15 hover:border-white/25 backdrop-blur-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Explore Features</span>
                  <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/25" />
                </button>
              </div>

              {/* Divider for mobile */}
              <div className="h-[1px] w-12 bg-neutral-800 mx-auto md:mx-0 my-6 md:hidden" />

              {/* Key Trust Points */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 justify-center md:justify-start pt-4 text-xs font-semibold text-neutral-400 uppercase tracking-widest">
                <div className="flex items-center gap-2 hover:text-white transition-colors">
                  <Bluetooth className="w-4 h-4 text-cyan-400" />
                  <span>Bluetooth 5.3</span>
                </div>
                <span className="hidden sm:inline text-neutral-800">•</span>
                <div className="flex items-center gap-2 hover:text-white transition-colors">
                  <Smartphone className="w-4 h-4 text-cyan-400" />
                  <span>Touch-Screen Case</span>
                </div>
                <span className="hidden sm:inline text-neutral-800">•</span>
                <div className="flex items-center gap-2 hover:text-white transition-colors">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span>Type-C Charging</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
