import { useState } from 'react';
import { WORKFLOW_STEPS } from '../content';
import {
  UploadCloud,
  Cpu,
  UserCheck2,
  FileCheck,
  CheckCircle,
  ArrowRight,
} from 'lucide-react';

export const HowItWorks = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <UploadCloud className="w-5 h-5" />;
      case 1:
        return <Cpu className="w-5 h-5" />;
      case 2:
        return <UserCheck2 className="w-5 h-5" />;
      case 3:
        return <FileCheck className="w-5 h-5" />;
      default:
        return <CheckCircle className="w-5 h-5" />;
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 scroll-mt-24 relative overflow-hidden bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-slate-400">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white mt-2">
            Four simple steps
          </h2>
          <p className="text-neutral-700 dark:text-slate-300 text-base mt-3">
            From claim received to case closed — your reviewer stays in control at every step.
          </p>
        </div>

        {/* Step Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {WORKFLOW_STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-neutral-100 dark:bg-slate-800 border-black dark:border-white shadow-xs'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-black dark:text-white' : 'text-neutral-400 dark:text-slate-500'
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg ${
                      isActive
                        ? 'bg-black text-white dark:bg-white dark:text-black'
                        : 'bg-neutral-100 dark:bg-slate-800 text-neutral-600 dark:text-slate-400'
                    }`}
                  >
                    {getStepIcon(idx)}
                  </div>
                </div>
                <div className="text-xs font-bold text-neutral-500 dark:text-slate-400 uppercase tracking-wider mb-0.5">
                  {step.badge}
                </div>
                <div className="text-sm font-bold text-black dark:text-white line-clamp-2">
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Details Card */}
        <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-neutral-100 dark:bg-slate-800 text-black dark:text-white border border-neutral-300 dark:border-slate-700">
                <span>Step {WORKFLOW_STEPS[activeStepIndex].stepNumber}</span>
                <span>•</span>
                <span>{WORKFLOW_STEPS[activeStepIndex].badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white">
                {WORKFLOW_STEPS[activeStepIndex].title}
              </h3>

              <p className="text-base text-neutral-700 dark:text-slate-300 leading-relaxed font-normal">
                {WORKFLOW_STEPS[activeStepIndex].summary}
              </p>

              <div className="space-y-3 pt-2">
                <div className="text-xs font-bold text-black dark:text-white uppercase tracking-wider">
                  What it does:
                </div>
                <ul className="space-y-2">
                  {WORKFLOW_STEPS[activeStepIndex].details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-neutral-800 dark:text-slate-200">
                      <CheckCircle className="w-4 h-4 text-neutral-400 dark:text-slate-500 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveStepIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black dark:text-white underline hover:opacity-80"
                >
                  <span>Next Step ({WORKFLOW_STEPS[(activeStepIndex + 1) % WORKFLOW_STEPS.length].title})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Visual Callout Graphic */}
            <div className="lg:col-span-5 bg-neutral-50 dark:bg-slate-950 p-6 rounded-xl border border-slate-200 dark:border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800 text-xs">
                <span className="font-bold text-black dark:text-white">
                  Step details
                </span>
                <span className="font-mono text-black dark:text-white font-bold">
                  ACTIVE
                </span>
              </div>

              {activeStepIndex === 0 && (
                <div className="space-y-3 text-xs text-neutral-800 dark:text-slate-300">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 font-mono text-xs">
                    <span className="text-neutral-400">// Example API call</span><br />
                    POST /api/cases<br />
                    - photos: [image_1.webp, image_2.webp]<br />
                    - buyer_message: &quot;Package arrived...&quot;<br />
                    - order_id: &quot;SYN-8921-EL&quot;
                  </div>
                  <p className="text-neutral-700 dark:text-slate-300 text-sm">
                    Original photos are stored safely and never changed.
                  </p>
                </div>
              )}

              {activeStepIndex === 1 && (
                <div className="space-y-3 text-xs text-neutral-800 dark:text-slate-300">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 font-mono text-neutral-900 dark:text-white">
                    What the tool found:<br />
                    ✓ Crack near the corner of the screen<br />
                    ✓ Small dent on the metal edge<br />
                    ⚠️ Missing: no photo of the delivery box
                  </div>
                  <p className="text-neutral-700 dark:text-slate-300 text-sm">
                    Guesses are never made — anything unclear is marked as unknown.
                  </p>
                </div>
              )}

              {activeStepIndex === 2 && (
                <div className="space-y-3 text-xs text-neutral-800 dark:text-slate-300">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                    <div className="font-bold text-black dark:text-white mb-1">Reviewer screen</div>
                    <div className="text-neutral-500 dark:text-slate-400 mb-2">Sarah M. — Claims team lead</div>
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-slate-800 text-black dark:text-white text-xs font-bold border border-slate-200 dark:border-slate-700">
                        Approve findings
                      </span>
                      <span className="px-2 py-0.5 rounded bg-neutral-100 dark:bg-slate-800 text-black dark:text-white text-xs font-bold border border-slate-200 dark:border-slate-700">
                        Ask for more photos
                      </span>
                    </div>
                  </div>
                  <p className="text-neutral-700 dark:text-slate-300 text-sm">
                    Nothing is final until the reviewer clicks confirm.
                  </p>
                </div>
              )}

              {activeStepIndex === 3 && (
                <div className="space-y-3 text-xs text-neutral-800 dark:text-slate-300">
                  <div className="p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 font-mono">
                    Case #SYN-8921<br />
                    Reviewed by: Sarah M.<br />
                    Decision: Requested more photos<br />
                    Sent to: Support ticket #44102
                  </div>
                  <p className="text-neutral-700 dark:text-slate-300 text-sm">
                    Case record ready for courier dispute, seller query, or your records.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
