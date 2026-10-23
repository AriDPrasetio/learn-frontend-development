# Apa Itu HTML Validator, dan Bagaimana Cara Kerjanya Membantu Anda Men-debug Kode Anda?

`HTML` adalah bahasa yang sangat pemaaf – `element` akan tetap dirender bahkan saat Anda membuat kesalahan, seperti lupa menyertakan tag penutup (`closing tag`).

Katakanlah Anda memiliki `element` `h2` tanpa tag penutup:

```html
<h1>Article Topic</h1>
<h2>Subheading 1 </h2>
<h2>Subheading 2 </h2>

<!-- This h2 does not have a closing tag -->
<h2>Subheading 3

```

`h2` tanpa tag penutup tersebut akan tetap dirender dengan baik. Hal ini terjadi karena peramban (`browsers`) menggunakan algoritma penguraian (`parsing algorithm`) yang menangani kesalahan umum dan mencoba me-render `HTML` sedekat mungkin dengan niat si pembuat kode.

Tetapi hal ini terkadang bisa menjadi bumerang. Mari kita tambahkan beberapa paragraf di bawah tag heading 2 yang ada di dalam kode:

```html
<h1>Article Topic</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nisi.</p>

<h2>Subheading 1 </h2>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, doloremque.</p>

<h2>Subheading 2 </h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, placeat.</p>

<!-- This h2 does not have a closing tag -->
<h2>Subheading 3
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, illum.</p>

```

Akibatnya, `element` paragraf di bawah `h2` yang tidak memiliki tag penutup `h2` ikut dirender sebagai heading 2. Inilah mengapa Anda memerlukan sebuah `HTML validator`.

Sebuah `HTML validator` adalah alat yang memeriksa validitas kode `HTML` Anda terhadap spesifikasi standar `HTML`. Alat ini membantu Anda mengidentifikasi kesalahan (`errors`) dan peringatan (`warnings`) di dalam kode `HTML` Anda, memastikan halaman web Anda terstruktur dengan benar dan sesuai dengan standar web (`web standards`).

Menggunakan `HTML validator` tidak hanya menguntungkan Anda dan tinjauan kode (`code review`) Anda di masa mendatang, tetapi juga siapa saja yang memeriksa kode Anda, seperti rekan tim dan kontributor sumber terbuka (`open-source`).

Ada beberapa `HTML validator` di luar sana yang dapat Anda gunakan. Salah satu yang paling diterima secara luas adalah layanan validasi markup `w3.org` (`W3C markup validation service`).

Saat Anda mengunjungi situs [`validator.w3.org`](https://validator.w3.org/), Anda dapat mengklik tombol `Validate by Direct Input` dan menempelkan kode `HTML` Anda.

Ketika Anda mengklik tombol `Check`, maka daftar hasil akan ditampilkan bersama dengan kesalahan-kesalahan yang perlu diperbaiki.

`HTML validator` lain yang dapat Anda gunakan adalah [`jsonformatter.org`](https://jsonformatter.org/).

Anda dapat menyalin dan menempelkan kode `HTML` Anda di dalam editor pertama, dan ketika Anda mengklik tombol `Validate`, alat tersebut akan menunjukkan setiap kesalahan yang ada pada kode Anda.

## Pertanyaan (Questions)

Mengapa peramban me-render tag dengan benar meskipun terdapat kesalahan seperti lupa menutup tag?

- [ ] `HTML` tidak peduli dengan penutupan tag.
- [x] Algoritma penguraian (`parsing algorithm`) peramban mencari tahu kesalahan dan mencoba me-render tag sebagaimana mestinya.
- [ ] Algoritma diffing editor kode mengetahui apa yang ingin dirender oleh pembuat kode.
- [ ] `HTML` cukup pintar untuk mengetahui apa yang ingin ditampilkan oleh pembuat kode.

Apa itu `HTML validator`?

- [ ] Alat untuk menulis `HTML`.
- [ ] Alat untuk menyusun kode `HTML`.
- [ ] Alat untuk membuat kode `HTML` berfungsi di berbagai peramban.
- [x] Alat yang memeriksa validitas `HTML`.

Manakah dari berikut ini yang merupakan contoh dari `HTML validator`?

- [x] W3.org HTML validator
- [ ] CSS Lint
- [ ] JavaScript Debugger
- [ ] Photoshop

---
[⬅️ Sebelumnya](../2-working-with-tables/1-what-are-html-tables-used-for.md) | [Selanjutnya ➡️](2-how-to-use-the-dom-inspector-and-devtools.md)