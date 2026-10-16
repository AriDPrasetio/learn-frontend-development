# Apa Perbedaan Antara `Array` Satu Dimensi dan Dua Dimensi?

Dalam pemrograman, `array` adalah `data structure` fundamental yang digunakan untuk menyimpan koleksi `element`. Memahami perbedaan antara `array` satu dimensi dan dua dimensi adalah krusial untuk mengorganisir dan memanipulasi data secara efektif. Mari kita eksplorasi konsep-konsep ini dengan cara yang mudah untuk dipahami oleh pemula.

Sebuah `array` satu dimensi, yang sering disebut sebuah `array`, adalah seperti sebuah baris tunggal dari kotak-kotak. Bayangkan Anda memiliki sebuah baris loker penyimpanan di sebuah stasiun kereta. Setiap loker dapat menampung satu barang, dan Anda dapat mengakses loker mana pun secara langsung jika Anda mengetahui nomornya.

Dalam istilah pemrograman, setiap barang di dalam sebuah `array` satu dimensi diakses menggunakan sebuah `index` tunggal. Sebagai contoh, di dalam JavaScript, Anda mungkin membuat dan menggunakan sebuah `array` satu dimensi seperti ini:

```javascript
let fruits = ["apple", "banana", "cherry", "date"];
console.log(fruits[2]); // "cherry"
```

Di sini, `fruits` adalah sebuah `array` satu dimensi. Anda dapat menganggapnya sebagai sebuah baris tunggal dari nama-nama buah. Untuk mengakses buah apa pun, Anda menggunakan satu nomor (`index` tersebut) di dalam tanda kurung siku.

Sekarang, mari kita beralih ke `array` dua dimensi. Jika sebuah `array` satu dimensi adalah seperti sebuah baris tunggal loker, sebuah `array` dua dimensi adalah seperti sebuah `grid` loker – beberapa baris dan kolom. Dalam pemrograman, sebuah `array` dua dimensi pada dasarnya adalah sebuah `array` dari `array`. Ini digunakan untuk merepresentasikan data yang memiliki struktur seperti `grid` alami, seperti sebuah papan catur, sebuah spreadsheet, atau piksel-piksel di dalam sebuah gambar.

Untuk mengakses sebuah `element` di dalam sebuah `array` dua dimensi, Anda memerlukan dua `index`: satu untuk baris dan satu untuk kolom. Berikut adalah sebuah contoh bagaimana Anda mungkin membuat dan menggunakan sebuah `array` dua dimensi di dalam JavaScript:

```javascript
let chessboard = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"]
];

console.log(chessboard[0][3]); // "Q"
```

Dalam contoh ini, `chessboard` adalah sebuah `array` dua dimensi yang merepresentasikan pengaturan awal sebuah permainan catur. Untuk mengakses ratu (`Q`) pada baris paling atas, kita menggunakan dua `index`: `[0][3]`. `Index` pertama, `0`, memilih baris pertama, dan `index` kedua, `3`, memilih kolom keempat pada baris tersebut.

Perbedaan utama antara `array` satu dimensi dan dua dimensi terletak pada bagaimana Anda mengakses dan mengorganisir data. `Array` satu dimensi menggunakan sebuah `index` tunggal dan cocok untuk data linier seperti daftar atau urutan. `Array` dua dimensi menggunakan dua `index` dan ideal untuk `data structure` seperti `grid`.

Perlu dicatat bahwa di dalam JavaScript, `array` dua dimensi sebenarnya adalah `array` dari `array`. Ini berarti setiap `element` dari `array` luar itu sendiri adalah sebuah `array`. Struktur bersarang ini memungkinkan fleksibilitas yang besar tetapi juga membutuhkan penanganan yang hati-hati untuk menghindari `error`.

Seiring Anda maju dalam perjalanan pemrograman Anda, Anda akan menemukan bahwa memilih antara `array` satu dimensi dan dua dimensi bergantung pada sifat dari data Anda dan bagaimana Anda perlu memanipulasinya.

`Array` satu dimensi lebih sederhana dan cukup untuk banyak tugas, sementara `array` dua dimensi menjadi sangat berharga ketika berhadapan dengan data terstruktur yang lebih kompleks.

## Pertanyaan (Questions)

Berapa banyak `index` yang Anda butuhkan untuk mengakses sebuah `element` dalam sebuah `array` dua dimensi?

- Satu.
- Dua.
- Tiga.
- Bergantung pada ukuran `array` tersebut.

Jenis `data structure` apa yang paling baik direpresentasikan oleh sebuah `array` satu dimensi?

- Sebuah `grid` angka.
- Sebuah daftar barang.
- Sebuah tabel informasi.
- Sebuah model 3D.

Dalam JavaScript, apa itu `array` dua dimensi, pada dasarnya?

- Sebuah `data type` khusus yang dibangun di dalam bahasa tersebut.
- Sebuah `array` dari `array`.
- Sebuah `linked list` dari `array`.
- Sebuah `object` matriks.

---
[⬅️ Sebelumnya](3-how-do-you-add-and-remove-elements-from-the-beginning-and-end-of-an-array.md) | [Selanjutnya ➡️](5-what-is-array-destructuring-and-how-does-it-work.md)

