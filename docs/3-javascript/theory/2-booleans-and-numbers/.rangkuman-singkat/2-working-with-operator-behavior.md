# 📖 Rangkuman: Working with Operator Behavior

## 1. Uji Ingatan (Active Recall)
> Coba jawab dulu di dalam kepala sebelum membuka jawabannya!

<details><summary><strong>1. Jelaskan perbedaan mendasar antara _operator precedence_ dan _associativity_!</strong></summary><br>

Saat mesin menjumpai lebih dari satu operator, JavaScript mengikuti aturan _operator precedence_ (prioritas eksekusi). Operator dengan prioritas lebih tinggi, seperti perkalian (`*`) dan pembagian (`/`), akan dieksekusi mendahului penjumlahan (`+`) dan pengurangan (`-`). Oleh karenanya, `3 + 4 * 5` dihitung dengan mengeksekusi `4 * 5` (20) lebih dulu, menjadikannya `23`.

</details><br>

<details><summary><strong>2. Mengapa assignment operator (`=`) dieksekusi dari kanan ke kiri?</strong></summary><br>

Apabila operator-operator tersebut memiliki prioritas setara, _associativity_ (arah asosiasi) menentukan urutan kerjanya. Sebagian besar operator matematika dieksekusi dari kiri ke kanan (_left-to-right_). Sebaliknya, operator penugasan (`=`) menggunakan asosiasi _right-to-left_ sehingga variabel menerima nilai akhir yang sudah matang dari ekspresi di sisi kanannya.

</details><br>

<details><summary><strong>3. Apa fungsi dari pengelompokan (_grouping_) menggunakan tanda kurung `()`?</strong></summary><br>

Untuk memanipulasi dan memaksa urutan spesifik secara manual, pengembang dapat membungkus operasi dengan tanda kurung `()` (_Grouping Operator_) yang memiliki nilai hierarki mutlak tertinggi dalam JavaScript.

</details><br>

<details><summary><strong>4. Bagaimana mesin JavaScript mengevaluasi ekspresi `3 + 4 * 5`?</strong></summary><br>

Karena aturan _operator precedence_, perkalian (`*`) memiliki prioritas lebih tinggi daripada penjumlahan (`+`). Jadi, mesin JavaScript mengevaluasi `4 * 5` lebih dulu (hasilnya `20`), lalu menambahkannya dengan `3`, sehingga hasil akhirnya adalah `23`.

</details><br>

<details><summary><strong>5. Sebutkan urutan prioritas eksekusi dalam operasi campuran aritmetika dasar!</strong></summary><br>

Dalam operasi aritmetika dasar, perkalian (`*`), pembagian (`/`), dan _remainder_ (`%`) memiliki prioritas eksekusi lebih tinggi dibandingkan penjumlahan (`+`) dan pengurangan (`-`). Jika level prioritasnya setara, mesin akan mengevaluasinya dari kiri ke kanan.

</details><br>

## 2. Referensi Materi Lengkap
[📖 Baca Materi Lengkap](../2-working-with-operator-behavior.md)

---
[⬅️ Sebelumnya](1-working-with-numbers-and-arithmetic-operators.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](3-working-with-comparison-and-boolean-operators.md)
