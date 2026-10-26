# Apa Itu Rest Parameter dan Bagaimana Perbedaannya dengan arguments Object?

Pada pelajaran sebelumnya, Anda telah mempelajari cara bekerja dengan `object` `arguments`, yang merupakan sebuah `object` mirip-array (*array-like object*) yang berisi nilai-nilai dari `argument` yang diteruskan ke dalam `function`:

```javascript
function logArgs() {
  for (const arg of arguments) {
    console.log(arg);
  }
}

logArgs(1, 2, 3);
// Hasil:
// 1
// 2
// 3
```

Meskipun ini adalah cara yang valid untuk mengakses dan bekerja dengan serangkaian `argument` variabel dari sebuah `function`, aplikasi `JavaScript` modern akan menggunakan sintaksis `rest parameter` sebagai gantinya.

Berikut adalah contoh yang diperbarui menggunakan sintaksis `rest parameter` alih-alih `object` `arguments`:

```javascript
function logArgs(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}

logArgs(1, 2, 3);
// Hasil:
// 1
// 2
// 3
```

Contoh yang diperbarui ini tidak lagi mereferensikan `object` `arguments` secara langsung. Sebaliknya, `parameter` terakhir pada definisi `function` memiliki tiga titik (`...`) di depannya. Hal ini menyebabkan `rest parameter` ini ditempatkan di dalam sebuah `instance` `Array`. Anda dapat memberi nama `rest parameter` ini dengan nama apa pun yang Anda sukai. Pastikan saja ia menjadi `parameter` terakhir dalam definisi `function` seperti ini:

```javascript
function exampleFunction(a, b, ...restOfArgs) {
  // code di sini
}

function anotherFunction(x, y, ...theArgs) {
  // code di sini
}
```

Terdapat beberapa batasan saat berurusan dengan sintaksis `rest parameter`. Salah satu batasannya adalah definisi `function` hanya boleh memiliki satu `rest parameter`. Jadi contoh berikut dianggap tidak valid:

```javascript
// Tidak akan berfungsi
function badFunction(...args, ...moreArgs) {
  // code di sini
}
```

Batasan berikutnya adalah tanda koma di akhir (*trailing commas*) tidak diperbolehkan setelah `rest parameter`: `function exampleFunction(a, b, ...restOfArgs, )`.

Batasan lainnya adalah `rest parameter` tidak boleh memiliki nilai *default*. Jika tidak, `SyntaxError` akan dimunculkan:

```javascript
function badFunction(...args = [1,2]){
  // code di sini
}
```

Lantas, apa saja perbedaan antara `object` `arguments` dan `rest parameter`?

Salah satu perbedaan utamanya adalah bahwa `object` `arguments` bukanlah sebuah `array` yang sesungguhnya sehingga ia tidak mendukung `method` seperti `includes`, `pop`, dan `push`. Namun, `rest parameter` adalah sebuah `instance` `Array`. Sehingga Anda dapat menggunakan `method` bawaan `array` yang valid tanpa perlu mengonversinya menjadi sebuah `array` nyata terlebih dahulu:

```javascript
function hasCat(...args) {
  return args.includes("cat");
}

console.log(hasCat("dog", "chicken", "cat")); // true
console.log(hasCat("dog", "chicken", "horse")); // false
```

## Pertanyaan (Questions)

### Pertanyaan 1

Manakah dari berikut ini yang merupakan cara yang benar untuk menggunakan sintaksis `rest parameter` dalam definisi sebuah `function`?

- [ ] ```javascript
function logArgs([args]) {
  for (const arg of args) {
    console.log(arg);
  }
}
```
- [ ] ```javascript
function logArgs(>>>args) {
  for (const arg of args) {
    console.log(arg);
  }
}
```
- [x] ```javascript
function logArgs(...args) {
  for (const arg of args) {
    console.log(arg);
  }
}
```
- [ ] ```javascript
function logArgs(<<<args) {
  for (const arg of args) {
    console.log(arg);
  }
}
```

### Pertanyaan 2

Manakah dari berikut ini yang merupakan batasan saat menangani sintaksis `rest parameter`?

- [x] Anda hanya dapat memiliki satu `rest parameter` per definisi `function`.
- [ ] Anda harus menempatkan `rest parameter` di awal daftar `parameter` `function`.
- [ ] Anda harus memiliki dua `rest parameter` per definisi `function`.
- [ ] Anda hanya dapat menggunakan `rest parameter` dalam `arrow function`.

### Pertanyaan 3

Apa perbedaan utama antara `object` `arguments` dan `rest parameter`?

- [ ] Anda hanya dapat menggunakan `method` bawaan `array` seperti `push` dan `pop` pada `rest parameter` sementara `object` `arguments` menerima semua `method` bawaan `array`.
- [ ] Anda tidak dapat menggunakan `method` bawaan `array` seperti `push` dan `pop` pada `rest parameter`, tetapi `method-method` tersebut dapat digunakan pada `object` `arguments`.
- [ ] `Object` `arguments` adalah sebuah `instance` `Array` sedangkan `rest parameter` bersifat mirip-array (*array-like*).
- [x] `Rest parameter` adalah sebuah `instance` `Array` sedangkan `object` `arguments` bersifat mirip-array (*array-like*).

---
[⬅️ Sebelumnya](1-what-is-the-arguments-object.md) | [Selanjutnya ➡️](../7-review-javascript-fundamentals/1-review-javascript-fundamentals.md)
