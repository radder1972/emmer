import React from 'react';
import { ArrowUp, Cpu } from 'lucide-react';
import { RadderLogo } from './RadderLogo';
import { RadderWordmark } from './RadderWordmark';
import { RadderNavIcon } from './RadderNavIcons';
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
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 pb-12 border-b border-neutral-300">
          {/* Identity & Emblem */}
          <div className="space-y-6 max-w-md text-left">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNav('manifest');
              }}
              className="flex flex-col items-start gap-4 group cursor-pointer text-left"
              title="RaddeR — Naar Manifest"
            >
              {/* Logo flush left */}
              <div className="text-neutral-950 group-hover:opacity-80 transition-opacity">
                <RadderLogo size={64} tight={true} color="#0a0a0a" glow={false} />
              </div>

              {/* Wordmark + Subtitle flush left */}
              <div className="space-y-1.5 text-left">
                <RadderWordmark
                  height={38}
                  tight={true}
                  color="#0a0a0a"
                  glow={false}
                  className="text-neutral-950 group-hover:opacity-80 transition-opacity"
                />
                <div className="text-[10px] sm:text-[11px] font-mono text-neutral-600 uppercase tracking-wider font-semibold group-hover:text-neutral-950 transition-colors">
                  SYSTEMS & PRODUCT ARCHITECTURE
                </div>
              </div>
            </a>

            <div className="text-[11px] text-neutral-500 space-y-1 pt-1">
              <div>// STUDIO: RaddeR // FOUNDED: NETHERLANDS</div>
              <div>// BUILT WITH: ANTIGRAVITY AGENTIC IDE + REACT + TAILWIND</div>
            </div>
          </div>

          {/* Quick Navigation & Back to top */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end md:items-start gap-10 sm:gap-16">
            <div className="space-y-2">
              <div className="text-neutral-950 font-bold uppercase tracking-wider text-[11px]">
                MENU
              </div>
              <div className="flex flex-col space-y-2.5 font-mono text-xs">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('manifest');
                  }}
                  className="inline-flex items-center gap-2 hover:text-neutral-950 transition-colors text-left cursor-pointer group"
                >
                  <RadderNavIcon id="manifest" size={14} strokeWidth={2} className="text-neutral-500 group-hover:text-neutral-950 transition-colors" />
                  <span>Manifest</span>
                </a>
                <a
                  href="/cases"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('cases');
                  }}
                  className="inline-flex items-center gap-2 hover:text-neutral-950 transition-colors text-left cursor-pointer group"
                >
                  <RadderNavIcon id="cases" size={14} strokeWidth={2} className="text-neutral-500 group-hover:text-neutral-950 transition-colors" />
                  <span>Cases</span>
                </a>
                <a
                  href="/over-ons"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('over-ons');
                  }}
                  className="inline-flex items-center gap-2 hover:text-neutral-950 transition-colors text-left cursor-pointer group"
                >
                  <RadderNavIcon id="over-ons" size={14} strokeWidth={2} className="text-neutral-500 group-hover:text-neutral-950 transition-colors" />
                  <span>Over Ons</span>
                </a>
                <a
                  href="/sparren"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav('sparren');
                  }}
                  className="inline-flex items-center gap-2 hover:text-neutral-950 transition-colors text-left cursor-pointer group"
                >
                  <RadderNavIcon id="sparren" size={14} strokeWidth={2} className="text-neutral-500 group-hover:text-neutral-950 transition-colors" />
                  <span>Sparren</span>
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs text-neutral-600 hover:text-neutral-950 transition-colors group cursor-pointer pt-0 sm:pt-6"
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
