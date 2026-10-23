# Untuk Apa Element U, S, dan Ruby Digunakan, dan Bagaimana Cara Kerjanya?

`Element` anotasi tanpa artikulasi (`unarticulated annotation element`), atau disingkat `element` `u`, digunakan untuk mewakili teks sebaris (`inline text`) yang diberi anotasi non-tekstual.

Berikut adalah contoh penggunaan `element` `u` untuk menyoroti berbagai kesalahan ejaan:

```html
<p>
  You can use the unarticulated annotation element to highlight
  <u>inccccort</u> <u>spling</u> <u>issses</u>.
</p>
```

Dalam contoh ini, kata `incorrect`, `spelling`, dan `issues` salah dieja. Gaya default untuk `element` `u` adalah garis bawah hitam di bawah teks.

Dalam `HTML4`, `element` `u` digunakan untuk tujuan penataan gaya (`styling`). Namun dalam `HTML5`, `element` `u` hanya boleh digunakan untuk menunjukkan bahwa teks memiliki anotasi non-tekstual yang diterapkan padanya.

Jika Anda ingin menata gaya suatu teks dengan garis bawah, Anda harus menggunakan `CSS` alih-alih `HTML`.

`Element` coret (`strikethrough element`), atau disingkat `element` `s`, harus digunakan untuk mewakili saat teks tidak lagi akurat atau tidak relevan. Berikut adalah contoh penggunaan `element` `s` untuk menunjukkan pembatalan suatu kegiatan:

```html
<p><s>Tomorrow's hike will be meeting at noon.</s></p>

<p>Due to unforeseen weather conditions, the hike has been canceled.</p>
```

Dalam contoh ini, kalimat pertama dicoret karena pendakian dibatalkan karena alasan cuaca.

`Element` `s` tidak boleh digunakan hanya untuk menunjukkan perubahan pada dokumen. `Element` yang lebih tepat dalam kasus tersebut adalah `element` teks yang dihapus (`del`) dan `element` teks yang disisipkan (`ins`).

`Element` `ruby` mewakili teks kecil yang ditampilkan di atas atau di bawah teks utama. Ini biasanya digunakan untuk menunjukkan pelafalan karakter-karakter Asia Timur. Berikut adalah contoh `element` `ruby` dari halaman MDN web docs:

```html
<ruby> 明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp> </ruby>
```

`Element` `rp`, atau `ruby fallback parenthesis element`, digunakan sebagai cadangan (`fallback`) untuk peramban yang tidak memiliki dukungan untuk menampilkan anotasi ruby.

`Element` `rt`, atau `ruby text element`, digunakan untuk menunjukkan teks bagi anotasi ruby. Teks ini biasanya digunakan untuk pelafalan, atau detail terjemahan dalam tipografi Asia Timur.

Meskipun `element` `ruby` dapat digunakan untuk jenis anotasi lainnya, kasus penggunaan yang paling umum adalah untuk tipografi Asia Timur.

## Pertanyaan (Questions)

Untuk apa `element` `u` digunakan?

- [ ] Digunakan untuk menampilkan tikbawah (`subscripts`) dalam rumus kimia.
- [ ] Digunakan untuk mewakili input pengguna dalam formulir `HTML`.
- [x] Digunakan untuk mewakili teks sebaris (`inline text`) yang diberi anotasi non-tekstual.
- [ ] Digunakan untuk memiringkan (`italicize`) teks di `HTML`.

Untuk apa `element` `s` digunakan?

- [x] Digunakan untuk mewakili saat teks tidak lagi akurat atau relevan.
- [ ] Digunakan untuk membuat alat bantu navigasi di situs web.
- [ ] Digunakan untuk mewakili informasi hak cipta di halaman.
- [ ] Digunakan untuk mewakili keterangan (`caption`) untuk gambar.

Untuk apa `element` `ruby` biasanya digunakan?

- [ ] Digunakan untuk menulis aplikasi ruby.
- [ ] Digunakan untuk membuat item daftar di sebuah halaman.
- [ ] Digunakan untuk menerapkan garis bawah untuk teks.
- [x] Digunakan untuk menunjukkan pelafalan karakter Asia Timur.

---
[⬅️ Sebelumnya](2-how-do-you-represent-computer-code-in-html.md) | [Selanjutnya ➡️](../5-review-semantic-html/1-review-semantic-html.md)
