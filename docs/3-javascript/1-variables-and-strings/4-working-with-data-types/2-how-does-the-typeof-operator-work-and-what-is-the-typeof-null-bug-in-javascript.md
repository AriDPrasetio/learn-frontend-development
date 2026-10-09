# Bagaimana Cara Kerja typeof Operator, dan Apa Bug typeof null dalam JavaScript?

`typeof operator` dalam `JavaScript` adalah alat yang sederhana namun ampuh yang memungkinkan Anda melihat `data type` dari sebuah `variable` atau `value`. Ini selalu mengembalikan sebuah `string` yang menunjukkan tipenya.

Mari kita lihat beberapa contoh:

```javascript
let num = 42;
console.log(typeof num); // "number"
```

Dalam contoh pertama ini, kita telah membuat sebuah `variable` bernama `num` dan menetapkan angka `42` padanya. Saat Anda menggunakan `typeof operator` pada `variable` bernama `num`, itu akan mengembalikan `string` `"number"`.

Berikut adalah contoh lain penggunaan `typeof operator` pada `variable` bernama `isUserLoggedIn`:

```javascript
let isUserLoggedIn = true;
console.log(typeof isUserLoggedIn); // "boolean"
```

Saat Anda menggunakan `typeof operator` pada `variable` `isUserLoggedIn`, itu akan mengembalikan `string` `"boolean"` karena `boolean` `true` telah ditetapkan ke `variable` tersebut.

Menggunakan `typeof operator` bisa sangat berguna saat Anda melakukan `debugging` atau mencoba memahami jenis data apa yang sedang Anda gunakan dalam `code` Anda.

Namun, ada keanehan (*quirk*) yang terkenal dalam `JavaScript` terkait dengan `null`.

Mari kita lihat sebuah contoh:

```javascript
let exampleVariable = null;
console.log(typeof exampleVariable); // "object"
```

Dalam contoh ini, kita memiliki sebuah `variable` bernama `exampleVariable` dan telah menetapkan `value` `null` padanya. Namun ketika kita menggunakan `typeof operator`, itu mengembalikan `string` `"object"`.

Hal ini secara luas dianggap sebagai sebuah `bug` dalam `JavaScript`, yang berasal dari masa-masa awal perkembangannya. Alasan perilaku ini berakar pada cara `JavaScript` dirancang pada awalnya.

Ketika bahasa ini pertama kali diimplementasikan, nilai-nilai seperti `null` direpresentasikan sebagai tipe khusus dari `object`, yang mengarah pada hasil yang tidak terduga ini.

Sayangnya, hal ini telah menjadi bagian permanen dari bahasa tersebut, dan meskipun membingungkan, ini adalah sesuatu yang perlu Anda waspadai.

## Pertanyaan (Questions)

Apa yang dikembalikan oleh `typeof operator` saat digunakan pada sebuah `string` dalam `JavaScript`?

- `"string"`
- `"text"`
- `"character"`
- `"object"`

Mengapa `typeof null` dianggap sebagai sebuah `bug` dalam `JavaScript`?

- Ini mengembalikan `"null"` alih-alih `"undefined"`.
- Ini mengembalikan `"object"` alih-alih `"null"`.
- Ini tidak berfungsi pada `null`.
- Ini mengembalikan sebuah `error`.

Apa yang dikembalikan oleh `typeof operator` saat digunakan pada sebuah `number` dalam `JavaScript`?

- `"number"`
- `"integer"`
- `"numeric"`
- `"float"`

---
[⬅️ Sebelumnya](1-what-is-dynamic-typing-in-javascript-and-how-does-it-differ-from-statically-typed-languages.md) | [Selanjutnya ➡️](../5-working-with-strings-in-javascript/1-what-is-bracket-notation-and-how-do-you-access-characters-from-a-string.md)
