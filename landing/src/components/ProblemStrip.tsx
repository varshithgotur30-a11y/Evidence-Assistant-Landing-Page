import { PROBLEM_STRIP } from '../content';
import { AlertCircle, Clock, ShieldX } from 'lucide-react';

export const ProblemStrip = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'conflation':
        return <AlertCircle className="w-5 h-5 text-black dark:text-white" />;
      case 'inconsistency':
        return <Clock className="w-5 h-5 text-black dark:text-white" />;
      case 'assumptions':
        return <ShieldX className="w-5 h-5 text-black dark:text-white" />;
      default:
        return <AlertCircle className="w-5 h-5 text-black dark:text-white" />;
    }
  };

  return (
    <section className="py-16 md:py-20 bg-neutral-50 dark:bg-slate-950/50 border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-slate-400">
            The problem
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white mt-2">
            Why reviewing damage claims is so difficult
          </h2>
          <p className="text-neutral-700 dark:text-slate-300 text-base mt-3">
            Marketplaces receive thousands of claims where upset buyer messages make it hard to see what the photos actually show.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PROBLEM_STRIP.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-slate-800">
                    {getIcon(item.id)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-slate-800 text-black dark:text-white border border-slate-200 dark:border-slate-700">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-700 dark:text-slate-300 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2">
                <span className="rounded-full px-2.5 py-0.5 text-xs font-bold uppercase bg-black text-white dark:bg-white dark:text-black">
                  {item.impactType}
                </span>
                <span className="text-xs text-neutral-700 dark:text-slate-300 font-medium">
                  {item.impactLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
