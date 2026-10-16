# Apa Itu `Array Destructuring`, dan Bagaimana Ia Bekerja?

`Array destructuring` adalah sebuah fitur dalam JavaScript yang memungkinkan Anda untuk mengekstrak nilai-nilai dari `array` dan menugaskannya ke `variable` dengan cara yang lebih ringkas dan dapat dibaca. Ia menyediakan sebuah `syntax` yang nyaman untuk `unpacking` `element` `array` ke dalam `variable` yang berbeda.

Teknik ini sangat berguna ketika bekerja dengan `array` dan `function` yang mengembalikan beberapa nilai. Berikut adalah sebuah contoh penggunaan `array destructuring`:

```javascript
let fruits = ["apple", "banana", "orange"];

let [first, second, third] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "orange"
```

Dalam contoh ini, kita memiliki sebuah `array` bernama `fruits` dengan tiga `element`. Menggunakan `array destructuring`, kita menugaskan `element` pertama ke `variable` `first`, `element` kedua ke `second`, dan `element` ketiga ke `third`. Ini memungkinkan kita untuk dengan mudah mengakses `element` individual dari `array` tanpa menggunakan notasi `index`.

Berikut adalah tampilannya jika Anda mengakses masing-masing `element` tersebut dengan `index` mereka alih-alih menggunakan `array destructuring`:

```javascript
const fruits = ["apple", "banana", "orange"];

const first = fruits[0];
const second = fruits[1];
const third = fruits[2];

console.log(first); // "apple"
console.log(second); // "banana"
console.log(third); // "orange"
```

`Array destructuring` juga memungkinkan Anda untuk melewati `element` yang tidak Anda minati dengan menggunakan koma. Sebagai contoh:

```javascript
let colors = ["red", "green", "blue", "yellow"];
let [firstColor, , thirdColor] = colors;

console.log(firstColor); // "red"
console.log(thirdColor); // "blue"
```

Dalam contoh ini, kita melewati `element` kedua dari `array` `colors` dengan menggunakan sebuah koma ekstra. Ini menugaskan `red` ke `firstColor` dan `blue` ke `thirdColor`, yang secara efektif mengabaikan `green`.

Fitur kuat lainnya dari `array destructuring` adalah kemampuan untuk menggunakan `default value`. Jika `array` tersebut memiliki lebih sedikit `element` daripada `variable` yang Anda coba tugaskan, Anda dapat memberikan `default value`:

```javascript
let numbers = [1, 2];
let [a, b, c = 3] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

Di sini, kita menugaskan `default value` `3` ke `c` karena `array` `numbers` tidak memiliki sebuah `element` ketiga.

Sekarang, mari kita diskusikan `rest syntax`, dilambangkan dengan tiga titik (`...`). Ia memungkinkan Anda untuk menangkap `element` yang tersisa dari sebuah `array` yang belum di-`destructure` ke dalam sebuah `array` baru. Begini cara ia bekerja:

```javascript
let fruits = ["apple", "banana", "orange", "mango", "kiwi"];
let [first, second, ...rest] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(rest);   // ["orange", "mango", "kiwi"]
```

Dalam contoh ini, `first` dan `second` menangkap dua `element` pertama dari `array` `fruits`, dan `rest` menangkap semua `element` yang tersisa sebagai sebuah `array` baru. `Rest syntax` harus menjadi `element` terakhir dalam pola `destructuring` tersebut.

`Array destructuring` adalah sebuah fitur kuat yang dapat membuat kode Anda menjadi lebih ringkas dan lebih mudah untuk dibaca. Ia terutama berguna ketika bekerja dengan `array`, dan ketika Anda perlu mengekstrak `element` spesifik dari sebuah `array`.

## Pertanyaan (Questions)

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let numbers = [1, 2, 3, 4, 5];
let [a, , b, ...rest] = numbers;
console.log(a, b, rest);
```

- `1 2 [3, 4, 5]`
- `1 3 [4, 5]`
- `1 2 [4, 5]`
- `1 3 [2, 4, 5]`

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let colors = ["red", "green", "blue"];
let [primary, secondary, tertiary, quaternary = "yellow"] = colors;
console.log(quaternary);
```

- `undefined`
- `null`
- `"yellow"`
- Ini akan melempar sebuah `error`.

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let fruits = ["apple", "banana", "orange", "grape"];
let [first, ...rest, last] = fruits;
console.log(first, rest, last);
```

- `"apple" ["banana", "orange"] "grape"`
- `"apple" ["banana", "orange", "grape"] undefined`
- Ini akan melempar sebuah `SyntaxError`.
- `"apple" [] "grape"`

---
[⬅️ Sebelumnya](4-what-is-the-difference-between-one-dimensional-and-two-dimensional-arrays.md) | [Selanjutnya ➡️](6-how-can-you-use-string-and-array-methods-to-reverse-a-string.md)

