# Bagaimana Cara Membuat Celah Antar Track dalam Grid?

Pada pelajaran sebelumnya, kita telah membahas sedikit tentang cara membuat ruang di antara `grid item`. Namun dalam pelajaran ini, kita akan mendalami lebih detail tentang cara menggunakan `property` `row-gap`, `column-gap`, dan `gap` dalam tata letak `grid`.

Namun pertama-tama kita perlu mengulas kembali apa itu `track` dalam `CSS Grid`. Sebuah `track` adalah ruang di antara dua garis kisi (*grid lines*) yang bertetangga. Garis-garis ini dibuat secara otomatis saat Anda menggunakan `CSS Grid`. Dalam konteks ini, `track` umumnya mengacu pada baris (*rows*) dan kolom (*columns*) yang membentuk tata letak `grid`.

Untuk membuat celah (*gap*) di antara kolom-kolom dalam `CSS Grid`, Anda dapat menggunakan `property` `column-gap`. `Value` yang dapat diterima untuk `property` ini meliputi piksel, satuan `em`, persentase, atau kata kunci `normal`.

Jika Anda menggunakan `value` `normal` untuk `property` `column-gap`, hasilnya adalah `0` untuk tata letak `grid`.

Berikut adalah contoh *markup* untuk tata letak `grid` empat kolom:

```html
<div class="grid-container">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

Untuk `CSS`-nya, kita mengatur `display` ke `grid` dan `property` `column-gap` ke 10 piksel:

```html
<link rel="stylesheet" href="styles.css">
<div class="grid-container">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

```css
.grid-container {
  display: grid;
  height: 100px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
}

.grid-container div {
  background-color: darkblue;
}
```

Jika kita ingin mengubah contoh tersebut menjadi dua baris kotak biru dan membuat lebih banyak ruang di antara baris-baris tersebut, kita dapat menggunakan `property` `row-gap` :

```html
<link rel="stylesheet" href="styles.css">
<div class="grid-container">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 30px;
}

.grid-container div {
  height: 100px;
  background-color: darkblue;
}
```

Dalam contoh yang direvisi ini, kita mengatur `property` `row-gap` ke 30 piksel dan mengubah `grid-template-columns` untuk hanya menggunakan dua satuan `1fr`, bukan empat, guna membuat dua baris kotak.

Sama seperti `property` `column-gap`, `value` yang dapat diterima untuk `property` `row-gap` dapat mencakup persentase, `em`, dan piksel.

Jika Anda ingin menggunakan bentuk ringkas (*shorthand*) untuk membuat celah di antara baris dan kolom, Anda dapat menggunakan `property` `gap`. Berikut adalah sintaks dasarnya:

```css
gap: row-value optional-column-value;
```

Jika Anda menentukan satu `value` untuk `property` `gap`, `value` tersebut akan diterapkan pada baris dan kolom sekaligus. Jika Anda menentukan dua `value`, `value` pertama akan diterapkan pada baris dan `value` kedua akan diterapkan pada kolom:

```html
<link rel="stylesheet" href="styles.css">
<div class="grid-container">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px 10px;
}

.grid-container div {
  height: 100px;
  background-color: darkblue;
}
```

`Value` yang dapat diterima untuk `shorthand` `property` `gap` mencakup persentase, piksel, `em`, dan bahkan nilai `calc()`. Namun Anda tidak dapat menggunakan satuan `fr` di sini.

`Property` `row-gap`, `column-gap`, dan `gap` menyediakan cara yang fleksibel untuk mengontrol jarak antar `item` dalam tata letak `CSS Grid`. Dengan menggunakan `property-property` ini, Anda dapat dengan mudah membuat kisi (*grid*) yang menarik secara visual dengan celah yang konsisten dan dapat disesuaikan di antara baris dan kolom.

## Pertanyaan (Questions)

Apa tujuan dari `property` `column-gap` dalam tata letak `CSS Grid`?

- [x] Mengatur ruang di antara kolom-kolom `grid`.
- [ ] Menentukan ukuran dari `grid item`.
- [ ] Menentukan jumlah kolom di dalam `grid`.
- [ ] Mengatur ruang di antara baris-baris `grid`.

Apa yang terjadi jika Anda menggunakan `value` `normal` untuk `property` `column-gap` pada tata letak `grid`?

- [ ] Celah (`gap`) di antara kolom diatur ke 10.
- [ ] Celah (`gap`) di antara kolom diatur ke -1.
- [ ] Celah (`gap`) di antara kolom diatur ke 14.
- [x] Celah (`gap`) di antara kolom diatur ke 0.

Manakah dari berikut ini yang merupakan `property` yang tepat digunakan sebagai *shorthand* untuk membuat celah di antara baris dan kolom?

- [ ] `Property` `gapsAndSpaces`
- [ ] `Property` `space`
- [ ] `Property` `rowGapColumnGap`
- [x] `Property` `gap`

---

[⬅️ Sebelumnya](2-how-can-you-create-flexible-grids-with-the-fr-unit.md) | [Selanjutnya ➡️](4-how-can-you-repeat-track-listings-in-a-grid-layout.md)
