import React from 'react';
import HeroSection from './components/HeroSection';
import LocationSection from './components/LocationSection';
import LotsSection from './components/LotsSection';
import BenefitsSection from './components/BenefitsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <HeroSection />
      <LocationSection />
      <LotsSection />
      <BenefitsSection />
      <ContactSection />
    </div>
  );
}

export default App;