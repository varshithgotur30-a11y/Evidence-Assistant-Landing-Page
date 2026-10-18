import { FEATURES_LIST } from '../content';
import {
  ShieldAlert,
  ScanEye,
  UserCheck,
  FileText,
  MessageSquareShare,
  Download,
  Sparkles,
} from 'lucide-react';

export const Features = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-black dark:text-white" />;
      case 'ScanEye':
        return <ScanEye className="w-5 h-5 text-black dark:text-white" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-black dark:text-white" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-black dark:text-white" />;
      case 'MessageSquareShare':
        return <MessageSquareShare className="w-5 h-5 text-black dark:text-white" />;
      case 'Download':
        return <Download className="w-5 h-5 text-black dark:text-white" />;
      default:
        return <Sparkles className="w-5 h-5 text-black dark:text-white" />;
    }
  };

  return (
    <section id="features" className="py-16 md:py-20 scroll-mt-24 relative bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-600 dark:text-slate-400">
            What it does
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white mt-2">
            Built for careful, consistent reviews
          </h2>
          <p className="text-neutral-700 dark:text-slate-300 text-base mt-3">
            Every feature is designed to cut out guesswork, speed up the review process, and keep your team fully in control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES_LIST.map((feat) => (
            <div
              key={feat.title}
              className="p-6 sm:p-7 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-slate-800">
                    {getIcon(feat.iconName)}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-neutral-100 dark:bg-slate-800 text-black dark:text-white border border-neutral-200 dark:border-slate-700">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-black dark:text-white mb-2">
                  {feat.title}
                </h3>

                <p className="text-sm text-neutral-700 dark:text-slate-300 leading-relaxed font-normal">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-neutral-600 dark:text-slate-300">
                <span className="text-neutral-400 dark:text-slate-500 text-xs">{feat.tag}</span>
                <span className="text-black dark:text-white font-bold">In pilot</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
