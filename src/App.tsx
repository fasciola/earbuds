import { useEffect } from 'react';
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
  useEffect(() => {
    const replaceHeroPrice = () => {
      document.querySelectorAll('#hero button').forEach((button) => {
        const spans = button.querySelectorAll('span');
        const priceLabel = spans[spans.length - 1];

        if (priceLabel?.textContent?.includes('$49.99')) {
          priceLabel.textContent = 'AED 120';
        }
      });
    };

    replaceHeroPrice();

    const observer = new MutationObserver(replaceHeroPrice);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, []);

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
