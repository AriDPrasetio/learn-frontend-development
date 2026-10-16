# Apa Itu Shallow Copy dari sebuah Array, dan Apa Saja Cara untuk Membuat Salinan Ini?

*Shallow copy* dari sebuah `array` adalah `array` baru yang memiliki item-item yang sama dengan yang asli. Jika `array` hanya berisi nilai primitif seperti `number` atau `string`, `array` baru tersebut sepenuhnya terpisah. Tetapi jika `array` berisi `array` lain di dalamnya, baik yang asli maupun salinannya memiliki referensi ke `array` bagian dalam yang sama. Ini berarti bahwa jika kamu mengubah sesuatu di dalam `array` bagian dalam yang dibagikan, kamu akan melihat perubahan itu di kedua `array`.

*Shallow copy* berguna ketika kamu perlu memodifikasi struktur tingkat atas, seperti menambah, menghapus, atau mengurutkan ulang elemen, tanpa memodifikasi `array` asli atau `array` bagian dalam.

Ada beberapa method untuk membuat *shallow copy* dari `array`, dan kita akan menjelajahi beberapa yang paling umum: `concat()`, `slice()`, dan `spread operator`.

Mari kita mulai dengan method `concat()`. Method ini membuat `array` baru dengan menggabungkan dua atau lebih `array`. Ketika digunakan dengan satu `array`, method ini secara efektif membuat *shallow copy*. Berikut contohnya:

```js
const originalArray = [1, 2, 3];
const copyArray = [].concat(originalArray);

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
```

Dalam contoh ini, kita menggunakan method `concat()` untuk menggabungkan `array` kosong ke `originalArray`. Ini akan membuat `array` baru yang merupakan *shallow copy* dari `originalArray`.

`copyArray` berisi elemen-elemen yang sama dengan `originalArray`, tetapi merupakan objek `array` yang berbeda, itulah mengapa pemeriksaan kesetaraan ketat (`===`) mengembalikan `false`.

Method lain untuk membuat *shallow copy* adalah method `slice()`. Ketika dipanggil tanpa argumen, `slice()` mengembalikan *shallow copy* dari seluruh `array`. Berikut cara kerjanya:

```js
const originalArray = [1, 2, 3];
const copyArray = originalArray.slice();

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
```

Dalam kasus ini, `originalArray.slice()` membuat `array` baru yang merupakan *shallow copy* dari `originalArray`. Sekali lagi, `copyArray` berisi elemen-elemen yang sama tetapi merupakan objek `array` yang berbeda.

`Spread operator` (`...`), yang diperkenalkan di ES6, menyediakan cara ringkas lainnya untuk membuat *shallow copy* dari `array`. Berikut contohnya:

```js
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

console.log(copyArray); // [1, 2, 3]
console.log(copyArray === originalArray); // false
```

`Spread operator` (`...`) menyebarkan elemen-elemen `originalArray` ke dalam `array` baru, secara efektif membuat *shallow copy*. Penting untuk dicatat bahwa semua method ini membuat objek `array` baru, yang berarti kamu bisa memodifikasi salinan tanpa mempengaruhi `array` asli. Contohnya:

```js
const originalArray = [1, 2, 3];
const copyArray = [...originalArray];

copyArray.push(4);
console.log(originalArray); // [1, 2, 3]
console.log(copyArray);     // [1, 2, 3, 4]
```

Dalam contoh ini, menambahkan elemen ke `copyArray` tidak mempengaruhi `originalArray`.

Singkatnya, *shallow copy* dari `array` dapat dengan mudah dibuat menggunakan method seperti `concat()`, `slice()`, atau `spread operator`. Method-method ini berguna untuk membuat `array` baru yang dapat dimanipulasi secara independen dari `array` asli.

## Pertanyaan

Apa yang akan menjadi output dari kode berikut?

```js
const arr1 = [1, 2, 3];
const arr2 = arr1.slice();
arr2.push(4);
console.log(arr1, arr2);
```

- [ ] `[1, 2, 3] [1, 2, 3, 4]`
- [ ] `[1, 2, 3, 4] [1, 2, 3, 4]`
- [ ] `[1, 2, 3] [1, 2, 3]`
- [ ] Ini akan melempar sebuah error.

Apa yang akan menjadi output dari kode berikut?

```js
const fruits = ["apple", "banana", "orange"];
const fruitsCopy = [...fruits];
console.log(fruitsCopy.length);
```

- [ ] `0`
- [ ] `2`
- [ ] `3`
- [ ] `undefined`

Apa yang akan menjadi output dari kode berikut?

```js
const arr1 = [1, 2, 3];
const arr2 = [].concat(arr1);
console.log(arr1 === arr2);
```

- [ ] `true`
- [ ] `false`
- [ ] `undefined`
- [ ] Ini akan melempar sebuah error.

---
[⬅️ Sebelumnya](3-how-can-you-check-if-an-array-contains-a-certain-value.md) | [Selanjutnya ➡️](5-review-working-with-common-array-methods.md)
