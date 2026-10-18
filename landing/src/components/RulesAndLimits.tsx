import { RULES_AND_LIMITS } from '../content';
import { ShieldBan, UserCheck2, AlertCircle } from 'lucide-react';

export const RulesAndLimits = () => {
  return (
    <section
      id="limits"
      className="py-16 md:py-20 scroll-mt-24 bg-white dark:bg-slate-900 text-black dark:text-white border-t border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-neutral-100 dark:bg-slate-800 text-black dark:text-white border border-neutral-300 dark:border-slate-700 mb-3">
            <ShieldBan className="w-3.5 h-3.5" />
            <span>Hard limits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white">
            What C12 will never do
          </h2>
          <p className="text-neutral-700 dark:text-slate-300 text-base mt-2">
            The tool is built to help your team see evidence clearly — not to make decisions for them. Here are the things it is designed to never do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {RULES_AND_LIMITS.map((rule, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-xl bg-neutral-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-black dark:hover:border-slate-500 transition-all flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3 text-black dark:text-white font-bold text-lg mb-3">
                  <div className="p-2 rounded-lg bg-neutral-200 dark:bg-slate-700 border border-neutral-300 dark:border-slate-600 text-black dark:text-white">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <span>{rule.prohibition}</span>
                </div>

                <p className="text-sm text-neutral-700 dark:text-slate-200 leading-relaxed mb-6 font-normal">
                  {rule.explanation}
                </p>
              </div>

              {/* Who is in charge */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700/60 bg-white dark:bg-slate-900/60 -mx-6 -mb-6 p-4 rounded-b-xl flex items-start gap-3">
                <UserCheck2 className="w-4 h-4 text-black dark:text-white mt-0.5 flex-shrink-0" />
                <div className="text-xs text-neutral-800 dark:text-slate-200 font-medium">
                  <span className="font-bold text-black dark:text-white">Your team: </span>
                  {rule.humanRole}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Commitment Banner */}
        <div className="mt-10 p-5 rounded-xl bg-neutral-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="text-sm text-neutral-800 dark:text-slate-200">
            <span className="font-bold text-black dark:text-white">Our commitment:</span> C12 gives your team clearer information — it never makes a judgement call on its own. Your customers and your team stay in control.
          </div>
          <a
            href="#signup"
            className="px-4 py-2 text-xs font-semibold text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded-lg whitespace-nowrap transition-colors"
          >
            Read the pilot guidelines
          </a>
        </div>
      </div>
    </section>
  );
};
