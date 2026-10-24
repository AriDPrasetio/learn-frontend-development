# Bagaimana Cara Membuat Grid yang Fleksibel dengan Satuan fr?

Pada pelajaran sebelumnya, Anda telah diperkenalkan dengan `CSS Grid` yang dapat digunakan untuk membuat tata letak yang kompleks dan luwes (*fluid*) pada halaman web Anda. Dalam pelajaran ini, kita akan mempelajari cara membuat tata letak `grid` yang fleksibel menggunakan satuan `fr`.

Mari kita mulai dengan *markup* `HTML` berikut yang akan mewakili `grid container` kita:

```html
<div class="grid-container">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
```

Di dalam `CSS`, kita mengatur `property` `display` ke `grid` untuk `container` tersebut.

```html
<link rel="stylesheet" href="styles.css" />
<div class="grid-container">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
```

```css
html,
body {
  width: 90%;
  height: 50%;
}

.grid-container {
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  gap: 15px;
  background-color: darkgray;
  height: 100%;
}

.col {
  background-color: darkslateblue;
}
```

`grid-template-columns` digunakan untuk mengatur ukuran setiap kolom. Dalam kasus ini, setiap ukuran kolom adalah `25%` dari `container`. Kemudian `property` `gap` digunakan untuk membuat ruang di sekitar setiap kolom.

Sejauh ini kita telah menggunakan persentase untuk ukuran kolom, tetapi kita juga dapat menggunakan satuan `fr`.

Satuan `fr` adalah satuan pecahan (*fractional unit*) yang mewakili sebagian (fraksi) ruang yang tersedia untuk `grid container`.

Berikut adalah tampilan kodenya ketika diubah (*refactored*) untuk menggunakan satuan `fr`, bukan persentase.

```html
<link rel="stylesheet" href="styles.css" />
<div class="grid-container">
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
  <div class="col"></div>
</div>
```

```css
html,
body {
  width: 90%;
  height: 50%;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 15px;
  background-color: darkgray;
  height: 100%;
}

.col {
  background-color: darkslateblue;
}
```

Setiap kolom akan mengambil satu bagian (*fraction*) dari ruang yang tersedia. Karena terdapat empat kolom, setiap kolom akan mendapatkan porsi ruang yang sama rata di dalam `grid container`.

Saat Anda mulai membangun tata letak `grid`, Anda akan menyadari bahwa Anda lebih sering ingin menggunakan satuan `fr` karena satuan ini menyediakan cara yang fleksibel dan proporsional untuk mendistribusikan ruang, memungkinkan Anda membuat tata letak responsif yang beradaptasi dengan berbagai ukuran layar tanpa perlu menyesuaikan nilai piksel secara manual.

## Pertanyaan (Questions)

Apa tujuan dari `property` `grid-template-columns` dalam sebuah `CSS grid container`?

- [ ] Menentukan warna untuk kolom.
- [x] Mengatur ukuran untuk kolom.
- [ ] Mengatur celah (*gap*) di antara kolom.
- [ ] Menentukan jumlah baris dalam `grid`.

Bagaimana perbedaan antara satuan `fr` di `CSS Grid` dibandingkan dengan penggunaan persentase?

- [ ] Satuan `fr` menyebabkan luapan (*overflow*) pada `container`, sedangkan persentase tidak.
- [x] Satuan `fr` mengalokasikan ruang berdasarkan ruang yang tersedia di dalam `container`, sedangkan persentase mengambil persentase dari ruang yang tersedia.
- [ ] Satuan `fr` digunakan untuk membuat tata letak yang fleksibel sedangkan persentase tidak.
- [ ] Tidak ada perbedaan antara satuan `fr` dan persentase.

Apa yang terjadi jika Anda menggunakan `grid-template-columns: 1fr 1fr 1fr 1fr;` dalam tata letak `CSS Grid`?

- [ ] `Container` akan memiliki empat kolom, masing-masing mengambil 10% dari lebar `container`.
- [ ] Kolom-kolom akan bertumpuk secara vertikal.
- [ ] Kolom-kolom akan berjarak merata, tetapi ukurannya tetap (*fixed*).
- [x] Kolom-kolom akan mengambil pecahan yang sama dari ruang yang tersedia, dengan ukuran yang menyesuaikan secara otomatis saat ukuran `container` berubah.

---

[⬅️ Sebelumnya](1-what-is-css-grid.md) | [Selanjutnya ➡️](3-how-can-you-create-gaps-between-tracks-in-a-grid.md)
