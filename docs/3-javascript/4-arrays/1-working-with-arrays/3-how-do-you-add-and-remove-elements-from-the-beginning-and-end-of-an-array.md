# Bagaimana Anda Menambah dan Menghapus `Element` dari Awal dan Akhir dari Sebuah `Array`?

`Array` dalam JavaScript adalah dinamis, yang berarti Anda dapat dengan mudah menambah atau menghapus `element` dari mereka. Terdapat empat `method` utama untuk menambah dan menghapus `element` dari awal dan akhir dari sebuah `array`: `push()`, `pop()`, `shift()`, dan `unshift()`. Mari kita eksplorasi masing-masing `method` ini secara detail.

`Method` `push()` digunakan untuk menambahkan satu atau lebih `element` ke akhir dari sebuah `array`. `Return value` untuk `method` `push()` adalah panjang `array` yang baru. Berikut adalah sebuah contoh menambahkan sebuah buah baru ke `array` `fruits` yang sudah ada:

```javascript
const fruits = ["apple", "banana"];
const newLength = fruits.push("orange");
console.log(newLength); // 3
console.log(fruits); // ["apple", "banana", "orange"]
```

Dalam contoh ini, kita mulai dengan sebuah `array` bernama `fruits` yang berisi dua `element`. Kita kemudian menggunakan `method` `push()` untuk menambahkan `string` `orange` ke akhir dari `array` tersebut.

Anda mungkin memperhatikan bahwa kita menggunakan `const` ketika mendeklarasikan `array` `fruits`. Namun mengapa dimungkinkan untuk menambahkan lebih banyak `element` ke `array` `fruits` ini ketika `fruits` adalah sebuah `constant`? Ini dimungkinkan karena mendeklarasikan sebuah `array` dengan `keyword` `const` menciptakan sebuah referensi ke `array` tersebut. Sementara `array` itu sendiri `mutable` dan dapat dimodifikasi, Anda tidak dapat `reassign` sebuah nilai baru ke `constant` `fruits`, seperti ini:

```javascript
const fruits = ["apple", "banana"];
fruits = ["This", "will", "not", "work"];
console.log(fruits); // Uncaught TypeError: Assignment to constant variable. 
```

`Method` berikutnya yang akan kita lihat adalah `method` `pop()`. `Method` `pop()` menghapus `element` terakhir dari sebuah `array` dan mengembalikan `element` tersebut. Ia juga memodifikasi `array` aslinya. Begini cara ia bekerja:

```javascript
let fruits = ["apple", "banana", "orange"];
let lastFruit = fruits.pop();
console.log(fruits); // ["apple", "banana"]
console.log(lastFruit); // "orange"
```

Dalam contoh ini, kita mulai dengan sebuah `array` dari tiga buah. `Method` `pop()` menghapus `element` terakhir (`orange`) dari `array` dan mengembalikannya. `Array` `fruits` asli dimodifikasi dan hanya berisi dua `element`.

`Method` `unshift()` menambahkan satu atau lebih `element` ke awal dari sebuah `array` dan mengembalikan panjang barunya. Ia bekerja secara mirip dengan `push()`, namun memodifikasi awal dari `array` alih-alih di akhir. Berikut adalah sebuah contoh:

```javascript
let numbers = [2, 3];
let newLength = numbers.unshift(1);
console.log(numbers); // [1, 2, 3]
console.log(newLength); // 3
```

Dalam contoh ini, kita menggunakan `unshift()` untuk menambahkan angka `1` ke awal dari `array` `numbers`. `Method` tersebut mengembalikan panjang `array` yang baru, yaitu `3`.

Terakhir, `method` `shift()` menghapus `element` pertama dari sebuah `array` dan mengembalikan `element` tersebut. Ia mirip dengan `pop()`, namun ia bekerja pada awal `array` alih-alih di akhir. Begini cara ia bekerja:

```javascript
let colors = ["red", "green", "blue"];
let firstColor = colors.shift();
console.log(colors); // ["green", "blue"]
console.log(firstColor); // "red"
```

Dalam contoh ini, kita mulai dengan sebuah `array` dari tiga warna. `Method` `shift()` menghapus `element` pertama (`red`) dari `array` tersebut dan mengembalikannya. `Array` `colors` asli dimodifikasi untuk memuat hanya dua `element`.

Perhatikan bahwa sementara `push()` dan `unshift()` dapat menambahkan beberapa `element` sekaligus, `pop()` dan `shift()` hanya menghapus satu `element` pada satu waktu.

## Pertanyaan (Questions)

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let arr = [1, 2, 3];
arr.push(4);
arr.unshift(0);
console.log(arr);
```

- `[1, 2, 3, 4, 0]`
- `[0, 1, 2, 3, 4]`
- `[0, 4, 1, 2, 3]`
- `[4, 0, 1, 2, 3]`

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let arr = ["a", "b", "c", "d"];
let first = arr.shift();
let last = arr.pop();
console.log(first, last, arr);
```

- `"a" "d" ["b", "c"]`
- `"d" "a" ["b", "c"]`
- `"a" "b" ["c", "d"]`
- `"b" "c" ["a", "d"]`

Apa yang akan menjadi hasil dari kode berikut?

```javascript
let arr = ["a", "b", "c"];
arr.unshift("x", "y");
arr.pop();
console.log(arr);
```

- `["x", "y", "a", "b"]`
- `["x", "y", "a", "b", "c"]`
- `["a", "b", "x", "y"]`
- `["y", "x", "a", "b"]`

---
[⬅️ Sebelumnya](2-how-do-you-access-and-update-elements-in-an-array.md) | [Selanjutnya ➡️](4-what-is-the-difference-between-one-dimensional-and-two-dimensional-arrays.md)

