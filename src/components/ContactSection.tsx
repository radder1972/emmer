import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Check, Copy, MapPin, ShieldCheck, Terminal } from 'lucide-react';

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

  const contactEmail = 'matthias@radder.studio';

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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono mb-4">
                <Terminal className="w-3.5 h-3.5" />
                <span>DIRECT SPARREN & SAMENWERKEN</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Laten we de motor <br />
                <span className="text-emerald-400">voor jouw visie bouwen.</span>
              </h2>
              <p className="mt-4 text-neutral-400 text-base leading-relaxed">
                Geen accountmanagers of bureau-laagjes. Je spart rechtstreeks met Matthias over architectuur, domeinlogica, schaalbaarheid en commerciële realisatie.
              </p>
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 rounded-2xl bg-[#11131a] border border-white/10 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                DIRECT CONTACT
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-black/40 border border-white/5">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm font-mono text-white">{contactEmail}</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-xs font-mono text-neutral-300 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Gekopieerd!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Kopieer</span>
                    </>
                  )}
                </button>
              </div>

              <div className="space-y-2 text-xs font-mono text-neutral-400 pt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-neutral-500" />
                  <span>Nederland (Beschikbaar voor sparren op locatie & remote wereldwijd)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>NDA & Vertrouwelijkheid gegarandeerd bij vroege IP</span>
                </div>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
              <div className="text-xs font-mono text-neutral-200">
                <strong className="text-emerald-400">Status Q4/Q1:</strong> Selectieve ruimte voor nieuwe strategische producttrajecten en enterprise architectuur-sparring.
              </div>
            </div>
          </div>

          {/* Right Column: Sparring Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#11131a] border border-white/10 shadow-2xl">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Aanvraag Ontvangen!</h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto">
                    Bedankt voor het delen van je briefing. Matthias neemt binnen 24 uur persoonlijk contact met je op om te sparren over de technische en commerciële motor.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-white/10 text-white font-mono text-xs hover:bg-white/20"
                  >
                    Nog een bericht sturen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="border-b border-white/10 pb-4">
                    <h3 className="text-xl font-bold text-white">Plan een Strategische Sparringsessie</h3>
                    <p className="text-xs text-neutral-400 mt-1">
                      Vertel kort over de uitdaging, het domein en waar een standaardbureau te kort schiet.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                        Jouw Naam
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="bijv. Alexander de Vries"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400 font-mono"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                        Zakelijk E-mailadres
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="alexander@bedrijf.nl"
                        className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400 font-mono"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                      Type Uitdaging
                    </label>
                    <select
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400 font-mono cursor-pointer"
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
                    <label className="text-xs font-mono text-neutral-400 uppercase tracking-wider block mb-2">
                      Beschrijving van de Domeinlogica / Uitdaging
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Beschrijf waar de complexiteit zit: welke regels, data of processen moeten de motor aandrijven?"
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm focus:outline-none focus:border-emerald-400 font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Verstuur Briefing naar Matthias</span>
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
