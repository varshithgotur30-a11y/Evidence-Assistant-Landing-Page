export interface NavItem {
  label: string;
  href: string;
}

export interface ProblemItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  impactLabel: string;
  impactType: 'assumption' | 'example';
}

export interface WorkflowStep {
  stepNumber: string;
  title: string;
  summary: string;
  details: string[];
  badge: string;
}

export interface EvidenceDemoCase {
  id: string;
  title: string;
  itemCategory: string;
  customerStatement: string;
  imageCaption: string;
  imageAlt: string;
  evidenceBreakdown: {
    customerClaims: string[];
    physicalObservations: string[];
    orderMetadata: string[];
    unknownsAndGaps: string[];
    suggestedEvidenceRequests: string[];
  };
  reviewerVerdictRequired: string;
  provisionalSummary: string;
}

export interface FeatureItem {
  iconName: string;
  title: string;
  description: string;
  tag: string;
}

export interface RuleLimitItem {
  prohibition: string;
  explanation: string;
  humanRole: string;
}

export interface UseCaseItem {
  scenario: string;
  trigger: string;
  whatToolObserves: string;
  whatToolFlags: string;
  reviewerNextStep: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge: string;
  priceHeadline: string;
  priceNote: string;
  description: string;
  casesIncluded: string;
  extraCasePrice: string;
  bestFor: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'Safety & Limits' | 'Privacy & Data' | 'Workflow & Integration';
}

export const SITE_METADATA = {
  name: 'C12 Evidence Assistant',
  tagline: 'Separate what customers say from what the evidence shows.',
  description:
    'A tool that helps support teams review damaged-product claims. It reads complaint text and photos, flags what is unclear, and always keeps a human in charge of every decision.',
  prototypeDisclaimer: 'Demo built on example data. Not a live refund tool.',
  author: 'C12 Support Intelligence Systems',
  version: 'Pilot v0.9 (Pre-production)',
};

export const NAV_LINKS: NavItem[] = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Demo', href: '#demo' },
  { label: 'Limits', href: '#limits' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const HERO_CONTENT = {
  badge: 'Early-access pilot',
  headline: 'Separate what customers say from what the evidence shows.',
  subhead:
    'A review tool for damaged-product claims. It reads photos and complaint messages, notes what is visibly damaged, flags what is unclear, and lets your team make every final call.',
  ctaPrimary: 'Request Pilot Access',
  ctaSecondary: 'See a Live Demo',
  trustNotes: [
    'No refunds issued automatically',
    'A person approves every decision',
    'Demo uses example data only',
  ],
};

export const PROBLEM_STRIP: ProblemItem[] = [
  {
    id: 'conflation',
    tag: 'Fact vs Opinion',
    title: 'Customer complaints and photo evidence get mixed up',
    description:
      'Support agents read emotional messages alongside photos, often treating what a buyer says as proven fact — even when the photos tell a different story.',
    impactLabel: 'Illustrative example',
    impactType: 'example',
  },
  {
    id: 'inconsistency',
    tag: 'Speed',
    title: 'Reviews are slow and inconsistent',
    description:
      'Agents spend several minutes per case checking scratches, packaging folds, and delivery slips with no standard process. Different agents reach different conclusions.',
    impactLabel: 'Target to test in pilot',
    impactType: 'assumption',
  },
  {
    id: 'assumptions',
    tag: 'Audit Trail',
    title: 'Guesswork leads to disputes and lost money',
    description:
      'Rejecting a valid claim or approving a payout without clear evidence creates unhappy buyers, mistrustful sellers, and cases that cannot be defended later.',
    impactLabel: 'Every edit and decision is logged',
    impactType: 'example',
  },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    stepNumber: '01',
    title: 'Upload the complaint and photos',
    summary: 'Send in the buyer message, product photos, and order details in one go.',
    details: [
      'Accepts high-res or phone photos from any angle.',
      'Reads order details: item type, packaging notes, delivery time.',
      'Original photos are never changed.',
    ],
    badge: 'Input',
  },
  {
    stepNumber: '02',
    title: 'The tool reads and summarises',
    summary: 'The assistant describes what is visibly damaged — nothing more.',
    details: [
      'Lists what can actually be seen: cracks, tears, wet patches, crushed corners.',
      'Copies the buyer\'s exact words — no rewording or assumptions added.',
      'Flags missing photos: for example, "back of the box not shown".',
    ],
    badge: 'Summary',
  },
  {
    stepNumber: '03',
    title: 'Your reviewer checks and edits',
    summary: 'A real person on your team stays in charge of every decision.',
    details: [
      'Reviewer can change, add notes, or reject any suggestion.',
      'Generates a polite message asking the buyer for more photos if needed.',
      'Nothing is final until the reviewer clicks confirm.',
    ],
    badge: 'Human Review',
  },
  {
    stepNumber: '04',
    title: 'Export the case record',
    summary: 'A clean, signed record is ready for your CRM, courier, or dispute file.',
    details: [
      'Includes a timestamped note showing who reviewed and what they decided.',
      'Sends the record to Zendesk, Freshdesk, or your own system via a simple connection.',
      'Gives consistent reports across all cases.',
    ],
    badge: 'Done',
  },
];

export const DEMO_CASES: EvidenceDemoCase[] = [
  {
    id: 'case-damage01',
    title: 'Damage Claim: Cracked Phone Screen',
    itemCategory: 'Consumer Electronics (OLED Mobile Display)',
    customerStatement:
      '"Opened the sealed package right after delivery and the screen was completely broken. I never dropped it — I want a full refund!"',
    imageCaption: 'Close-up photo from buyer: top-right corner of the phone screen',
    imageAlt: 'Example photo showing a cracked phone screen with a spiderweb fracture pattern near the corner',
    provisionalSummary:
      'The screen shows a crack near the top-right corner. No photo of the outer box was included.',
    evidenceBreakdown: {
      customerClaims: [
        'Buyer says the phone arrived broken inside a sealed box.',
        'Buyer says they never dropped it.',
        'Buyer is requesting a full refund.',
      ],
      physicalObservations: [
        'Crack spreads out from the top-right corner of the screen.',
        'Small dent visible on the metal edge near the crack.',
        'Purple tint showing under the screen where it is cracked.',
        'No photo of the delivery box or inner packaging was sent.',
      ],
      orderMetadata: [
        'Order ID: #SYN-8921-EL',
        'Ticket opened 2 hours 14 minutes after delivery.',
        'Item: 6.7" phone, 256GB, Midnight Black.',
      ],
      unknownsAndGaps: [
        'We cannot see the outer delivery box — was it damaged?',
        'The serial number is not visible in the photo.',
        'We cannot check the water-damage indicator without a photo.',
      ],
      suggestedEvidenceRequests: [
        'Please send a clear photo of the back of the phone showing the serial number.',
        'Please send a photo of the outer delivery box, including the corners and shipping label.',
      ],
    },
    reviewerVerdictRequired:
      'The reviewer decides whether to ask for more photos or contact the courier. The tool will not approve or reject the claim on its own.',
  },
  {
    id: 'case-damage02',
    title: 'Packaging Claim: Crushed Box, Speakers Inside Fine',
    itemCategory: 'Audio & Studio Gear (Studio Monitor Speakers)',
    customerStatement:
      '"The parcel arrived crushed and soggy from rain. The driver threw it over the fence. The speaker might be ruined!"',
    imageCaption: 'Photo shows the outer delivery box crushed on one corner with water staining',
    imageAlt: 'A cardboard delivery box with a dented corner and damp patches',
    provisionalSummary:
      'The outer box is dented and damp. The speaker inside looks undamaged in the photos provided.',
    evidenceBreakdown: {
      customerClaims: [
        'Buyer says the box arrived squashed and wet.',
        'Buyer says the driver threw the parcel.',
        'Buyer is worried the speaker inside may be broken.',
      ],
      physicalObservations: [
        'The outer cardboard box is crushed along the bottom edge.',
        'Brown water stains visible on the top of the box.',
        'The inner foam padding looks intact — no holes or tears.',
        'The speaker cabinet shows no visible cracks, dents, or torn grill.',
      ],
      orderMetadata: [
        'Order ID: #SYN-4410-AU',
        'Carrier note: "Left in safe place / porch delivery".',
        'Weight at dispatch matches the expected speaker weight (4.8 kg).',
      ],
      unknownsAndGaps: [
        'We cannot confirm the speaker works without a power test.',
        'We cannot tell if water got through the inner plastic bag.',
      ],
      suggestedEvidenceRequests: [
        'Please plug in the speaker and confirm whether the power light comes on.',
        'Please send a photo of the plastic sleeve inside the box.',
      ],
    },
    reviewerVerdictRequired:
      'The reviewer decides whether the courier is responsible for the box damage, or whether the speaker needs to be returned. The tool shows the outer damage and the intact speaker separately.',
  },
  {
    id: 'case-damage03',
    title: 'Edge Case: Blurry Photo, Ceramic Dinner Set',
    itemCategory: 'Home & Kitchen (Handcrafted Stoneware Dinner Set)',
    customerStatement:
      '"Every single plate in the 16-piece set is broken to pieces. Totally unusable garbage."',
    imageCaption: 'Dark, blurry phone photo — shadowy objects not clearly visible',
    imageAlt: 'Very blurry, dark photo where damage cannot be confirmed',
    provisionalSummary:
      'The photo is too dark and blurry to see the damage clearly. We cannot count broken pieces or confirm the extent of damage.',
    evidenceBreakdown: {
      customerClaims: [
        'Buyer says all 16 plates arrived broken.',
        'Buyer wants a full replacement or refund.',
      ],
      physicalObservations: [
        'Two broken pieces are visible in the foreground — cannot tell if from one plate or many.',
        'Motion blur makes it impossible to see edges or crack patterns.',
        'The lighting is too low — heavy shadows across the whole image.',
      ],
      orderMetadata: [
        'Order ID: #SYN-3091-HM',
        'Order contained 16 individual ceramic stoneware items.',
      ],
      unknownsAndGaps: [
        'We cannot count how many plates are broken.',
        'We cannot tell if damage happened in shipping or before.',
        'No product label or batch code visible.',
      ],
      suggestedEvidenceRequests: [
        'Please take a clear, well-lit photo of all the plates laid out flat on a table near a window.',
      ],
    },
    reviewerVerdictRequired:
      'The tool does not guess. The reviewer clicks "Send Evidence Request" to ask the buyer for a clearer photo.',
  },
];

export const FEATURES_LIST: FeatureItem[] = [
  {
    iconName: 'ShieldAlert',
    title: 'Separates facts from claims',
    description:
      'Keeps what the buyer says separate from what is actually visible in the photos — so reviewers start with clear information, not mixed-up impressions.',
    tag: 'Core feature',
  },
  {
    iconName: 'ScanEye',
    title: 'Flags unclear or missing evidence',
    description:
      'If a photo is too dark, the serial number is hidden, or a key angle is missing, the tool says so clearly instead of guessing.',
    tag: 'Accuracy guard',
  },
  {
    iconName: 'UserCheck',
    title: 'Humans make every decision',
    description:
      'No case is closed, no refund touched, and no message sent without a real person on your team reviewing and clicking confirm.',
    tag: 'Governance',
  },
  {
    iconName: 'FileText',
    title: 'Quotes buyers exactly',
    description:
      'The buyer\'s words are shown word-for-word — never paraphrased or altered — so your reviewer always knows what was actually said.',
    tag: 'Evidence accuracy',
  },
  {
    iconName: 'MessageSquareShare',
    title: 'One-click evidence requests',
    description:
      'Generates a clear, polite message asking the buyer for more photos — the reviewer just checks it and sends.',
    tag: 'Saves time',
  },
  {
    iconName: 'Download',
    title: 'Exports a full case record',
    description:
      'Produces a clean file ready for your courier dispute, seller arbitration, or internal records — in whatever format your system needs.',
    tag: 'Audit trail',
  },
];

export const RULES_AND_LIMITS: RuleLimitItem[] = [
  {
    prohibition: 'Never approves or denies refunds',
    explanation:
      'The tool has no access to payments. It cannot issue refunds, reverse charges, or close accounts. It only helps your team see the evidence more clearly.',
    humanRole: 'Your reviewer or your company\'s policy decides what happens with the money.',
  },
  {
    prohibition: 'Never calls a buyer a fraud',
    explanation:
      'The tool does not judge buyers or score their trustworthiness. It only describes what is visible in the photos — nothing about the person submitting them.',
    humanRole: 'Your trust and safety team handles fraud assessments separately.',
  },
  {
    prohibition: 'Never invents a cause of damage',
    explanation:
      'If the tool cannot see what caused the damage from the photos, it says "unknown" — it does not guess or make up an explanation.',
    humanRole: 'Reviewers can request a physical return or more photos if a cause is needed.',
  },
  {
    prohibition: 'Never closes a case on its own',
    explanation:
      'Every summary the tool produces is marked as a draft until a real person reviews it and gives the final approval.',
    humanRole: 'Every case has a named reviewer attached to it in the audit log.',
  },
];

export const USE_CASES: UseCaseItem[] = [
  {
    scenario: 'Visible damage, cause unknown',
    trigger: 'Buyer claims the laptop screen shattered during delivery.',
    whatToolObserves: 'Dent on the outer casing. Screen is cracked. We cannot tell when or how it happened.',
    whatToolFlags: 'No photo of the delivery box. Serial number not visible.',
    reviewerNextStep: 'Suggested next step: ask the buyer for a photo of the delivery box.',
  },
  {
    scenario: 'Crushed packaging, product fine',
    trigger: 'Customer says the delivery box for their headphones arrived crushed.',
    whatToolObserves: 'Outer box is crushed by about 40%. Inner tray looks intact. Headphones show no visible damage.',
    whatToolFlags: 'Cannot confirm the headphones work without testing.',
    reviewerNextStep: 'Suggested next step: offer a packaging refund rather than replacing the product.',
  },
  {
    scenario: 'Product does not work',
    trigger: 'Buyer says their cordless vacuum stopped working after two days.',
    whatToolObserves: 'No visible cracks or damage. Filter looks clean. Battery charging light is on in the photo.',
    whatToolFlags: 'A broken motor or internal fault cannot be seen in photos alone.',
    reviewerNextStep: 'Suggested next step: send the case to technical support, not to the damage claim team.',
  },
  {
    scenario: 'Missing or dark photos',
    trigger: 'Buyer sends one dark, blurry thumbnail of a chipped porcelain vase.',
    whatToolObserves: 'Photo is too blurry and dark — the damage cannot be confirmed.',
    whatToolFlags: 'Clearly states: "Photo quality too low to assess damage."',
    reviewerNextStep: 'Suggested next step: send the buyer clear photo instructions (good lighting, flat surface).',
  },
];

export const PRICING_HYPOTHESES: PricingPlan[] = [
  {
    id: 'standard',
    name: 'Standard',
    badge: 'Starter Tier',
    priceHeadline: '₹1,999',
    priceNote: 'per month · 200 reviewed cases included',
    description: 'Designed for emerging brands looking to establish standardized damage verification and eliminate manual claim chaos.',
    casesIncluded: '200',
    extraCasePrice: '₹14',
    bestFor: 'Brands with up to 10,000 orders a month',
    features: [
      '200 reviewed cases included per month',
      '₹14 per additional case reviewed',
      'Best for brands with up to 10,000 orders a month',
      'Photo evidence reading & claim vs. fact breakdown',
      'Ambiguity & blurry photo detection',
      'One-click draft buyer clarification messages',
      'JSON / CSV case audit export',
      'Standard email support',
    ],
    ctaText: 'Start with Standard',
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Most Popular',
    isPopular: true,
    priceHeadline: '₹5,999',
    priceNote: 'per month · 600 reviewed cases included',
    description: 'Built for scaling direct-to-consumer and marketplace brands handling active claims across multiple channels.',
    casesIncluded: '600',
    extraCasePrice: '₹12',
    bestFor: 'Brands with 10,001 to 25,000 orders a month',
    features: [
      '600 reviewed cases included per month',
      '₹12 per additional case reviewed',
      'Best for brands with 10,001 to 25,000 orders a month',
      'Everything in Standard tier',
      'Priority evidence triage processing',
      'Custom marketplace policy rules & damage taxonomy',
      'Reviewer performance & audit log metrics',
      'Zendesk & Freshdesk integration assistance',
      'Priority email & onboarding support',
    ],
    ctaText: 'Request Growth Pilot',
  },
  {
    id: 'custom',
    name: 'Custom',
    badge: 'Enterprise & High Volume',
    priceHeadline: 'From ₹7,999',
    priceNote: '“Contact us” · tailored setup & agreed volume',
    description: 'For high-volume brands requiring bespoke integrations, dedicated SLAs, and tailored case volumes.',
    casesIncluded: 'Agreed with you',
    extraCasePrice: '₹10',
    bestFor: 'Brands above 25,000 orders a month',
    features: [
      'Reviewed cases volume agreed with you',
      '₹10 per additional case reviewed',
      'Best for brands above 25,000 orders a month',
      'Everything in Growth tier',
      'Custom carrier inspection & courier API webhooks',
      'Configurable data retention & private hosting options',
      'Dedicated account manager & SLA guarantees',
      'Reviewer team onboarding & workflow training',
    ],
    ctaText: 'Talk to Us About Custom',
  },
];

export const FAQ_LIST: FaqItem[] = [
  {
    category: 'Safety & Limits',
    question: 'Does this tool automatically issue refunds or close cases?',
    answer:
      'Never. C12 only helps your team see the evidence clearly. It has no access to payments and cannot issue refunds or close cases. Every output is marked as a draft until a real person on your team reviews and confirms it.',
  },
  {
    category: 'Safety & Limits',
    question: 'Does the tool accuse buyers of lying or give them a fraud score?',
    answer:
      'No. The tool does not judge buyers. It only separates what the buyer wrote from what is visible in the photos. No trust scores, no fraud labels.',
  },
  {
    category: 'Safety & Limits',
    question: 'What happens when a photo is blurry or too dark?',
    answer:
      'Instead of guessing, the tool flags the photo as unclear and explains why — for example, "too blurry to see damage". It then drafts a polite message asking the buyer for a better photo.',
  },
  {
    category: 'Privacy & Data',
    question: 'Are customer photos used to train AI models?',
    answer:
      'No. All pilot data is kept separate. Customer photos and messages are not used to train any public AI model. How long data is kept can be set by your team.',
  },
  {
    category: 'Privacy & Data',
    question: 'How are customer personal details handled?',
    answer:
      'The tool works with claim IDs, product codes, and tracking numbers — not personal addresses or payment details. We recommend removing personal data before sending cases to the review tool.',
  },
  {
    category: 'Workflow & Integration',
    question: 'How does this connect to our existing support software?',
    answer:
      'The pilot connects to Zendesk, Freshdesk, Gorgias, and custom systems via a simple web connection. Setup is straightforward and does not require heavy engineering work.',
  },
  {
    category: 'Workflow & Integration',
    question: 'How accurate is the tool during the pilot?',
    answer:
      'The pilot uses example datasets. Because real photos vary widely in lighting and quality, we do not promise specific accuracy figures. Your reviewer is always the final decision-maker on every case.',
  },
];

export const FOOTER_CONTENT = {
  copyright: `© ${new Date().getFullYear()} C12 Support Intelligence Systems. All rights reserved.`,
  disclaimer:
    'Early access pilot. Built on example data. Designed as a decision-support tool for human claim reviewers — not an automated refund engine.',
  links: [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Pilot Guidelines', href: '#limits' },
    { label: 'Example Data Specs', href: '#demo' },
  ],
};
