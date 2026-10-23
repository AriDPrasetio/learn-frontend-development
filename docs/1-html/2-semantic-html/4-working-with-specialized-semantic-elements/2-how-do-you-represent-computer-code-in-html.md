# Bagaimana Cara Merepresentasikan Kode Komputer di HTML?

`Element` `inline code` (`code`) digunakan untuk mewakili cuplikan singkat `code` di dalam teks. Kasus penggunaan umum untuk `element` `code` biasanya adalah untuk artikel teknis dan halaman dokumentasi.

Berikut adalah contoh penggunaan `element` `code` untuk menampilkan cuplikan `code` `CSS`:

```html
<p>
  To set the text color to blue in CSS, use the following code:
  <code>color: blue;</code>
</p>
```

Dalam contoh ini, properti `CSS` `color` digunakan untuk mengatur warna teks menjadi `blue`. Dengan membungkus cuplikan `code` ini di dalam tag `<code>`, ini mengomunikasikan kepada peramban (`browser`) bahwa teks tersebut adalah sepotong `inline code`.

Peramban akan menerapkan gaya default untuk konten di dalam `element` `code`. Gaya default-nya adalah font monospace (`monospaced font`).

`Element` `code` dimaksudkan untuk mewakili satu baris `code`. Jika Anda ingin mewakili beberapa baris `code`, Anda perlu menempatkan `element` `code` di dalam `element` teks yang telah diformat sebelumnya (`preformatted text element`, `pre`).

`Element` `preformatted text` digunakan untuk mewakili teks yang telah diformat sebelumnya. Berikut adalah contoh penggunaan `element` `preformatted text` untuk menampilkan deklarasi `CSS`:

```html
<pre>
  <code>
    body {
      color: red;
    }
  </code>
</pre>
```

Saat menggunakan `element` `pre`, Anda harus memperhatikan spasi karena akan ditampilkan persis seperti yang tertulis di dalam dokumen `HTML`.

Di peramban, Anda akan melihat bahwa `code` tersebut menjorok beberapa spasi ke kanan. Jika Anda mengubah indentasi dalam contoh `code`, Anda akan melihat perbedaan indentasi di layar.

Ketika menyertakan contoh `code` di dalam dokumen `HTML` Anda, Anda harus menggunakan `element` `code` untuk contoh sebaris (`inline`) yang pendek.

Jika Anda perlu menampilkan cuplikan `code` yang lebih panjang, maka Anda perlu menggunakan `element` `pre` dan `code`.

## Pertanyaan (Questions)

Untuk apa `element` `code` digunakan?

- [ ] Digunakan untuk membuat hyperlink ke halaman web lain.
- [ ] Digunakan untuk memformat teks dengan gaya tebal (`bold`) atau miring (`italic`).
- [x] Digunakan untuk mewakili cuplikan singkat `code` di dalam teks.
- [ ] Digunakan untuk menyematkan gambar dan file multimedia.

Untuk apa `element` teks yang telah diformat sebelumnya (`pre`) digunakan?

- [ ] Digunakan untuk menerapkan gaya `CSS` pada teks.
- [ ] Digunakan untuk membuat tabel dan tata letak terstruktur.
- [x] Digunakan untuk mewakili teks yang telah diformat sebelumnya (`preformatted text`).
- [ ] Digunakan untuk memasukkan hyperlink dan alamat email.

Apa penataan gaya default untuk `element` `code`?

- [x] Font monospace (`monospaced font`).
- [ ] Teks miring (`italic`) dengan latar belakang berwarna.
- [ ] Teks tebal (`bold`) dengan ukuran font yang lebih besar.
- [ ] Teks bergaris bawah (`underlined`) dengan font lebar-tetap (`fixed-width font`).

---
[⬅️ Sebelumnya](1-how-do-you-display-mathematical-equations-and-chemical-formulas-in-html.md) | [Selanjutnya ➡️](3-what-are-the-u-s-and-ruby-elements-used-for.md)
