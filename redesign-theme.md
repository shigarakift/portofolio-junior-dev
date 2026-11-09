# Portfolio Redesign Planning — Minimalis · Profesional · Modern

**Tujuan:** Tinggalkan tema terminal/CLI. UI minimalis profesional ala Linear/Vercel: whitespace lega, tipografi kuat, informasi padat, teks minimum.

**Stack:** Next.js + Tailwind CSS
**Scope:** Layout, komponen, dan pemangkasan copy. Data & warna accent tetap.

---

## Fase 0 — Content Audit (potong dulu, design kemudian)

- Audit semua string di `src/data/portfolio.js` → **KEEP (≤6 kata), SHORTEN, CUT**:
  - `bio` + `about` → hapus, ganti metrics strip
  - `description` skill → **hapus**, `tags` cukup
  - `description` project → 3 highlights × 4–6 kata
  - `description` education → hapus, pakai chips
- Identifikasi komponen terminal yang harus dibongkar: `TerminalWindow.jsx`, `StatusBar.jsx`, `WibClock.jsx` → **hapus atau ganti** dengan komponen minimal.
- Split section ke file per-komponen kalau masih monolitik.

**Checkpoint:** tiap string lolos aturan "≤6 kata atau berganti visual".

---

## Fase 1 — Design System Layer

- Tailwind extend: `spacing`, `fontSize`, `radius`, `shadow` — reuse token warna existing, jangan hardcode.
- Inter sebagai font utama; JetBrains Mono **hanya** untuk angka metrik & kode.
- Komponen kecil pengganti teks:
  - `StatPill` — angka + label kecil uppercase
  - `StatusDot` — dot hijau + 1 kata
  - `Badge` — tech chip pill
- Breakpoint konsisten `sm/md/lg/xl` semua section.

---

## Fase 2 — Redesign per Komponen (dengan text budget)

| # | Komponen | Perubahan | Text budget |
|---|---|---|---|
| 1 | Navbar | Sticky + blur backdrop, hamburger smooth | Item nav: 1 kata |
| 2 | Hero | H1 + 1 subjudul + status dot + 2 CTA | **≤3 baris** |
| 3 | Metrics strip (baru) | 4 angka, label uppercase | 1–2 kata/angka |
| 4 | Skills | Card grid: icon + nama + badges | Tanpa deskripsi |
| 5 | Education | Timeline dot + chips | 1 baris |
| 6 | Projects | Card grid, hover lift, badge pill | Judul + tagline + 3 highlights |
| 7 | Contact | Centered card, icon-button bulat | Email + 2 icon |

Tanpa: boot screen, fake CLI, log stream, process table, ASCII art.

Tiap komponen → review browser → lanjut.

---

## Fase 3 — Responsive Hardening

- Audit 3 breakpoint via DevTools.
- Grid projects 3 col → 1 col, metrics strip 4 → 2×2 di mobile.

---

## Fase 4 — QA & Deploy

- Lighthouse (performance + contrast accent-on-dark).
- Vercel preview → merge.

---

## Checkpoint

✓ Fase 0: data bebas paragraf, komponen terminal teridentifikasi
✓ Fase 1: design system + StatPill/StatusDot/Badge siap
✓ Fase 2.2: Hero + metrics terlihat — deploy preview bisa
✓ Fase 2.7: semua komponen selesai
✓ Fase 4: production
