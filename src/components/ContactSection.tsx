import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Check, Copy, MapPin, ShieldCheck } from 'lucide-react';
import { RadderLogo } from './RadderLogo';
import { RadderIconSparren } from './RadderNavIcons';
import { CornerReticles, CalibrationScale } from './RadderStudioDetails';

interface ContactSectionProps {
  initialBrief?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialBrief }) => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(initialBrief || '');
  const [projectType, setProjectType] = useState('Nieuw Softwareproduct & Domeinmotor');

  useEffect(() => {
    if (initialBrief) {
      setMessage(initialBrief);
    }
  }, [initialBrief]);

  const contactEmail = 'contact@radder.studio';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="pt-40 sm:pt-48 lg:pt-56 pb-24 bg-[#f8f7f4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unified Page Header Zone */}
        <div className="relative mb-12">
          {/* Sparren Main Content: all left, exact same size */}
          <div className="relative z-10 max-w-4xl text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/[0.04] border border-neutral-300 text-neutral-800 text-xs font-mono shadow-sm mb-4">
              <RadderIconSparren size={14} strokeWidth={2} color="#ff451a" />
              <span>SPARREN MET MATTHIAS // VRIJBLIJVEND</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.08]">
              Zullen we samen <br />
              <span className="text-neutral-400">onder de motorkap kijken?</span>
            </h1>

            <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl font-normal leading-relaxed">
              Een goed inhoudelijk gesprek van 30 minuten levert vaak meer op dan drie maanden vergaderen met tussenlagen. Vertel me waar je naartoe wilt met je product, platform of proces—ik denk direct met je mee in oplossingen en werkende code.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm space-y-4 relative group">
              <CornerReticles color="rgba(0,0,0,0.18)" />
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                  DIRECT CONTACT
                </span>
                <div className="w-6 h-6 flex items-center justify-center text-[#ff451a]">
                  <RadderLogo size={22} color="#ff451a" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#ff451a]/10 border border-[#ff451a]/20 flex items-center justify-center text-[#ff451a] shrink-0">
                    <Mail className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-mono text-neutral-950 font-medium">{contactEmail}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-neutral-200/70 hover:bg-neutral-950 hover:text-white text-neutral-800 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer font-semibold"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" strokeWidth={2.5} />
                      <span>Gekopieerd!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-neutral-700" strokeWidth={2} />
                      <span>Kopieer</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-3 text-xs font-mono text-neutral-700 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#ff451a]/10 flex items-center justify-center text-[#ff451a] shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5" strokeWidth={2.2} />
                  </div>
                  <span className="leading-snug pt-0.5">Nederland (Beschikbaar voor sparren op locatie & remote wereldwijd)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#ff451a]/10 flex items-center justify-center text-[#ff451a] shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2.2} />
                  </div>
                  <span className="leading-snug pt-0.5">NDA & Vertrouwelijkheid gegarandeerd bij vroege IP</span>
                </div>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm flex items-center gap-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff451a] shrink-0 animate-pulse"></span>
              <div className="text-xs font-mono text-neutral-700">
                <strong className="text-neutral-950">Status:</strong> Beschikbaar voor selectieve nieuwe producttrajecten, architectuur-sparring en audits.
              </div>
            </div>
          </div>

          {/* Right Column: Sparring Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/90 shadow-lg relative group">
              <CornerReticles color="rgba(0,0,0,0.18)" />
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-neutral-100 border border-neutral-300 text-neutral-950 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-950">Aanvraag Ontvangen!</h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto">
                    Bedankt voor de briefing. RaddeR neemt binnen 24 uur contact op om te sparren over de technische motor.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-neutral-950 text-white font-mono text-xs hover:bg-neutral-800 transition-all cursor-pointer"
                  >
                    Nog een bericht sturen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-neutral-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-bold text-neutral-950">Plan een sparsessie met Matthias</h3>
                      <p className="text-xs text-neutral-600 mt-1">
                        Vertel kort over je casus, proces of knelpunt. Je spreekt direct met degene die de code en architectuur ontwerpt.
                      </p>
                    </div>
                    <CalibrationScale label="INPUT // FORM" ticks={6} className="hidden sm:inline-flex shrink-0" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-neutral-700 uppercase tracking-wider block mb-2 font-bold">
                        Naam
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Naam"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50/70 border border-neutral-300 text-neutral-950 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-neutral-950 font-mono transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-neutral-700 uppercase tracking-wider block mb-2 font-bold">
                        Zakelijk E-mailadres
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="naam@bedrijf.nl"
                        className="w-full px-4 py-3 rounded-xl bg-neutral-50/70 border border-neutral-300 text-neutral-950 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-neutral-950 font-mono transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-neutral-700 uppercase tracking-wider block mb-2 font-bold">
                      Type Uitdaging
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50/70 border border-neutral-300 text-neutral-950 text-sm focus:outline-none focus:border-neutral-950 font-mono cursor-pointer transition-colors"
                    >
                      <option value="Nieuw Softwareproduct & Domeinmotor">Nieuw Softwareproduct & Domeinmotor (from scratch)</option>
                      <option value="B2B Configurator of Calculatie-engine">B2B Configurator of Calculatie-engine (zoals Palrom)</option>
                      <option value="HealthTech, Zorgapplicatie of AI-Diagnostiek">HealthTech, Zorgapplicatie of AI-Diagnostiek (zoals Schematherapie Suite)</option>
                      <option value="Lokale Dominantie & High-Performance Platform">Lokale Dominantie & High-Performance Platform (zoals Staopstoelen.nl)</option>
                      <option value="Boekingsengine, Hardware Rental of E-Commerce">Boekingsengine, Hardware Rental of E-Commerce (zoals True Time Thai / Schipper)</option>
                      <option value="SportTech, Vitaliteit & Web Audio Engine">SportTech, Vitaliteit & Web Audio Engine (zoals TT Clinics)</option>
                      <option value="Architectuur-audit of Herbouw van Vastgelopen Project">Architectuur-audit of Herbouw van Vastgelopen Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-neutral-700 uppercase tracking-wider block mb-2 font-bold">
                      Beschrijving van de Domeinlogica / Uitdaging
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Korte toelichting op je casus, proces of gewenste systeem..."
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50/70 border border-neutral-300 text-neutral-950 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-neutral-950 font-mono transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-neutral-950 hover:bg-[#ff451a] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Verstuur Bericht</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

