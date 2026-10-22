import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, type PageId } from './components/Navbar';
import { ManifestPage } from './pages/ManifestPage';
import { CasesPage } from './pages/CasesPage';
import { AboutPage } from './pages/AboutPage';
import { Footer } from './components/Footer';

const PAGE_TITLES: Record<PageId, string> = {
  manifest: 'RaddeR — Manifest | Systems & Product Architecture',
  cases: 'RaddeR — Cases | Geselecteerde Domein-Architecturen',
  'over-ons': 'RaddeR — Over Ons | De Interdisciplinaire Driehoek & Stack',
};

const resolvePageFromLocation = (): PageId => {
  // Check pathname first (e.g. /cases, /over-ons, /manifest)
  const path = window.location.pathname.toLowerCase().replace(/^\/|\/$/g, '');
  if (path === 'cases') return 'cases';
  if (path === 'over-ons' || path === 'overons' || path === 'about') return 'over-ons';
  if (path === 'manifest') return 'manifest';

  // Fallback to hash if on root or static file (e.g. /#cases)
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash === 'cases') return 'cases';
  if (hash === 'over-ons' || hash === 'overons' || hash === 'about') return 'over-ons';

  return 'manifest';
};

export const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageId>(resolvePageFromLocation);

  const updateMeta = useCallback((page: PageId) => {
    document.title = PAGE_TITLES[page] || PAGE_TITLES.manifest;
  }, []);

  // Sync title and handle browser back/forward buttons
  useEffect(() => {
    updateMeta(currentPage);

    const handlePopState = () => {
      const targetPage = resolvePageFromLocation();
      setCurrentPage(targetPage);
      updateMeta(targetPage);
      window.scrollTo(0, 0);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [currentPage, updateMeta]);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    const targetPath = page === 'manifest' ? '/' : `/${page}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ page }, '', targetPath);
    }
    updateMeta(page);
    // Instant switch to top of the page without simulated single-page scroll
    window.scrollTo(0, 0);
  };

  const openContact = () => {
    if (currentPage !== 'over-ons') {
      setCurrentPage('over-ons');
      window.history.pushState({ page: 'over-ons' }, '', '/over-ons');
      updateMeta('over-ons');
      window.scrollTo(0, 0);
      setTimeout(() => {
        const contactElem = document.getElementById('contact');
        if (contactElem) {
          contactElem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const contactElem = document.getElementById('contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f7f4] text-neutral-900 selection:bg-black selection:text-white antialiased font-sans">
      {/* Fixed Navigation Bar with exact items: Manifest | Cases | Over Ons */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenContact={openContact}
      />

      <main key={currentPage} className="animate-fade-in">
        {currentPage === 'manifest' && (
          <ManifestPage
            onNavigateToCases={() => navigateTo('cases')}
            onNavigateToAbout={() => navigateTo('over-ons')}
            onOpenContact={openContact}
          />
        )}

        {currentPage === 'cases' && (
          <CasesPage
            onOpenContact={openContact}
            onNavigateToAbout={() => navigateTo('over-ons')}
          />
        )}

        {currentPage === 'over-ons' && (
          <AboutPage onNavigateToCases={() => navigateTo('cases')} />
        )}
      </main>

      {/* Global Footer with direct page navigation */}
      <Footer onNavigate={navigateTo} onOpenContact={openContact} />
    </div>
  );
};

export default App;
