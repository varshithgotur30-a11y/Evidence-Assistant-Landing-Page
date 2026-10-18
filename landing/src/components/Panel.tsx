import type { ReactNode } from 'react';

export type Accent = 'claim' | 'observe' | 'unknown' | 'neutral';

interface PanelProps {
  accent?: Accent;
  label?: string;
  badge?: string;
  children: ReactNode;
  className?: string;
}

export function Panel({ label, badge, children, className = '' }: PanelProps) {
  return (
    <section
      className={`relative overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 ${className}`}
    >
      {(label || badge) && (
        <header className="mb-3 flex items-center justify-between gap-3">
          {label && (
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {label}
            </h3>
          )}
          {badge && (
            <span className="rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 font-mono text-xs text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
              {badge}
            </span>
          )}
        </header>
      )}
      <div className="text-[15px] leading-relaxed text-slate-800 dark:text-slate-200">{children}</div>
    </section>
  );
}
