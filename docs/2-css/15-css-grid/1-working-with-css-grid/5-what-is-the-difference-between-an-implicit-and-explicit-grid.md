# Apa Perbedaan Antara Grid Implisit dan Eksplisit?

`Implicit grid` (kisi implisit) mengacu pada baris dan kolom yang dibuat secara otomatis oleh peramban (*browser*) saat menempatkan `item` di dalam tata letak `grid` – yaitu baris dan kolom yang tidak didefinisikan secara eksplisit menggunakan `grid-template-rows` atau `grid-template-columns`.

`Property` yang mengontrol kolom dan baris yang dibuat secara implisit oleh peramban adalah `grid-auto-columns` dan `grid-auto-rows`.

`Implicit grid` juga mengacu pada baris dan kolom tambahan yang dibuat secara otomatis oleh peramban ketika Anda menempatkan sebuah `item` di luar baris dan kolom yang telah didefinisikan secara eksplisit.

Sebagai contoh, katakanlah Anda hanya mendefinisikan dua kolom eksplisit dalam tata letak `grid` dengan cara berikut:

```html
<link rel="stylesheet" href="styles.css">
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <div class="grid-item">Item 5</div>
  <div class="grid-item">Item 6</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: 100px 100px; /* Only 2 explicit columns */
}

.grid-item {
  background-color: burlywood;
  border: 1px solid orangered;
  padding: 0.5rem;
  margin: 0.5rem;
}
```

Dua `item` mengisi baris pertama dengan menggunakan dua kolom eksplisit – `Item 1` di kolom pertama dan `Item 2` di kolom kedua.

`Item-item` berikutnya memulai baris baru dengan `Item 3` masuk ke kolom pertama baris kedua dan `Item 4` di kolom kedua baris kedua, dan seterusnya.

Seperti yang telah Anda lihat, `explicit grid` (kisi eksplisit) adalah area `grid` yang sengaja Anda buat. Yaitu, baris dan kolom yang Anda definisikan secara eksplisit untuk tata letak `grid` menggunakan `property` `grid-template-rows` dan `grid-template-columns`.

Berikut adalah tabel yang merangkum perbedaan antara `implicit grid` dan `explicit grid`:

| **Fitur** | **Explicit Grid** | **Implicit Grid** |
| --- | --- | --- |
| **Kontrol ukuran** | Dapat disesuaikan sepenuhnya menggunakan `grid-template-rows` dan `grid-template-columns`. | Dikontrol oleh `grid-auto-rows` dan `grid-auto-columns`, atau *default* ke `auto`. |
| **Perilaku *Default*** | Tidak berubah kecuali didefinisikan secara eksplisit. | Secara otomatis beradaptasi dengan `item` yang ditempatkan di luar `explicit grid`. |
| **Kompleksitas** | Memerlukan lebih banyak perencanaan untuk struktur tata letak. | Lebih mudah diterapkan untuk konten yang tidak terstruktur atau variabel. |
| **Fleksibilitas** | Struktur kaku dengan baris dan kolom yang telah ditentukan. | Fleksibel dan beradaptasi dengan konten yang ditempatkan secara dinamis. |
| **Performa** | Berpotensi lebih berkinerja (*performant*) karena tata letak telah ditentukan sebelumnya. | Mungkin memerlukan komputasi peramban tambahan untuk pembuatan `implicit grid`. |
| **Kasus penggunaan** | Berguna saat struktur `grid` dapat diprediksi dan didefinisikan di awal. | Berguna untuk tata letak dinamis di mana konten tidak diketahui atau sering berubah. |

## Pertanyaan (Questions)

`Property` mana yang mengontrol kolom dan baris yang dibuat secara implisit oleh peramban (*browser*) dalam tata letak `CSS Grid`?

- [ ] `cols` dan `rows`
- [ ] `col` dan `row`
- [ ] `implicit-columns` dan `implicit-rows`
- [x] `grid-auto-columns` dan `grid-auto-rows`

`Property` mana yang digunakan untuk mendefinisikan baris dan kolom eksplisit dalam tata letak `CSS Grid`?

- [ ] `row` dan `fr`
- [ ] `grid-explicit-rows` dan `grid-explicit-columns`
- [x] `grid-template-rows` dan `grid-template-columns`
- [ ] `grid-gap` dan `grid-flow`

Manakah dari contoh kode berikut yang merupakan cara yang benar untuk mengatur dua kolom eksplisit?

- [x]
```css
.grid-container {
   display: grid;
   grid-template-columns: 100px 100px;
}
```
- [ ]
```css
.grid-container {
   display: grid;
   grid-template-columns: 100px 100px 100px 100px;
}
```
- [ ]
```css
.grid-container {
   display: grid;
   grid-template-rows: 100px 100px;
}
```
- [ ]
```css
.grid-container {
   display: grid;
   grid-column-start: 100px 100px;
}
```

---

[⬅️ Sebelumnya](4-how-can-you-repeat-track-listings-in-a-grid-layout.md) | [Selanjutnya ➡️](6-what-is-the-minmax-function-and-how-does-it-work.md)
