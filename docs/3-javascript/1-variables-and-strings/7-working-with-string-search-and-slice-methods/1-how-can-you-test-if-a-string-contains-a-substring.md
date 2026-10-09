# Bagaimana Cara Menguji Apakah Sebuah String Memuat Substring?

Saat bekerja dengan `strings` dalam `JavaScript`, ada banyak kasus di mana Anda mungkin perlu memeriksa apakah sebuah `string` memuat `substring` tertentu, yang merupakan bagian lebih kecil dari `string` tersebut.

Sebagai contoh, Anda mungkin ingin memeriksa apakah masukan dari pengguna memuat kata atau karakter tertentu sebelum melakukan tindakan tertentu. Salah satu cara untuk mencapai ini adalah dengan menggunakan `method` `includes()`.

`Method` `includes()` digunakan untuk memeriksa apakah sebuah `string` memuat `substring` tertentu. Jika `substring` ditemukan di dalam `string`, `method` ini mengembalikan `true`, jika tidak, ia mengembalikan `false`.

Berikut adalah sintaks dasarnya:

```javascript
string.includes(searchValue);
```

Untuk sintaksnya, `searchValue` adalah `substring` yang ingin Anda cari di dalam `string`. Dan berikut adalah sebuah contoh:

```javascript
let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");

console.log(result);  // true
```

Dalam contoh ini, kata `awesome` ditemukan di dalam `string` `JavaScript is awesome!`, jadi `method` `includes()` mengembalikan `true`.

Penting untuk dicatat bahwa `method` `includes()` bersifat `case-sensitive`. Ini berarti pencocokan karakter yang tepat diperlukan, termasuk huruf besar/kecilnya.

Sebagai contoh:

```javascript
let phrase = "JavaScript is awesome!";
let result = phrase.includes("Awesome");

console.log(result);  // false
```

Karena `Awesome` (dengan huruf kapital `A`) tidak cocok dengan `awesome` (dengan huruf kecil `a`), hasilnya adalah `false`.

Anda juga dapat menggunakan `method` `includes()` untuk memeriksa `substring` mulai dari `index` tertentu dalam `string` dengan memberikan `parameter` kedua:

```javascript
let text = "Hello, JavaScript world!";
let result = text.includes("JavaScript", 7);

console.log(result);  // true
```

Di sini, pencarian untuk `substring` `JavaScript` dimulai dari posisi ke-7 dalam `string`, memastikan bahwa ia melewati karakter apa pun sebelum posisi ini.

`Method` `includes()` hanya mengembalikan hasil `true` atau `false`. Ini tidak memberikan informasi tentang di mana `substring` berada dalam `string` atau berapa kali ia muncul. Jika Anda memerlukan tingkat detail tersebut, `methods` lain seperti `method` `indexOf()` mungkin lebih cocok.

## Pertanyaan (Questions)

Apa yang dikembalikan oleh `method` `includes()` ketika sebuah `substring` ditemukan dalam sebuah `string`?

- `Index` dari `substring`.
- `Length` dari `substring`.
- `true`
- `false`

Manakah dari pernyataan berikut tentang `method` `includes()` yang benar?

- Ini bersifat `case-insensitive`.
- Ini bersifat `case-sensitive`.
- Ini menggantikan `substring` yang ditemukan dengan `value` lain.
- Ini mengembalikan jumlah kemunculan `substring`.

Apa yang akan dihasilkan oleh `code` berikut?

```javascript
let message = "JavaScript is great!";
let result = message.includes("script");
console.log(result);
```

- `true`
- `false`
- `undefined`
- Melempar sebuah `error`.

---
[⬅️ Sebelumnya](../6-working-with-string-character-methods/1-what-is-ascii-and-how-does-it-work-with-charcodeat-and-fromcharcode.md) | [Selanjutnya ➡️](2-how-can-you-extract-a-substring-from-a-string.md)
