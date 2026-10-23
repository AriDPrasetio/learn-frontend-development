# Bagaimana Cara Menampilkan Alamat (Addresses) di HTML?

`Element` alamat kontak (`contact address element`) digunakan untuk mewakili informasi kontak untuk suatu bagian di halaman web. `Element` `address` ini serbaguna dan dapat digunakan untuk halaman bisnis, halaman penulis, situs pribadi, dan banyak lagi.

Ketika membangun bagian kontak di situs web Anda, Anda harus menggunakan `semantic element` `address` alih-alih `element` generik seperti `div`.

Berikut adalah contoh penggunaan `element` `address` untuk halaman kontak perusahaan:

```html
<address>
  <h2>Company Name</h2>
  <p>
    1234 Elm Street<br />
    Springfield, IL 62701<br />
    United States
  </p>
  <p>Phone: <a href="tel:+15555555555">+1 (555) 555-5555</a></p>
  <p>Email: <a href="mailto:contact@company.com">contact@company.com</a></p>
</address>
```

Dalam contoh ini, terdapat informasi nama perusahaan, alamat fisik, telepon, dan email. Untuk alamat fisik, `element` pemisah baris (`line break element`), `br`, digunakan untuk menunjukkan pembagian antara nama jalan, kota, dan negara.

Untuk nomor telepon, kita memiliki `anchor element` (`a`) dengan nilai `href` yang disetel untuk nomor telepon. Nilai `tel:+` di dalam atribut `href` membuat tautan yang dapat diklik untuk memulai panggilan telepon pada perangkat tertentu yang mendukungnya.

Untuk alamat email, `anchor element` lain digunakan dengan nilai `href` yang disetel ke tautan `mailto`. Tautan `mailto` digunakan dalam dokumen `HTML` untuk memungkinkan pengguna membuka email baru di dalam klien email (`email client`) pilihan mereka.

Salah satu kelemahan penggunaan tautan `mailto` adalah pengguna sering kali menganggapnya sebagai spam. Sayangnya, banyak pengirim spam yang akan memanfaatkan opsi ini untuk mengirim email ke pengguna. Jadi, ingatlah hal ini saat Anda menggunakannya.

## Pertanyaan (Questions)

Apa tujuan dari `element` `address`?

- [ ] Digunakan untuk mendefinisikan bagian bagi tautan navigasi.
- [x] Digunakan untuk mewakili informasi kontak untuk suatu bagian di halaman web.
- [ ] Digunakan untuk mengatur gaya font bagi suatu bagian dari halaman.
- [ ] Digunakan untuk mengelompokkan konten untuk penataan gaya dengan `CSS`.

Untuk apa tautan `mailto` digunakan?

- [ ] Digunakan untuk menautkan ke sebuah halaman web.
- [ ] Digunakan untuk membuat tautan unduhan file.
- [ ] Digunakan untuk mengalihkan ke situs web lain.
- [x] Digunakan untuk memungkinkan pengguna membuka email baru di dalam klien email pilihan mereka.

Apa kelemahan dari penggunaan tautan `mailto`?

- [x] Tautan ini menjadi target bagi pengirim spam (`spammers`) untuk mengirim email ke pengguna.
- [ ] Tautan ini secara otomatis membuat halaman web.
- [ ] Tautan ini meningkatkan `SEO` situs web.
- [ ] Tautan ini meningkatkan kecepatan pemuatan situs web.

---
[⬅️ Sebelumnya](2-how-do-you-display-abbreviations-and-acronyms-in-html.md) | [Selanjutnya ➡️](4-how-do-you-display-times-and-dates-in-html.md)
