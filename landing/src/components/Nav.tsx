import { useState, useEffect } from 'react';
import { NAV_LINKS, SITE_METADATA } from '../content';
import { ThemeToggle } from './ThemeToggle';
import { ShieldCheck, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Nav = ({ onOpenPrivacy: _onOpenPrivacy, onOpenTerms: _onOpenTerms }: NavProps = {}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-200 flex items-center bg-white/85 dark:bg-slate-900/85 backdrop-blur border-b border-slate-200 dark:border-slate-800 ${
        isScrolled ? 'shadow-xs' : ''
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand Name */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-black dark:focus-visible:outline-white rounded-lg p-0.5 flex-shrink-0"
          >
            <div className="w-9 h-9 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex items-baseline gap-1.5 whitespace-nowrap">
              <span className="font-extrabold text-base tracking-tight text-black dark:text-white">
                C12 Evidence
              </span>
              <span className="hidden sm:inline text-xs text-neutral-500 dark:text-slate-400 font-medium">
                Assistant
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 xl:gap-7" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold whitespace-nowrap text-neutral-600 hover:text-black dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Theme Toggle + Black & White CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <a
              href="#signup"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded-lg shadow-xs transition-all whitespace-nowrap focus-visible:outline-2 focus-visible:outline-black dark:focus-visible:outline-white"
            >
              <span>Request pilot</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>
          </div>

          {/* Mobile / Tablet Hamburger Button */}
          <div className="flex xl:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-black dark:text-white rounded-lg focus-visible:outline-2 focus-visible:outline-black dark:focus-visible:outline-white"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-16 bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-150">
          <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-6 space-y-4 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 text-sm font-semibold text-neutral-800 hover:text-black dark:text-slate-200 dark:hover:text-white rounded-md hover:bg-neutral-100 dark:hover:bg-slate-800/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <a
                href="#signup"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full px-4 py-2.5 text-sm font-semibold text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded-lg shadow-xs transition-colors"
              >
                Request pilot
              </a>
              <p className="text-center text-xs text-neutral-500 dark:text-slate-400 pt-1">
                {SITE_METADATA.prototypeDisclaimer}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
