import { useState } from 'react';
import { Nav } from '../components/Nav';
import { Hero } from '../components/Hero';
import { ProblemStrip } from '../components/ProblemStrip';
import { HowItWorks } from '../components/HowItWorks';
import { EvidenceDemo } from '../components/EvidenceDemo';
import { Features } from '../components/Features';
import { RulesAndLimits } from '../components/RulesAndLimits';
import { UseCases } from '../components/UseCases';
import { Pricing } from '../components/Pricing';
import { Faq } from '../components/Faq';
import { SignupForm } from '../components/SignupForm';
import { Footer } from '../components/Footer';
import { PrivacyModal } from './PrivacyModal';
import { TermsModal } from './TermsModal';

export const Home = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [selectedPlanForForm, setSelectedPlanForForm] = useState<string | undefined>(undefined);

  const handleSelectPlan = (planId: string) => {
    setSelectedPlanForForm(planId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
      {/* Accessible skip to main content */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* 1. Sticky Nav */}
      <Nav
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* Main Page Landmark */}
      <main id="main-content" className="flex-grow">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Problem Strip */}
        <ProblemStrip />

        {/* 4. How It Works */}
        <HowItWorks />

        {/* 5. Interactive Evidence Breakdown Demo */}
        <EvidenceDemo />

        {/* 6. Features & Capabilities */}
        <Features />

        {/* 7. Rules and Hard Limits ("What it will never do") */}
        <RulesAndLimits />

        {/* 8. Real-world Edge Cases & Use Cases */}
        <UseCases />

        {/* 9. Pilot Pricing Hypotheses */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* 10. Frequently Asked Questions */}
        <Faq />

        {/* 11. CTA Band & Pilot Waitlist / Signup Form */}
        <SignupForm
          initialPlan={selectedPlanForForm}
          onOpenPrivacy={() => setPrivacyOpen(true)}
        />
      </main>

      {/* 12. Footer */}
      <Footer
        onOpenPrivacy={() => setPrivacyOpen(true)}
        onOpenTerms={() => setTermsOpen(true)}
      />

      {/* Modals for Legal / Privacy Compliance */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </div>
  );
};
