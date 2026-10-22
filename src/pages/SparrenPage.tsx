import React, { useState } from 'react';
import { ProjectCalculator } from '../components/ProjectCalculator';
import { ContactSection } from '../components/ContactSection';

export const SparrenPage: React.FC = () => {
  const [prefilledBrief, setPrefilledBrief] = useState<string>('');

  const handlePlanWithBrief = (brief: string) => {
    setPrefilledBrief(brief);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="animate-fade-in">
      {/* 1. Interactive Architecture Blueprint Configurator */}
      <ProjectCalculator onPlanSparringWithBrief={handlePlanWithBrief} />

      {/* 2. Direct Contact & Sparring Section */}
      <ContactSection initialBrief={prefilledBrief} />
    </div>
  );
};
