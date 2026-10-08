# 📖 Rangkuman: Working with Numbers and Common Number Methods

## 1. Uji Ingatan (Active Recall)
> Coba jawab dulu di dalam kepala sebelum membuka jawabannya!

<details><summary><strong>1. Apa nilai dari `typeof NaN` dan fungsi manakah yang paling direkomendasikan untuk memvalidasinya secara ketat?</strong></summary><br>

Operasi matematika invalid (seperti `0/0`) tidak menyebabkan sistem _crash_, melainkan mengembalikan nilai `NaN` (_Not a Number_). Uniknya, tipe data `NaN` tetap dibaca sebagai _number_. Untuk mengidentifikasi cacat numerik ini, selalu gunakan `Number.isNaN()` karena lebih ketat dibanding `isNaN()` yang secara keliru memaksakan konversi tipe awal.

</details><br>

<details><summary><strong>2. Mengapa ekspresi `NaN === NaN` mengeksekusi hasil `false`?</strong></summary><br>

Entitas `NaN` adalah satu-satunya nilai dalam JavaScript yang tidak sama dengan dirinya sendiri. Oleh karena itu, perbandingan ketat `NaN === NaN` akan selalu bernilai `false`.

</details><br>

<details><summary><strong>3. Sebutkan perbedaan perlakuan terhadap desimal antara fungsi `parseInt()` dan `parseFloat()`!</strong></summary><br>

Fungsi `parseInt()` digunakan untuk mengekstrak angka bulat (_integer_) dan akan mengabaikan titik desimal beserta angka di belakangnya. Sebaliknya, `parseFloat()` mampu mengenali dan mengekstrak karakter titik desimal sehingga menghasilkan angka pecahan (_float_).

</details><br>

<details><summary><strong>4. Berapa nilai akhir dan tipe data yang dihasilkan dari pemanggilan `parseFloat("10.5px")`?</strong></summary><br>

Nilai akhirnya adalah `10.5` dan tipe datanya adalah _number_. Fungsi `parseFloat()` membaca _string_ dari kiri ke kanan, mengekstrak angka beserta desimalnya, dan berhenti seketika saat menemui karakter bukan angka (huruf "p").

</details><br>

<details><summary><strong>5. Mengapa hasil luaran dari fungsionalitas pembulatan `.toFixed()` membutuhkan konversi ulang jika ingin dipakai dalam rumus matematika tingkat lanjut?</strong></summary><br>

Fungsi `.toFixed()` secara spesifik mengembalikan output dengan tipe data _string_, bukan _number_. Jika _string_ ini langsung dipakai dalam operasi aritmetika lanjutan (terutama operator `+`), JavaScript dapat salah mengartikannya sebagai penggabungan teks (_string concatenation_). Oleh karenanya, harus dikonversi kembali ke _number_ (misal via `parseFloat()`) sebelum dikalkulasi lagi.

</details><br>

## 2. Referensi Materi Lengkap
[📖 Baca Materi Lengkap](../6-working-with-numbers-and-common-number-methods.md)

---
[⬅️ Sebelumnya](5-working-with-conditional-logic-and-math-methods.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](7-understanding-comparisons-and-conditionals.md)
