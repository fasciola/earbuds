import { AlertCircle, Battery, Cable, Cpu, Maximize, Palette } from 'lucide-react';
import { TECHNICAL_SPECS } from '../config';

const specs = [
  { icon: Cpu, label: 'Product model', value: TECHNICAL_SPECS.model },
  { icon: Cpu, label: 'Bluetooth', value: TECHNICAL_SPECS.bluetoothVersion },
  { icon: Palette, label: 'Finishes', value: TECHNICAL_SPECS.colours },
  { icon: Battery, label: 'Earbud battery', value: TECHNICAL_SPECS.earbudBattery },
  { icon: Battery, label: 'Case capacity', value: TECHNICAL_SPECS.caseBattery },
  { icon: Battery, label: 'Charge time', value: TECHNICAL_SPECS.chargingTime },
  { icon: Cable, label: 'Charging interface', value: TECHNICAL_SPECS.interface },
  { icon: Maximize, label: 'Dimensions', value: TECHNICAL_SPECS.dimensions },
];

export default function Specifications() {
  return (
    <section id="specifications" className="bg-[#f5f5f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto max-w-[1280px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow mb-5">Technical details</p>
          <h2 className="section-title">Built to perform.</h2>
          <p className="section-copy mx-auto mt-5 max-w-2xl">The essential numbers behind the G9 Smart Earbuds system.</p>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {specs.map((spec) => {
            const Icon = spec.icon;
            return (
              <article key={spec.label} className="rounded-2xl border border-[#e5e5e7] bg-white p-6 transition-shadow hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)]">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f0f7ff] text-[#0071e3]"><Icon className="h-4 w-4" /></span>
                <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.12em] text-[#6e6e73]">{spec.label}</p>
                <p className="mt-2 text-xl font-extrabold tracking-[-0.045em] text-[#1d1d1f]">{spec.value}</p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-3 rounded-2xl border border-[#d6ecff] bg-[#f5faff] p-4 text-center text-xs leading-relaxed text-[#515154]">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#0071e3]" />
          <span>{TECHNICAL_SPECS.disclaimer}</span>
        </div>
      </div>
    </section>
  );
}
