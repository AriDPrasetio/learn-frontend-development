# Apa Itu Data Type, dan Apa Saja Berbagai Data Type di JavaScript?

Dalam `JavaScript`, sebuah `data type` adalah jenis `value` yang Anda simpan, seperti angka atau potongan teks.

Sebuah `variable` adalah wadah bernama yang menyimpan sebuah `value` dari `data type` tertentu, memungkinkan Anda untuk mereferensikan dan memanipulasinya di seluruh `code` Anda.

Anda mungkin ingat saat di kelas matematika bekerja dengan variabel seperti ini:

```text
x = 2
y = 4

x + y
```

Anda dapat membuat variabel seperti `x` dan `y`, lalu mereferensikannya di seluruh program Anda serta melakukan operasi matematika seperti penjumlahan. Ini adalah konsep yang serupa dalam pemrograman. Anda dapat membuat nama `variable` Anda sendiri dan menetapkan `value` ke dalamnya. `Value` ini akan berupa `data type` yang berbeda.

`Data type` membantu program memahami jenis data yang sedang dikerjakannya, apakah itu angka, teks, atau hal lainnya.

`JavaScript` memiliki beberapa `data type` dasar yang akan Anda gunakan dalam program Anda. Kita akan menjelajahi setiap `data type` secara lebih rinci pada pelajaran-pelajaran mendatang. Untuk saat ini, berikut adalah pengantar singkat mengenai berbagai `data type` dalam `JavaScript`.

## Numbers

`Data type` pertama yang akan kita lihat adalah tipe `Number`.

Sebuah `Number` merepresentasikan baik `integers` maupun `floating-point values`. Contoh dari `integers` meliputi `7`, `19`, dan `90`.

> [!NOTE]
> `console.log()` adalah sebuah `function` yang menampilkan informasi ke `console`, yang merupakan bagian dari `web browser` Anda yang digunakan untuk `debugging` `code`. Anda akan mempelajari lebih lanjut tentang `console.log()` pada pelajaran-pelajaran mendatang. Selain itu, simbol `//` digunakan untuk menambahkan `comments` pada `code` Anda. `Comments` adalah catatan untuk diri Anda sendiri atau programmer lain yang diabaikan saat `code` dijalankan.

Aktifkan editor interaktif dan cobalah mengubah beberapa bilangan bulat (`integers`) untuk melihat pembaruannya di `console`.

```javascript
// Examples of integers
console.log(3);
console.log(5);
console.log(-67);
```

Sebuah `floating point number` adalah angka dengan titik desimal. Contoh dari `floating point numbers` meliputi `3.14` dan `5.2`.

```javascript
// Examples of floating point numbers
console.log(3.14);
console.log(7.2);
console.log(-14.5);
```

## Strings

`Data type` berikutnya adalah `String`.

Sebuah `String` adalah urutan karakter, atau teks, yang diapit tanda kutip (`quotes`). Berikut adalah contoh `string` menggunakan tanda kutip ganda:

```javascript
console.log("I love to code!");
```

Berikut adalah contoh yang menggunakan tanda kutip tunggal:

```javascript
console.log('I love to code!');
```

Sering kali Anda akan menggunakan `string` untuk merepresentasikan nama, label, pesan peringatan (`alert messages`), dan sebagainya.

## Booleans

`Data type` lain yang digunakan dalam `JavaScript` adalah tipe `Boolean`.

Sebuah `Boolean` merepresentasikan salah satu dari dua `value`: `true` atau `false`. Sebagai contoh, sebuah program mungkin memeriksa apakah pengguna sudah masuk/login (`true`) atau belum (`false`) dan mengubah halaman berdasarkan hal tersebut. Jika pengguna sudah masuk, Anda mungkin ingin menampilkan halaman dasbor kepada mereka. Jika tidak, Anda akan ingin menampilkan halaman login kepada mereka.

## undefined dan null

Dua `data type` berikutnya yang digunakan dalam `JavaScript` adalah `undefined` dan `null`.

`undefined` berarti sebuah `variable` telah dideklarasikan tetapi belum diberi sebuah `value`. Anda akan mempelajari lebih lanjut mengenai ini pada pelajaran berikutnya.

`null` berarti `variable` tersebut telah sengaja disetel ke "tidak ada apa-apa" dan tidak menampung `value` apa pun. Kita akan menjelajahi lebih lanjut bagaimana cara kerjanya pada pelajaran-pelajaran mendatang.

## Object, Symbol, dan BigInt

Tiga `data type` terakhir lebih kompleks secara alami. Ini adalah `Object`, `Symbol`, dan `BigInt`.

Sebuah `Object` adalah kumpulan pasangan kunci-nilai (`key-value pairs`).

```javascript
{
  name: "Alice",
  age: 30
};
```

`Object` sangat bagus untuk mengelompokkan informasi terkait menjadi satu. Anda akan mempelajari lebih lanjut tentang cara bekerja dengan objek pada modul mendatang.

Sebuah `Symbol` adalah jenis `value` khusus dalam `JavaScript` yang selalu unik dan tidak dapat diubah. Ini sering digunakan untuk membuat label atau pengidentifikasi unik (`identifiers`) untuk `properties`:

```javascript
Symbol('mySymbol');
```

`BigInt` digunakan untuk angka yang sangat besar yang melebihi batas tipe `Number`:

```javascript
1234567890123456789012345678901234567890n;
```

Dalam contoh ini, kita membuat sebuah `BigInt` dengan menambahkan `n` di akhir angka yang sangat besar.

`Symbol` dan `BigInt` adalah dua tipe yang lebih jarang digunakan, namun tetap penting untuk diketahui.

Memahami `data type` ini membantu Anda menangani dan bekerja dengan berbagai jenis data dalam program Anda, karena setiap tipe memiliki karakteristik dan perilakunya masing-masing.

## Pertanyaan (Questions)

Manakah dari berikut ini yang merupakan `data type` `string`?

- `"Hello!"`
- `42`
- `false`
- `null`

`Data type` apa yang merepresentasikan sebuah `value` yang bernilai `true` atau `false`?

- `Number`
- `String`
- `Boolean`
- `undefined`

Jika sebuah `variable` telah dideklarasikan tetapi belum diberi sebuah `value`, apa `data type`-nya?

- `String`
- `Number`
- `undefined`
- `null`

---
[⬅️ Sebelumnya](1-what-is-javascript.md) | [Selanjutnya ➡️](3-what-are-variables.md)
