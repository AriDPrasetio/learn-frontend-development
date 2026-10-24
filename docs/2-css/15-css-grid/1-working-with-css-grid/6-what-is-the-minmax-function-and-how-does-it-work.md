# Apa Itu Function minmax() dan Bagaimana Cara Kerjanya?

`Function` `minmax()` mendefinisikan rentang ukuran untuk sebuah `track` `grid`, menentukan seberapa banyak ruang yang dapat ditempati oleh sebuah baris atau kolom.

Ingatlah bahwa Anda dapat mengatur ukuran `track` dengan satuan seperti `px` (piksel), `rem`, atau bahkan `em`, serta dengan satuan pecahan (`fr`).

`Function` `minmax()` melangkah lebih jauh dengan memungkinkan Anda menetapkan ukuran minimum dan ukuran maksimum untuk `track` `grid`.

Berikut adalah sintaks dari `function` `minmax()`:

```css
minmax(min, max)
```

`min` adalah ukuran minimum dari `track` `grid`, yang dapat diatur menggunakan piksel, persentase, atau `auto`. Dan `max` adalah ukuran maksimum dari `track` `grid` yang dapat Anda atur dengan satuan yang sama.

Kedua `value` tersebut bekerja bersama dengan cara ini:

- `Value` `min` memastikan bahwa `track` `grid` tidak akan pernah menyusut di bawah ukuran yang telah ditentukan.
- `Value` `max` membatasi seberapa besar `track` `grid` dapat berkembang.

Ukuran `track` `grid` menyesuaikan secara dinamis di antara `value` `min` dan `max` berdasarkan konten dan ukuran `container`.

Mari kita lihat contoh praktisnya:

```html
<link rel="stylesheet" href="styles.css">
<div class="grid-container">
  <div>
    <h2>Item 1</h2>
  </div>
  <div>
    <h2>Item 2</h2>
  </div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: minmax(150px, 300px) 1fr;
  gap: 20px;
}

.grid-container > div {
  background: crimson;
  padding: 20px;
  text-align: center;
}
```

Apa yang terjadi di sini?

Kolom pertama, `minmax(150px, 300px)`, akan selalu berukuran setidaknya `150px` dan paling banyak `300px`, tergantung pada ruang yang tersedia.

Di sisi lain, kolom kedua, `1fr`, akan mengambil sisa ruang yang tersedia di dalam `grid container` karena tidak ada kolom tambahan lain yang berbagi ruang tersebut.

Keunggulan dari `function` `minmax()` dibandingkan ukuran tetap (*fixed sizes*) dan bahkan satuan `fr` adalah bahwa `minmax()` lebih fleksibel, menjadikannya ideal untuk adaptabilitas dan daya tanggap (*responsiveness*).

## Pertanyaan (Questions)

`Function` mana yang dapat Anda gunakan untuk mendefinisikan rentang ukuran sebuah `track` `grid`?

- [ ] `clamp()`
- [x] `minmax()`
- [ ] `max-width()`
- [ ] `calc()`

Manakah dari berikut ini yang paling baik menggambarkan bagaimana perilaku ukuran `track` `grid` saat menggunakan `function` `minmax()`?

- [ ] Ukuran `track` `grid` tetap (*fixed*) di antara nilai minimum dan maksimum.
- [x] Ukuran `track` `grid` menyesuaikan secara dinamis di antara nilai minimum dan maksimum berdasarkan konten dan ukuran `container`.
- [ ] Ukuran `track` `grid` akan selalu diatur ke nilai maksimum, terlepas dari kontennya.
- [ ] Ukuran `track` `grid` hanya merespons konten, bukan ukuran `container`.

Apa yang dikontrol oleh nilai `min` dan `max` pada `function` `minmax()`?

- [ ] Nilai `min` memungkinkan penyusutan, dan nilai `max` menetapkan ukuran tetap.
- [x] Nilai `min` memastikan `track` `grid` tidak akan menyusut di bawah ukuran yang ditentukan, dan nilai `max` membatasi seberapa besar ukurannya dapat berkembang.
- [ ] Nilai `min` membatasi pertumbuhan, dan nilai `max` menentukan ukuran terkecil.
- [ ] Kedua nilai menetapkan ukuran tetap (*fixed*) untuk `track` `grid`.

---

[⬅️ Sebelumnya](5-what-is-the-difference-between-an-implicit-and-explicit-grid.md) | [Selanjutnya ➡️](7-how-do-the-grid-column-and-grid-row-properties-work.md)
