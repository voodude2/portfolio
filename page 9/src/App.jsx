import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudioPlayground from './components/StudioPlayground';
import Features from './components/Features';
import AssetGallery from './components/AssetGallery';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050811] text-slate-100 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      <Navbar />
      <main>
        <Hero />
        <StudioPlayground />
        <Features />
        <AssetGallery />
        <Pricing />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}

export default App;
