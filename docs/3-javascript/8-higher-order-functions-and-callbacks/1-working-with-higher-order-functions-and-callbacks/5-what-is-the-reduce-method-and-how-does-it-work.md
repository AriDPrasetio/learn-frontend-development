# Apa Itu Method Reduce, dan Bagaimana Cara Kerjanya?

`Method` `reduce` adalah sebuah `function` dalam `JavaScript` yang memungkinkan Anda memproses sebuah `array` dan meringkasnya menjadi sebuah nilai tunggal (*single value*). Nilai tunggal ini dapat berupa `number`, `string`, `object`, atau bahkan `array` lain.

`Method` ini dinamakan `reduce` karena ia mereduksi (*reduces*) sebuah `array` menjadi satu *output* tunggal. Meskipun pada awalnya mungkin tampak rumit, memahami `reduce` dapat sangat menyederhanakan `code` Anda dalam banyak situasi.

Pada intinya, `reduce` bekerja dengan menerapkan sebuah `function` ke setiap elemen di dalam `array`, secara berurutan, meneruskan hasil dari setiap perhitungan ke iterasi berikutnya. Fungsi ini sering disebut sebagai *reducer function*.

*Reducer function* menerima dua `parameter` utama: akumulator (*accumulator*) dan nilai saat ini (*current value*). Akumulator adalah tempat Anda menyimpan hasil akumulasi berjalan dari operasi Anda, dan nilai saat ini adalah elemen `array` yang sedang diproses.

Mari kita lihat sebuah contoh untuk mengilustrasikan cara kerja `reduce`:

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // 15
```

Dalam contoh ini, kita menggunakan `reduce` untuk mendapatkan jumlah total (*sum*) dari semua angka di dalam `array`.

*Reducer function* mengambil akumulator (yang dimulai dari `0`, seperti yang ditentukan oleh `argument` kedua untuk `reduce`) dan menambahkan setiap angka ke dalamnya.

Hasil dari setiap penambahan menjadi akumulator baru untuk iterasi berikutnya.

`Method` `reduce` juga dapat menerima nilai awal (*initial value*) sebagai `argument` keduanya. Ini adalah nilai awal yang digunakan oleh akumulator. Pada contoh di atas, kita mengaturnya ke `0`.

Jika Anda tidak menyediakan nilai awal, `reduce` akan menggunakan elemen pertama dari `array` sebagai akumulator awal dan memulai prosesnya dari elemen kedua.

Salah satu hal hebat tentang `reduce` adalah fleksibilitasnya. Karena Anda mendefinisikan *reducer function*, Anda memiliki kendali penuh atas bagaimana `array` diproses dan jenis hasil apa yang ingin Anda hasilkan. Hal ini membuat `reduce` sangat kuat, tetapi juga bisa membuatnya sedikit menantang untuk dipahami pada awalnya.

Dengan latihan, Anda akan terbiasa dan mahir bekerja dengan `method` `reduce`.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa yang dilakukan oleh `method` `reduce` terhadap sebuah `array`?

- [ ] Menambah ukuran `array`.
- [ ] Menghapus elemen dari `array`.
- [x] Mentransformasi `array` menjadi sebuah nilai tunggal.
- [ ] Mengurutkan elemen-elemen di dalam `array`.

### Pertanyaan 2

Dalam `method` `reduce`, apakah akumulator (*accumulator*) itu?

- [ ] Hasil akhir dari operasi `reduce`.
- [ ] Elemen saat ini yang sedang diproses.
- [ ] Sebuah `variable` sementara yang digunakan untuk kalkulasi.
- [x] Hasil berjalan (*running result*) dari operasi `reduce`.

### Pertanyaan 3

Apa yang terjadi jika Anda tidak menyediakan nilai awal (*initial value*) ke `method` `reduce`?

- [ ] Menyebabkan *error* (*throws an error*).
- [ ] Menggunakan `0` sebagai nilai awal.
- [x] Menggunakan elemen pertama dari `array` sebagai nilai awal.
- [ ] Mengembalikan `array` tanpa perubahan.

---
[⬅️ Sebelumnya](4-what-is-the-filter-method-and-how-does-it-work.md) | [Selanjutnya ➡️](6-what-is-method-chaining-and-how-does-it-work.md)
