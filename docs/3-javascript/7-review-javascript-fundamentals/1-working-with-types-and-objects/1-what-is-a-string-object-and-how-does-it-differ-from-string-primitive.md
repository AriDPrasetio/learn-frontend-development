# Apa Itu String Object, dan Bagaimana Perbedaannya dengan String Primitive?

Pada modul-modul sebelumnya, Anda telah terbiasa bekerja dengan `string literal` seperti ini:

```javascript
const greeting = "Hello, World!";
```

Tetapi `JavaScript` juga memiliki `string object`. Baik `string object` maupun `string primitive` digunakan untuk menangani teks, namun keduanya berfungsi secara berbeda di balik layar (*under the hood*). Sebuah `string object` dibuat menggunakan `constructor function` `String`, yang membungkus nilai `primitive` ke dalam sebuah `object`. Berikut adalah cara Anda membuat sebuah `string object`:

```javascript
const greetingObject = new String("Hello, World!");

console.log(typeof greetingObject); // "object"
```

Ketika kita menggunakan operator `typeof`, kita dapat melihat bahwa hasilnya bertipe `object`, bukan bertipe `string`. Salah satu hal yang mungkin Anda tanyakan adalah bagaimana Anda dapat menggunakan `property` seperti `property` `.length` pada `string primitive`.

Ketika Anda menggunakan `property` `length` pada sebuah `string primitive`, `JavaScript` untuk sementara membungkus `string primitive` tersebut ke dalam sebuah `string object` untuk melakukan operasi tersebut. Inilah alasan mengapa Anda dapat menggunakan `property` `length` dan berbagai `method` seperti `repeat()`, `concat()`, dan `slice()`. Jenis-jenis `method` dan `property` ini disebut sebagai `instance method`, `instance property`, dan `static method`. Anda akan mempelajari cara kerjanya secara mendalam pada modul-modul mendatang.

Satu perbedaan utama antara `string object` dan `string primitive` adalah bagaimana kaitannya dengan memori dan performa. `String primitive` biasanya lebih hemat memori dan lebih cepat dibandingkan dengan `string object`. Meskipun Anda akan lebih sering bekerja dengan `string primitive` di dalam `code` Anda, tetap penting untuk memahami cara kerja `string object`.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa perbedaan utama antara `string primitive` dan `string object` dalam `JavaScript`?

- [ ] `String primitive` adalah `object`, sedangkan `string object` bukan.
- [x] `String primitive` lebih ringan dan lebih efisien, sedangkan `string object` menyediakan `property` dan `method` tambahan.
- [ ] `String object` tidak dapat mengakses `method` seperti `.toUpperCase()`.
- [ ] `String primitive` dapat mengubah nilainya setelah dibuat.

### Pertanyaan 2

Manakah dari pernyataan berikut yang menjelaskan dengan benar tentang `property` `.length` dari sebuah `string`?

- [ ] Mengubah nilai dari sebuah `string`.
- [x] Mengembalikan jumlah karakter dalam sebuah `string`.
- [ ] Hanya bekerja pada `string object`.
- [ ] Menambahkan karakter baru ke dalam `string`.

### Pertanyaan 3

Apakah output dari `code` berikut?

```javascript
let str = "JavaScript";
let objStr = new String("JavaScript");
console.log(str.length === objStr.length);
```

- [x] `true`
- [ ] `false`
- [ ] `undefined`
- [ ] Menyebabkan *error* (*throws an error*).

---
⬅️ Sebelumnya | [Selanjutnya ➡️](2-what-is-the-tostring-method-and-how-does-it-work.md)
