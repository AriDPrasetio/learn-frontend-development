# Bagaimana Cara Kerja let dan const yang Berbeda Terkait Deklarasi, Penetapan, dan Penetapan Ulang Variable?

Saat bekerja dengan `JavaScript`, Anda akan sering mendeklarasikan `variables` untuk menyimpan data yang Anda rencanakan untuk digunakan di seluruh program Anda.

Dalam `JavaScript` modern, `let` dan `const` adalah cara yang lebih disukai untuk mendeklarasikan `variables`, tetapi keduanya berbeda dalam cara menangani `assignment` dan `reassignment` `value`.

Dalam pelajaran ini, kita akan menjelajahi bagaimana `let` dan `const` berbeda dalam `variable declaration`, `assignment`, dan `reassignment`.

`Keyword` `let` memungkinkan Anda mendeklarasikan `variables` yang dapat diperbarui atau di-`reassign` nanti. Anda dapat menganggap `let` sebagai wadah yang fleksibel: setelah Anda menyimpan sebuah `value` di dalamnya, Anda dapat mengubah `value` tersebut sesuai kebutuhan di seluruh program Anda.

Berikut adalah contoh mendeklarasikan dan menetapkan sebuah `variable` dengan `let`:

```javascript
let score = 10;
```

Dalam hal ini, `variable` `score` dideklarasikan dan diberi `value` `10`. Jika Anda ingin memperbarui `value`-nya nanti, Anda dapat melakukannya dengan mudah:

```javascript
let score = 10;
console.log(score); // 10
score = 20;
console.log(score); // 20
```

Sekarang, `score` menampung `value` `20`. Ini membuat `let` sangat berguna saat Anda tahu bahwa `value` dari sebuah `variable` akan berubah saat program Anda berjalan.

Di sisi lain, `const` digunakan untuk mendeklarasikan `variables` yang konstan. Setelah Anda menetapkan sebuah `value` ke sebuah `variable` yang dideklarasikan dengan `const`, Anda tidak dapat me-`reassign`-nya.

Hal ini membuat `const` ideal untuk `values` yang tidak ingin Anda ubah secara tidak sengaja selama eksekusi program Anda.

Berikut adalah contoh mendeklarasikan dan menetapkan sebuah `variable` dengan `const`:

```javascript
const maxScore = 100;
console.log(maxScore); // 100
```

Setelah `maxScore` diberi `value` `100`, itu tidak dapat diubah:

```javascript
maxScore = 200; // This will result in an error
```

Mencoba me-`reassign` sebuah `value` ke `variable` `const` akan melempar `error` di `JavaScript` `console` Anda, karena `variables` `const` bersifat `immutable` setelah mereka ditetapkan.

Anda dapat mendeklarasikan sebuah `variable` `let` tanpa langsung menetapkan sebuah `value` padanya, dan Anda dapat menetapkan sebuah `value` padanya nanti:

```javascript
let age;
console.log(age); // undefined
age = 25;
console.log(age); // 25
```

Meskipun sebuah `variable` yang dideklarasikan dengan `let` dapat di-`reassign`, ia tidak dapat dideklarasikan ulang (`redeclared`). Jika Anda mencoba mendeklarasikan `variable` yang sama lagi menggunakan `let`, Anda akan mendapatkan sebuah `error`:

```javascript
let age = 25;

let age = 90; // SyntaxError: Identifier 'age' has already been declared
```

Hal yang sama berlaku untuk `const`: sebuah `variable` yang dideklarasikan dengan `const` juga tidak dapat dideklarasikan ulang (`redeclared`).

`Variables` yang dideklarasikan dengan `const` harus diberi sebuah `value` pada saat deklarasi. Jika Anda mencoba mendeklarasikan sebuah `variable` `const` tanpa menetapkan sebuah `value` padanya, Anda akan mendapatkan sebuah `error`:

```javascript
const age; // Error: Missing initializer in const declaration
```

Anda harus menggunakan `let` saat Anda perlu mendeklarasikan `variables` yang akan di-`reassign` nanti. Sebagai contoh, melacak skor yang berubah atau memperbarui sebuah `value` seiring berjalannya waktu dalam program Anda.

Gunakan `const` saat Anda ingin mendeklarasikan `variables` yang harus tetap konstan, seperti nilai konfigurasi atau pengaturan yang tidak boleh diubah secara tidak sengaja.

Anda juga dapat menggunakan `keyword` `var`, tetapi sudah tidak direkomendasikan lagi saat ini. `Keyword` `var` mirip seperti `let`, hanya saja memiliki `scope` yang lebih luas, yang lebih rentan menimbulkan masalah dalam program Anda.

## Pertanyaan (Questions)

Apa yang terjadi jika Anda mencoba me-`reassign` sebuah `value` ke sebuah `variable` yang dideklarasikan dengan `const`?

- `Value` akan berubah tanpa masalah.
- `Value` asli akan diperbarui, tetapi peringatan akan dikeluarkan.
- Sebuah `error` akan dilemparkan karena `variables` `const` tidak dapat di-`reassign`.
- `Value` baru akan diabaikan, dan `value` asli akan tetap sama.

Manakah dari berikut ini yang merupakan cara yang benar untuk menetapkan angka `100` ke sebuah konstanta bernama `maxScore`?

- `const maxScore === 100;`
- `const maxScore = 100;`
- `const maxScore <= 100;`
- `const maxScore == 100;`

Bisakah Anda mendeklarasikan sebuah `variable` `const` tanpa menetapkan sebuah `value` padanya?

- Ya, tetapi Anda harus menetapkan sebuah `value` nanti.
- Tidak, `variables` `const` harus diinisialisasi pada saat deklarasi.
- Ya, tetapi Anda hanya dapat menetapkan angka sebagai `value` awal.
- Tidak, `variables` `const` harus dideklarasikan dan di-`reassign` pada baris yang sama.

---
[⬅️ Sebelumnya](3-what-are-variables.md) | [Selanjutnya ➡️](../2-introduction-to-strings/1-what-is-a-string.md)
