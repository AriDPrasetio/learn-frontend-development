# Apa Itu Hoisting?

`Hoisting` adalah perilaku dalam `JavaScript` yang sering kali membingungkan bagi pemula, namun memahaminya dapat membantu Anda menghindari *bug* yang tidak terduga dalam `code` Anda. Secara sederhana, `hoisting` adalah perilaku bawaan `JavaScript` yang memindahkan deklarasi ke bagian atas dari `scope`-nya masing-masing selama fase kompilasi (*compilation phase*) sebelum `code` dieksekusi.

Untuk memahami `hoisting`, penting untuk mengetahui bahwa `JavaScript` berjalan dalam dua fase: fase kompilasi (*compilation phase*) dan fase eksekusi (*execution phase*). Selama fase kompilasi, *engine* `JavaScript` memeriksa `code` Anda dan menyiapkan ruang memori untuk `variable` dan `function`. Di sinilah `hoisting` berperan.

Mari kita mulai dengan `hoisting` pada `variable`. Ketika Anda mendeklarasikan sebuah `variable` menggunakan kata kunci `var`, `JavaScript` mengangkat (*hoists*) deklarasi tersebut ke bagian atas dari `scope`-nya. Namun, sangat penting untuk dicatat bahwa hanya deklarasinya yang diangkat, bukan inisialisasinya. Ini berarti Anda dapat menggunakan sebuah `variable` di dalam `code` Anda sebelum Anda mendeklarasikannya, tetapi nilainya akan berupa `undefined` sampai Anda benar-benar menetapkan nilai kepadanya:

```javascript
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

Dalam `code` ini, meskipun kita menggunakan `x` sebelum mendeklarasikannya, kita tidak mendapatkan *error*, melainkan mendapatkan nilai `undefined`. Hal ini terjadi karena `JavaScript` mengangkat deklarasi `var x` ke bagian atas `scope`-nya tetapi tidak dengan inisialisasi `x = 5`. Seolah-olah `code` tersebut ditulis ulang seperti ini:

```javascript
var x;
console.log(x); // undefined
x = 5;
console.log(x); // 5
```

`Hoisting` pada `function` bekerja sedikit berbeda. Ketika Anda mendeklarasikan sebuah `function` menggunakan sintaksis deklarasi fungsi (`function declaration`), baik nama fungsi maupun badan fungsi (*function body*) sama-sama diangkat ke atas. Ini berarti Anda dapat memanggil sebuah `function` sebelum Anda mendeklarasikannya di dalam `code` Anda. Berikut adalah contoh dari `function hoisting`:

```javascript
sayHello(); // "Hello, World!"

function sayHello(){
  console.log("Hello, World!");
}
```

Dalam kasus ini, kita dapat memanggil `sayHello()` sebelum deklarasinya karena seluruh fungsi diangkat ke bagian atas `scope`-nya.

Penting untuk dicatat bahwa `hoisting` bekerja secara berbeda dengan deklarasi `let` dan `const` yang diperkenalkan pada ES6:

```javascript
console.log(y); // Throws a ReferenceError
let y = 10;
```

Deklarasi-deklarasi ini tetap diangkat (*hoisted*), tetapi mereka tidak diinisialisasi dan Anda tidak dapat mengaksesnya sebelum deklarasi yang sebenarnya di dalam `code` Anda. Perilaku ini sering disebut sebagai *temporal dead zone* (TDZ).

Memahami `hoisting` dapat membantu Anda menulis `code` yang lebih bersih dan lebih dapat diprediksi. Namun, terlalu bergantung pada `hoisting` dapat membuat `code` Anda lebih sulit dibaca dan dipelihara. Sebagai praktik terbaik, disarankan untuk selalu mendeklarasikan `variable` Anda di bagian atas `scope`-nya dan mendeklarasikan `function` Anda sebelum Anda menggunakannya terlepas dari adanya `hoisting`. Hal ini membuat perilaku `code` Anda lebih eksplisit dan lebih mudah dipahami oleh orang lain termasuk diri Anda di masa mendatang.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa yang terjadi ketika sebuah `variable` yang dideklarasikan dengan `var` mengalami `hoisting`?

- [ ] Baik deklarasi maupun inisialisasinya dipindahkan ke bagian paling atas.
- [x] Hanya deklarasinya yang dipindahkan ke bagian paling atas.
- [ ] `Variable` tidak mengalami `hoisting` sama sekali.
- [ ] `Variable` dihapus dari `code`.

### Pertanyaan 2

Bagaimana `function hoisting` berbeda dari `variable hoisting`?

- [ ] `Function` tidak mengalami `hoisting`.
- [ ] Hanya nama `function` yang diangkat ke atas.
- [x] Baik nama `function` maupun badan fungsinya (*function body*) diangkat ke atas.
- [ ] `Function hoisting` hanya bekerja dengan `arrow function`.

### Pertanyaan 3

Apakah hasil dari mencoba mengakses sebuah `variable` yang dideklarasikan dengan `let` sebelum deklarasinya di dalam `code`?

- [ ] Mengembalikan nilai `undefined`.
- [x] Menyebabkan `ReferenceError` (*throws a ReferenceError*).
- [ ] Mengembalikan nilai `null`.
- [ ] Bekerja tanpa masalah apa pun.

---
[⬅️ Sebelumnya](1-what-is-the-var-keyword-and-why-is-it-no-longer-suggested-to-use-it.md) | [Selanjutnya ➡️](../5-understanding-modules-imports-and-exports/1-what-is-a-module-in-javascript-and-how-can-you-import-and-export-modules-in-your-program.md)
