# ⚖️ Panduan Belajar JavaScript: Comparison Operators dan Boolean

> Program sering perlu mengambil keputusan: apakah pengguna cukup umur, apakah dua nilai sama, atau apakah sebuah angka lebih besar daripada angka lain. Panduan ini membahas data type _boolean_ yang hanya bernilai `true` atau `false`, equality operators (`==`, `===`) dan inequality operators (`!=`, `!==`) beserta perbedaan perlakuan _type coercion_-nya, serta comparison operators (`>`, `>=`, `<`, `<=`) yang menghasilkan nilai _boolean_.

## Daftar Isi

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

### Konsep 1: Boolean dan Conditional Sederhana

- **What (Apa):** _Boolean_ adalah data type yang hanya memiliki dua nilai, yaitu `true` dan `false`. Nilai _boolean_ dipakai bersama _conditional_ (conditional statement), yaitu struktur yang membuat program mengambil keputusan berdasarkan sebuah kondisi. Contoh paling sederhana adalah statement `if/else`.
- **Why (Mengapa):** _Boolean_ memungkinkan program menentukan apakah sesuatu perlu dilakukan atau tidak, misalnya memutuskan apakah seseorang boleh mengakses sebuah fitur di aplikasi.
- **How (Bagaimana):**

```js
// Menyimpan nilai boolean ke variable
let isOldEnoughToDrive = true;
console.log(isOldEnoughToDrive); // true

// Memakai variable boolean di dalam conditional if/else
if (isOldEnoughToDrive) {
  console.log("You're old enough to drive"); // You're old enough to drive
} else {
  console.log("Sorry, you are not old enough to drive");
}
```

- **Who (Siapa):** Developer menulis kondisinya, lalu mesin JavaScript memilih cabang kode mana yang dijalankan berdasarkan nilai `true` atau `false`.
- **When (Kapan):** Dipakai saat sebuah tindakan bergantung pada suatu syarat, misalnya hak akses, status login, atau validasi usia.
- **Where (Di mana):** Dipakai pada variable penyimpan status dan pada kondisi di dalam statement seperti `if/else`. Statement `if/else` akan dibahas lebih lanjut pada materi berikutnya.

### Konsep 2: Equality dan Inequality Operators

- **What (Apa):** Equality operators membandingkan dua nilai dan menghasilkan _boolean_. Ada dua bentuk:
  - _Equality operator_ (`==`) melakukan _type coercion_ lebih dulu, lalu memeriksa apakah kedua nilai sama.
  - _Strict equality operator_ (`===`) tidak melakukan _type coercion_; operator ini memeriksa apakah tipe dan nilainya sama.

  Pasangannya adalah inequality operators: _inequality operator_ (`!=`) yang melakukan _type coercion_, dan _strict inequality operator_ (`!==`) yang tidak melakukannya.

- **Why (Mengapa):** Perbedaan antara bentuk biasa dan bentuk _strict_ memengaruhi hasil perbandingan antartipe. Materi sumber menyatakan bahwa bentuk _strict_ dianggap praktik terbaik karena tidak melakukan _type coercion_, sehingga hasilnya lebih dapat diprediksi, dan banyak _codebase_ profesional cenderung memilih `===` dan `!==`.
- **How (Bagaimana):**

```js
// Equality (==): type coercion dilakukan, string "5" diubah menjadi number 5
console.log(5 == "5"); // true

// Strict equality (===): tipe harus sama, jadi number dan string tidak setara
console.log(5 === "5"); // false

// Inequality (!=): type coercion dilakukan, nilainya dianggap sama
console.log(5 != "5"); // false

// Strict inequality (!==): tidak ada type coercion, tipe berbeda
console.log(5 !== "5"); // true
```

- **Who (Siapa):** Developer memilih operator yang dipakai, dan mesin JavaScript mengonversi tipe (untuk `==` dan `!=`) atau langsung membandingkan tipe dan nilai (untuk `===` dan `!==`).
- **When (Kapan):** Gunakan `===` dan `!==` jika memungkinkan, sesuai praktik terbaik pada materi sumber. Gunakan `==` dan `!=` hanya bila memang ingin hasil _type coercion_.
- **Where (Di mana):** Dipakai di dalam kondisi `if`, expression perbandingan, dan situasi lain yang membutuhkan nilai _boolean_.

### Konsep 3: Comparison Operators

- **What (Apa):** _Comparison operators_ membandingkan dua nilai dan mengembalikan hasil `true` atau `false`. Ada empat operator yang dibahas:
  - `>` (_greater than_): nilai kiri lebih besar daripada nilai kanan.
  - `>=` (_greater than or equal_): nilai kiri lebih besar atau sama dengan nilai kanan.
  - `<` (_less than_): nilai kiri lebih kecil daripada nilai kanan.
  - `<=` (_less than or equal_): nilai kiri lebih kecil atau sama dengan nilai kanan.
- **Why (Mengapa):** Hasil perbandingan dapat dipakai untuk mengambil keputusan atau mengendalikan alur program, misalnya pada statement `if` dan loop.
- **How (Bagaimana):**

```js
let a = 6;
let b = 9;
let c = 6;

// Greater than
console.log(a > b); // false
console.log(b > a); // true

// Greater than or equal
console.log(a >= b); // false
console.log(b >= a); // true
console.log(a >= c); // true

// Less than
console.log(a < b); // true
console.log(b < a); // false

// Less than or equal
console.log(a <= b); // true
console.log(b <= a); // false
console.log(a <= c); // true
```

- **Who (Siapa):** Developer menuliskan perbandingan, dan mesin JavaScript mengevaluasinya menjadi `true` atau `false`.
- **When (Kapan):** Dipakai saat keputusan program bergantung pada besar-kecilnya sebuah nilai, misalnya memeriksa batas usia atau skor minimum.
- **Where (Di mana):** Dipakai di dalam statement `if`, loop, dan situasi lain yang membutuhkan keputusan berdasarkan kondisi.

### Poin Kunci

- _Boolean_ hanya memiliki dua nilai: `true` dan `false`.
- Statement `if/else` menjalankan satu dari dua cabang kode berdasarkan sebuah kondisi, misalnya nilai _boolean_.
- `==` dan `!=` melakukan _type coercion_ sebelum membandingkan, sedangkan `===` dan `!==` tidak.
- `5 == "5"` bernilai `true`, tetapi `5 === "5"` bernilai `false` karena tipenya berbeda.
- Gunakan `===` dan `!==` jika memungkinkan karena lebih dapat diprediksi dan menjadi praktik terbaik pada materi sumber.
- `>`, `>=`, `<`, dan `<=` membandingkan dua nilai dan mengembalikan `true` atau `false`.

---

## 2. Kuis

Bagian kuis ini dirancang sebagai instrumen evaluasi mandiri (_self-assessment_) untuk menguji daya ingat dan pemahaman konseptual Anda terhadap _boolean_, equality operators, dan comparison operators JavaScript yang telah dipelajari.

1. Nilai apa saja yang dimiliki data type _boolean_, dan untuk apa data type ini dipakai?
2. Apa yang akan dicetak oleh kode `let isOldEnoughToDrive = true; if (isOldEnoughToDrive) { console.log("A"); } else { console.log("B"); }`?
3. Apa perbedaan antara operator `==` dan `===`?
4. Apakah hasil `5 == "5"`, dan mengapa hasilnya demikian?
5. Apakah hasil `5 === "5"`, dan mengapa hasilnya demikian?
6. Apakah hasil `5 != "5"` dan `5 !== "5"`? Jelaskan perbedaannya.
7. Mengapa penggunaan `===` dan `!==` dianggap praktik terbaik?
8. Operator mana yang dipakai untuk memeriksa apakah nilai kiri lebih besar atau sama dengan nilai kanan?
9. Jika `let a = 6; let b = 9; let c = 6;`, berapakah hasil `a > b`, `b >= a`, dan `a <= c`?
10. Di mana comparison operators biasanya dipakai dalam program?

> Silakan selesaikan seluruh pertanyaan di atas secara mandiri sebelum Anda melihat kunci jawaban resmi pada bagian selanjutnya.

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details>
<summary><strong>1. Nilai dan Fungsi Boolean</strong></summary>

_Boolean_ hanya memiliki dua nilai, yaitu `true` dan `false`. Data type ini dipakai untuk menyatakan kondisi benar atau salah, sehingga program dapat mengambil keputusan, misalnya menentukan apakah pengguna boleh mengakses sebuah fitur.

</details>

<details>
<summary><strong>2. Hasil Statement if/else</strong></summary>

Kode akan mencetak `A`. Variable `isOldEnoughToDrive` bernilai `true`, sehingga cabang `if` yang dijalankan dan cabang `else` dilewati.

</details>

<details>
<summary><strong>3. Perbedaan == dan ===</strong></summary>

Operator `==` (_equality_) melakukan _type coercion_ lebih dulu sebelum memeriksa apakah kedua nilai sama. Operator `===` (_strict equality_) tidak melakukan _type coercion_; ia memeriksa apakah tipe dan nilainya sama.

</details>

<details>
<summary><strong>4. Hasil 5 == "5"</strong></summary>

Hasilnya `true`. Operator `==` mengonversi string `"5"` menjadi number `5` terlebih dahulu, lalu membandingkannya. Karena kedua nilai kini sama, hasilnya `true`.

</details>

<details>
<summary><strong>5. Hasil 5 === "5"</strong></summary>

Hasilnya `false`. Operator `===` tidak melakukan _type coercion_, dan number tidak sama dengan string sehingga perbandingannya `false`.

</details>

<details>
<summary><strong>6. Hasil 5 != "5" dan 5 !== "5"</strong></summary>

`5 != "5"` menghasilkan `false` karena `!=` melakukan _type coercion_ (string diubah menjadi number) sehingga kedua nilai dianggap sama. `5 !== "5"` menghasilkan `true` karena `!==` tidak melakukan _type coercion_, dan number `5` tidak sama dengan string `"5"`.

</details>

<details>
<summary><strong>7. Alasan Memakai === dan !==</strong></summary>

Operator `===` dan `!==` tidak melakukan _type coercion_ dan memeriksa tipe sekaligus nilai, sehingga hasilnya lebih dapat diprediksi. Materi sumber menyebutnya praktik terbaik, dan banyak _codebase_ profesional cenderung memilih `===` dan `!==` daripada `==` dan `!=`.

</details>

<details>
<summary><strong>8. Operator Lebih Besar atau Sama dengan</strong></summary>

Operator `>=` (_greater than or equal_). Operator ini menghasilkan `true` jika nilai di sisi kiri lebih besar atau sama dengan nilai di sisi kanan.

</details>

<details>
<summary><strong>9. Hasil a > b, b >= a, dan a <= c</strong></summary>

`a > b` menghasilkan `false` (6 tidak lebih besar daripada 9), `b >= a` menghasilkan `true` (9 lebih besar daripada 6), dan `a <= c` menghasilkan `true` (6 sama dengan 6).

</details>

<details>
<summary><strong>10. Tempat Comparison Operators Dipakai</strong></summary>

Comparison operators biasanya dipakai di dalam statement `if`, loop, dan situasi lain yang membutuhkan keputusan berdasarkan kondisi tertentu.

</details>

---

## 4. Soal Esai

Soal esai berikut disusun untuk melatih penalaran analitis, kemampuan sintesis, serta evaluasi keputusan teknis yang harus diambil oleh seorang developer saat menulis kondisi dalam JavaScript.

1. **Menelusuri Type Coercion pada `==`:** Jelaskan langkah demi langkah apa yang dilakukan JavaScript saat mengevaluasi `5 == "5"`, lalu bandingkan dengan `5 === "5"`. Hubungkan penjelasan Anda dengan konsep _type coercion_ yang pernah dipelajari pada panduan sebelumnya.
2. **Strict vs Non-strict dalam Tim:** Sebuah tim menetapkan aturan bahwa seluruh kode wajib memakai `===` dan `!==`. Jelaskan manfaat aturan tersebut bagi keterbacaan dan keandalan kode, serta pertimbangkan apa yang perlu dilakukan jika suatu perbandingan memang membutuhkan type conversion.
3. **Boolean dan Pengambilan Keputusan:** Rancang contoh variable _boolean_ (selain `isOldEnoughToDrive`) untuk sebuah aplikasi nyata, misalnya status login atau persetujuan syarat dan ketentuan. Jelaskan bagaimana variable itu dipakai di dalam `if/else` untuk mengendalikan alur program.
4. **Memilih Comparison Operators:** Seorang developer ingin memeriksa apakah skor siswa mencapai batas minimum kelulusan. Jelaskan kapan lebih tepat memakai `>` dan kapan lebih tepat memakai `>=`, dan sebutkan risiko kesalahan yang dapat terjadi jika salah memilih.

---

## 5. Glosarium

Penguasaan terminologi teknis (_technical vocabulary_) yang tepat sangat penting bagi developer JavaScript agar dapat berkomunikasi secara efektif, memahami dokumentasi resmi, serta berkolaborasi secara profesional.

| Istilah Teknis                                  | Definisi Berdasarkan Teks Sumber                                                                                                                                                            |
| :---------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Boolean**                                     | Data type yang hanya memiliki dua nilai, yaitu `true` dan `false`, dipakai untuk mengambil keputusan berdasarkan kondisi.                                                                   |
| **Comparison Operator**                         | Operator yang membandingkan dua nilai dan mengembalikan `true` atau `false`, seperti `>`, `>=`, `<`, dan `<=`. Equality operators (`==`, `===`, `!=`, `!==`) juga membandingkan dua nilai. |
| **Conditional Statement**                       | Struktur kode yang membuat program mengambil keputusan berdasarkan sebuah kondisi, misalnya statement `if/else`.                                                                           |
| **Equality Operator (`==`)**                    | Operator yang membandingkan dua nilai setelah melakukan _type coercion_, sehingga `5 == "5"` bernilai `true`.                                                                               |
| **Greater Than (`>`)**                          | Operator yang menghasilkan `true` jika nilai di kiri lebih besar daripada nilai di kanan.                                                                                                   |
| **Greater Than or Equal (`>=`)**                | Operator yang menghasilkan `true` jika nilai di kiri lebih besar atau sama dengan nilai di kanan.                                                                                           |
| **if/else Statement**                           | Conditional statement yang menjalankan satu code branch jika kondisi bernilai `true` dan cabang lain jika bernilai `false`.                                                                |
| **Inequality Operator (`!=`)**                  | Operator yang memeriksa ketidaksetaraan dua nilai setelah melakukan _type coercion_, sehingga `5 != "5"` bernilai `false`.                                                                  |
| **Less Than (`<`)**                             | Operator yang menghasilkan `true` jika nilai di kiri lebih kecil daripada nilai di kanan.                                                                                                   |
| **Less Than or Equal (`<=`)**                   | Operator yang menghasilkan `true` jika nilai di kiri lebih kecil atau sama dengan nilai di kanan.                                                                                           |
| **Strict Equality Operator (`===`)**            | Operator yang membandingkan tipe dan nilai tanpa _type coercion_, sehingga `5 === "5"` bernilai `false`.                                                                                    |
| **Strict Inequality Operator (`!==`)**          | Operator yang memeriksa ketidaksetaraan tipe atau nilai tanpa _type coercion_, sehingga `5 !== "5"` bernilai `true`.                                                                        |
| **Type Coercion**                               | Konversi otomatis data type oleh JavaScript sebelum operasi dilakukan, misalnya string `"5"` diubah menjadi number `5` oleh operator `==`.                                                   |

CATATAN: 
- "Operator Perbandingan" -> "Comparison Operators" 
- "operator kesetaraan" -> "equality operators" 
- "ketidaksetaraan" -> "inequality operators" 
- "tipe data" -> "data type" 
- "pernyataan kondisional" -> "conditional statement" 
- "pernyataan" -> "statement" 
- "perulangan" -> "loop" 
- "pengembang" -> "developer" 
- "konversi tipe" -> "type conversion" 
- "variabel" -> "variable"
- "ekspresi" -> "expression"
- "cabang kode" -> "code branch"
