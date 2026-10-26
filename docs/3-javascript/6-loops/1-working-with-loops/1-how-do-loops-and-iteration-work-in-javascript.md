# Bagaimana Cara Kerja Loop dan Iteration dalam JavaScript?

`Loop` dalam pemrograman digunakan untuk mengulang sebuah blok `code` beberapa kali.

Sebuah contoh dari `loop` adalah ketika Anda sedang merancang sebuah program yang perlu mencetak daftar item. Anda dapat menggunakan sebuah `loop` untuk mencetak setiap item yang ada di dalam daftar tersebut.

Contoh lainnya adalah ketika Anda sedang merancang sebuah *game* dan ingin menggerakkan sebuah karakter melintasi layar. Anda dapat menggunakan sebuah `loop` untuk menggerakkan karakter tersebut sejumlah piksel tertentu setiap kali `loop` dijalankan.

## Sintaks `for` Loop

Dalam `JavaScript`, terdapat beberapa jenis `loop` yang dapat Anda gunakan. Dalam pelajaran ini, kita akan membahas `for` loop. Berikut adalah sintaks dasar untuk sebuah `for` loop:

```javascript
for (initialization; condition; increment or decrement) {
  // code block to be executed
}
```

`Statement` `initialization` dieksekusi sebelum `loop` dimulai. Ini biasanya digunakan untuk menginisialisasi sebuah `counter variable`. Sebuah `counter variable` adalah `variable` yang digunakan untuk melacak berapa kali `loop` telah berjalan.

`Statement` `condition` dievaluasi sebelum setiap `iteration` dari `loop`. Sebuah `iteration` adalah satu putaran tunggal melewati `loop`.

Jika `condition` bernilai `true`, blok `code` di dalam `loop` akan dieksekusi. Jika `condition` bernilai `false`, `loop` akan berhenti dan Anda melanjutkan ke blok `code` berikutnya.

Bagian terakhir dari `loop` adalah `statement` `increment`/`decrement`. `Statement` ini dieksekusi setelah setiap `iteration` dari `loop`. Ini biasanya digunakan untuk meningkatkan (`increment`) atau menurunkan (`decrement`) `counter variable`.

## Contoh `for` Loop

```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

Pada bagian pertama dari contoh di atas, kita menginisialisasi sebuah `counter variable` `i` ke `0`. Merupakan konvensi umum untuk menggunakan `i` sebagai `counter variable` dalam sebuah `for` loop.

Bagian selanjutnya adalah memeriksa `condition`. Dalam kasus ini, `condition` memeriksa apakah `i` lebih kecil dari `5`. Karena `i` adalah `0`, `condition` bernilai `true`, dan blok `code` di dalam `loop` dieksekusi.

Blok `code` di dalam `loop` bertugas untuk mencatat nilai dari `i` ke `console`. Nilai dari `i` adalah `0`, sehingga `console` akan menampilkan nilai `0`.

Kemudian `statement` `increment` dieksekusi. Dalam kasus ini, kita meningkatkan `i` sebesar `1`. Jadi `i` sekarang bernilai `1`.

Kemudian kita memeriksa `condition` lagi, yaitu memeriksa apakah `i` lebih kecil dari `5`. Karena `i` sekarang bernilai `1`, `condition` masih bernilai `true`, dan blok `code` di dalam `loop` dieksekusi kembali.

Kita terus mengulangi proses ini sampai `condition` bernilai `false`. Dalam kasus ini, ketika `i` bernilai `5`, `condition` bernilai `false`, dan `loop` berhenti.

## Infinite Loops

Saat Anda bekerja dengan `loops`, Anda harus berhati-hati untuk tidak membuat `condition` yang selalu bernilai `true`. Jika Anda melakukannya, `loop` akan berjalan selamanya dan program Anda akan mengalami *crash*. Hal ini dikenal sebagai `infinite loop`.

## Nested Loops

Memungkinkan untuk membuat `nested for loops` (loop bersarang). Sebuah `nested loop` terjadi ketika Anda menempatkan satu `loop` di dalam `loop` lainnya. Kita akan melihat contoh kapan Anda mungkin ingin melakukan hal ini nanti.

`Loop` dapat sangat bermanfaat dalam pemrograman ketika Anda perlu mengulang sebuah blok `code` beberapa kali. Meskipun bekerja dengan `for` loops bisa terasa membingungkan pada awalnya, dengan latihan Anda akan menguasainya.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa tujuan dari `statement` `initialization` dalam sebuah `for` loop?

- [ ] Untuk mengeksekusi `code` secara berulang.
- [ ] Untuk memeriksa apakah `loop` harus terus berjalan.
- [x] Untuk menyiapkan sebuah `counter variable` sebelum `loop` dimulai.
- [ ] Untuk meningkatkan (`increment`) atau menurunkan (`decrement`) `counter variable`.

### Pertanyaan 2

Apa yang terjadi jika `condition` dalam sebuah `for` loop selalu bernilai `true`?

- [ ] `Loop` akan berjalan beberapa kali secara terbatas.
- [ ] `Loop` akan berjalan sekali lalu berhenti.
- [ ] `Loop` tidak akan pernah dieksekusi.
- [x] `Loop` akan berjalan selamanya dan dapat menyebabkan program mengalami *crash*.

### Pertanyaan 3

Dalam contoh `for` loop berikut, apakah *output* yang dihasilkan?

```javascript
for (let i = 2; i <= 6; i += 2) {
  console.log(i);
}
```

- [x] `2, 4, 6`
- [ ] `2, 3, 4, 5, 6`
- [ ] `2, 4, 6, 8`
- [ ] `1, 2, 3, 4, 5, 6`

---
⬅️ Sebelumnya | [Selanjutnya ➡️](2-how-does-the-for-of-loop-work-and-when-should-you-use-it.md)
