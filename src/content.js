// Everything on the page is sourced from CycleBreeze_Commercial_Growth_Challenge_Updated.md
// (dates, money, rules) and the applicant pack (capabilities, WhatsApp, AI standard).
// The public page must never show winner targets, scoring weights/keys or Bizzie admin data.
//
// Headline syntax: lines split on \n, *word* = script accent, [WORD] = tilted ink tag.

export const CONFIG = {
  // Swap for the live form URL once the developer ships it (PHP/CSV form with server-side cut-off).
  applyUrl:
    'mailto:sales@cyclebreeze.com?subject=Application%20%E2%80%94%20Commercial%20Growth%20Challenge',
  email: 'sales@cyclebreeze.com',
  // Fri 23 Oct, 11:59 PM WAT (UTC+1)
  deadline: '2026-10-23T23:59:00+01:00',
}

export const NAV = [
  { href: '#mandates', label: 'Mandate' },
  { href: '#tracks', label: 'Tracks' },
  { href: '#trial', label: 'Live trial' },
  { href: '#faq', label: 'FAQ' },
  { href: '#rules', label: 'Rules' },
]

export const HERO = {
  badge: 'Now selecting: sales & growth lead',
  title: 'We don’t hire on\n*charm* we hire\non [receipts]',
  lede: 'A cash seed, a five-day live trial on real CycleBreeze assets, and a winner chosen on verified results — not proposals.',
}

// Fanned cards under the hero. `img` cards use real CycleBreeze photography/product shots;
// the rest are brand-colour cards with a sticker icon.
export const HERO_CARDS = [
  { caption: 'Winning B2B clients for software', img: '/photos/team.webp', pos: '40% 50%' },
  { caption: 'Growing Bizzie users who stay', img: '/photos/bizzie.webp', pos: '78% 40%', dark: true },
  { caption: 'Click-to-WhatsApp that converts', icon: 'whatsapp', tone: 'green' },
  { caption: 'Closing deals, collecting cash', img: '/photos/developer.webp', pos: '50% 35%', dark: true },
  { caption: 'Using AI, with human checks', icon: 'bot', tone: 'blue' },
  { caption: 'Doing more with ₦0', img: '/photos/erp.webp', pos: '50% 20%', dark: true },
]

export const PROBLEM = {
  title: 'Leads aren’t the\ngoal. [cash is]',
  poster: { kicker: 'Commercial Growth Challenge', line1: 'Got ₦50,000?', line2: 'grow it.' },
  cards: [
    {
      title: 'Beyond\n*likes & reach*',
      body: 'A lead or a sign-up is not the goal. A paid deal and an active user are. We need sales and marketing run end to end — strategy to cash collected.',
    },
    {
      title: 'Proposals\n*are* cheap',
      body: 'Candidates apply, prove they can do the work, then use a small cash seed in a short live trial. Like the parable of the talents: trusted with a little, judged on what you grow.',
    },
  ],
}

export const MANDATES = [
  {
    id: 'b2b',
    tab: 'CycleBreeze B2B',
    short: 'B2B',
    icon: 'briefcase',
    title: 'Win B2B\nclients',
    points: ['Websites, apps & custom software', 'SaaS, branding & digital marketing', 'Meetings → proposals → collected cash'],
    img: '/photos/team.webp',
    pos: '45% 50%',
    sticker: 'handshake',
  },
  {
    id: 'bizzie',
    tab: 'Bizzie growth',
    short: 'Bizzie',
    icon: 'message',
    title: 'Grow\nBizzie',
    points: ['WhatsApp-first users who sign up', 'Activation and repeat use — not raw sign-ups', 'Conversion to paid Pro plans'],
    img: '/photos/bizzie.webp',
    pos: '15% 50%',
    sticker: 'whatsapp',
    link: { href: 'https://usebizzie.com', label: 'usebizzie.com' },
  },
  {
    id: 'bar',
    tab: 'What we look for',
    short: 'The bar',
    icon: 'target',
    title: 'Prove\nit',
    points: ['Results with numbers someone can check', 'An edge, and wins built on little', 'AI used openly, with human checks', 'Replies, daily logs, deadlines met'],
    img: '/photos/developer.webp',
    pos: '50% 30%',
    sticker: 'trophy',
  },
]

export const NOT_FOR = [
  { quote: 'My campaign got amazing engagement. Isn’t that the point?', who: 'The poster', note: 'measured only on likes' },
  { quote: 'I got you 400 leads. What happens next isn’t my job.', who: 'The ads operator', note: 'can’t explain lead quality' },
  { quote: 'Trust me, the pipeline is looking great.', who: 'The salesperson', note: 'can’t document a pipeline' },
  { quote: 'Here’s a screenshot. Don’t ask where it came from.', who: 'The inflator', note: 'bought followers, fuzzy numbers' },
]

export const DEAL = {
  stats: [
    { n: 50, prefix: '₦', suffix: 'k', label: 'seed per individual' },
    { n: 100, prefix: '₦', suffix: 'k', label: 'seed per company' },
    { n: 750, prefix: '₦', suffix: 'k', label: 'top winner payment' },
    { n: 5, suffix: '%', label: 'commission on cash' },
  ],
}

export const TIMELINE = [
  { stage: 'Apply & prove', body: 'Form and assessment, together', date: '17–23 Oct' },
  { stage: 'Score', body: 'Two blind reviewers · top 15 told by 6 PM', date: '24 Oct' },
  { stage: 'Defend & verify', body: 'Live defence, references, NDA', date: '24–25 Oct' },
  { stage: 'Select & fund', body: 'Agreement, ID check, seed paid', date: '25 Oct' },
  { stage: 'Live trial', body: 'Go-live Monday, close Friday', date: '26–30 Oct' },
  { stage: 'Audit', body: 'Call-backs, re-checks, ledgers', date: '31 Oct – 1 Nov' },
  { stage: 'Announce', body: 'Winners, scorecards, appeals open', date: '2 Nov' },
]

export const TRACKS = [
  {
    id: 'individual',
    name: 'Individuals',
    sub: 'For operators who carry a number alone',
    price: '₦50,000',
    unit: 'seed',
    save: 'Up to 10',
    get: [
      '₦500,000 after success',
      '5% commission on cash you bring',
      'A sales & growth job at CycleBreeze',
      'Reports to the Head of Sales',
    ],
    take: ['Six assessment modules', '30-minute live defence', '4 hours a day during the trial', 'Lighter paperwork, same bar'],
  },
  {
    id: 'company',
    name: 'Companies',
    sub: 'For agencies and firms that deliver as a team',
    price: '₦100,000',
    unit: 'seed',
    save: 'Up to 10',
    featured: true,
    get: [
      '₦750,000 after success',
      '5% commission on cash you bring',
      'A retained Growth Partner contract',
      'Ongoing work across our services',
      'Overseen by the Head of Sales',
    ],
    take: [
      'Ten assessment modules',
      '45-minute live defence',
      'Named delivery team',
      'Evidence dossier & proposal',
      'More proof and more work',
    ],
  },
  {
    id: 'runners',
    name: 'Runners-up',
    sub: 'Places 2 and 3 in each track',
    price: 'Contracts',
    unit: '',
    save: 'Both tracks',
    get: [
      'Individuals: 3-month paid contracts',
      'Companies: preferred-vendor panel',
      'Every finisher: a written reference',
    ],
    take: ['Pass every gate', 'Rank 2nd or 3rd in your track', 'Scorecard + 5-day appeal window'],
  },
]

export const LANES = ['B2B acquisition', 'WhatsApp & product growth', 'Channels & partnerships', 'Content & community', 'Growth operations']

export const VERIFIED_VALUE = [
  { outcome: 'Activated Bizzie user', how: 'Joined with your code, onboarded, used a core feature on two separate days', value: '₦2,000' },
  { outcome: 'Qualified B2B lead', how: 'A decision-maker who confirms on our call-back — need, budget band, timeline', value: '₦8,000' },
  { outcome: 'Meeting held', how: 'Discovery or demo with a qualified lead, attended and logged', value: '₦30,000' },
  { outcome: 'Proposal sent', how: 'To a qualified lead after a meeting, at proposal value only', value: '₦60,000' },
  { outcome: 'Cash collected', how: 'Money received from a deal or paid Pro plan you originated', value: 'Face value' },
]

export const RULES = [
  { title: 'Tracking', body: 'A unique code in every link and WhatsApp message. First code wins.' },
  { title: 'No collisions', body: 'Ad audiences by random draw; prospects held 30 days in a shared registry.' },
  { title: 'Approval first', body: 'Every ad, script and message approved — we reply within 4 working hours.' },
  { title: 'Speed', body: 'Answer leads within 2 hours. Daily log by 5 PM. Check-ins Tue & Thu.' },
]

export const JUDGING = [
  'Verified results',
  'Return on Talent',
  'Systems & AI leverage',
  'Consistency',
  'Integrity & character',
  'Strategy & 90-day plan',
]

export const GATES = ['Integrity audit passed', 'Traceable attribution', 'No breach of conduct', 'Return on Talent ≥ 2.0']

export const FAQS = [
  {
    q: 'Does it cost anything to apply?',
    a: 'No. Applying is free and your own money is never required. We will never ask you to pay to apply, be shortlisted or receive the seed — anything that does is not from us.',
  },
  {
    q: 'Is the seed my pay?',
    a: 'No. The seed (₦50,000 individuals, ₦100,000 companies) is cash in advance for approved costs: ad spend, tools, lawful data, creative and outreach. Not for paying yourself, buying followers or leads, gifts or personal costs. It is paid by Sun 25 Oct after the signed agreement and ID check.',
  },
  {
    q: 'What if I spend it honestly and it doesn’t work?',
    a: 'Honest spend that didn’t work is not clawed back. Every naira needs a receipt and unspent funds are returned within 3 working days. Fabrication means a full return and disqualification.',
  },
  {
    q: 'Can I use AI and automation?',
    a: 'Yes — it’s expected. Disclose what you use, check its output and answer for every error. No confidential records go into third-party AI tools without authorisation.',
  },
  {
    q: 'I’m great at one channel, not all. Should I apply?',
    a: 'Yes. Name your strongest lanes, your limits and what you’d partner on. A specialist can win on one lane; a generalist must show how every function is covered.',
  },
  {
    q: 'How do you stop candidates clashing?',
    a: 'Paid audiences are assigned by random draw, B2B prospects are claimed in a shared registry with a 30-day hold, and a Do-Not-Contact list protects existing clients and partners.',
  },
  {
    q: 'Is a job or contract guaranteed?',
    a: 'No. Nothing is promised until an agreement is signed, and if nobody clears the minimum bar in a track we don’t appoint in that track.',
  },
  {
    q: 'Who do I contact?',
    a: 'sales@cyclebreeze.com. Questions are answered for all applicants within 24 hours without naming who asked. Only that address and one official WhatsApp number speak for us.',
  },
]

// Draggable laptop stickers; clicking one shows its rule in the pill above the lid.
export const STICKERS = [
  { id: 'truth', kind: 'text', text: 'Say only what you can do', tone: 'green', x: 62, y: 12, r: -6, rule: 'Overclaiming loses points. Admitting a gap loses none.' },
  { id: 'receipt', kind: 'badge', icon: 'receipt', tone: 'blue', x: 9, y: 14, r: -8, rule: 'Every naira of the seed needs a receipt.' },
  { id: 'bot', kind: 'badge', icon: 'botoff', tone: 'ink', x: 38, y: 10, r: 6, rule: 'Fake leads or bot users end the application.' },
  { id: 'ai', kind: 'text', text: 'AI: yes. Hidden AI: no.', tone: 'ink', x: 8, y: 56, r: 5, rule: 'AI is expected — and must be disclosed and checked.' },
  { id: 'free', kind: 'badge', icon: 'free', tone: 'green', x: 30, y: 40, r: -4, rule: 'Applying is free. We never ask you to pay.' },
  { id: 'clock', kind: 'badge', icon: 'clock', tone: 'teal', x: 80, y: 58, r: 9, rule: 'Reply within 12 hours. Two missed deadlines = withdrawal.' },
  { id: 'consent', kind: 'text', text: 'Opt-in only', tone: 'blue', x: 50, y: 70, r: -3, rule: 'No unsolicited bulk messaging or scraped data (NDPA).' },
  { id: 'claims', kind: 'badge', icon: 'shield', tone: 'blue', x: 86, y: 18, r: 4, rule: 'No unapproved claims on price, scope or timelines.' },
]
