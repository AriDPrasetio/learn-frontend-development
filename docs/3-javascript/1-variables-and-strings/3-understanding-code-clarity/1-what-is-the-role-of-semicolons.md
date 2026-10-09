# Apa Peran Titik Koma (Semicolons) dalam JavaScript, dan Pemrograman Secara Umum?

Sama seperti tanda titik (`.`) yang dapat menandai akhir sebuah kalimat dalam bahasa Inggris, titik koma (`semicolon`) (`;`) dapat digunakan untuk menandai akhir dari sebuah `statement` dalam `JavaScript`. Namun, `statements` belum tentu sama dengan baris `source code`. Sebuah `statement` dapat mencakup beberapa baris, dan satu baris dapat memuat lebih dari satu `statement`.

Sebagai contoh:

```javascript
let variableOne = 5;
let variableTwo = 10;
```

Dalam `code` ini, tanda `semicolon` memperjelas akhir dari setiap `statement`. `JavaScript` juga memiliki `Automatic Semicolon Insertion` (`ASI`), yang memungkinkan deklarasi-deklarasi ini tetap valid tanpa `semicolons` eksplisit:

```javascript
let variableOne = 5
let variableTwo = 10
```

Dalam contoh ini, `ASI` memungkinkan `JavaScript` memperlakukan setiap deklarasi sebagai `statement` terpisah meskipun tidak ada `semicolons`. Namun, `ASI` tidak begitu saja menyisipkan `semicolon` setelah setiap jeda baris (*line break*).

Sebagai contoh, jeda baris setelah sebuah `return statement` dapat menyebabkan perilaku yang tidak terduga:

```javascript
function getValue() {
  return
  {
    value: 42
  };
}
```

Di sini, `ASI` menyisipkan sebuah `semicolon` setelah `return`, sehingga `function` tersebut mengembalikan `undefined`, bukan `object`. Menulis `object` pada baris yang sama menghindari perilaku ini:

```javascript
function getValue() {
  return {
    value: 42
  };
}
```

Ini menunjukkan mengapa jeda baris dan batas `statement` tidak selalu merupakan hal yang sama.

`Semicolons` juga dapat berguna saat jeda baris dapat menyebabkan dua bagian `code` ditafsirkan sebagai satu `expression`. Sebuah `immediately invoked function expression` (`IIFE`) adalah sebuah `function` yang berjalan segera setelah ia didefinisikan. Salah satu cara untuk membuat sebuah `IIFE` adalah dengan membungkus sebuah `anonymous function` (yaitu `function` tanpa nama) dalam tanda kurung (`parentheses`) dan menambahkan `()` di akhir untuk memanggilnya. Sebuah `IIFE` dapat menyebabkan masalah ketika `statement` sebelumnya tidak diakhiri dengan `semicolon`:

```javascript
const message = "Hello"

(function () {
  console.log(message);
})()
```

Di sini, `JavaScript` tidak menyisipkan sebuah `semicolon` setelah deklarasi `string` karena tanda kurung buka `(` berikutnya dapat melanjutkan `initializer expression`. `JavaScript` mem-`parse` `initializer` tersebut sebagai panggilan ke `string` `"Hello"`, dengan `function expression` sebagai sebuah `argument`. Ini melempar `TypeError` sebelum `IIFE` dapat berjalan. Menambahkan sebuah `semicolon` akan mengakhiri deklarasi sebelum `IIFE`:

```javascript
const message = "Hello";

(function () {
  console.log(message);
})()
```

`Semicolon` yang eksplisit menjaga deklarasi `variable` dan `IIFE` sebagai `statements` yang terpisah.

`Semicolons` digunakan dalam banyak bahasa pemrograman, termasuk C, C++, dan Java. Aturan pastinya bervariasi antar bahasa, tetapi umumnya mereka membantu menunjukkan di mana `statements` berakhir.

Sebuah `compiler` menerjemahkan `source code` ke dalam bentuk lain, seperti `machine code`, `bytecode`, atau representasi perantara (`intermediate representation`), tergantung pada bahasa dan `compiler`-nya. Kompilasi tidak serta merta menghasilkan file yang dapat dieksekusi mandiri (`standalone executable file`).

Menggunakan `semicolons` secara konsisten dapat membuat batas `statement` lebih jelas dan membuat `code` lebih mudah dibaca dan dipelihara.

## Pertanyaan (Questions)

Apa peran utama dari `semicolon` dalam `JavaScript`?

- Untuk memisahkan `variables`.
- Untuk menandai akhir dari sebuah `statement`.
- Untuk membuat `comments`.
- Untuk menunjukkan awal dari sebuah `function`.

Apa yang dapat terjadi jika `semicolons` dihilangkan dalam `code` `JavaScript`?

- `Code` tidak akan berjalan sama sekali.
- `JavaScript engine` akan selalu menambahkan `semicolons` dengan benar.
- Hal ini dapat menyebabkan perilaku yang tidak terduga karena `Automatic Semicolon Insertion`.
- Ini akan secara otomatis memperbaiki `syntax errors`.

Mengapa bermanfaat untuk menggunakan `semicolons` secara eksplisit meskipun `JavaScript` memiliki `Automatic Semicolon Insertion`?

- Untuk meningkatkan kecepatan eksekusi `code`.
- Untuk meningkatkan keterbacaan `code` dan mencegah kesalahan yang tidak kentara.
- Untuk menambahkan `comments` ke `code`.
- Untuk mengubah cara `variables` dideklarasikan.

---
[⬅️ Sebelumnya](../2-introduction-to-strings/3-what-is-console-log.md) | [Selanjutnya ➡️](2-what-are-comments-in-javascript.md)
