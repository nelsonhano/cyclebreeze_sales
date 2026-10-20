import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  ChartColumn,
  FileCheck,
  Funnel,
  LayoutTemplate,
  Lightbulb,
  ListChecks,
  Megaphone,
  MessageCircle,
  Receipt,
  RefreshCw,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  User,
  Workflow,
  Wrench,
} from 'lucide-react'

const ICONS = {
  bot: Bot,
  briefcase: BriefcaseBusiness,
  building: Building2,
  chart: ChartColumn,
  filecheck: FileCheck,
  funnel: Funnel,
  layout: LayoutTemplate,
  lightbulb: Lightbulb,
  listchecks: ListChecks,
  megaphone: Megaphone,
  message: MessageCircle,
  receipt: Receipt,
  refresh: RefreshCw,
  search: Search,
  shield: ShieldCheck,
  target: Target,
  trending: TrendingUp,
  user: User,
  workflow: Workflow,
  wrench: Wrench,
}

export function Icon({ name, ...props }) {
  const C = ICONS[name]
  return C ? <C aria-hidden="true" {...props} /> : null
}

export function SectionHead({ eyebrow, title, intro, center = false, light = false, id }) {
  return (
    <header className={`section-head ${center ? 'center' : ''} ${light ? 'light' : ''}`} data-reveal>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={id}>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  )
}

export function ApplyButton({ closed, label = 'Apply Now', className = '', href = '#apply' }) {
  if (closed) {
    return (
      <span className={`btn btn-primary is-disabled ${className}`} aria-disabled="true">
        Applications closed
      </span>
    )
  }
  return (
    <a className={`btn btn-primary ${className}`} href={href}>
      {label}
      <ArrowRight size={17} aria-hidden="true" />
    </a>
  )
}
