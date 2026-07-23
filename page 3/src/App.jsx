import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Features from './components/Features';
import Playground from './components/Playground';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Modal from './components/Modal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('Get Started');

  const handleOpenModal = (content) => {
    setModalContent(content || 'Get Started with React + Tailwind');
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-slate-100 selection:bg-indigo-500 selection:text-white font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Top Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      <main>
        {/* Hero Section with Title 'React + Tailwind Project' and Interactive SaaS Dashboard */}
        <Hero onOpenModal={handleOpenModal} />

        {/* Industry Metrics & Tech Stack */}
        <Metrics />

        {/* SaaS Features Matrix */}
        <Features onOpenModal={handleOpenModal} />

        {/* Live Interactive Developer AI Playground */}
        <Playground />

        {/* Pricing Calculator & Tier Cards */}
        <Pricing onOpenModal={handleOpenModal} />

        {/* Customer Reviews & Wall of Love */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Final Conversion Banner */}
        <CTA onOpenModal={handleOpenModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Action Dialog Modal */}
      <Modal 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        modalContent={modalContent} 
      />
    </div>
  );
}
