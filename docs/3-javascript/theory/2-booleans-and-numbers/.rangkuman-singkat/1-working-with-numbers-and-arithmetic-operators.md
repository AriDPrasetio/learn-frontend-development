# 📖 Rangkuman: Working with Numbers and Arithmetic Operators

## 1. Uji Ingatan (Active Recall)
> Coba jawab dulu di dalam kepala sebelum membuka jawabannya!

<details><summary><strong>1. Apa saja jenis angka yang direpresentasikan oleh tipe data `Number` dalam JavaScript?</strong></summary><br>

JavaScript menggunakan satu tipe data universal `Number` untuk merepresentasikan semua format numerik, baik itu bilangan bulat (_integer_) maupun bilangan desimal (_floating-point_).

</details><br>

<details><summary><strong>2. Apa hasil yang dikembalikan ketika sebuah angka dibagi dengan nol?</strong></summary><br>

Operasi pembagian dengan angka nol di JavaScript tidak merusak (_crash_) program, melainkan akan mengembalikan nilai khusus `Infinity`. Sedangkan, jika terjadi operasi aritmetika tak wajar (seperti membagi string huruf dengan angka), JavaScript akan mengembalikan nilai kompensasi `NaN` (_Not a Number_).

</details><br>

<details><summary><strong>3. Dalam kondisi apa operator aritmetika menghasilkan nilai `NaN`?</strong></summary><br>

Sistem mesin JavaScript sering melakukan _type coercion_ (konversi tipe diam-diam) di latar belakang. Operator aritmetika standar (`-`, `*`, `/`) akan otomatis memaksa _string_ angka menjadi _number_. Namun, keanehan terjadi pada operator `+` yang merangkap fungsi ganda; bila bersanding dengan _string_, operator ini akan mengutamakan _string concatenation_ (penggabungan teks), bukan penjumlahan. Misalnya, `5 + "10"` tidak dihitung sebagai `15`, melainkan dievaluasi menjadi string `"510"`.

</details><br>

<details><summary><strong>4. Bagaimana perilaku spesifik dari operator `+` jika salah satu _operand_-nya adalah teks (_string_)?</strong></summary><br>

Ketika mendapati operasi dengan operator `+` di mana salah satu _operand_-nya adalah teks (_string_), JavaScript berfungsi ganda sebagai _string concatenation_ (penggabungan teks). JavaScript akan mengubah _operand_ lainnya menjadi teks dan menggabungkannya, bukan melakukan penjumlahan matematis (contoh: `5 + "10"` menghasilkan `"510"`).

</details><br>

<details><summary><strong>5. Mengapa pemahaman tentang _type coercion_ sangat penting saat memanipulasi tipe data campuran?</strong></summary><br>

Pemahaman tentang _type coercion_ sangat penting karena JavaScript mengkonversi tipe data secara otomatis (implisit) di latar belakang. Jika tidak dipahami, perilaku ini sering menjadi sumber _bug_ tersembunyi karena JavaScript lebih memilih menghasilkan keluaran tak terduga (seperti _string_ yang digabung atau nilai `NaN`) ketimbang memunculkan _error_ (program _crash_).

</details><br>

## 2. Referensi Materi Lengkap
[📖 Baca Materi Lengkap](../1-working-with-numbers-and-arithmetic-operators.md)

---
[⬅️ Sebelumnya](0-daftar-isi.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](2-working-with-operator-behavior.md)
