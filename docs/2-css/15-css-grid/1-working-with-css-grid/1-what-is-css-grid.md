# Apa Itu CSS Grid, dan Apa Bedanya dengan Flexbox?

`CSS Grid` adalah sistem tata letak (*layout system*) canggih yang memungkinkan pengembang web membuat tata letak halaman web yang kompleks dan responsif dengan mudah.

Bayangkan Anda sedang menata furnitur di sebuah ruangan – `CSS Grid` seperti memiliki kisi (*grid*) tak kasat mata di lantai Anda yang membantu memosisikan segala sesuatunya secara tepat di tempat yang Anda inginkan.

Saat kita membangun situs web, kita sering kali perlu menyusun berbagai `element` yang berbeda pada halaman.

Sebelum `CSS Grid`, hal ini terkadang sulit, terutama untuk tata letak yang kompleks. `CSS Grid` menyederhanakan proses ini dengan membagi halaman web Anda menjadi baris (*rows*) dan kolom (*columns*), menciptakan struktur seperti kisi (*grid*).

Mari bayangkan Anda sedang bekerja dengan sebuah `container` `div` yang memiliki beberapa `item` yang disarangkan (*nested*) di dalamnya seperti ini:

```html
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
</div>
```

Jika Anda ingin menata gaya (*style*) `element-element` tersebut dalam format `grid`, Anda dapat mengatur `display` menjadi `grid` dan menerapkan kolom seperti ini:

```html
<link rel="stylesheet" href="styles.css">
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
</div>
```

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}

.item {
  background-color: lightgray;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
}
```

Dalam kode ini, kita memberi tahu peramban (*browser*) untuk membuat sebuah `grid` dengan tiga kolom yang lebarnya sama, itulah arti dari `1fr 1fr 1fr`, dan kita menambahkan celah (*gap*) sebesar 20 piksel di antara setiap `grid item`.

Sekarang, Anda mungkin bertanya-tanya: "Bagaimana dengan `Flexbox`? Bukankah itu juga digunakan untuk tata letak?"

Anda benar! `Flexbox` adalah model tata letak `CSS` lainnya, dan model tersebut juga sangat berguna. Namun ada beberapa perbedaan utama.

`Flexbox` bersifat satu dimensi, sedangkan `Grid` bersifat dua dimensi. Ini berarti `Flexbox` bekerja sangat baik untuk menata berbagai hal dalam satu baris atau kolom tunggal, sedangkan `Grid` sangat unggul dalam membuat tata letak dengan baris dan kolom sekaligus.

`Flexbox` mengutamakan konten (*content-first*), yang berarti ia menyesuaikan tata letak berdasarkan kontennya. Di sisi lain, `Grid` mengutamakan tata letak (*layout-first*), yang memungkinkan Anda membuat tata letak terlebih dahulu lalu menempatkan `item` ke dalamnya. `Grid` memberi Anda kontrol penempatan yang lebih presisi. Anda dapat memberi tahu sebuah `item` secara tepat baris dan kolom mana yang harus ditempati.

Berikut adalah contoh `Flexbox` sebagai perbandingan:

```html
<link rel="stylesheet" href="styles.css">
<div class="container">
  <div class="item">Item 1</div>
  <div class="item">Item 2</div>
  <div class="item">Item 3</div>
  <div class="item">Item 4</div>
  <div class="item">Item 5</div>
  <div class="item">Item 6</div>
</div>
```

```css
.container {
  display: flex;
  justify-content: space-between;
}
```

Kode ini membuat sebuah `flex container` di mana `item-item` diberi jarak secara merata di sepanjang sumbu utama (`main axis`).

Baik `Grid` maupun `Flexbox` memiliki kelebihannya masing-masing, dan sering kali, tata letak terbaik menggunakan kombinasi keduanya. Anda dapat menggunakan `Grid` untuk keseluruhan tata letak halaman, lalu menggunakan `Flexbox` untuk meratakan `item` di dalam setiap area `grid`.

Singkatnya, `CSS Grid` adalah alat canggih yang memungkinkan tata letak dua dimensi yang presisi. Meskipun pada awalnya mungkin tampak rumit, dengan latihan, `CSS Grid` akan menjadi alat yang sangat berharga untuk membuat tata letak web yang responsif dan kompleks.

## Pertanyaan (Questions)

Apa perbedaan utama antara `CSS Grid` dan `Flexbox`?

- [ ] `Grid` lebih baru daripada `Flexbox`.
- [x] `Grid` bersifat dua dimensi, sedangkan `Flexbox` bersifat satu dimensi.
- [ ] `Grid` hanya bekerja dengan kolom, `Flexbox` hanya dengan baris.
- [ ] `Grid` hanya untuk tata letak desktop, `Flexbox` untuk seluler (*mobile*).

Dalam contoh `CSS Grid` yang diberikan, apa arti dari `1fr 1fr 1fr` pada `property` `grid-template-columns`?

- [ ] Membuat 3 kolom, masing-masing selebar 1 piksel.
- [x] Membuat 3 kolom, masing-masing mengambil sepertiga dari ruang yang tersedia.
- [ ] Membuat 1 kolom yang lebarnya 3 kali lipat dari kolom lainnya.
- [ ] Membuat satu kolom tunggal yang dibagi menjadi 3 bagian yang sama.

Pernyataan mana tentang `CSS Grid` yang benar?

- [ ] `CSS Grid` hanya dapat digunakan untuk tata letak desktop.
- [ ] `CSS Grid` memerlukan `JavaScript` agar dapat berfungsi dengan baik.
- [x] `CSS Grid` memungkinkan penempatan `item` yang presisi pada baris dan kolom.
- [ ] `CSS Grid` secara otomatis menyesuaikan tata letak berdasarkan ukuran konten.

---

⬅️ Sebelumnya | [Selanjutnya ➡️](2-how-can-you-create-flexible-grids-with-the-fr-unit.md)
