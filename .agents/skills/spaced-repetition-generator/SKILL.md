---
name: spaced-repetition-generator
description: Orkestrator otomatis untuk mengubah materi dokumentasi belajar menjadi Sistem Spaced Repetition & Active Recall. Mengambil materi dari sub-modul, menyusun flashcard pertanyaan & jawaban terlipat (HTML details), bilah navigasi, daftar isi indeks, dan jadwal review interval (Hari 1, 3, 7, 14, 30).
---

# Spaced Repetition & Active Recall Generator (Orkestrator Pipeline)

Skill ini bertindak sebagai **orkestrator otomatis** untuk menyusun modul memori interaktif (*spaced repetition* dan *active recall*) dari materi pembelajaran yang ada pada modul target.

Hasil akhir disimpan rapi di dalam direktori `docs/<track>/<module>/spaced-repetition/` lengkap dengan bilah navigasi, daftar isi indeks (`0-daftar-isi.md`), dan tabel target pengulangan interval (`jadwal-review.md`).

---

## Standar Gaya Visual & Format GFM
Seluruh modul ringkasan wajib mematuhi standar format GitHub Flavored Markdown berikut:
- **H1 Judul**: Format menggunakan emoji yang relevan: `# [Emoji] Rangkuman: [Nama Sub-Modul / Topik]` (Contoh: `# 📖 Rangkuman: Bekerja dengan Angka dan Operator Aritmetika`).
- **Callouts / Alerts**: Gunakan anotasi GitHub Alerts (`> [!NOTE]`, `> [!TIP]`, `> [!WARNING]`, `> [!IMPORTANT]`) untuk menyoroti definisi krusial, tips memori (*mnemonics*), atau jebakan kesalahan umum.
- **Anotasi Blok Kode**: Setiap *code block* wajib diberi anotasi komentar `// ✅` untuk praktik kode yang benar, dan `// ❌` untuk kode yang mengandung kesalahan.
- **Tabel GFM**: Gunakan tabel markdown jika membandingkan dua atau lebih konsep/operator.
- **Murni GFM**: Dilarang menggunakan sintaks non-standar (seperti *wikilink* `[[ ]]` atau `==teks==`).

---

## Alur Kerja 5 Tahap

```
Input Modul -> [1] Ekstraksi Materi Sub-modul -> [2] Penyusunan Butir Active Recall -> [3] Injeksi Flashcard HTML & Navigasi -> [4] Pembuatan Jadwal & Indeks -> [5] Finalisasi
```

### Tahap 1: Ekstraksi Materi Sub-modul
1. Identifikasi folder modul yang ditargetkan (contoh: `docs/3-javascript/2-booleans-and-numbers/`).
2. Telusuri seluruh subfolder sub-modul (misal: `1-working-with-numbers-and-arithmetic-operators/`, `2-working-with-operator-behavior/`, dst).
3. Baca seluruh dokumen topik di dalam setiap sub-modul untuk mengumpulkan konsep-konsep kunci dan contoh kode esensial.

### Tahap 2: Penyusunan Butir Active Recall
Untuk setiap sub-modul (atau topik utama):
1. Susun 5–7 pasangan pertanyaan uji pemahaman (*active recall*) yang tajam dan jawaban langsung yang padat namun komprehensif.
2. Gunakan gaya bahasa netral dan instruktif, tanpa sapaan berlebihan.
3. Pastikan pertanyaan mencakup konsep inti, sintaks/operator, perilaku khusus (seperti keunikan `NaN`, `type coercion`, urutan prioritas), dan contoh kasus kesalahan umum.

### Tahap 3: Injeksi Flashcard HTML & Bilah Navigasi
Format setiap file ringkasan sub-modul di `spaced-repetition/<n>-<submodule-slug>.md` dengan struktur:
1. **Sub-Bab 1: Uji Ingatan (Active Recall)**:
   - Tambahkan blockquote peringatan: `> Coba jawab dulu di dalam kepala sebelum membuka jawabannya!`
   - Bungkus setiap pasangan pertanyaan-jawaban dengan tag lipat HTML `<details>`:
     ```html
     <details><summary><strong>1. [Pertanyaan Tajam]</strong></summary><br>[Jawaban Lengkap + Contoh Kode bila relevan]</details><br>
     ```
2. **Sub-Bab 2: Referensi Materi Lengkap**:
   - Cantumkan tautan relatif ke file-file dokumen teori aslinya di folder sub-modul terkait.
3. **Bilah Navigasi di Bagian Bawah**:
   - Tambahkan bilah navigasi sekuensial berformat:
     `---`
     `[⬅️ Sebelumnya](<prev>.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](<next>.md)`
   - Gunakan encoding UTF-8 untuk panah emoji.

### Tahap 4: Pembuatan Indeks & Jadwal Review
1. **Indeks (`0-daftar-isi.md`)**:
   - Buat file `0-daftar-isi.md` yang memuat ringkasan modul dan daftar berurutan semua tautan file di folder `spaced-repetition/`.
2. **Jadwal Review (`jadwal-review.md`)**:
   - Buat tabel pelacakan interval pengulangan (*spaced repetition*) dengan interval:
     - **Hari ke-1 (H+1)**: Pengulangan awal pasca belajar
     - **Hari ke-3 (H+3)**: Penguatan memori jangka pendek
     - **Hari ke-7 (H+7)**: Konsolidasi memori mingguan
     - **Hari ke-14 (H+14)**: Retensi dua mingguan
     - **Hari ke-30 (H+30)**: Memori jangka panjang permanen
   - Hitung tanggal kalender riil berdasarkan tanggal eksekusi sistem.

### Tahap 5: Finalisasi & Pembersihan
1. Simpan semua file langsung ke direktori target: `docs/<track>/<module>/spaced-repetition/`.
2. Bersihkan file draf sementara di `_draf/` jika ada.
3. Laporkan hasil pembuatan sistem memori kepada pengguna dengan tautan file klikable (`file:///...`).
