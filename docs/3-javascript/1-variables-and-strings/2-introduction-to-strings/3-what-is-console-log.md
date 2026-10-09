# Untuk Apa console.log Digunakan, dan Bagaimana Cara Kerjanya?

Pelajaran-pelajaran sebelumnya telah memperkenalkan Anda pada `console.log()`, tetapi pelajaran ini akan menyelami lebih dalam tentang tujuan dan penggunaannya.

Dalam `JavaScript`, `console.log()` adalah alat yang sederhana namun hebat yang digunakan untuk menampilkan pesan atau mengeluarkan informasi ke `browser's console`. Ini sebagian besar digunakan oleh para `developers` untuk men-`debug` dan memeriksa `code` saat mengerjakan program mereka.

Anda dapat menggunakan `console.log()` untuk mencatat teks atau `variables` ke `console` dan memastikan `code` Anda berjalan dengan benar.

Untuk menggunakan `console.log()`, Anda memanggil `method` ini dengan `value` atau pesan yang ingin Anda tampilkan di dalam tanda kurung (`parentheses`). Berikut beberapa contohnya:

```javascript
console.log("Hello, world!");

let num = 5;
console.log(num); // 5
```

Contoh pertama mencetak `Hello, world!` di `browser's console`, sedangkan contoh kedua mencetak `value` `5`.

Berikut adalah contoh lain saat bekerja dengan `console.log()`:

```javascript
let name = "Alice";
console.log("Hello, " + name + "!"); // Hello, Alice!
```

Anda juga dapat meneruskan beberapa `values` ke `console.log()` yang dipisahkan dengan koma. Sebagai contoh:

```javascript
let name = "Alice";
let age = 25;
console.log("Name:", name, "Age:", age); // Name: Alice Age: 25
```

Ini sangat membantu untuk mencatat beberapa informasi sekaligus.

`Method` `console.log()` membantu Anda memantau `code` Anda saat berjalan, membuatnya lebih mudah untuk menemukan kesalahan dan memahami bagaimana program Anda berperilaku.

## Pertanyaan (Questions)

Apa yang dilakukan `method` `console.log()` dalam `JavaScript`?

- Ini mengaudit `code` Anda untuk menemukan `error` dan menampilkan hasilnya di `browser console`.
- Ini digunakan untuk mencatat data dan menampilkan `output` di `browser console`.
- Ini menyimpan `values` di database serta di `browser console`.
- Ini mengubah konten `HTML` pada halaman dan menampilkan perubahannya di `browser console`.

Apa yang akan dicatat ke `console`?

```javascript
const age = 10;
console.log(age);
```

- `10`
- `"10"`
- `age`
- `"age"`

Mengapa `console.log()` bermanfaat saat membangun aplikasi web (`web applications`)?

- Ini biasanya digunakan untuk memeriksa kinerja aplikasi dan melihat hasilnya di `console`.
- Ini biasanya digunakan oleh para `developers` untuk `debugging` dan memeriksa `values` atau `expressions` dalam `code` mereka selama pengembangan.
- Ini biasanya digunakan untuk memeriksa `linting errors` dalam `code` Anda dan menampilkan kesalahan tersebut di `console`.
- Ini biasanya digunakan untuk memastikan bahwa `code` `JavaScript` Anda mematuhi `best practices`.

---
[⬅️ Sebelumnya](2-what-is-string-concatenation.md) | [Selanjutnya ➡️](../3-understanding-code-clarity/1-what-is-the-role-of-semicolons.md)
