import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { EmmerLogo } from './EmmerLogo';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cases', href: '#cases' },
    { name: 'Motor vs. Sausje', href: '#vergelijker' },
    { name: 'Manifest', href: '#manifest' },
    { name: 'Driehoek', href: '#driehoek' },
    { name: 'Tech Radar', href: '#tech' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090d]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Clean Studio Identity: EMMER */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 flex items-center justify-center p-0.5 transition-transform group-hover:scale-105">
              <EmmerLogo size={38} variant="retina" />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-black text-white tracking-widest text-lg leading-none font-mono">
                EMMER
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase mt-1">
                Systems & Product Architecture
              </span>
            </div>
          </a>

          {/* Clean Top-Right: Minimalist Navigation & Single Action */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-wider font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Single clean minimalist contact button */}
            <button
              onClick={onOpenContact}
              className="px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold rounded-lg bg-white text-black hover:bg-zinc-200 transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Sparren</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-white/15 text-zinc-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0e14] border-b border-white/15 px-6 py-6 mt-3 space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-zinc-300 hover:text-white py-1.5 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full mt-4 py-3 text-center text-xs font-mono uppercase tracking-wider font-bold rounded-lg bg-white text-black hover:bg-zinc-200"
          >
            Plan een Sparringsessie
          </button>
        </div>
      )}
    </header>
  );
};
