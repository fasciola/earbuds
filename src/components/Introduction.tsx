import { motion } from 'motion/react';
import { Bluetooth, ShieldCheck, Sparkles, Smartphone } from 'lucide-react';
import { IMAGES } from '../assets-ref';

const highlights = [
  {
    icon: Smartphone,
    title: 'A display at your fingertips',
    description: 'Check status and manage everyday listening directly from the case.',
  },
  {
    icon: Bluetooth,
    title: 'Made to stay connected',
    description: 'Fast pairing and a stable Bluetooth 5.3 connection for your day.',
  },
  {
    icon: ShieldCheck,
    title: 'A secure home for each earbud',
    description: 'Magnetic charging contacts keep both earbuds protected and ready.',
  },
  {
    icon: Sparkles,
    title: 'Designed to go everywhere',
    description: 'Compact proportions with a finish that feels considered in your hand.',
  },
];

export default function Introduction() {
  return (
    <section id="features" className="bg-white px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-[1280px] items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="soft-card relative aspect-square overflow-hidden p-5 sm:p-8">
            <img
              src={IMAGES.closeup}
              alt="G9 touchscreen charging case and earbuds"
              className="h-full w-full rounded-[1.15rem] object-cover object-center"
            />
            <div className="absolute bottom-9 left-9 rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#1d1d1f] shadow-[0_8px_22px_rgba(0,0,0,0.12)]">
              Built around a smarter case
            </div>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2">
          <p className="section-eyebrow mb-5">Designed around the case</p>
          <h2 className="section-title max-w-lg">More than a charging case.</h2>
          <p className="section-copy mt-6 max-w-xl">
            G9 turns the charging case into an intuitive control centre. See the essentials, change the mood, and stay focused on the moment—not on your phone.
          </p>

          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="rounded-2xl border border-[#e5e5e7] bg-white p-5 transition-shadow hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)]"
                >
                  <span className="mb-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0071e3]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-sm font-bold text-[#1d1d1f]">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#6e6e73]">{item.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
