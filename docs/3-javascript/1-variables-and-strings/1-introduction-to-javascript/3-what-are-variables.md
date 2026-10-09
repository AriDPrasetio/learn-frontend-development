# Apa Itu Variable, dan Apa Saja Pedoman Penamaan Variable JavaScript?

## Apa Itu Variable dalam JavaScript

Dalam `JavaScript`, `variable` bertindak sebagai wadah untuk menyimpan data yang dapat Anda akses dan modifikasi di seluruh program Anda.

Anda dapat menganggap `variable` sebagai kotak yang menampung nilai (`values`). Dengan `variable`, Anda dapat melacak hal-hal seperti angka atau teks dan merujuk ke `value` ini kapan pun Anda membutuhkannya dalam program Anda.

## Mendeklarasikan Variable dengan let

Salah satu cara untuk mendeklarasikan sebuah `variable` dalam `JavaScript` adalah menggunakan `keyword` `let`. Anda akan mempelajari lebih lanjut tentang `keyword` `let` serta cara-cara lain untuk mendeklarasikan `variable` pada pelajaran-pelajaran mendatang.

Berikut adalah contoh penggunaan `let` untuk mendeklarasikan sebuah `variable` bernama `age`:

```javascript
let age;
```

Saat ini, `variable` `age` belum memiliki `value` yang ditetapkan padanya. Jika Anda mencoba menggunakannya, itu akan mengembalikan `undefined`, yang berarti tidak memiliki `value`.

Berikut adalah sebuah contoh.

> [!NOTE]
> `console.log()` adalah sebuah `function` yang menampilkan informasi ke `console`, yang merupakan bagian dari `web browser` Anda yang digunakan untuk `debugging` `code`. Anda akan mempelajari lebih lanjut tentang `console.log()` pada pelajaran-pelajaran mendatang. Selain itu, simbol `//` digunakan untuk menambahkan `comments` pada `code` Anda. `Comments` adalah catatan untuk diri Anda sendiri atau programmer lain yang diabaikan saat `code` dijalankan.

```javascript
let age;
console.log(age); // undefined
```

## Menetapkan Nilai ke Variable

Untuk menetapkan sebuah `value` ke sebuah `variable`, Anda perlu menggunakan `assignment operator` seperti ini:

```javascript
let age = 25;
```

Sekarang ketika Anda menggunakan `variable` `age`, itu akan mengembalikan `value` `25`.

```javascript
let age = 25;
console.log(age); // 25
```

`Assignment operator` terlihat seperti tanda sama dengan (`=`) tetapi tidak memeriksa kesetaraan (`equality`). Anda akan mempelajari tentang operator yang benar untuk memeriksa kesetaraan pada pelajaran-pelajaran mendatang.

## Menugaskan Ulang Nilai Variable (Reassigning Variable Values)

`Assignment operator` digunakan untuk menetapkan sebuah `value` ke sebuah `variable`. Proses penetapan sebuah `value` ke sebuah `variable` ini dikenal sebagai `initialization`.

Salah satu keuntungan menggunakan `keyword` `let` untuk mendeklarasikan `variable` adalah Anda dapat menetapkan ulang (`reassign`) `value` padanya. Dalam pemrograman, `reassignment` berarti memberikan `value` baru ke sebuah `variable` yang sudah memiliki `value`.

Berikut adalah contoh penetapan ulang `value` untuk `variable` `age`.

```javascript
let age = 25;
console.log(age); // 25
age = 30;
console.log(age); // 30
```

Sekarang `variable` `age` menampung `value` `30`. Perhatikan bahwa `keyword` `let` tidak diperlukan lagi karena `variable` `age` sudah dideklarasikan, jadi tidak perlu mendeklarasikannya untuk kedua kalinya.

Saat menggunakan `reassignment`, Anda hanya perlu mereferensikan nama `variable`-nya. `Reassignment` berguna karena memungkinkan Anda memperbarui dan mengubah `value` yang disimpan dalam sebuah `variable` saat program Anda berjalan. Contoh yang baik dari ini adalah memperbarui poin dalam sebuah game.

## Menamai Variable

Menamai `variable` mungkin terlihat sederhana, tetapi ada beberapa aturan dan praktik terbaik untuk memastikan `code` Anda mudah dibaca dan berfungsi.

Nama `variable` Anda harus mendeskripsikan apa yang direpresentasikan oleh data tersebut. Sebagai contoh, alih-alih menggunakan nama seperti `x`, nama yang lebih deskriptif seperti `age` atau `points` membuat `code` Anda lebih mudah dipahami.

```javascript
// Bad variable names
let x = 10;
let y = "John";

// Good variable names
let age = 10;
```

## Aturan untuk Nama Variable

`Variable` dalam `JavaScript` harus dimulai dengan huruf, garis bawah (`_`), atau tanda dolar (`$`). Mereka tidak boleh dimulai dengan angka.

```javascript
// Valid variable names
let age;
let _score;
let $total;

// Invalid variable names
let 1stPlace; // starts with a number
```

## Case Sensitivity

Nama `variable` bersifat `case-sensitive`, artinya kata `age` dengan semua huruf kecil dan kata `Age` dengan huruf kapital `A` dianggap sebagai `variable` yang berbeda.

```javascript
let age = 25;
let Age = 30;
console.log(age); // 25
console.log(Age); // 30
```

## Menggunakan camelCase

Inilah mengapa penting untuk berpegang pada konvensi penamaan yang konsisten seperti `camelCase`. `camelCase` adalah di mana kata pertama seluruhnya menggunakan huruf kecil dan setiap kata berikutnya dimulai dengan huruf kapital.

Berikut adalah contoh penggunaan konvensi penamaan `camelCase` untuk sebuah `variable`:

```javascript
let thisIsCamelCase;
let anotherExampleVariable;
let freeCodeCampStudents;
```

## Reserved Keywords dan Karakter Khusus

Ada `keywords` tertentu dalam `JavaScript` yang tidak dapat Anda gunakan sebagai nama `variable`, seperti `let`, `const`, `function`, atau `return`, karena kata-kata tersebut dicadangkan (`reserved`) untuk bahasa itu sendiri.

Anda juga harus menghindari penggunaan karakter khusus seperti tanda seru (`!`) atau simbol *at* (`@`) dalam nama `variable` Anda. Yang terbaik adalah menjaga nama `variable` tetap terbaca dengan menggunakan huruf, angka, garis bawah, atau tanda dolar.

Dengan mengikuti pedoman ini, `code` Anda akan lebih bersih dan lebih mudah dikelola seiring bertambahnya kompleksitasnya.

## Pertanyaan (Questions)

`Keyword` apa yang akan Anda gunakan untuk mendeklarasikan sebuah `variable` dalam `JavaScript` ketika Anda berencana untuk memperbarui `value`-nya nanti?

- `set`
- `let`
- `declare`
- `variable`

Manakah dari berikut ini yang merupakan nama `variable` yang valid dalam `JavaScript`?

- `1stPlace`
- `total-score!`
- `player1Score`
- `const`

Mengapa penting untuk menggunakan nama yang deskriptif untuk `variable` Anda?

- Ini diwajibkan oleh `JavaScript`.
- Nama deskriptif membuat `code` Anda lebih mudah dipahami dan dipelihara.
- Nama deskriptif membuat `code` berjalan lebih cepat.
- Nama deskriptif memungkinkan Anda menghindari penggunaan `let`.

---
[⬅️ Sebelumnya](2-what-is-a-data-type.md) | [Selanjutnya ➡️](4-how-do-let-and-const-work.md)
