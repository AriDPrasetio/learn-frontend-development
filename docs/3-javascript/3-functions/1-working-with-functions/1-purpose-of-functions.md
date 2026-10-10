# Apa Tujuan dari `function`, dan Bagaimana Cara Kerjanya?

`function` adalah potongan `code` yang dapat digunakan kembali yang melakukan tugas tertentu atau menghitung sebuah `value`. Pikirkan `function` sebagai sebuah mesin yang menerima suatu `input`, melakukan operasi terhadap `input` tersebut, lalu menghasilkan sebuah `output`. Berikut adalah contoh mendeklarasikan sebuah `function`:

```javascript
function greet() {
  console.log("Hello, Jessica!");
}
```

Pada contoh ini, kita telah mendeklarasikan sebuah `function` bernama `greet`. Di dalam `function` tersebut, kita memiliki sebuah `console.log` yang mencetak pesan Hello, Jessica!. Jika kita mencoba menjalankan `code` ini, kita tidak akan melihat pesan tersebut muncul di `console`. Hal ini karena kita perlu memanggil `function` tersebut.

## Memanggil Sebuah `function`

`invocation` adalah saat kita benar-benar menggunakan atau mengeksekusi `function` tersebut. Untuk memanggil sebuah `function`, kamu perlu merujuk pada nama `function` tersebut diikuti dengan sepasang tanda kurung:

```javascript
function greet() {
  console.log("Hello, Jessica!");
}

greet(); // "Hello, Jessica!"
```

Sekarang pesan Hello, Jessica! akan dicetak ke `console`. Namun bagaimana jika kita ingin pesannya menjadi Hello, Nick! atau Hello, Anna!? Kita tidak ingin menulis `function` baru setiap kali kita menyapa pengguna yang berbeda. Sebagai gantinya, kita bisa membuat sebuah `function` yang dapat digunakan kembali yang menggunakan `parameter` dan `argument` `function`.

## `parameter` dan `argument`

`parameter` bertindak sebagai `placeholder` untuk `value` yang akan diteruskan ke dalam `function` saat ia dipanggil. `parameter` memungkinkan `function` untuk menerima `input` dan bekerja dengan `input` tersebut. `argument` adalah `value` aktual yang diteruskan ke `function` saat pemanggilan. Berikut adalah versi yang diperbarui dari `function` `greet` yang menggunakan `parameter` dan `argument`:

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Alice"); // Hello, Alice!
greet("Nick"); // Hello, Nick!
```


`name` di sini berfungsi sebagai `parameter`, sementara `string` "Alice" dan "Nick" berfungsi sebagai `argument`. Sekarang kita memiliki sebuah `reusable function` yang bisa digunakan puluhan kali di seluruh `code` kita dengan `argument` yang berbeda-beda.

## `return value`

Saat sebuah `function` selesai dieksekusi, ia akan selalu mengembalikan sebuah `value`. Secara `default`, `return value`-nya adalah `undefined`. Berikut contohnya:

```javascript
function doSomething() {
  console.log("Doing something...");
}

let result = doSomething();
console.log(result); // undefined
```

Jika kamu butuh `function`-mu mengembalikan `value` tertentu, maka kamu harus menggunakan `return statement`. Berikut adalah contoh penggunaan `return statement` untuk mengembalikan hasil penjumlahan dua `value`:

```javascript
function calculateSum(num1, num2) {
  return num1 + num2;
}

console.log(calculateSum(3, 4)); // 7
```

Sering kali kamu akan menggunakan `return statement`, karena kamu bisa menggunakan `value` yang dihasilkan dari `function` tersebut nantinya di dalam `code`-mu.

## `anonymous function`

Sejauh ini, kita telah bekerja dengan `function` yang memiliki nama, tetapi kamu juga bisa membuat apa yang disebut dengan `anonymous function`. Sebuah `anonymous function` adalah `function` tanpa nama yang dapat diisikan ke dalam sebuah `variable` seperti ini:

```javascript
const sum = function (num1, num2) {
  return num1 + num2;
};

console.log(sum(3, 4)); // 7
```

Pada contoh di atas, kita memiliki `variable` `const` bernama `sum` dan kita mengisinya dengan sebuah `anonymous function` yang mengembalikan jumlah dari 
`num1` dan 
`num2`. Kita kemudian dapat memanggil `sum` dan memasukkan angka 3 dan 4 untuk mendapatkan hasil 7.

## `default parameter`

`function` mendukung `default parameter`, yang memungkinkanmu mengatur `default value` untuk `parameter`. `default value` ini digunakan apabila `function` dipanggil tanpa sebuah `argument` untuk `parameter` tersebut. Berikut contohnya:

```javascript
function greetings(name = "Guest") {
  console.log("Hello, " + name + "!");
}

greetings(); // Hello, Guest!
greetings("Anna"); // Hello, Anna!
```

Pada contoh ini, jika tidak ada `argument` yang diberikan untuk 
`name`, ia akan di-`default` menjadi "Guest".

## Ringkasan

Singkatnya, `function` memungkinkanmu untuk menulis `code` yang `reusable` dan terorganisir. `function` bisa menerima `input` (`parameter`), melakukan aksi, dan mengembalikan `output`.

## Pertanyaan

Apa `output` dari `code` berikut?

```javascript
function mystery(a, b = 3) {
  return a * b;
}
console.log(mystery(4));
```

- 12
- 7
- `undefined`
- `NaN`

Manakah dari berikut ini yang merupakan cara yang benar untuk memanggil (atau `invoke`) `function` `sum`?

```javascript
function sum(num1, num2) {
  return num1 + num2
}
```

- (1, 2)sum>
- (1, 2)sum(1, 2)
- sum(1, 2)
- <(1, 2)sum>

Apa `return value` `default` dari sebuah `function` jika tidak ada `return statement` yang ditentukan?

- `null`
- 0
- `undefined`
- An empty `string`.

---
⬅️ Sebelumnya | [Selanjutnya ➡️](2-arrow-functions.md)
