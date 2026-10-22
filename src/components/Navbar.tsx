import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { RadderLogo } from './RadderLogo';
import { RadderWordmark } from './RadderWordmark';

export type PageId = 'manifest' | 'cases' | 'over-ons' | 'sparren';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; name: string }[] = [
    { id: 'manifest', name: 'Manifest' },
    { id: 'cases', name: 'Cases' },
    { id: 'over-ons', name: 'Over Ons' },
    { id: 'sparren', name: 'Sparren' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f8f7f4]/95 backdrop-blur-md border-b border-neutral-300/80 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Side: Clean Studio Typographic Identity & Navigation Links */}
          <div className="flex items-center gap-8 lg:gap-12">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('manifest');
              }}
              className="flex flex-col text-left group cursor-pointer"
              title="RaddeR — Naar Manifest"
            >
              <RadderWordmark
                height={48}
                className="text-neutral-950 group-hover:text-neutral-700 transition-colors"
                color="#0a0a0a"
                glow={false}
              />
              <span className="text-[10px] sm:text-[11px] font-mono text-neutral-600 tracking-wider uppercase mt-1 font-semibold group-hover:text-neutral-900 transition-colors">
                Systems & Product Architecture
              </span>
            </a>

            {/* Desktop Navigation Links: Manifest | Cases | Over Ons | Sparren */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                const path = link.id === 'manifest' ? '/' : `/${link.id}`;
                return (
                  <a
                    key={link.id}
                    href={path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.id);
                    }}
                    className={`text-xs uppercase tracking-wider font-mono transition-all px-4 py-2 rounded-xl cursor-pointer ${
                      isActive
                        ? 'text-neutral-950 bg-black/5 font-bold border border-neutral-300/90 shadow-sm'
                        : 'text-neutral-600 hover:text-neutral-950 hover:bg-black/[0.03] border border-transparent'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Right Side: Pure Vector Re-Drawn RaddeR Logo */}
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('manifest');
              }}
              title="RaddeR — Naar Manifest"
              className="relative flex items-center justify-center p-1.5 rounded-2xl hover:bg-black/[0.04] transition-all group cursor-pointer"
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <RadderLogo
                  size={96}
                  variant="vector"
                  glow={false}
                  color="#0a0a0a"
                  className="text-neutral-950"
                />
              </div>
            </a>

            {/* Mobile hamburger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white border border-neutral-300 text-neutral-800 hover:text-black cursor-pointer"
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
        <div className="lg:hidden bg-[#f8f7f4] border-b border-neutral-300 px-6 py-6 mt-4 space-y-4 shadow-lg">
          <div className="flex flex-col space-y-2 font-mono text-sm text-left">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              const path = link.id === 'manifest' ? '/' : `/${link.id}`;
              return (
                <a
                  key={link.id}
                  href={path}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    onNavigate(link.id);
                  }}
                  className={`text-left py-2.5 px-3 rounded-lg border-b border-neutral-200 transition-colors cursor-pointer ${
                    isActive
                      ? 'text-neutral-950 bg-black/5 font-bold'
                      : 'text-neutral-600 hover:text-neutral-950'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};
