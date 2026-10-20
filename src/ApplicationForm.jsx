import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, CircleCheck, LoaderCircle, Send } from 'lucide-react'
import { CONFIG } from './content.js'
import { STEPS, inputsOf, isRequired, isShown, toSheetRow, validateStep } from './formSchema.js'

const DRAFT_KEY = 'cb-growth-application-v1'

// Drafts live only in this browser, so a long application survives a refresh.
function loadDraft() {
  try {
    const raw = localStorage.getItem(DRAFT_KEY)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}
function saveDraft(draft) {
  try {
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draft))
  } catch {
    // Storage blocked (private mode); the form still works without drafts.
  }
}
function clearDraft() {
  try {
    localStorage.removeItem(DRAFT_KEY)
  } catch {
    // ignore
  }
}

function Field({ field, values, error, onChange }) {
  const id = `f-${field.id}`
  const required = isRequired(field, values)
  const value = values[field.id] ?? ''
  const describedBy = [field.help && `${id}-help`, error && `${id}-err`].filter(Boolean).join(' ') || undefined
  const common = {
    id,
    name: field.id,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': describedBy,
    'aria-required': required || undefined,
  }
  const help = field.help && (
    <p className="field-help" id={`${id}-help`}>
      {field.help}
    </p>
  )
  const err = error && (
    <p className="field-error" id={`${id}-err`} role="alert">
      {error}
    </p>
  )
  const label = (
    <>
      {field.label}
      {required ? (
        <span className="req" aria-hidden="true">
          {' '}
          *
        </span>
      ) : null}
    </>
  )

  if (field.type === 'heading') {
    return (
      <div className="field-heading">
        <h4>{field.label}</h4>
        {field.help && <p>{field.help}</p>}
      </div>
    )
  }

  if (field.type === 'checkbox') {
    return (
      <div className={`field field-check ${error ? 'has-error' : ''}`}>
        <label className="check" htmlFor={id}>
          <input type="checkbox" {...common} checked={!!values[field.id]} onChange={(e) => onChange(field.id, e.target.checked)} />
          <span className="check-box" aria-hidden="true">
            <Check size={14} strokeWidth={3} />
          </span>
          <span>{label}</span>
        </label>
        {err}
      </div>
    )
  }

  if (field.type === 'radio') {
    return (
      <fieldset className={`field ${error ? 'has-error' : ''}`} aria-describedby={describedBy} id={id}>
        <legend className="field-label">{label}</legend>
        {help}
        <div className="choice-row">
          {field.options.map((o) => (
            <label className={`choice ${value === o.value ? 'is-on' : ''}`} key={o.value}>
              <input type="radio" name={field.id} value={o.value} checked={value === o.value} onChange={() => onChange(field.id, o.value)} />
              {o.label}
            </label>
          ))}
        </div>
        {err}
      </fieldset>
    )
  }

  if (field.type === 'ratings') {
    const ratings = values[field.id] ?? {}
    return (
      <div className={`field ${error ? 'has-error' : ''}`} id={id}>
        <p className="field-label">
          {label}
        </p>
        <p className="field-help">Choose one level for each capability.</p>
        <div className="ratings">
          {field.items.map((item) => (
            <fieldset className={`rating-row ${error && !ratings[item] ? 'is-missing' : ''}`} key={item}>
              <legend>{item}</legend>
              <div className="rating-opts">
                {field.levels.map((level) => (
                  <label className={`rating-opt ${ratings[item] === level ? 'is-on' : ''}`} key={level}>
                    <input
                      type="radio"
                      name={`${field.id}-${item}`}
                      value={level}
                      checked={ratings[item] === level}
                      onChange={() => onChange(field.id, { ...ratings, [item]: level })}
                    />
                    {level}
                  </label>
                ))}
              </div>
            </fieldset>
          ))}
        </div>
        {err}
      </div>
    )
  }

  let control
  if (field.type === 'textarea') {
    control = (
      <textarea {...common} rows={field.rows ?? 4} placeholder={field.placeholder} value={value} onChange={(e) => onChange(field.id, e.target.value)} />
    )
  } else if (field.type === 'select') {
    control = (
      <select {...common} value={value} onChange={(e) => onChange(field.id, e.target.value)}>
        <option value="">Select an option</option>
        {field.options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    )
  } else {
    control = (
      <input
        {...common}
        type={field.type}
        min={field.min}
        inputMode={field.type === 'number' ? 'numeric' : undefined}
        autoComplete={field.autoComplete}
        value={value}
        onChange={(e) => onChange(field.id, e.target.value)}
      />
    )
  }

  return (
    <div className={`field ${field.half ? 'half' : ''} ${error ? 'has-error' : ''}`}>
      <label className="field-label" htmlFor={id}>
        {label}
      </label>
      {help}
      {control}
      {err}
    </div>
  )
}

export default function ApplicationForm({ closed }) {
  const [draft] = useState(loadDraft)
  const [values, setValues] = useState(() => draft?.values ?? {})
  const [step, setStep] = useState(() => Math.min(draft?.step ?? 0, STEPS.length - 1))
  const [reached, setReached] = useState(() => draft?.reached ?? 0)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')
  const [trap, setTrap] = useState('')
  const topRef = useRef(null)
  const moved = useRef(false)

  useEffect(() => {
    if (status !== 'success') saveDraft({ values, step, reached })
  }, [values, step, reached, status])

  // After a step change, bring the top of the form into view.
  useEffect(() => {
    if (!moved.current) return
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    topRef.current?.focus({ preventScroll: true })
  }, [step, status])

  const onChange = (id, v) => {
    setValues((prev) => ({ ...prev, [id]: v }))
    if (errors[id])
      setErrors((prev) => {
        const next = { ...prev }
        delete next[id]
        return next
      })
  }

  const showErrors = (errs) => {
    setErrors(errs)
    const first = Object.keys(errs)[0]
    requestAnimationFrame(() => {
      const el = document.getElementById(`f-${first}`)
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      if (el && 'focus' in el) el.focus({ preventScroll: true })
    })
  }

  const goTo = (i) => {
    moved.current = true
    setErrors({})
    setStep(i)
    setReached((r) => Math.max(r, i))
  }

  const next = () => {
    const errs = validateStep(STEPS[step], values)
    if (Object.keys(errs).length) return showErrors(errs)
    goTo(step + 1)
  }

  const submit = async () => {
    // Recheck every step, in case a saved draft skipped one.
    for (let i = 0; i < STEPS.length; i++) {
      const errs = validateStep(STEPS[i], values)
      if (Object.keys(errs).length) {
        if (i !== step) goTo(i)
        return showErrors(errs)
      }
    }
    moved.current = true
    if (!CONFIG.formEndpoint) {
      setStatus('unconfigured')
      return
    }
    setStatus('submitting')
    try {
      const res = await fetch(CONFIG.formEndpoint, {
        method: 'POST',
        // text/plain keeps this a simple request, so Apps Script needs no CORS preflight.
        body: JSON.stringify({ fields: toSheetRow(values), email: values.email, name: values.name, trap }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) throw new Error(data.error || `Request failed (${res.status})`)
      clearDraft()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (closed) {
    return (
      <div className="form-card form-done">
        <h3>Applications are closed</h3>
        <p>
          Applications closed on {CONFIG.deadlineLabel}. For questions, email <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>.
        </p>
      </div>
    )
  }

  if (status === 'success') {
    return (
      <div className="form-card form-done" ref={topRef} tabIndex={-1}>
        <CircleCheck size={44} className="done-icon" aria-hidden="true" />
        <h3>Application received</h3>
        <p>
          Thank you, {values.name}. We have received your application for the CycleBreeze Commercial Growth Challenge. Shortlisted
          applicants will be contacted at {values.email}.
        </p>
        <p className="muted">
          Questions? Email <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>.
        </p>
      </div>
    )
  }

  const current = STEPS[step]
  const last = step === STEPS.length - 1

  return (
    <div className="form-card" ref={topRef} tabIndex={-1}>
      <ol className="form-steps" aria-label="Application sections">
        {STEPS.map((s, i) => (
          <li key={s.id} className={i === step ? 'is-current' : i < reached || i < step ? 'is-done' : ''}>
            <button type="button" disabled={i > reached} onClick={() => goTo(i)} aria-current={i === step ? 'step' : undefined}>
              <span className="fs-letter">{i < step || (i < reached && i !== step) ? <Check size={13} strokeWidth={3} /> : s.letter}</span>
              <span className="fs-title">{s.title}</span>
            </button>
          </li>
        ))}
      </ol>

      <div className="form-progress" aria-hidden="true">
        <span style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
      </div>

      <form
        noValidate
        onSubmit={(e) => {
          e.preventDefault()
          if (last) submit()
          else next()
        }}
      >
        <header className="form-head">
          <p className="eyebrow">
            Section {current.letter} of {STEPS[STEPS.length - 1].letter}
          </p>
          <h3>{current.title}</h3>
          <p>{current.intro}</p>
        </header>

        <div className="form-grid">
          {current.fields.filter((f) => isShown(f, values)).map((f) =>
            f.type === 'fieldset' ? (
              <fieldset className="field-group" key={f.id}>
                <legend>{f.label}</legend>
                {f.help && <p className="field-help">{f.help}</p>}
                <div className="form-grid">
                  {f.fields.map((sub) => (
                    <Field key={sub.id} field={sub} values={values} error={errors[sub.id]} onChange={onChange} />
                  ))}
                </div>
              </fieldset>
            ) : (
              <Field key={f.id} field={f} values={values} error={errors[f.id]} onChange={onChange} />
            ),
          )}
        </div>

        {/* Hidden from people; bots that fill it are dropped by the sheet script. */}
        <div className="trap" aria-hidden="true">
          <label>
            Leave this empty
            <input tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
          </label>
        </div>

        {Object.keys(errors).length > 0 && (
          <p className="form-alert" role="alert">
            Please fix the highlighted fields ({inputsOf(current, values).filter((f) => errors[f.id]).length}) before continuing.
          </p>
        )}
        {status === 'error' && (
          <p className="form-alert" role="alert">
            We could not send your application. Your answers are saved on this device, so please try again. If it keeps failing, email{' '}
            <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>.
          </p>
        )}
        {status === 'unconfigured' && (
          <p className="form-alert" role="alert">
            The application form is not connected yet. Your answers are saved on this device. Please try again later or email{' '}
            <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>.
          </p>
        )}

        <div className="form-nav">
          {step > 0 ? (
            <button type="button" className="btn btn-ghost" onClick={() => goTo(step - 1)}>
              <ArrowLeft size={17} aria-hidden="true" /> Back
            </button>
          ) : (
            <span />
          )}
          <p className="form-saved">Your answers are saved on this device as you go.</p>
          <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
            {last ? (
              status === 'submitting' ? (
                <>
                  <LoaderCircle size={17} className="spin" aria-hidden="true" /> Submitting
                </>
              ) : (
                <>
                  Submit application <Send size={16} aria-hidden="true" />
                </>
              )
            ) : (
              <>
                Continue <ArrowRight size={17} aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
