# Bagaimana Cara Mengulang Daftar Track dalam Tata Letak Grid?

Pada pelajaran sebelumnya, kita telah bekerja dengan `property` `grid-template-columns` dan mengatur `value`-nya ke beberapa satuan pecahan (*fractional units*).

```html
<link rel="stylesheet" href="styles.css">
<div class="grid-container">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 10px;
}

.box {
  width: 100px;
  height: 100px;
  background-color: darkblue;
}
```

Meskipun kode berikut sepenuhnya valid, ada cara yang lebih mudah untuk mengulang sebagian atau seluruh daftar `track` Anda.

`Function` `repeat()` digunakan untuk mengulang sebagian atau seluruh `track` untuk kolom atau baris. `Function` ini menerima jumlah pengulangan (*repeat count*) dan `track` yang ingin Anda ulang.

Berikut adalah versi revisi dari contoh sebelumnya yang menggunakan `function` `repeat()`:

```html
<link rel="stylesheet" href="styles.css">
<div class="grid-container">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
}

.box {
  width: 100px;
  height: 100px;
  background-color: darkblue;
}
```

Tidak akan ada perubahan pada tampilan gaya (*styles*) di peramban (*browser*), tetapi ini adalah cara yang lebih ringkas untuk menuliskan `value` yang berulang untuk kolom.

`Function` `repeat()` akan menerima pola valid apa pun yang dapat Anda gunakan untuk baris atau kolom.

Berikut adalah contoh penggunaan `function` `repeat()` untuk mengatur kolom pertama dan ketiga menjadi 20 piksel, serta kolom kedua dan keempat menjadi satu satuan fraksional (`1fr`).

```html
<link rel="stylesheet" href="styles.css">
<div class="grid-container">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 20px 1fr);
  column-gap: 10px;
}

.grid-container div {
  height: 100px;
  background-color: darkblue;
}
```

Terkadang, Anda mungkin memilih untuk menulis setiap nilai secara individual alih-alih menggunakan `function` `repeat()`. Namun ada saat-saat di mana `function` ini sangat berguna, terutama ketika Anda ingin mengulang pola tertentu untuk daftar `track`.

## Pertanyaan (Questions)

Manakah dari berikut ini yang merupakan sintaks yang benar untuk mengulang daftar `track`?

- [ ]
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(1fr times 4);
  column-gap: 10px;
}
```
- [x]
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
}
```
- [ ]
```css
.grid-container {
  display: grid;
  grid-template-columns: multiply(4, 1fr);
  column-gap: 10px;
}
```
- [ ]
```css
.grid-container {
  display: grid;
  grid-template-columns: repeatSections(4, 1fr);
  column-gap: 10px;
}
```

Apa manfaat utama dari penggunaan `function` `repeat()` pada `property` `grid-template-columns`?

- [x] Memungkinkan pengulangan definisi kolom secara lebih ringkas dan mengurangi redundansi.
- [ ] Membuat kode berjalan lebih cepat.
- [ ] Menghasilkan kode yang bebas kesalahan.
- [ ] Membuat halaman web lebih responsif.

Apa hasil dari pengaturan `grid-template-columns` ke `repeat(2, 20px 1fr);`?

- [ ] Membuat empat kolom yang semuanya diatur selebar `1fr`.
- [ ] Membuat dua kolom di mana masing-masing diatur selebar `20px`.
- [x] Membuat empat kolom di mana kolom pertama dan ketiga selebar `20px`, dan kolom kedua dan keempat selebar `1fr`.
- [ ] Membuat tiga kolom di mana kolom pertama dan kedua selebar `20px`, dan kolom ketiga selebar `fr`.

---

[⬅️ Sebelumnya](3-how-can-you-create-gaps-between-tracks-in-a-grid.md) | [Selanjutnya ➡️](5-what-is-the-difference-between-an-implicit-and-explicit-grid.md)
