# Bagaimana Cara Mengetahui Length dari Sebuah Array, dan Bagaimana Cara Membuat Empty Array dengan Fixed Length?

Pada pelajaran sebelumnya, Anda pertama kali diperkenalkan pada `property` `length`, yang mengembalikan jumlah elemen dalam sebuah `array`. Berikut adalah pengingat singkat tentang cara kerjanya:

```javascript
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits.length); // 3
```

Memungkinkan untuk memiliki `array` dengan slot kosong (*empty slots*). Slot kosong didefinisikan sebagai slot yang tidak berisi apa pun di dalamnya. Hal ini berbeda dengan sebuah `array` dengan nilai `undefined`. Jenis `array` seperti ini dikenal sebagai `sparse array`. Berikut adalah contohnya:

```javascript
const sparseArray = [1, , , 4];
console.log(sparseArray.length); // 4
```

Dalam kasus ini, meskipun kita hanya memiliki dua elemen yang terdefinisi, yaitu `1` dan `4`, panjangnya adalah `4` karena indeks tertinggi (`3`) ditambah `1` menghasilkan `length` sebesar `4`.

Sekarang mari kita bahas cara membuat sebuah `empty array` dengan panjang tetap (*fixed length*). Ada beberapa cara untuk melakukan ini dalam `JavaScript`, tetapi salah satu `method` yang umum adalah menggunakan `constructor` `Array()` dengan sebuah `argument` numerik. `Constructor` `Array()` dapat digunakan dengan kata kunci `new` untuk membuat sebuah `array` baru. Berikut contohnya:

```javascript
const emptyArray = new Array(5);
console.log(emptyArray.length); // 5
console.log(emptyArray); // [ , , , , ]
```

Dalam contoh ini, kita membuat sebuah `array` baru menggunakan `new Array(5)`. Ini membuat sebuah `sparse array` dengan panjang `5` di mana semua slotnya kosong.

Cara lain untuk membuat sebuah `empty array` dengan panjang tetap adalah menggunakan `method` `Array.from()` dengan `argument` `length`. Berbeda dengan `new Array(n)`, `method` ini membuat sebuah `array` dengan panjang yang ditentukan di mana semua elemennya benar-benar ada dan memiliki nilai `undefined`:

```javascript
const fixedLengthArray = Array.from({ length: 5 });
console.log(fixedLengthArray.length); // 5
console.log(fixedLengthArray); // [undefined, undefined, undefined, undefined, undefined]
```

Jika Anda ingin membuat sebuah `array` dengan panjang tertentu dan mengisinya dengan nilai *default*, Anda dapat menggunakan `method` `Array.fill()`:

```javascript
const filledArray = new Array(3).fill(0);
console.log(filledArray); // [0, 0, 0]
```

Ini membuat sebuah `array` dengan panjang tiga dan mengisi semua elemennya dengan nilai `0`. Catatan: saat mengisi dengan `object`, semua slot akan mereferensikan `object` yang sama; jika Anda memerlukan salinan yang independen, gunakan fungsi *callback* atau `Array.from()`.

Memahami cara mendapatkan panjang sebuah `array` dan membuat `array` dengan panjang tetap sangat penting untuk banyak tugas pemrograman, terutama ketika Anda perlu menginisialisasi `array` untuk algoritma atau struktur data tertentu.

## Pertanyaan (Questions)

### Pertanyaan 1

Apakah output dari `code` berikut?

```javascript
let arr = [1, 2, 3, , 5];
console.log(arr.length);
```

- [ ] `4`
- [x] `5`
- [ ] `3`
- [ ] Ini akan menyebabkan *error*.

### Pertanyaan 2

Manakah dari berikut ini yang merupakan cara untuk membuat sebuah `sparse array`?

- [x] `new Array(5)`
- [ ] `Array.from({ length: 5 })`
- [ ] `new Array(5).fill(undefined)`
- [ ] `[1, 2, 3, 4, 5]`

### Pertanyaan 3

Apakah output dari `code` berikut?

```javascript
let arr = new Array(3).fill(1);
console.log(arr);
```

- [x] `[1, 1, 1]`
- [ ] `[3]`
- [ ] `[undefined, undefined, undefined]`
- [ ] `[<3 empty items>]`

---
[⬅️ Sebelumnya](1-what-are-some-common-practices-for-naming-variables-and-functions.md) | [Selanjutnya ➡️](../3-working-with-code-quality-and-execution-concepts/1-what-are-linters-and-formatters-and-how-can-they-help-you-with-code-consistency.md)
