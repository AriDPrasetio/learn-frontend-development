# Apa Itu CSS Box Model, dan Bagaimana Cara Kerjanya?

`CSS box model` adalah konsep mendasar dalam pengembangan web. Model ini mendefinisikan bagaimana `element` `HTML` distrukturkan dan diposisikan. Jika Anda memahami model ini, Anda akan dapat mengontrol ukuran, spasi, dan tampilan `element` pada situs web Anda.

Dalam `CSS box model`, setiap `element` dikelilingi oleh sebuah kotak (*box*). Kotak ini terdiri dari empat komponen: area konten (*content area*), `padding`, `border`, dan `margin`.

Area konten (*content area*) adalah bagian terdalam dari kotak. Ini adalah ruang yang memuat konten sebenarnya dari suatu `element`, seperti teks atau gambar.

![Diagram of the CSS box model showing the orange content box at the center, surrounded by three nested, unlabelled outer box borders](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-is-the-css-box-model-1.png)

`Padding` adalah area yang berada tepat di luar area konten. Ini adalah ruang antara area konten dan `border` suatu `element`. Dengan `padding`, Anda dapat menambahkan ruang di sekitar konten untuk meningkatkan keterbacaannya. Anda dapat mengatur `value` yang berbeda untuk `padding` bagian atas (*top*), kanan (*right*), bawah (*bottom*), dan kiri (*left*) menggunakan `property` `padding`.

![Diagram of the CSS box model highlighting the orange content area wrapped inside the blue padding area, surrounded by two outer unlabelled box boundaries.](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-is-the-css-box-model-2.png)

Ini adalah contoh dengan `shorthand property` `padding`, di mana kita mengatur `padding` atas sebesar lima belas piksel, `padding` kanan sebesar lima piksel, `padding` bawah sebesar dua piksel, dan `padding` kiri sebesar delapan piksel:

```css
padding: 15px 5px 2px 8px;
```

`Border` adalah tepi luar atau garis batas dari sebuah `element` dalam `CSS box model`. Ini adalah batas visual dari `element` tersebut. Anda dapat menyesuaikan gaya (*style*), lebar (*width*), warna (*color*), dan `property` lainnya dari `border` menggunakan `property` `border`.

![Diagram of the CSS box model highlighting the orange content area, blue padding area, and a dark blue border area, surrounded by an outer unlabelled box boundary](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-is-the-css-box-model-3.png)

Berikut adalah contoh di mana kita mengatur `border` dengan lebar lima piksel, gaya `solid`, dan warna biru:

```css
border: 5px solid blue;
```

Jika Anda mengabaikan suatu `value`, nilai bawaan (*default*) dari `value` tersebut yang akan digunakan. Yaitu `medium` untuk lebar (*width*), `none` untuk gaya (*style*), dan warna saat ini (*current color*) untuk warnanya.

Anda dapat mengatur ketiga `property` ini secara langsung di dalam `shorthand property` `border` jika Anda ingin semua sisinya persis sama. Namun jika Anda ingin memberikan gaya yang berbeda pada setiap sisi, Anda dapat menggunakan `property` `border-width`, `border-style`, dan `border-color`.

```css
border-width: 2px 4px 7px 12px;
border-style: dashed solid solid dashed;
border-color: blue red green black;
```

Anda dapat menulis hingga empat `value` untuk masing-masing `property` ini. Nilai-nilai tersebut akan diterapkan dalam urutan searah jarum jam (*clockwise*) mulai dari atas. Jika Anda hanya menulis satu `value`, nilai tersebut akan diterapkan ke keempat sisi.

Terakhir, `margin` adalah ruang di luar `border` suatu `element`. Ini menentukan jarak antara suatu `element` dan `element-element` lain di sekitarnya. Anda dapat mengatur `value` `margin` yang berbeda untuk sisi atas, kanan, bawah, dan kiri `element` menggunakan `property` `margin`.

![Diagram of the CSS box model with four nested areas. From the centermost: orange content area, blue padding area, dark blue border area, and gray outer margin area](https://cdn.freecodecamp.org/curriculum/lecture-transcripts/what-is-the-css-box-model-4.png)

Jadi dalam contoh ini, `margin` atas adalah tiga piksel, `margin` kanan adalah dua belas piksel, `margin` bawah adalah sembilan piksel, dan `margin` kiri adalah tujuh piksel:

```css
margin: 3px 12px 9px 7px;
```

Keempat komponen ini sangat penting untuk menghitung total lebar (*width*) dan tinggi (*height*) suatu `element`.

Dalam beberapa pelajaran berikutnya, Anda akan mempelajari lebih lanjut tentang bagaimana hal ini ditangani oleh peramban (*browser*) dan bagaimana Anda dapat menyesuaikannya. `CSS box model` adalah konsep mendasar dalam pengembangan web.

Memahami bagaimana komponen-komponen ini berinteraksi dan berkontribusi terhadap dimensi suatu `element` sangatlah penting untuk mengimplementasikan desain web.

## Pertanyaan (Questions)

Komponen manakah dari `CSS box model` yang mendefinisikan ruang antara area konten dan `border`?

- [ ] `margin`
- [x] `padding`
- [ ] `content`
- [ ] `border`

Komponen manakah dari `CSS box model` yang menentukan ruang di luar `border` suatu `element`?

- [x] `margin`
- [ ] `padding`
- [ ] `content`
- [ ] `border`

Komponen manakah dari `CSS box model` yang membuat garis batas visual di sekeliling suatu `element`?

- [ ] `margin`
- [ ] `padding`
- [ ] `content`
- [x] `border`

---

[⬅️ Sebelumnya](2-what-is-the-css-transform-property.md) | [Selanjutnya ➡️](4-what-is-margin-collapsing.md)
