# Bagaimana Cara Menambah dan Menghapus Elemen dari Tengah sebuah Array?

Method `splice()` dalam JavaScript adalah cara yang ampuh untuk memodifikasi `array`. Method ini memungkinkan kamu untuk menambah atau menghapus elemen dari posisi mana pun dalam sebuah `array`, termasuk bagian tengah. Nilai kembalian dari method `splice()` akan berupa sebuah `array` dari item-item yang dihapus dari `array`. Jika tidak ada yang dihapus, maka sebuah `array` kosong akan dikembalikan.

Penting untuk dicatat bahwa method ini akan memutasi `array` asli, memodifikasinya secara langsung di tempat alih-alih membuat `array` baru. Ini adalah sesuatu yang perlu diperhatikan saat bekerja dengan `splice()`. Berikut adalah sintaks dasarnya:

```js
array.splice(startIndex, itemsToRemove, item1, item2)
```

`startIndex` menentukan indeks di mana mulai memodifikasi `array`, sementara `itemsToRemove` adalah parameter opsional yang menunjukkan berapa banyak elemen yang akan dihapus. Jika `itemsToRemove` dihilangkan, `splice()` akan menghapus semua elemen dari `startIndex` hingga akhir `array`. Parameter-parameter berikutnya (`item1`, `item2`, dan seterusnya) adalah elemen-elemen yang akan ditambahkan ke `array`, dimulai dari indeks awal.

## Menghapus Elemen

Mari kita mulai dengan contoh menghapus elemen dari tengah sebuah `array`:

```js
let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let removed = fruits.splice(2, 2);

console.log(fruits);  // ["apple", "banana", "kiwi"]
console.log(removed); // ["orange", "mango"]
```

Dalam contoh ini, `splice(2, 2)` dimulai dari indeks 2 dan menghapus 2 elemen. `Array` yang telah dimodifikasi sekarang hanya akan terdiri dari `apple`, `banana`, dan `kiwi`.

## Menambahkan Elemen

Sekarang, mari kita lihat cara menambahkan elemen ke tengah sebuah `array`:

```js
let colors = ["red", "green", "blue"];
colors.splice(1, 0, "yellow", "purple");

console.log(colors); // ["red", "yellow", "purple", "green", "blue"]
```

Di sini, `splice(1, 0, "yellow", "purple")` dimulai dari indeks 1, menghapus 0 elemen, dan menyisipkan `yellow` dan `purple`. Parameter kedua (`0`) berarti tidak ada elemen yang dihapus sebelum penyisipan.

## Penyisipan dan Penghapusan Array

Kamu juga bisa menggunakan `splice()` untuk menghapus dan menambahkan elemen secara bersamaan:

```js
let numbers = [1, 2, 3, 4, 5];
numbers.splice(1, 2, 6, 7, 8);

console.log(numbers); // [1, 6, 7, 8, 4, 5]
```

Dalam kasus ini, `splice(1, 2, 6, 7, 8)` dimulai dari indeks 1, menghapus 2 elemen (`2` dan `3`), dan menyisipkan `6`, `7`, dan `8`.

## Menghindari Mutasi dengan Salinan

Jika kamu perlu menjaga `array` asli tetap tidak berubah, kamu harus membuat salinan sebelum menggunakan `splice()`:

```js
let original = [1, 2, 3, 4, 5];
let copy = [...original];
copy.splice(2, 1, 6);

console.log(original); // [1, 2, 3, 4, 5]
console.log(copy);     // [1, 2, 6, 4, 5]
```

Dalam contoh ini, untuk membuat salinan dari `array` asli tanpa memodifikasinya, kita menggunakan `spread operator` (`...`). `Spread operator` akan membuat *shallow copy* dari elemen-elemen `array` asli ke dalam `array` baru. Kamu akan mempelajari lebih lanjut tentang ini di pelajaran mendatang.

Ketika kita menggunakan `copy.splice(2, 1, 6)`, method ini memodifikasi `array` `copy` dengan menghapus elemen di indeks 2 (yaitu `3`) dan menyisipkan elemen baru `6` di posisi tersebut.

## Menghapus Elemen yang Diketahui

Salah satu kasus penggunaan umum untuk `splice()` adalah menghapus satu elemen dari `array` ketika kamu mengetahui indeksnya:

```js
let fruits = ["apple", "banana", "orange", "mango"];
let indexToRemove = fruits.indexOf("orange");
if (indexToRemove !== -1) {
    fruits.splice(indexToRemove, 1);
}

console.log(fruits); // ["apple", "banana", "mango"]
```

Dalam contoh ini, pertama-tama kita menggunakan method `indexOf()` untuk menemukan indeks elemen `orange` dalam `array` `fruits`. Method `indexOf()` mengembalikan indeks dari kemunculan pertama elemen yang diberikan atau `-1` jika elemen tidak ditemukan dalam `array`.

Kita kemudian membandingkan `indexToRemove` dengan `-1` untuk memastikan bahwa elemen tersebut ada dalam `array` sebelum mencoba menghapusnya. Jika `indexToRemove` tidak sama dengan `-1` (artinya elemen ditemukan), kita menggunakan `splice()` untuk menghapus satu elemen mulai dari posisi `indexToRemove`.

## Mengosongkan sebuah Array

Kamu juga bisa menggunakan `splice()` untuk mengosongkan sebuah `array` dengan menghapus semua elemen:

```js
let array = [1, 2, 3, 4, 5];
array.splice(0);

console.log(array); // []
```

## Pertimbangan Performa

Meskipun `splice()` sangat ampuh, perlu dicatat bahwa untuk `array` yang sangat besar, method ini bisa kurang efisien dibandingkan method lain, terutama saat memodifikasi bagian awal `array`. Ini karena `splice()` mungkin perlu menggeser semua elemen berikutnya. Dalam kasus seperti itu, jika kamu hanya menambah atau menghapus elemen di akhir `array`, method seperti `push()`, `pop()`, `unshift()`, dan `shift()` mungkin lebih tepat.

Kesimpulannya, method `splice()` adalah cara yang serbaguna untuk memodifikasi `array` dalam JavaScript. Method ini memungkinkan kontrol yang presisi atas penambahan dan penghapusan elemen dari posisi mana pun dalam sebuah `array`. Memahami cara menggunakan `splice()` secara efektif dapat sangat meningkatkan kemampuanmu untuk memanipulasi `array` dalam kode JavaScript-mu.

## Pertanyaan

Apa yang akan menjadi output dari kode berikut?

```js
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 6, 7);
console.log(arr);
```

- [ ] `[1, 2, 6, 7, 3, 4, 5]`
- [ ] `[1, 2, 3, 4, 5, 6, 7]`
- [ ] `[1, 2, 3, 6, 7, 4, 5]`
- [ ] `[1, 2, 6, 7, 4, 5]`

Manakah dari pemanggilan `splice()` berikut yang akan menghapus angka `3` dari `array`?

```js
let arr = [1, 2, 3, 4, 5];
```

- [ ] `arr.splice(3, 1)`
- [ ] `arr.splice(3, 0)`
- [ ] `arr.splice(2, 1)`
- [ ] `arr.splice(arr.length - 2, 1)`

Apa yang dikembalikan oleh method `splice()`?

- [ ] `Array` yang telah dimodifikasi.
- [ ] Jumlah elemen yang dihapus.
- [ ] Sebuah `array` yang berisi elemen-elemen yang dihapus.
- [ ] `undefined`

---
[⬅️ Sebelumnya](1-how-do-you-get-the-index-for-an-element-in-an-array-using-the-indexof-method.md) | [Selanjutnya ➡️](3-how-can-you-check-if-an-array-contains-a-certain-value.md)
