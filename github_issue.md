# Pembaruan Tema Warna dan Konten Portofolio Terminal

## Deskripsi Perubahan
Issue ini dibuat untuk melacak pembaruan tema dan konten pada situs web portofolio bertema terminal agar lebih mencerminkan fokus karir terbaru di bidang server infrastruktur dan backend development.

## Daftar Perubahan (Task List)

### 1. Desain & Tema Warna
- [x] Mengubah skema warna utama dari hijau (`#4ade80`) menjadi kuning gelap / amber (`#ca8a04`) pada `globals.css`.
- [x] Memperbarui variabel warna terminal (`--terminal-green` menjadi `--terminal-yellow`) di seluruh file style dan komponen.
- [x] Menyesuaikan efek hover dan seleksi teks agar selaras dengan warna kuning gelap.

### 2. Bagian "About Me" & Skill
- [x] Memperbarui deskripsi About untuk menonjolkan minat utama pada infrastruktur server dan backend development.
- [x] Menyederhanakan daftar keahlian menjadi hanya 3 skill:
  1. **Linux Administration**
  2. **Backend Development**
  3. **Docker & Containerization** (Dipilih sebagai pelengkap yang relevan dengan infrastruktur + backend).

### 3. Pengalaman (Experience) menjadi Pendidikan (Education)
- [x] Mengubah judul section **Experience** menjadi **Education** pada navigasi dan konten utama.
- [x] Mengganti log aktivitas (`experience.log`) menjadi log pendidikan (`education.log`).
- [x] Menambahkan entri pendidikan:
  - **Sekolah**: SMKN 1 Cibinong
  - **Jurusan**: SIJA (Sistem Informatika, Jaringan, dan Aplikasi)
  - **Durasi**: 2023 - Sekarang
  - **Keterangan**: Terbuka untuk magang (internship) atau kerja paruh waktu (part-time).

### 4. Proyek (Projects)
- [x] Mengurangi jumlah proyek yang ditampilkan menjadi 2 proyek dummy yang relevan dengan backend dan infrastruktur server:
  1. **SysMon CLI**: Alat monitoring metrik server berbasis terminal menggunakan Go & Bash.
  2. **Secure REST API**: Boilerplate API backend dengan PostgreSQL dan otentikasi aman.
