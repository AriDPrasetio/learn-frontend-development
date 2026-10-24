# Apa Itu Satuan Absolut dalam CSS, dan Kapan Anda Harus Menggunakannya?

Saat mendesain halaman Anda, Anda akan bekerja dengan berbagai `property` seperti `width`, `height`, `padding`, `margin`, dan banyak lagi. Ketika Anda mendefinisikan `property-property` ini, Anda perlu menentukan satuan panjang pengukuran yang ingin Anda gunakan.

Ada dua jenis satuan yang dapat Anda gunakan untuk mendefinisikan `property-property` ini: satuan relatif (*relative units*) dan satuan absolut (*absolute units*). Dalam pelajaran ini, kita hanya akan berfokus pada satuan absolut.

Satuan panjang absolut memiliki panjang tetap (*fixed length*) dan tidak relatif terhadap apa pun yang lain. Relatif berarti panjang tersebut relatif terhadap hal lain, seperti ukuran layar atau ukuran `element` induk (*parent element*). Kita akan membahas lebih banyak tentang satuan relatif dalam beberapa pelajaran berikutnya.

Satuan absolut yang paling umum adalah piksel (`px`). Piksel adalah satuan ukuran berukuran tetap dalam `CSS`, yang memberikan kontrol presisi terhadap dimensi. Ini berarti bahwa `1px` selalu setara dengan 1/96 inci.

Penting untuk dicatat bahwa meskipun `1px` distandardisasi sebagai 1/96 inci untuk tujuan tata letak `CSS`, ukuran fisik sebenarnya dari sebuah piksel mungkin berbeda tergantung pada layarnya.

Mari kita lihat contoh penggunaan piksel untuk mengatur `width` dan `height` untuk sebuah kotak:

```html
<link rel="stylesheet" href="styles.css" />
<div class="box"></div>
```

```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
}
```

Dalam contoh ini, kita memiliki kotak merah dengan `width` dan `height` yang diatur ke `100px`. Dimensi untuk kotak ini akan tetap sama terlepas dari perubahan yang berkaitan dengan ukuran layar.

Jadi, jika Anda berada di perangkat dengan layar kecil, kotak tersebut akan tetap selebar `100px`. Jika Anda berada di layar desktop yang besar, kotak tersebut akan tetap selebar `100px`.

Jadi, kapan Anda harus menggunakan satuan absolut seperti piksel? Ya, itu tergantung pada situasinya. Namun umumnya Anda akan menggunakan piksel di tempat Anda memerlukan kontrol presisi atas dimensi `element`, spasi, dan tata letak (*layout*). Terkadang Anda mungkin menggunakan piksel untuk `margin`, `padding`, dan `border`.

Berikut adalah contoh penggunaan piksel untuk mengatur `margin` bagi dua kotak:

```html
<link rel="stylesheet" href="styles.css" />
<div class="box"></div>
<div class="box"></div>
```

```css
.box {
  width: 100px;
  height: 100px;
  background-color: red;
  margin: 10px;
}
```

Ingat bahwa `margin` adalah ruang di luar kotak. Jadi, dalam contoh ini, kotak tersebut akan memiliki `margin` sebesar `10px` di semua sisi.

Jenis satuan absolut lainnya meliputi berikut ini:

- Satuan `in` (*inches* atau inci), yang setara dengan `96px`
- Satuan `cm` (*centimeters* atau sentimeter), yang setara dengan 25,2/64 inci
- Satuan `mm` (*millimeters* atau milimeter), yang setara dengan 1/10 sentimeter
- Satuan `q` (*quarter-millimeters*), yang setara dengan 1/40 sentimeter
- Satuan `pc` (*picas*), yang setara dengan 1/6 inci
- Satuan `pt` (*points*), yang setara dengan 1/72 inci

Sebagian besar satuan ini akan digunakan untuk cetak (*print*) dan bukan untuk layar.

Meskipun satuan yang paling umum Anda gunakan adalah piksel, penting untuk mengetahui bahwa satuan absolut lainnya ada.

## Pertanyaan (Questions)

Apa itu piksel?

- [x] Satuan pengukuran berukuran tetap yang absolut dalam `CSS`, memberikan kontrol presisi terhadap dimensi.
- [ ] Satuan pengukuran relatif dalam `CSS`.
- [ ] Satuan pengukuran yang relatif terhadap ukuran layar.
- [ ] Satuan pengukuran yang relatif terhadap ukuran `element` induk (*parent element*).

Apa saja dua jenis satuan yang dapat Anda gunakan untuk mendefinisikan `property` dalam `CSS`?

- [ ] `margin` dan `padding`.
- [ ] `cm` dan `mm`.
- [x] Satuan `absolute` dan `relative`.
- [ ] `pica` dan `point`.

Manakah dari berikut ini yang BUKAN merupakan satuan pengukuran absolut dalam `CSS`?

- [ ] `pt`
- [x] `rem`
- [ ] `in`
- [ ] `px`

---

⬅️ Sebelumnya | [Selanjutnya ➡️](2-what-are-percentages-in-css.md)
