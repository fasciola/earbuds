import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../config';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="bg-[#f5f5f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow mb-5">Support</p>
          <h2 className="section-title">Frequently asked.</h2>
          <p className="section-copy mx-auto mt-5 max-w-xl">Useful answers about the G9 case, controls, charging, and finishes.</p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[1.5rem] border border-[#e5e5e7] bg-white">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className={index !== FAQS.length - 1 ? 'border-b border-[#e5e5e7]' : ''}>
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-4">
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${isOpen ? 'bg-[#0071e3] text-white' : 'bg-[#f0f7ff] text-[#0071e3]'}`}><HelpCircle className="h-4 w-4" /></span>
                    <span className="text-sm font-bold text-[#1d1d1f] sm:text-base">{faq.question}</span>
                  </span>
                  <ChevronDown className={`h-4 w-4 shrink-0 text-[#0071e3] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24 }} className="overflow-hidden">
                      <p className="px-5 pb-6 pl-[4.75rem] text-sm leading-relaxed text-[#6e6e73] sm:px-7 sm:pl-[5.75rem]">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
