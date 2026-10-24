# Apa Saja Gaya Default Browser yang Diterapkan pada HTML?


Saat Anda mulai bekerja dengan `HTML` dan `CSS`, Anda akan melihat bahwa beberapa gaya telah diterapkan pada halaman web Anda bahkan sebelum Anda menulis `CSS` apa pun. Gaya-gaya ini disebut "gaya default peramban" (*default browser styles*) atau "gaya *user-agent*" (*user-agent styles*).

Gaya default peramban ini memberikan pemformatan dasar untuk memastikan bahwa `element` `HTML` ditampilkan dengan cara yang mudah dibaca di semua peramban (*browser*).

Namun, gaya-gaya ini dapat sedikit berbeda dari satu peramban ke peramban lainnya, itulah sebabnya penting untuk memahaminya saat merancang tampilan yang konsisten untuk situs web Anda.

Mari kita lihat beberapa gaya default peramban umum yang diterapkan pada berbagai `element` `HTML`.

## Elemen Heading

`Heading` adalah salah satu `element` `HTML` yang paling umum digunakan dan ditata secara *default* untuk memiliki berbagai ukuran dan ketebalan (*weight*).

Sebagai contoh, `h1` (`heading` tingkat tertinggi) biasanya tebal (*bold*) dan memiliki ukuran *font* lebih besar dibandingkan dengan `heading` tingkat yang lebih rendah seperti `h2`, `h3`, dan seterusnya.

`Tag` `heading` ini membantu menentukan hierarki dan struktur konten Anda.

Contoh berikut menunjukkan keenam `element` `heading` dari `h1` hingga `h6`.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

## Elemen `hr`

`Element` lain yang memiliki gaya *default* adalah `element` `hr`, yang membuat garis horizontal (*horizontal rule*) yang sering digunakan untuk memisahkan bagian-bagian konten secara visual. Peramban umumnya menerapkan gaya garis sederhana pada `element` ini.

Untuk memahaminya lebih baik, mari kita lihat contoh kode ini:

```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<hr>
<p>Paragraph 3</p>
<p>Paragraph 4</p>
```

Garis horizontal muncul sebagai garis tipis dengan jarak (*spacing*) di atas dan di bawah teks untuk membedakan antar-bagian konten.

## Elemen `blockquote`

Selanjutnya, kita akan melihat `element` `blockquote`.

`Blockquote` digunakan untuk menunjukkan bagian teks yang merupakan kutipan dari sumber lain. Peramban biasanya menambahkan inden (*indentation*) dan terkadang memiringkan (*italicize*) teks tersebut.

Inden tersebut membantu membedakan `blockquote` dari teks lainnya, memperjelas bahwa konten ini dikutip dari sumber lain.

Mari kita lihat contoh kode ini:

```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<blockquote>I think, therefore I am. (Rene Descartes)</blockquote>
<p>Paragraph 3</p>
<p>Paragraph 4</p>
```

Pada contoh di atas, `element` `blockquote` akan menghasilkan indentasi pada teks, yang diterapkan oleh gaya default peramban.

## Elemen Anchor

`Element` lain yang memiliki gaya *default* adalah `element` *anchor* (`<a>`), yang ditata dengan warna biru *default* dan garis bawah (*underline*) agar dapat dikenali sebagai sebuah tautan (*link*).

Mari kita lihat contoh `HTML` berikut:

```html
<p>Paragraph 1</p>
<p>Paragraph 2</p>
<a href="https://freecodecamp.org/">Visit the freeCodeCamp learn page</a>
<p>Paragraph 3</p>
<p>Paragraph 4</p>
```

Kode di atas memiliki empat `element` paragraf dengan sebuah `element` *anchor* di tengah-tengahnya. `Element` *anchor* ditata dengan warna biru bergaris bawah untuk menunjukkan kepada pengguna agar menuju ke halaman belajar freeCodeCamp.

## Unordered List dan Ordered List

Terakhir, kita akan melihat `element` *unordered list* dan *ordered list*.

Peramban menambahkan pemformatan dasar pada daftar (*list*), termasuk inden dan simbol *bullet* atau angka, tergantung pada apakah Anda menggunakan *unordered list* (`ul`) atau *ordered list* (`ol`).

Mari kita lihat sebuah contoh:

```html
<p>Sample Paragraph</p>
<ol>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
</ol>
<ul>
  <li>item</li>
  <li>another item</li>
  <li>yet another item</li>
</ul>
<p>Ending Paragraph</p>
```

Pada contoh kode di atas, kita menggunakan sebuah *unordered list* dan sebuah *ordered list*. Kedua daftar ini akan sedikit menjorok (*indented*) ke kanan secara *default*.

Dari semua contoh ini, Anda melihat bagaimana peramban menerapkan jarak (*spacing*) *default*, berbagai ukuran *font*, dan ketebalan (*weight*) pada `element` `HTML` ini.

Dalam pelajaran selanjutnya, Anda akan mempelajari cara mereset beberapa gaya *default* ini menggunakan `CSS reset`.

## Pertanyaan (Questions)

Apa gaya default yang diterapkan pada tag heading (`h1` hingga `h6`) di sebagian besar peramban?

- [ ] Semuanya memiliki ukuran dan ketebalan yang sama.
- [x] Semuanya memiliki ukuran dan ketebalan yang bervariasi, dengan `h1` sebagai yang terbesar dan paling tebal.
- [ ] `h1` dicetak miring (*italicized*), dan `h6` digarisbawahi.
- [ ] Semua `tag` `heading` berada di tengah (*centered*) secara *default*.

Seperti apa tampilan element `hr` secara default di sebagian besar peramban?

- [x] Sebuah garis horizontal tipis dengan jarak di atas dan di bawah.
- [ ] Garis putus-putus (*dashed line*) yang membentang di sepanjang lebar halaman.
- [ ] Garis hitam tebal tanpa jarak.
- [ ] Bilah berwarna yang memisahkan bagian-bagian.

Bagaimana tag anchor (`a`) biasanya ditata secara default di peramban?

- [ ] `bold` dan `green`.
- [x] `underline` dan `blue`.
- [ ] `italic` dan `red`.
- [ ] `underline` dan `purple`.

---
[⬅️ Sebelumnya](3-what-is-the-meta-viewport-element-used-for.md) | [Selanjutnya ➡️](5-what-are-inline-internal-and-external-css.md)
