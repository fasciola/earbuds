import { Cpu, Battery, Cable, Maximize, Palette, Sparkles, AlertCircle } from 'lucide-react';
import { TECHNICAL_SPECS } from '../config';

export default function Specifications() {
  const specsList = [
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      label: "Product Model",
      value: TECHNICAL_SPECS.model,
    },
    {
      icon: <Cpu className="w-5 h-5 text-blue-400" />,
      label: "Bluetooth Version",
      value: TECHNICAL_SPECS.bluetoothVersion,
    },
    {
      icon: <Palette className="w-5 h-5 text-indigo-400" />,
      label: "Available Colours",
      value: TECHNICAL_SPECS.colours,
    },
    {
      icon: <Battery className="w-5 h-5 text-emerald-400" />,
      label: "Earbud Battery",
      value: TECHNICAL_SPECS.earbudBattery,
    },
    {
      icon: <Battery className="w-5 h-5 text-teal-400" />,
      label: "Charging Case Capacity",
      value: TECHNICAL_SPECS.caseBattery,
    },
    {
      icon: <Battery className="w-5 h-5 text-rose-400" />,
      label: "Charging Time",
      value: TECHNICAL_SPECS.chargingTime,
    },
    {
      icon: <Cable className="w-5 h-5 text-amber-400" />,
      label: "Charging Interface",
      value: TECHNICAL_SPECS.interface,
    },
    {
      icon: <Maximize className="w-5 h-5 text-cyan-400" />,
      label: "Product Dimensions",
      value: TECHNICAL_SPECS.dimensions,
    }
  ];

  return (
    <section id="specifications" className="py-24 bg-neutral-950 text-white border-t border-white/5 relative overflow-hidden">
      
      {/* Background soft lighting glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title block */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-xs font-semibold text-cyan-400 tracking-widest uppercase block">
            Technical Data Sheet
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-extrabold tracking-tight">
            Built to perform.
          </h2>
          <p className="text-neutral-400 font-sans text-sm sm:text-base max-w-2xl mx-auto">
            Explore the raw mechanics. Built with meticulous engineering, premium components, and state-of-the-art wireless transmitters.
          </p>
        </div>

        {/* Specifications Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4.5">
          {specsList.map((spec, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 w-fit rounded-lg bg-white/5 border border-white/10 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 group-hover:text-cyan-400 transition-all">
                  {spec.icon}
                </div>
                <span className="text-xs font-mono font-bold tracking-wider text-neutral-500 group-hover:text-cyan-400 transition-colors uppercase">
                  {spec.label}
                </span>
              </div>
              <div className="text-xl font-sans font-extrabold text-white tracking-tight">
                {spec.value}
              </div>
            </div>
          ))}
        </div>

        {/* Note / Disclaimer panel */}
        <div className="mt-10 flex items-center justify-center gap-2.5 p-4 rounded-2xl bg-white/[0.01] border border-white/5 max-w-2xl mx-auto text-xs text-neutral-500 text-center font-sans">
          <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{TECHNICAL_SPECS.disclaimer}</span>
        </div>

      </div>
    </section>
  );
}
