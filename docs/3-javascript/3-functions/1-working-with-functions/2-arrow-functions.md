# Apa Itu `arrow function`, dan Bagaimana Cara Kerjanya?

Pada pelajaran sebelumnya, kamu telah belajar cara bekerja dengan `function`, yang merupakan potongan `code` `reusable` yang membantu membuat `code`-mu menjadi lebih modular, lebih mudah dikelola, dan lebih efisien. Semua contoh sebelumnya menggunakan sintaks `regular function`, seperti ini:

```javascript
function greetings(name) {
  console.log("Hello, " + name + "!");
}
```

Namun cara lain untuk menulis `function` di JavaScript adalah dengan membuat ekspresi `arrow function`. Berikut adalah cara kamu bisa `refactor` contoh sebelumnya untuk menggunakan sintaks `arrow function`:

```javascript
const greetings = (name) => {
  console.log("Hello, " + name + "!");
};
```

Pada contoh yang direvisi ini, kita membuat `variable` `const` bernama `greetings` dan mengisinya dengan `anonymous function`. Sebagian besar sintaksnya akan terlihat familier bagimu kecuali hilangnya `keyword` `function` dan penambahan tanda panah (=>) antara `parameter` 
`name` dan badan `function`. Jika daftar `parameter`-mu hanya memiliki satu `parameter` di dalamnya, maka kamu bisa menghapus tanda kurungnya seperti ini:

```javascript
const greetings = name => {
  console.log("Hello, " + name + "!");
};
```

Jika `arrow function` milikmu tidak memiliki `parameter`, maka kamu harus menggunakan tanda kurung seperti ini:

```javascript
const greetings = () => {
  console.log("Hello");
};
```

Saat pertama kali belajar tentang `function`, kamu harus membungkus badan `function` dalam kurung kurawal. Namun jika badan `function`-mu hanya berisi satu baris `code`, kamu bisa menghapus kurung kurawalnya seperti ini:

```javascript
const greetings = name => console.log("Hello, " + name + "!");
```

Penting untuk dicatat bahwa menghapus tanda kurung dan kurung kurawal untuk sintaks `regular function` tidak akan berhasil. Kamu akan mendapatkan `error` jika mencoba melakukan sesuatu seperti ini:

```javascript
// This will produce syntax errors 
function greetings name console.log("Hello, " + name + "!");
```

Jenis `function` satu baris seperti ini hanya berfungsi jika kamu menggunakan sintaks `arrow function`. Konsep kunci lainnya adalah `return statement`. Berikut adalah contoh menggunakan sintaks `arrow function` untuk menghitung luas:

```javascript
const calculateArea = (width, height) => {
  const area = width * height;
  return area;
};

console.log(calculateArea(5, 3)); // 15
```

Kita membuat sebuah `variable` di dalam `function` bernama `area` lalu mengembalikan `variable` tersebut. Namun kita bisa merapikan `code` kita sedikit dan langsung mengembalikan perhitungannya:

```javascript
const calculateArea = (width, height) => {
  return width * height;
}; 

console.log(calculateArea(5, 3)); // 15
```

Jika kamu mencoba menghapus kurung kurawal dan menempatkan perhitungannya pada baris yang sama, maka kamu akan mendapatkan pesan `Uncaught SyntaxError: Unexpected token 'return'`:

```javascript
const calculateArea = (width, height) => return width * height;
```

> [!WARNING]
> Alasan mengapa kamu mendapatkan `error` ini, adalah karena kamu perlu menghapus `return statement`. Saat kamu menghapus `return statement` tersebut, `error` akan menghilang dan `function` akan tetap `implicitly` mengembalikan perhitungan tersebut.

```javascript
const calculateArea = (width, height) => width * height;
```

Jadi kapan sebaiknya kamu menggunakan sintaks `arrow function`? Yah, itu tergantung. Banyak `developer` menggunakannya secara konsisten dalam proyek pribadi mereka. Namun, saat bekerja di dalam tim, pilihan tersebut biasanya bergantung pada apakah `codebase` yang ada menggunakan `regular function` atau `arrow function`. Di pelajaran-pelajaran mendatang, kita akan membahas kapan harus menggunakan `arrow function` dan kapan harus menghindarinya.

## Pertanyaan

Apa cara yang benar untuk menulis sebuah `arrow function` yang menerima dua `parameter` dan mengembalikan hasil penjumlahannya?

- (a, b) => { a + b }
- (a, b) => a + b
- (a, b) => return a + b
-  , b => a + b

Apa cara yang benar untuk menulis sebuah `arrow function` yang tidak memiliki `parameter` dan mengembalikan `string` "Hello"?

- () => "Hello"
- => "Hello"
- () => { "Hello" }
- () => return "Hello"

Apa yang akan menjadi `output` dari `code` berikut?

```javascript
let multiply = (a, b = 1) => a * b;

console.log(multiply(5));
console.log(multiply(5, 2));
```

- 5, 10
- 1, 2
- `undefined`, 10
- This will throw an `error`.

