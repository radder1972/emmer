import React from 'react';
import { ArrowUp, Cpu } from 'lucide-react';
import { RadderLogo } from './RadderLogo';
import { RadderWordmark } from './RadderWordmark';
import type { PageId } from './Navbar';

interface FooterProps {
  onNavigate?: (page: PageId) => void;
  onOpenContact?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
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
    <footer className="bg-[#ece9e1] border-t border-neutral-300/90 py-16 text-neutral-600 font-mono text-xs text-left relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-300">
          {/* Identity & Emblem */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-4">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav('manifest');
                }}
                className="w-16 h-14 flex items-center justify-center text-neutral-950 cursor-pointer"
                title="RaddeR — Naar Manifest"
              >
                <RadderLogo size={60} color="#0a0a0a" glow={false} />
              </a>
              <div>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('manifest');
                  }}
                  className="text-left cursor-pointer"
                >
                  <RadderWordmark height={32} color="#0a0a0a" glow={false} />
                </a>
                <div className="text-[10px] text-neutral-600 uppercase tracking-wider mt-1 font-semibold">
                  SYSTEMS & PRODUCT ARCHITECTURE
                </div>
              </div>
            </div>

            <p className="text-xs text-neutral-700 leading-relaxed font-sans max-w-sm">
              Complexe domeinlogica direct vertaald naar werkende, schaalbare software.
            </p>

            <div className="text-[11px] text-neutral-500 space-y-1">
              <div>// STUDIO: RaddeR // FOUNDED: NETHERLANDS</div>
              <div>// BUILT WITH: ANTIGRAVITY AGENTIC IDE + REACT + TAILWIND</div>
            </div>
          </div>

          {/* Core Case References */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-neutral-950 font-bold uppercase tracking-wider text-[11px]">
              DOMEIN ARCHITECTUREN
            </div>
            <ul className="space-y-2 text-neutral-600">
              <li>
                <a
                  href="/cases"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('cases');
                  }}
                  className="hover:text-neutral-950 transition-colors cursor-pointer text-left block"
                >
                  • Schematherapie Suite (Local-First GGZ)
                </a>
              </li>
              <li>
                <a
                  href="/cases"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('cases');
                  }}
                  className="hover:text-neutral-950 transition-colors cursor-pointer text-left block"
                >
                  • Nieuwbouw Perceelkiezer (PDOK / Kadaster)
                </a>
              </li>
              <li>
                <a
                  href="/cases"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('cases');
                  }}
                  className="hover:text-neutral-950 transition-colors cursor-pointer text-left block"
                >
                  • Enterprise OpenShift & eBPF Telemetry
                </a>
              </li>
              <li>
                <a
                  href="/cases"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('cases');
                  }}
                  className="hover:text-neutral-950 transition-colors cursor-pointer text-left block"
                >
                  • True Time Thai (Pattaya App & Storefront)
                </a>
              </li>
              <li>
                <a
                  href="/cases"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('cases');
                  }}
                  className="hover:text-neutral-950 transition-colors cursor-pointer text-left block"
                >
                  • Palrom Products ("From Tree to Trade" Fleet)
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation & Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between space-y-6">
            <div className="space-y-2">
              <div className="text-neutral-950 font-bold uppercase tracking-wider text-[11px]">
                MENU
              </div>
              <div className="flex flex-col space-y-2 font-mono text-xs">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('manifest');
                  }}
                  className="hover:text-neutral-950 transition-colors text-left cursor-pointer"
                >
                  → Manifest
                </a>
                <a
                  href="/cases"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('cases');
                  }}
                  className="hover:text-neutral-950 transition-colors text-left cursor-pointer"
                >
                  → Cases
                </a>
                <a
                  href="/over-ons"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('over-ons');
                  }}
                  className="hover:text-neutral-950 transition-colors text-left cursor-pointer"
                >
                  → Over Ons
                </a>
                <a
                  href="/sparren"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('sparren');
                  }}
                  className="hover:text-neutral-950 transition-colors text-left cursor-pointer"
                >
                  → Sparren
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-neutral-600 hover:text-neutral-950 transition-colors group cursor-pointer pt-4"
            >
              <div className="p-2 rounded-lg bg-neutral-200/70 border border-neutral-300 group-hover:bg-neutral-950 group-hover:text-white transition-all text-neutral-950">
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
              <span>Terug naar boven</span>
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <div>
            © {new Date().getFullYear()} RaddeR STUDIO. Alle rechten voorbehouden.
          </div>
          <div className="flex items-center gap-2 text-neutral-700">
            <Cpu className="w-3.5 h-3.5 text-neutral-950" />
            <span className="font-semibold">WAAR EEN STANDAARD BUREAU STOPT, BOUWT RaddeR DE MOTOR.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
