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
    <div className="apple-page min-h-screen bg-white text-[#1d1d1f] antialiased">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Touchscreen />
        <Controls />
        <Performance />
        <Colours />
        <Specifications />
        <Lifestyle />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
