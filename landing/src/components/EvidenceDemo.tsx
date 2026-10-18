import { useState } from 'react';
import { DEMO_CASES } from '../content';
import {
  CheckCircle2,
  HelpCircle,
  MailQuestion,
  Copy,
  Check,
  Smartphone,
  Speaker,
  Utensils,
  UserCheck,
} from 'lucide-react';
import { Panel } from './Panel';

export const EvidenceDemo = () => {
  const [selectedCaseId, setSelectedCaseId] = useState(DEMO_CASES[0].id);
  const [copiedRequest, setCopiedRequest] = useState(false);
  const [simulatedVerdict, setSimulatedVerdict] = useState<string | null>(null);

  const currentCase = DEMO_CASES.find((c) => c.id === selectedCaseId) || DEMO_CASES[0];

  const handleCopyRequest = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedRequest(true);
    setTimeout(() => setCopiedRequest(false), 2000);
  };

  const getCaseIcon = (id: string) => {
    switch (id) {
      case 'case-damage01':
        return <Smartphone className="w-4 h-4" />;
      case 'case-damage02':
        return <Speaker className="w-4 h-4" />;
      case 'case-damage03':
        return <Utensils className="w-4 h-4" />;
      default:
        return <Smartphone className="w-4 h-4" />;
    }
  };

  return (
    <section id="demo" className="py-16 md:py-20 scroll-mt-24 bg-neutral-50 dark:bg-slate-950/70 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-slate-400">
            Interactive Workspace
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white mt-1">
            Evidence Breakdown Demo
          </h2>
          <p className="text-neutral-700 dark:text-slate-300 text-base mt-2">
            Pick a claim type below to see how the tool reads photos and buyer messages — then separates what is fact from what is unclear.
          </p>
        </div>

        {/* Case Selector Tabs – single scrollable row */}
        <div className="mx-auto flex max-w-4xl gap-2 overflow-x-auto pb-1 [scrollbar-width:none] mb-6 justify-center">
          {DEMO_CASES.map((demoCase) => {
            const isSelected = demoCase.id === selectedCaseId;
            return (
              <button
                key={demoCase.id}
                type="button"
                onClick={() => {
                  setSelectedCaseId(demoCase.id);
                  setSimulatedVerdict(null);
                }}
                className={`shrink-0 whitespace-nowrap inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
                  isSelected
                    ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white'
                    : 'bg-white dark:bg-slate-900 text-neutral-800 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-black dark:hover:border-white'
                }`}
              >
                {getCaseIcon(demoCase.id)}
                <span>{demoCase.title.split(':')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Main Workspace Card – outer is a plain container, no heavy shadow */}
        <div className="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm overflow-hidden">
          {/* Header strip */}
          <div className="px-5 py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-3">
            <div className="flex items-center flex-wrap gap-2.5">
              <span className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 text-black dark:text-white border border-slate-200 dark:border-slate-700">
                {currentCase.id.toUpperCase()}
              </span>
              <span className="rounded-full px-2.5 py-0.5 text-xs font-medium bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-700">
                Example — not real data
              </span>
              <span className="text-xs font-bold text-neutral-800 dark:text-slate-300">
                {currentCase.itemCategory}
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs">
              <span className="text-neutral-500 dark:text-slate-400">Status:</span>
              <span className="px-2.5 py-0.5 rounded-full font-semibold bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                Awaiting Human Confirmation
              </span>
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-5">
            {/* Top Grid: Allegation vs Visual Context */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
              {/* Customer Allegation */}
              <Panel accent="claim" label="What the buyer said (unconfirmed)" badge="UNVERIFIED">
                <p className="text-sm text-neutral-900 dark:text-slate-100 italic leading-relaxed">
                  {currentCase.customerStatement}
                </p>
                <p className="text-xs text-neutral-500 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  The tool never treats what the buyer says as proven fact.
                </p>
              </Panel>

              {/* Photo Evidence Context */}
              <Panel accent="neutral" label="Photo context" badge="Example photo">
                <p className="text-sm font-semibold text-neutral-900 dark:text-slate-100">
                  {currentCase.imageCaption}
                </p>
                <p className="text-xs text-neutral-500 dark:text-slate-400 mt-1" aria-hidden="true">
                  {currentCase.imageAlt}
                </p>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 font-medium">
                  Provisional summary: {currentCase.provisionalSummary}
                </p>
              </Panel>
            </div>

            {/* 3-Column Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              {/* Col 1: Visible Observations */}
              <Panel accent="observe" label="What we can see" className="flex flex-col h-full">
                <ul className="space-y-1.5 text-xs text-neutral-800 dark:text-slate-200 mt-auto">
                  {currentCase.evidenceBreakdown.physicalObservations.map((obs, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{obs}</span>
                    </li>
                  ))}
                </ul>
              </Panel>

              {/* Col 2: Order & Courier Data */}
              <Panel accent="neutral" label="Order details" className="flex flex-col h-full">
                <ul className="space-y-1.5 text-xs text-neutral-700 dark:text-slate-400 mt-auto">
                  {currentCase.evidenceBreakdown.orderMetadata.map((meta, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-slate-400 font-bold mt-0.5">#</span>
                      <span>{meta}</span>
                    </li>
                  ))}
                </ul>
              </Panel>

              {/* Col 3: Unknowns & Gaps */}
              <Panel accent="unknown" label="What we cannot tell yet" className="flex flex-col h-full">
                <ul className="space-y-1.5 text-xs text-neutral-800 dark:text-slate-200 mt-auto">
                  {currentCase.evidenceBreakdown.unknownsAndGaps.map((unknownItem, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <HelpCircle className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>{unknownItem}</span>
                    </li>
                  ))}
                </ul>
              </Panel>
            </div>

            {/* Evidence Request Panel */}
            <Panel accent="neutral" label="Message to send the buyer">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-slate-400">
                  <MailQuestion className="w-4 h-4" />
                  <span>Template to copy and send to buyer</span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    handleCopyRequest(
                      currentCase.evidenceBreakdown.suggestedEvidenceRequests.join(' ')
                    )
                  }
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-black dark:text-white hover:bg-neutral-100 dark:hover:bg-slate-800 self-start sm:self-auto bg-white dark:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-300 dark:border-slate-700"
                >
                  {copiedRequest ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy template</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-lg border border-slate-100 dark:border-slate-800 text-xs text-neutral-800 dark:text-slate-300 leading-relaxed font-sans">
                {currentCase.evidenceBreakdown.suggestedEvidenceRequests.map((req, idx) => (
                  <p key={idx} className="mb-1 last:mb-0">
                    &quot;{req}&quot;
                  </p>
                ))}
              </div>
            </Panel>

            {/* Human Decision Gate */}
            <Panel accent="neutral" label="Reviewer Decision">
              <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-black dark:text-white" />
                  <span className="text-sm font-extrabold text-black dark:text-white">
                    A person must decide what happens next
                  </span>
                </div>
                <span className="text-xs text-neutral-500 dark:text-slate-400">
                  Reviewer: Agent Alex C. (Tier 2 Lead)
                </span>
              </div>

              <p className="text-xs text-neutral-700 dark:text-slate-300 mb-4">
                {currentCase.reviewerVerdictRequired}
              </p>

              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  type="button"
                  onClick={() =>
                    setSimulatedVerdict('Reviewer dispatched evidence request to buyer via CRM.')
                  }
                  className="px-3.5 py-2 text-xs font-semibold text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded-lg transition-colors"
                >
                  Confirm &amp; Send Evidence Request
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSimulatedVerdict(
                      'Reviewer escalated to carrier claims desk with photo of carton deformation.'
                    )
                  }
                  className="px-3.5 py-2 text-xs font-semibold text-black dark:text-white bg-white dark:bg-slate-800 hover:bg-neutral-100 dark:hover:bg-slate-700 border border-black dark:border-slate-700 rounded-lg transition-colors"
                >
                  Escalate to Carrier
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setSimulatedVerdict(
                      'Reviewer recorded custom notes on packaging.'
                    )
                  }
                  className="px-3 py-2 text-xs font-semibold text-neutral-600 hover:text-black dark:text-slate-400 dark:hover:text-white"
                >
                  Edit Observations
                </button>
              </div>

              {simulatedVerdict && (
                <div className="mt-3 p-2.5 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-lg text-xs font-semibold text-emerald-900 dark:text-emerald-300 animate-in fade-in">
                  ✓ Reviewer Audit Log: {simulatedVerdict}
                </div>
              )}
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
};
