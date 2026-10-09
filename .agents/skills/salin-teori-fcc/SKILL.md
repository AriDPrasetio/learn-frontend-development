---
name: salin-teori-fcc
description: Orkestrator otomatis untuk menyalin materi dari freeCodeCamp, menerjemahkannya secara utuh (verbatim) ke bahasa Indonesia, memformatnya dengan standar GFM, memfilter terminologi JavaScript, mengelompokkannya per sub-modul, dan menyusun navigasi antar-halaman. Gunakan saat pengguna meminta menyalin dan menerjemahkan teori dari rujukan secara murni tanpa merombak struktur aslinya (berbeda dengan tulis-teori-fcc).
---

# Salin Teori FCC (Verbatim Translation Pipeline)

Skill ini adalah **orkestrator otomatis** yang mengambil materi teks dari rujukan freeCodeCamp dan menerjemahkannya secara langsung kata demi kata (verbatim) ke bahasa Indonesia, dengan menjaga 100% struktur aslinya, mempercantik dengan GitHub Flavored Markdown (GFM), mengelompokkan ke dalam folder sub-modul, serta membangun navigasi sekuensial antar-halaman.

## Alur Singkat

```
Permintaan -> [0] Resolusi Sub-modul & Sanitasi -> [1] Ekstraksi Sumber (Browser) -> [2] Terjemahkan Verbatim, GFM & Filter Istilah -> [3] Penyusunan Navigasi Sekuensial -> [4] Finalisasi & Pembersihan
```

---

## Tahap 0: Resolusi Sub-modul & Sanitasi Target
1. Cari dan baca file referensi di `docs/<track>/link-source/link-referensi*.md`.
2. Petakan struktur topik berdasarkan heading H3 di modul rujukan:
   - Setiap H3 menjadi folder sub-modul tersendiri: `<n>-<submodule-slug>/` di bawah folder modul (`docs/<track>/<module>/`).
   - Setiap link di bawah H3 menjadi file topik: `<m>-<topic-slug>.md`.
3. Sanitasi folder modul jika diminta mengganti file lama:
   - Hapus file/folder dokumentasi lama (misal folder `docs/` lama).
   - **PERINGATAN KERAS**: JANGAN PERNAH menghapus atau memodifikasi folder `spaced-repetition/` yang sudah ada!

---

## Tahap 1: Ekstraksi Sumber (Browser)
Gunakan `chrome-devtools-mcp`:
1. Jalankan `list_pages` untuk memastikan `pageId` aktif (tipe integer, misal `1`).
2. Jalankan `navigate_page` ke URL topik target. (Catatan: Jika terjadi *timeout* 10s, periksa apakah URL pada browser sudah berubah; halaman seringkali sudah selesai termuat).
3. Jalankan `evaluate_script` dengan parameter `pageId: 1`, `waitForStableDom: false`, dan fungsi ekstraksi:
```javascript
() => {
  const main = document.querySelector('main');
  const h1 = document.querySelector('h1')?.innerText ?? document.title;
  let text = main ? main.innerText : '';
  const start = text.indexOf(h1);
  if (start > 0) text = text.slice(start);
  text = text.replace(/\s*Check your answer\s*Ask for Help\s*$/, '');
  return { title: h1, text };
}
```

---

## Tahap 2: Terjemahkan Verbatim, Format GFM & Filter Terminologi JS
Tulis hasil terjemahan langsung ke file tujuan sub-modul (`docs/<track>/<module>/<submodule>/<n>-<topic>.md`):
- **Verbatim & Akurat**: Terjemahkan isi kalimat demi kalimat tanpa memotong penjelasan atau meringkas materi. Pertahankan nada instruksional asli.
- **Integritas Struktur & Pertanyaan**: Pertahankan seluruh judul bab, paragraf, blok kode, tabel, dan kuis (*Questions*) beserta semua opsi jawabannya dalam bentuk checkbox markdown (`- [ ]`, `- [x]`).
- **Penyaringan Terminologi JS Langsung (Inline/Direct Filtering)**:
  - Terapkan pembungkusan istilah teknis JavaScript baku ke dalam tanda *backtick* (`` `...` ``), seperti: `function`, `variable`, `array`, `string`, `number`, `boolean`, `truthy`, `falsy`, `operator precedence`, `typeof`, `NaN`, `null`, `undefined`, dll.
  - Hal ini dilakukan langsung pada saat penulisan dokumen untuk efisiensi tinggi tanpa overhead perulangan subagent.

---

## Tahap 3: Penyusunan Navigasi Sekuensial (Inter-Page Navigation)
Setelah seluruh file topik dalam satu modul selesai digenerate, tambahkan blok navigasi di baris paling akhir setiap dokumen:
1. **Format Standar**:
```markdown
---
[⬅️ Sebelumnya](<prev-relative-path>) | [Selanjutnya ➡️](<next-relative-path>)
```
2. **Aturan Batas**:
   - Halaman pertama pada modul: teks `⬅️ Sebelumnya` tanpa tautan.
   - Halaman terakhir pada modul: teks `Selanjutnya ➡️` tanpa tautan.
3. **Standar Penulisan**:
   - Selalu gunakan forward slash (`/`) pada link relatif antar sub-modul (contoh: `../2-nama-submodul/1-nama-topik.md`). Dilarang keras menggunakan backslash (`\`).
   - Tulis dengan encoding **UTF-8** bersih untuk menjaga integritas simbol panah emoji (`⬅️`, `➡️`).

---

## Tahap 4: Finalisasi & Pembersihan
1. Hapus folder sementara `_draf/` jika digunakan.
2. Verifikasi jumlah file per sub-modul sesuai dengan daftar rujukan `link-referensi*.md`.
3. Laporkan hasil akhir kepada pengguna dengan tautan file klikable (`file:///...`).
