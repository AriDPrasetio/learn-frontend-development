# Bagaimana Cara Menampilkan Waktu dan Tanggal di HTML?

`Element` `time` digunakan untuk mewakili momen waktu tertentu.

Berikut adalah contoh penggunaan `element` `time` untuk mewakili pukul dua puluh nol-nol, atau jam delapan malam.

```html
<p>The reservations are for <time datetime="20:00">20:00 </time></p>
```

Atribut `datetime` digunakan untuk menerjemahkan tanggal dan waktu ke dalam format yang dapat dibaca mesin (`machine-readable format`).

Ini penting, karena membantu hasil mesin pencari (`search engine`) dan membantu peramban memproses informasi tanggal dan waktu dengan lebih efektif.

Nilai untuk atribut `datetime` harus berupa tahun yang valid, bulan yang valid, waktu yang valid, tanggal lokal, tanggal global, atau string durasi yang valid.

Berikut adalah contoh lain penggunaan `element` `time` untuk mewakili tanggal tertentu:

```html
<p>
  The graduation will be on <time datetime="2024-06-15T15:00">June 15</time>
</p>
```

Nilai untuk atribut `datetime` menggunakan format ISO 8601. ISO 8601 adalah standar internasional untuk merepresentasikan tanggal dan waktu.

Bagian pertama dari nilai tersebut adalah tahun, bulan, dan hari. Huruf kapital T dalam nilai tersebut adalah pemisah antara tanggal dan waktu.

Pukul lima belas nol-nol adalah jam tiga sore.

Setiap kali Anda perlu merepresentasikan acara, tanggal publikasi, atau janji temu, yang terbaik adalah menggunakan `element` `time`.

## Pertanyaan (Questions)

Apa fungsi atribut `datetime` dalam `element` `time`?

- [ ] Memformat teks menjadi tebal (`bold`).
- [x] Menerjemahkan tanggal dan waktu ke dalam format yang dapat dibaca mesin (`machine-readable format`).
- [ ] Menambahkan warna pada teks.
- [ ] Membuat hyperlink ke halaman lain.

Manakah format yang benar untuk nilai atribut `datetime` menurut ISO 8601?

- [x] `YYYY-MM-DDTHH:MM:SS`
- [ ] `DD-MM-YYYY HH:MM`
- [ ] `MM-DD-YYYY HH:MM AM/PM`
- [ ] `YYYY/MM/DD HH:MM:SS`

Apa yang diwakili oleh huruf kapital 'T' dalam nilai `datetime` ISO 8601?

- [ ] Zona waktu (`time zone`).
- [x] Pemisah antara tanggal dan waktu.
- [ ] Judul dokumen.
- [ ] Suhu udara.

---
[⬅️ Sebelumnya](3-how-do-you-display-addresses-in-html.md) | [Selanjutnya ➡️](../4-working-with-specialized-semantic-elements/1-how-do-you-display-mathematical-equations-and-chemical-formulas-in-html.md)
