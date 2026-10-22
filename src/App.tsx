import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { EngineVsWrapper } from './components/EngineVsWrapper';
import { Pillars } from './components/Pillars';
import { CaseStudies } from './components/CaseStudies';
import { TechRadar } from './components/TechRadar';
import { ProjectCalculator } from './components/ProjectCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [prefilledBrief, setPrefilledBrief] = useState<string>('');

  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToCases = () => {
    const casesElem = document.getElementById('cases');
    if (casesElem) {
      casesElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlanWithBrief = (brief: string) => {
    setPrefilledBrief(brief);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#0b0d12] text-neutral-100 selection:bg-emerald-500 selection:text-black antialiased font-sans">
      {/* Fixed top navigation */}
      <Navbar onOpenContact={scrollToContact} />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenContact={scrollToContact}
          onExploreCases={scrollToCases}
        />

        {/* The Manifesto: "Waarom de Motor" */}
        <Manifesto />

        {/* Interactive Comparison: Buitenkant vs. De Motor */}
        <EngineVsWrapper />

        {/* The 3 Pillars: Domein, Architectuur, Executie */}
        <Pillars />

        {/* 5 Real Deep-Dive Case Studies */}
        <CaseStudies onOpenContact={scrollToContact} />

        {/* The Tech Radar: OpenShift, eBPF, Local-First, GIS, Antigravity */}
        <TechRadar />

        {/* Interactive Architecture & Roadmap Builder */}
        <ProjectCalculator onPlanSparringWithBrief={handlePlanWithBrief} />

        {/* Direct Contact & Sparring Section */}
        <ContactSection initialBrief={prefilledBrief} />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
};

export default App;
