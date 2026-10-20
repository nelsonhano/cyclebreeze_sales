import { useState } from 'react'
import { CalendarClock, CircleCheck, Info, Mail, Globe, Menu, TriangleAlert, X } from 'lucide-react'
import ApplicationForm from './ApplicationForm.jsx'
import {
  ABOUT,
  BENEFITS,
  CONFIG,
  CTA,
  DELIVER,
  HERO,
  LOOK_FOR,
  NAV,
  NOTICE,
  PREPARE,
  STEPS,
  STEPS_NOTE,
  TRACKS,
  TRACKS_NOTE,
} from './content.js'
import { useNow, useReveal } from './hooks.js'
import { ApplyButton, Icon, SectionHead } from './ui.jsx'

const DEADLINE = new Date(CONFIG.deadline).getTime()

/* ---------------- Header ---------------- */

function Header({ closed }) {
  const [open, setOpen] = useState(false)
  return (
    <header className={`site-header ${open ? 'is-open' : ''}`}>
      <div className="container hdr">
        <a href="#top" className="hdr-logo" aria-label="CycleBreeze home">
          <img src="/brand/cyclebreeze-logo.webp" alt="CycleBreeze" width="600" height="183" />
        </a>
        <nav className="hdr-nav" id="primary-nav" aria-label="Primary">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hdr-right">
          <ApplyButton closed={closed} className="btn-sm hdr-cta" />
          <button
            className="hdr-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}

/* ---------------- 1. Hero ---------------- */

function Countdown({ now }) {
  const left = Math.max(0, DEADLINE - now)
  const d = Math.floor(left / 864e5)
  const h = Math.floor(left / 36e5) % 24
  const m = Math.floor(left / 6e4) % 60
  const units = [
    [d, 'days'],
    [h, 'hours'],
    [m, 'minutes'],
  ]
  return (
    <div className="countdown" role="timer" aria-label={`${d} days, ${h} hours and ${m} minutes left to apply`}>
      {units.map(([n, l]) => (
        <span key={l}>
          <b>{String(n).padStart(2, '0')}</b>
          {l}
        </span>
      ))}
    </div>
  )
}

function Hero({ closed, now }) {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow eyebrow-light">{HERO.eyebrow}</p>
          <h1>{HERO.title}</h1>
          <p className="hero-sub">{HERO.subtitle}</p>
          <p className="hero-question">{HERO.question}</p>
          {HERO.body.map((p) => (
            <p className="hero-body" key={p}>
              {p}
            </p>
          ))}
          <div className="hero-cta">
            <ApplyButton closed={closed} />
            <a className="btn btn-outline-light" href="#about">
              Explore the Opportunity
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Key details">
          <div className="hero-photo">
            <img src="/photos/team.webp" alt="CycleBreeze team members reviewing work together" width="900" height="600" />
          </div>
          <div className="deadline-card">
            <p className="deadline-label">
              <CalendarClock size={18} aria-hidden="true" />
              {closed ? 'Applications closed' : 'Application deadline'}
            </p>
            <p className="deadline-date">
              Applications close {CONFIG.deadlineLabel.replace(', 11:59', ', at 11:59')}.
            </p>
            {!closed && <Countdown now={now} />}
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Firms and agencies</dt>
              <dd>₦100,000</dd>
              <dd className="fact-note">trial allocation</dd>
            </div>
            <div>
              <dt>Individual professionals</dt>
              <dd>₦50,000</dd>
              <dd className="fact-note">trial allocation</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}

/* ---------------- 2. About ---------------- */

function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <SectionHead eyebrow="About the challenge" title={ABOUT.title} intro={ABOUT.intro} id="about-title" />
        <p className="lead-in" data-reveal>
          {ABOUT.lead}
        </p>
        <div className="outcomes">
          {ABOUT.outcomes.map((o, i) => (
            <article className="card outcome" key={o.title} data-reveal style={{ '--i': i }}>
              <div className="outcome-top">
                <span className="icon-tile">
                  <Icon name={o.icon} size={22} />
                </span>
                <span className="outcome-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3>{o.title}</h3>
              <p>{o.body}</p>
            </article>
          ))}
        </div>
        <p className="callout" data-reveal>
          <Info size={20} aria-hidden="true" />
          <span>{ABOUT.note}</span>
        </p>
      </div>
    </section>
  )
}

/* ---------------- 3. Tracks ---------------- */

function Tracks({ closed }) {
  return (
    <section className="section section-alt" id="tracks" aria-labelledby="tracks-title">
      <div className="container">
        <SectionHead eyebrow="Two tracks" title="Who Should Apply?" id="tracks-title" center />
        <div className="tracks">
          {TRACKS.map((t, i) => (
            <article className="card track" key={t.id} data-reveal style={{ '--i': i }}>
              <div className="track-head">
                <span className="icon-tile">
                  <Icon name={t.icon} size={22} />
                </span>
                <span className="track-label">{t.label}</span>
              </div>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
              <div className="track-alloc">
                <span>Trial allocation</span>
                <strong>{t.allocation}</strong>
              </div>
              <ApplyButton closed={closed} label={`Apply as ${t.id === 'firms' ? 'a firm' : 'an individual'}`} className="track-btn" />
            </article>
          ))}
        </div>
        <div className="tracks-note" data-reveal>
          <p className="tracks-select">{TRACKS_NOTE.selection}</p>
          <p>{TRACKS_NOTE.conditions}</p>
          <p>{TRACKS_NOTE.specialists}</p>
        </div>
      </div>
    </section>
  )
}

/* ---------------- 4. What we need you to deliver ---------------- */

function Deliver() {
  return (
    <section className="section" id="deliver" aria-labelledby="deliver-title">
      <div className="container">
        <SectionHead eyebrow="What we need you to deliver" title={DELIVER.title} intro={DELIVER.intro} id="deliver-title" />
        <ul className="cap-grid">
          {DELIVER.items.map((c, i) => (
            <li className="cap" key={c.text} data-reveal style={{ '--i': i % 3 }}>
              <span className="icon-tile sm">
                <Icon name={c.icon} size={19} />
              </span>
              <span>{c.text}</span>
            </li>
          ))}
        </ul>
        <p className="note" data-reveal>
          {DELIVER.note}
        </p>
      </div>
    </section>
  )
}

/* ---------------- 5. Selection process ---------------- */

function Process() {
  return (
    <section className="section section-dark" id="process" aria-labelledby="process-title">
      <div className="container">
        <SectionHead eyebrow="Selection process" title="How the Selection Process Works" id="process-title" light />
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li className="step" key={s.title} data-reveal style={{ '--i': i % 3 }}>
              <span className="step-num">Step {i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </li>
          ))}
        </ol>
        <p className="callout callout-dark" data-reveal>
          <TriangleAlert size={20} aria-hidden="true" />
          <span>
            <strong>Important:</strong> {STEPS_NOTE}
          </span>
        </p>
      </div>
    </section>
  )
}

/* ---------------- 6. What we look for + benefits ---------------- */

function LookFor() {
  return (
    <section className="section" id="look-for" aria-labelledby="look-title">
      <div className="container">
        <SectionHead eyebrow="What makes a strong applicant?" title="What We Look For" id="look-title" center />
        <ul className="look-grid">
          {LOOK_FOR.map((l, i) => (
            <li key={l.text} data-reveal style={{ '--i': i % 4 }}>
              <span className="icon-tile">
                <Icon name={l.icon} size={22} />
              </span>
              <span>{l.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Benefits() {
  return (
    <section className="section section-alt" id="benefits" aria-labelledby="benefits-title">
      <div className="container">
        <SectionHead eyebrow={BENEFITS.eyebrow} title={BENEFITS.title} intro={BENEFITS.intro} id="benefits-title" />
        <div className="benefits-table" role="table" aria-label="Benefits by track" data-reveal>
          <div className="bt-row bt-head" role="row">
            {BENEFITS.columns.map((c, i) => (
              <div role="columnheader" key={c} className="bt-col-head">
                <Icon name={i ? 'building' : 'user'} size={19} />
                {c}
              </div>
            ))}
          </div>
          {BENEFITS.rows.map((row) => (
            <div className="bt-row" role="row" key={row[0].title}>
              {row.map((cell, i) => (
                <div role="cell" className="bt-cell" key={cell.title}>
                  <span className="bt-mobile-label">{BENEFITS.columns[i]}</span>
                  <h3>{cell.title}</h3>
                  <p>{cell.body}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <p className="callout callout-warn" data-reveal>
          <TriangleAlert size={20} aria-hidden="true" />
          <span>{BENEFITS.integrity}</span>
        </p>
      </div>
    </section>
  )
}

/* ---------------- 7. Before you apply + 8. Important information ---------------- */

function Prepare() {
  return (
    <section className="section" id="prepare" aria-labelledby="prepare-title">
      <div className="container prepare-grid">
        <div>
          <SectionHead eyebrow="What applicants must prepare" title={PREPARE.title} intro={PREPARE.intro} id="prepare-title" />
          <ul className="checklist" data-reveal>
            {PREPARE.items.map((p) => (
              <li key={p}>
                <CircleCheck size={19} aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <p className="note" data-reveal>
            <strong>For firms:</strong> {PREPARE.firms.replace(/^For firms, /, '')}
          </p>
          <p className="note muted" data-reveal>
            {PREPARE.note}
          </p>
        </div>

        <aside className="notice" id="conditions" aria-labelledby="notice-title" data-reveal>
          <p className="eyebrow">Trial conditions and transparency</p>
          <h2 id="notice-title">{NOTICE.title}</h2>
          <ul>
            {NOTICE.items.map((n) => (
              <li key={n}>{n}</li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  )
}

/* ---------------- 9. Application CTA + form ---------------- */

function Apply({ closed }) {
  return (
    <section className="section apply" id="apply" aria-labelledby="apply-title">
      <div className="container">
        <div className="apply-cta" data-reveal>
          <p className="eyebrow eyebrow-light">Application</p>
          <h2 id="apply-title">{CTA.title}</h2>
          {CTA.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="apply-cta-row">
            <ApplyButton closed={closed} label="Start Your Application" href="#application-form" />
            <p className="apply-deadline">
              <CalendarClock size={18} aria-hidden="true" />
              Application deadline: <strong>{CONFIG.deadlineLabel}</strong>
            </p>
          </div>
          <p className="apply-support">{CTA.support}</p>
          <div className="apply-contact">
            <span>Application contact:</span>
            <a href={`mailto:${CONFIG.email}`}>
              <Mail size={16} aria-hidden="true" />
              {CONFIG.email}
            </a>
            <a href={CONFIG.website} target="_blank" rel="noreferrer">
              <Globe size={16} aria-hidden="true" />
              www.cyclebreeze.com
            </a>
          </div>
        </div>

        <div className="form-wrap" id="application-form">
          <ApplicationForm closed={closed} />
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img className="footer-logo" src="/brand/cyclebreeze-logo-white.webp" alt="CycleBreeze" width="700" height="213" loading="lazy" />
          <p>CycleBreeze Commercial Growth Challenge</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
          <a href={CONFIG.website} target="_blank" rel="noreferrer">
            www.cyclebreeze.com
          </a>
        </div>
        <p className="footer-base">© {new Date(DEADLINE).getFullYear()} CycleBreeze. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default function App() {
  const now = useNow(30000)
  const closed = now > DEADLINE
  useReveal()

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header closed={closed} />
      <main id="main">
        <Hero closed={closed} now={now} />
        <About />
        <Tracks closed={closed} />
        <Deliver />
        <Process />
        <LookFor />
        <Benefits />
        <Prepare />
        <Apply closed={closed} />
      </main>
      <Footer />
    </>
  )
}
