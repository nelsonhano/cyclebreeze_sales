// CycleBreeze Commercial Growth Challenge: saves landing page applications to this Google Sheet.
// Paste into Extensions > Apps Script of the sheet, then deploy as a web app.
// Full steps: docs/google-sheets-setup.md

const SHEET_NAME = 'Applications'
const NOTIFY_EMAIL = 'sales@cyclebreeze.com' // set to '' to turn off email alerts
const DEADLINE = new Date('2026-10-23T23:59:00+01:00') // Fri 23 Oct 2026, 11:59 PM WAT
const MAX_CELL = 49000 // Google Sheets allows 50,000 characters per cell

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents)

    // Bots fill the hidden field; pretend it worked and keep nothing.
    if (data.trap) return json({ ok: true })
    if (new Date() > DEADLINE) return json({ ok: false, error: 'Applications are closed.' })
    if (!Array.isArray(data.fields) || !data.email || !data.name) return json({ ok: false, error: 'Invalid submission.' })

    const lock = LockService.getScriptLock()
    lock.waitLock(20000)
    try {
      appendApplication(data.fields)
    } finally {
      lock.releaseLock()
    }

    notify(data)
    return json({ ok: true })
  } catch (err) {
    console.error(err)
    return json({ ok: false, error: 'Server error.' })
  }
}

// Visiting the web app URL in a browser shows this, which confirms the deployment works.
function doGet() {
  return json({ ok: true, service: 'CycleBreeze application form' })
}

function appendApplication(fields) {
  const sheet = getSheet()
  const incoming = ['Submitted at', 'Status'].concat(fields.map((f) => String(f[0])))

  // Headers come from the form, so new questions add new columns instead of breaking old rows.
  let headers = sheet.getLastColumn() ? sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0] : []
  if (!headers.length) {
    headers = incoming
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold')
    sheet.setFrozenRows(1)
  } else {
    const missing = incoming.filter((h) => headers.indexOf(h) === -1)
    if (missing.length) {
      sheet.getRange(1, headers.length + 1, 1, missing.length).setValues([missing]).setFontWeight('bold')
      headers = headers.concat(missing)
    }
  }

  const byHeader = { 'Submitted at': new Date(), Status: 'New' }
  fields.forEach((f) => (byHeader[String(f[0])] = clean(f[1])))
  sheet.appendRow(headers.map((h) => (h in byHeader ? byHeader[h] : '')))
}

function getSheet() {
  const book = SpreadsheetApp.getActiveSpreadsheet()
  return book.getSheetByName(SHEET_NAME) || book.insertSheet(SHEET_NAME)
}

// Store everything as text, and stop answers like "=IMPORTXML(...)" from running as formulas.
function clean(value) {
  let s = value == null ? '' : String(value)
  if (/^[=+\-@]/.test(s)) s = "'" + s
  return s.length > MAX_CELL ? s.slice(0, MAX_CELL) + ' [truncated]' : s
}

function notify(data) {
  if (!NOTIFY_EMAIL) return
  try {
    const track = (data.fields.find((f) => f[0] === 'Application track') || [])[1] || ''
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: 'New Growth Challenge application: ' + data.name,
      body:
        'A new application was submitted.\n\n' +
        'Name: ' + data.name + '\n' +
        'Track: ' + track + '\n' +
        'Email: ' + data.email + '\n\n' +
        'Review it in the sheet: ' + SpreadsheetApp.getActiveSpreadsheet().getUrl(),
      replyTo: data.email,
    })
  } catch (err) {
    console.error('Email alert failed', err)
  }
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}
