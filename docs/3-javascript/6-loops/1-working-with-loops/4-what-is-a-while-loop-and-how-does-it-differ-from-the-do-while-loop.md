# Apa Itu While Loop, dan Bagaimana Perbedaannya dengan Do...while Loop?

Dalam pelajaran sebelumnya, Anda telah mempelajari cara bekerja dengan `for` loops, `for...in` loops, dan `for...of` loops. Dalam pelajaran ini, Anda akan mempelajari tentang `while` loop dan `do...while` loop.

Sebuah `while` loop akan menjalankan sebuah blok `code` selama `condition` bernilai `true`. Berikut adalah sintaks dasar untuk sebuah `while` loop:

```javascript
while (condition) {
  // code block to be executed
}
```

`Condition` diperiksa sebelum blok `code` dieksekusi. Jika `condition` bernilai `false`, blok `code` tidak akan dieksekusi.

`while` loops berguna ketika Anda tidak mengetahui berapa kali Anda perlu menjalankan blok `code` tersebut. Berikut adalah contoh penggunaan sebuah `while` loop:

```javascript
let counter = 0;
while (counter < 5) {
  console.log(counter);
  counter++;
}
```

Dalam contoh ini, kita memiliki sebuah `variable` bernama `counter` yang diinisialisasi ke `0`. `while` loop akan terus berjalan selama nilai dari `counter` kurang dari `5`. Di dalam `loop`, kita mencatat nilai `counter` ke `console` lalu meningkatkan (`increment`) `counter` sebesar `1`.

`Loop` lain yang mirip dengan `while` loop adalah `do...while` loop. Berikut adalah sintaks dasarnya:

```javascript
do {
  // code block to be executed
} while (condition);
```

Satu perbedaan utama antara `do...while` loop dan `while` loop adalah bahwa `do...while` loop akan mengeksekusi blok `code` setidaknya satu kali sebelum memeriksa `condition`.

Jika `condition` bernilai `true`, blok `code` akan terus dieksekusi. Jika `condition` bernilai `false`, blok `code` akan berhenti dieksekusi.

Berikut adalah contoh penggunaan sebuah `do...while` loop:

```javascript
let counter = 0;
do {
  console.log(counter);
  counter++;
} while (counter < 5);  
```

Dalam contoh ini, kita memiliki sebuah `variable` bernama `counter` yang diinisialisasi ke `0`. `do...while` loop akan mencatat nilai `counter` ke `console` kemudian meningkatkan (`increment`) `counter` sebesar `1`. Setelah mengeksekusi blok `code`, `loop` memeriksa apakah nilai `counter` kurang dari `5`. Jika iya, `loop` akan terus berjalan. Jika tidak, `loop` akan berhenti.

Dalam kebanyakan kasus, Anda mungkin akan menggunakan `while` loop lebih sering daripada `do...while` loop. Namun demikian, sangat baik untuk mengetahui kedua jenis `loop` ini dan kapan harus menggunakannya.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa perbedaan utama antara `while` loop dan `do...while` loop?

- [ ] Sebuah `while` loop mengeksekusi blok `code` setidaknya satu kali, sedangkan `do...while` loop tidak.
- [x] Sebuah `do...while` loop mengeksekusi blok `code` setidaknya satu kali, sedangkan `while` loop tidak.
- [ ] Sebuah `while` loop dan `do...while` loop benar-benar sama persis dan tidak memiliki perbedaan.
- [ ] Sebuah `while` loop memeriksa `condition` setelah mengeksekusi blok `code`, sedangkan `do...while` loop memeriksa `condition` sebelumnya.

### Pertanyaan 2

Dalam situasi manakah Anda lebih memilih menggunakan `do...while` loop daripada `while` loop?

- [ ] Ketika Anda perlu mengeksekusi sebuah blok `code` nol kali atau lebih.
- [x] Ketika Anda perlu mengeksekusi sebuah blok `code` setidaknya satu kali sebelum memeriksa `condition`.
- [ ] Ketika jumlah `iterations` sudah diketahui sebelumnya.
- [ ] Ketika Anda ingin memastikan `loop` tidak pernah dieksekusi.

### Pertanyaan 3

Apa yang terjadi jika `condition` dalam sebuah `while` loop awalnya bernilai `false`?

- [ ] Blok `code` di dalam `loop` akan dieksekusi satu kali lalu berhenti.
- [x] Blok `code` di dalam `loop` tidak akan dieksekusi sama sekali.
- [ ] Blok `code` di dalam `loop` akan dieksekusi tanpa henti.
- [ ] `Loop` akan segera berhenti dan menghasilkan sebuah *error*.

---
[⬅️ Sebelumnya](3-what-is-the-for-in-loop-and-when-should-you-use-it.md) | [Selanjutnya ➡️](5-what-are-the-break-and-continue-statements-used-for-in-loops.md)
