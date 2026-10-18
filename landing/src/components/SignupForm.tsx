import { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  ShieldCheck,
  Lock,
  Building,
  Mail,
  User,
  Sliders,
} from 'lucide-react';

interface SignupFormProps {
  initialPlan?: string;
  onOpenPrivacy?: () => void;
}

interface FormState {
  email: string;
  company: string;
  role: string;
  claimsVolume: string;
  message: string;
  consent: boolean;
  honeypot: string; // Spam trap
}

export const SignupForm = ({ initialPlan, onOpenPrivacy }: SignupFormProps) => {
  const [formData, setFormData] = useState<FormState>({
    email: '',
    company: '',
    role: '',
    claimsVolume: '500 - 5k claims/mo',
    message: initialPlan ? `Interested in pilot tier: ${initialPlan}` : '',
    consent: false,
    honeypot: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormState, string>> = {};

    if (!formData.email.trim()) {
      errs.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid work email address';
    }

    if (!formData.company.trim()) {
      errs.company = 'Company or marketplace name is required';
    }

    if (!formData.role.trim()) {
      errs.role = 'Your role or department is required';
    }

    if (!formData.consent) {
      errs.consent = 'You must acknowledge the pilot terms and privacy policy';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.warn('Bot submission blocked via honeypot');
      setIsSubmitted(true);
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const waitlistEntry = {
        id: `waitlist_${Date.now()}`,
        email: formData.email.trim(),
        company: formData.company.trim(),
        role: formData.role.trim(),
        claimsVolume: formData.claimsVolume,
        message: formData.message.trim(),
        consent: formData.consent,
        created_at: new Date().toISOString(),
      };

      try {
        const existing = JSON.parse(localStorage.getItem('c12_waitlist_submissions') || '[]');
        existing.push(waitlistEntry);
        localStorage.setItem('c12_waitlist_submissions', JSON.stringify(existing));
      } catch {
        // Ignore local storage error
      }

      await new Promise((resolve) => setTimeout(resolve, 600));
      setIsSubmitted(true);
    } catch {
      setErrors({ email: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="signup" className="py-16 md:py-24 scroll-mt-24 relative overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 dark:bg-slate-800 text-black dark:text-white border border-neutral-300 dark:border-slate-700">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Pilot Program Enrollment</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-black dark:text-white leading-tight">
              Test C12 with your marketplace support team.
            </h2>

            <p className="text-base text-neutral-700 dark:text-slate-300 leading-relaxed font-normal">
              We work closely with 5 marketplace teams during the initial pilot cohort. No credit card required. Experience structured evidence triage on your sample claims.
            </p>

            <div className="space-y-3.5 pt-1">
              <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-800 dark:text-slate-300">
                <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>
                  <strong className="text-black dark:text-white">Strict Data Privacy:</strong> We never train public foundation models on your claim data or customer photos.
                </span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-neutral-800 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>
                  <strong className="text-black dark:text-white">Human Decision Control:</strong> C12 provides clarity; your support team makes 100% of the final refund or return calls.
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-neutral-700 dark:text-slate-300">
              ⚡ Response time: Pilot invitations and workflow consultation are reviewed within 24 to 48 business hours.
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md p-6 sm:p-8">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 bg-neutral-100 dark:bg-slate-800 text-black dark:text-white rounded-full flex items-center justify-center mx-auto shadow-xs border border-slate-200 dark:border-slate-700">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-black dark:text-white">
                    Pilot Request Received!
                  </h3>
                  <p className="text-sm text-neutral-700 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-semibold text-black dark:text-white">{formData.email}</span>. A member of our engineering team will reach out with pilot environment access and synthetic benchmark instructions.
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          email: '',
                          company: '',
                          role: '',
                          claimsVolume: '500 - 5k claims/mo',
                          message: '',
                          consent: false,
                          honeypot: '',
                        });
                      }}
                      className="text-xs font-bold text-black dark:text-white underline hover:opacity-80"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Honeypot hidden input */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_url">Leave empty</label>
                    <input
                      type="text"
                      id="website_url"
                      name="website_url"
                      tabIndex={-1}
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      autoComplete="off"
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-black dark:text-white mb-1">
                      Work Email <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="support.lead@yourmarketplace.com"
                        className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border bg-white dark:bg-slate-950 text-black dark:text-white transition-all ${
                          errors.email
                            ? 'border-rose-400 focus:ring-rose-400'
                            : 'border-slate-300 dark:border-slate-700 focus:border-black dark:focus:border-white'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>

                  {/* Company & Role Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold text-black dark:text-white mb-1">
                        Marketplace / Company <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                          <Building className="w-4 h-4" />
                        </div>
                        <input
                          id="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={(e) => {
                            setFormData({ ...formData, company: e.target.value });
                            if (errors.company) setErrors({ ...errors, company: undefined });
                          }}
                          placeholder="e.g. Acme Marketplace"
                          className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border bg-white dark:bg-slate-950 text-black dark:text-white transition-all ${
                            errors.company
                              ? 'border-rose-400 focus:ring-rose-400'
                              : 'border-slate-300 dark:border-slate-700 focus:border-black dark:focus:border-white'
                          }`}
                        />
                      </div>
                      {errors.company && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.company}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="role" className="block text-xs font-bold text-black dark:text-white mb-1">
                        Your Role <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                          <User className="w-4 h-4" />
                        </div>
                        <input
                          id="role"
                          type="text"
                          required
                          value={formData.role}
                          onChange={(e) => {
                            setFormData({ ...formData, role: e.target.value });
                            if (errors.role) setErrors({ ...errors, role: undefined });
                          }}
                          placeholder="e.g. Head of Support"
                          className={`w-full pl-9 pr-3 py-2 text-sm rounded-xl border bg-white dark:bg-slate-950 text-black dark:text-white transition-all ${
                            errors.role
                              ? 'border-rose-400 focus:ring-rose-400'
                              : 'border-slate-300 dark:border-slate-700 focus:border-black dark:focus:border-white'
                          }`}
                        />
                      </div>
                      {errors.role && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-semibold">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.role}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Volume Selection */}
                  <div>
                    <label htmlFor="claimsVolume" className="block text-xs font-bold text-black dark:text-white mb-1">
                      Estimated Monthly Damaged Claims Volume
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-400">
                        <Sliders className="w-4 h-4" />
                      </div>
                      <select
                        id="claimsVolume"
                        value={formData.claimsVolume}
                        onChange={(e) => setFormData({ ...formData, claimsVolume: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-black dark:text-white focus:border-black dark:focus:border-white"
                      >
                        <option value="Under 500 claims/mo">Under 500 claims / month</option>
                        <option value="500 - 5k claims/mo">500 – 5,000 claims / month</option>
                        <option value="5k - 20k claims/mo">5,000 – 20,000 claims / month</option>
                        <option value="20k+ claims/mo">20,000+ claims / month</option>
                      </select>
                    </div>
                  </div>

                  {/* Optional Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-black dark:text-white mb-1">
                      Specific Resolution Challenge (Optional)
                    </label>
                    <textarea
                      id="message"
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Inconsistent photo review times for transit damage disputes..."
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-black dark:text-white focus:border-black dark:focus:border-white"
                    />
                  </div>

                  {/* Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => {
                          setFormData({ ...formData, consent: e.target.checked });
                          if (errors.consent) setErrors({ ...errors, consent: undefined });
                        }}
                        className="mt-0.5 rounded border-slate-400 dark:border-slate-600 text-black focus:ring-black h-4 w-4"
                      />
                      <span className="text-xs text-neutral-700 dark:text-slate-300 leading-normal">
                        I agree to receive pilot onboarding updates. I understand this is an early-access decision support prototype evaluated with synthetic benchmark datasets.{' '}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            if (onOpenPrivacy) onOpenPrivacy();
                          }}
                          className="text-black dark:text-white underline font-bold"
                        >
                          Privacy Policy
                        </button>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center gap-1 font-semibold">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.consent}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button: Solid Black in light mode, White in dark mode */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200 rounded-xl shadow-xs transition-all disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-black dark:focus-visible:outline-white"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Pilot Application</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
