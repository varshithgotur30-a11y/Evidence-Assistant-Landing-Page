import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal = ({ isOpen, onClose }: PrivacyModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-cyan-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Privacy Policy &amp; Data Transparency
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close privacy policy"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            <strong>Effective Date:</strong> October 2026 • C12 Pilot Release v0.9
          </p>

          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            1. Information We Collect in the Pilot Form
          </h3>
          <p>
            When you apply for early access via our pilot registration form, we collect your work email address, marketplace/company name, professional role, and optional details regarding your estimated claim volume.
          </p>

          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            2. Purpose of Processing
          </h3>
          <p>
            We process this data exclusively to:
          </p>
          <ul className="list-disc list-inside space-y-1 pl-2">
            <li>Review eligibility for the C12 Damaged Product Evidence Assistant pilot cohort.</li>
            <li>Coordinate technical onboarding, API access tokens, and synthetic evaluation benchmarks.</li>
            <li>Send product updates and qualitative feedback invitations.</li>
          </ul>

          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            3. No Sale of Personal Data &amp; No Model Training
          </h3>
          <p>
            We do not sell, rent, or trade your contact information. Customer claim photos and text submitted during sandbox evaluations are strictly isolated in private cloud storage and are <strong>never utilized to train public foundation models</strong>.
          </p>

          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            4. Data Retention &amp; Erasure
          </h3>
          <p>
            You may request complete removal of your waitlist record or sandbox claims data at any time by emailing <code>privacy@c12-evidence.internal</code>. Unused pilot inquiries are automatically purged after 180 days.
          </p>

          <h3 className="font-bold text-slate-900 dark:text-white text-base">
            5. Synthetic Benchmark Disclaimer
          </h3>
          <p>
            All demo examples shown on the landing page are generated using synthetic cases with no actual customer or carrier PII.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
          >
            I Understand &amp; Close
          </button>
        </div>
      </div>
    </div>
  );
};
