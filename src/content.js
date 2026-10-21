// Page copy, from the developer brief for the CycleBreeze Commercial Growth Challenge landing page.
//
// Headline syntax: lines split on \n, *word* = script accent, [WORD] = tilted ink tag.

export const CONFIG = {
  // Every "Apply" button opens the application form on its own route.
  applyUrl: '/submit',
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
  { href: '#gains', label: 'Rewards' },
  { href: '#timeline', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
  { href: '/terms', label: 'Terms' },
]

export const HERO = {
  badge: 'Call for proposals',
  title: 'CycleBreeze Commercial\nGrowth [Challenge]',
  subtitle: 'CycleBreeze is looking for a long-term sales and marketing partner.',
  lede: 'We invite qualified firms and individual professionals to take part in a performance-focused trial.',
  // The opportunity, read left to right: prove it, earn it, run it.
  path: [
    { step: '01', title: 'Prove your expertise', body: 'Take part in a performance-focused trial.', icon: 'target' },
    { step: '02', title: 'Become an official partner', body: 'Earn an official marketing partnership with CycleBreeze.', icon: 'handshake' },
    {
      step: '03',
      title: 'Run multi-million-naira budgets',
      body: 'Manage sales and marketing across CycleBreeze, its subsidiaries and its clients.',
      icon: 'rocket',
    },
  ],
  seekLead: 'We’re building lasting partnerships with those who',
  seek: ['Deliver measurable results', 'Execute effectively', 'Build systems that drive commercial growth'],
  ask: 'Apply to be considered.',
  deadline: 'Applications close Friday, 23 October 2026, at 11:59 PM WAT.',
}

export const PROBLEM = {
  title: 'What is the Commercial\nGrowth [Challenge]?',
  intro:
    'The CycleBreeze Commercial Growth Challenge is designed to identify capable commercial partners who can turn business opportunities into measurable results. The challenge focuses on two primary outcomes:',
  cards: [
    {
      title: '1. B2B Sales and Revenue',
      body: 'Identify and qualify relevant business prospects, develop effective sales approaches, convert qualified prospects into paying CycleBreeze clients, and generate revenue for our technology services.',
    },
    {
      title: '2. Bizzie Product Growth (Subsidiary product)',
      body: 'Help relevant users discover and activate Bizzie, continue using the product, and convert into paid subscriptions or other approved revenue-generating actions.',
    },
  ],
  note: 'We are not evaluating applicants on lead volume, registrations, impressions, or activity alone. We want to understand whether their work produces qualified opportunities, meaningful conversions, and measurable commercial value.',
}

export const MANDATES_HEAD = {
  stamp: 'What they stand to get',
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

export const GAINS_HEAD = {
  stamp: 'What they stand to get',
  title: 'More than a trial.\nBuild, grow and [earn]',
  close: 'Deliver results. Unlock opportunities. Grow with CycleBreeze.',
}

export const GAINS = [
  {
    id: 'individual',
    track: 'Individual professionals',
    icon: 'briefcase',
    gains: [
      { title: 'Paid engagements', body: 'Salary or agreed contract fees, plus commission where applicable.' },
      { title: 'Real-world projects', body: 'Work on technology, sales and product growth initiatives.' },
      { title: 'Tools & resources', body: 'Potential access to company-funded tools and systems.' },
      { title: 'Career growth', body: 'Prove your ability to drive sales, revenue and user growth.' },
    ],
    first: {
      role: 'Sales & Growth Job',
      reward: '₦500,000',
      commission: '5% on cash received from originated B2B deals and paid Bizzie subscriptions, for the agreed period.',
    },
    runnersUp: 'Three-month paid contracts in their strongest area of expertise.',
  },
  {
    id: 'firm',
    track: 'Firms & agencies',
    icon: 'target',
    gains: [
      { title: 'Commercial contracts', body: 'Paid service contracts and performance incentives where agreed.' },
      { title: 'Ongoing projects', body: 'Opportunities across CycleBreeze services, products and client projects.' },
      { title: 'Operational support', body: 'Potential access to CycleBreeze tools and business systems.' },
      { title: 'Long-term partnership', body: 'Position your firm for continued collaboration through results.' },
    ],
    first: {
      role: 'Retained Growth Partner (agreed terms)',
      reward: '₦750,000',
      commission: '5% on cash received from originated B2B deals and paid Bizzie subscriptions, for the agreed period.',
    },
    runnersUp: 'Placement on CycleBreeze’s preferred-vendor panel.',
  },
]

export const TIMELINE = [
  {
    stage: 'Application submission',
    body: 'Applicants complete and submit the application form with their professional details, relevant experience, capabilities, and initial proof of competence. A confirmation message will be sent upon successful submission, outlining the next steps, including proposal submission.',
    date: 'Step 1',
  },
  {
    stage: 'Proposal submission, screening and review',
    body: 'Applicants submit their proposals for review. CycleBreeze will assess applications and proposals based on relevant experience, demonstrated capabilities, proof of competence, proposed approach, and suitability for the opportunity.',
    date: 'Step 2',
  },
  {
    stage: 'Competence assessment and validation',
    body: 'Shortlisted applicants will undergo a competence assessment to demonstrate their practical skills and ability to deliver. Submitted evidence and claims will also be validated before applicants proceed to the trial stage.',
    date: 'Step 3',
  },
  {
    stage: 'Trial selection and planning',
    body: 'Applicants who successfully pass the competence assessment and validation may be selected for a time-bound practical trial. Selected applicants will receive the trial objectives, duration, performance expectations, applicable rules, and stipend details.',
    date: 'Step 4',
  },
  {
    stage: 'Practical trial and performance evaluation',
    body: 'Applicants will execute assigned tasks during the trial period and receive a modest stipend under the agreed terms. Performance will be evaluated based on actual results, quality of execution, accountability, and responsible use of resources.',
    date: 'Step 5',
  },
  {
    stage: 'Potential ongoing collaboration',
    body: 'Strong performers may be considered for longer-term collaboration, subject to demonstrated results, mutual agreement, and separate written terms.',
    date: 'Step 6',
  },
]

export const FAQS = [
  {
    q: 'Who should apply?',
    a: 'Established or emerging marketing, sales, and commercial growth firms (Track A), and independent sales professionals, growth marketers, business development specialists, performance marketers, and other qualified practitioners (Track B). Specialist providers may apply under the most appropriate track and should clearly state their specialisation.',
  },
  {
    q: 'What is the trial allocation?',
    a: '₦100,000 for firms and agencies, and ₦50,000 for individual professionals. Trial allocations are available only to shortlisted applicants selected for trial execution, and are subject to the trial rules and an approved execution plan. They are separate from the prizes: the top performers in each track also win the rewards listed under “What they stand to get”.',
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
    a: 'You will receive a confirmation message outlining the next steps, including proposal submission. Shortlisted applicants then undergo a competence assessment and validation of their evidence. Those selected for the practical trial will receive the trial objectives, duration, performance expectations, applicable rules, and stipend details.',
  },
  {
    q: 'Is a job or contract guaranteed?',
    a: 'Not for taking part. Selection for the trial does not guarantee a job, contract, or ongoing engagement. The 1st-place prizes include a Sales & Growth Job for individuals and a Retained Growth Partner role for firms, on agreed terms. Other strong performers may be considered for longer-term collaboration, subject to mutual agreement and separate written terms.',
  },
  {
    q: 'Who do I contact?',
    a: 'Email sales@cyclebreeze.com, or visit www.cyclebreeze.com.',
  },
]

export const FINAL = {
  title: 'Ready to demonstrate\nwhat you can [deliver]?',
  body: [
    'If you have the experience, practical skills, and commercial discipline to turn opportunities into measurable results, we invite you to apply.',
    'Complete the application and pre-screening form to tell us what you can deliver, how you work, and why you are a strong fit for the challenge.',
  ],
  support:
    'The application form will ask about your experience, results, capabilities, costs, and proposed execution approach. Kindly fill Nil for places with no answer.',
}

export const TERMS = {
  title: 'CycleBreeze Commercial Growth Challenge: Terms & Conditions',
  items: [
    {
      head: 'Eligibility',
      body: 'Open to sales and marketing firms (Track A) and individual professionals (Track B). Applicants must give accurate information and may be asked for references or evidence.',
    },
    {
      head: 'Selection',
      body: 'CycleBreeze will select up to 10 firms and up to 10 individuals, and may select fewer. Applying does not guarantee selection, an engagement or a contract.',
    },
    {
      head: 'Trial',
      body: 'Selected participants complete a 14-day trial. CycleBreeze may adjust the duration and will notify participants in writing.',
    },
    {
      head: 'Trial allocation',
      body: 'It is an advance for approved trial expenses only, not salary or a fee. It is released after a written budget is approved. Participants must reconcile spend with receipts within 3 working days after the trial and return unspent funds within 5 working days.',
    },
    {
      head: 'No spending without approval',
      body: 'Participants must not spend funds, contact customers, launch campaigns, use CycleBreeze or client data, or make public claims for CycleBreeze without written approval and an agreed scope.',
    },
    {
      head: 'Costs',
      body: 'Applicants must state separately what they will do with no additional professional fee, what needs media spend, and what needs third-party costs. Spend is never presented as free.',
    },
    {
      head: 'Honesty and integrity',
      body: 'No fake metrics, edited screenshots, bought followers or engagement, or unlawful messaging. CycleBreeze may verify claims and disqualify misleading submissions. Integrity breaches override any score.',
    },
    {
      head: 'Data and privacy',
      body: 'Applicant information is used only to evaluate the challenge and is seen only by authorized reviewers. Participants must follow privacy, consent and platform rules and keep all data confidential.',
    },
    {
      head: 'Access',
      body: 'CycleBreeze grants role-based, minimum-permission, time-limited access. Participants must never share or request passwords. Access ends within 24 hours of closeout.',
    },
    {
      head: 'Ownership',
      body: 'Trial-created assets, campaign data and leads are owned as agreed in writing before the trial begins. Participants must hand over editable assets and reports at closeout.',
    },
    {
      head: 'Evaluation',
      body: 'Participants are scored on results and execution quality using CycleBreeze’s rubric, and decisions are final.',
    },
    {
      head: 'No guarantee of work',
      body: 'Strong performers may be considered for employment, a contract, a retainer, specialist work or a longer pilot, with commission where applicable. Nothing is promised. Any engagement requires a separate written agreement.',
    },
    {
      head: 'Changes',
      body: 'CycleBreeze may update these terms, the timeline or the process, and will notify affected participants.',
    },
  ],
}
