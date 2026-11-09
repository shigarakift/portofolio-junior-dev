# Portfolio Redesign Proposal
**Bagas Alfattah R. — Infrastructure & Backend Portfolio**

---

## 🎯 Arah Baru: Minimalis, Profesional, Modern

**Tema terminal dihapus total.** Tidak ada boot sequence, tidak ada fake CLI, tidak ada log stream, tidak ada ASCII art.

**Penggantinya:** UI minimalis ala developer tools modern (Linear, Vercel, Railway) — clean whitespace, tipografi kuat, subtle depth, informasi padat tanpa dekorasi.

### Prinsip
1. **Minimal text, maksimal informasi** — metrik, badge, dan visual menggantikan paragraf.
2. **Quiet confidence** — tidak ada gimmick. Keseriusan lewat spacing, alignment, dan detail.
3. **Satu accent color** — orange `#ff6b00` hanya untuk status aktif & CTA. Selebihnya netral.

---

## 🎨 Visual System

### Color
```
Background   #0e1117      (base dark, tetap)
Surface      #141923      (card)
Border       rgba putih 8–12%
Text primary #f4f4f5
Text muted   #a1a1aa

Accent       #ff6b00      (CTA, status dot, hover — dipakai hemat)
Success      #10b981      (available indicator)
```
Dark mode-first. Light mode: sama, hierarki dibalik.

### Typography
```
Heading  Inter / Geist Sans    600, tight tracking (-0.02em)
Body     Inter                 400, line-height 1.7
Label    Inter 12–13px, uppercase, letter-spacing 0.08em, muted
```
Mono (JetBrains Mono) **hanya** untuk kode dan angka metrik — bukan elemen dekorasi.

### Tokens
```
--radius-sm: 8px    --radius-md: 12px    --radius-lg: 16px
--shadow-card: 0 4px 12px rgba(0,0,0,0.08)
--spacing-section: clamp(3rem, 8vw, 6rem)
```

---

## 📐 Section oleh Section

### 1. Hero
> **Bagas Alfattah R.**
> Linux Admin & Backend Developer
> ● Available — Cibinong, ID

- H1 + 1 baris subjudul + 1 baris status. **Selesai.**
- Bio paragraf dihapus.
- 2 CTA: `View Projects` (primary) · `Contact` (ghost).
- Background: subtle gradient atau grid pattern sangat halus. Tidak ada animasi berat.

### 2. Metrics Strip (baru — pengganti bio)
```
99.98% uptime    ·    3 production projects    ·    SIJA @ SMKN 1 Cibinong
```
4 kolom angka pendek, label kecil uppercase. Mensubstitusi paragraf "About".

### 3. Projects
Grid card 3 kolom (desktop), stack mobile. Tiap card:
- Badge kategori (1–2 kata)
- Judul + tagline (1 baris)
- **3 highlights × 4–6 kata**
- Tech badges pill
- Icon links: GitHub · Demo

Hover: lift halus + border accent. Description paragraf dihapus.

### 4. Skills
Grid card minimal: **icon + nama + tags saja.** Deskripsi kalimat dihapus.

Card 1: `Linux Administration` — badges: Ubuntu · Bash · systemd · Nginx
Card 2: `Backend Development` — badges: Node.js · Go · Laravel · PostgreSQL
Card 3: `Docker & Containers` — badges: Docker · Compose · CI/CD

### 5. Education
Satu baris timeline: `SMKN 1 Cibinong — SIJA · 2023–Present · Active`
Deskripsi paragraf dihapus, 3 highlights jadi chips.

### 6. Contact
Centered card: email + 2 icon-button (GitHub, LinkedIn). Tanpa form, tanpa kalimat ajakan.

---

## ✂️ Content Cut List

| Sebelum | Sesudah |
|---|---|
| Bio paragraf | 3 baris hero |
| About paragraf | Metrics strip |
| Deskripsi skill per kalimat | Nama + tags |
| Deskripsi project 2–3 kalimat | 3 highlights × 4–6 kata |
| Education paragraf | 1 baris + chips |
| "Available for internship & part-time" | `● Available` |

---

## 🚀 Priority

1. Hero minimal + strip metrics
2. Projects grid card
3. Skills grid card
4. Education & contact one-liner
5. Polish: hover states, transition, responsive

## ❌ Dihapus dari Proposal Lama

Boot sequence · fake terminal prompt · process monitor table · log stream · network ping · ASCII diagram · status bar with fake metrics

---

**Hasil akhir: portofolio tenang, padat, kredibel — terlihat seperti produk SaaS modern, bukan gimik terminal.**
