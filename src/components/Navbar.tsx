import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Manifest', href: '#manifest' },
    { name: 'De Driehoek', href: '#driehoek' },
    { name: 'Cases', href: '#cases' },
    { name: 'Motor vs. Sausje', href: '#vergelijker' },
    { name: 'Tech Radar', href: '#tech' },
    { name: 'Roadmap Bouwer', href: '#calculator' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b0d12]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/50'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/20 bg-[#16181f] flex items-center justify-center shadow-lg group-hover:border-emerald-400/50 transition-colors">
              <img
                src="/logo-mr.png"
                alt="MR Logo"
                className="w-full h-full object-cover p-0.5 filter contrast-125"
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white tracking-tight text-base group-hover:text-emerald-400 transition-colors">
                  MATTHIAS RADDER
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/10 text-neutral-300 border border-white/10">
                  MR STUDIO
                </span>
              </div>
              <span className="text-[11px] font-mono text-neutral-400">
                Product Architecture & Domain Engineering
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-wider font-mono text-neutral-400 hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-emerald-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Status & Action */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="hidden xl:inline">Q4/Q1 Capaciteit:</span> Beschikbaar voor Sparren
            </div>

            <button
              onClick={onOpenContact}
              className="px-4 py-2 text-xs font-mono uppercase tracking-wider font-semibold rounded-md bg-white text-black hover:bg-neutral-200 transition-all shadow-md hover:shadow-white/10 flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Sparren over Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e14] border-b border-white/10 px-6 py-6 mt-3 space-y-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-4 w-fit">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Beschikbaar voor Sparren
          </div>
          <div className="flex flex-col space-y-3 font-mono text-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-300 hover:text-emerald-400 py-1 border-b border-white/5"
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
            className="w-full mt-4 py-3 text-center text-xs font-mono uppercase tracking-wider font-semibold rounded-md bg-white text-black hover:bg-neutral-200"
          >
            Plan een Sparringsessie
          </button>
        </div>
      )}
    </header>
  );
};
