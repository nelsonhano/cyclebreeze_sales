import {
  ArrowRight,
  Bot,
  BotOff,
  BriefcaseBusiness,
  Clock,
  Handshake,
  Megaphone,
  MessageCircle,
  MessagesSquare,
  Receipt,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Zap,
} from 'lucide-react'
import { CONFIG } from './content.js'
import { scallopCircle } from './shapes.js'

const STICKER_PATH = scallopCircle(14, 40)
const ARROW_PATH = scallopCircle(12, 44)

const ICONS = {
  whatsapp: MessageCircle,
  bot: Bot,
  botoff: BotOff,
  briefcase: BriefcaseBusiness,
  message: MessagesSquare,
  target: Target,
  handshake: Handshake,
  trophy: Trophy,
  receipt: Receipt,
  clock: Clock,
  shield: ShieldCheck,
  rocket: Rocket,
  megaphone: Megaphone,
  star: Star,
  sparkles: Sparkles,
  zap: Zap,
}

export function Icon({ name, ...props }) {
  const C = ICONS[name]
  return C ? <C aria-hidden="true" {...props} /> : null
}

// `*word*` → script accent, `[WORD]` → tilted ink tag. Lines split on \n.
export function Headline({ as: Tag = 'h2', text, className = '', mascot }) {
  return (
    <Tag className={`kz-title ${className}`}>
      {text.split('\n').map((line, i) => (
        <span className="kz-line" key={i}>
          {i === 1 && mascot}
          {line.split(/(\*[^*]+\*|\[[^\]]+\])/).map((part, j) => {
            if (part.startsWith('*')) return <em key={j}>{part.slice(1, -1)}</em>
            if (part.startsWith('['))
              return (
                <span className="tag-word" key={j}>
                  {part.slice(1, -1)}
                </span>
              )
            return part
          })}
        </span>
      ))}
    </Tag>
  )
}

// Small tilted stamp above section titles.
export function Stamp({ children, tone = 'blue' }) {
  return (
    <span className={`stamp stamp-${tone}`} data-reveal>
      {children}
    </span>
  )
}

export function Scallop({ className = '', bumps = 22, children, ...rest }) {
  return (
    <div className={`scallop ${className}`} {...rest}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <path d={scallopCircle(bumps, 46)} />
      </svg>
      <div className="scallop-body">{children}</div>
    </div>
  )
}

// Round scalloped sticker holding an icon (or short text).
export function Sticker({ icon, text, tone = 'green', className = '', style }) {
  return (
    <span className={`sticker-badge tone-${tone} ${className}`} style={style} aria-hidden="true">
      <svg className="sb-shape" viewBox="0 0 100 100">
        <path className="sb-outline" d={STICKER_PATH} />
        <path className="sb-fill" d={STICKER_PATH} />
      </svg>
      {text ? <b>{text}</b> : <Icon name={icon} strokeWidth={2.4} />}
    </span>
  )
}

function ArrowBadge() {
  return (
    <span className="arrow-badge" aria-hidden="true">
      <svg viewBox="0 0 100 100">
        <path d={ARROW_PATH} />
      </svg>
      <ArrowRight size={13} strokeWidth={3} />
    </span>
  )
}

export function ApplyButton({ closed, label = 'Apply now', variant = '', className = '', href = CONFIG.applyUrl }) {
  if (closed && href === CONFIG.applyUrl) {
    return (
      <span className={`kz-btn is-disabled ${variant} ${className}`} aria-disabled="true">
        Applications closed
      </span>
    )
  }
  return (
    <a className={`kz-btn ${variant} ${className}`} href={href}>
      {label}
      <ArrowBadge />
    </a>
  )
}
