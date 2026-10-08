# 📖 Rangkuman: Working with Conditional Logic and Math Methods

## 1. Uji Ingatan (Active Recall)
> Coba jawab dulu di dalam kepala sebelum membuka jawabannya!

<details><summary><strong>1. Fungsi apa yang dimainkan oleh objek global `Math` di lingkungan eksekusi JavaScript?</strong></summary><br>

JavaScript menyediakan _built-in object_ statis bernama `Math` yang dilengkapi berbagai properti konstanta (seperti `Math.PI`) dan metode matematika tingkat tinggi yang mustahil dilakukan operator standar.

</details><br>

<details><summary><strong>2. Bagaimana cara menghasilkan angka desimal acak yang murni menggunakan fungsi bawaan?</strong></summary><br>

JavaScript menyediakan metode `Math.random()` yang secara bawaan mengembalikan angka desimal (_floating-point_) acak (_pseudo-random_) mulai dari `0` (inklusif) hingga mendekati `1` (eksklusif).

</details><br>

<details><summary><strong>3. Sebutkan perbedaan pembulatan menggunakan `Math.floor()`, `Math.ceil()`, dan `Math.round()`!</strong></summary><br>

Metode `Math.round()` membulatkan angka desimal ke bilangan bulat terdekat. Sebaliknya, `Math.floor()` membulatkan angka ke bawah secara mutlak (membuang desimal), sedangkan `Math.ceil()` membulatkan angka ke atas secara mutlak ke bilangan bulat berikutnya.

</details><br>

<details><summary><strong>4. Jelaskan cara menggabungkan fungsi `Math.random()` dan pembulatan untuk menghasilkan sebuah angka antara 1 sampai 10!</strong></summary><br>

Untuk menghasilkan angka 1-10, kita menggunakan pola `Math.floor(Math.random() * 10) + 1`. Nilai desimal acak dikalikan `10` untuk memperluas batas, lalu `Math.floor()` membuang desimalnya sehingga kita mendapat bilangan bulat (0-9), dan akhirnya ditambah `1` untuk menggeser rentang bawahnya menjadi (1-10).

</details><br>

<details><summary><strong>5. Mengapa nilai dari `Math.random()` tidak akan pernah menyentuh bilangan 1 yang utuh?</strong></summary><br>

Secara desain dan spesifikasi (_by design_), fungsi `Math.random()` memang dirancang untuk mengembalikan batasan di mana nilai bawah bersifat inklusif (bisa tepat `0`), namun batas atasnya bersifat eksklusif. Oleh karenanya, angka tertinggi yang dapat dicapai hanyalah nilai desimal yang sangat mendekati 1 (misalnya `0.9999...`), tetapi tidak pernah murni `1.0`.

</details><br>

## 2. Referensi Materi Lengkap
[📖 Baca Materi Lengkap](../5-working-with-conditional-logic-and-math-methods.md)

---
[⬅️ Sebelumnya](4-working-with-unary-and-bitwise-operators.md) | [🏠 Daftar Isi](0-daftar-isi.md) | [Selanjutnya ➡️](6-working-with-numbers-and-common-number-methods.md)
