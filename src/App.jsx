import { useEffect, useRef, useState } from 'react'
import { Check, CircleCheck, Menu, Plus, X } from 'lucide-react'
import {
  CONFIG,
  DEAL,
  FAQS,
  GATES,
  HERO,
  HERO_CARDS,
  JUDGING,
  LANES,
  MANDATES,
  NAV,
  NOT_FOR,
  PROBLEM,
  RULES,
  STICKERS,
  TIMELINE,
  TRACKS,
  VERIFIED_VALUE,
} from './content.js'
import { useCountUp, useNow, useReveal, useScrollProgress } from './hooks.js'
import { ApplyButton, Headline, Icon, Scallop, Stamp, Sticker } from './ui.jsx'

const DEADLINE = new Date(CONFIG.deadline).getTime()
const REDUCED = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const STAGE_ENDS = ['2026-10-23T23:59', '2026-10-24T23:59', '2026-10-25T18:00', '2026-10-25T23:59', '2026-10-30T23:59', '2026-11-01T23:59', '2026-11-02T23:59'].map(
  (d) => new Date(`${d}:00+01:00`).getTime(),
)

/* ---------------- Loader: ink screen that bursts into cream clouds ---------------- */

const PUFFS = [
  [8, 92, 70],
  [92, 8, 75],
  [30, 18, 60],
  [72, 82, 70],
  [55, 45, 80],
  [12, 40, 55],
  [88, 55, 60],
  [45, 95, 55],
]

function Loader() {
  const [done, setDone] = useState(REDUCED)
  useEffect(() => {
    if (done) return
    document.documentElement.classList.add('is-loading')
    const t = setTimeout(() => {
      setDone(true)
      document.documentElement.classList.remove('is-loading')
    }, 1900)
    return () => clearTimeout(t)
  }, [done])
  if (done) return null
  return (
    <div className="loader" aria-hidden="true">
      {PUFFS.map(([x, y, s], i) => (
        <Scallop key={i} className="puff" bumps={16} style={{ left: `${x}%`, top: `${y}%`, '--s': `${s}vmax`, '--d': `${0.25 + i * 0.07}s` }} />
      ))}
      <img className="loader-logo" src="/brand/cyclebreeze-logo.webp" alt="" />
    </div>
  )
}

/* ---------------- Header ---------------- */

function Header({ closed }) {
  const [open, setOpen] = useState(false)
  return (
    <header className={`kz-header ${open ? 'is-open' : ''}`}>
      <div className="container hdr">
        <a href="#top" className="hdr-logo" aria-label="CycleBreeze home">
          <img src="/brand/cyclebreeze-logo.webp" alt="CycleBreeze" width="600" height="183" />
        </a>
        <div className="hdr-right">
          <nav className="hdr-nav" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
          </nav>
          <ApplyButton closed={closed} className="hdr-cta" />
          <button className="hdr-menu" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}

/* ---------------- Hero: fanned cards straighten on scroll ---------------- */

const FAN = [
  { fx: 62, fy: 34, fr: -7 },
  { fx: 37, fy: 6, fr: -3 },
  { fx: 12, fy: 20, fr: 2 },
  { fx: -12, fy: 2, fr: -2 },
  { fx: -37, fy: 24, fr: 4 },
  { fx: -62, fy: 0, fr: 7 },
]

function Countdown({ now }) {
  const left = Math.max(0, DEADLINE - now)
  const d = Math.floor(left / 864e5)
  const h = Math.floor(left / 36e5) % 24
  const m = Math.floor(left / 6e4) % 60
  const s = Math.floor(left / 1e3) % 60
  const pad = (n) => String(n).padStart(2, '0')
  return (
    <span className="closes-pill" role="timer">
      <span className="dot" /> Closes in <b>{pad(d)}d</b> <b>{pad(h)}h</b> <b>{pad(m)}m</b> <b>{pad(s)}s</b>
    </span>
  )
}

function Hero({ closed, now }) {
  const ref = useScrollProgress((r) => -r.top / 520)
  return (
    <section className="hero" id="top" ref={ref}>
      <svg className="hero-cloud" viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {[
          [720, 330, 360],
          [380, 400, 260],
          [1060, 400, 260],
          [170, 560, 210],
          [1270, 560, 210],
          [540, 170, 210],
          [900, 170, 210],
          [720, 560, 300],
        ].map(([cx, cy, r], i) => (
          <circle key={i} cx={cx} cy={cy} r={r} />
        ))}
      </svg>
      <div className="container hero-inner">
        <p className="hero-badge intro" style={{ '--n': 0 }}>
          <Sticker icon="trophy" tone="green" className="hero-badge-icon" />
          {HERO.badge}
        </p>
        <Headline
          as="h1"
          className="hero-title"
          text={HERO.title}
          mascot={<img className="mascot" src="/brand/cb-mark.png" alt="" width="99" height="153" />}
        />
        <p className="hero-lede intro" style={{ '--n': 4 }}>
          {HERO.lede}
        </p>
        <div className="hero-cta intro" style={{ '--n': 5 }}>
          <ApplyButton closed={closed} />
          {!closed && <Countdown now={now} />}
        </div>
      </div>
      <div className="fan">
        {HERO_CARDS.map((c, i) => (
          <figure
            className={`fan-card ${c.dark ? 'is-dark' : ''}`}
            key={c.caption}
            style={{ '--i': i, '--fx': FAN[i].fx, '--fy': FAN[i].fy, '--fr': FAN[i].fr }}
          >
            <div className="fan-inner">
              {c.img ? (
                <img src={c.img} alt="" style={{ objectPosition: c.pos }} loading={i > 2 ? 'lazy' : 'eager'} />
              ) : (
                <div className={`fan-graphic tone-${c.tone}`}>
                  <Sticker icon={c.icon} tone={c.tone === 'green' ? 'ink' : 'green'} />
                </div>
              )}
              <figcaption>{c.caption}</figcaption>
            </div>
          </figure>
        ))}
      </div>
    </section>
  )
}

/* ---------------- Problem: bitten cards drop into their slots ---------------- */

function Problem({ closed }) {
  const ref = useScrollProgress((r, vh) => (vh * 0.98 - r.top) / (vh * 0.62))
  return (
    <section className="problem">
      <div className="container">
        <div data-reveal>
          <Headline text={PROBLEM.title} className="center" />
        </div>
        <div className="poster" data-reveal>
          <img src="/photos/team.webp" alt="Two CycleBreeze teammates reviewing work on a monitor" loading="lazy" />
          <div className="poster-ad">
            <img src="/brand/cyclebreeze-logo-white.webp" alt="" width="700" height="213" />
            <p className="poster-kicker">{PROBLEM.poster.kicker}</p>
            <p className="poster-line">{PROBLEM.poster.line1}</p>
            <p className="poster-script">{PROBLEM.poster.line2}</p>
            <span className="poster-url">cyclebreeze.com/sales-competition</span>
          </div>
        </div>
        <div className="bites" ref={ref}>
          {PROBLEM.cards.map((c, i) => (
            <div className="bite-slot" key={c.title}>
              <article className={`bite-card c${i}`} style={{ '--side': i ? 1 : -1 }}>
                <Headline as="h3" text={c.title} className="bite-title" />
                <p>{c.body}</p>
              </article>
            </div>
          ))}
        </div>
        <div className="center-cta">
          <ApplyButton closed={closed} />
        </div>
      </div>
    </section>
  )
}

/* ---------------- Mandates: sticky folder cards stack on scroll ---------------- */

function Mandates({ closed }) {
  return (
    <section className="mandates bumps dotted" id="mandates">
      <div className="container">
        <div className="section-head" data-reveal>
          <Stamp>The mandate</Stamp>
          <Headline text={'What the winner\nwill [own]'} className="center" />
        </div>
        <div className="stack" style={{ '--count': MANDATES.length }}>
          {MANDATES.map((m, i) => (
            <article className={`stack-card c${i}`} key={m.id} style={{ '--i': i }}>
              <div className="stack-tab">
                <Icon name={m.icon} size={15} />
                <span className="tab-long">{m.tab}</span>
                <span className="tab-short">{m.short}</span>
              </div>
              <div className="stack-body">
                <div className="stack-copy">
                  <h3 className="kz-title stack-title">
                    {m.title.split('\n').map((l) => (
                      <span className="kz-line" key={l}>
                        {l}
                      </span>
                    ))}
                  </h3>
                  <ul>
                    {m.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  {m.link && (
                    <a className="stack-link" href={m.link.href} target="_blank" rel="noreferrer">
                      {m.link.label} ↗
                    </a>
                  )}
                  <ApplyButton closed={closed} className="stack-cta" />
                </div>
                <div className="stack-media">
                  <img src={m.img} alt="" style={{ objectPosition: m.pos }} loading="lazy" />
                  <Sticker icon={m.sticker} tone="green" className="stack-sticker" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Not for: scalloped quote badges over a blurred photo ---------------- */

function NotFor({ closed }) {
  return (
    <section className="notfor">
      <div className="notfor-bg" aria-hidden="true" />
      <div className="container notfor-inner">
        <div className="notfor-head" data-reveal>
          <Headline text={'You’ll *know* if this is you'} className="center light" />
          <Sticker icon="zap" tone="green" className="notfor-zap" />
        </div>
        <div className="badges">
          {NOT_FOR.map((q, i) => (
            <Scallop className={`quote-badge q${i}`} key={q.who} style={{ '--i': i }} data-reveal>
              <span className="qmark" aria-hidden="true">
                ”
              </span>
              <p>{q.quote}</p>
              <strong>{q.who}</strong>
              <span className="quote-note">{q.note}</span>
            </Scallop>
          ))}
        </div>
        <p className="notfor-close" data-reveal>
          Also not for anyone who spends with no hypothesis, tracking or approval.
        </p>
        <div className="center-cta">
          <ApplyButton closed={closed} label="Not me — apply" />
        </div>
      </div>
    </section>
  )
}

/* ---------------- Deal at a glance (Krackerz "Meet Penny") ---------------- */

function StatTile({ stat, i }) {
  const [ref, v] = useCountUp(stat.n)
  return (
    <div className={`stat-tile c${i}`} ref={ref} data-reveal style={{ '--i': i }}>
      <strong>
        {stat.prefix}
        {v}
        {stat.suffix}
        <sup>+</sup>
      </strong>
      <span>{stat.label}</span>
    </div>
  )
}

function Deal({ now }) {
  const current = STAGE_ENDS.findIndex((t) => now <= t)
  return (
    <section className="deal bumps dotted" id="timeline">
      <div className="container">
        <div className="section-head" data-reveal>
          <Headline text="Meet the [challenge]" className="center" />
          <p className="script-sub">the deal, at a glance</p>
        </div>
        <div className="deal-grid">
          <div className="deal-photo" data-reveal>
            <span className="deal-pill">Seventeen days from call to winner</span>
            <div className="frame-scallop">
              <img src="/photos/developer.webp" alt="A developer at a desk with code on two screens" loading="lazy" />
            </div>
            <Sticker icon="rocket" tone="green" className="deal-sticker" />
          </div>
          <div className="deal-info">
            <div className="stat-tiles">
              {DEAL.stats.map((s, i) => (
                <StatTile stat={s} i={i} key={s.label} />
              ))}
            </div>
            <ol className="deal-table">
              {TIMELINE.map((t, i) => (
                <li key={t.stage} className={i === current ? 'is-now' : ''}>
                  <span className="dt-stage">{t.stage}</span>
                  <span className="dt-body">{t.body}</span>
                  <span className="dt-date">{i === current ? <em>Now</em> : t.date}</span>
                </li>
              ))}
            </ol>
            <p className="deal-for">
              <span>Mandates for:</span>
              <img src="/brand/cyclebreeze-logo.webp" alt="CycleBreeze" width="600" height="183" />
              <b className="bizzie-chip">Bizzie</b>
              <span className="deal-note">All times WAT · winners announced Mon 2 Nov</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Tracks (Krackerz pricing) ---------------- */

function Tracks({ closed }) {
  const [view, setView] = useState('get')
  return (
    <section className="tracks" id="tracks">
      <div className="container">
        <div className="section-head" data-reveal>
          <Stamp>Tracks & rewards</Stamp>
          <Headline text={'Choose your way to\n[grow it]'} className="center" />
        </div>
        <div className="toggle" data-reveal>
          <span className={view === 'get' ? 'on' : ''}>What you get</span>
          <button
            role="switch"
            aria-checked={view === 'take'}
            aria-label="Show what each track takes"
            onClick={() => setView((v) => (v === 'get' ? 'take' : 'get'))}
          >
            <span />
          </button>
          <span className={view === 'take' ? 'on' : ''}>What it takes</span>
        </div>
        <div className="tracks-grid">
          {TRACKS.map((t, i) => (
            <article className={`track ${t.featured ? 'is-featured' : ''}`} key={t.id} data-reveal style={{ '--i': i }}>
              <div className="track-top">
                <div>
                  <h3>{t.name}</h3>
                  <p>{t.sub}</p>
                </div>
                <span className="save">{t.save}</span>
              </div>
              <p className="track-price">
                {t.price}
                {t.unit && <small>/ {t.unit}</small>}
              </p>
              {t.id !== 'runners' ? (
                <ApplyButton closed={closed} className="track-btn" variant={t.featured ? '' : 'outline'} label="Apply now" />
              ) : (
                <a className="kz-btn outline track-btn" href="#rules">
                  See the ground rules
                </a>
              )}
              <ul key={view} className="track-list">
                {(view === 'get' ? t.get : t.take).map((p) => (
                  <li key={p}>
                    <CircleCheck size={17} aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <Sticker icon="trophy" tone="green" className="tracks-sticker" />
        </div>
        <p className="fine-print center">
          One winner per track. Commission is earned only on cash received and users who stay active. Participation
          doesn’t guarantee a job or contract — nothing is promised until an agreement is signed.
        </p>
      </div>
    </section>
  )
}

/* ---------------- Live trial band (Krackerz partner band) + verified value ---------------- */

function Trial() {
  return (
    <section className="trial" id="trial">
      <div className="container">
        <div className="trial-band" data-reveal>
          <svg className="band-blobs" viewBox="0 0 1240 300" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 300V190C120 120 260 250 420 200S700 60 860 140 1120 260 1240 170V300Z" />
          </svg>
          <Stamp tone="green">Live trial · 26–30 Oct</Stamp>
          <p className="band-text kz-title">
            <span className="kz-line">
              <em>for</em> B2B acquisition,
            </span>
            <span className="kz-line">WhatsApp growth,</span>
            <span className="kz-line">
              <em>and</em> content & community
            </span>
          </p>
          <img className="band-photo p1" src="/photos/team.webp" alt="" loading="lazy" />
          <img className="band-photo p2" src="/photos/bizzie.webp" alt="" loading="lazy" />
          <img className="band-photo p3" src="/photos/developer.webp" alt="" loading="lazy" />
          <a className="kz-btn band-cta" href="#value">
            See what counts
          </a>
        </div>

        <div className="value" id="value">
          <div className="value-head" data-reveal>
            <Stamp>Verified value</Stamp>
            <Headline text={'Every outcome,\n*in* naira'} />
            <p>
              Five days, your strongest lane, real CycleBreeze assets. Every result converts to naira so specialists
              compare fairly.
            </p>
            <div className="lane-chips">
              {LANES.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </div>
          </div>
          <ol className="value-table">
            {VERIFIED_VALUE.map((v, i) => (
              <li key={v.outcome} data-reveal style={{ '--i': i }}>
                <span className="vt-outcome">{v.outcome}</span>
                <span className="vt-how">{v.how}</span>
                <span className="vt-value">{v.value}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="rules-grid">
          {RULES.map((r, i) => (
            <article className={`rule-card c${i}`} key={r.title} data-reveal style={{ '--i': i }}>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </article>
          ))}
          <article className="gate-card" data-reveal style={{ '--i': 4 }}>
            <h3>Gates before ranking</h3>
            <ul>
              {GATES.map((g) => (
                <li key={g}>
                  <Check size={15} aria-hidden="true" /> {g}
                </li>
              ))}
            </ul>
          </article>
        </div>
        <div className="judging" data-reveal>
          <span className="judging-label">Then ranked on</span>
          {JUDGING.map((j) => (
            <span className="judging-chip" key={j}>
              {j}
            </span>
          ))}
        </div>
        <p className="fine-print center">
          We call back at least 20% of leads, re-check every activation on 1 Nov, de-duplicate across candidates and
          reconcile ledgers with platform statements. Falsified figures end the trial.
        </p>
      </div>
    </section>
  )
}

/* ---------------- FAQ ---------------- */

function Faq() {
  const [open, setOpen] = useState(-1)
  return (
    <section className="faq" id="faq">
      <div className="container faq-grid">
        <div className="faq-side" data-reveal>
          <Stamp>FAQ</Stamp>
          <Headline text={'Before you\n[apply]'} />
          <div className="faq-mascot" aria-hidden="true">
            <img src="/brand/cb-mark.png" alt="" />
            <span className="spark s1" />
            <span className="spark s2" />
            <span className="spark s3" />
          </div>
          <p className="faq-mail">
            Still stuck? <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
          </p>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={f.q} data-reveal style={{ '--i': i }}>
                <h3>
                  <button aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                    {f.q}
                    <span className="faq-plus">
                      <Plus size={14} strokeWidth={3} aria-hidden="true" />
                    </span>
                  </button>
                </h3>
                <div className="faq-a" id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Rules: draggable laptop stickers (Krackerz "Work in style") ---------------- */

function useTyped(text, speed = 28) {
  const [typed, setTyped] = useState({ text, n: 0 })
  if (typed.text !== text) setTyped({ text, n: 0 })
  useEffect(() => {
    if (REDUCED) return
    let n = 0
    const id = setInterval(() => {
      n += 1
      setTyped({ text, n })
      if (n >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return REDUCED ? text : text.slice(0, typed.n)
}

function Laptop() {
  const lidRef = useRef(null)
  const [pos, setPos] = useState(() => Object.fromEntries(STICKERS.map((s) => [s.id, { x: s.x, y: s.y }])))
  const [order, setOrder] = useState(STICKERS.map((s) => s.id))
  const [message, setMessage] = useState('Drag the stickers — tap one to read the rule')
  const typed = useTyped(message)
  const drag = useRef(null)

  const front = (id) => setOrder((o) => [...o.filter((x) => x !== id), id])

  const onDown = (e, id) => {
    const lid = lidRef.current.getBoundingClientRect()
    const el = e.currentTarget.getBoundingClientRect()
    drag.current = { id, dx: e.clientX - el.left, dy: e.clientY - el.top, lid, w: el.width, h: el.height, moved: 0, sx: e.clientX, sy: e.clientY }
    e.currentTarget.setPointerCapture(e.pointerId)
    front(id)
  }
  const onMove = (e) => {
    const d = drag.current
    if (!d) return
    d.moved = Math.max(d.moved, Math.hypot(e.clientX - d.sx, e.clientY - d.sy))
    const x = ((e.clientX - d.lid.left - d.dx) / d.lid.width) * 100
    const y = ((e.clientY - d.lid.top - d.dy) / d.lid.height) * 100
    const maxX = 100 - (d.w / d.lid.width) * 100
    const maxY = 100 - (d.h / d.lid.height) * 100
    setPos((p) => ({ ...p, [d.id]: { x: Math.min(Math.max(x, 0), maxX), y: Math.min(Math.max(y, 0), maxY) } }))
  }
  const onUp = () => {
    const d = drag.current
    drag.current = null
    if (d && d.moved < 5) setMessage(STICKERS.find((s) => s.id === d.id).rule)
  }
  const onKey = (e, s) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setMessage(s.rule)
      return
    }
    const step = { ArrowLeft: [-3, 0], ArrowRight: [3, 0], ArrowUp: [0, -4], ArrowDown: [0, 4] }[e.key]
    if (!step) return
    e.preventDefault()
    front(s.id)
    setPos((p) => ({ ...p, [s.id]: { x: Math.min(Math.max(p[s.id].x + step[0], 0), 80), y: Math.min(Math.max(p[s.id].y + step[1], 0), 82) } }))
  }

  return (
    <div className="laptop" data-reveal>
      <p className="laptop-pill" aria-live="polite">
        <span>{typed}</span>
        <span className="caret" aria-hidden="true" />
      </p>
      <div className="lid" ref={lidRef}>
        <img className="lid-logo" src="/brand/cb-mark.png" alt="" />
        {STICKERS.map((s) => (
          <button
            type="button"
            key={s.id}
            className={`lap-sticker kind-${s.kind} tone-${s.tone}`}
            style={{ left: `${pos[s.id].x}%`, top: `${pos[s.id].y}%`, '--r': `${s.r}deg`, zIndex: order.indexOf(s.id) + 1 }}
            onPointerDown={(e) => onDown(e, s.id)}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={() => (drag.current = null)}
            onKeyDown={(e) => onKey(e, s)}
            aria-label={`${s.rule} Sticker — drag, or use arrow keys to move.`}
          >
            {s.kind === 'text' ? s.text : <Sticker icon={s.icon} text={s.icon === 'free' ? 'FREE' : undefined} tone={s.tone} />}
          </button>
        ))}
      </div>
    </div>
  )
}

function Rules() {
  return (
    <section className="rules bumps" id="rules">
      <div className="rules-bg" aria-hidden="true" />
      <div className="container rules-inner">
        <div className="section-head" data-reveal>
          <Headline text={'Say only [what’s true]'} className="center light" />
          <p className="script-sub light">the rules we play by</p>
        </div>
        <Laptop />
      </div>
    </section>
  )
}

/* ---------------- Final CTA + footer on an ink cloud ---------------- */

function cloudTop() {
  const pts = [
    [0, 230],
    [140, 150],
    [300, 70],
    [470, 110],
    [640, 30],
    [820, 80],
    [990, 40],
    [1160, 120],
    [1300, 110],
    [1440, 190],
  ]
  let d = `M0 300L${pts[0][0]} ${pts[0][1]}`
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1]
    const [x1, y1] = pts[i]
    const r = Math.hypot(x1 - x0, y1 - y0) * 0.58
    d += `A${r.toFixed(0)} ${r.toFixed(0)} 0 0 1 ${x1} ${y1}`
  }
  return d + 'L1440 300Z'
}

function Final({ closed }) {
  return (
    <section className="final">
      <svg className="final-cloud" viewBox="0 0 1440 300" preserveAspectRatio="none" aria-hidden="true">
        <path d={cloudTop()} />
      </svg>
      <div className="final-body">
        <Sticker icon="star" tone="green" className="float f1" />
        <Sticker icon="megaphone" tone="green" className="float f2" />
        <Sticker icon="rocket" tone="green" className="float f3" />
        <img className="float f4" src="/brand/cb-mark.png" alt="" />
        <div className="container final-inner">
          <div data-reveal>
            <Headline text={'Be the *one*\nwho [grows it]'} className="center light" />
          </div>
          <p>Applications and assessment close together Fri 23 Oct, 11:59 PM WAT. Late work is not read.</p>
          <ApplyButton closed={closed} />
        </div>
        <footer className="container footer">
          <div>
            <img className="footer-logo" src="/brand/cyclebreeze-logo-white.webp" alt="CycleBreeze" width="700" height="213" loading="lazy" />
            <p>Commercial Growth Challenge. Free to apply — always.</p>
          </div>
          <div className="footer-contact">
            <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
            <p>Only this address and one official WhatsApp number speak for us.</p>
          </div>
          <div className="footer-base">
            <span>
              Powered by{' '}
              <a href="https://cyclebreeze.com" target="_blank" rel="noreferrer">
                CycleBreeze
              </a>
            </span>
            <span>© {new Date(DEADLINE).getFullYear()} CycleBreeze. Lasting legacies.</span>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default function App() {
  const now = useNow()
  const closed = now > DEADLINE
  useReveal()

  return (
    <>
      <Loader />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header closed={closed} />
      <main id="main">
        <Hero closed={closed} now={now} />
        <Problem closed={closed} />
        <Mandates closed={closed} />
        <NotFor closed={closed} />
        <Deal now={now} />
        <Tracks closed={closed} />
        <Trial />
        <Faq />
        <Rules />
        <Final closed={closed} />
      </main>
    </>
  )
}
