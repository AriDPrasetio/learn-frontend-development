# Bagaimana Cara Kerja Atribut Async di Dalam Elemen Script, dan Bagaimana Perbedaannya dengan Atribut Defer?

Atribut `async` dan `defer` pada `element` `script` `HTML` memainkan peran penting dalam bagaimana file `JavaScript` dimuat dan dieksekusi di halaman web. Memahaminya dapat meningkatkan performa situs web dan pengalaman pengguna (*user experience*) Anda. Ketika Anda menyertakan sebuah `script` di file `HTML` Anda, bentuknya terlihat seperti ini:

```html
<script src="example.js"></script>
```

Ketika *browser* menemukan tag `script` ini, ia akan menghentikan penguraian (*parsing*) `HTML`, mengunduh `script`, mengeksekusinya, dan kemudian melanjutkan penguraian `HTML`. Hal ini dapat memperlambat pemuatan halaman web Anda, terutama jika Anda memiliki `script` yang besar.

Di sinilah atribut `async` dan `defer` berperan. Keduanya menyediakan cara untuk memuat `script` secara lebih efisien.

Mari kita mulai dengan atribut `async`:

```html
<script src="example.js" async></script>
```

Dengan menambahkan atribut `async` ke tag `script`, *browser* akan terus menguraikan `HTML` saat `script` sedang diunduh. Setelah `script` selesai diunduh sepenuhnya, *browser* akan menjeda penguraian `HTML`, mengeksekusi `script`, lalu melanjutkan kembali penguraian `HTML`. Hal ini dapat mempercepat pemuatan halaman secara signifikan.

Penting untuk dicatat bahwa `script` `async` dieksekusi segera setelah selesai diunduh, yang berarti urutan eksekusinya mungkin tidak sesuai dengan urutan yang kita inginkan. Di sinilah atribut `defer` hadir sebagai solusi. Mari kita lihat seperti apa atribut `defer` tersebut:

```html
<script src="example.js" defer></script>
```

Atribut `defer` mirip dengan atribut `async`. Namun, `script` `defer` tidak langsung dieksekusi setelah selesai diunduh. Sebaliknya, mereka menunggu hingga penguraian `HTML` selesai sepenuhnya. Selain itu, `script` `defer` dieksekusi sesuai urutan kemunculannya di dalam `code` `HTML`.

Singkatnya, gunakan `async` untuk `script` yang urutan eksekusinya tidak menjadi masalah, dan gunakan `defer` ketika Anda perlu memastikan bahwa `script` berjalan dalam urutan yang tepat. Kedua atribut ini dapat meningkatkan waktu pemuatan halaman secara signifikan dengan memungkinkan *browser* terus menguraikan `HTML` sementara file `script` diunduh di latar belakang (*background*).

## Pertanyaan (Questions)

Apa keuntungan menggunakan atribut `defer` dalam sebuah tag `<script>`?

- [ ] It helps differentiate the script from async scripts.
- [ ] It reduces memory usage during page load.
- [x] It can improve the overall page loading performance.
- [ ] Lets developers set a custom delay time before scripts run.

Dalam urutan apa skrip berikut ini akan dieksekusi?

```html
<script src="1.js" defer></script>
<script src="2.js" async></script>
<script src="3.js" defer></script>
```

- [ ] `1.js`, `2.js`, `3.js`.
- [ ] `2.js`, `1.js`, `3.js`.
- [x] The order is unpredictable.
- [ ] `1.js`, `3.js`, `2.js`.

Pernyataan manakah tentang `async` dan `defer` yang benar?

- [ ] `async` scripts are executed in the order they appear in the HTML.
- [ ] `defer` scripts are executed as soon as they are downloaded.
- [x] `async` scripts can be executed before the HTML is fully parsed.
- [ ] `defer` scripts are executed before any async scripts.

---
[⬅️ Sebelumnya](1-what-is-asynchronous-javascript-and-how-does-it-differ-from-synchronous-javascript.md) | [Selanjutnya ➡️](3-what-is-the-fetch-api-and-what-are-common-types-of-resources-that-are-fetched-from-the-network.md)
