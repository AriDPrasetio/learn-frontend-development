# 📖 Rangkuman: Working with Unary and Bitwise Operators

## 1. Uji Ingatan (Active Recall)
> Coba jawab dulu di dalam kepala sebelum membuka jawabannya!

<details><summary><strong>1. Bagaimana cara kerja dari _unary plus_ (`+`) dan _unary negation_ (`-`) pada variabel tunggal?</strong></summary><br>

_Unary operators_ adalah operator khusus yang bekerja hanya dengan satu target operan. Operator _unary plus_ (`+x`) dapat secara cerdas mengubah string yang berupa angka menjadi tipe _Number_, sedangkan _unary negation_ (`-x`) membalikkan kepositifan suatu bilangan numerik.

</details><br>

<details><summary><strong>2. Apa perbedaan output antara _prefix increment_ (`++x`) dan _postfix increment_ (`x++`)?</strong></summary><br>

Fungsi _increment_ (`++`) dan _decrement_ (`--`) mengubah variabel dengan menambah atau mengurangi angka 1. Pada bentuk _prefix_ (`++x`), nilainya dijumlahkan dahulu sebelum digunakan di operasi lain. Sementara _postfix_ (`x++`) akan mencetak nilainya dahulu ke operasi luar, sebelum nilainya sendiri dijumlahkan.

</details><br>

<details><summary><strong>3. Operasi dasar apa yang dieksekusi oleh operator logika NOT (`!`)?</strong></summary><br>

Terdapat juga operator investigasi. Operator logika NOT (`!`) membalikkan boolean ke keadaan berlawanannya. Operator `typeof` bertugas melacak wujud asli (_string_, _number_, _boolean_) dari sebuah nilai di memori. JavaScript juga memiliki _Bitwise Operators_ (`&`, `|`, `^`) yang beroperasi pada bilangan level paling rendah (32-bit _binary_), yang menawarkan efisiensi absolut pada perhitungan grafis tetapi nyaris tidak relevan pada penyusunan logika komponen antarmuka DOM modern.

</details><br>

<details><summary><strong>4. Jelaskan fungsionalitas dari operator _typeof_!</strong></summary><br>

Operator `typeof` adalah _unary operator_ yang berfungsi untuk melacak dan mengetahui _data type_ (tipe data) dari suatu nilai (seperti angka, teks, atau _boolean_), yang kemudian hasilnya dikembalikan dalam wujud _string_ (misalnya `"string"`, `"number"`).

</details><br>

<details><summary><strong>5. Mengapa manipulasi _bitwise_ bekerja sangat efisien tetapi jarang dipakai dalam logika antarmuka web biasa?</strong></summary><br>

_Bitwise operators_ sangat efisien karena bekerja langsung pada bilangan biner level terendah (_bit_ `0` dan `1`). Meskipun begitu, operator ini jarang dipakai dalam logika web biasa karena pengembang lebih memilih keterbacaan kode melalui operator logika standar (`&&`, `||`, `!`). Manipulasi _bitwise_ umumnya dikhususkan untuk pemrograman tingkat rendah (_low-level_) dan kriptografi.

</details><br>

## 2. Referensi Materi Lengkap
[📖 Baca Materi Lengkap](../4-working-with-unary-and-bitwise-operators.md)

---
[⬅️ Sebelumnya](3-working-with-comparison-and-boolean-operators.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](5-working-with-conditional-logic-and-math-methods.md)
