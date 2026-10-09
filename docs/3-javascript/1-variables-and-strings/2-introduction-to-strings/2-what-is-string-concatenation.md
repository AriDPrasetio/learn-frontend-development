# Apa Itu String Concatenation, dan Bagaimana Cara Menggabungkan String dengan Variable?

Dalam `JavaScript`, bekerja dengan teks adalah bagian penting dari `coding`, dan sering kali, Anda perlu menggabungkan atau menyatukan potongan-potongan teks. Proses ini disebut `string concatenation`.

Dalam pelajaran ini, kita akan fokus pada cara kerja `string concatenation`, khususnya menggunakan `+ operator`, `+= operator`, dan `method` `concat()`.

`+ operator` adalah salah satu cara paling sederhana dan paling sering digunakan untuk menggabungkan `strings`. Ini memungkinkan Anda untuk menggabungkan beberapa `strings` atau menggabungkan `strings` dengan `variables` yang menampung teks.

Berikut adalah sebuah contoh:

```javascript
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName; 
console.log(fullName); // John Doe
```

Dalam contoh ini, kita menggunakan `+ operator` untuk menggabungkan `variables` `firstName` dan `lastName` bersama dengan sebuah spasi (`" "`) untuk membuat nama lengkap.

Salah satu kelemahan menggunakan `+ operator` untuk `string concatenation` adalah hal ini dapat menyebabkan masalah spasi jika Anda tidak mengelola jarak spasi di antara `strings` yang digabungkan secara cermat.

Berikut adalah contoh di mana spasi terlewat:

```javascript
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + lastName; 
console.log(fullName); // JohnDoe
```

Kapan pun Anda menggunakan `+ operator` untuk menggabungkan `strings`, penting untuk memeriksa ulang potensi masalah spasi.

Jika Anda perlu menambahkan atau menggabungkan ke `string` yang sudah ada, maka Anda dapat menggunakan `+= operator`. Ini berguna saat Anda ingin membangun sebuah `string` dengan menambahkan lebih banyak teks ke dalamnya seiring waktu.

Berikut adalah contoh menambahkan satu `string` ke `string` lain menggunakan `+= operator`:

```javascript
let greeting = 'Hello';
greeting += ', John!';

console.log(greeting); // Hello, John!
```

Penting untuk diingat bahwa `strings` bersifat `immutable`, yang berarti bahwa sekali sebuah `string` dibuat, Anda tidak dapat mengubahnya.

Dalam kasus ini, `string` asli `Hello` tidak dimodifikasi. Sebaliknya, `greeting` sekarang mereferensikan `string` baru yaitu `Hello, John!`.

Cara lain untuk menggabungkan `strings` adalah dengan menggunakan `method` `concat()`.

Sebelum kita mulai belajar tentang `method` `concat()`, penting untuk terlebih dahulu memahami apa itu `method` dan `function` pada tingkat yang lebih tinggi.

Dalam pemrograman, sebuah `function` adalah `block of code` yang dapat digunakan kembali yang melakukan tugas tertentu dan dapat dipanggil dengan berbagai masukan (`inputs`). Sebuah `method`, di sisi lain, adalah jenis `function` yang terkait dengan sebuah `object`, artinya ia beroperasi pada data yang terdapat di dalam `object` tersebut.

Pada pelajaran mendatang, kita akan menyelami lebih dalam tentang cara kerja `functions`, `objects`, dan `methods` dalam `JavaScript`. Namun untuk saat ini, penting untuk dipahami bahwa `JavaScript` memiliki lusinan `methods` yang dapat Anda gunakan, seperti `method` `concat()`.

Berikut adalah contoh penggunaan `method` `concat()` untuk menggabungkan dua `strings`:

```javascript
let str1 = 'Hello';
let str2 = 'World';

let result = str1.concat(' ', str2); 
console.log(result); // Hello World
```

Dalam contoh ini, kita menggunakan `method` `concat()` untuk menggabungkan `str1`, sebuah spasi (`' '`), dan `str2` menjadi sebuah `string` tunggal.

Kesimpulannya, `+ operator` adalah yang terbaik untuk penggabungan sederhana, terutama saat Anda perlu menggabungkan beberapa `strings` atau `variables`.

`+= operator` berguna saat membangun sebuah `string` langkah demi langkah atau menambahkan konten baru ke `variable` `string` yang ada.

Terakhir, `method` `concat()` bermanfaat saat Anda perlu menggabungkan beberapa `strings` secara bersamaan.

## Pertanyaan (Questions)

Apa kegunaan utama dari `+ operator` dalam `string concatenation`?

- Untuk membandingkan dua `strings`.
- Untuk menggabungkan dua atau lebih `strings` bersama-sama.
- Untuk memeriksa apakah dua `strings` sama.
- Untuk menghapus karakter dari sebuah `string`.

Manakah dari berikut ini yang merupakan cara yang benar untuk menggabungkan `strings`?

- ```javascript
  let greeting = "Hi";
  greeting -= " there!";
  ```
- ```javascript
  let greeting = "Hi";
  greeting =+ " there!";
  ```
- ```javascript
  let greeting = "Hi";
  greeting += " there!";
  ```
- ```javascript
  let greeting = "Hi";
  greeting == " there!";
  ```

Manakah dari berikut ini yang merupakan `method` yang benar untuk menggabungkan beberapa `strings`?

- `concatenate()`
- `concat()`
- `concatenating()`
- `concats()`

---
[⬅️ Sebelumnya](1-what-is-a-string.md) | [Selanjutnya ➡️](3-what-is-console-log.md)
