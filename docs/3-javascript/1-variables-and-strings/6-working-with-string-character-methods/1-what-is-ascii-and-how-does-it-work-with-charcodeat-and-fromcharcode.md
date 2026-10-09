# Apa Itu ASCII, dan Bagaimana Cara Kerjanya dengan charCodeAt() dan fromCharCode()?

Dalam pemrograman, memahami bagaimana karakter direpresentasikan sebagai angka adalah hal yang mendasar. Di sinilah `ASCII` berperan. `ASCII`, kependekan dari *American Standard Code for Information Interchange*, adalah standar `character encoding` yang digunakan dalam komputer untuk merepresentasikan teks. Ini menetapkan sebuah nilai numerik untuk setiap karakter, yang dikenali secara universal oleh mesin.

Dalam pelajaran ini, kita akan menjelajahi apa itu `ASCII`, bagaimana cara kerjanya, dan bagaimana `methods` `JavaScript` seperti `charCodeAt()` dan `fromCharCode()` berhubungan dengan `character encoding`. Meskipun `strings` `JavaScript` menggunakan `Unicode` (`UTF-16`) secara internal, nilai-nilai `ASCII` cocok dengan 128 karakter `Unicode` pertama, itulah sebabnya contoh berbasis `ASCII` berfungsi dalam `JavaScript`.

`ASCII` adalah sebuah sistem untuk menyandikan karakter seperti huruf, angka, dan simbol ke dalam nilai numerik. Setiap karakter dipetakan ke sebuah angka tertentu.

Sebagai contoh, huruf kapital `A` direpresentasikan oleh angka `65` dalam `ASCII`, sedangkan huruf kecil `a` direpresentasikan oleh `97`. Pengkodean ini memungkinkan komputer untuk menyimpan dan memanipulasi teks.

Standar `ASCII` mencakup 128 karakter termasuk:

- Huruf bahasa Inggris besar dan kecil (`A-Z`, `a-z`).
- Angka (`0-9`).
- Tanda baca dan simbol umum (`!`, `@`, `#`, dan seterusnya).
- Karakter kontrol (seperti `newline` dan `tab`).

Dalam `JavaScript`, Anda dapat mengakses kode numerik dari sebuah karakter menggunakan `method` `charCodeAt()`. `Method` ini mengembalikan `UTF-16 code unit` dari karakter pada `index` yang ditentukan. Untuk 128 karakter pertama, nilai ini cocok dengan kode `ASCII`.

Mari kita lihat sebuah contoh:

```javascript
let letter = "A";
console.log(letter.charCodeAt(0));  // 65
```

Dalam contoh ini, `A` adalah karakter pertama dari `string`, dan memanggil `charCodeAt(0)` mengembalikan kode numeriknya (yang cocok dengan nilai `ASCII`-nya untuk karakter Latin dasar), yaitu `65`.

Anda juga dapat menggunakan `method` ini dengan karakter lain untuk menemukan nilai kode numeriknya:

```javascript
let symbol = "!";
console.log(symbol.charCodeAt(0));  // 33
```

Di sini, kode numerik untuk tanda seru `!` dikembalikan sebagai `33` (yang cocok dengan nilai `ASCII`-nya).

Sementara `charCodeAt()` membantu Anda mengambil kode numerik dari sebuah karakter, `method` `fromCharCode()` memungkinkan Anda melakukan hal yang sebaliknya: mengonversi sebuah `UTF-16 code unit` (yang cocok dengan `ASCII` untuk karakter dasar) ke dalam karakter yang sesuai.

Mari kita lihat ini dalam aksi:

```javascript
let char = String.fromCharCode(65);
console.log(char);  //  A
```

Dalam contoh ini, `fromCharCode(65)` mengonversi kode numerik `65` (yang cocok dengan nilai `ASCII` untuk `A`) kembali ke karakter `A`.

Contoh lain adalah mengonversi angka `97` ke huruf kecil yang sesuai:

```javascript
let char = String.fromCharCode(97);
console.log(char);  // a
```

`Methods` ini sangat berguna ketika Anda perlu memanipulasi atau membandingkan karakter berdasarkan nilai kode numeriknya.

Misalnya, Anda dapat menggunakan `charCodeAt()` untuk memeriksa apakah suatu karakter berupa huruf kapital, huruf kecil, atau angka dengan membandingkan nilai `ASCII`-nya.

Di sisi lain, `fromCharCode()` dapat digunakan untuk menghasilkan karakter secara dinamis dari kode `ASCII`-nya.

## Pertanyaan (Questions)

Apa yang dikembalikan oleh `method` `charCodeAt()` ketika digunakan pada sebuah `string` dalam `JavaScript`?

- Jumlah karakter dalam `string`.
- `Index` dari sebuah karakter dalam `string`.
- `UTF-16 code unit` dari sebuah karakter pada `index` yang ditentukan.
- Representasi heksadesimal dari sebuah karakter.

Apa yang akan dihasilkan oleh `code` berikut?

```javascript
console.log(String.fromCharCode(66));
```

- `B`
- `b`
- `6`
- `A`

Manakah dari berikut ini yang merupakan contoh bagaimana `character encoding` berguna dalam pemrograman?

- Untuk memeriksa apakah sebuah `value` bernilai `null` atau `undefined`.
- Untuk menghitung `length` dari sebuah `string`.
- Untuk mengonversi sebuah angka menjadi `floating-point value`.
- Untuk memanipulasi karakter berdasarkan nilai numeriknya.

---
[⬅️ Sebelumnya](../5-working-with-strings-in-javascript/5-what-is-the-prompt-method-and-how-does-it-work.md) | [Selanjutnya ➡️](../7-working-with-string-search-and-slice-methods/1-how-can-you-test-if-a-string-contains-a-substring.md)
