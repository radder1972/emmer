import React, { useState, useEffect } from 'react';
import { Navbar, type PageId } from './components/Navbar';
import { ManifestPage } from './pages/ManifestPage';
import { CasesPage } from './pages/CasesPage';
import { AboutPage } from './pages/AboutPage';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  // Parse initial page from hash or default to 'manifest'
  const getInitialPage = (): PageId => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash === 'cases') return 'cases';
    if (hash === 'over-ons' || hash === 'overons' || hash === 'about') return 'over-ons';
    return 'manifest';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getInitialPage);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'cases') {
        setCurrentPage('cases');
      } else if (hash === 'over-ons' || hash === 'overons' || hash === 'about') {
        setCurrentPage('over-ons');
      } else {
        setCurrentPage('manifest');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openContact = () => {
    if (currentPage !== 'over-ons') {
      setCurrentPage('over-ons');
      window.location.hash = '#over-ons';
      // Wait for DOM to render then scroll to contact
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

      <main>
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

        {currentPage === 'over-ons' && <AboutPage />}
      </main>

      {/* Global Footer with direct page navigation */}
      <Footer onNavigate={navigateTo} onOpenContact={openContact} />
    </div>
  );
};

export default App;
