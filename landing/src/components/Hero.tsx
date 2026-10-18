import { useState } from 'react';
import { HERO_CONTENT } from '../content';
import {
  ShieldAlert,
  CheckCircle2,
  HelpCircle,
  UserCheck,
  ArrowRight,
  FileCheck2,
  Camera,
  Layers,
} from 'lucide-react';
import { Panel } from './Panel';

export const Hero = () => {
  const [activeTab, setActiveTab] = useState<'split' | 'raw' | 'extracted'>('split');

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Monochrome Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-slate-800 text-black dark:text-white border border-neutral-300 dark:border-slate-700 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{HERO_CONTENT.badge}</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black dark:text-white leading-[1.12]">
            Separate what customers say from{' '}
            <span className="underline decoration-2 underline-offset-4 decoration-black dark:decoration-white">
              what the evidence shows.
            </span>
          </h1>

          {/* Subhead */}
          <p className="text-lg sm:text-xl text-neutral-700 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            {HERO_CONTENT.subhead}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="#signup"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded-xl shadow-xs transition-all focus-visible:outline-2 focus-visible:outline-black dark:focus-visible:outline-white"
            >
              <span>{HERO_CONTENT.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-black dark:text-white bg-white hover:bg-neutral-100 dark:bg-slate-800 dark:hover:bg-slate-700 border border-black dark:border-slate-700 rounded-xl shadow-xs transition-all focus-visible:outline-2 focus-visible:outline-black dark:focus-visible:outline-white"
            >
              <span>{HERO_CONTENT.ctaSecondary}</span>
            </a>
          </div>

          {/* Trust checks – wrap evenly */}
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate-700 dark:text-slate-300 font-medium pt-2">
            {HERO_CONTENT.trustNotes.map((note) => (
              <li key={note} className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                <span>{note}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Interactive Workspace Preview */}
        <div className="mt-12 sm:mt-14 max-w-5xl mx-auto">
          {/* Outer: plain header-strip container, no nested border card */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
            {/* Top Bar */}
            <div className="bg-slate-50 dark:bg-slate-950 px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-neutral-300 dark:bg-slate-700" />
                </div>
                <span className="text-xs font-mono text-neutral-700 dark:text-slate-300 ml-2">
                  example_case_8921
                </span>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-white dark:bg-slate-800 text-black dark:text-white font-medium border border-neutral-300 dark:border-slate-700">
                  Example case — not real data
                </span>
              </div>

              {/* View Switcher */}
              <div className="flex items-center bg-white dark:bg-slate-800 rounded-lg p-0.5 border border-slate-200 dark:border-slate-700 text-xs font-semibold">
                {(['split', 'raw', 'extracted'] as const).map((tab) => {
                  const labels = { split: 'Side by side', raw: 'Buyer message', extracted: 'What we see' };
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`px-3 py-1 rounded-md transition-all ${
                        activeTab === tab
                          ? 'bg-black text-white dark:bg-white dark:text-black shadow-xs'
                          : 'text-neutral-700 dark:text-slate-300 hover:text-black dark:hover:text-white'
                      }`}
                    >
                      {labels[tab]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-5 sm:p-7">
              {activeTab === 'raw' && (
                <div className="space-y-4 animate-in fade-in duration-150">
                  <Panel accent="neutral" label="Buyer message — ticket #8921">
                    <p className="text-sm text-neutral-900 dark:text-slate-100 italic leading-relaxed">
                      &quot;Opened the sealed package right after delivery and the screen was completely broken. The box had no marks — your warehouse must have sent a broken phone! I want a full refund!&quot;
                    </p>
                  </Panel>
                  <p className="text-sm text-neutral-700 dark:text-slate-400 font-semibold">
                    ℹ️ Note: The buyer&apos;s opinion (&quot;must have sent a broken phone&quot;) is kept separate from what the photos actually show.
                  </p>
                </div>
              )}

              {activeTab === 'extracted' && (
                <div className="space-y-3 animate-in fade-in duration-150">
                  <Panel accent="observe" label="What we can see in the photos">
                    <ul className="text-sm text-neutral-900 dark:text-slate-200 space-y-1.5 list-disc list-inside">
                      <li>Crack spreading from the corner of the screen.</li>
                      <li>Small dent on the metal edge near the crack.</li>
                      <li>Purple patch visible under the cracked screen area.</li>
                    </ul>
                  </Panel>
                </div>
              )}

              {activeTab === 'split' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 animate-in fade-in duration-150">
                  {/* Left Column: Input + Photo block */}
                  <div className="md:col-span-5 space-y-4">
                    <Panel accent="neutral" label="Buyer message" badge="Item: PHN-OLED-67">
                      <p className="text-xs text-neutral-800 dark:text-slate-200 line-clamp-3 italic">
                        &quot;Opened the package and the screen was shattered. I never dropped it — the box looked fine outside...&quot;
                      </p>
                    </Panel>

                    {/* Photo block: light frame, dark illustration inside small square */}
                    <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4">
                      <div className="flex items-center justify-between text-xs text-neutral-500 dark:text-slate-400 mb-3">
                        <span className="inline-flex items-center gap-1 font-mono">
                          <Camera className="w-3.5 h-3.5 text-cyan-500" /> photo_evidence_01.jpg
                        </span>
                        <span className="bg-white dark:bg-slate-800 px-2 py-0.5 rounded-md border border-slate-200 dark:border-slate-700 font-mono text-neutral-600 dark:text-slate-400">
                          Synthetic
                        </span>
                      </div>

                      <div className="flex items-center gap-4">
                        {/* Compact dark illustration square */}
                        <div className="w-24 h-20 flex-shrink-0 rounded-lg bg-neutral-900 border border-neutral-700 flex items-center justify-center overflow-hidden">
                          <svg
                            className="w-16 h-14 text-cyan-300"
                            viewBox="0 0 100 80"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.2"
                            strokeLinecap="round"
                            aria-hidden="true"
                          >
                            <path d="M 85 15 L 70 28 L 50 35 L 20 40" />
                            <path d="M 70 28 L 65 50 L 45 60" />
                            <path d="M 85 15 L 90 35 L 75 55" />
                            <path d="M 85 15 L 60 18 L 40 22" />
                            <circle cx="85" cy="15" r="2.5" fill="#38bdf8" />
                          </svg>
                        </div>

                        <div className="text-xs text-neutral-600 dark:text-slate-400 space-y-1">
                          <div className="text-neutral-900 dark:text-slate-100 font-semibold">
                            Crack pattern near corner
                          </div>
                          <div>Radial fracture lines in display glass</div>
                          <div>Original file unchanged</div>
                          <div className="font-mono text-neutral-400 dark:text-slate-500">1920×1080 · Unaltered</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: AI Triage */}
                  <div className="md:col-span-7 space-y-3">
                    <Panel accent="claim" label="What the buyer said (not yet checked)">
                      <div className="flex items-start gap-2">
                        <ShieldAlert className="w-4 h-4 text-amber-600 dark:text-amber-500 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-neutral-800 dark:text-slate-200">
                          Buyer states item arrived pre-damaged inside sealed box; denies user drop.
                        </p>
                      </div>
                    </Panel>

                    <Panel accent="observe" label="What we can see in the photo">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-neutral-800 dark:text-slate-200">
                          Visible crack pattern near corner with radiating spiderweb glass fractures. Aluminum bezel compression discernible.
                        </p>
                      </div>
                    </Panel>

                    <Panel accent="unknown" label="What we cannot tell yet">
                      <div className="flex items-start gap-2">
                        <HelpCircle className="w-4 h-4 text-sky-600 dark:text-sky-400 mt-0.5 flex-shrink-0" />
                        <p className="text-xs text-neutral-800 dark:text-slate-200">
                          Outer carton condition not photographed; IMEI barcode not visible.
                        </p>
                      </div>
                    </Panel>

                    <Panel accent="neutral" label="Waiting for reviewer to decide">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <UserCheck className="w-4 h-4 text-black dark:text-white flex-shrink-0" />
                          <span className="text-xs font-bold text-black dark:text-white">
                            Reviewer Action Required
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-black dark:text-white bg-white dark:bg-slate-950 px-2 py-0.5 rounded border border-neutral-300 dark:border-slate-700">
                          Pending
                        </span>
                      </div>
                    </Panel>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Bar */}
            <div className="bg-slate-50 dark:bg-slate-950 px-5 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-neutral-600 dark:text-slate-300 font-mono">
              <span className="flex items-center gap-1.5 font-semibold text-black dark:text-white">
                <Layers className="w-4 h-4 text-black dark:text-white" />
                Case log: #SYN-8921
              </span>
              <span className="italic">
                <FileCheck2 className="w-3.5 h-3.5 inline mr-1" />
                No refunds issued automatically · A person approves every step
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
