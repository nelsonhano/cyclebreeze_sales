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
  { href: '#timeline', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
]

export const HERO = {
  badge: 'Call for proposals',
  title: 'CycleBreeze Commercial\nGrowth [Challenge]',
  subtitle: 'Sales, Marketing & Commercial Growth Partners Wanted',
  lede: 'CycleBreeze is inviting qualified firms and individual professionals to participate in a performance-focused trial to help grow our technology services and Bizzie product.',
  deadline: 'Applications close Friday, 23 October 2026, at 11:59 PM WAT.',
}

export const PROBLEM = {
  title: 'What is the Commercial\nGrowth [Challenge]?',
  intro:
    'The CycleBreeze Commercial Growth Challenge is designed to identify capable commercial partners who can turn business opportunities into measurable results. The challenge focuses on two primary outcomes:',
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
    a: 'You will receive a confirmation message outlining the next steps, including proposal submission. Shortlisted applicants then undergo a competence assessment and validation of their evidence. Those selected for the practical trial will receive the trial objectives, duration, performance expectations, applicable rules, and stipend details.',
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

export const FINAL = {
  title: 'Ready to demonstrate\nwhat you can [deliver]?',
  body: [
    'If you have the experience, practical skills, and commercial discipline to turn opportunities into measurable results, we invite you to apply.',
    'Complete the application and pre-screening form to tell us what you can deliver, how you work, and why you are a strong fit for the challenge.',
  ],
  support:
    'The application form will ask about your experience, results, capabilities, costs, and proposed execution approach. Kindly fill Nil for places with no answer.',
}
