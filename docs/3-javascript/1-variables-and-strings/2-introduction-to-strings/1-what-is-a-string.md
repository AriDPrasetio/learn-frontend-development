# Apa Itu String dalam JavaScript, dan Apa Itu String Immutability?

Dalam `JavaScript`, sebuah `string` adalah urutan karakter yang digunakan untuk merepresentasikan data teks. `String` adalah salah satu dari `primitive data types` dalam bahasa ini, bersama dengan `numbers`, `booleans`, `null`, dan `undefined`.

Untuk membuat sebuah `string` dalam `JavaScript`, Anda dapat menggunakan tanda kutip tunggal (`'`) atau tanda kutip ganda (`"`).

Berikut adalah contoh pembuatan dua `variables` yang menampung `string values`:

```javascript
let singleQuotes = 'This is a string';
console.log(singleQuotes);
let doubleQuotes = "This is also a string";
console.log(doubleQuotes);
```

Meskipun Anda dapat menggunakan tanda kutip tunggal atau ganda untuk membuat `string`, penting untuk konsisten. Jika sebuah `string` dimulai dengan tanda kutip tunggal, ia juga harus diakhiri dengan tanda kutip tunggal.

Hal yang sama berlaku untuk tanda kutip ganda. Contoh berikut akan menghasilkan `error` karena dimulai dengan tanda kutip ganda dan diakhiri dengan tanda kutip tunggal:

```javascript
const improperStr = "Do not do this';
```

Hal lain yang perlu diperhatikan adalah bahwa `string` bersifat `immutable`. Dalam pemrograman, `immutability` berarti bahwa sekali sesuatu dibuat, itu tidak dapat diubah. Jadi, ketika Anda membuat sebuah `string`, Anda tidak dapat mengubah karakternya secara langsung. Sebagai gantinya, Anda akan membuat `string` baru jika ingin melakukan perubahan.

Berikut adalah contoh mencoba mengubah karakter pertama dari sebuah `string`, yang menghasilkan `error`:

```javascript
let developer = "Jessica";
developer[0] = "M";
```

Untuk mengubah `value`-nya, Anda menugaskan seluruh `string` baru ke `variable` `developer`:

```javascript
let developer = "Jessica";
console.log(developer);
developer = "Quincy";
console.log(developer);
```

`String` adalah bagian penting dari pemrograman, dan pada pelajaran-pelajaran mendatang, Anda akan mempelajari teknik-teknik lanjutan untuk memanipulasinya dan memanfaatkan potensi penuhnya guna menciptakan aplikasi yang dinamis dan interaktif.

## Pertanyaan (Questions)

Manakah dari berikut ini yang merupakan sintaks yang benar untuk membuat `string` dalam `JavaScript`?

- `const str = <this is a string>`
- `const str = [this is a string]`
- `const str = "this is a string"`
- `const str = //this is a string//`

Apa yang terjadi jika sebuah `string` dimulai dengan tanda kutip tunggal dan diakhiri dengan tanda kutip ganda?

- Ini membuat sebuah `string` yang valid.
- Ini akan melempar `syntax error`.
- Ini membuat sebuah `string` dengan kedua tanda kutip.
- Ini akan diabaikan oleh `interpreter` `JavaScript`.

Mengapa `string` dianggap `immutable` dalam `JavaScript`?

- Anda tidak dapat membuat `string` menggunakan `variables`.
- Setelah sebuah `string` dibuat, Anda tidak dapat mengubah karakternya secara langsung.
- `String` hanya dapat dibuat menggunakan `literals`.
- Anda dapat mengubah `string`, tetapi hanya melalui `global variables`.

---
[⬅️ Sebelumnya](../1-introduction-to-javascript/4-how-do-let-and-const-work.md) | [Selanjutnya ➡️](2-what-is-string-concatenation.md)
