# Review: JavaScript Strings

## Dasar-Dasar String

- **Definisi**: Sebuah `string` adalah urutan karakter yang dibungkus dengan tanda kutip tunggal, tanda kutip ganda, atau *backticks*. `String` adalah `primitive data type` dan bersifat `immutable`. `Immutability` berarti bahwa begitu sebuah `string` dibuat, ia tidak dapat diubah.
- **Mengakses Karakter dari sebuah `String`**: Untuk mengakses karakter dari sebuah `string`, Anda dapat menggunakan *bracket notation* dan memasukkan nomor indeks. Indeks adalah posisi suatu karakter di dalam `string`, dan berbasis nol (*zero-based*).

```javascript
const developer = "Jessica";
console.log(developer[0]); // J
```

- **`\n` (Karakter Baris Baru)**: Anda dapat membuat baris baru dalam sebuah `string` dengan menggunakan karakter baris baru `\n`.

```javascript
const poem = "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);
```

- **Meloloskan Karakter String (*Escaping Strings*)**: Anda dapat meloloskan karakter di dalam `string` dengan menempatkan garis miring terbalik (`\`) di depan tanda kutip.

```javascript
const statement = "She said, \"Hello!\"";
console.log(statement); // She said, "Hello!"
```

## Template Literals (Template Strings) dan Interpolasi String

- **Definisi**: `Template literal` didefinisikan dengan *backticks* (`). Mereka mempermudah manipulasi `string`, termasuk menyematkan `variable` secara langsung di dalam sebuah `string`, sebuah fitur yang dikenal sebagai `string interpolation`.

```javascript
const name = "Jessica";
const greeting = `Hello, ${name}!`; 
console.log(greeting); // "Hello, Jessica!"
```

## ASCII, charCodeAt() Method dan fromCharCode() Method

- **ASCII**: ASCII (*American Standard Code for Information Interchange*) adalah standar pengkodean karakter yang digunakan untuk merepresentasikan karakter dasar bahasa Inggris menggunakan nilai numerik. Pelajaran sebelumnya memperkenalkan `charCodeAt()` dan `fromCharCode()` menggunakan contoh ASCII.
- **Unicode**: `String` `JavaScript` menggunakan Unicode secara internal, khususnya pengkodean UTF-16. Untuk 128 karakter pertama (huruf Latin dasar, angka, dan simbol umum), nilai Unicode cocok dengan kode ASCII. Inilah alasan mengapa contoh berbasis ASCII terus berfungsi di `JavaScript`.
- **`charCodeAt()` Method**: `Method` ini mengembalikan unit kode UTF-16 dari karakter pada indeks yang ditentukan. Untuk karakter Latin dasar, nilai ini cocok dengan kode ASCII.

```javascript
const letter = "A";
console.log(letter.charCodeAt(0));  // 65
```

- **`fromCharCode()` Method**: `Method` ini mengonversi kode ASCII menjadi karakter yang sesuai.

```javascript
const char = String.fromCharCode(65);
console.log(char);  // A
```

## Method String Umum Lainnya

- **`indexOf()` Method**: `Method` ini digunakan untuk mencari *substring* di dalam sebuah `string`. Jika *substring* ditemukan, `indexOf()` mengembalikan indeks (atau posisi) kemunculan pertama dari *substring* tersebut. Jika *substring* tidak ditemukan, `indexOf()` mengembalikan -1, yang menunjukkan bahwa pencarian tidak berhasil.

```javascript
const text = "The quick brown fox jumps over the lazy dog.";
console.log(text.indexOf("fox")); // 16
console.log(text.indexOf("cat")); // -1
```

- **`includes()` Method**: `Method` ini digunakan untuk memeriksa apakah sebuah `string` mengandung *substring* tertentu. Jika *substring* ditemukan di dalam `string`, `method` ini mengembalikan `true`. Jika tidak, ia mengembalikan `false`.

```javascript
const text = "The quick brown fox jumps over the lazy dog.";
console.log(text.includes("fox")); // true
console.log(text.includes("cat")); // false
```

- **`slice()` Method**: `Method` ini mengekstrak sebagian dari sebuah `string` dan mengembalikan `string` baru, tanpa mengubah `string` aslinya. `Method` ini membutuhkan dua `parameter`: indeks awal dan indeks akhir opsional.

```javascript
const text = "freeCodeCamp";
console.log(text.slice(0, 4));  // "free"
console.log(text.slice(4, 8));  // "Code"
console.log(text.slice(8, 12)); // "Camp"
```

- **`toUpperCase()` Method**: `Method` ini mengonversi semua karakter menjadi huruf besar dan mengembalikan `string` baru dengan semua karakter huruf besar.

```javascript
const text = "Hello, world!";
console.log(text.toUpperCase()); // "HELLO, WORLD!"
```

- **`toLowerCase()` Method**: `Method` ini mengonversi semua karakter dalam sebuah `string` menjadi huruf kecil.

```javascript
const text = "HELLO, WORLD!"
console.log(text.toLowerCase()); // "hello, world!"
```

- **`replace()` Method**: `Method` ini memungkinkan Anda menemukan nilai yang ditentukan (seperti sebuah kata atau karakter) dalam sebuah `string` dan menggantinya dengan nilai lain. `Method` ini mengembalikan `string` baru dengan penggantian tersebut dan membiarkan `string` aslinya tidak berubah karena `string` dalam `JavaScript` bersifat `immutable`.

```javascript
const text = "I like cats";
console.log(text.replace("cats", "dogs")); // "I like dogs"
```

- **`replaceAll()` Method**: `Method` ini memungkinkan Anda menemukan semua kemunculan nilai yang ditentukan (sebuah kata, karakter, atau pola) dalam sebuah `string` dan menggantinya dengan nilai lain. Cara kerjanya mirip `replace()`, tetapi alih-alih berhenti setelah kecocokan pertama, ia memperbarui setiap kecocokan yang ditemukan dalam `string`.

```javascript
const text = "I love cats and cats are so much fun!";
console.log(text.replaceAll("cats", "dogs")); // "I love dogs and dogs are so much fun!"
```

- **`repeat()` Method**: `Method` ini digunakan untuk mengulang sebuah `string` sebanyak jumlah yang ditentukan.

```javascript
const text = "Hello";
console.log(text.repeat(3)); // "HelloHelloHello"
```

- **`trim()` Method**: `Method` ini digunakan untuk menghapus spasi putih (*whitespaces*) dari awal dan akhir sebuah `string`.

```javascript
const text = "  Hello, world!  ";
console.log(text.trim()); // "Hello, world!"
```

- **`trimStart()` Method**: `Method` ini menghapus spasi putih dari awal (atau "start") dari `string`.

```javascript
const text = "  Hello, world!  ";
console.log(text.trimStart()); // "Hello, world!  "
```

- **`trimEnd()` Method**: `Method` ini menghapus spasi putih dari akhir dari `string`.

```javascript
const text = " Hello, world! ";
console.log(text.trimEnd()); // "  Hello, world!"
```

- **`prompt()` Method**: `Method` dari objek `window` ini digunakan untuk mendapatkan informasi dari pengguna melalui kotak dialog. `Method` ini menerima dua `argument`. `Argument` pertama adalah pesan yang akan muncul di dalam kotak dialog, biasanya meminta pengguna untuk memasukkan informasi. `Argument` kedua adalah nilai *default* yang bersifat opsional dan akan mengisi bidang input pada awalnya.

```javascript
const answer = window.prompt("What's your favorite animal?"); // Nilai ini akan berubah tergantung pada apa yang dijawab oleh pengguna
```

---
[⬅️ Sebelumnya](../10-review-javascript-variables-and-data-types/1-review-javascript-variables-and-data-types.md) | Selanjutnya ➡️
