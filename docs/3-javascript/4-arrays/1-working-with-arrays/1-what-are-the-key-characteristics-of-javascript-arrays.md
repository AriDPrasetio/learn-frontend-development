# Apa Karakteristik Utama dari `Array` JavaScript?

Sebuah `array` dalam JavaScript adalah sebuah koleksi nilai-nilai yang terurut, masing-masing diidentifikasi dengan `index` numerik. Nilai-nilai dalam sebuah `array` JavaScript dapat berupa `data type` yang berbeda-beda, termasuk `numbers`, `strings`, `booleans`, `objects`, dan bahkan `arrays` lainnya.

Untuk membuat sebuah `array` dalam JavaScript, Anda dapat menggunakan tanda kurung siku, `[]`, dan memisahkan nilai-nilainya dengan koma. Berikut adalah sebuah contoh:

```javascript
let fruits = ["apple", "banana", "orange"];
```

Dalam contoh ini, kita mendeklarasikan sebuah `variable` `fruits` dan menugasinya dengan sebuah `array` yang berisi tiga nilai `string`: `apple`, `banana`, dan `orange`.

Salah satu karakteristik utama dari `array` adalah bahwa mereka `zero-indexed`, artinya `element` pertama dalam sebuah `array` memiliki sebuah `index` `0`, `element` kedua memiliki sebuah `index` `1`, dan seterusnya. Anda dapat mengakses `element` individual dalam sebuah `array` menggunakan `index` mereka. Sebagai contoh:

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "orange"
```

Dalam contoh ini, kita menggunakan `index` `0` untuk mengakses `element` pertama (`apple`) dan `index` `2` untuk mengakses `element` ketiga (`orange`).

`Array` dalam JavaScript memiliki sebuah `property` `length` khusus yang mengembalikan jumlah `element` dalam `array` tersebut. Anda dapat mengakses `property` ini menggunakan `property` `length`. Sebagai contoh:

```javascript
let fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // 3
```

Karakteristik utama lainnya dari `array` dalam JavaScript adalah bahwa mereka dinamis, artinya ukuran mereka dapat berubah setelah mereka dibuat. Anda dapat menambahkan atau menghapus `element` dari sebuah `array` menggunakan berbagai `array method`, seperti `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, dan lebih banyak lagi. `Method` ini akan diajarkan pada pelajaran-pelajaran mendatang.

`Array` JavaScript itu serbaguna dan berguna ketika berhadapan dengan penyimpanan data di dalam program Anda. Sepanjang modul ini, Anda akan melihat secara langsung bagaimana bekerja dengan `array` akan membantu Anda secara efisien mengelola dan memanipulasi koleksi data.

## Pertanyaan (Questions)

Yang manakah dari berikut ini yang TIDAK benar tentang `array` JavaScript?

- Mereka `zero-indexed`.
- Mereka adalah sebuah koleksi nilai-nilai yang tidak terurut.
- Mereka dapat berisi `array` lain sebagai sebuah nilai.
- Mereka dinamis, dan ukuran mereka dapat berubah setelah mereka dibuat.

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[2]);
```

- `2`
- `3`
- `4`
- `5`

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let colors = ["red", "green", "blue"];
console.log(colors.length);
```

- `2`
- `3`
- `4`
- `undefined`

---
⬅️ Sebelumnya | [Selanjutnya ➡️](2-how-do-you-access-and-update-elements-in-an-array.md)

