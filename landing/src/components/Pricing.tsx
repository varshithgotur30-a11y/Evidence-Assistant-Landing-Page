import { PRICING_HYPOTHESES } from '../content';
import { Check, Info, ArrowRight } from 'lucide-react';

interface PricingProps {
  onSelectPlan?: (planId: string) => void;
}

export const Pricing = ({ onSelectPlan }: PricingProps) => {
  return (
    <section id="pricing" className="py-16 md:py-24 scroll-mt-24 relative bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-slate-800 text-black dark:text-white border border-neutral-300 dark:border-slate-700 mb-3">
            <Info className="w-3.5 h-3.5" />
            <span>Transparent pilot pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white">
            Pricing plans
          </h2>
          <p className="text-neutral-700 dark:text-slate-300 text-base mt-3">
            Straightforward plans built around your order volume. Predictable monthly costs with zero lock-in during pilot cohorts.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16">
          {PRICING_HYPOTHESES.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                plan.isPopular
                  ? 'bg-white dark:bg-slate-900 border-2 border-black dark:border-white shadow-lg ring-1 ring-black/5 dark:ring-white/10'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-black text-white dark:bg-white dark:text-black text-[11px] font-bold uppercase tracking-wider shadow-xs">
                  Most Popular
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 dark:text-slate-400">
                    {plan.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold text-black dark:text-white mb-2">
                  {plan.name}
                </h3>

                <p className="text-xs text-neutral-600 dark:text-slate-300 mb-5 leading-relaxed min-h-[36px]">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="p-4 rounded-xl bg-neutral-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-5">
                  <div className="flex items-baseline gap-1.5 flex-wrap">
                    <span className="text-3xl font-black text-black dark:text-white tracking-tight">
                      {plan.priceHeadline}
                    </span>
                    {plan.id !== 'custom' && (
                      <span className="text-xs font-semibold text-neutral-500 dark:text-slate-400">
                        / month
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-neutral-600 dark:text-slate-400 mt-1 font-medium">
                    {plan.priceNote}
                  </div>
                </div>

                {/* Volume & Cases Summary Box */}
                <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-3.5 mb-5 bg-neutral-50/60 dark:bg-slate-950/50 space-y-2.5 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200/80 dark:border-slate-800">
                    <span className="text-neutral-500 dark:text-slate-400 font-medium">Reviewed cases included:</span>
                    <span className="font-bold text-black dark:text-white">{plan.casesIncluded}</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-slate-200/80 dark:border-slate-800">
                    <span className="text-neutral-500 dark:text-slate-400 font-medium">Extra case:</span>
                    <span className="font-bold text-black dark:text-white">{plan.extraCasePrice}</span>
                  </div>
                  <div className="pt-0.5">
                    <span className="text-neutral-500 dark:text-slate-400 block text-[11px] uppercase tracking-wider font-semibold mb-0.5">Best for:</span>
                    <span className="font-semibold text-black dark:text-white block leading-snug">{plan.bestFor}</span>
                  </div>
                </div>

                {/* Feature checklist */}
                <div className="space-y-2.5 mb-6">
                  <div className="text-xs font-bold text-black dark:text-white uppercase tracking-wider">
                    Included capabilities:
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-neutral-800 dark:text-slate-200">
                        <Check className="w-4 h-4 text-black dark:text-white flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#signup"
                  onClick={() => onSelectPlan && onSelectPlan(plan.id)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    plan.isPopular
                      ? 'bg-black hover:bg-neutral-800 text-white dark:bg-white dark:text-black dark:hover:bg-neutral-200 shadow-xs'
                      : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-black dark:text-white'
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <p className="text-center text-xs text-neutral-500 dark:text-slate-400 mt-2.5">
                  No credit card required · Human confirmation guaranteed
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Comparison Table */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900 shadow-xs">
          <div className="px-6 py-4 bg-neutral-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
            <h3 className="text-base font-bold text-black dark:text-white">
              Plan Comparison Overview
            </h3>
            <p className="text-xs text-neutral-600 dark:text-slate-400 mt-0.5">
              Quick comparison of pricing tiers, case allowances, and order brackets.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 bg-neutral-100/70 dark:bg-slate-950/70">
                  <th scope="col" className="py-3 px-4 sm:px-6 font-bold text-black dark:text-white">
                    Plan name
                  </th>
                  <th scope="col" className="py-3 px-4 sm:px-6 font-bold text-black dark:text-white">
                    Price
                  </th>
                  <th scope="col" className="py-3 px-4 sm:px-6 font-bold text-black dark:text-white">
                    Reviewed cases included
                  </th>
                  <th scope="col" className="py-3 px-4 sm:px-6 font-bold text-black dark:text-white">
                    Extra case
                  </th>
                  <th scope="col" className="py-3 px-4 sm:px-6 font-bold text-black dark:text-white">
                    Best for
                  </th>
                  <th scope="col" className="py-3 px-4 sm:px-6 font-bold text-right text-black dark:text-white">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 text-neutral-800 dark:text-slate-200">
                {PRICING_HYPOTHESES.map((plan) => (
                  <tr
                    key={plan.id}
                    className={`transition-colors hover:bg-neutral-50 dark:hover:bg-slate-800/40 ${
                      plan.isPopular ? 'bg-neutral-50/50 dark:bg-slate-800/20 font-medium' : ''
                    }`}
                  >
                    <td className="py-4 px-4 sm:px-6 font-bold text-black dark:text-white whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span>{plan.name}</span>
                        {plan.isPopular && (
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-bold uppercase tracking-wider">
                            Popular
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="py-4 px-4 sm:px-6 font-semibold text-black dark:text-white whitespace-nowrap">
                      {plan.priceHeadline}
                    </td>
                    <td className="py-4 px-4 sm:px-6 whitespace-nowrap">
                      {plan.casesIncluded}
                    </td>
                    <td className="py-4 px-4 sm:px-6 whitespace-nowrap font-medium">
                      {plan.extraCasePrice}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-neutral-700 dark:text-slate-300">
                      {plan.bestFor}
                    </td>
                    <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                      <a
                        href="#signup"
                        onClick={() => onSelectPlan && onSelectPlan(plan.id)}
                        className={`inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold transition-all ${
                          plan.isPopular
                            ? 'bg-black text-white hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200'
                            : 'bg-neutral-100 hover:bg-neutral-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-black dark:text-white'
                        }`}
                      >
                        <span>Select</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
