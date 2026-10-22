import React from 'react';
import { ArrowUp, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 py-16 text-neutral-400 font-mono text-xs text-left relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Identity & Emblem */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-white/20 bg-[#16181f] flex items-center justify-center">
                <img
                  src="/logo-mr.png"
                  alt="MR Logo"
                  className="w-full h-full object-cover p-0.5 filter contrast-125"
                />
              </div>
              <div>
                <div className="text-white font-bold text-sm tracking-tight">MATTHIAS RADDER</div>
                <div className="text-[11px] text-neutral-500">MR SYSTEMS & PRODUCT ARCHITECTURE</div>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed font-sans max-w-sm">
              Complexe, domeinspecifieke logica direct vertalen naar werkende, schaalbare bedrijfsmodellen. Van local-first zorgprotocollen tot enterprise cloudvoorstellen en fysieke merkuitrol.
            </p>

            <div className="text-[11px] text-neutral-500 space-y-1">
              <div>// LAT: 52.3676° N, LON: 4.9041° E</div>
              <div>// BUILT WITH: ANTIGRAVITY IDE + REACT + TAILWIND</div>
            </div>
          </div>

          {/* Core Case References */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-[11px]">
              DOMEIN ARCHITECTUREN
            </div>
            <ul className="space-y-2 text-neutral-400">
              <li>
                <a href="#cases" className="hover:text-emerald-400 transition-colors">
                  • Schematherapie Suite (Local-first & AI)
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-emerald-400 transition-colors">
                  • Nieuwbouw Perceelkiezer (PDOK / Kadaster)
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-emerald-400 transition-colors">
                  • Enterprise OpenShift & eBPF Telemetry
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-emerald-400 transition-colors">
                  • True Time Thai (Pattaya App & Storefront)
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-emerald-400 transition-colors">
                  • Palrom Products ("From Tree to Trade" Fleet)
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Jump & Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <div className="text-white font-bold uppercase tracking-wider text-[11px]">
                SNEL NAAR
              </div>
              <div className="flex flex-col space-y-1.5">
                <a href="#manifest" className="hover:text-white transition-colors">Manifest</a>
                <a href="#driehoek" className="hover:text-white transition-colors">De Interdisciplinaire Driehoek</a>
                <a href="#vergelijker" className="hover:text-white transition-colors">Motor vs. Sausje</a>
                <a href="#tech" className="hover:text-white transition-colors">Tech Toolkit Radar</a>
                <a href="#calculator" className="hover:text-white transition-colors">Roadmap Blauwdruk</a>
                <a href="#contact" className="hover:text-white transition-colors">Plan Sparringsessie</a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-neutral-400 hover:text-white transition-colors group cursor-pointer pt-4"
            >
              <div className="p-2 rounded bg-white/5 border border-white/10 group-hover:border-emerald-400">
                <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <span>Terug naar boven</span>
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} Matthias Radder (MR Studio). Alle rechten voorbehouden.
          </div>
          <div className="flex items-center gap-2 text-emerald-400/80">
            <Cpu className="w-3.5 h-3.5" />
            <span>WAAR EEN STANDAARD BUREAU STOPT, BOUWEN WIJ DE MOTOR.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
