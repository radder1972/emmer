import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { RadderLogo } from './RadderLogo';
import { RadderWordmark } from './RadderWordmark';

export type PageId = 'manifest' | 'cases' | 'over-ons';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContact,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageId; name: string }[] = [
    { id: 'manifest', name: 'Manifest' },
    { id: 'cases', name: 'Cases' },
    { id: 'over-ons', name: 'Over Ons' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090d]/95 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/90'
          : 'bg-transparent py-5 sm:py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Side: Clean Studio Typographic Identity & Navigation Links */}
          <div className="flex items-center gap-8 lg:gap-12">
            <button
              onClick={() => onNavigate('manifest')}
              className="flex flex-col text-left group cursor-pointer"
              title="RaddeR — Naar Manifest"
            >
              <RadderWordmark
                height={scrolled ? 36 : 48}
                className="text-white group-hover:text-zinc-200 transition-all duration-300"
                glow={true}
              />
              <span className="text-[10px] sm:text-[11px] font-mono text-zinc-400 tracking-wider uppercase mt-1 font-semibold group-hover:text-zinc-300 transition-colors">
                Systems & Product Architecture
              </span>
            </button>

            {/* Desktop Navigation Links: Manifest | Cases | Over Ons */}
            <nav className="hidden lg:flex items-center gap-3">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => onNavigate(link.id)}
                    className={`text-xs uppercase tracking-wider font-mono transition-all px-4 py-2 rounded-xl cursor-pointer ${
                      isActive
                        ? 'text-white bg-white/15 font-bold border border-white/30 shadow-inner'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Right Side: Sparren CTA + Pure Vector Re-Drawn RaddeR Logo */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenContact}
              className="hidden sm:flex px-4 py-2.5 text-xs font-mono uppercase tracking-wider font-bold rounded-lg bg-white text-black hover:bg-zinc-200 transition-all items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Sparren</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Pure Mathematical Vector Logo on the Right */}
            <button
              onClick={() => onNavigate('manifest')}
              title="RaddeR — Naar Manifest"
              className="relative flex items-center justify-center p-1.5 rounded-2xl hover:bg-white/5 transition-all group cursor-pointer"
            >
              <div className="transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_35px_rgba(255,255,255,0.45)]">
                <RadderLogo
                  size={scrolled ? 74 : 96}
                  variant="vector"
                  glow={true}
                  className="text-white transition-all duration-300"
                />
              </div>
            </button>

            {/* Mobile hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-zinc-900 border border-white/15 text-zinc-300 hover:text-white cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e14] border-b border-white/15 px-6 py-6 mt-3 space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-sm text-left">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate(link.id);
                  }}
                  className={`text-left py-2 px-3 rounded-lg border-b border-white/5 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-white bg-white/10 font-bold'
                      : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full mt-4 py-3 text-center text-xs font-mono uppercase tracking-wider font-bold rounded-lg bg-white text-black hover:bg-zinc-200 cursor-pointer"
          >
            Plan een Sparringsessie
          </button>
        </div>
      )}
    </header>
  );
};
