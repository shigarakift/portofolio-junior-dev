# Portfolio Redesign Planning — Clean & Modern Theme

**Tujuan:** Mengubah tema portofolio dari CLI/terminal aesthetic menjadi design yang lebih clean dan modern, sambil **mempertahankan semua konten (teks), color palette, dan design token warna** yang sudah ada.

**Stack:** Next.js + Tailwind CSS  
**Scope:** Layout, spacing, komponen, responsive design — **bukan** konten atau warna.

---

## Fase 0 — Audit & Tokenisasi (sebelum sentuh kode)

- Buka `tailwind.config.js`/`.ts` → catat semua custom color yang sudah didefinisikan (background dark, amber accent, dll) supaya nanti tinggal **reuse token yang sama**, bukan hardcode ulang.
- List semua komponen section sebagai file terpisah kalau belum (`Hero.tsx`, `About.tsx`, `Skills.tsx`, `Education.tsx`, `Projects.tsx`, `Contact.tsx`) — kalau masih satu file besar `page.tsx`, ini jadi prasyarat biar redesign per-komponen bisa aman dan incremental.
- Snapshot teks yang sudah ada (copy exact) supaya saat refactor JSX, tidak ada string yang berubah.

**Checkpoint:** kalau struktur masih monolitik di satu file, kita split dulu — ini fase aman untuk berhenti kalau tiba-tiba ada panggilan interview.

---

## Fase 1 — Design System Layer (tanpa ubah warna)

- Tambah/rapikan Tailwind theme extend untuk: `spacing scale`, `fontSize` hierarchy, `borderRadius`, `boxShadow` — token baru ini yang bikin "modern feel", warna existing tetap dipakai apa adanya.
- Tentukan breakpoint strategy: `sm/md/lg/xl` dipakai konsisten di semua section (bukan cuma sebagian yang responsive kayak sekarang).
- Putuskan approach komponen reusable: apakah pakai library util (`clsx`/`cva` untuk variant button/card) atau tetap manual class — supaya konsisten di semua section.

---

## Fase 2 — Redesign per Komponen (urutan prioritas visual impact)

| Urutan | Komponen | Fokus perubahan |
|---|---|---|
| 1 | Navbar | Sticky + blur backdrop, hamburger mobile yang smooth (bukan cuma show/hide) |
| 2 | Hero | Layout lebih lega, badge status jadi pill modern, CTA button di-restyle pakai token baru |
| 3 | About + info.json card | Grid 2 kolom di desktop, stack di mobile, card border lebih soft |
| 4 | Skills/Stack | Card grid dengan icon per skill, hover lift effect |
| 5 | Education | Timeline vertikal dengan connector line, modern dot marker |
| 6 | Projects | Card dengan hover scale/shadow, tech badge dirapikan jadi pill |
| 7 | Contact/Footer | CTA section jadi centered clean card, social icon jadi icon-button bulat |

Tiap komponen dikerjakan → kamu review di browser → lanjut komponen berikutnya. Ini match sama cara kerja kamu yang biasanya: satu bagian dulu, bukan sekaligus semua.

---

## Fase 3 — Responsive Hardening

- Audit tiap komponen di 3 breakpoint (mobile/tablet/desktop) pakai Chrome DevTools
- Pastikan elemen ASCII/terminal-style (jam WIB, `root@shigarakift:~$`, node status) tetap terbaca di layar kecil, bukan overflow atau kepotong

---

## Fase 4 — QA & Deploy

- Lighthouse check (performance + accessibility, terutama contrast amber-on-dark)
- Test di Vercel preview branch dulu sebelum merge ke production

---

## Checkpoint & Safe Stopping Points

✓ **Setelah Fase 0:** File struktur sudah bersih, semua token documented  
✓ **Setelah Fase 1:** Design system ready, baru eksekusi komponen  
✓ **Setelah Fase 2.2 (Navbar + Hero):** Versi pertama sudah terlihat modern, bisa deploy preview  
✓ **Setelah Fase 2.7:** Semua komponen selesai, tinggal polish  
✓ **Setelah Fase 4:** Final review & production release

Rencana ini bisa langsung dieksekusi kalau kamu mau mulai dari Fase 0 (audit token & cek struktur file).