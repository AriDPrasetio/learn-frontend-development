# Review: JavaScript Variables and Data Types

## Bekerja dengan HTML, CSS, dan JavaScript

Sementara `HTML` dan `CSS` menyediakan struktur situs web, `JavaScript` menghadirkan interaktivitas ke situs web dengan memungkinkan fungsionalitas yang kompleks, seperti menangani `user input`, menganimasikan `element`, dan bahkan membangun aplikasi web yang lengkap.

## Tipe Data dalam JavaScript

`Data type` membantu program memahami jenis data yang sedang dikelolanya, apakah itu `number`, teks, atau sesuatu yang lain.

- **`Number`**: Sebuah `number` merepresentasikan bilangan bulat (`integer`) maupun nilai floating-point. Contoh bilangan bulat meliputi `7`, `19`, dan `90`.
- **Floating point**: Sebuah `floating point` `number` adalah angka dengan titik desimal. Contohnya meliputi `3.14`, `0.5`, dan `0.0001`.
- **`String`**: Sebuah `string` adalah urutan karakter, atau teks, yang diapit tanda kutip. `"I like coding"` dan `'JavaScript is fun'` adalah contoh dari `string`.
- **`Boolean`**: Sebuah `boolean` merepresentasikan salah satu dari dua nilai yang memungkinkan: `true` atau `false`. Anda dapat menggunakan `boolean` untuk merepresentasikan suatu kondisi, seperti `isLoggedIn = true`.
- **`Undefined` dan `Null`**: Nilai `undefined` adalah `variable` yang telah dideklarasikan tetapi belum diberi nilai (`value`). Nilai `null` adalah nilai kosong, atau `variable` yang sengaja diberi nilai `null`.
- **`Object`**: Sebuah `object` adalah kumpulan pasangan kunci-nilai (*key-value pairs*). Kunci (*key*) adalah nama properti (`property name`), dan nilai (*value*) adalah nilai properti (`property value`).

Di sini, `object` `pet` memiliki tiga properti atau kunci: `name`, `age`, dan `type`. Nilainya masing-masing adalah `Fluffy`, `3`, dan `dog`.

```javascript
let pet = {
  name: "Fluffy",
  age: 3,
  type: "dog"
};
```

- **`Symbol`**: `Data type` `Symbol` adalah nilai unik dan tidak dapat diubah (`immutable`) yang dapat digunakan sebagai pengidentifikasi untuk properti `object`.

Pada contoh di bawah ini, dua simbol dibuat dengan deskripsi yang sama, namun keduanya tidak sama.

```javascript
const crypticKey1= Symbol("saltNpepper");
const crypticKey2= Symbol("saltNpepper");
console.log(crypticKey1 === crypticKey2); // false
```

- **`BigInt`**: Ketika angka terlalu besar untuk `data type` `Number`, Anda dapat menggunakan `data type` `BigInt` untuk merepresentasikan bilangan bulat dengan panjang arbitrer.

Dengan menambahkan huruf `n` di akhir angka, Anda dapat membuat sebuah `BigInt`.

```javascript
const veryBigNumber = 1234567890123456789012345678901234567890n;
```

## Variabel dalam JavaScript

- `Variable` dapat dideklarasikan menggunakan kata kunci `let`.

```javascript
let cityName;
```

- Untuk menetapkan nilai ke suatu `variable`, Anda dapat menggunakan `assignment operator` `=`.

```javascript
cityName = "New York";
```

- `Variable` yang dideklarasikan menggunakan `let` dapat diubah nilainya (*reassigned*) ke nilai baru.

```javascript
let cityName = "New York";
cityName = "Los Angeles";
console.log(cityName); // Los Angeles
```

- Selain `let`, Anda juga dapat menggunakan `const` untuk mendeklarasikan sebuah `variable`. Namun, `variable` `const` tidak dapat diubah nilainya (*reassigned*) ke nilai baru.

```javascript
const cityName = "New York";
cityName = "Los Angeles"; // TypeError: Assignment to constant variable.
```

- `Variable` yang dideklarasikan menggunakan `const` digunakan dalam mendeklarasikan konstanta, yang tidak boleh berubah di seluruh kode, seperti `PI` atau `MAX_SIZE`.

## Konvensi Penamaan Variabel

- Nama `variable` harus deskriptif dan bermakna.
- Nama `variable` harus berupa `camelCase` seperti `cityName`, `isLoggedIn`, dan `veryBigNumber`.
- Nama `variable` tidak boleh diawali dengan angka. Mereka harus diawali dengan huruf, `_`, atau `$`.
- Nama `variable` tidak boleh mengandung spasi atau karakter khusus, kecuali `_` dan `$`.
- Nama `variable` tidak boleh menggunakan kata kunci yang dicadangkan (*reserved keywords*).
- Nama `variable` bersifat peka huruf besar-kecil (*case-sensitive*). `age` dan `Age` adalah `variable` yang berbeda.

## String dan Immutability String dalam JavaScript

- `String` adalah urutan karakter yang diapit tanda kutip. Mereka dapat dibuat menggunakan tanda kutip tunggal dan tanda kutip ganda.

```javascript
let correctWay = 'This is a string';
let alsoCorrect = "This is also a string";
```

- `String` bersifat `immutable` dalam `JavaScript`. Ini berarti bahwa begitu sebuah `string` dibuat, Anda tidak dapat mengubah karakter di dalam `string` tersebut. Namun, Anda tetap dapat menetapkan ulang (*reassign*) `string` ke nilai baru.

```javascript
let firstName = "John";
firstName = "Jane"; // Reassigning the string to a new value
```

## Konkatenasi String dalam JavaScript

- Konkatenasi adalah proses menggabungkan beberapa `string` atau mengombinasikan `string` dengan `variable` yang menyimpan teks. Operator `+` adalah salah satu metode paling sederhana dan paling sering digunakan untuk menggabungkan `string`.

```javascript
let studentName = "Asad";
let studentAge = 25;
let studentInfo = studentName + " is " + studentAge + " years old.";
console.log(studentInfo); // Asad is 25 years old.
```

- Jika Anda perlu menambahkan atau menggabungkan ke `string` yang sudah ada, Anda dapat menggunakan operator `+=`. Ini berguna ketika Anda ingin membangun sebuah `string` dengan menambahkan lebih banyak teks ke dalamnya dari waktu ke waktu.

```javascript
let message = "Welcome to programming, ";
message += "Asad!";
console.log(message); // Welcome to programming, Asad!
```

- Cara lain untuk menggabungkan `string` adalah dengan menggunakan `method` `concat()`. `Method` ini menggabungkan dua `string` atau lebih secara bersamaan.

```javascript
let firstName = "John";
let lastName = "Doe";
let fullName = firstName.concat(" ", lastName);
console.log(fullName); // John Doe
```

## Mencatat Pesan dengan console.log()

- `Method` `console.log()` digunakan untuk mencatat pesan ke konsol. Ini adalah alat yang berguna untuk *debugging* dan menguji kode Anda.

```javascript
console.log("Hello, World!");
// Output: Hello, World!
```

## Titik Koma (Semicolons) dalam JavaScript

- Titik koma (*semicolons*) terutama digunakan untuk menandai akhir dari sebuah `statement`. Ini membantu mesin `JavaScript` memahami pemisahan instruksi individual, yang sangat penting untuk eksekusi yang benar.

```javascript
let message = "Hello, World!"; // statement pertama berakhir di sini
let number = 42; // statement kedua dimulai di sini
```

- Titik koma membantu mencegah ambiguitas dalam eksekusi kode dan memastikan bahwa `statement` dihentikan dengan benar.

## Komentar dalam JavaScript

- Baris kode apa pun yang dijadikan komentar akan diabaikan oleh mesin `JavaScript`. Komentar digunakan untuk menjelaskan kode, membuat catatan, atau menonaktifkan kode untuk sementara waktu.
- Komentar satu baris dibuat menggunakan `//`.

```javascript
// Ini adalah komentar satu baris dan akan diabaikan oleh mesin JavaScript
```

- Komentar multibaris dibuat menggunakan `/*` untuk memulai komentar dan `*/` untuk mengakhiri komentar.

```javascript
/*
Ini adalah komentar multibaris.
Komentar ini dapat mencakup beberapa baris.
*/
```

## JavaScript sebagai Bahasa yang Dynamically Typed

- `JavaScript` adalah bahasa yang `dynamically typed`, yang berarti Anda tidak harus menentukan `data type` dari suatu `variable` saat mendeklarasikannya. Mesin `JavaScript` secara otomatis menentukan `data type` berdasarkan nilai yang ditetapkan ke `variable`.

```javascript
let error = 404; // JavaScript memperlakukan error sebagai sebuah number
error = "Not Found"; // JavaScript sekarang memperlakukan error sebagai sebuah string
```

- Bahasa lain, seperti C#, yang bukan `dynamically typed` akan menghasilkan *error*:

```csharp
int error = 404; // value must always be an integer
error = "Not Found"; // This would cause an error in C#
```

## Menggunakan typeof Operator

- `typeof operator` digunakan untuk memeriksa `data type` dari suatu `variable`. Operator ini mengembalikan sebuah `string` yang menunjukkan tipe dari `variable` tersebut.

```javascript
let age = 25;
console.log(typeof age); // "number"

let isLoggedIn = true;
console.log(typeof isLoggedIn); // "boolean"
```

- Namun, ada keanehan (*quirk*) yang terkenal dalam `JavaScript` terkait `null`. `typeof operator` mengembalikan `"object"` untuk nilai `null`.

```javascript
let user = null;
console.log(typeof user); // "object"
```

---
[⬅️ Sebelumnya](../9-working-with-string-modification-methods/2-how-can-you-repeat-a-string-x-number-of-times.md) | [Selanjutnya ➡️](../11-review-javascript-strings/1-review-javascript-strings.md)
