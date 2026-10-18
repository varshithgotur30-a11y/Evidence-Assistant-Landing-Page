import { useState } from 'react';
import { USE_CASES } from '../content';
import {
  PackageCheck,
  PackageX,
  HelpCircle,
  EyeOff,
  ArrowRight,
  ShieldAlert,
  Search,
} from 'lucide-react';
import { Panel } from './Panel';

export const UseCases = () => {
  const [selectedCaseIdx, setSelectedCaseIdx] = useState(0);

  const getCaseIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <PackageCheck className="w-5 h-5 text-black dark:text-white" />;
      case 1:
        return <PackageX className="w-5 h-5 text-black dark:text-white" />;
      case 2:
        return <HelpCircle className="w-5 h-5 text-black dark:text-white" />;
      case 3:
        return <EyeOff className="w-5 h-5 text-black dark:text-white" />;
      default:
        return <PackageCheck className="w-5 h-5" />;
    }
  };

  // Short tab labels so all four fit one line
  const shortLabels = ['Transit impact', 'Packaging only', "Doesn't work", 'Missing angles'];

  return (
    <section id="use-cases" className="py-16 md:py-20 scroll-mt-24 bg-neutral-50 dark:bg-slate-950/40 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-slate-400">
            Real-World Scenarios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white mt-2">
            Handling the Hardest Edge Cases
          </h2>
          <p className="text-neutral-700 dark:text-slate-300 text-base mt-3">
            Real support tickets are messy and incomplete. Here is how C12 navigates ambiguity without ungrounded guesses.
          </p>
        </div>

        {/* Tab Buttons – single scrollable row, equal pill style */}
        <div className="mx-auto flex max-w-4xl gap-2 overflow-x-auto pb-1 [scrollbar-width:none] mb-8 justify-center">
          {USE_CASES.map((uc, idx) => {
            const isSelected = idx === selectedCaseIdx;
            return (
              <button
                key={uc.scenario}
                type="button"
                onClick={() => setSelectedCaseIdx(idx)}
                className={`shrink-0 whitespace-nowrap inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
                  isSelected
                    ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                    : 'bg-white dark:bg-slate-900 text-neutral-800 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-black dark:hover:border-white'
                }`}
              >
                {getCaseIcon(idx)}
                <span>{shortLabels[idx] ?? uc.scenario}</span>
              </button>
            );
          })}
        </div>

        {/* Scenario Details – outer plain container, inner panels are the only bordered things */}
        <div className="max-w-4xl mx-auto rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
          {/* Header strip */}
          <div className="px-6 py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                {getCaseIcon(selectedCaseIdx)}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-slate-400 block">
                  Scenario {selectedCaseIdx + 1}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-black dark:text-white">
                  {USE_CASES[selectedCaseIdx].scenario}
                </h3>
              </div>
            </div>
            <span className="text-xs font-mono text-neutral-600 dark:text-slate-400 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700">
              Example scenario
            </span>
          </div>

          <div className="p-6 space-y-4">
            {/* Trigger */}
            <Panel accent="claim" label="Customer Claim Trigger">
              <div className="flex items-start gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-neutral-900 dark:text-slate-100 italic">
                  &quot;{USE_CASES[selectedCaseIdx].trigger}&quot;
                </p>
              </div>
            </Panel>

            {/* Observe + Flag grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
              <Panel accent="observe" label="What C12 Observes" className="h-full">
                <div className="flex items-start gap-2">
                  <Search className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-neutral-800 dark:text-slate-200 leading-relaxed">
                    {USE_CASES[selectedCaseIdx].whatToolObserves}
                  </p>
                </div>
              </Panel>

              <Panel accent="unknown" label="What C12 Flags as Unknown" className="h-full">
                <div className="flex items-start gap-2">
                  <HelpCircle className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-neutral-800 dark:text-slate-200 leading-relaxed">
                    {USE_CASES[selectedCaseIdx].whatToolFlags}
                  </p>
                </div>
              </Panel>
            </div>

            {/* Reviewer Action */}
            <Panel accent="neutral" label="Suggested Next Step">
              <div className="flex items-start sm:items-center justify-between gap-4 flex-col sm:flex-row">
                <p className="text-xs sm:text-sm text-neutral-800 dark:text-slate-200">
                  {USE_CASES[selectedCaseIdx].reviewerNextStep}
                </p>
                <a
                  href="#demo"
                  className="inline-flex items-center gap-1 text-xs font-bold text-black dark:text-white underline hover:opacity-80 whitespace-nowrap self-end sm:self-auto"
                >
                  <span>Try this case</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
};
