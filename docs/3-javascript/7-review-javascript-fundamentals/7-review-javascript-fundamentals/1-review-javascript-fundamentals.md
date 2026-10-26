# Review: JavaScript Fundamentals

Dokumen review ini merangkum seluruh konsep penting, sintaksis, dan teknik fundamental yang dipelajari pada modul **Review JavaScript Fundamentals**.

---

## String Constructor dan Method `toString()` (String Constructor and `toString()` Method)

- **Definisi**: Sebuah `string object` digunakan untuk merepresentasikan urutan karakter. `String object` dibuat menggunakan `constructor function` `String`, yang membungkus nilai `primitive` ke dalam sebuah `object`.

```javascript
const greetingObject = new String("Hello, world!");

console.log(typeof greetingObject); // "object"
```

- **Method `toString()`**: `Method` ini mengonversi sebuah nilai ke representasi `string`-nya. Ini adalah sebuah `method` yang dapat Anda gunakan untuk `number`, `boolean`, `array`, dan `object`.

```javascript
const num = 10;
console.log(num.toString()); // "10"

const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
```

`Method` ini menerima sebuah `radix` opsional yang merupakan angka dari `2` hingga `36`. `Radix` ini mewakili basis bilangan, seperti basis 2 untuk biner atau basis 8 untuk oktal. Jika `radix` tidak ditentukan, secara *default* akan bernilai basis 10, yaitu desimal.

```javascript
const num = 10;
console.log(num.toString(2)); // "1010"(binary)
```

---

## Number Constructor

- **Definisi**: `Constructor` `Number` digunakan untuk membuat sebuah `number object`. `Number object` berisi beberapa `property` dan `method` yang bermanfaat seperti `isNaN` dan `method` `toFixed`. Sebagian besar waktu, Anda akan menggunakan `constructor` `Number` untuk mengonversi tipe data lain ke tipe data `number`.

```javascript
const myNum = new Number("34");
console.log(typeof myNum); // "object"

const num = Number('100');
console.log(num); // 100

console.log(typeof num); // number
```

---

## Praktik Terbaik Menamai Variable dan Function (Best Practices for Naming Variables and Functions)

- **`camelCase`**: Sesuai konvensi, pengembang `JavaScript` menggunakan format `camelCase` untuk menamai `variable` dan `function`. `camelCase` adalah format penulisan di mana kata pertama seluruhnya berhuruf kecil dan kata-kata berikutnya dimulai dengan huruf kapital. Contoh: `isLoading`.

- **Menamai `boolean`**: Untuk `variable` `boolean`, merupakan praktik umum untuk menggunakan awalan seperti `"is"`, `"has"`, atau `"can"`.

```javascript
let isLoading = true;
let hasPermission = false;
let canEdit = true;
```

- **Menamai `function`**: Untuk `function`, namanya harus menunjukkan secara jelas apa yang dilakukan oleh `function` tersebut. Untuk `function` yang mengembalikan `boolean` (sering disebut sebagai predikat atau *predicates*), Anda dapat menggunakan awalan `"is"`, `"has"`, atau `"can"` yang sama. Ketika Anda memiliki `function` yang mengambil data, umumnya dimulai dengan kata `"get"`. Ketika Anda memiliki `function` yang menetapkan nilai atau data, umumnya dimulai dengan kata `"set"`. Untuk `function` penangan event (*event handler*), Anda dapat mengawalinya dengan `"handle"` atau memberi akhiran `"Handler"`.

```javascript
function getUserData() { /* ... */ }

function isValidEmail(email) { /* ... */ }

function getProductDetails(productId) { /* ... */ }

function setUserPreferences(preferences) { /* ... */ }

function handleClick() { /* ... */ }
```

- **Menamai `variable` di dalam `loop`**: Ketika menamai `variable` iterator di dalam `loop`, umumnya digunakan huruf tunggal seperti `i`, `j`, atau `k`.

```javascript
for (let i = 0; i < array.length; i++) { /* ... */ }
```

---

## Bekerja dengan Sparse Array (Working with Sparse Arrays)

- **Definisi**: Memungkinkan untuk memiliki `array` dengan slot kosong (*empty slots*). Slot kosong didefinisikan sebagai slot yang tidak berisi nilai apa pun di dalamnya. Hal ini berbeda dengan slot `array` yang memiliki nilai `undefined`. Jenis `array` seperti ini dikenal sebagai `sparse array`.

```javascript
const sparseArray = [1, , , 4];
console.log(sparseArray.length); // 4
```

---

## Linter dan Formatter (Linters and Formatters)

- **Linter**: Sebuah `linter` adalah alat analisis kode statis (*static code analysis tool*) yang menandai kesalahan pemrograman, *bug*, kesalahan gaya penulisan (*stylistic errors*), dan konstruksi yang mencurigakan. Contoh `linter` yang umum adalah ESLint.

- **Formatter**: `Formatter` adalah alat yang secara otomatis memformat `code` Anda agar mematuhi panduan gaya (*style guide*) tertentu. Contoh `formatter` yang umum adalah Prettier.

---

## Manajemen Memori (Memory Management)

- **Definisi**: Manajemen memori (*memory management*) adalah proses mengendalikan memori, mengalokasikannya saat dibutuhkan, dan membebaskannya saat tidak lagi diperlukan. `JavaScript` menggunakan manajemen memori otomatis. Ini berarti bahwa `JavaScript` (lebih khusus lagi, *engine* `JavaScript` pada peramban web Anda) menangani alokasi dan dealokasi memori untuk Anda. Anda tidak perlu membebaskan memori secara eksplisit di dalam `code` Anda. Proses otomatis ini sering disebut sebagai "*garbage collection*".

---

## Closure (Closures)

- **Definisi**: Sebuah `closure` adalah `function` yang memiliki akses ke `variable` di dalam cakupan leksikal luarnya (*outer enclosing lexical scope*), bahkan setelah `outer function` selesai dieksekusi (*returned*).

```javascript
function outerFunction(x) {
  let y = 10;
  function innerFunction() {
    console.log(x + y);
  }
  return innerFunction;
}

let closure = outerFunction(5);
closure(); // 15
```

---

## Kata Kunci `var` dan Hoisting (`var` Keyword and Hoisting)

- **Definisi**: `var` adalah cara awal untuk mendeklarasikan `variable` sebelum tahun 2015. Namun terdapat beberapa masalah yang muncul bersama penggunaan `var` dalam hal cakupan (*scope*), deklarasi ulang, dan sebagainya. Itulah sebabnya pemrograman `JavaScript` modern menggunakan `let` dan `const` sebagai gantinya.

- **Mendeklarasikan Ulang `variable` dengan `var`**: Jika Anda mencoba mendeklarasikan ulang sebuah `variable` menggunakan `let`, Anda akan mendapatkan `SyntaxError`. Namun dengan `var`, Anda diperbolehkan untuk mendeklarasikan ulang `variable` tersebut.

```javascript
// Uncaught SyntaxError: Identifier 'num' has already been declared 
let num = 19;
let num = 18;

var myNum = 5;
var myNum = 10; // Ini diizinkan dan tidak menghasilkan error

console.log(myNum); // 10
```

- **`var` dan Cakupan (`scope`)**: `Variable` yang dideklarasikan dengan `var` di dalam sebuah blok (seperti `statement` `if` atau `loop` `for`) tetap dapat diakses di luar blok tersebut.

```javascript
if (true) {
  var num = 5;
}
console.log(num); // 5
```

- **Hoisting**: Ini adalah perilaku bawaan `JavaScript` yang memindahkan deklarasi ke bagian paling atas dari `scope`-nya masing-masing selama fase kompilasi sebelum `code` dieksekusi. Ketika Anda mendeklarasikan sebuah `variable` menggunakan kata kunci `var`, `JavaScript` mengangkat (*hoists*) deklarasi tersebut ke bagian atas `scope`-nya.

```javascript
console.log(num); // undefined
var num = 5;
console.log(num); // 5
```

Ketika Anda mendeklarasikan sebuah `function` menggunakan sintaksis deklarasi fungsi (`function declaration`), baik nama fungsi maupun badan fungsi (*function body*) sama-sama diangkat ke atas (*hoisted*). Ini berarti Anda dapat memanggil sebuah `function` sebelum Anda mendeklarasikannya di dalam `code` Anda.

```javascript
sayHello(); // "Hello, World!"

function sayHello() {
  console.log("Hello, World!");
}
```

Deklarasi `variable` yang dibuat dengan `let` atau `const` juga diangkat (*hoisted*), tetapi mereka tidak diinisialisasi, dan Anda tidak dapat mengaksesnya sebelum deklarasi yang sebenarnya di dalam `code` Anda. Perilaku ini sering disebut sebagai "*temporal dead zone*".

```javascript
console.log(num); // Throws a ReferenceError
let num = 10;
```

---

## Bekerja dengan Import, Export, dan Modul (Working with Imports, Exports and Modules)

- **Module**: Ini adalah unit `code` mandiri yang mengenkapsulasi `function`, `class`, atau `variable` yang saling terkait. Untuk membuat sebuah `module`, Anda menulis `code` `JavaScript` Anda dalam sebuah file terpisah.

- **Exports**: Setiap `variable`, `function`, atau `class` yang ingin Anda sediakan bagi bagian lain dari aplikasi Anda perlu di-ekspor secara eksplisit menggunakan kata kunci `export`. Terdapat dua jenis ekspor: *named export* dan *default export*.

- **Imports**: Untuk menggunakan item-item yang diekspor di bagian lain dari aplikasi Anda, Anda perlu mengimpornya menggunakan kata kunci `import`. Jenis impor dapat berupa *named import*, *default import*, dan *namespace import*.

```javascript
// Di dalam file bernama math.js, kita mengekspor fungsi-fungsi berikut:

// Named export
export function add(num1, num2) {
  return num1 + num2;
}

// Default export
export default function subtract(num1, num2) {
  return num1 - num2;
}

// Di dalam file lain, kita dapat mengimpor fungsi-fungsi dari math.js:

// Named import - Baris ini mengimpor fungsi add.
// Nama fungsi harus sama persis dengan yang diekspor dari math.js.
import { add } from './math.js';

// Default import - Baris ini mengimpor fungsi subtract.
// Nama fungsinya dapat berupa apa saja.
import subtractFunc from './math.js';

// Namespace import - Baris ini mengimpor semua yang ada dari file tersebut.
import * as Math from './math.js';

console.log(add(5, 3)); // 8
console.log(subtractFunc(5, 3)); // 2
console.log(Math.add(5, 3)); // 8
console.log(Math.subtract(5, 3)); // 2
```

---

## Tugas (Assignment)

Tinjau kembali topik dan konsep `JavaScript` `Fundamentals`.

---
[⬅️ Sebelumnya](../6-working-with-the-arguments-object-and-rest-parameters/2-what-are-rest-parameters-and-how-do-they-differ-from-the-arguments-object.md) | Selanjutnya ➡️
