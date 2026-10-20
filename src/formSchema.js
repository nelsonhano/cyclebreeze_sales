// Application form, Sections A to F of the developer brief.
// Every field becomes one column in the Google Sheet, headed by its `sheet` label (or `label`).
//
// Field shape: { id, type, label, help?, required?, options?, when?(values), sheet? }
// Types: text, email, tel, url, number, date, textarea, select, radio, ratings, checkbox, fieldset.

export const TRACK_OPTIONS = [
  { value: 'individual', label: 'Individual professional' },
  { value: 'firm', label: 'Marketing or sales firm' },
  { value: 'specialist', label: 'Specialist provider' },
]

const isFirmLike = (v) => v.track === 'firm' || v.track === 'specialist'

export const RATING_LEVELS = ['Expert and proven', 'Strong practitioner', 'Working knowledge', 'Partner required', 'Not offered']

export const CAPABILITIES = [
  'B2B prospecting',
  'Cold email',
  'LinkedIn prospecting',
  'Cold calling',
  'Paid advertising',
  'WhatsApp campaigns and integrations',
  'Content',
  'SEO / AEO / GEO',
  'PR',
  'Landing pages',
  'Conversion optimisation',
  'CRM',
  'Automation',
  'AI-enabled workflows',
  'Sales leadership',
  'SOP development',
]

const project = (n) => ({
  id: `project${n}`,
  type: 'fieldset',
  label: `Project ${n}`,
  help: n === 1 ? 'Delivered in the last 24 to 36 months. You may anonymise the client name.' : undefined,
  fields: [
    { id: `p${n}_name`, type: 'text', label: 'Project or client, and year', required: true, sheet: `P${n} Project` },
    {
      id: `p${n}_objective`,
      type: 'textarea',
      rows: 3,
      label: 'Objective and starting baseline',
      help: 'What were you asked to achieve, and where were the numbers when you started?',
      required: true,
      sheet: `P${n} Objective and baseline`,
    },
    {
      id: `p${n}_scope`,
      type: 'textarea',
      rows: 2,
      label: 'Budget, duration, and your role',
      required: true,
      sheet: `P${n} Budget, duration, role`,
    },
    {
      id: `p${n}_outcome`,
      type: 'textarea',
      rows: 3,
      label: 'Measurable outcome and evidence',
      help: 'Revenue, qualified leads, meetings, conversion rates, customer acquisition cost, ROAS, or another relevant metric.',
      required: true,
      sheet: `P${n} Outcome and evidence`,
    },
    {
      id: `p${n}_attribution`,
      type: 'textarea',
      rows: 2,
      label: 'How were the results attributed?',
      required: true,
      sheet: `P${n} Attribution`,
    },
    {
      id: `p${n}_contribution`,
      type: 'textarea',
      rows: 2,
      label: 'Your contribution versus the team, client, media budget, and other partners',
      required: true,
      sheet: `P${n} Contribution`,
    },
  ],
})

export const STEPS = [
  {
    id: 'a',
    letter: 'A',
    title: 'Applicant Identity and Track',
    intro: 'Tell us who you are, how to reach you, and how you would like to work with us.',
    fields: [
      { id: 'name', type: 'text', label: 'Full name or registered business name', required: true, autoComplete: 'name' },
      { id: 'track', type: 'radio', label: 'Application track', required: true, options: TRACK_OPTIONS },
      {
        id: 'specialisation',
        type: 'text',
        label: 'Your specialisation',
        help: 'Specialist providers should clearly state their specialisation.',
        required: true,
        when: (v) => v.track === 'specialist',
      },
      { id: 'email', type: 'email', label: 'Contact email', required: true, autoComplete: 'email', half: true },
      { id: 'phone', type: 'tel', label: 'Phone number', required: true, autoComplete: 'tel', half: true },
      { id: 'location', type: 'text', label: 'Location (city and country)', required: true, half: true },
      {
        id: 'contactChannel',
        type: 'select',
        label: 'Preferred contact channel',
        required: true,
        half: true,
        options: ['Email', 'Phone call', 'WhatsApp', 'LinkedIn'],
      },
      {
        id: 'profiles',
        type: 'textarea',
        rows: 3,
        label: 'Website, LinkedIn, portfolio, or other professional profiles',
        help: 'One link per line.',
        required: true,
      },
      {
        id: 'firmHeading',
        type: 'heading',
        label: 'Firm details',
        help: 'For firms and specialist providers applying as a business.',
        when: isFirmLike,
      },
      {
        id: 'registration',
        type: 'select',
        label: 'Firm registration status',
        required: (v) => v.track === 'firm',
        half: true,
        options: ['Registered (CAC)', 'Registration in progress', 'Registered outside Nigeria', 'Not registered'],
        when: isFirmLike,
      },
      { id: 'yearsOperating', type: 'number', label: 'Years operating', min: 0, required: (v) => v.track === 'firm', half: true, when: isFirmLike },
      { id: 'teamSize', type: 'number', label: 'Team size', min: 1, required: (v) => v.track === 'firm', half: true, when: isFirmLike },
      { id: 'accountLead', type: 'text', label: 'Proposed account lead', required: (v) => v.track === 'firm', half: true, when: isFirmLike },
      {
        id: 'deliveryTeam',
        type: 'textarea',
        rows: 3,
        label: 'Proposed delivery team',
        help: 'Names, roles, and availability of each person.',
        required: (v) => v.track === 'firm',
        when: isFirmLike,
      },
      { id: 'availabilityHeading', type: 'heading', label: 'Availability' },
      { id: 'startDate', type: 'date', label: 'Earliest start date', required: true, half: true },
      {
        id: 'capacity',
        type: 'select',
        label: 'Weekly capacity',
        required: true,
        half: true,
        options: ['Under 10 hours', '10 to 20 hours', '20 to 30 hours', '30 to 40 hours', 'More than 40 hours'],
      },
      {
        id: 'timezone',
        type: 'text',
        label: 'Time zone constraints',
        help: 'Leave blank if you can work within West Africa Time (WAT) business hours.',
      },
      {
        id: 'engagementModel',
        type: 'select',
        label: 'Preferred engagement model',
        required: true,
        options: [
          'Full time role',
          'Part time role',
          'Fixed term contract',
          'Monthly retainer',
          'Commission or performance based',
          'Agency service contract',
          'Open to discussion',
        ],
      },
    ],
  },
  {
    id: 'b',
    letter: 'B',
    title: 'Commercial Track Record',
    intro: 'Share three relevant projects delivered in the last 24 to 36 months. Be specific and honest about attribution.',
    fields: [
      project(1),
      project(2),
      project(3),
      {
        id: 'underperformed',
        type: 'textarea',
        rows: 4,
        label: 'One underperforming initiative and the lessons you learned',
        required: true,
      },
      {
        id: 'references',
        type: 'select',
        label: 'Can you provide references or anonymised evidence?',
        required: true,
        options: ['References and anonymised evidence', 'References only', 'Anonymised evidence only', 'Neither at this time'],
      },
      { id: 'referencesNote', type: 'textarea', rows: 2, label: 'Notes on references or evidence (optional)' },
    ],
  },
  {
    id: 'c',
    letter: 'C',
    title: 'Strengths and Limits',
    intro: 'Rate each capability honestly. Admitting a gap is better than overclaiming.',
    fields: [
      { id: 'ratings', type: 'ratings', label: 'Capability ratings', required: true, items: CAPABILITIES, levels: RATING_LEVELS },
      { id: 'otherCapabilities', type: 'textarea', rows: 2, label: 'Other capabilities or specialisations (optional)' },
    ],
  },
  {
    id: 'd',
    letter: 'D',
    title: 'Tools, Access and Leverage',
    intro: 'Tell us what you can bring to the work, and what you would need from us.',
    fields: [
      {
        id: 'tools',
        type: 'textarea',
        rows: 4,
        label: 'Tools you own, subscribe to, can access through partners, or would need CycleBreeze to fund',
        required: true,
      },
      {
        id: 'relationships',
        type: 'textarea',
        rows: 3,
        label: 'Relevant industry relationships, communities, channel partners, and distribution leverage',
        required: true,
      },
      {
        id: 'audiences',
        type: 'textarea',
        rows: 3,
        label: 'Lawfully available audiences, permissioned lists, partnerships, and reusable assets',
        required: true,
      },
      { id: 'markets', type: 'textarea', rows: 2, label: 'Languages, regions, and industries you serve', required: true },
      {
        id: 'aiUse',
        type: 'textarea',
        rows: 4,
        label: 'AI tools and workflows you use in production',
        help: 'Include your human review steps, quality safeguards, cost, and the impact on results.',
        required: true,
      },
      {
        id: 'wouldNotRecommend',
        type: 'textarea',
        rows: 3,
        label: 'Activities you would not recommend, for ethical, practical, or commercial reasons',
        required: true,
      },
    ],
  },
  {
    id: 'e',
    letter: 'E',
    title: 'Cost and Commercial Proposal',
    intro: 'Be transparent about what you can deliver at no extra professional fee, and what needs a paid budget.',
    fields: [
      {
        id: 'noFeeDeliverables',
        type: 'textarea',
        rows: 4,
        label: 'Deliverables included without additional professional fees during the trial',
        required: true,
      },
      {
        id: 'paidCosts',
        type: 'textarea',
        rows: 6,
        label: 'Costs that need a paid budget',
        help: 'For each cost (paid media, software, data, phone credits, creative work, APIs, subcontractors, or other resources), state the estimated amount, purpose, duration, assumptions, owner, expected outcome, and whether it falls inside or outside the trial allocation.',
        placeholder: 'Example: Meta ads, ₦30,000, 5 days, to test two offers for Bizzie sign ups, owner: me, expected 40 qualified conversations, inside allocation',
        required: true,
      },
      { id: 'totalCost', type: 'number', label: 'Total estimated trial cost (₦)', min: 0, required: true, half: true },
      {
        id: 'withinAllocation',
        type: 'select',
        label: 'Does this fit within your track’s trial allocation?',
        required: true,
        half: true,
        options: ['Yes, fully within the allocation', 'Partly, some costs fall outside', 'No, it needs more than the allocation'],
      },
      {
        id: 'postTrialModel',
        type: 'textarea',
        rows: 4,
        label: 'Proposed post-trial commercial model, exclusions, and payment terms',
        required: true,
      },
      {
        id: 'needsFromUs',
        type: 'textarea',
        rows: 3,
        label: 'Inputs, access, approvals, assets, and response times you would need from CycleBreeze',
        required: true,
      },
    ],
  },
  {
    id: 'f',
    letter: 'F',
    title: 'Work Ethics and Accountability',
    intro: 'Tell us how you report, follow through, and protect data. Then confirm the commitments below.',
    fields: [
      { id: 'reporting', type: 'textarea', rows: 3, label: 'Your daily and weekly reporting approach', required: true },
      { id: 'followUp', type: 'textarea', rows: 3, label: 'How you manage follow-up and deadlines', required: true },
      {
        id: 'lowQuality',
        type: 'textarea',
        rows: 3,
        label: 'How you would respond to high lead volume but low qualified opportunities',
        required: true,
      },
      {
        id: 'errors',
        type: 'textarea',
        rows: 3,
        label: 'How you would respond to a reporting error or overspending',
        required: true,
      },
      {
        id: 'dataProtection',
        type: 'textarea',
        rows: 3,
        label: 'How you protect credentials, customer data, lead lists, and confidential information',
        required: true,
      },
      { id: 'confirmHeading', type: 'heading', label: 'Confirmations' },
      {
        id: 'confirmEthics',
        type: 'checkbox',
        label:
          'I confirm that I will not fabricate metrics, buy fake engagement, engage in unlawful scraping or messaging, misrepresent CycleBreeze, or use unapproved data.',
        required: true,
        sheet: 'Confirms ethics',
      },
      {
        id: 'confirmEvaluation',
        type: 'checkbox',
        label: 'I understand that both results and execution quality will be evaluated.',
        required: true,
        sheet: 'Confirms evaluation',
      },
      {
        id: 'confirmTerms',
        type: 'checkbox',
        label:
          'I have read the Important Information for Applicants, and I understand that applying does not guarantee selection, a trial allocation, or a long-term engagement.',
        required: true,
        sheet: 'Confirms trial conditions',
      },
      {
        id: 'confirmData',
        type: 'checkbox',
        label:
          'I agree that CycleBreeze may store and review the information in this application, and contact my references, for the purpose of this selection process.',
        required: true,
        sheet: 'Confirms data use',
      },
    ],
  },
]

const isRequired = (f, v) => (typeof f.required === 'function' ? f.required(v) : !!f.required)
const isShown = (f, v) => !f.when || f.when(v)

// Visible input fields for a step, with fieldsets flattened.
export function inputsOf(step, values) {
  return step.fields.flatMap((f) => (f.type === 'fieldset' ? f.fields : [f])).filter((f) => f.type !== 'heading' && isShown(f, values))
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateStep(step, values) {
  const errors = {}
  for (const f of inputsOf(step, values)) {
    const v = values[f.id]
    if (f.type === 'ratings') {
      const missing = f.items.filter((item) => !v?.[item])
      if (isRequired(f, values) && missing.length) errors[f.id] = `Please rate every capability (${missing.length} left).`
      continue
    }
    const empty = f.type === 'checkbox' ? !v : v == null || String(v).trim() === ''
    if (empty) {
      if (isRequired(f, values)) errors[f.id] = f.type === 'checkbox' ? 'Please confirm to continue.' : 'This field is required.'
      continue
    }
    if (f.type === 'email' && !EMAIL.test(String(v).trim())) errors[f.id] = 'Enter a valid email address.'
    if (f.type === 'tel' && String(v).replace(/\D/g, '').length < 7) errors[f.id] = 'Enter a valid phone number.'
    if (f.type === 'number' && (Number.isNaN(Number(v)) || (f.min != null && Number(v) < f.min))) errors[f.id] = 'Enter a valid number.'
  }
  return errors
}

export { isRequired, isShown }

// One ordered list of [column header, value] pairs, ready for the sheet.
export function toSheetRow(values) {
  const row = []
  for (const step of STEPS) {
    for (const f of step.fields.flatMap((x) => (x.type === 'fieldset' ? x.fields : [x]))) {
      if (f.type === 'heading') continue
      if (f.type === 'ratings') {
        for (const item of f.items) row.push([`C: ${item}`, values[f.id]?.[item] ?? ''])
        continue
      }
      let v = isShown(f, values) ? values[f.id] ?? '' : ''
      if (f.id === 'track') v = TRACK_OPTIONS.find((o) => o.value === v)?.label ?? v
      if (f.type === 'checkbox') v = v ? 'Yes' : 'No'
      row.push([f.sheet ?? f.label, v])
    }
  }
  return row
}
