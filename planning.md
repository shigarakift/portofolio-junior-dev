# Master Implementation Plan: Redesain Layout "Clean & Modern"

**Target Implementor:** Junior Programmer / Lightweight AI Model  
**Prinsip Utama:** Mengubah struktur layout & visual portofolio menjadi **Clean, Sleek & Modern Tech Layout** (berstandar industri ala *Linear / Supabase / Vercel*) **TANPA MENGUBAH** skema warna (coloring) dan kata-kata (text copy) yang sudah ada.

---

## 1. Aturan Ketat Pembatasan (Strict Constraints)

> [!IMPORTANT]
> **Dua Aturan Emas (DO NOT MODIFY):**
> 1. **Dilarang Mengubah Skema Warna (Coloring):** Seluruh token warna di `src/app/globals.css` (`#080c14`, `#0066FF`, `#FF0096`, `#f59e0b`, `#10b981`, dll.) WAJIB dipertahankan 100%. Jangan menambah warna tema baru atau mengganti nilai hex yang ada.
> 2. **Dilarang Mengubah Kata-Kata (Copywriting):** Seluruh teks biodata, deskripsi diri, judul proyek, detail pendidikan, dan teks keahlian di `src/data/portfolio.js` WAJIB dipertahankan persis sesuai data aslinya.

---

## 2. Ikhtisar Perubahan Layout (Clean & Modern Specs)

Perubahan hanya fokus pada **layout, struktur visual, hierarki antarmuka, dan pengalaman pengguna (UX)**:

1. **Floating Glass Navbar:** Navbar melayang dengan border tipis `rgba(255, 255, 255, 0.08)`, backdrop blur 20px, jam WIB real-time, dan indikator status *online*.
2. **Hero Section 2-Kolom Seimbang:**
   - **Kiri:** Pill badge ketersediaan (*Available for Internship*), Heading nama besar dengan font Sans tebal, Subtitle role font Mono aksen biru, bio deskriptif, serta 2 tombol CTA (*View Projects* & *Contact Me*).
   - **Kanan:** Telemetry widget modern (`HeroSysWidget`) dengan progress bar metrik yang bergerak dinamis dan info node server.
3. **Bento Grid About Section:** Layout 2-kolom asimetris. Kolom kiri berisi narasi profil & kartu quick specs; kolom kanan berisi `TerminalWindow` interaktif (`cat info.json`).
4. **Card Grid 3-Kolom Core Skills:** Kartu keahlian dengan icon container aksen biru, deskripsi singkat, serta pill tags di bagian bawah dengan border halus.
5. **Timeline Modern Education:** Kartu pendidikan SMKN 1 Cibinong (SIJA) lengkap dengan badge status *Active Student* dan grid 3 kolom kurikulum utama.
6. **Card Grid 2-Kolom Featured Projects:** Kartu proyek dengan badge kategori, link icon GitHub/External, bullet point highlight, dan daftar teknologi yang digunakan.
7. **Clean Minimalist Contact Banner:** Banner kontak terpadu dengan fitur 1-klik copy email, tombol direct mailto, dan icon sosial media.

---

## 3. Sistem Token Warna & CSS yang Digunakan (`src/app/globals.css`)

Junior Developer / AI harus menggunakan token warna dan utility CSS dari `globals.css` berikut (TIDAK BOLEH MENGUBAH VALUE):

```css
/* Referensi Token Warna Resmi */
--background: #080c14;        /* Latar Gelap Obsidian */
--bg-subtle: #0d1320;          /* Kartu / Kontainer Sekunder */
--bg-elevated: #0e1422;        /* Elevasi Permukaan */
--bg-card: rgba(13, 19, 32, 0.75); /* Kartu Glassmorphism */
--bg-card-hover: rgba(18, 27, 46, 0.9);

--border-subtle: rgba(255, 255, 255, 0.08); /* Border Tipis Halus */
--border-glow: rgba(0, 102, 255, 0.4);     /* Glow Border saat Hover */

--foreground: #f8fafc;        /* Teks Utama Putih */
--text-muted: #94a3b8;         /* Teks Sekunder Slate 400 */
--text-dim: #64748b;           /* Teks Muted Slate 500 */

--primary-blue: #0066FF;       /* Warna Utama / Link / CTA */
--primary-blue-hover: #0052CC; /* State Hover Tombol Blue */
--accent-pink: #FF0096;        /* Ambient Glow Sekunder */
--accent-amber: #f59e0b;       /* Aksen Sorotan */
--status-emerald: #10b981;     /* Status Active / Online */
```

### Utility Classes yang Wajib Digunakan:
- `.glass-tile`: Memberikan efek glassmorphism + border tipis + backdrop blur 20px.
- `.bg-tech-pattern`: Memberikan pola grid garis halus 36px di latar belakang.
- `.hero-glow-layer`: Ambient radial glow warna biru di bagian atas halaman hero.
- `.shimmer-hover`: Efek kilatan cahaya halus saat kartu di-hover.

---

## 4. Panduan Modifikasi Komponen (Step-by-Step File Tasks)

### 4.1 `src/components/Navbar.jsx`
- [ ] **Struktur Layout:**
  - Container melayang: `fixed top-4 inset-x-0 mx-auto max-w-5xl z-50 px-4 sm:px-6`.
  - Gunakan class `.glass-tile` dengan rounded `rounded-2xl`.
  - **Sisi Kiri:** Brand logo icon minimalis + teks username `shigarakift` dengan dot status emerald `bg-[#10b981]`.
  - **Sisi Tengah:** Navigation links (`#about`, `#skills`, `#education`, `#projects`, `#contact`) dengan teks Sans-serif bersih (`text-xs font-mono hover:text-[#0066FF]`).
  - **Sisi Kanan:** Integrasi `<WibClock />` dan tombol CTA "Get in Touch" (`bg-[#0066FF] hover:bg-[#0052CC] text-white px-3.5 py-1.5 rounded-xl text-xs`).

### 4.2 `src/components/HeroSysWidget.jsx`
- [ ] **Struktur Layout:**
  - Kartu telemetry server modern menggunakan `.glass-tile` dan `rounded-2xl`.
  - **Header Kartu:** Nama node `shigarakift-srv01`, badge status emerald `99.98% Uptime`, dan tab switcher (`Metrics` / `Services`).
  - **Tab Metrics:** Render progress bar modern dengan persentase real-time untuk CPU Load, RAM Usage, dan Network I/O. Gunakan warna bar `#0066FF` dengan background track `bg-[#080c14]`.
  - **Tab Services:** List status container/service (`nginx`, `docker`, `postgresql`, `sshd`) dengan status badge `active (running)`.

### 4.3 `src/components/TerminalWindow.jsx`
- [ ] **Struktur Layout:**
  - Jendela preview kode/JSON modern menggunakan `rounded-2xl` dan border `border-white/[0.08]`.
  - **Header Bar:** 3 tombol macOS dot (`bg-rose-500/80`, `bg-amber-500/80`, `bg-emerald-500/80`), judul file di tengah (misal: `cat info.json`), dan tombol "Copy" di pojok kanan dengan animasi centang hijau.
  - **Body Content:** Background `#080c14` dengan font Mono, syntax highlighting warna biru `#0066FF`, emerald `#10b981`, dan sky-300.

### 4.4 `src/app/page.js` (Halaman Utama)
Rombak susunan layout di `page.js` menjadi 7 section terstruktur berikut:

#### A. Global Layout Wrapper
- Wrap utama: `<main className="min-h-screen bg-[#080c14] bg-tech-pattern relative text-[#f8fafc] overflow-x-hidden selection:bg-[#0066FF]/30 selection:text-white">`.
- Masukkan `<div className="hero-glow-layer">` di bagian atas hero.
- Batas maksimal lebar konten: `max-w-6xl mx-auto px-4 sm:px-6`.

#### B. Section 1: Hero Section (`#hero`)
- Grid 12 kolom (`lg:grid-cols-12 gap-8 lg:gap-12 items-center`).
- **Kolom Kiri (7 Kolom):**
  1. Availability Badge: `● Available for Internship & Part-Time` (`bg-[#0066FF]/10 text-[#0066FF] border-[#0066FF]/25`).
  2. Headline 1: `{personalData.name}` (`text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white`).
  3. Subtitle: Icon `<TerminalIcon />` + `{personalData.title}` (`text-[#0066FF] font-mono font-medium`).
  4. Bio Paragraf: `{personalData.bio}` (`text-slate-400 leading-relaxed`).
  5. CTA Buttons:
     - Primary: `View Projects` (`bg-[#0066FF] hover:bg-[#0052CC] text-white shadow-lg shadow-[#0066FF]/25 rounded-xl`).
     - Secondary: `Contact Me` (`border border-white/[0.1] bg-[#0d1320] text-slate-300 hover:border-[#0066FF]/50 rounded-xl`).
- **Kolom Kanan (5 Kolom):** Component `<HeroSysWidget />`.

#### C. Section 2: About Section (`#about`)
- Section Header: Badge `01. Profile & Focus` + Heading `About Me`.
- Grid Bento 12 Kolom:
  - **Left Block (7 Kolom):** Kartu `.glass-tile` berisi `{personalData.about}` dan deskripsi jurusan SIJA di SMKN 1 Cibinong, disusul 2 kartu Quick Specs (`Primary Discipline` & `Location`).
  - **Right Block (5 Kolom):** Component `<TerminalWindow>` yang menampilkan data JSON `cat info.json`.

#### D. Section 3: Core Skills Section (`#skills`)
- Section Header: Badge `02. Technical Competencies` + Heading `Core Stack & Skills`.
- Grid 3 Kolom (`grid-cols-1 md:grid-cols-3 gap-6`):
  - Map data `skills` dari `src/data/portfolio.js`.
  - Tiap kartu menggunakan `.glass-tile .shimmer-hover rounded-2xl`.
  - Header kartu: Icon container `w-12 h-12 rounded-xl bg-[#12192a] text-[#0066FF]` + Badge kategori.
  - Teks: Title skill, deskripsi skill.
  - Footer kartu: Flex wrap pill tags dengan background `#080c14` dan border `border-white/[0.06]`.

#### E. Section 4: Education Section (`#education`)
- Section Header: Badge `03. Academic Background` + Heading `Education`.
- Map data `education` dari `src/data/portfolio.js`.
- Tiap kartu menggunakan `.glass-tile rounded-2xl p-6 sm:p-8`.
- Header: School Name, Major (`text-[#0066FF]`), Duration Badge, Status Badge (`Active Student` emerald).
- Body: Deskripsi program kejuruan 4 tahun.
- Grid 3 Kolom Highlights kurikulum dengan icon `<Check />` aksen biru `#0066FF`.

#### F. Section 5: Featured Projects Section (`#projects`)
- Section Header: Badge `04. Portfolio Work` + Heading `Featured Projects`.
- Grid 2 Kolom (`grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7`):
  - Map data `projects` dari `src/data/portfolio.js`.
  - Tiap kartu proyek menggunakan `.glass-tile .shimmer-hover rounded-2xl`.
  - Badge kategori (`bg-[#0066FF]/10 text-[#0066FF]`), icon link GitHub (`<FaGithub />`) & Live Demo (`<ExternalLink />`).
  - Title proyek, tagline font mono, deskripsi proyek.
  - List bullet highlights dengan dot indikator warna biru `#0066FF`.
  - Pill tags teknologi di bagian bawah kartu.

#### G. Section 6: Contact Section (`#contact`)
- Banner terpadu: `p-7 sm:p-14 rounded-3xl bg-gradient-to-b from-[#0d1320] to-[#080c14] border border-white/[0.08]`.
- Status Badge: `● Open for Internship & Part-Time Work` (emerald).
- Heading: `Let's Build Reliable Systems`.
- Text deskripsi ajakan kolaborasi.
- Direct Mail Box: Container copy email 1-klik dengan icon `<Copy />` / `<Check />` + tombol `Send Direct Email` (`bg-[#0066FF]`).
- Social Icon Links: GitHub & LinkedIn dengan border hover `#0066FF`.

#### H. Section 7: Footer
- Border top `border-white/[0.06] py-6 sm:py-8 bg-[#080c14]`.
- Copyright `{new Date().getFullYear()} Bagas Alfattah R. (shigarakift)`.
- Terminal status line: `root@shigarakift:~$ status ok`.

---

## 5. Alur Langkah Kerja untuk Junior Developer / AI Model

Junior programmer atau AI model yang bertugas mengeksekusi rencana ini harus mengikuti urutan berikut secara runtut:

1. **Langkah 1 (Verifikasi CSS & Token):** Buka `src/app/globals.css`, pastikan variabel warna dan utility `.glass-tile`, `.bg-tech-pattern`, `.hero-glow-layer`, dan `.shimmer-hover` tersedia tanpa mengubah satu pun nilai warnanya.
2. **Langkah 2 (Verifikasi Data):** Buka `src/data/portfolio.js`, pastikan data personal, skills, education, dan projects siap diimpor tanpa mengubah teksnya.
3. **Langkah 3 (Poles Komponent UI):** 
   - Update `src/components/Navbar.jsx` mengikuti spesifikasi floating pill di Poin 4.1.
   - Update `src/components/HeroSysWidget.jsx` mengikuti spesifikasi telemetry card di Poin 4.2.
   - Update `src/components/TerminalWindow.jsx` mengikuti spesifikasi code preview di Poin 4.3.
4. **Langkah 4 (Susun `src/app/page.js`):** Tulis ulang `src/app/page.js` untuk menyatukan ke-7 section sesuai layout blueprint di Poin 4.4.
5. **Langkah 5 (Verifikasi & Testing):**
   - Jalankan `npm run dev` untuk pengujian tampilan visual.
   - Jalankan `npm run build` untuk memastikannya bebas dari error kompilasi Next.js/React.

---

## 6. QA & Verification Checklist

Sebelum hasil pekerjaan dinyatakan selesai dan lolos review:

- [ ] **Skema Warna:** Seluruh background tetap `#080c14` / `#0d1320`, aksen tetap `#0066FF`, `#FF0096`, `#f59e0b`, `#10b981`. Tidak ada warna acak baru.
- [ ] **Preservasi Teks:** Tidak ada teks biodata, deskripsi skill, atau nama proyek yang diubah atau dihapus dari `src/data/portfolio.js`.
- [ ] **Layout Responsif:** Diuji pada viewport Mobile (< 640px), Tablet (768px), dan Desktop (> 1024px) tanpa ada masalah horizontal overflow.
- [ ] **Interaktivitas:** Smooth scroll navigasi `#about`, `#skills`, `#education`, `#projects`, `#contact` berjalan mulus. Copy email 1-klik berfungsi normal.
- [ ] **Bebas Error:** Log build `npm run build` menunjukkan status kompilasi sukses (*Zero build errors*).
