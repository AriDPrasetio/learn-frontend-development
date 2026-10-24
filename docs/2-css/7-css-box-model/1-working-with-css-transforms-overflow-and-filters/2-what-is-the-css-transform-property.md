# Apa Itu Properti CSS Transform, dan Bagaimana Cara Kerjanya?

`Property` `CSS` `transform` adalah alat yang hebat yang memungkinkan Anda memodifikasi tampilan visual `element` pada halaman web Anda tanpa memengaruhi tata letak (*layout*) `element` lainnya. Ini memungkinkan Anda menerapkan berbagai transformasi pada `element` seperti memutar (*rotating*), mengubah skala (*scaling*), memiringkan (*skewing*), atau menggeser (*translating* / memindahkan) `element` dalam ruang 2D atau 3D.

`Property` `transform` bekerja dengan menerapkan transformasi matematis ke sistem koordinat suatu `element`. Ini berarti Anda dapat memanipulasi bentuk dan posisi `element` sambil tetap menjaga tempat aslinya dan alur dokumen (*document flow*) tetap utuh.

Mari kita pelajari beberapa `function` `transform` yang umum. Berikut adalah contoh dari sebuah `element` kotak (*box*):

```html
<link rel="stylesheet" href="styles.css">

<div class="box"></div>
```

```css
body {
  border: 2px solid black;
}

.box {
  width: 200px;
  height: 200px;
  background-color: red;
}
```

Kita telah mengatur `body` agar memiliki `border` hitam solid sehingga Anda dapat melihat `element` `.box` tersarang di dalam `element` `body`.

## Menggunakan `translate`

`Function` `translate` memindahkan sebuah `element` dari posisinya saat ini. Berikut adalah contoh yang diperbarui menggunakan `function` `translate`:

```html
<link rel="stylesheet" href="styles.css">

<div class="box"></div>
```

```css
body {
  border: 2px solid black;
}

.box {
  width: 200px;
  height: 200px;
  background-color: red;
  transform: translate(50px, 100px);
}
```

`Rule` `CSS` ini akan memindahkan `element` dengan `class` `box` sejauh 50 piksel ke kanan dan 100 piksel ke bawah dari posisi aslinya.

## Menggunakan `rotate`

`Function` `rotate` memutar sebuah `element` di sekitar titik tetap dan ini adalah contoh penggunaan `function` `rotate` untuk `element` `.box` dari sebelumnya:

```html
<link rel="stylesheet" href="styles.css">

<div class="box"></div>
```

```css
.box {
  margin: 100px;
  width: 200px;
  height: 200px;
  background-color: red;
  transform: rotate(45deg);
}
```

Ini akan memutar `element` empat puluh lima derajat searah jarum jam.

## Menggunakan `scale`

`Function` `scale` memungkinkan Anda mengubah ukuran sebuah `element`. Berikut adalah contohnya:

```html
<link rel="stylesheet" href="styles.css">

<div class="box"></div>
```

```css
.box {
  margin: 100px;
  width: 200px;
  height: 200px;
  background-color: red;
  transform: scale(1.5, 2);
}
```

Ini akan membuat `element` satu setengah kali lebih lebar dan dua kali lebih tinggi dari ukuran aslinya.

## Menggabungkan Transformasi

Anda dapat menggabungkan beberapa transformasi dalam satu `declaration` tunggal:

```html
<link rel="stylesheet" href="styles.css">

<div class="box"></div>
```

```css
.box {
  margin: 100px;
  width: 200px;
  height: 200px;
  background-color: red;
  transform: translate(50px, 50px) rotate(45deg) scale(1.5);
}
```

Ini akan memindahkan `element` 50 piksel ke kanan dan ke bawah, memutarnya 45 derajat, dan mengubah skalanya menjadi satu setengah kali dari ukuran aslinya.

## Pertimbangan Aksesibilitas

Meskipun `property` `transform` sangat bermanfaat untuk membuat desain yang menarik secara visual, penting untuk mempertimbangkan aksesibilitas saat menggunakannya. Berikut adalah beberapa masalah aksesibilitas penting yang perlu diingat.

### Urutan Pembaca Layar (Screen Reader Order)

Pembaca layar (*screen reader*) mungkin tidak menyampaikan konten yang ditransformasikan secara akurat. Sebagai contoh, jika Anda menggunakan `transform` untuk mengatur ulang urutan visual `element`, pembaca layar akan tetap membaca konten dalam urutan DOM aslinya. Hal ini dapat menimbulkan kebingungan bagi pengguna yang mengandalkan pembaca layar.

### Skala Teks (Text Scaling)

Saat menggunakan `scale` untuk mengubah ukuran teks, berhati-hatilah untuk tidak membuatnya terlalu kecil atau terlalu besar. Teks yang sangat kecil bisa sulit dibaca, sedangkan teks yang terlalu besar mungkin meluap (*overflow*) dari `container`-nya dan menjadi tidak terbaca. Umumnya lebih baik menggunakan teknik penataan font (*font styling*) yang tepat untuk mengubah ukuran teks.

### Persepsi Gerakan dan Kedalaman (Motion and Depth Perception)

Jika Anda menggunakan `transform` untuk efek animasi, perhatikan pengguna yang sensitif terhadap gerakan. Animasi yang berlebihan atau terlalu cepat dapat menyebabkan ketidaknyamanan atau bahkan memicu kejang pada sebagian orang. Pertimbangkan untuk menyediakan cara bagi pengguna untuk mengurangi atau mematikan animasi. Saat menggunakan `transform` 3D, ingatlah bahwa tidak semua pengguna mempersepsikan kedalaman dengan cara yang sama. Pastikan semua informasi penting yang disampaikan melalui efek 3D juga tersedia dalam format 2D atau melalui teks.

### Menyembunyikan Konten dengan Benar

Jika Anda menggunakan `transform` untuk menyembunyikan atau menampilkan konten, pastikan konten tersebut tetap dapat diakses oleh pembaca layar dan navigasi keyboard. Konten tersembunyi harus benar-benar disembunyikan seperti dengan menggunakan `display: none;` atau `visibility: hidden;`, daripada hanya dipindahkan secara visual ke luar layar (*offscreen*).

### Ukuran Target untuk Elemen Interaktif

Saat menerapkan `transform` ke `element` interaktif seperti tombol (*buttons*) atau tautan (*links*), pastikan area yang dapat diklik tetap intuitif dan mudah ditargetkan. Tombol yang ditransformasikan secara drastis mungkin membingungkan secara visual atau sulit diklik, terutama bagi pengguna dengan gangguan motorik.

Kesimpulannya, meskipun `property` `CSS` `transform` adalah alat yang hebat untuk membuat desain web yang dinamis secara visual, sangat penting untuk menggunakannya secara bertanggung jawab dengan memikirkan aksesibilitas. Selalu uji `element` yang Anda transformasikan dengan berbagai teknologi asistif (*assistive technologies*) dan pertimbangkan untuk menyediakan cara alternatif untuk mengakses informasi atau fungsionalitas yang mungkin terpengaruh oleh transformasi.

## Pertanyaan (Questions)

Manakah dari hal berikut yang BUKAN merupakan kekhawatiran saat menggunakan `transform` `CSS` dalam hal aksesibilitas?

- [ ] Pembaca layar (*screen reader*) mungkin tidak menyampaikan urutan visual dari `element` yang ditransformasikan secara akurat.
- [ ] Teks yang ditransformasikan mungkin menjadi terlalu kecil atau terlalu besar untuk dibaca dengan nyaman.
- [x] `Transform` selalu meningkatkan aksesibilitas situs web.
- [ ] Penggunaan `transform` yang berlebihan untuk animasi dapat menyebabkan ketidaknyamanan bagi sebagian pengguna.

Masalah potensial apa yang harus Anda waspadai saat menggunakan `transform` 3D?

- [ ] `Transform` 3D selalu menyebabkan situs web memuat lebih lambat.
- [x] Tidak semua pengguna mempersepsikan kedalaman dengan cara yang sama, yang dapat memengaruhi pemahaman.
- [ ] `Transform` 3D tidak didukung oleh sebagian besar peramban (*browser*) modern.
- [ ] `Transform` 3D secara otomatis membuat teks tidak terbaca.

Saat menggunakan `transform` untuk menyembunyikan konten, apa yang harus Anda pastikan demi aksesibilitas?

- [ ] Selalu gunakan warna-warna cerah agar konten yang ditransformasikan terlihat menonjol.
- [ ] Gunakan hanya `transform` 2D untuk menyembunyikan konten.
- [x] Pastikan konten tersebut tetap dapat diakses oleh pembaca layar dan navigasi keyboard.
- [ ] Jangan pernah menyembunyikan konten menggunakan `transform`.

---

[⬅️ Sebelumnya](1-what-is-overflow-in-css.md) | [Selanjutnya ➡️](3-what-is-the-css-box-model.md)
