# Bagaimana Cara Menemukan Posisi Substring dalam Sebuah String?

Saat bekerja dengan `strings` dalam `JavaScript`, mungkin ada saatnya Anda perlu menemukan posisi `substring` tertentu di dalam `string` yang lebih besar.

Sebuah `substring` adalah urutan karakter yang muncul di dalam sebuah `string` yang lebih besar. Sebagai contoh, dalam `string` `hello world`, `hello` dan `world` adalah `substrings`.

Untuk menemukan posisi sebuah `substring` di dalam sebuah `string`, Anda dapat menggunakan `method` `indexOf()`. `Method` `indexOf()` dalam `JavaScript` memungkinkan Anda mencari sebuah `substring` di dalam sebuah `string`.

Jika `substring` ditemukan, `indexOf()` mengembalikan `index` (atau posisi) dari kemunculan pertama `substring` tersebut. Jika `substring` tidak ditemukan, `indexOf()` mengembalikan `-1`, yang menunjukkan bahwa pencarian tidak berhasil.

`Method` `indexOf()` menerima dua `arguments`: yang pertama adalah `substring` yang ingin Anda temukan di dalam `string` yang lebih besar, dan yang kedua adalah opsi posisi awal untuk pencarian. Jika Anda tidak memberikan posisi awal, pencarian akan dimulai dari awal `string`.

Dalam konteks ini, sebuah `argument` adalah sebuah `value` yang Anda berikan ke sebuah `function` atau `method` saat Anda memanggilnya, memungkinkan `function` atau `method` tersebut untuk melakukan tugasnya menggunakan informasi spesifik yang Anda berikan. Anda akan mempelajari lebih lanjut tentang `arguments` pada pelajaran-pelajaran mendatang.

Berikut adalah contoh penggunaan `method` `indexOf()` untuk menemukan posisi dari `string` `awesome`:

```javascript
let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome!");
console.log(position); // 14
```

Dalam contoh ini, kata `awesome` dimulai pada `index` `14` dalam `string` `JavaScript is awesome!`, jadi `method` `indexOf()` mengembalikan `14`.

Sekarang, mari kita lihat apa yang terjadi ketika `substring` tidak ditemukan:

```javascript
let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("fantastic");
console.log(position); // -1
```

Karena kata `fantastic` tidak muncul dalam `string`, `method` ini mengembalikan `-1`.

Anda juga dapat menentukan di mana harus mulai mencari di dalam `string` dengan memberikan `argument` kedua ke `indexOf()`. Berikut adalah sebuah contoh:

```javascript
let sentence = "JavaScript is awesome, and JavaScript is powerful!";
let position = sentence.indexOf("JavaScript", 10);
console.log(position); // 27
```

Dalam hal ini, pencarian untuk `JavaScript` dimulai setelah karakter ke-10, sehingga kemunculan kedua dari `JavaScript` ditemukan pada `index` `27`.

Penting untuk dicatat bahwa `method` `indexOf()` bersifat `case sensitive`.

Dalam contoh ini, berikut akan mengembalikan `-1` karena huruf kapital `F` tidak ditemukan dalam `string` `freeCodeCamp`.

```javascript
console.log("freeCodeCamp".indexOf("F")) // -1
```

Menggunakan `indexOf()` bisa sangat berguna ketika Anda perlu memeriksa apakah sebuah `substring` ada dalam sebuah `string` dan menentukan posisinya untuk operasi lebih lanjut.

## Pertanyaan (Questions)

Apa yang dikembalikan oleh `method` `indexOf` jika `substring` tidak ditemukan di dalam `string`?

- `0`
- `Length` dari `string`.
- `-1`
- Posisi karakter pertama.

Bagaimana Anda dapat menggunakan `indexOf` untuk mencari sebuah `substring` mulai dari posisi tertentu di dalam `string`?

- Dengan menggunakan `argument` pertama untuk menentukan posisi awal.
- Dengan menggunakan `argument` kedua untuk menentukan posisi awal.
- Dengan menggunakan `method` tambahan.
- Dengan mengubah `string` terlebih dahulu.

Apa yang akan dikembalikan oleh `indexOf()` dalam contoh ini?

```javascript
const str = "I am learning JavaScript.";
str.indexOf("Javascript");
```

- `14`
- `2`
- `-1`
- `13`

---
[⬅️ Sebelumnya](3-what-are-template-literals-and-what-is-string-interpolation.md) | [Selanjutnya ➡️](5-what-is-the-prompt-method-and-how-does-it-work.md)
