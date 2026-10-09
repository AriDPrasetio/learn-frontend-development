# Standar Terminologi JavaScript & Pemrograman

Aturan ini berlaku saat menulis, menyalin, menerjemahkan, atau mengedit dokumentasi teknis JavaScript dalam bahasa Indonesia di seluruh repositori ini.

---

## 1. Aturan Penulisan Istilah Teknis

1. **Gunakan Istilah Teknis Asli (Bahasa Inggris Baku)**:
   - Istilah teknis pemrograman JavaScript tetap ditulis dalam bahasa Inggris sesuai spesifikasi ECMAScript dan dokumentasi MDN.
   - Jangan menerjemahkan istilah teknis secara harfiah ke bahasa Indonesia (misalnya: jangan gunakan "fungsi panah", gunakan `arrow function`; jangan gunakan "larik", gunakan `array`).
2. **Struktur Kalimat Tetap Bahasa Indonesia yang Alami**:
   - Struktur kalimat, kata sambung, dan gaya bahasa tetap dalam bahasa Indonesia baku yang mengalir dan mudah dipahami.
   - Contoh yang BENAR: `Method ini mengembalikan sebuah number.`
   - Contoh yang SALAH: `Metode ini mengembalikan sebuah angka.`
3. **Bungkus dengan Backtick (`` `...` ``)**:
   - Setiap istilah teknis pemrograman (baik nama tipe data, operator, kata kunci, konsep, fungsi, maupun properti) **wajib dibungkus dengan tanda backtick** agar kontras dan mudah dikenali dalam Markdown.
   - Jangan gunakan backtick ganda jika istilah tersebut sudah berada di dalam backtick atau *code block*.
4. **Hindari Penjelasan Ganda dalam Tanda Kurung**:
   - Jangan gunakan pola duplikasi seperti: `fungsi (function)` atau `penugasan (assignment)`.
   - Cukup gunakan langsung istilah bahasa Inggris ber-backtick: `` `function` `` atau `` `assignment` ``.

---

## 2. Kamus Acuan Padanan Istilah

### Dasar & Struktur
- fungsi -> `function`
- fungsi panah -> `arrow function`
- fungsi anonim -> `anonymous function`
- fungsi callback -> `callback function` / `callback`
- higher-order function -> `higher-order function`
- parameter / argumen -> `parameter` / `argument`
- nilai kembalian / mengembalikan -> `return value` / `return`
- variabel -> `variable`
- konstanta -> `constant`
- cakupan / lingkup -> `scope` (global scope, local scope, block scope)
- closure -> `closure`
- hoisting -> `hoisting`
- ekspresi -> `expression`
- pernyataan -> `statement`
- tipe data -> `data type`
- tipe data primitif -> `primitive data type`
- larik -> `array`
- objek -> `object`
- properti / metode -> `property` / `method`
- prototipe -> `prototype`
- rantai prototipe -> `prototype chain`
- kelas / pewarisan -> `class` / `inheritance`
- template literal -> `template literal`
- destrukturisasi -> `destructuring`
- rest parameter / spread operator -> `rest parameter` / `spread operator`

### Tipe Data & Nilai
- number / integer / float -> `number` / `integer` / `float`
- string -> `string`
- boolean (true / false) -> `boolean` (`true` / `false`)
- null / undefined -> `null` / `undefined`
- NaN / Infinity -> `NaN` / `Infinity`
- truthy / falsy -> `truthy` / `falsy`
- type coercion / pemaksaan tipe -> `type coercion`
- type conversion / konversi tipe -> `type conversion`

### Operator
- operator aritmetika -> `arithmetic operators`
- operator penjumlahan / pengurangan -> `addition operator` / `subtraction operator`
- operator perkalian / pembagian -> `multiplication operator` / `division operator`
- operator sisa bagi / perpangkatan -> `remainder operator` / `exponentiation operator`
- operator perbandingan -> `comparison operators`
- kesetaraan / kesetaraan ketat -> `equality` (`==`) / `strict equality` (`===`)
- ketidaksetaraan / ketidaksetaraan ketat -> `inequality` (`!=`) / `strict inequality` (`!==`)
- operator logika (AND, OR, NOT) -> `logical operators` (`&&`, `||`, `!`)
- operator nullish coalescing -> `nullish coalescing operator` (`??`)
- operator ternary -> `ternary operator`
- operator penugasan -> `assignment operator` (`=`)
- penugasan bertingkat / compound assignment -> `compound assignment operator` (`+=`, `-=`, dll)
- increment / decrement -> `increment` (`++`) / `decrement` (`--`)
- unary operator / binary operator -> `unary operator` / `binary operator`
- operator bitwise -> `bitwise operators` (`&`, `|`, `^`, `~`, `<<`, `>>`)
- operator precedence / prioritas operator -> `operator precedence`
- associativity / asosiativitas -> `associativity`

### Alur Kontrol (Control Flow)
- kondisional / percabangan -> `conditional` / `conditional statement`
- pernyataan if / else if / else -> `if` / `else if` / `else`
- pernyataan switch / case / break / default -> `switch` / `case` / `break` / `default`
- perulangan -> `loop` (`for`, `while`, `do-while`)
- penanganan galat / error handling -> `error handling` (`try...catch`, `throw`)

### Asinkron & DOM
- asinkron / sinkron -> `asynchronous` / `synchronous`
- Promise -> `Promise`
- async / await -> `async` / `await`
- event loop -> `event loop`
- event handling / event listener -> `event handling` / `event listener`
- DOM / pohon DOM -> `DOM` / `DOM tree`
