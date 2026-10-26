# Bagaimana Cara Kerja Method every() dan some()?

Saat Anda bekerja dengan `array` di `JavaScript`, sering kali Anda ingin memeriksa apakah semua elemen di dalam sebuah `array` memenuhi kondisi tertentu, atau apakah setidaknya ada satu elemen yang memenuhi suatu kondisi.

Di sinilah `method` `every()` dan `some()` sangat berguna. `Method-method` ini adalah alat yang ampuh yang dapat menyederhanakan `code` Anda dan membuatnya lebih mudah dibaca.

Mari kita mulai dengan `method` `every()`. `Method` ini menguji apakah semua elemen di dalam sebuah `array` lolos dari pengujian yang diterapkan oleh fungsi yang disediakan. Secara lebih sederhana, fungsi ini memeriksa apakah setiap item tunggal di dalam `array` Anda memenuhi kondisi yang Anda tentukan.

`Method` `every()` mengembalikan `true` jika fungsi yang disediakan mengembalikan `true` untuk semua elemen di dalam `array`. Jika ada satu elemen saja yang gagal dalam pengujian, `method` ini akan segera mengembalikan `false` dan berhenti memeriksa elemen-elemen yang tersisa.

Berikut adalah contoh untuk mengilustrasikan cara kerja `every()`:

```javascript
const numbers = [2, 4, 6, 8, 10];
const hasAllEvenNumbers = numbers.every((num) => num % 2 === 0);

console.log(hasAllEvenNumbers); // true
```

Dalam contoh ini, kita memeriksa apakah semua angka di dalam `array` adalah bilangan genap. Fungsi yang kita berikan ke `every()` memeriksa apakah setiap angka habis dibagi `2` tanpa sisa. Karena semua angka di dalam `array` kita memang genap, `hasAllEvenNumbers` akan bernilai `true`.

Sekarang, mari kita lihat `method` `some()`.

Sementara `every()` memeriksa apakah semua elemen lolos pengujian, `some()` memeriksa apakah setidaknya ada satu elemen yang lolos pengujian. `Method` `some()` mengembalikan `true` segera setelah ia menemukan sebuah elemen yang lolos pengujian. Jika tidak ada elemen yang lolos pengujian, ia mengembalikan `false`.

Berikut adalah contoh bagaimana `some()` bekerja:

```javascript
const numbers = [1, 3, 5, 7, 8, 9];
const hasSomeEvenNumbers = numbers.some((num) => num % 2 === 0);

console.log(hasSomeEvenNumbers); // true
```

Dalam contoh ini, kita memeriksa apakah ada angka di dalam `array` yang bernilai genap. Fungsi yang kita berikan ke `some()` sama seperti sebelumnya. Meskipun sebagian besar angka di dalam `array` kita ganjil, `hasSomeEvenNumbers` akan bernilai `true` karena ada setidaknya satu angka genap (`8`) di dalam `array`.

Baik `every()` maupun `some()` sangat berguna ketika Anda perlu memvalidasi data atau memeriksa kondisi tertentu di dalam `array` Anda. Keduanya sering kali dapat menggantikan `loop` dan pernyataan bersyarat yang lebih bertele-tele (*verbose*), menjadikan `code` Anda lebih bersih dan lebih ekspresif.

Penting untuk dicatat bahwa kedua `method` ini berhenti mengeksekusi segera setelah mereka dapat menentukan hasilnya (*short-circuiting*). Untuk `every()`, ini berarti ia berhenti segera setelah menemukan hasil `false`. Untuk `some()`, ia berhenti segera setelah menemukan hasil `true`. Hal ini sangat bermanfaat untuk performa, terutama saat menangani `array` berukuran besar.

## Pertanyaan (Questions)

### Pertanyaan 1

Apakah yang dikembalikan oleh `method` `every` jika semua elemen di dalam `array` memenuhi kondisi yang diberikan?

- [ ] `false`
- [x] `true`
- [ ] `undefined`
- [ ] Tergantung pada kondisinya.

### Pertanyaan 2

Jika Anda menggunakan `method` `some` pada sebuah `empty array` (array kosong), apakah yang akan dikembalikan?

- [ ] `true`
- [x] `false`
- [ ] `undefined`
- [ ] Akan menyebabkan *error*.

### Pertanyaan 3

`Method` manakah yang akan Anda gunakan untuk memeriksa apakah setidaknya ada satu elemen di dalam `array` yang lebih besar dari `10`?

- [ ] `every`
- [x] `some`
- [ ] `filter`
- [ ] `map`

---
[⬅️ Sebelumnya](7-how-does-the-sort-method-work.md) | [Selanjutnya ➡️](../2-review-javascript-higher-order-functions/1-review-javascript-higher-order-functions.md)
