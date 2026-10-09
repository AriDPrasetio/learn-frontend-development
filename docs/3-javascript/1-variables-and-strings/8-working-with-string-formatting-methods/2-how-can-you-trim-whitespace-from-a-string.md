# Bagaimana Cara Menghapus Spasi Putih (Whitespace) dari Sebuah String?

Saat bekerja dengan `strings` dalam `JavaScript`, adalah hal yang umum menemukan spasi putih (`whitespace`) yang tidak diinginkan di awal atau akhir sebuah `string`. `Whitespace` dapat mengganggu operasi seperti perbandingan, penyimpanan, atau tampilan, itulah mengapa penting untuk mengetahui cara menghapusnya secara efisien.

Dalam pelajaran ini, kita akan menjelajahi bagaimana Anda dapat memotong `whitespace` menggunakan `methods` `trim()`, `trimStart()`, dan `trimEnd()` milik `JavaScript`.

`Whitespace` mengacu pada spasi, tab, atau jeda baris yang terjadi dalam sebuah `string` tetapi bukan merupakan karakter yang terlihat. Sebagai contoh:

```javascript
let greeting = "   Hello, world!   ";
```

Dalam hal ini, terdapat spasi sebelum dan sesudah teks yang terlihat, `Hello, world!`.

`Method` `trim()` adalah cara yang paling umum digunakan untuk menghapus `whitespace` dari awal dan akhir sebuah `string`. Berikut adalah sebuah contoh:

```javascript
let message = "   Hello!   ";
console.log(message); // "   Hello!   "
let trimmedMessage = message.trim();
console.log(trimmedMessage);  // "Hello!"
```

Dalam kasus ini, `method` `trim()` menghapus semua spasi di awal (*leading*) dan akhir (*trailing*), hanya menyisakan `Hello!`. Perhatikan bahwa `whitespace` apa pun di dalam `string` (misalnya di antara kata-kata) tidak tersentuh oleh `trim()`.

Terkadang, Anda mungkin hanya ingin menghapus `whitespace` dari awal atau akhir sebuah `string`, tetapi tidak keduanya. Di sinilah `trimStart()` dan `trimEnd()` berperan.

`trimStart()` menghapus `whitespace` dari awal `string`.

```javascript
let greeting = "   Hello!   ";
console.log(greeting);  // "   Hello!   "
let trimmedStart = greeting.trimStart();
console.log(trimmedStart);  // "Hello!   "
```

`trimEnd()` menghapus `whitespace` dari akhir `string`.

```javascript
let greeting = "   Hello!   ";
console.log(greeting);  // "   Hello!   "
let trimmedEnd = greeting.trimEnd();
console.log(trimmedEnd);  // "   Hello!"
```

`Methods` ini memberi Anda kontrol yang lebih tepat atas bagian `string` mana yang ingin Anda bersihkan.

Singkatnya, memotong `whitespace` adalah bagian penting dari bekerja dengan `strings` dalam `JavaScript`. Apakah Anda ingin membersihkan data masukan (`input data`) atau memastikan perbandingan `string` yang konsisten, Anda dapat menggunakan `trim()` untuk menghapus `whitespace` dari kedua sisi `string`, atau menggunakan `trimStart()` dan `trimEnd()` untuk menargetkan sisi tertentu.

## Pertanyaan (Questions)

Apa yang dilakukan `method` `trim()` pada sebuah `string` dalam `JavaScript`?

- Menghapus semua spasi di dalam sebuah `string`.
- Menghapus semua `whitespace` dari awal dan akhir sebuah `string`.
- Menghapus hanya spasi di antara kata-kata.
- Mengganti semua karakter dalam sebuah `string` dengan `whitespace`.

`Method` mana yang akan Anda gunakan jika Anda hanya ingin menghapus `whitespace` dari awal sebuah `string`?

- `trim()`
- `trimEnd()`
- `trimStart()`
- `replace()`

Apa yang akan menjadi `output` dari `code` berikut?

```javascript
let str = "   Code   ";
console.log(str.trimEnd());
```

- `"Code"`
- `"   Code"`
- `"Code   "`
- `" Code "`

---
[⬅️ Sebelumnya](1-how-can-you-change-the-casing-for-a-string.md) | [Selanjutnya ➡️](../9-working-with-string-modification-methods/1-how-can-you-replace-parts-of-a-string-with-another.md)
