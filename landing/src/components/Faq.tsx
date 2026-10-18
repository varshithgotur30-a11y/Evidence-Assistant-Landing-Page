import { useState } from 'react';
import { FAQ_LIST } from '../content';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Safety & Limits', 'Privacy & Data', 'Workflow & Integration'];

  const filteredFaqs =
    activeCategory === 'All'
      ? FAQ_LIST
      : FAQ_LIST.filter((item) => item.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 scroll-mt-24 bg-neutral-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-slate-400">
            Questions &amp; answers
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white mt-1">
            Frequently asked questions
          </h2>
          <p className="text-neutral-700 dark:text-slate-300 text-base mt-2">
            Straight answers about what the tool does, how data is handled, and who is always in charge.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                activeCategory === cat
                  ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white shadow-xs'
                  : 'bg-white dark:bg-slate-900 text-neutral-800 dark:text-slate-300 hover:border-black dark:hover:border-white border-slate-200 dark:border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 py-3.5 text-left flex items-center justify-between gap-4 focus-visible:outline-2 focus-visible:outline-black dark:focus-visible:outline-white"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-black dark:text-white flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-black dark:text-white flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-neutral-500 dark:text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-black dark:text-white' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-neutral-800 dark:text-slate-200 leading-relaxed border-t border-slate-150 dark:border-slate-800 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-xs text-neutral-500 dark:text-slate-400 font-mono">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Note */}
        <div className="mt-10 text-center">
          <p className="text-sm text-neutral-700 dark:text-slate-300">
            Got a specific question not listed here?{' '}
            <a href="#signup" className="text-black dark:text-white font-bold underline">
              Send it to us via the pilot request form.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
