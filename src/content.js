// Page copy, from the developer brief for the CycleBreeze Commercial Growth Challenge landing page.
//
// Headline syntax: lines split on \n, *word* = script accent, [WORD] = tilted ink tag.

export const CONFIG = {
  // Every "Apply" button scrolls to the application form at the bottom of the page.
  applyUrl: '#apply',
  // Google Apps Script web app URL that saves applications to the Google Sheet.
  // Setup steps live in docs/google-sheets-setup.md. Leave empty until it is deployed.
  formEndpoint: '',
  email: 'sales@cyclebreeze.com',
  website: 'https://www.cyclebreeze.com',
  // Fri 23 Oct 2026, 11:59 PM WAT (UTC+1)
  deadline: '2026-10-23T23:59:00+01:00',
  deadlineLabel: 'Friday, 23 October 2026, 11:59 PM WAT',
}

export const NAV = [
  { href: '#mandates', label: 'Deliver' },
  { href: '#tracks', label: 'Tracks' },
  { href: '#timeline', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
  { href: '#rules', label: 'Rules' },
]

export const HERO = {
  badge: 'Call for proposals',
  title: 'CycleBreeze Commercial\nGrowth [Challenge]',
  subtitle: 'Sales, Marketing & Commercial Growth Partners Wanted',
  lede: [
    'Can you turn strategy into qualified prospects, paying customers, and measurable revenue?',
    'CycleBreeze is inviting qualified firms and individual professionals to participate in a performance-focused trial to help grow our technology services and Bizzie product.',
    'We are looking for people who can execute, measure outcomes, learn quickly, and build practical systems that generate commercial results.',
  ],
  deadline: 'Applications close Friday, 23 October 2026, at 11:59 PM WAT.',
}

// Fanned cards under the hero. `img` cards use real CycleBreeze photography/product shots;
// the rest are brand-colour cards with a sticker icon.
export const HERO_CARDS = [
  { caption: 'B2B sales and revenue', img: '/photos/team.webp', pos: '40% 50%' },
  { caption: 'Bizzie product growth', img: '/photos/bizzie.webp', pos: '78% 40%', dark: true },
  { caption: 'WhatsApp and approved channels', icon: 'whatsapp', tone: 'green' },
  { caption: 'Qualified prospects into paying clients', img: '/photos/developer.webp', pos: '50% 35%', dark: true },
  { caption: 'AI-enabled execution', icon: 'bot', tone: 'blue' },
  { caption: 'Transparent costs and reporting', img: '/photos/erp.webp', pos: '50% 20%', dark: true },
]

export const PROBLEM = {
  title: 'What is the Commercial\nGrowth [Challenge]?',
  intro:
    'The CycleBreeze Commercial Growth Challenge is designed to identify capable commercial partners who can turn business opportunities into measurable results. The challenge focuses on two primary outcomes:',
  poster: { kicker: 'Commercial Growth Challenge', line1: 'Call for proposals', line2: 'apply now' },
  cards: [
    {
      title: '1. B2B Sales\n*and* Revenue',
      body: 'Identify and qualify relevant business prospects, develop effective sales approaches, convert qualified prospects into paying CycleBreeze clients, and generate revenue for our technology services.',
    },
    {
      title: '2. Bizzie\n*Product* Growth',
      body: 'Help relevant users discover and activate Bizzie, continue using the product, and convert into paid subscriptions or other approved revenue-generating actions.',
    },
  ],
  note: 'We are not evaluating applicants on lead volume, registrations, impressions, or activity alone. We want to understand whether their work produces qualified opportunities, meaningful conversions, and measurable commercial value.',
}

export const MANDATES_HEAD = {
  stamp: 'What we need you to deliver',
  title: 'We value execution,\nnot just [ideas]',
  intro: 'Selected applicants may be expected to demonstrate capabilities such as:',
  note: 'These are examples of relevant capabilities, not mandatory services that every applicant must offer. Applicants should state their strongest areas honestly.',
}

export const MANDATES = [
  {
    id: 'market',
    tab: 'Markets & offers',
    short: 'Markets',
    icon: 'target',
    title: 'Find the\nmarket',
    points: [
      'Identifying and prioritising suitable target markets.',
      'Building clear offers and commercial propositions.',
      'Prospect research, qualification, and outreach.',
    ],
    img: '/photos/team.webp',
    pos: '45% 50%',
    sticker: 'handshake',
  },
  {
    id: 'acquire',
    tab: 'Pipeline & acquisition',
    short: 'Pipeline',
    icon: 'message',
    title: 'Win the\ncustomer',
    points: [
      'Sales pipeline management and consistent follow-up.',
      'Paid advertising and other appropriate acquisition campaigns.',
      'WhatsApp and other approved customer acquisition channels.',
    ],
    img: '/photos/bizzie.webp',
    pos: '15% 50%',
    sticker: 'whatsapp',
    link: { href: 'https://usebizzie.com', label: 'usebizzie.com' },
  },
  {
    id: 'systems',
    tab: 'Systems & reporting',
    short: 'Systems',
    icon: 'briefcase',
    title: 'Build the\nsystem',
    points: [
      'Landing pages, conversion optimisation, and funnel design.',
      'CRM setup, reporting, workflow automation, and AI-enabled execution.',
      'Transparent reporting on costs, outcomes, and lessons learned.',
    ],
    img: '/photos/developer.webp',
    pos: '50% 30%',
    sticker: 'trophy',
  },
]

// "What we look for": each badge pairs two of the eight qualities from the brief.
export const NOT_FOR = [
  { quote: 'Proven commercial results, backed by clear evidence and honest attribution.', who: 'Results', note: 'evidence, not claims' },
  { quote: 'Strong execution and follow-through, with practical, resourceful problem-solving.', who: 'Execution', note: 'doing, not just planning' },
  { quote: 'Transparent costing and reporting, and responsible use of AI and automation.', who: 'Transparency', note: 'costs and tools in the open' },
  { quote: 'Ethical customer acquisition, and the ability to learn, adapt, and improve performance.', who: 'Integrity', note: 'growth done right' },
]

export const NOT_FOR_CLOSE =
  'We value integrity as much as performance. Misleading claims, fabricated metrics, fake engagement, unauthorised use of data, and unapproved spending may result in disqualification.'

export const DEAL = {
  stats: [
    { n: 100, prefix: '₦', suffix: 'k', label: 'trial allocation per firm' },
    { n: 50, prefix: '₦', suffix: 'k', label: 'trial allocation per individual' },
    { n: 10, label: 'firms selected (up to)' },
    { n: 10, label: 'individuals selected (up to)' },
  ],
}

export const TIMELINE = [
  {
    stage: 'Submit your application',
    body: 'Complete the application form with your professional details, capabilities, relevant experience, evidence of results, and proposed approach.',
    date: 'Step 1',
  },
  {
    stage: 'Screening and review',
    body: 'CycleBreeze will assess applications based on relevant experience, evidence, capability, proposed costs, execution quality, and suitability for the opportunity.',
    date: 'Step 2',
  },
  {
    stage: 'Shortlisting and validation',
    body: 'Shortlisted applicants may be asked to attend interviews, provide references, demonstrate their work, or submit additional evidence.',
    date: 'Step 3',
  },
  {
    stage: 'Trial selection and planning',
    body: 'Selected applicants will receive further information about the trial, applicable rules, approved execution plan, and allocation terms.',
    date: 'Step 4',
  },
  {
    stage: 'Performance evaluation',
    body: 'Trial performance will be assessed on commercial outcomes, quality of execution, accountability, transparency, and responsible use of resources.',
    date: 'Step 5',
  },
  {
    stage: 'Potential ongoing collaboration',
    body: 'Strong performers may be considered for longer-term collaboration, subject to mutual agreement and separate written terms.',
    date: 'Step 6',
  },
]

export const TRACKS = [
  {
    id: 'individual',
    name: 'Track B · Individual Professionals',
    sub: 'For independent sales professionals, growth marketers, business development specialists, performance marketers, and other qualified practitioners.',
    price: '₦50,000',
    unit: 'trial allocation',
    save: 'Up to 10',
    get: [
      'Potential paid engagement: a base salary or agreed contract remuneration, with performance-based commission where applicable',
      'Meaningful projects: real technology, business development, and digital product growth initiatives',
      'Tools and systems: potential access to company-funded tools, resources, and operational systems for approved work',
      'Career and growth: demonstrate your ability to drive sales, acquire customers, and deliver measurable revenue and user growth',
    ],
    take: [
      'Your contact and professional details',
      'Relevant projects and verifiable results',
      'A clear explanation of your personal contribution',
      'An execution plan and transparent cost proposal',
      'Your availability and preferred engagement model',
    ],
  },
  {
    id: 'company',
    name: 'Track A · Firms and Agencies',
    sub: 'For established or emerging marketing, sales, and commercial growth firms that can demonstrate relevant capabilities and propose an execution team.',
    price: '₦100,000',
    unit: 'trial allocation',
    save: 'Up to 10',
    featured: true,
    get: [
      'Potential commercial contracts: paid service engagements with agreed remuneration and performance-linked incentives where mutually agreed',
      'Ongoing business: potential work on CycleBreeze’s technology services, products, and approved client projects',
      'Operational leverage: work within CycleBreeze’s existing tools, systems, and business ecosystem, subject to approved access',
      'Long-term partnership: position your firm for continued collaboration through reliable execution and measurable results',
    ],
    take: [
      'A proposed account lead and delivery team',
      'Team roles and availability',
      'Relevant evidence of results',
      'An execution plan and transparent cost proposal',
      'Your reporting, accountability, and data protection practices',
    ],
  },
  {
    id: 'runners',
    name: 'Specialist providers',
    sub: 'Specialists may apply under the most appropriate track.',
    price: 'Track A or B',
    unit: '',
    save: 'Both tracks',
    get: [
      'The same opportunity as your chosen track',
      'Assessment on your strongest areas',
      'No need to offer every capability',
    ],
    take: ['Choose the most appropriate track', 'Clearly state your specialisation', 'Be honest about your capability limits'],
  },
]

export const TRACKS_HEAD = {
  stamp: 'Who should apply?',
  title: 'More than a trial.\nBuild, grow and [earn]',
  getLabel: 'What you stand to gain',
  takeLabel: 'What to prepare',
  fine: 'CycleBreeze intends to select up to 10 firms and 10 individual professionals for the trial stage. Trial allocations are available only to shortlisted applicants selected for trial execution and are subject to the trial rules and an approved execution plan. Applying does not guarantee selection or a long-term engagement.',
}

export const LANES = ['Account lead', 'Delivery team', 'Roles', 'Availability', 'Evidence of results']

// "Before you apply": what applicants should have ready, and where the form asks for it.
export const VERIFIED_VALUE = [
  { outcome: 'Contact details', how: 'Your contact and professional details.', value: 'Section A' },
  { outcome: 'Track record', how: 'Relevant projects and verifiable results.', value: 'Section B' },
  { outcome: 'Your contribution', how: 'A clear explanation of your personal contribution to those results.', value: 'Section B' },
  { outcome: 'Strengths and limits', how: 'Your strongest service areas and capability limits.', value: 'Section C' },
  { outcome: 'Tools and access', how: 'Tools, resources, and distribution channels you can lawfully access.', value: 'Section D' },
  { outcome: 'Plan and costs', how: 'An execution plan and transparent cost proposal.', value: 'Section E' },
  {
    outcome: 'Fees and budget',
    how: 'What you can deliver without additional professional fees, and what requires a paid budget.',
    value: 'Section E',
  },
  { outcome: 'Availability', how: 'Your availability and preferred engagement model.', value: 'Section A' },
  { outcome: 'Accountability', how: 'Your reporting, accountability, and data protection practices.', value: 'Section F' },
]

// "Important information for applicants".
export const RULES = [
  { title: 'Evaluation', body: 'The trial is an evaluation exercise.' },
  { title: 'Allocations', body: 'Trial allocations are conditional on selection and an approved plan.' },
  {
    title: 'No guarantees',
    body: 'Applications do not guarantee selection, reimbursement beyond the stated allocation, or a long-term contract.',
  },
  {
    title: 'Terms in writing',
    body: 'Ongoing remuneration, commission, performance fees, scope, tool access, and other engagement terms will be agreed separately in writing.',
  },
]

export const JUDGING = [
  'Commercial outcomes',
  'Quality of execution',
  'Accountability',
  'Transparency',
  'Responsible use of resources',
]

// Applicants must not do these without written approval and an agreed scope.
export const GATES = [
  'Contact customers',
  'Spend funds',
  'Launch campaigns',
  'Access or use CycleBreeze/client data',
  'Make public claims on our behalf',
]

export const FAQS = [
  {
    q: 'Who should apply?',
    a: 'Established or emerging marketing, sales, and commercial growth firms (Track A), and independent sales professionals, growth marketers, business development specialists, performance marketers, and other qualified practitioners (Track B). Specialist providers may apply under the most appropriate track and should clearly state their specialisation.',
  },
  {
    q: 'What is the trial allocation?',
    a: '₦100,000 for firms and agencies, and ₦50,000 for individual professionals. Trial allocations are available only to shortlisted applicants selected for trial execution, and are subject to the trial rules and an approved execution plan.',
  },
  {
    q: 'How many applicants will be selected?',
    a: 'CycleBreeze intends to select up to 10 firms and 10 individual professionals for the trial stage.',
  },
  {
    q: 'How will my application be assessed?',
    a: 'On relevant experience, evidence, capability, proposed costs, execution quality, and suitability for the opportunity. We are not evaluating applicants on lead volume, registrations, impressions, or activity alone.',
  },
  {
    q: 'Do I need to offer every capability?',
    a: 'No. The capabilities listed are examples, not mandatory services that every applicant must offer. State your strongest areas honestly.',
  },
  {
    q: 'What happens after I apply?',
    a: 'Shortlisted applicants may be asked to attend interviews, provide references, demonstrate their work, or submit additional evidence. Selected applicants will then receive information about the trial, applicable rules, approved execution plan, and allocation terms.',
  },
  {
    q: 'Is a job or contract guaranteed?',
    a: 'No. Selection for the trial does not guarantee a job, contract, or ongoing engagement. Strong performers may be considered for longer-term collaboration, subject to mutual agreement and separate written terms.',
  },
  {
    q: 'Who do I contact?',
    a: 'Email sales@cyclebreeze.com, or visit www.cyclebreeze.com.',
  },
]

// Draggable laptop stickers; clicking one shows its rule in the pill above the lid.
export const STICKERS = [
  { id: 'truth', kind: 'text', text: 'No misleading claims', tone: 'green', x: 62, y: 12, r: -6, rule: 'Misleading claims may result in disqualification.' },
  { id: 'receipt', kind: 'badge', icon: 'receipt', tone: 'blue', x: 9, y: 14, r: -8, rule: 'Transparent costing and reporting, always.' },
  { id: 'bot', kind: 'badge', icon: 'botoff', tone: 'ink', x: 38, y: 10, r: 6, rule: 'Fabricated metrics or fake engagement may result in disqualification.' },
  { id: 'ai', kind: 'text', text: 'Responsible AI', tone: 'ink', x: 8, y: 56, r: 5, rule: 'Use AI and automation responsibly.' },
  { id: 'spend', kind: 'badge', icon: 'shield', tone: 'green', x: 30, y: 40, r: -4, rule: 'Unapproved spending may result in disqualification.' },
  { id: 'clock', kind: 'badge', icon: 'clock', tone: 'teal', x: 80, y: 58, r: 9, rule: 'No customer contact, spending or campaigns without written approval.' },
  { id: 'consent', kind: 'text', text: 'Ethical acquisition', tone: 'blue', x: 50, y: 70, r: -3, rule: 'Ethical customer acquisition practices only.' },
  { id: 'claims', kind: 'badge', icon: 'shield', tone: 'blue', x: 86, y: 18, r: 4, rule: 'No unauthorised use of CycleBreeze or client data.' },
]

export const FINAL = {
  title: 'Ready to demonstrate\nwhat you can [deliver]?',
  body: [
    'If you have the experience, practical skills, and commercial discipline to turn opportunities into measurable results, we invite you to apply.',
    'Complete the application and pre-screening form to tell us what you can deliver, how you work, and why you are a strong fit for the challenge.',
  ],
  support:
    'The application form will ask about your experience, results, capabilities, costs, proposed execution approach, and availability. Kindly fill Nil for places with no answer.',
}
