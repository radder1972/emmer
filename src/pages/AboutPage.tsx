import React, { useState } from 'react';
import { Pillars } from '../components/Pillars';
import { TechRadar } from '../components/TechRadar';
import { ProjectCalculator } from '../components/ProjectCalculator';
import { ContactSection } from '../components/ContactSection';

interface AboutPageProps {
  onNavigateToCases?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateToCases }) => {
  const [prefilledBrief, setPrefilledBrief] = useState<string>('');

  const handlePlanWithBrief = (brief: string) => {
    setPrefilledBrief(brief);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-8 pb-0">
      {/* 1. De Driehoek: Architect, Strateeg, Maker */}
      <Pillars onNavigateToCases={onNavigateToCases} />

      {/* 2. De Stack: Tech Toolkit Radar */}
      <TechRadar />

      {/* 3. Interactive Roadmap & Architecture Builder */}
      <ProjectCalculator onPlanSparringWithBrief={handlePlanWithBrief} />

      {/* 4. Direct Contact & Sparring Section */}
      <ContactSection initialBrief={prefilledBrief} />
    </div>
  );
};
