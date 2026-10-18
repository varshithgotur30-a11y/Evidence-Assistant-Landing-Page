import { FOOTER_CONTENT, NAV_LINKS, SITE_METADATA } from '../content';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer = ({ onOpenPrivacy, onOpenTerms }: FooterProps) => {
  return (
    <footer className="bg-white dark:bg-slate-950 text-neutral-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 text-sm py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shadow-xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-base text-black dark:text-white">
                {SITE_METADATA.name}
              </span>
            </div>
            <p className="text-neutral-600 dark:text-slate-300 max-w-sm text-sm leading-relaxed">
              {SITE_METADATA.description}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-black dark:text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Pilot Benchmark Suite: Active (v0.9)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
              Quick Navigation
            </div>
            <div className="grid grid-cols-2 gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-600 hover:text-black dark:text-slate-300 dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal and Compliance */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-black dark:text-white">
              Governance &amp; Trust
            </div>
            <div className="space-y-2">
              <div>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="text-sm text-neutral-600 hover:text-black dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Privacy Policy</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={onOpenTerms}
                  className="text-sm text-neutral-600 hover:text-black dark:text-slate-300 dark:hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Terms of Evaluation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </button>
              </div>
              <div className="pt-1 text-xs text-neutral-500 dark:text-slate-400">
                Contact: <span className="text-black dark:text-slate-200 font-mono">pilot@c12-evidence.internal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Prototype & Synthetic Data Mandatory Disclaimer */}
        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-neutral-600 dark:text-slate-400">
          <div>
            <span className="font-bold text-black dark:text-amber-400">Disclaimer: </span>
            {FOOTER_CONTENT.disclaimer}
          </div>
          <div>{FOOTER_CONTENT.copyright}</div>
        </div>
      </div>
    </footer>
  );
};
