// SVG shape generators for the Krackerz-style scalloped badges, bites and clouds.
// All paths are drawn in a 0..100 viewBox.

// A circle whose edge is a ring of outward bumps (the "cracker" badge).
export function scallopCircle(bumps = 22, radius = 44, cx = 50, cy = 50) {
  const pts = Array.from({ length: bumps + 1 }, (_, i) => {
    const a = (i / bumps) * Math.PI * 2 - Math.PI / 2
    return [cx + radius * Math.cos(a), cy + radius * Math.sin(a)]
  })
  const chord = Math.hypot(pts[1][0] - pts[0][0], pts[1][1] - pts[0][1])
  const r = (chord / 2) * 1.08
  let d = `M${pts[0][0].toFixed(2)} ${pts[0][1].toFixed(2)}`
  for (let i = 1; i < pts.length; i++) d += ` A${r.toFixed(2)} ${r.toFixed(2)} 0 0 1 ${pts[i][0].toFixed(2)} ${pts[i][1].toFixed(2)}`
  return d + 'Z'
}

const svgUrl = (inner) =>
  `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>${inner}</svg>`)}")`

// Exposed as CSS custom properties so stylesheets can use them in masks.
export function installShapeVars() {
  const root = document.documentElement.style
  root.setProperty('--shape-scallop', svgUrl(`<path d='${scallopCircle(22, 44)}'/>`))
  root.setProperty('--shape-bite', svgUrl(`<path d='${scallopCircle(14, 40)}'/>`))
}
