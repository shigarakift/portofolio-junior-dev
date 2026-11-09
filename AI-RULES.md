# AI-RULES.md — Workflow Jaman AI untuk Junior Vibe Coder

> Kamu: junior software engineer, vibe coder sejati. Masalah vibe coder: cepat banget produce, tapi gampang hilang arah — code nggak dipahami, bug nggak ketahuan, codebase jadi taman kanak-kanak.
> Aturan ini biar vibe-nya tetap jalan, arah tetap ada.

---

## 1. Prinsip Utama: AI = Junior Dev, Kamu = Reviewer

Jangan balikkan perannya. AI itu junior developer super cepat tapi butuh review. Kamu yang pegang arah, AI yang ngetik.

- Kamu tulis semua code yang kritis (auth, payment, data migration, security).
- AI tulis semua yang boilerplate, test, CRUD, styling, script sekali pakai.
- **Rule emas: jangan merge code yang tidak bisa kamu jelaskan satu kalimat.** Kalau nggak bisa jelaskan `fn ini apa fungsinya`, kamu bukan lagi coding — kamu pasang bom waktu.

## 2. Loop Kerja Kecil (Anti Hilang Arah)

Satu langkah kecil → verifikasi → langkah berikutnya. Bukan "build me a full app".

```
1. Tulis tujuan 1 kalimat di commit/issue: "Login harus bisa X"
2. Minta AI plan dulu: "rancang langkahnya, jangan code dulu"
3. Terima plan → cek masuk akal → baru eksekusi step 1-nya
4. Verifikasi tiap step: jalan, test pass, output benar
5. Commit tiap step yang jalan (commit kecil, pesan jelas)
```

- Langkah kecil = kalau AI ngaco, kerusakan cuma sekecil langkah itu.
- Langkah besar = kalau AI ngaco, kamu nggak tahu bagian mana yang rusak.

## 3. Selalu Punya Jalur Kembali (Git = Save Point)

- `git commit` setiap kali sesuatu jalan. Bukan "nanti abis selesai". Sesuatu yang jalan itu definisi "selesai" sementara.
- Belajar `git reflog` dan `git reset --hard` — ini tombol undo kamu. Tanpa ini, vibe coder kehilangan satu malam kerja karena satu refactor gagal.
- Branch per eksperimen: vibe dulu di branch, bagus → merge, jelek → delete tanpa penyesalan.

## 4. Cara Prompt yang Nggak Membuat AI Bingung

Prompt buruk: "bikin login" → AI nebak 40 hal.
Prompt bagus:

```
Tech: [framework + versi], file: [path], pattern: [ikuti file X]
Tugas: tambah login, email+password, validasi sisi server
Batasan: JANGAN ubah file lain. Output: diff saja.
Test: sertakan 1 test untuk password salah.
```

- **Kasus konteks**: selalu sebut file yang relevan, jangan minta AI nebak struktur proyek.
- **Batasan scope**: "jangan ubah file lain" mencegah AI melakukan refactor liar yang tidak diminta.
- **Minta AI jadi reviewer**: "review code ini, cari bug & edge case" — AI bagus untuk itu, sering-sering pakai sebelum commit.
- **Prompt iteratif, bukan prompt sekaligus**: koreksi 1–2 hal per putaran, bukan ganti total.

## 5. Verifikasi, Jangan Percaya

AI bisa salah dengan gaya yang sangat percaya diri. Rutinitas:

- **Jalanin sendiri**. Code yang belum dieksekusi itu belum selesai. Nggak peduli kelihatannya seberapa benar.
- **Baca diff sebelum accept** (di editor / git diff). Merah-hijau kecil itu contract kamu dengan codebase.
- **Test untuk logic yang non-trivial**. Minimal 1 test yang membuktikan behavior, bukan test tempelan yang selalu hijau.
- **Ask "kenapa?"** pada solusi AI. Kalau AI jawabannya "karena biasanya begitu" — cari solusi lain.

## 6. Rahasia Junior yang Kamu Bertahap Hilangkan (Jangan Dilepas)

- Baca error sendiri dulu sebelum copas ke AI. Skill baca error = skill yang paling tahan AI-replacement.
- Hafalkan struktur proyekmu sendiri. AI boleh bantu cari, tapi kamu yang harus tahu "file ini di mana".
- Pahami library yang kamu pakai di level "kenapa ada", bukan cuma "API-nya apa".
- Sisihkan waktu ngoding tanpa AI per minggu (1–2 jam). Ini jaga skill dasar kamu tetap hidup.

## 7. Tanda Kamu Sudah Hilang Arah (Red Flags)

Muncul salah satu → STOP, balik ke langkah 2 (loop kecil):

- [ ] Sudah 20+ menit prompt-prompt tanpa satu commit pun
- [ ] Kamu sudah 3× "coba-coba" dan error tetap muncul (pola: error baru tiap kali)
- [ ] Kamu tidak tahu code terakhir yang masuk itu apa fungsinya
- [ ] AI mengubah file yang tidak kamu minta
- [ ] Stack trace sudah lebih panjang dari screenshottmu
- [ ] Kamu berhenti baca error karena capek

**Tindakan saat red flag**: tutup prompt, tulis di file masalah kamu dalam 3 kalimat (apa error, kapan muncul, apa yang sudah dicoba), baca sendiri. Sering sekali kamu langsung tahu jawabannya. Kalau tidak, baru tanya AI dengan 3 kalimat itu.

## 8. Kebersihan Konteks

- Satu task = satu sesi obrolan. Jangan campur debug login dengan redesign homepage — konteks campur = AI jadi bingung.
- Sesi lama yang berputar-putar = buang. Mulai sesi baru dengan ringkasan 5 kalimat: masalah, yang sudah dicoba, state sekarang.
- Simpan file `NOTES.md` di proyek: catat keputusan & gotcha ("kita pakai X karena Y"). Ini konteks yang bisa dipaste ke AI mana pun, kapan pun, tanpa kamu hafal sesi lama.

## 9. YAGNI (Kamu Akan Sering Melanggar, Jadi Tulis Di Sini)

Junior + AI = resep klasik over-engineering. AI dengan senang hati membuat: interface dengan 1 implementasi, factory untuk 1 product, config untuk 1 nilai, abstraction "biar nanti gampang".

- Rule: **jangan tambah code "untuk nanti"**. Nanti akan kamu tulis saat "nanti" datang, dan kamu akan lebih paham konteksnya saat itu.
- Sebelum minta fitur ke AI, tanya: "ini dipakai hari ini atau cuma dipikirkan hari ini?"
- Code paling bagus adalah code yang tidak ada.

## 10. Security & Data — NON-NEGOTIABLE

Vibe coding bukan alasan untuk:

- Commit `.env`, API key, password, token — ke git. Pernah sekali = pernah di internet selamanya.
- Trust input user tanpa validasi (SQL injection, XSS, path traversal).
- Minta AI generate query DB / auth / crypto tanpa review sendiri penuh-penuh.
- Jalankan script dari AI yang nggak kamu baca. Baca dulu. Jalankan kemudian.
- Deploy ke produksi tanpa: backup DB, `secret` dari file config, rate limit di endpoint auth.

## 11. Cheat Sheet Harian

| Situasi | Aksi |
|---|---|
| Mau mulai task | Tulis tujuan 1 kalimat → minta AI plan → eksekusi per step |
| Error muncul | Baca error sendiri → form 3 kalimat → baru tanya AI |
| AI ngasih code besar | Minta pecah jadi step kecil, terima bertahap |
| AI ngasih code tidak diminta | Tolak: "batalkan, hanya X yang saya minta" |
| Sesudah jalan | Test → commit → tulis 1 kalimat di NOTES.md |
| Sudah 20 menit stuck | STOP. Red flag check (bagian 7) |
| Mau refactor besar | Branch baru, commit kecil per langkah, test dulu sebelum merge |
| Akhir hari | `git status` → commit/parkir → tulis todo besok (3 item max) |

## 12. Faktor Tambahan Anti-Hilang Arah (Selain 11 Poin Di Atas)

Kalau §1–11 sudah jalan tapi kamu masih merasa nyasar, biasanya salah satu faktor ini yang bocor.

### 12.1 Ukuran Langkah (Task Slicing)
1 task = 1 outcome yang bisa diverifikasi sendiri. Ukur dengan: "apakah saya bisa selesai & test dalam < 30 menit?" Kalau tidak → pecah lagi.
Sinyal task kelewat besar: prompt-nya pakai "sekalian", "plus", "dan juga", "sambil".

### 12.2 Definition of Done yang Tertulis
Sebelum mulai, tulis 3–5 poin "selesai kalau…". Contoh: "endpoint `POST /orders` balikin 201, simpan ke DB, 1 test pass".
Tanpa DoD, "selesai" jadi perasaan. Dengan DoD, jadi checklist.

### 12.3 Environment Dulu, Code Kemudian
Sering hilang arah karena environment-nya rusak, bukan code-nya salah.
Cek dulu: runtime jalan? DB nyala? `.env` lengkap? dependency terinstall? port bentrok?
Rule: bisa run `hello world` di stack itu dulu sebelum minta fitur.

### 12.4 Satu Perubahan = Satu Alasan
Kalau AI mengubah 3 hal dalam satu diff (tambah fitur + refactor + ganti style), kamu tidak bisa tahu mana yang bikin kerja dan mana yang bikin rusak.
Minta: "satu perubahan per step, jangan campur".

### 12.5 Observability Dasar
Supaya tidak buta saat ada masalah:
- **Log** — tulis ke mana? apa yang dicatat saat request masuk/keluar?
- **Error message** — harus ada info cukup untuk debug, jangan `"error"` saja.
- **Trace ID** — satu ID per request, diteruskan ke log & downstream.
Kalau tidak ada log, kamu debug pakai tebakan selama berjam-jam.

### 12.6 Rollback Plan
Sebelum deploy/perubahan besar, jawab: "kalau ini rusak, gimana balikinnya dalam 5 menit?"
- Schema migration → ada down migration / backup?
- Feature baru → dibalik flag / revert commit?
- Tanpa jawaban ini = bukan perubahan, itu taruhan.

### 12.7 Pemisahan Lingkungan (Dev / Staging / Prod)
- Jangan pernah test di prod.
- Config beda per environment lewat env var, bukan edit kode.
- Kredensial dev ≠ prod. DB dev boleh direset, DB prod tidak.

### 12.8 Belajar dari Diff, Bukan Cuma dari Prompt
Setiap habis minta AI, baca diff-nya dan catat 1 hal baru yang kamu pelajari.
Vibe coding bikin cepat; kebiasaan ini yang bikin kamu makin paham, bukan makin buta.

### 12.9 Lepas Ketergantungan pada 1 Sesi
Kalau sesi AI sudah 30+ pesan dan makin muter, buang.
Tulis "state file" 5 baris: tujuan, yang sudah dicoba, yang gagal, state sekarang, langkah berikutnya. Paste ke sesi baru.

### 12.10 Anggaran Waktu & Batas Explore
Tentukan batas sebelum mulai: "30 menit ngulik; kalau belum jalan, saya tulis apa yang gagal dan ubah pendekatan."
Tanpa batas, 1 bug bisa menghabiskan 1 hari dan 1 hari itu kamu belajar nol karena cuma coba-coba.

---

## 13. Kamus Istilah Backend & Infra (Versi Junior)

Dikelompokkan per kategori. Format: **istilah** — arti simpel — kenapa kamu peduli.

### 13.1 Arsitektur & API

- **API (Application Programming Interface)** — kontrak antara 2 program. — Ini pintu masuk aplikasi kamu; kalau kontraknya berantakan, semua klien (frontend, mobile, partner) ikut rusak.
- **Endpoint** — 1 alamat + method API, mis. `GET /users/:id`. — Unit kerja backend. Satu endpoint = satu tanggung jawab jelas.
- **REST** — gaya API berbasis resource + HTTP method (GET/POST/PUT/PATCH/DELETE). — Standar paling umum; pahami dulu sebelum eksperimen.
- **RPC / gRPC** — API berbasis "panggil fungsi" (bukan resource), gRPC pakai protobuf. — Untuk komunikasi antar-service yang butuh performa + kontrak ketat.
- **GraphQL** — klien sebut field yang dia mau, server balas persis itu. — Menghindari over-fetch/under-fetch, tapi kompleks.
- **Webhook** — server A ngirim HTTP request ke server B saat ada event. — Komunikasi push; harus idempoten & punya retry.
- **Idempotent** — operasi yang dijalankan berkali-kali hasilnya sama. — Wajib untuk payment, retry, webhook, PUT.
- **CRUD** — Create Read Update Delete. — Pola dasar; jangan dipakai buta, tidak semua resource butuh "delete".
- **Middleware** — kode yang jalan sebelum/sesudah handler (auth, logging, CORS). — Tempat logika lintas-endpoint ditaruh; jangan bikin duplikasi di tiap handler.
- **Handler / Controller** — fungsi yang menangani 1 request. — Seharusnya tipis: parse → panggil service → kirim response.
- **Service layer** — tempat logika bisnis. — Pisah dari HTTP supaya bisa dipakai dari worker/CLI, dan bisa dites tanpa server.
- **Repository / DAO** — lapisan akses data. — Supaya query tidak nyebar ke mana-mana.
- **DTO (Data Transfer Object)** — bentuk data yang dikirim/diterima API. — Jangan lempar entity DB mentah ke klien (bocor kolom/keputusan internal).
- **Validation** — cek input sebelum diproses. — Selalu di server. Validasi di klien hanya UX, bukan keamanan.
- **Serialization** — ubah objek internal → format kirim (JSON). — Sumber bug umum: tanggal, angka besar, `null`.
- **Versioning API** — `/v1`, `/v2`. — Supaya perubahan tidak langsung merusak klien lama.

### 13.2 Basis Data

- **Schema** — struktur tabel/kolom. — Perubahan schema = perubahan kontrak data; butuh migrasi.
- **Migration** — script perubahan schema yang bisa di-apply & di-rollback. — Wajib naik-turun; tanpa rollback, deploy = jebakan.
- **Index** — struktur bantu percepat query. — Peduli kalau query lambat; index salah bisa bikin write lambat.
- **Primary key / Foreign key** — identitas unik baris / relasi antar tabel. — Data integrity dijaga DB, jangan hanya di app.
- **Transaction (ACID)** — sekumpulan operasi yang sukses semua atau batal semua. — Wajib untuk operasi multi-tabel (transfer, order).
- **N+1 Query** — 1 query induk + N query anak. — Penyebab klasik backend lambat; biasanya salah di ORM.
- **ORM** — lapisan yang membuat query lewat objek (Prisma, Sequelize, Eloquent, SQLAlchemy). — Mempercepat, tapi jangan buta SQL dasar.
- **Normalisasi** — memecah data duplikat ke tabel sendiri. — Pengurangan inconsistency; kadang dikompromikan untuk performa (denormalisasi).
- **Connection pool** — kumpulan koneksi DB dipakai ulang. — Koneksi DB mahal; pool mencegah server tumbang saat ramai.
- **Deadlock** — 2 transaksi saling menunggu. — Terjadi karena urutan lock beda; urutkan lock dengan konsisten.
- **Soft delete** — tandai `deleted_at`, baris tidak dihapus fisik. — Butuh filter di semua query; sering dilupakan.
- **Seed** — data awal (user admin, kategori). — Bikin environment reproducible.
- **Idempotency key** — ID unik dari klien untuk mencegah operasi ganda. — Wajib untuk payment / submit form.

### 13.3 Jaringan & Protokol

- **HTTP status code** — 2xx sukses, 3xx redirect, 4xx error klien, 5xx error server. — Kontrak dengan klien; jangan balas 200 untuk error.
- **Header** — metadata request/response (`Authorization`, `Content-Type`). — Tempat auth & content negotiation.
- **CORS** — aturan browser soal origin yang boleh akses API. — Sering "error" di frontend padahal backend normal.
- **Timeout** — batas waktu tunggu. — Tanpa timeout, service bisa gantung selamanya.
- **Retry** — ulang request gagal. — Wajib untuk network; harus idempoten + backoff.
- **Backoff / Jitter** — jeda tumbuh eksponensial + random. — Mencegah semua klien "serang" server serentak setelah gangguan.
- **Rate limiting** — batas request per waktu. — Proteksi dasar untuk login, API publik, dan brute force.
- **DNS** — penerjemah nama domain → IP. — Kerap jadi penyebab "di lokal jalan, di prod error".
- **TLS/HTTPS** — enkripsi transport. — Non-negotiable di prod; token & password tanpa TLS = bocor.
- **Proxy vs Reverse Proxy** — perantara klien / di depan server. — Nginx di depan app = reverse proxy; tempat TLS, cache, rate limit.

### 13.4 Infra & Deployment

- **Environment variable** — konfigurasi lewat env ( `.env` ), bukan hardcode. — Supaya kode sama di dev/prod, beda hanya config. **Jangan commit `.env`.**
- **Container** — kemasan app + dependency (Docker). — "Jalan di mesin saya" jadi historia.
- **Image vs Container** — image = cetak biru, container = yang jalan. — Analogi: class vs instance.
- **CI (Continuous Integration)** — otomatisasi build/lint/test tiap push. — Jaring pengaman murah; tanpa ini review cuma tebak-tebakan.
- **CD (Continuous Deployment/Delivery)** — deploy otomatis dari pipeline. — Delivery = siap deploy; Deployment = otomatis deploy.
- **Build** — proses mengubah kode jadi artifact yang bisa dijalankan. — Kalau build beda di lokal vs CI, output beda. Selalu test di kondisi CI.
- **Artifact** — hasil build (image, jar, zip). — Yang di-deploy itu artifact, bukan isi folder lokal.
- **Reverse proxy** — Nginx / Traefik di depan app. — TLS, routing, gzip, cache, rate limit.
- **Load balancer** — bagi traffic ke beberapa instance app. — Butuh app stateless (jangan simpan session di memory).
- **Stateless vs Stateful** — app tanpa / dengan state di mesin itu. — App harus stateless supaya bisa scale & restart aman.
- **Horizontal scaling** — tambah instance. — Murah secara software, butuh desain stateless + shared DB/cache.
- **Vertical scaling** — besarkan mesin. — Cepat tapi mahal & ada batas.
- **Blue-green deploy** — 2 environment, tukar traffic. — Rollback cepat.
- **Canary release** — rilis ke sebagian kecil user dulu. — Deteksi error sebelum kena semua orang.
- **Zero downtime deploy** — deploy tanpa memutus user. — Butuh health check + graceful shutdown.
- **Health check** — endpoint yang membuktikan app hidup. — Dipakai load balancer/ scheduler untuk restart otomatis.
- **Graceful shutdown** — selesaikan request aktif sebelum mati. — Kalau tidak, deploy = request gagal sporadis.
- **Cron job** — tugas terjadwal. — Wajib idempoten & punya lock supaya tidak jalan dobel.
- **Worker / queue** — pengerjaan latar belakang via antrian. — Untuk tugas lama (email, rendering, upload); jangan tahan request HTTP.

### 13.5 Reliability, Cache, Observability

- **Cache** — simpan hasil supaya cepat. — Cache benar = cepat; cache salah = data palsu. Selalu ada strategi invalidasi.
- **Cache invalidation** — kapan & bagaimana cache dibuang. — Masalah tersulit; tulis aturannya, jangan improvisasi.
- **TTL (Time To Live)** — masa berlaku cache. — Jangan "cache selamanya" untuk data yang bisa berubah.
- **Redis** — penyimpanan key-value in-memory. — Cache, session, lock, rate limit.
- **Message broker (RabbitMQ, Kafka)** — perantara pesan untuk async. — Decoupling antar-service; jangan pakai untuk hal yang butuh jawaban langsung.
- **Circuit breaker** — berhenti memanggil service yang sedang rusak. — Mencegah error menumpuk ke seluruh sistem.
- **Observability** — kemampuan memahami sistem dari luar. — Pillar: log, metric, trace.
- **Logging** — catat kejadian. — Structured (JSON) > teks bebas. Jangan log password/token/PII.
- **Metric** — angka agregat (request rate, error rate, latency). — Deteksi "lambat" sebelum user komplain.
- **Tracing** — jejak 1 request lintas service (trace ID). — Tanpa ini, debug sistem terdistribusi = tebak-tebakan.
- **SLA / SLO / SLI** — target layanan / target internal / ukuran sebenarnya. — Bahasanya saat bicara reliability.
- **Breaker/Alert** — pemberitahuan otomatis. — Alert yang tidak actionable = noise; hapus.

### 13.6 Keamanan

- **Authentication** — siapa kamu. — Login, session, token.
- **Authorization** — kamu boleh apa. — Sering salah: cek login tapi tidak cek kepemilikan data (IDOR).
- **IDOR** — akses data orang lain lewat ID. — Selalu cek izin per resource, bukan cuma per route.
- **JWT**
  — token berisi klaim, ditandatangani. — Tidak bisa dicabut sepihak; jangan simpan data rahasia di dalamnya. Simpan di HttpOnly cookie, jangan localStorage.
- **Session vs Token** — state di server vs state di klien. — Session mudah dicabut, token scalable. Pilih sadar.
- **RBAC / ABAC** — izin berbasis role / atribut. — Jangan `if role === 'admin'` tersebar di 50 tempat; pusatkan.
- **Hash vs Encryption** — hash satu arah (password), encryption bisa dekripsi (data sensitif). — Password pakai bcrypt/argon2, jangan pernah encrypt.
- **Salt** — tambahan acak di hashing password. — Mencegah rainbow table.
- **SQL Injection** — input user ikut ke query. — Selalu parameterized query / ORM; jangan string concat.
- **XSS** — skrip jahat masuk halaman. — Escape output, CSP, hindari `innerHTML`.
- **CSRF** — request dipalsukan atas nama user login. — Butuh CSRF token / SameSite cookie.
- **SSRF** — server menyuruh memanggil alamat internal. — Validasi URL keluar, jangan bebas membuka webhook URL.
- **Secrets management** — simpan kredensial aman. — Jangan di git, jangan di log, jangan di client.
- **Least privilege** — kasih izin seminimal mungkin. — User DB app tidak perlu `DROP TABLE`; token service cukup 1 akses.
- **Encryption at rest / in transit** — database tersimpan terenkripsi / transport terenkripsi. — Minta di infra, jangan hanya percaya app.

### 13.7 Kode & Kolaborasi

- **Refactor** — mengubah struktur tanpa mengubah perilaku. — Butuh test pembanding; jangan campur dengan fitur.
- **Technical debt** — utang keputusan cepat yang perlu dibayar nanti. — Catat, jangan diamkan.
- **Boilerplate** — kode struktural berulang. — AI bagus di sini; jangan disimpan manual.
- **Lint** — deteksi masalah gaya/potensi bug. — Jalankan di CI, eksplisit kecuali ada alasan.
- **Unit / Integration / E2E test** — 1 fungsi / beberapa bagian / seluruh alur. — Piramida: banyak unit, sedikit E2E.
- **Test coverage** — persentase kode disentuh test. — Bukan target angka; targetnya perilaku penting teruji.
- **Mock vs Stub** — pengganti objek untuk kontrol / nilai balik. — Jangan mock semua; kalau semua di-mock, test tidak membuktikan apa pun.
- **Contract test** — test kesepakatan antar service. — Mencegah kerusakan diam saat satu service berubah.
- **Feature flag** — on/off fitur tanpa deploy. — Rilis aman + rollback tanpa deploy.
- **Semantic versioning (semver)** — `MAJOR.MINOR.PATCH`. — Pahami sebelum update dependency; breaking = major.
- **Lockfile** (`package-lock.json`, `composer.lock`) — kunci versi dependency. — Jangan hapus, jangan abaikan; konsistensi build.
- **Dependency (transitive)** — dependency tidak langsung. — Sumber kerentanan; jalankan audit berkala.

### 13.8 Pola & Konsep Arsitektur

- **Monolith** — satu aplikasi deploy bersama. — Bukan hal jelek; pilih dulu sebelum microservice.
- **Microservice** — banyak service kecil. — Mahal secara operasional; jangan sebelum monolith terbukti kewalahan.
- **Event-driven** — komponen bereaksi pada event. — Decoupling; butuh idempotensi & ordering yang jelas.
- **Saga / Orchestration** — pola transaksi lintas service. — Pengganti transaksi DB saat data tersebar.
- **Hexagonal / Clean architecture** — inti bisnis terpisah dari delivery/infra. — Berguna saat app membesar; overkill untuk skrip kecil.
- **Idempotency** — (ulangi dari atas, karena paling sering dilanggar) — desain retry dari awal, bukan tambahan belakangan.
- **Strong vs Eventual consistency** — data langsung sama / lama-lama sama. — Pahami trade-off sebelum pakai replica atau cache.
- **Replica** — salinan DB untuk baca. — Baca dan tulis bisa beda; jangan baca data critical dari replica tanpa alasan.
- **Sharding** — memecah data lintas DB. — Solusi skala akhir; jangan didekati prematur.

### 13.9 Istilah yang Sering Muncul di Prompt/Diskusi AI

- **"Works on my machine"** — klasik. — Artinya: environment tidak reproducible. Wajib dicurigai.
- **Race condition** — hasil tergantung urutan timing. — Butuh lock / unique constraint / transaksi.
- **Memory leak** — memory naik terus. — Cek listener, cache, koneksi yang tidak ditutup.
- **Thread / ASGI/WSGI / worker pool** — model concurrency. — Pahami model runtime sebelum curiga code.
- **Blocking call** — operasi yang menahan thread. — Di framework async, panggilan sync bisa bikin app "diam".
- **Serialization mismatch** — data format tidak cocok antar lapisan. — Penyebab bug halus; tetapkan kontrak di DTO.
- **Happy path** — jalur sukses tanpa error. — Bukan bukti code benar; test jalur gagal juga.
- **Edge case** — kondisi ekstrem/aneh. — Minta AI eksplisit: "sebutkan 5 edge case lalu beri contoh input".
- **Time zone / UTC** — waktu global vs lokal. — Simpan UTC, format di UI.
- **Rounding / floating point** — 0.1 + 0.2 ≠ 0.3. — Uang jangan pakai float.

---

## Ringkasan 1 Kalimat

> **Langkah kecil, verifikasi tiap langkah, commit tiap jalan, paham tiap code, security non-negotiable.**

Kalau satu dari lima itu hilang, kamu bukan lagi vibe coding — kamu gambling.

---

## Urutan Belajar yang Disarankan

1. **§2** (loop kecil) + **§3** (git) → jalan aman dulu.
2. **§13.1 dan 13.2** (API + DB) → 80% kerja backend ada di sini.
3. **§12.5 dan 13.5** (log + metric + trace) → bisa debug sendiri.
4. **§13.6** (security) sebelum fitur ini menyentuh data user asli.
5. **§13.4** (deploy) sebelum pertama kali naik ke server.
6. Sisanya → per kasus, saat istilah muncul di prompt.
