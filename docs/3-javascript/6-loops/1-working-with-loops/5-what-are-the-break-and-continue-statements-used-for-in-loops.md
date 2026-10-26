# Untuk Apa Statement Break dan Continue Digunakan dalam Loops?

Sebuah `statement` `break` digunakan untuk keluar dari sebuah `loop` lebih awal, sedangkan `statement` `continue` digunakan untuk melompati `iteration` saat ini dari sebuah `loop` dan berpindah ke `iteration` berikutnya.

Berikut adalah contoh penggunaan `statement` `break` dalam sebuah `for` loop:

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
```

Pada contoh di atas, `loop` mulai menghitung pada `0` dan selama `i` kurang dari `10`, `loop` akan terus berjalan.

Di dalam `loop`, kita memeriksa apakah `i` sama dengan `5`. Jika iya, kita menggunakan `statement` `break` untuk keluar dari `loop` lebih awal. Jika tidak, kita mencatat nilai dari `i` ke `console`. Sehingga *output* dari `code` akan mencetak angka `0`, `1`, `2`, `3`, dan `4`.

`Statement` `break` berguna ketika Anda ingin keluar dari `loop` lebih awal berdasarkan suatu kondisi tertentu. Sebagai contoh, jika Anda sedang mencari nilai tertentu di dalam sebuah `array`, Anda dapat menggunakan `statement` `break` untuk keluar dari `loop` begitu nilai tersebut ditemukan.

Terkadang Anda mungkin ingin melompati suatu `iteration` tertentu dari `loop` tanpa harus keluar dari `loop` sepenuhnya. Di sinilah peran dari `statement` `continue`. Berikut adalah contoh penggunaan `statement` `continue` dalam sebuah `for` loop:

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
```

Sama seperti sebelumnya, kita telah menginisialisasi `i` ke `0` dan memiliki sebuah `condition` yang akan menjalankan `loop` selama `i` kurang dari `10`.

Di dalam `loop`, ketika `i` sama dengan `5`, kita menggunakan `statement` `continue` untuk melompati `iteration` saat ini dan berpindah ke `iteration` berikutnya.

*Output* dari `code` ini akan mencetak angka `0`, `1`, `2`, `3`, `4`, `6`, `7`, `8`, dan `9`. Angka `5` dilewati karena adanya `statement` `continue`.

Hal lain yang dapat Anda lakukan dengan `statement` `break` maupun `continue` adalah menggunakan label (`labels`) untuk menentukan `loop` mana yang ingin Anda hentikan (`break`) atau lanjutkan (`continue`).

Hal ini berguna ketika Anda memiliki `nested loops` dan ingin mengontrol alur dari `loop` terluar dari dalam `loop` terdalam.

Berikut adalah contoh penggunaan `labels` dengan `statement` `break`:

```javascript
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop;
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}
```

Dalam contoh ini, kita memiliki sebuah `for` loop terluar yang diberi label `outerLoop` dan sebuah `for` loop terdalam yang diberi label `innerLoop`.

Ketika `i` sama dengan `1` dan `j` sama dengan `1`, kita menggunakan `statement` `break` dengan label `outerLoop` untuk keluar dari `loop` terluar lebih awal. Ini akan menghentikan baik `inner loop` maupun `outer loop`.

*Output* dari `code` ini akan mencatat hal berikut ke `console`:

```text
"i: 0, j: 0"
"i: 0, j: 1"
"i: 0, j: 2"
"i: 1, j: 0"
```

Sebagian besar waktu Anda mungkin tidak akan merasa perlu menggunakan `labels` dengan `statement` `break` dan `continue`, tetapi ada baiknya mengetahui bahwa Anda memiliki opsi tersebut jika suatu saat membutuhkannya.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa tujuan dari `statement` `break` di dalam sebuah `loop`?

- [ ] Untuk melompati `iteration` saat ini dan melanjutkan dengan `iteration` berikutnya.
- [x] Untuk langsung keluar dari `loop`.
- [ ] Untuk menghentikan eksekusi program.
- [ ] Untuk memulai kembali `loop` dari awal.

### Pertanyaan 2

Apa yang terjadi ketika `statement` `continue` ditemui di dalam sebuah `loop`?

- [ ] `Loop` langsung berhenti.
- [ ] `Loop` memulai kembali dari awal.
- [x] `Iteration` saat ini dilewati dan `iteration` berikutnya dimulai.
- [ ] `Loop` dijeda (*paused*).

### Pertanyaan 3

Apa tujuan dari penggunaan `labels` dengan `statement` `break` dan `continue`?

- [x] Untuk menentukan `loop` mana yang ingin dihentikan (`break`) atau dilewati (`continue`) saat berhadapan dengan `nested loops`.
- [ ] Untuk menamai `loops` demi kemudahan *debugging*.
- [ ] Untuk memulai kembali `loop` dari titik tertentu.
- [ ] Untuk memungkinkan beberapa `statement` `break` dan `continue` di dalam `loop` yang sama.

---
[⬅️ Sebelumnya](4-what-is-a-while-loop-and-how-does-it-differ-from-the-do-while-loop.md) | [Selanjutnya ➡️](../2-review-javascript-loops/1-review-javascript-loops.md)
