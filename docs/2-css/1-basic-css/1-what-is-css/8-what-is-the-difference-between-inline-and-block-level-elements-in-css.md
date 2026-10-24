# Apa Perbedaan Antara Elemen Inline dan Block-Level dalam CSS?


Dalam `HTML` dan `CSS`, `element` diklasifikasikan sebagai **`inline element`** atau **`block-level element`**, dan klasifikasi ini menentukan bagaimana perilaku mereka dalam tata letak (*layout*) dokumen.

Memahami perbedaan ini sangat penting untuk mengontrol bagaimana konten Anda ditampilkan di halaman web.

`Block-level element` adalah `element` yang secara *default* menghabiskan seluruh lebar yang tersedia bagi mereka, membentang di sepanjang lebar wadah (*container*) mereka.

`Element-element` ini selalu dimulai pada baris baru dan mendorong konten lain ke baris berikutnya, menciptakan sebuah "blok" konten.

`Block-level element` memiliki `property` `CSS` `display: block;` yang diterapkan secara *default*. `Property` ini memastikan bahwa `element` membentang untuk mengisi lebar wadah dan muncul pada baris baru.

Beberapa `block-level element` yang umum adalah `element` `div`, paragraf, `heading`, *ordered list*, *unordered list*, dan `element` `section`.

Berikut adalah contoh kode dari sebuah `block-level element`:

```html
<p style="border: 2px solid red;">
  First paragraph
</p>
<p>Second paragraph</p>
```

Pada contoh ini, kita memiliki dua `element` paragraf di mana `element` yang pertama memiliki garis tepi merah di sekelilingnya.

Kedua `element` paragraf tersebut tidak berada pada baris yang sama karena keduanya merupakan `block-level element` secara *default*.

Jadi, kedua `element` paragraf akan menempati lebar penuh dari wadahnya, yang dalam kasus ini adalah `element` `body`.

`Block-level element` sangat ideal ketika Anda ingin konten tersusun secara vertikal (*stack vertically*), seperti paragraf, bagian (*section*), atau blok konten yang lebih besar. Mereka umumnya digunakan untuk menentukan tata letak dan struktur halaman web.

`Inline element`, tidak seperti `block-level element`, hanya menempati lebar sebanyak yang dibutuhkannya dan tidak dimulai pada baris baru. `Element-element` ini mengalir di dalam konten (*flow within the content*), memungkinkan teks dan `inline element` lainnya muncul berdampingan dengannya.

`Inline element` memiliki `property` `CSS` `display: inline;` yang diterapkan secara *default*. `Property` ini memastikan bahwa `element` tetap berada di dalam aliran konten dan tidak terputus ke baris baru.

`Inline element` yang umum adalah `element` `span`, `a`, dan `img`.

Berikut adalah contoh untuk lebih memahami `inline element`:

```html
<p>This is a
  <span style="color: red; border: 2px solid green;">red</span>
  word inside a paragraph.
</p>
```

Pada contoh ini, kita memiliki sebuah `element` `span` yang bersarang di dalam sebuah `element` paragraf. `Element` `span` tersebut memiliki warna teks `red` dengan garis tepi `green` di sekelilingnya sehingga Anda dapat melihat kata yang disorot dengan lebih jelas.

Seperti yang Anda lihat, `element` `span` hanya menempati ruang sebanyak kata "red" dan tidak mendorong konten berikutnya ke baris baru.

`Inline element` paling baik digunakan untuk menata gaya sebagian kecil teks atau konten dalam satu baris, seperti menekankan sebuah kata, membuat *hyperlink*, atau menerapkan gaya tertentu pada bagian dari sebuah paragraf.

## Pertanyaan (Questions)

Apa perilaku default dari block-level element dalam CSS?

- [ ] Mereka menempati lebar sebanyak yang diperlukan dan tetap berada di dalam aliran konten.
- [x] Mereka menempati lebar penuh dari wadahnya dan dimulai pada baris baru.
- [ ] Mereka hanya digunakan untuk gambar dan tautan.
- [ ] Mereka selalu disejajarkan ke tengah halaman secara *default*.

Manakah dari berikut ini yang merupakan contoh dari inline element?

- [ ] `div`
- [ ] `p`
- [x] `span`
- [ ] `section`

Bagaimana cara mengubah perilaku block-level element agar berperilaku seperti inline element?

- [ ] Terapkan `display: inline-block;`
- [ ] Terapkan `display: flex;`
- [x] Terapkan `display: inline;`
- [ ] Terapkan `display: none;`

---
[⬅️ Sebelumnya](7-what-are-the-different-types-of-css-combinators.md) | [Selanjutnya ➡️](9-how-does-inline-block-work.md)
