import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Touchscreen from './components/Touchscreen';
import Controls from './components/Controls';
import Performance from './components/Performance';
import Colours from './components/Colours';
import Specifications from './components/Specifications';
import Lifestyle from './components/Lifestyle';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-neutral-950 text-white min-h-screen font-sans scroll-smooth antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Sticky Navigation bar */}
      <Navbar />

      {/* Hero section with looping background video and large typography */}
      <Hero />

      {/* Intro section outlining the case and earbuds */}
      <Introduction />

      {/* Interactive touchscreen case simulator */}
      <Touchscreen />

      {/* Capacitive tap commands on the earbuds stem */}
      <Controls />

      {/* Battery-inspired endurance section with charger animations */}
      <Performance />

      {/* Selectable color finishes with dynamic glowing mockups */}
      <Colours />

      {/* High-fidelity tech specification cards */}
      <Specifications />

      {/* Video-backed closing call-to-action and direct checkout card */}
      <Lifestyle />

      {/* Accordion list of answers to common questions */}
      <FAQ />

      {/* Fully customized footer with support and brand labels */}
      <Footer />
    </div>
  );
}
