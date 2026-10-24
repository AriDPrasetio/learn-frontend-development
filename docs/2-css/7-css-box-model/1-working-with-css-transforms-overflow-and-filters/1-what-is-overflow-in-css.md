# Apa Itu Overflow di CSS, dan Bagaimana Cara Kerjanya?

`Overflow` mengacu pada cara `element` menangani konten yang melebihi atau meluap (*overflow*) dari ukuran `element` penampungnya (*containing element*). Sebagai contoh, konten teks dari sebuah `element` `div` dapat meluap keluar dari batas-batasnya (*borders*).

`Overflow` bersifat dua dimensi, sumbu x (*x-axis*) menentukan `overflow` horizontal, dan sumbu y (*y-axis*) menentukan `overflow` vertikal.

Mari kita perbaiki `overflow` pada contoh kita menggunakan `property` `CSS` `overflow-y`. Pertama, kita dapat menyembunyikan `overflow` sepenuhnya dengan `hidden` seperti ini:

```html
<link rel="stylesheet" href="styles.css">

<div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
```

```css
div {
  height: 200px;
  overflow-y: hidden;
}
```

Ini menyelesaikan masalah `overflow`, tetapi sekarang konten tambahannya menjadi sama sekali tidak dapat dijangkau. Sebagai gantinya, kita dapat menggunakan `scroll` untuk memaksa `element` agar dapat digulirkan (*scrollable*):

```html
<link rel="stylesheet" href="styles.css">

<div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>
```

```css
div {
  height: 200px;
  overflow-y: scroll;
}
```

Sekarang ini mengubah `container` menjadi `element` yang dapat digulir (*scrollable element*), memungkinkan semua konten untuk dilihat dengan menggulir `element` secara independen dari pengguliran halaman (*page scroll*). Kita juga dapat membiarkan peramban (*browser*) menanganinya sendiri dengan `value` `auto`. Perlu dicatat bahwa pengguliran vertikal (*vertical scrolling*) umumnya dianggap baik-baik saja, sementara pengguliran horizontal (*horizontal scrolling*) mungkin dipertanyakan karena umumnya bukan keputusan desain yang lazim.

Dengan pengetahuan ini, Anda sekarang dapat mengontrol bagaimana konten Anda meluap, memberi Anda kendali lebih besar atas tata letak (*layout*) halaman Anda.

## Pertanyaan (Questions)

Apa yang dimaksud dengan `overflow` di `CSS`?

- [ ] Ketika sebuah `element` diposisikan di luar `parent container`-nya.
- [x] Ketika konten melebihi ukuran dari `element` penampungnya (*containing element*).
- [ ] Ketika ada terlalu banyak `element` pada sebuah halaman.
- [ ] Ketika `styles` `CSS` saling berbenturan satu sama lain.

Manakah `property` `CSS` yang digunakan khusus untuk mengontrol `overflow` vertikal?

- [ ] `overflow`
- [ ] `overflow-x`
- [x] `overflow-y`
- [ ] `vertical-overflow`

Berdasarkan materi pelajaran, jenis `overflow` manakah yang umumnya dianggap lebih dapat diterima dalam desain web?

- [ ] `Overflow` horizontal.
- [x] `Overflow` vertikal.
- [ ] Keduanya sama-sama dapat diterima.
- [ ] Keduanya tidak dapat diterima.

---

⬅️ Sebelumnya | [Selanjutnya ➡️](2-what-is-the-css-transform-property.md)
