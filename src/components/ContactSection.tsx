import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Check, Copy, MapPin, ShieldCheck, Terminal } from 'lucide-react';
import { RadderLogo } from './RadderLogo';

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
    <section id="contact" className="py-24 bg-[#f4f3ef] border-t border-neutral-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-neutral-200/60 border border-neutral-300 text-neutral-800 text-xs font-mono mb-4">
                <Terminal className="w-3.5 h-3.5 text-neutral-950" />
                <span>DIRECT SPARREN MET RaddeR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight">
                Laten we de motor <br />
                <span className="text-neutral-600">voor jullie visie bouwen.</span>
              </h2>
              <p className="mt-4 text-neutral-600 text-base leading-relaxed">
                Geen accountmanagers of tussenlagen. Spar direct met ons over architectuur, domeinlogica en realisatie.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-bold">
                  DIRECT CONTACT
                </span>
                <div className="w-6 h-6 flex items-center justify-center text-neutral-950">
                  <RadderLogo size={22} color="#0a0a0a" />
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-neutral-950" />
                  <span className="text-sm font-mono text-neutral-950 font-medium">{contactEmail}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-neutral-200/70 hover:bg-neutral-950 hover:text-white text-neutral-800 text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer font-semibold"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Gekopieerd!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Kopieer</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-2 text-xs font-mono text-neutral-600 pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-neutral-400" />
                  <span>Nederland (Beschikbaar voor sparren op locatie & remote wereldwijd)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-neutral-950" />
                  <span>NDA & Vertrouwelijkheid gegarandeerd bij vroege IP</span>
                </div>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="p-5 rounded-2xl bg-white border border-neutral-200/90 shadow-sm flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-neutral-950 animate-ping"></span>
              <div className="text-xs font-mono text-neutral-700">
                <strong className="text-neutral-950">Status Q4/Q1:</strong> Selectieve ruimte voor nieuwe strategische producttrajecten en enterprise architectuur-sparring.
              </div>
            </div>
          </div>

          {/* Right Column: Sparring Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-neutral-200/90 shadow-lg">
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
                  <div className="border-b border-neutral-200 pb-4">
                    <h3 className="text-xl font-bold text-neutral-950">Plan een Sparringsessie</h3>
                    <p className="text-xs text-neutral-500 mt-1">
                      Vertel kort over de uitdaging en gewenste architectuur.
                    </p>
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
                        placeholder="bijv. Alexander de Vries"
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
                        placeholder="alexander@bedrijf.nl"
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
                      <option value="Herbouw van Standaard Template naar Echte Motor">Herbouw van Standaard Template naar Echte Motor</option>
                      <option value="Local-First & Zorgdiagnostiek">Local-First Zorgapplicatie & AI-Diagnostiek</option>
                      <option value="Ruimtelijke Geodata (Kadaster / PDOK)">Ruimtelijke Geodata (Kadaster / PDOK Matching)</option>
                      <option value="Omnichannel (App + Storefront of Wagenpark)">Omnichannel (App + Storefront of Wagenpark)</option>
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
                      placeholder="Beschrijf waar de complexiteit zit: welke regels, data of processen moeten de motor aandrijven?"
                      className="w-full px-4 py-3 rounded-xl bg-neutral-50/70 border border-neutral-300 text-neutral-950 placeholder:text-neutral-400 text-sm focus:outline-none focus:border-neutral-950 font-mono transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Verstuur Briefing naar RaddeR</span>
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

