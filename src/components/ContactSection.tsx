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
    <section id="contact" className="py-24 bg-[#08090d] border-t border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/15 text-zinc-300 text-xs font-mono mb-4">
                <Terminal className="w-3.5 h-3.5 text-white" />
                <span>DIRECT SPARREN MET RaddeR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Laten we de motor <br />
                <span className="text-zinc-300">voor jullie visie bouwen.</span>
              </h2>
              <p className="mt-4 text-zinc-400 text-base leading-relaxed">
                Geen accountmanagers of tussenlagen. Spar direct met ons over architectuur, domeinlogica en realisatie.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-[#11131a] border border-white/15 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
                  DIRECT CONTACT
                </span>
                <div className="w-6 h-6 flex items-center justify-center text-white">
                  <RadderLogo size={22} />
                </div>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-black/60 border border-white/10">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white" />
                  <span className="text-sm font-mono text-white">{contactEmail}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded bg-white/10 hover:bg-white text-zinc-200 hover:text-black text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer font-semibold"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-white" />
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

              <div className="space-y-2 text-xs font-mono text-zinc-400 pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-zinc-500" />
                  <span>Nederland (Beschikbaar voor sparren op locatie & remote wereldwijd)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>NDA & Vertrouwelijkheid gegarandeerd bij vroege IP</span>
                </div>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/15 flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-white animate-ping"></span>
              <div className="text-xs font-mono text-zinc-300">
                <strong className="text-white">Status Q4/Q1:</strong> Selectieve ruimte voor nieuwe strategische producttrajecten en enterprise architectuur-sparring.
              </div>
            </div>
          </div>

          {/* Right Column: Sparring Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#11131a] border border-white/15 shadow-2xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 border border-white text-white flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Aanvraag Ontvangen!</h3>
                  <p className="text-zinc-300 text-sm max-w-md mx-auto">
                    Bedankt voor de briefing. RaddeR neemt binnen 24 uur contact op om te sparren over de technische motor.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-white/15 text-white font-mono text-xs hover:bg-white hover:text-black transition-all"
                  >
                    Nog een bericht sturen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-xl font-bold text-white">Plan een Sparringsessie</h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Vertel kort over de uitdaging en gewenste architectuur.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-bold">
                        Naam
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="bijv. Alexander de Vries"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-white font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-bold">
                        Zakelijk E-mailadres
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alexander@bedrijf.nl"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-white font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-bold">
                      Type Uitdaging
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-white font-mono cursor-pointer"
                    >
                      <option value="Nieuw Softwareproduct & Domeinmotor">Nieuw Softwareproduct & Domeinmotor (from scratch)</option>
                      <option value="Herbouw van Standaard Template naar Echte Motor">Herbouw van Standaard Template naar Echte Motor</option>
                      <option value="Local-First & Zorgdiagnostiek">Local-First Zorgapplicatie & AI-Diagnostiek</option>
                      <option value="Ruimtelijke Geodata (Kadaster / PDOK)">Ruimtelijke Geodata (Kadaster / PDOK Matching)</option>
                      <option value="Enterprise OpenShift & eBPF Sparring">Enterprise OpenShift & eBPF Telemetry Sparring</option>
                      <option value="Omnichannel (App + Storefront of Wagenpark)">Omnichannel (App + Storefront of Wagenpark)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2 font-bold">
                      Beschrijving van de Domeinlogica / Uitdaging
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Beschrijf waar de complexiteit zit: welke regels, data of processen moeten de motor aandrijven?"
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-white/15 text-white text-sm focus:outline-none focus:border-white font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-white/10 flex items-center justify-center gap-2 cursor-pointer"
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

