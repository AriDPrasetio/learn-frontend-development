# 📖 Rangkuman: Working with Comparison and Boolean Operators

## 1. Uji Ingatan (Active Recall)
> Coba jawab dulu di dalam kepala sebelum membuka jawabannya!

<details><summary><strong>1. Apa fungsi esensial dari tipe data _Boolean_?</strong></summary><br>

Tipe data _Boolean_ beroperasi menggunakan dua nilai sakelar eksklusif, `true` atau `false`, yang bertindak sebagai fondasi pendorong dalam setiap percabangan alur keputusan pemrograman (misal: struktur `if/else`).

</details><br>

<details><summary><strong>2. Bagaimana cara kerja _strict equality_ (`===`) dibandingkan dengan _loose equality_ (`==`)?</strong></summary><br>

JavaScript menyediakan dua jenis alat pembanding. _Loose equality_ (`==` dan `!=`) memeriksa kecocokan dengan melakukan _type coercion_ (pemaksaan tipe); misalnya nilai string `"5"` diubah diam-diam menjadi _number_ `5`, sehingga `5 == "5"` dievaluasi sebagai `true`.

</details><br>

<details><summary><strong>3. Mengapa evaluasi `5 == "5"` mengembalikan `true` sedangkan `5 === "5"` mengembalikan `false`?</strong></summary><br>

Sebaliknya, alat _strict equality_ (`===` dan `!==`) lebih tangguh karena mengevaluasi _value_ (nilai) dan _type_ (tipe) secara bersamaan tanpa toleransi perubahan wujud. Karenanya, `5 === "5"` akan langsung ditolak (`false`). Aturan baku dalam pemrograman JavaScript yang modern dan aman adalah menghindari pemakaian `==` sepenuhnya dan mendisiplinkan diri untuk menggunakan perbandingan yang ketat (`===`).

</details><br>

<details><summary><strong>4. Apa perbedaan `!=` dan `!==` dalam mengevaluasi kondisi ketidaksetaraan?</strong></summary><br>

Operator `!=` (_inequality_) melakukan _type coercion_ terlebih dahulu sebelum memeriksa ketidaksetaraan, sehingga `5 != "5"` menghasilkan `false` (dianggap sama). Sebaliknya, `!==` (_strict inequality_) memeriksa ketidaksetaraan tanpa melakukan konversi tipe; karena tipe datanya berbeda (_number_ dan _string_), `5 !== "5"` menghasilkan `true`.

</details><br>

<details><summary><strong>5. Mengapa sangat dianjurkan untuk menggunakan _strict equality_ dalam basis kode yang profesional?</strong></summary><br>

Penggunaan operator _strict equality_ (`===` dan `!==`) sangat dianjurkan karena tidak melakukan _type coercion_ secara diam-diam. Dengan mengevaluasi kecocokan nilai sekaligus tipe datanya secara absolut, operator ini menghasilkan perilaku kode yang jauh lebih bisa diprediksi, sehingga menjadi standar _best practice_ dalam proyek profesional.

</details><br>

## 2. Referensi Materi Lengkap
[📖 Baca Materi Lengkap](../3-working-with-comparison-and-boolean-operators.md)

---
[⬅️ Sebelumnya](2-working-with-operator-behavior.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](4-working-with-unary-and-bitwise-operators.md)
