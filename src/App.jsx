import { useEffect, useState } from 'react'
import { Check, Menu, Minus, Plus, X } from 'lucide-react'
import ApplicationForm from './ApplicationForm.jsx'
import {
  CONFIG,
  FAQS,
  FINAL,
  GAINS,
  GAINS_HEAD,
  HERO,
  MANDATES,
  MANDATES_HEAD,
  NAV,
  NOT_FOR,
  NOT_FOR_CLOSE,
  PROBLEM,
  TERMS,
  TIMELINE,
} from './content.js'
import { useNow, useReveal } from './hooks.js'
import { ApplyButton, BizzieLogo, Headline, Icon, Scallop, Stamp, Sticker } from './ui.jsx'

const DEADLINE = new Date(CONFIG.deadline).getTime()
const REDUCED = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const PATH = typeof window !== 'undefined' ? window.location.pathname.replace(/\/+$/, '') : ''
const ON_SUBMIT = PATH === '/submit'
const ON_TERMS = PATH === '/terms'
const ON_SUBPAGE = ON_SUBMIT || ON_TERMS

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
  // On /submit and /terms the section anchors live on the home page.
  const base = ON_SUBPAGE ? '/' : ''
  const [open, setOpen] = useState(false)
  return (
    <header className={`kz-header ${open ? 'is-open' : ''}`}>
      <div className="container hdr">
        <a href={ON_SUBPAGE ? '/' : '#top'} className="hdr-logo" aria-label="CycleBreeze home">
          <img src="/brand/cyclebreeze-logo.webp" alt="CycleBreeze" width="600" height="183" />
        </a>
        <div className="hdr-right">
          <nav className="hdr-nav" aria-label="Primary">
            {NAV.map((n) => (
              <a key={n.href} href={n.href.startsWith('#') ? base + n.href : n.href} onClick={() => setOpen(false)}>
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
        <h1 className="hero-badge intro" style={{ '--n': 0 }}>
          {HERO.badge}
        </h1>
        <div className="hero-intro intro" style={{ '--n': 1 }}>
          <p className="hero-lead">{HERO.lead}</p>
          {HERO.sub.map((s) => (
            <p key={s}>{s}</p>
          ))}
        </div>
        <ol className="hero-path intro" style={{ '--n': 3 }}>
          {HERO.path.map((p) => (
            <li key={p.step}>
              <span className="hp-icon">
                <Icon name={p.icon} size={18} />
              </span>
              <span className="hp-step">Step {p.step}</span>
              <b>{p.title}</b>
              <span>{p.body}</span>
            </li>
          ))}
        </ol>
        <div className="hero-seek intro" style={{ '--n': 4 }}>
          <p>{HERO.seekLead}</p>
          <ul>
            {HERO.seek.map((q) => (
              <li key={q}>
                <Check size={15} strokeWidth={3} aria-hidden="true" />
                {q}
              </li>
            ))}
          </ul>
        </div>
        <p className="hero-ask intro" style={{ '--n': 7 }}>
          {HERO.ask}
        </p>
        <div className="hero-cta intro" style={{ '--n': 7 }}>
          <ApplyButton closed={closed} label="Apply Now" />
          {!closed && <Countdown now={now} />}
        </div>
        <p className="hero-deadline intro" style={{ '--n': 7 }}>
          {HERO.deadline}
        </p>
      </div>
    </section>
  )
}

/* ---------------- Problem: the two outcomes, stacked ---------------- */

function Problem({ closed }) {
  return (
    <section className="problem bumps dotted" id="problem">
      <div className="container">
        <div data-reveal>
          <Headline text={PROBLEM.title} className="center" />
          <p className="section-lede center">{PROBLEM.intro}</p>
        </div>
        <div className="outcomes">
          {PROBLEM.cards.map((c, i) => (
            <article className={`outcome c${i}`} key={c.title} data-reveal>
              <h3 className="outcome-title">{c.title}</h3>
              <p>{c.body}</p>
            </article>
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

/* ---------------- Mandates: capability columns ---------------- */

function Mandates({ closed }) {
  return (
    <section className="mandates" id="mandates">
      <div className="container">
        <div className="section-head" data-reveal>
          <Headline text={MANDATES_HEAD.title} className="center" />
          <p className="section-lede center">{MANDATES_HEAD.intro}</p>
        </div>
        <div className="caps">
          {MANDATES.map((m) => (
            <div className="cap" key={m.id} data-reveal>
              <h3 className="cap-name">
                <Icon name={m.icon} size={16} />
                {m.tab}
              </h3>
              <ul>
                {m.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="fine-print center">{MANDATES_HEAD.note}</p>
        <div className="center-cta">
          <ApplyButton closed={closed} />
        </div>
      </div>
    </section>
  )
}

/* ---------------- Gains: what they stand to get ---------------- */

function Gains({ closed }) {
  return (
    <section className="gains bumps dotted">
      <div className="container">
        <div className="section-head">
          <Stamp>{GAINS_HEAD.stamp}</Stamp>
        </div>
        <GainsTable />
        <p className="gains-close">{GAINS_HEAD.close}</p>
        <div className="center-cta">
          <ApplyButton closed={closed} />
        </div>
      </div>
    </section>
  )
}

/* Both tracks in one table, shared terms stated once. */

function GainsTable() {
  const [ind, firm] = GAINS
  const label = (text) => (
    <tr className="label">
      <th colSpan={2} scope="colgroup">
        {text}
      </th>
    </tr>
  )
  return (
    <div className="gains-table-wrap" id="gains" data-reveal>
      <table className="gains-table">
        <thead>
          <tr>
            {GAINS.map((t) => (
              <th scope="col" key={t.id}>
                <Icon name={t.icon} size={16} />
                {t.track}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ind.gains.map((g, i) => (
            <tr key={g.title}>
              {[g, firm.gains[i]].map((x) => (
                <td key={x.title}>
                  <b>{x.title}</b>
                  {x.body}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tbody>
          <tr className="group">
            <th colSpan={2} scope="colgroup">
              1st place
            </th>
          </tr>
          {label('Role')}
          <tr>
            <td>{ind.first.role}</td>
            <td>{firm.first.role}</td>
          </tr>
          {label('Reward, upon successful completion')}
          <tr>
            <td className="amount">{ind.first.reward}</td>
            <td className="amount">{firm.first.reward}</td>
          </tr>
          {label('Commission')}
          <tr>
            <td colSpan={2}>{ind.first.commission}</td>
          </tr>
        </tbody>
        <tbody>
          <tr className="group">
            <th colSpan={2} scope="colgroup">
              2nd &amp; 3rd place
            </th>
          </tr>
          <tr>
            <td>{ind.runnersUp}</td>
            <td>{firm.runnersUp}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
    <section className="deal" id="timeline">
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
              <BizzieLogo />
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
              <em>For</em> firms and agencies,
            </span>
            <span className="kz-line">individual professionals,</span>
            <span className="kz-line">
              <em>and</em> specialist providers
            </span>
          </p>
          <img className="band-photo p1" src="/photos/team.webp" alt="" loading="lazy" />
          <img className="band-photo p2 band-logo" src="/brand/cb-mark.png" alt="CycleBreeze" loading="lazy" />
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
        <div className="faq-side">
          <p className="faq-eyebrow">FAQ</p>
          <h2 className="faq-title">Frequently asked questions</h2>
          <p className="faq-intro">Answers to common questions about eligibility, assessment and what happens after you apply.</p>
          <p className="faq-mail">
            Still have a question?
            <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
          </p>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => {
            const isOpen = open === i
            return (
              <div className={`faq-item ${isOpen ? 'is-open' : ''}`} key={f.q}>
                <h3>
                  <button aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-q-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                    <span>{f.q}</span>
                    <span className="faq-plus">
                      {isOpen ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
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
          <a href="/terms">Terms &amp; Conditions</a>
        </p>
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

/* ---------------- Terms & Conditions: its own plain page ---------------- */

function Terms({ closed }) {
  useEffect(() => {
    document.title = 'Terms & Conditions · CycleBreeze Commercial Growth Challenge'
  }, [])
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header closed={closed} />
      <main id="main" className="terms-page">
        <div className="container terms">
          <a className="terms-back" href="/">
            ← Back to the challenge
          </a>
          <h1 className="terms-title">{TERMS.title}</h1>
          <ol className="terms-list">
            {TERMS.items.map((t) => (
              <li key={t.head}>
                <h2>{t.head}</h2>
                <p>{t.body}</p>
              </li>
            ))}
          </ol>
          <p className="terms-contact">
            Questions about these terms? <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
          </p>
        </div>
        <div className="terms-foot">
          <Footer />
        </div>
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
  if (ON_TERMS) return <Terms closed={closed} />

  return (
    <>
      <Loader />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header closed={closed} />
      <main id="main">
        <Hero closed={closed} now={now} />
        <Deal now={now} />
        <Mandates closed={closed} />
        <Problem closed={closed} />
        <NotFor closed={closed} />
        <Gains closed={closed} />
        <Trial closed={closed} />
        <Faq />
        <Final closed={closed} />
      </main>
    </>
  )
}
