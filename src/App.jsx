import { useEffect, useState } from 'react'
import { Menu, Plus, X } from 'lucide-react'
import ApplicationForm from './ApplicationForm.jsx'
import {
  CONFIG,
  FAQS,
  FINAL,
  HERO,
  MANDATES,
  MANDATES_HEAD,
  NAV,
  NOT_FOR,
  NOT_FOR_CLOSE,
  PROBLEM,
  TIMELINE,
} from './content.js'
import { useNow, useReveal, useScrollProgress } from './hooks.js'
import { ApplyButton, Headline, Icon, Scallop, Stamp, Sticker } from './ui.jsx'

const DEADLINE = new Date(CONFIG.deadline).getTime()
const REDUCED = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const ON_SUBMIT = typeof window !== 'undefined' && window.location.pathname.replace(/\/+$/, '') === '/submit'

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
  // On /submit the section anchors live on the home page.
  const base = ON_SUBMIT ? '/' : ''
  const [open, setOpen] = useState(false)
  return (
    <header className={`kz-header ${open ? 'is-open' : ''}`}>
      <div className="container hdr">
        <a href={ON_SUBMIT ? '/' : '#top'} className="hdr-logo" aria-label="CycleBreeze home">
          <img src="/brand/cyclebreeze-logo.webp" alt="CycleBreeze" width="600" height="183" />
        </a>
        <div className="hdr-right">
          <nav className="hdr-nav" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.href} href={base + n.href} onClick={() => setOpen(false)}>
                {n.label}
              </a>
            ))}
          </nav>
          {!ON_SUBMIT && <ApplyButton closed={closed} className="hdr-cta" />}
          <button className="hdr-menu" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}

/* ---------------- Hero ---------------- */

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
  return (
    <section className="hero" id="top">
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
        <p className="hero-sub intro" style={{ '--n': 3 }}>
          {HERO.subtitle}
        </p>
        <p className="hero-lede intro" style={{ '--n': 4 }}>
          {HERO.lede}
        </p>
        <div className="hero-cta intro" style={{ '--n': 5 }}>
          <ApplyButton closed={closed} label="Apply Now" />
          <a className="kz-btn outline" href="#problem">
            Explore the Opportunity
          </a>
          {!closed && <Countdown now={now} />}
        </div>
        <p className="hero-deadline intro" style={{ '--n': 5 }}>
          {HERO.deadline}
        </p>
      </div>
    </section>
  )
}

/* ---------------- Problem: bitten cards drop into their slots ---------------- */

function Problem({ closed }) {
  const ref = useScrollProgress((r, vh) => (vh * 0.98 - r.top) / (vh * 0.62))
  return (
    <section className="problem" id="problem">
      <div className="container">
        <div data-reveal>
          <Headline text={PROBLEM.title} className="center" />
          <p className="section-lede center">{PROBLEM.intro}</p>
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
        <p className="fine-print center">{PROBLEM.note}</p>
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
          <Stamp>{MANDATES_HEAD.stamp}</Stamp>
          <Headline text={MANDATES_HEAD.title} className="center" />
          <p className="section-lede center">{MANDATES_HEAD.intro}</p>
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
        <p className="fine-print center">{MANDATES_HEAD.note}</p>
      </div>
    </section>
  )
}

/* ---------------- What we look for: quality cards over a blurred photo ---------------- */

function NotFor({ closed }) {
  return (
    <section className="notfor">
      <div className="notfor-bg" aria-hidden="true" />
      <div className="container notfor-inner">
        <div className="notfor-head" data-reveal>
          <Headline text={'What we *look* for'} className="center light" />
          <Sticker icon="zap" tone="green" className="notfor-zap" />
        </div>
        <div className="qualities">
          {NOT_FOR.map((q, i) => (
            <article className="quality" key={q.who} style={{ '--i': i }} data-reveal>
              <span className="quality-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{q.who}</h3>
              <p>{q.quote}</p>
              <span className="quality-note">{q.note}</span>
            </article>
          ))}
        </div>
        <p className="notfor-close" data-reveal>
          {NOT_FOR_CLOSE}
        </p>
        <div className="center-cta">
          <ApplyButton closed={closed} label="That’s me, apply" />
        </div>
      </div>
    </section>
  )
}

/* ---------------- Deal at a glance (Krackerz "Meet Penny") ---------------- */

function Deal({ now }) {
  // Step 1 is current while applications are open; screening follows the deadline.
  const current = now <= DEADLINE ? 0 : 1
  return (
    <section className="deal bumps dotted" id="timeline">
      <div className="container">
        <div className="section-head" data-reveal>
          <Headline text="How [selection] works" className="center" />
          <p className="script-sub">the selection process, step by step</p>
        </div>
        <div className="deal-grid">
          <div className="deal-photo" data-reveal>
            <span className="deal-pill">Six steps from application to collaboration</span>
            <div className="frame-scallop">
              <img src="/photos/developer.webp" alt="A developer at a desk with code on two screens" loading="lazy" />
            </div>
            <Sticker icon="rocket" tone="green" className="deal-sticker" />
          </div>
          <div className="deal-info">
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
              <span>Growth for:</span>
              <img src="/brand/cyclebreeze-logo.webp" alt="CycleBreeze" width="600" height="183" />
              <b className="bizzie-chip">Bizzie</b>
              <span className="deal-note">
                Important: selection for the trial does not guarantee a job, contract, or ongoing engagement.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Live trial band (Krackerz partner band) ---------------- */

function Trial({ closed }) {
  return (
    <section className="trial" id="trial">
      <div className="container">
        <div className="trial-band" data-reveal>
          <svg className="band-blobs" viewBox="0 0 1240 300" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 300V190C120 120 260 250 420 200S700 60 860 140 1120 260 1240 170V300Z" />
          </svg>
          <Stamp tone="green">Call for proposals</Stamp>
          <p className="band-text kz-title">
            <span className="kz-line">
              <em>for</em> firms and agencies,
            </span>
            <span className="kz-line">individual professionals,</span>
            <span className="kz-line">
              <em>and</em> specialist providers
            </span>
          </p>
          <img className="band-photo p1" src="/photos/team.webp" alt="" loading="lazy" />
          <img className="band-photo p2" src="/photos/bizzie.webp" alt="" loading="lazy" />
          <img className="band-photo p3" src="/photos/developer.webp" alt="" loading="lazy" />
          <ApplyButton closed={closed} className="band-cta" />
        </div>
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
        {/* Reveal on the list, not the items: toggling an item's className would drop the observer's is-in class. */}
        <div className="faq-list" data-reveal>
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={f.q}>
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

function Footer() {
  return (
    <footer className="container footer">
      <div>
        <img className="footer-logo" src="/brand/cyclebreeze-logo-white.webp" alt="CycleBreeze" width="700" height="213" loading="lazy" />
        <p>CycleBreeze Commercial Growth Challenge.</p>
      </div>
      <div className="footer-contact">
        <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
        <p>
          Application contact ·{' '}
          <a href={CONFIG.website} target="_blank" rel="noreferrer">
            www.cyclebreeze.com
          </a>
        </p>
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
  )
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
            <Headline text={FINAL.title} className="center light" />
          </div>
          {FINAL.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            Application deadline: <b>{CONFIG.deadlineLabel}.</b>
          </p>
          <ApplyButton closed={closed} label="Start Your Application" />
          <p className="final-support">{FINAL.support}</p>
        </div>
        <Footer />
      </div>
    </section>
  )
}

/* ---------------- /submit: the application form on its own page ---------------- */

function Submit({ closed }) {
  useEffect(() => {
    document.title = 'Apply · CycleBreeze Commercial Growth Challenge'
  }, [])
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header closed={closed} />
      <main id="main" className="submit-page">
        <div className="container submit-head">
          <a className="submit-back" href="/">
            ← Back to the challenge
          </a>
          <Headline as="h1" text={'Start your\n[application]'} className="center light" />
          <p>
            Application deadline: <b>{CONFIG.deadlineLabel}.</b>
          </p>
          <p className="final-support">{FINAL.support}</p>
        </div>
        <div className="container final-form" id="apply">
          <ApplicationForm closed={closed} />
        </div>
        <Footer />
      </main>
    </>
  )
}

export default function App() {
  const now = useNow()
  const closed = now > DEADLINE
  useReveal()

  // Old links to the in-page form (/#apply) now land on /submit.
  useEffect(() => {
    if (!ON_SUBMIT && window.location.hash === '#apply') window.location.replace('/submit')
  }, [])

  if (ON_SUBMIT) return <Submit closed={closed} />

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
        <Trial closed={closed} />
        <Faq />
        <Final closed={closed} />
      </main>
    </>
  )
}
