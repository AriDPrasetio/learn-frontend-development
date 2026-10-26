# Apa Itu arguments Object?

Seperti yang Anda ingat dari pelajaran dan latihan sebelumnya, Anda dapat membuat `function` dengan sejumlah `parameter` dan memanggil `function` tersebut dengan `argument`.

Berikut adalah pengingatnya:

```javascript
// Definisi function
function getSum(num1, num2) {
  return num1 + num2;
}

// Pemanggilan function
getSum(3, 4); // 7
```

Namun bagaimana jika Anda memiliki sebuah `function` yang dipanggil dengan lebih banyak `argument` daripada yang didefinisikan untuk diterimanya?

```javascript
// Definisi function
function getSum(num1, num2) {
  return num1 + num2;
}

// Pemanggilan function dengan argument ekstra
console.log(getSum(3, 4, 5)); // 7
```

`JavaScript` tidak akan menghasilkan *error* dalam kasus ini. Sebaliknya, ia akan mengabaikan `argument` tambahan tersebut dan hanya menambahkan angka `3` dan `4` bersama-sama. `Function` yang menerima jumlah `argument` variabel dikenal sebagai *variadic functions*.

Jika Anda bekerja dengan *variadic functions*, maka Anda dapat memanfaatkan `object` `arguments`. `Object` mirip-array (*array-like object*) ini berisi nilai-nilai dari `argument` yang diteruskan ke dalam `function`.

Berikut adalah contohnya:

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

logArgs("example"); // "example"
```

Karena `object` `arguments` bersifat mirip-array (*array-like*), Anda dapat mengakses sebuah `argument` pada indeks tertentu seperti ini:

```javascript
function getArg() {
  return arguments[1];
}

console.log(getArg(2, 4, 6)); // 4
```

Anda juga dapat menggunakan `property` `length` seperti ini untuk mendapatkan jumlah `argument` yang diteruskan saat `function` dipanggil:

```javascript
function getArgs() {
  return arguments.length;
}

console.log(getArgs("Example")); // 1
console.log(getArgs("Another", "Example")); // 2
```

Meskipun `object` `arguments` tampak bertindak seperti `array` sesungguhnya, ia tidak memiliki `method` bawaan `Array` seperti `includes` atau `push`. Untuk mendapatkan akses ke `method-method` tersebut, Anda perlu terlebih dahulu mengonversi `object` `arguments` menjadi sebuah `array` yang sesungguhnya menggunakan `slice`, `Array.from()`, atau operator *spread*:

```javascript
function hasCat() {
  return [...arguments].includes("cat");
}

console.log(hasCat("dog", "chicken", "cat")); // true
console.log(hasCat("dog", "chicken", "horse")); // false
```

Meskipun Anda dapat bekerja dengan `object` `arguments` untuk *variadic functions*, aplikasi `JavaScript` modern biasanya akan menggunakan sintaksis `rest parameter`. Anda akan mempelajari lebih lanjut mengenai hal itu pada pelajaran berikutnya.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa itu *variadic function*?

- [ ] `Function` yang menerima dua `argument`.
- [x] `Function` yang menerima jumlah `argument` yang variabel (berubah-ubah).
- [ ] `Function` yang menerima satu `argument` tunggal.
- [ ] `Function` yang menerima lebih dari tiga `argument`.

### Pertanyaan 2

Apakah `object` `arguments` itu?

- [ ] Sebuah *dictionary* khusus yang berisi nilai dari `argument` yang diteruskan ke dalam sebuah `function`.
- [x] Sebuah `object` mirip-array (*array-like object*) yang berisi nilai-nilai dari `argument` yang diteruskan ke dalam sebuah `function`.
- [ ] Sebuah `variable` yang hanya berisi `argument` pertama yang diteruskan ke dalam sebuah `function`.
- [ ] Sebuah `array` sejati yang secara otomatis diperbarui ketika `parameter` `function` ditetapkan ulang.

### Pertanyaan 3

Mengapa Anda tidak dapat menggunakan `method` bawaan `Array` seperti `includes` atau `push` pada `object` `arguments`?

- [ ] `Object` `arguments` selalu kosong kecuali diinisialisasi secara eksplisit.
- [ ] `JavaScript` secara otomatis memblokir pemanggilan `method` pada `object` `arguments` karena alasan performa.
- [ ] `Method` `includes` atau `push` tidak dapat diandalkan saat bekerja pada `object` `arguments` sehingga `method-method` tersebut harus dihindari.
- [x] `Object` `arguments` bukan merupakan `array` yang sebenarnya sehingga ia tidak memiliki `method` bawaan tersebut.

---
[⬅️ Sebelumnya](../5-understanding-modules-imports-and-exports/1-what-is-a-module-in-javascript-and-how-can-you-import-and-export-modules-in-your-program.md) | [Selanjutnya ➡️](2-what-are-rest-parameters-and-how-do-they-differ-from-the-arguments-object.md)
