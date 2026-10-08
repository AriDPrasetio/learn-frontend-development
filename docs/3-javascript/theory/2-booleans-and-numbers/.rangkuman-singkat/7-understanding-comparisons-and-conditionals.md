# 📖 Rangkuman: Understanding Comparisons and Conditionals

## 1. Uji Ingatan (Active Recall)
> Coba jawab dulu di dalam kepala sebelum membuka jawabannya!

<details><summary><strong>1. Berdasarkan kacamata komparasi bebas (`==`), apakah `null` dianggap sejajar dengan `undefined`?</strong></summary><br>

Logika kendali di JavaScript sering dipersulit oleh dua pelambang kekosongan data, yakni `null` (kekosongan disengaja) dan `undefined` (belum diberikan isi). Melalui kacamata perbandingan bebas (`==`), keduanya dianggap sejajar. Namun, saat didekatkan pada skenario matematika komparatif, masing-masing merespons secara berlainan akibat proses _type coercion_ (pemaksaan tipe).

</details><br>

<details><summary><strong>2. Apa yang terjadi pada nilai `undefined` ketika ia dioperasikan dalam perhitungan atau komparasi _Relational Operators_?</strong></summary><br>

> [!IMPORTANT]
> Saat diukur secara matematis, `undefined` runtuh menjadi wujud `NaN`, menyebabkan semua pengetesan _Relational Operators_ menjadi `false`. Berlawanan dengan hal tersebut, entitas `null` bertindak ganda sebagai representasi bilangan `0` yang berakibat `null >= 0` dievaluasi menjadi bernilai `true`.

</details><br>

<details><summary><strong>3. Mengapa eksekusi baris kode `null >= 0` secara spesifik mengembalikan luaran bernilai `true`?</strong></summary><br>

Dalam operasi matematis _relational operators_ (seperti `>=`, `>`, `<`), JavaScript secara implisit mengubah (_type coercion_) nilai `null` menjadi angka `0`. Oleh karena itu, ekspresi `null >= 0` akan dievaluasi sebagai `0 >= 0` yang mengembalikan nilai `true`.

</details><br>

<details><summary><strong>4. Operator kesetaraan apa yang digunakan secara default di dalam struktur pengecekan _case_ pada struktur `switch`?</strong></summary><br>

Pernyataan `switch` secara bawaan (_default_) melakukan pengecekan terhadap setiap `case` dengan menggunakan operator kesetaraan ketat (_strict equality_ atau `===`). Dengan demikian, tidak akan terjadi pemaksaan konversi tipe data (_type coercion_).

</details><br>

<details><summary><strong>5. Jelaskan anomali _fall-through_ di dalam pernyataan `switch` dan sebutkan sintaks untuk mencegahnya!</strong></summary><br>

_Fall-through_ adalah kondisi bocor di mana JavaScript akan terus menjalankan semua baris eksekusi di bawah suatu _case_ yang cocok, tanpa peduli apakah _case_ selanjutnya cocok atau tidak. Untuk menahan kebocoran mesin ini, Anda diwajibkan menulis kata kunci `break` di akhir setiap penanganan blok _case_.

</details><br>

## 2. Referensi Materi Lengkap
[📖 Baca Materi Lengkap](../7-understanding-comparisons-and-conditionals.md)

---
[⬅️ Sebelumnya](6-working-with-numbers-and-common-number-methods.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](0-daftar-isi.md)
