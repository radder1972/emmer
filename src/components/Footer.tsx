import React from 'react';
import { ArrowUp, Cpu } from 'lucide-react';
import { RadderLogo } from './RadderLogo';
import { RadderWordmark } from './RadderWordmark';
import type { PageId } from './Navbar';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: PageId) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = `#${page}`;
    }
  };

  return (
    <footer className="bg-[#050608] border-t border-white/10 py-16 text-zinc-400 font-mono text-xs text-left relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          {/* Identity & Emblem */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleNav('manifest')}
                className="w-16 h-14 flex items-center justify-center text-white cursor-pointer"
                title="RaddeR — Naar Manifest"
              >
                <RadderLogo size={60} glow={true} />
              </button>
              <div>
                <button
                  onClick={() => handleNav('manifest')}
                  className="text-left cursor-pointer"
                >
                  <RadderWordmark height={32} className="text-white" glow={true} />
                </button>
                <div className="text-[10px] text-zinc-400 uppercase tracking-wider mt-1 font-semibold">
                  SYSTEMS & PRODUCT ARCHITECTURE
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed font-sans max-w-sm">
              Complexe domeinlogica direct vertaald naar werkende, schaalbare software.
            </p>

            <div className="text-[11px] text-zinc-500 space-y-1">
              <div>// STUDIO: RaddeR // FOUNDED: NETHERLANDS</div>
              <div>// BUILT WITH: ANTIGRAVITY AGENTIC IDE + REACT + TAILWIND</div>
            </div>
          </div>

          {/* Core Case References */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-white font-bold uppercase tracking-wider text-[11px]">
              DOMEIN ARCHITECTUREN
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button
                  onClick={() => handleNav('cases')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  • Schematherapie Suite (Local-First GGZ)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cases')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  • Nieuwbouw Perceelkiezer (PDOK / Kadaster)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cases')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  • Enterprise OpenShift & eBPF Telemetry
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cases')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  • True Time Thai (Pattaya App & Storefront)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('cases')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  • Palrom Products ("From Tree to Trade" Fleet)
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Navigation & Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <div className="text-white font-bold uppercase tracking-wider text-[11px]">
                MENU
              </div>
              <div className="flex flex-col space-y-2 font-mono text-xs">
                <button
                  onClick={() => handleNav('manifest')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  → Manifest
                </button>
                <button
                  onClick={() => handleNav('cases')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  → Cases
                </button>
                <button
                  onClick={() => handleNav('over-ons')}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  → Over Ons
                </button>
                <button
                  onClick={onOpenContact}
                  className="text-white font-bold hover:underline transition-all text-left cursor-pointer pt-1"
                >
                  → Plan Sparringsessie
                </button>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-zinc-400 hover:text-white transition-colors group cursor-pointer pt-4"
            >
              <div className="p-2 rounded bg-white/5 border border-white/10 group-hover:border-white">
                <ArrowUp className="w-3.5 h-3.5 text-white" />
              </div>
              <span>Terug naar boven</span>
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} RaddeR STUDIO. Alle rechten voorbehouden.
          </div>
          <div className="flex items-center gap-2 text-zinc-400">
            <Cpu className="w-3.5 h-3.5 text-white" />
            <span>WAAR EEN STANDAARD BUREAU STOPT, BOUWT RaddeR DE MOTOR.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
