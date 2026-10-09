# Apa Itu Template Literals, dan Apa Itu String Interpolation?

Dalam `JavaScript`, `template literals` adalah cara yang ampuh dan fleksibel untuk bekerja dengan `strings`. Tidak seperti `regular strings`, yang menggunakan tanda kutip tunggal (`'`) atau ganda (`"`), `template literals` didefinisikan dengan *backticks* (`` ` ``).

Mereka memungkinkan manipulasi `string` yang lebih mudah, termasuk menyematkan `variables` secara langsung di dalam sebuah `string`, sebuah fitur yang dikenal sebagai `string interpolation`.

`Template literals` mempermudah pembuatan `strings` yang mencakup beberapa baris atau menyertakan `expressions` (seperti `variables` atau bahkan `code` `JavaScript`) secara langsung di dalam `string`.

Berikut adalah contoh dari sebuah `template literal`:

```javascript
const name = "Alice";
const greeting = `Hello, ${name}!`;

console.log(greeting);
```

Perhatikan penggunaan *backticks* alih-alih tanda kutip tunggal atau ganda. Sintaks `${name}` adalah contoh dari `string interpolation`, di mana `value` dari `variable` `name` disisipkan langsung ke dalam `string`.

`String interpolation` memungkinkan Anda menyematkan `variables` dan `expressions` di dalam sebuah `string`. Ini adalah peningkatan signifikan dibandingkan metode lama, di mana Anda harus menggabungkan `strings` dan `variables` menggunakan `+ operator`.

Berikut adalah contoh penggunaan `string concatenation` dan `plus (+) operator`:

```javascript
const name = "Alice";
const age = 25;
const message = "My name is " + name + " and I am " + age + " years old.";
console.log(message); 
```

Dan berikut adalah contoh penggunaan `template literals` dan `string interpolation`:

```javascript
const name = "Alice";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message); 
```

Seperti yang Anda lihat, `string interpolation` dengan `template literals` jauh lebih bersih dan lebih mudah dibaca, terutama saat Anda bekerja dengan beberapa `variables`.

Fitur hebat lainnya dari `template literals` adalah bahwa mereka mendukung `multiline strings`. Dengan `regular strings`, Anda perlu menggunakan `escape characters` (`\n`) untuk membuat baris baru. Dengan `template literals`, Anda cukup menulis `string` di beberapa baris, dan pemformatannya tetap dipertahankan:

```javascript
let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;

console.log(poem);
```

Fitur lain dari `template literals` adalah mereka memungkinkan Anda untuk menyematkan `expressions` `JavaScript` secara langsung di dalam `string`, seperti dalam contoh ini:

```javascript
const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${
  (score / highestScore) * 100
}%.`;
console.log(output); 
```

`Template literals` sangat berguna ketika Anda perlu menyertakan `variables` atau `expressions` dalam `strings`, memformat `strings` yang kompleks, atau bekerja dengan teks multibaris. Mereka lebih ringkas dan mudah dibaca dibandingkan dengan `string concatenation` tradisional.

## Pertanyaan (Questions)

Manakah dari simbol berikut yang digunakan untuk mendefinisikan sebuah `template literal`?

- Tanda kutip tunggal (`'`)
- Tanda kutip ganda (`"`)
- *Backticks* (`` ` ``)
- Tanda kurung siku (`[]`)

Untuk apa `string interpolation` digunakan dalam `template literals`?

- Menggabungkan beberapa `strings` tanpa `variables` apa pun.
- Menyisipkan `variables` dan `expressions` secara langsung ke dalam sebuah `string`.
- Mengubah tipe sebuah `string` menjadi sebuah `number`.
- Membuat `functions` yang memanipulasi `strings`.

Manakah dari berikut ini yang merupakan fitur `template literals` yang membuatnya lebih cocok untuk menulis `multiline strings` dibandingkan dengan `regular strings`?

- `Template literals` secara otomatis mengubah semua huruf menjadi kapital.
- `Template literals` mempertahankan jeda baris (*line breaks*) tanpa memerlukan `escape characters`.
- `Template literals` memungkinkan operasi matematika pada `strings`.
- `Template literals` membutuhkan lebih sedikit memori untuk menyimpan `strings`.

---
[⬅️ Sebelumnya](2-how-do-you-create-a-newline-in-strings-and-escape-strings.md) | [Selanjutnya ➡️](4-how-can-you-find-the-position-of-a-substring-in-a-string.md)
