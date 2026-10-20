// Page copy, taken word for word from the developer brief for the
// CycleBreeze Commercial Growth Challenge landing page.

export const CONFIG = {
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
  { href: '#about', label: 'The challenge' },
  { href: '#tracks', label: 'Who should apply' },
  { href: '#process', label: 'Selection process' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#prepare', label: 'Before you apply' },
]

export const HERO = {
  eyebrow: 'Call for proposals',
  title: 'CycleBreeze Commercial Growth Challenge',
  subtitle: 'Sales, Marketing & Commercial Growth Partners Wanted',
  question: 'Can you turn strategy into qualified prospects, paying customers, and measurable revenue?',
  body: [
    'CycleBreeze is inviting qualified firms and individual professionals to participate in a performance-focused trial to help grow our technology services and Bizzie product.',
    'We are looking for people who can execute, measure outcomes, learn quickly, and build practical systems that generate commercial results.',
  ],
}

export const ABOUT = {
  title: 'What Is the Commercial Growth Challenge?',
  intro:
    'The CycleBreeze Commercial Growth Challenge is designed to identify capable commercial partners who can turn business opportunities into measurable results.',
  lead: 'The challenge focuses on two primary outcomes:',
  outcomes: [
    {
      icon: 'briefcase',
      title: 'B2B Sales and Revenue',
      body: 'Identify and qualify relevant business prospects, develop effective sales approaches, convert qualified prospects into paying CycleBreeze clients, and generate revenue for our technology services.',
    },
    {
      icon: 'trending',
      title: 'Bizzie Product Growth',
      body: 'Help relevant users discover and activate Bizzie, continue using the product, and convert into paid subscriptions or other approved revenue-generating actions.',
    },
  ],
  note: 'We are not evaluating applicants on lead volume, registrations, impressions, or activity alone. We want to understand whether their work produces qualified opportunities, meaningful conversions, and measurable commercial value.',
}

export const TRACKS = [
  {
    id: 'firms',
    label: 'Track A',
    icon: 'building',
    title: 'Firms and Agencies',
    body: 'For established or emerging marketing, sales, and commercial growth firms that can demonstrate relevant capabilities and propose an execution team.',
    allocation: '₦100,000',
  },
  {
    id: 'individuals',
    label: 'Track B',
    icon: 'user',
    title: 'Individual Professionals',
    body: 'For independent sales professionals, growth marketers, business development specialists, performance marketers, and other qualified practitioners.',
    allocation: '₦50,000',
  },
]

export const TRACKS_NOTE = {
  selection: 'CycleBreeze intends to select up to 10 firms and 10 individual professionals for the trial stage.',
  conditions:
    'Trial allocations are available only to shortlisted applicants selected for trial execution and are subject to the trial rules and an approved execution plan. Applying does not guarantee selection or a long-term engagement.',
  specialists: 'Specialist providers may apply under the most appropriate track and should clearly state their specialisation.',
}

export const DELIVER = {
  title: 'We Value Execution, Not Just Ideas.',
  intro: 'Selected applicants may be expected to demonstrate capabilities such as:',
  items: [
    { icon: 'target', text: 'Identifying and prioritising suitable target markets.' },
    { icon: 'lightbulb', text: 'Building clear offers and commercial propositions.' },
    { icon: 'search', text: 'Prospect research, qualification, and outreach.' },
    { icon: 'funnel', text: 'Sales pipeline management and consistent follow-up.' },
    { icon: 'megaphone', text: 'Paid advertising and other appropriate acquisition campaigns.' },
    { icon: 'message', text: 'WhatsApp and other approved customer acquisition channels.' },
    { icon: 'layout', text: 'Landing pages, conversion optimisation, and funnel design.' },
    { icon: 'workflow', text: 'CRM setup, reporting, workflow automation, and AI-enabled execution.' },
    { icon: 'chart', text: 'Transparent reporting on costs, outcomes, and lessons learned.' },
  ],
  note: 'These are examples of relevant capabilities, not mandatory services that every applicant must offer. Applicants should state their strongest areas honestly.',
}

export const STEPS = [
  {
    title: 'Submit Your Application',
    body: 'Complete the application form with your professional details, capabilities, relevant experience, evidence of results, and proposed approach.',
  },
  {
    title: 'Screening and Review',
    body: 'CycleBreeze will assess applications based on relevant experience, evidence, capability, proposed costs, execution quality, and suitability for the opportunity.',
  },
  {
    title: 'Shortlisting and Validation',
    body: 'Shortlisted applicants may be asked to attend interviews, provide references, demonstrate their work, or submit additional evidence.',
  },
  {
    title: 'Trial Selection and Planning',
    body: 'Selected applicants will receive further information about the trial, applicable rules, approved execution plan, and allocation terms.',
  },
  {
    title: 'Performance Evaluation',
    body: 'Trial performance will be assessed on commercial outcomes, quality of execution, accountability, transparency, and responsible use of resources.',
  },
  {
    title: 'Potential Ongoing Collaboration',
    body: 'Strong performers may be considered for longer-term collaboration, subject to mutual agreement and separate written terms.',
  },
]

export const STEPS_NOTE = 'Selection for the trial does not guarantee a job, contract, or ongoing engagement.'

export const LOOK_FOR = [
  { icon: 'trending', text: 'Proven commercial results.' },
  { icon: 'filecheck', text: 'Clear evidence and honest attribution.' },
  { icon: 'listchecks', text: 'Strong execution and follow-through.' },
  { icon: 'wrench', text: 'Practical, resourceful problem-solving.' },
  { icon: 'receipt', text: 'Transparent costing and reporting.' },
  { icon: 'bot', text: 'Responsible use of AI and automation.' },
  { icon: 'shield', text: 'Ethical customer acquisition practices.' },
  { icon: 'refresh', text: 'Ability to learn, adapt, and improve performance.' },
]

export const BENEFITS = {
  eyebrow: 'What selected participants stand to gain',
  title: 'More Than a Trial. An Opportunity to Build, Grow and Earn.',
  intro:
    'The CycleBreeze Commercial Growth Challenge is an opportunity to demonstrate your capabilities, deliver measurable commercial results, and position yourself for a potential long-term partnership with CycleBreeze.',
  columns: ['For Individual Professionals', 'For Firms and Agencies'],
  // Each row pairs the matching benefit for individuals and for firms.
  rows: [
    [
      {
        title: 'Potential Paid Engagement',
        body: 'Opportunity to receive a base salary or agreed contract remuneration, with performance-based commission where applicable.',
      },
      {
        title: 'Potential Commercial Contracts',
        body: 'Opportunity to secure paid service engagements with agreed remuneration and performance-linked incentives where mutually agreed.',
      },
    ],
    [
      {
        title: 'Meaningful Projects',
        body: 'Work on real technology, business development, and digital product growth initiatives.',
      },
      {
        title: 'Ongoing Business Opportunities',
        body: 'Potential to work on CycleBreeze’s technology services, products, and approved client projects.',
      },
    ],
    [
      {
        title: 'Tools and Systems',
        body: 'Potential access to company-funded tools, resources, and operational systems required for approved work.',
      },
      {
        title: 'Operational Leverage',
        body: 'Opportunity to work within CycleBreeze’s existing tools, systems, and business ecosystem, subject to approved access.',
      },
    ],
    [
      {
        title: 'Career and Growth Opportunities',
        body: 'Demonstrate your ability to drive sales, acquire customers, and deliver measurable revenue and user growth.',
      },
      {
        title: 'Long-Term Partnership Potential',
        body: 'Position your firm for continued collaboration by demonstrating reliable execution and measurable results.',
      },
    ],
  ],
  integrity:
    'We value integrity as much as performance. Misleading claims, fabricated metrics, fake engagement, unauthorised use of data, and unapproved spending may result in disqualification.',
}

export const PREPARE = {
  title: 'Before You Apply',
  intro: 'Applicants should be ready to provide:',
  items: [
    'Their contact and professional details.',
    'Relevant projects and verifiable results.',
    'A clear explanation of their personal contribution to those results.',
    'Their strongest service areas and capability limits.',
    'Tools, resources, and distribution channels they can lawfully access.',
    'An execution plan and transparent cost proposal.',
    'A breakdown of what they can deliver without additional professional fees and what requires a paid budget.',
    'Their availability and preferred engagement model.',
    'Their reporting, accountability, and data protection practices.',
  ],
  firms:
    'For firms, the application should also identify the proposed account lead, delivery team, roles, availability, and relevant evidence of results.',
  note: 'The full requirements will be collected through the application form.',
}

export const NOTICE = {
  title: 'Important Information for Applicants',
  items: [
    'The trial is an evaluation exercise.',
    'Trial allocations are conditional on selection and an approved plan.',
    'Applications do not guarantee selection, reimbursement beyond the stated allocation, or a long-term contract.',
    'Ongoing remuneration, commission, performance fees, scope, tool access, and other engagement terms will be agreed separately in writing.',
    'Applicants must not contact customers, spend funds, launch campaigns, access or use CycleBreeze/client data, or make public claims on behalf of CycleBreeze without written approval and an agreed scope.',
    'CycleBreeze may verify references, request demonstrations or supporting evidence, and disqualify misleading submissions.',
  ],
}

export const CTA = {
  title: 'Ready to Demonstrate What You Can Deliver?',
  body: [
    'If you have the experience, practical skills, and commercial discipline to turn opportunities into measurable results, we invite you to apply.',
    'Complete the application and pre-screening form to tell us what you can deliver, how you work, and why you are a strong fit for the challenge.',
  ],
  support:
    'The application form will ask about your experience, results, capabilities, costs, proposed execution approach, and availability.',
}
