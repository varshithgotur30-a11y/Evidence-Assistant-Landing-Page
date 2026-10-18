import { X, Scale } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal = ({ isOpen, onClose }: TermsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-cyan-400">
              <Scale className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Pilot Evaluation Agreement
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close terms modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            <strong>Version:</strong> 0.9 (Pre-Production Prototype)
          </p>

          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            1. Evaluation Scope &amp; Non-Production Status
          </h3>
          <p>
            The C12 Damaged Product Evidence Assistant is provided as an experimental evaluation prototype. It is designed to demonstrate multi-modal claim structuring and assist trained human agents. It is not licensed as a production financial adjudication system.
          </p>

          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            2. Mandatory Human Reviewer Decision Authority
          </h3>
          <p>
            Customer expressly acknowledges and agrees that:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>The software generates provisional observations and flags ambiguity.</li>
            <li>The software does not approve refunds, reverse transactions, or declare legal fault.</li>
            <li>A human reviewer or marketplace operations officer retains sole responsibility for final claim outcomes.</li>
          </ul>

          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            3. Disclaimer of Warranties
          </h3>
          <p>
            The pilot software and synthetic benchmarking datasets are supplied &quot;as is&quot; without warranties of any kind, whether express or implied.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
          >
            Close Terms
          </button>
        </div>
      </div>
    </div>
  );
};
