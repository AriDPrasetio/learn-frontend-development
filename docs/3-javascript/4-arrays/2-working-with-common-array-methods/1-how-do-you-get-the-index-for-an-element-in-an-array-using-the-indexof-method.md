# Bagaimana Cara Mendapatkan Indeks untuk Sebuah Elemen dalam Array Menggunakan Method indexOf?

Dalam JavaScript, method `indexOf()` berguna untuk menemukan indeks pertama dari elemen tertentu di dalam sebuah `array`. Jika elemen tersebut tidak dapat ditemukan, maka method ini akan mengembalikan `-1`. Berikut adalah sintaks dasarnya:

```js
array.indexOf(element, fromIndex)
```

`element` merepresentasikan nilai yang ingin kamu cari di dalam `array`, dan parameter `fromIndex` adalah posisi dari mana pencarian harus dimulai. Parameter `fromIndex` bersifat opsional. Jika `fromIndex` tidak disediakan, pencarian dimulai dari awal `array`. Mari kita lihat sebuah contoh:

```js
let fruits = ["apple", "banana", "orange", "banana"];
let index = fruits.indexOf("banana");
console.log(index); // 1
```

Dalam contoh ini, kita memiliki sebuah `array` `fruits` yang berisi berbagai nama buah. Kita menggunakan method `indexOf()` untuk menemukan indeks dari `string` `banana` di dalam `array` `fruits`. Karena `banana` berada di indeks 1, method ini mengembalikan `1`, yang disimpan dalam `variable` `index` dan di-log ke konsol.

Jika elemen yang kamu cari tidak ditemukan dalam `array`, `indexOf()` mengembalikan `-1`. Contohnya:

```js
let fruits = ["apple", "banana", "orange"];
let index = fruits.indexOf("grape");
console.log(index); // -1
```

Di sini, kita mencari `string` `grape` dalam `array` `fruits` menggunakan `indexOf()`. Karena `grape` tidak ada dalam `array`, method ini mengembalikan `-1`, yang disimpan dalam `variable` `index` dan di-log ke konsol.

Jika kamu ingin mulai mencari item setelah nomor indeks tertentu, maka kamu bisa memberikan argumen kedua seperti dalam contoh ini:

```js
let colors = ["red", "green", "blue", "yellow", "green"];
let index = colors.indexOf("green", 3);
console.log(index); // 4
```

Dalam contoh ini, pencarian tidak dimulai dari awal `array`, melainkan dimulai dari nomor indeks 3 yaitu `yellow` dan mendapatkan output `4`.

## Pertanyaan

Apa yang akan menjadi output dari kode berikut?

```js
let numbers = [10, 20, 30, 20, 40];
let index = numbers.indexOf(20);
console.log(index);
```

- [ ] `0`
- [ ] `1`
- [ ] `2`
- [ ] `3`

Apa yang akan menjadi output dari kode berikut?

```js
let fruits = ["apple", "banana", "orange", "grape"];
let index = fruits.indexOf("kiwi");
console.log(index);
```

- [ ] `0`
- [ ] `-1`
- [ ] `undefined`
- [ ] Sebuah error akan terjadi.

Apa yang akan menjadi output dari kode berikut?

```js
let colors = ["red", "green", "blue", "yellow", "green"];
let index = colors.indexOf("green", 2);
console.log(index);
```

- [ ] `1`
- [ ] `2`
- [ ] `4`
- [ ] `-1`

---
[⬅️ Sebelumnya](../1-working-with-arrays/7-review-working-with-arrays.md) | [Selanjutnya ➡️](2-how-do-you-add-remove-elements-from-the-middle-of-an-array.md)
