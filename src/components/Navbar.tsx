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
      setScrolled(window.scrollY > 20);
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
          ? 'bg-[#08090d]/95 backdrop-blur-md border-b border-white/10 py-2.5 shadow-2xl shadow-black/90'
          : 'bg-transparent py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Side: Clean Studio Typographic Identity & Navigation Links */}
          <div className="flex items-center gap-8 lg:gap-12">
            <a href="#" className="flex flex-col text-left group">
              <span className="font-black text-white tracking-widest text-xl font-mono leading-none group-hover:text-zinc-200 transition-colors">
                EMMER
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase mt-1">
                Systems & Product Architecture
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
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
          </div>

          {/* Right Side: Sparren CTA + Pure Vector Re-Drawn EMMER Logo */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={onOpenContact}
              className="hidden sm:flex px-4 py-2 text-xs font-mono uppercase tracking-wider font-bold rounded-lg bg-white text-black hover:bg-zinc-200 transition-all items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Sparren</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Pure Mathematical Vector Logo on the Right */}
            <a
              href="#"
              title="EMMER — Terug naar boven"
              className="relative flex items-center justify-center p-1 rounded-xl hover:bg-white/5 transition-all group cursor-pointer"
            >
              <div className="transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.35)]">
                <EmmerLogo
                  size={scrolled ? 56 : 68}
                  variant="vector"
                  glow={true}
                  className="transition-all duration-300"
                />
              </div>
            </a>

            {/* Mobile hamburger */}
            <div className="flex items-center lg:hidden">
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
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c0e14] border-b border-white/15 px-6 py-6 mt-3 space-y-4">
          <div className="flex flex-col space-y-3 font-mono text-sm text-left">
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
