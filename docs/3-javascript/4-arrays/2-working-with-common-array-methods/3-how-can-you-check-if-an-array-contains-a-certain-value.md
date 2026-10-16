# Bagaimana Cara Memeriksa Apakah sebuah Array Mengandung Nilai Tertentu?

Dalam JavaScript, method `includes()` adalah cara yang sederhana dan efisien untuk memeriksa apakah sebuah `array` mengandung nilai tertentu. Method ini mengembalikan nilai `boolean`: `true` jika `array` mengandung elemen yang ditentukan, dan `false` jika sebaliknya.

Method `includes()` sangat berguna ketika kamu perlu dengan cepat memverifikasi keberadaan sebuah elemen dalam `array` tanpa perlu mengetahui posisi persisnya. Mari kita mulai dengan contoh cara menggunakan method `includes()`:

```js
let fruits = ["apple", "banana", "orange", "mango"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false
```

Dalam contoh ini, kita memiliki sebuah `array` buah-buahan. Kita menggunakan method `includes()` untuk memeriksa apakah `banana` ada dalam `array`. Method ini mengembalikan `true` karena `banana` memang ada. Kita kemudian memeriksa `grape`, yang mengembalikan `false` karena tidak ada dalam `array`.

Method `includes()` bersifat *case-sensitive* (peka terhadap huruf besar/kecil) saat berurusan dengan `string`. Ini berarti `Banana` dengan huruf B kapital dan `banana` dengan semua huruf kecil dianggap sebagai nilai yang berbeda. Berikut contoh yang mengilustrasikan hal ini:

```js
let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("Banana")); // false
```

Dalam kasus ini, `banana` (semua huruf kecil) ditemukan dalam `array`, tetapi `Banana` (dengan huruf pertama dikapitalisasi) tidak, sehingga pemanggilan `includes()` kedua mengembalikan `false`.

Method `includes()` juga dapat menerima parameter kedua opsional yang menentukan posisi dalam `array` untuk memulai pencarian. Ini berguna jika kamu ingin memeriksa keberadaan elemen di bagian tertentu dari `array`. Berikut cara menggunakan fitur ini:

```js
let numbers = [10, 20, 30, 40, 50, 30, 60];
console.log(numbers.includes(30, 3)); // true
console.log(numbers.includes(30, 4)); // true
```

Untuk `console.log` pertama, kita mencari angka `30` dimulai dari indeks 3. Dalam kasus ini, ada angka `30` yang muncul setelah indeks 3, sehingga method `includes()` mengembalikan `true`.

Hal yang sama berlaku untuk `console.log` kedua. Kita mencari angka `30` dimulai dari indeks 4. Karena angka `30` memang muncul setelah indeks tersebut, maka method ini akan mengembalikan `true`.

Perlu dicatat bahwa `includes()` menggunakan perbandingan kesetaraan ketat (`===`), yang berarti method ini dapat membedakan antara tipe yang berbeda. Contohnya:

```js
let mixedArray = [1, "2", 3, "4", 5];
console.log(mixedArray.includes(2));   // false
console.log(mixedArray.includes("2")); // true
```

Dalam kasus ini, `number` `2` dan `string` `"2"` dianggap sebagai tipe data yang berbeda. Jadi, `console.log` pertama akan mengembalikan `false`, sementara `console.log` kedua akan mengembalikan `true`.

Method `includes()` adalah alat yang ampuh untuk memeriksa keberadaan elemen dalam `array`. Method ini sederhana digunakan, efisien, dan dapat menghindarkan kamu dari menulis loop atau kondisi yang lebih kompleks untuk mencari melalui `array`. Baik kamu bekerja dengan `string`, `number`, atau tipe data campuran, `includes()` menyediakan cara yang mudah untuk memverifikasi apakah sebuah nilai ada dalam `array`-mu.

## Pertanyaan

Apa yang akan menjadi output dari kode berikut?

```js
let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3, 3));
```

- [ ] `true`
- [ ] `false`
- [ ] `undefined`
- [ ] Ini akan melempar sebuah error.

Apa yang akan menjadi output dari kode berikut?

```js
let arr = ["a", "b", "c", "d", "e"];
console.log(arr.includes("C"));
```

- [ ] `true`
- [ ] `false`
- [ ] `undefined`
- [ ] Ini akan melempar sebuah error.

Apa yang akan menjadi output dari kode berikut?

```js
let arr = [1, "2", 3, "4", 5];
console.log(arr.includes("3"));
```

- [ ] `true`
- [ ] `false`
- [ ] `undefined`
- [ ] Ini akan melempar sebuah error.

---
[⬅️ Sebelumnya](2-how-do-you-add-remove-elements-from-the-middle-of-an-array.md) | [Selanjutnya ➡️](4-what-is-a-shallow-copy-of-an-array-and-what-are-some-ways-to-create-these-copies.md)
