# Apa Itu Callback Function, dan Bagaimana Cara Kerjanya dengan Method forEach?

Dalam `JavaScript`, sebuah `callback function` adalah sebuah `function` yang diteruskan sebagai sebuah `argument` ke `function` lainnya, sehingga `outer function` dapat menjalankannya (*invoke*) pada titik waktu tertentu.

Konsep ini sangat mendasar untuk memahami banyak aspek dalam `JavaScript`, termasuk bagaimana cara kerja `method` `forEach`.

Mari kita mulai dengan memahami apa itu `callback function` dalam konteks sederhana.

Bayangkan Anda memiliki sebuah `function`, dan di dalam `function` tersebut Anda ingin melakukan sesuatu beberapa kali. Alih-alih menulis semua `code` dalam satu `function` yang besar, Anda dapat meneruskan `function` kedua (`callback`) untuk dieksekusi kapan pun Anda memerlukan hal spesifik tersebut dilakukan. Ini memungkinkan penulisan `code` yang lebih fleksibel dan modular.

Sekarang, mari kita perkenalkan `method` `forEach`. `forEach` adalah sebuah `method` bawaan untuk `array` dalam `JavaScript`. `Method` ini memungkinkan Anda untuk melakukan iterasi pada setiap elemen di dalam sebuah `array` dan menjalankan suatu operasi pada setiap elemen tersebut. Operasi yang ingin Anda jalankan didefinisikan dalam sebuah `callback function` yang Anda berikan ke `forEach`.

Berikut adalah contoh bagaimana `forEach` bekerja dengan sebuah `callback function`:

```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number * 2);
});
```

Dalam contoh ini, kita memiliki sebuah `array` angka. Kita menggunakan `method` `forEach` pada `array` ini, dan kita memberikan sebuah `callback function` sebagai `argument` ke `forEach`.

`Callback function` ini menerima satu `parameter`, yang mewakili setiap elemen di dalam `array`. `Method` `forEach` akan memanggil `callback function` ini satu kali untuk setiap elemen di dalam `array`.

Dalam kasus ini, `callback function` mengalikan setiap angka dengan `2` dan mencatat hasilnya. Jadi, ketika `code` ini dijalankan, output-nya adalah:

```md
2
4
6
8
10
```

Penting untuk dipahami bahwa `callback function` dipanggil satu kali untuk setiap elemen di dalam `array`, secara berurutan. `forEach` menangani perulangan (*looping*) untuk Anda, sehingga Anda tidak perlu menulis `loop` `for` sendiri.

Anda juga dapat menggunakan `arrow function` sebagai `callback`, yang dapat membuat `code` Anda menjadi lebih ringkas:

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number * 2));
```

Ini melakukan hal yang sama persis seperti contoh sebelumnya, tetapi dengan `code` yang lebih sedikit.

`Callback function` di dalam `forEach` sebenarnya dapat menerima hingga tiga `argument`: elemen saat ini (*current element*), indeks dari elemen saat ini (*index*), dan `array` tempat `forEach` dipanggil.

Berikut contoh penggunaan ketiganya:

```javascript
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((number, index, array) => {
  console.log(`Element ${number} is at index ${index} in array ${array}`);
});
```

`Code` ini akan mencatat informasi tentang setiap elemen, indeksnya, dan `array` aslinya.

Memahami `callback function` dan `method` seperti `forEach` sangat penting seiring kemajuan Anda dalam `JavaScript`. Konsep ini menjadi dasar bagi banyak konsep tingkat lanjut dalam bahasa ini, terutama dalam pemrograman asinkron (*asynchronous programming*) yang akan Anda pelajari pada pelajaran mendatang.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa tujuan utama dari sebuah `callback function` dalam `JavaScript`?

- [ ] Membuat sebuah `array` baru.
- [x] Mengizinkan sebuah `function` untuk menjalankan bagian `code` lain di kemudian waktu.
- [ ] Mendefinisikan sebuah `variable` baru.
- [ ] Menggantikan sebuah `loop` `for`.

### Pertanyaan 2

Berapa kali `callback function` di dalam `forEach` dipanggil?

- [ ] Sekali.
- [ ] Dua kali.
- [x] Satu kali untuk setiap elemen di dalam `array`.
- [ ] Tergantung pada ukuran `array`.

### Pertanyaan 3

Manakah dari pilihan berikut yang BUKAN merupakan `parameter` yang dapat diteruskan ke `callback function` di dalam `forEach`?

- [ ] Elemen saat ini (*current element*).
- [ ] Indeks dari elemen saat ini (*index*).
- [ ] `Array` tempat `forEach` dipanggil.
- [x] Panjang dari `array` (*length of array*).

---
⬅️ Sebelumnya | [Selanjutnya ➡️](2-what-are-higher-order-functions.md)
