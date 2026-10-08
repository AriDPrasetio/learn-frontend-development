# 📖 Panduan Belajar JavaScript: Working with Conditional Logic and Math Methods

> Memahami bagaimana mengontrol alur program menggunakan conditional statement, logical operators, serta memanfaatkan built-in object Math untuk kalkulasi matematika kompleks.

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

### Konsep 1: Conditional Statement (Conditional Statements)

- **What (Apa):** Struktur kontrol yang memungkinkan program mengeksekusi blok kode tertentu hanya jika suatu kondisi terpenuhi (bernilai _truthy_). Termasuk `if`, `else if`, `else`, dan _ternary operator_.
- **Why (Mengapa):** Agar program dapat mengambil keputusan dan memiliki alur logika yang dinamis bergantung pada input atau keadaan saat itu.
- **How (Bagaimana):**
  Menggunakan sintaks `if` untuk satu kondisi, `else if` untuk kondisi tambahan, dan `else` sebagai nilai _fallback_.

  ```js
  const score = 87;

  if (score >= 90) {
    console.log("You got an A");
  } else if (score >= 80) {
    console.log("You got a B"); // ✅ Output: You got a B
  } else {
    console.log("You failed!");
  }
  ```

  Untuk logika sederhana, gunakan _ternary operator_ (`kondisi ? jikaBenar : jikaSalah`):

  ```js
  const temperature = 30;
  const weather = temperature > 25 ? "sunny" : "cool";
  console.log(`It's a ${weather} day!`); // ✅ Output: It's a sunny day!
  ```

- **When (Kapan):** Gunakan blok `if/else` saat berhadapan dengan kondisi kompleks atau banyak baris eksekusi. Gunakan _ternary operator_ saat ingin menugaskan nilai tunggal atau memiliki logika yang sangat ringkas.

> [!NOTE]
> Nilai _falsy_ di JavaScript antara lain: `false`, `0`, `-0`, `""` (string kosong), `null`, `undefined`, dan `NaN`. Selain dari nilai tersebut, semuanya dianggap sebagai nilai _truthy_ (termasuk array kosong `[]` dan object kosong `{}`).

### Konsep 2: Binary Logical Operators (Binary Logical Operators)

- **What (Apa):** Operator yang mengevaluasi dua expression (_operands_) dan mengembalikan hasil berdasarkan sifat _truthiness_-nya. Meliputi AND (`&&`), OR (`||`), dan Nullish Coalescing (`??`).
- **Why (Mengapa):** Memungkinkan pengecekan berbagai kondisi dalam satu evaluasi yang ringkas, atau memberikan nilai bawaan secara aman.
- **How (Bagaimana):**
  - **AND (`&&`)**: Mengevaluasi dari kiri ke kanan. Mengembalikan operand _falsy_ pertama yang ditemui, atau mengembalikan operand terakhir jika semuanya _truthy_.

    ```js
    const resultAnd = true && "hello";
    console.log(resultAnd); // ✅ Output: hello
    ```

  - **OR (`||`)**: Mengembalikan operand _truthy_ pertama yang ditemui, berguna untuk memberikan nilai bawaan.

    ```js
    const resultOr = 0 || "This is truthy";
    console.log(resultOr); // ✅ Output: This is truthy
    ```

  - **Nullish Coalescing (`??`)**: Hanya mengembalikan operand kanan jika operand kiri bernilai `null` atau `undefined`. Berbeda dengan `||` yang dipicu oleh semua nilai _falsy_ (seperti `0` atau `""`).

    ```js
    const volume = 0;
    const currentVolume = volume ?? 10;
    console.log(currentVolume); // ✅ Output: 0 (karena 0 bukan null/undefined)
    ```

- **When (Kapan):** Gunakan `&&` untuk memastikan semua kondisi wajib terpenuhi. Gunakan `||` untuk mencari kecocokan pertama. Gunakan `??` secara spesifik jika `0`, `false`, atau `""` merupakan input yang valid dan bukan penanda ketiadaan data.

### Konsep 3: Object Math dan Method Umumnya

- **What (Apa):** `Math` adalah built-in object JavaScript yang menyediakan constant dan function untuk melakukan kalkulasi matematika lebih lanjut di luar aritmetika dasar.
- **Why (Mengapa):** Memudahkan manipulasi angka, pembuatan nilai acak, pembulatan, dan perhitungan akar/pangkat tanpa perlu menulis function manual.
- **How (Bagaimana):**
  Method-method dipanggil secara langsung pada object `Math`.
  - **Acak:** `Math.random()` (menghasilkan angka desimal `0` s/d `<1`).
  - **Min/Max:** `Math.min(1, 5, 3)` dan `Math.max(1, 5, 3)`.
  - **Pembulatan:**
    - `Math.ceil()`: Membulatkan ke atas.
    - `Math.floor()`: Membulatkan ke bawah.
    - `Math.round()`: Membulatkan ke nilai terdekat.
    - `Math.trunc()`: Menghapus desimal tanpa pembulatan.
  - **Lain-lain:** `Math.sqrt()` (akar kuadrat), `Math.cbrt()` (akar pangkat tiga), `Math.abs()` (nilai mutlak), `Math.pow(base, exponent)` (pangkat).

  ```js
  // Contoh: Menghasilkan angka acak antara 1 dan 20
  const max = 20;
  const min = 1;
  const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(randomNum); // ✅ Output: (angka bulat acak 1-20)
  ```

- **When (Kapan):** Setiap kali aplikasi membutuhkan angka acak (seperti undian atau simulasi dadu), perlu membatasi batasan angka minimum/maksimum, atau saat menampilkan ukuran memori ke pembulatan terdekat.

### Poin Kunci

- JavaScript menggunakan evaluasi berbasis _truthy_ dan _falsy_ untuk menavigasi `if/else`.
- _Ternary operator_ merupakan versi ringkas untuk memilih di antara dua nilai secara kondisional.
- Operator `&&` mengutamakan kepastian kondisi bersama, sementara `||` mencari yang _truthy_ pertama.
- Object `Math` menyediakan banyak alat, terutama pola `Math.floor(Math.random() * rentang)` yang krusial untuk membuat angka acak yang utuh.

---

## 2. Kuis

1. Operator mana yang sebaiknya digunakan jika kamu hanya ingin merespons ketika sebuah variable bernilai secara eksplisit `null` atau `undefined` (bukan nilai _falsy_ lainnya)?
2. Apa yang dikembalikan oleh `Math.random()` ketika dieksekusi?
3. Sebutkan output dari kode berikut jika variable `score` bernilai `85`: `score > 90 ? 'Lulus' : 'Remedial'`.

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details><summary><strong>1. Nullish Coalescing</strong></summary>

Operator Nullish Coalescing (`??`). Operator ini tidak terpicu oleh nilai _falsy_ yang sah seperti `0` atau string kosong `""`.

</details>

<details><summary><strong>2. Angka acak dari 0 hingga kurang dari 1</strong></summary>

Function ini mengembalikan angka desimal (_floating-point_) acak mulai dari `0` (inklusif) hingga mendekati `1` (eksklusif), yang berarti tidak pernah menyentuh atau sama dengan `1`.

</details>

<details><summary><strong>3. Remedial</strong></summary>

Return value-nya adalah `'Remedial'`. Karena evaluasi `85 > 90` menghasilkan `false`, _ternary operator_ akan mengembalikan expression di sebelah kanan tanda titik dua (`:`).

</details>

---

## 4. Soal Esai

1. Mengapa `Math.floor()` lebih sering digabungkan dengan `Math.random()` daripada `Math.round()` saat kita ingin mendapatkan angka indeks acak pada array? Jelaskan alasannya dan tunjukkan contoh masalah jika menggunakan pembulatan yang salah!
2. Jelaskan perbedaan nyata kapan kamu harus menggunakan operator OR (`||`) dan kapan harus menggunakan _ternary operator_ (`? :`) dalam menangani _fallback_ kondisi. Berikan contoh spesifik di mana salah satu lebih unggul daripada yang lain.

---

## 5. Glosarium

| Istilah            | Definisi                                                                                                                                                                        |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Truthy_           | Suatu nilai yang ketika dievaluasi dalam konteks _boolean_ akan diterjemahkan menjadi `true`. Hampir semua nilai di JavaScript adalah _truthy_ selain segelintir nilai _falsy_. |
| _Falsy_            | Nilai (`false`, `0`, `""`, `null`, `undefined`, `NaN`) yang dievaluasi sebagai `false` ketika berada pada konteks pengecekan kondisional.                                       |
| _Operand_          | Nilai atau expression yang menjadi objek operasi matematika atau logika.                                                                                                          |
| _Fallback_         | Nilai cadangan atau perilaku bawaan yang akan dieksekusi atau digunakan jika skenario utama gagal atau ketiadaan data input yang valid.                                         |
| _Ternary Operator_ | Struktur kontrol yang ditulis dengan `kondisi ? benar : salah`, digunakan sebagai cara singkat melakukan percabangan `if/else`.                                                 |

CATATAN:
- "Pernyataan Kondisional" -> "Conditional Statement" (Sesuai dengan konteks kondisional)
- "Operator Logika Biner" -> "Binary Logical Operators"
- "objek bawaan" -> "built-in object"
- "fungsi" -> "function" (Sesuai daftar acuan)
- "nilai kembalian" -> "return value" (Sesuai daftar acuan)
- "variabel" -> "variable" (Sesuai daftar acuan)
- "konstanta" -> "constant" (Sesuai daftar acuan)
- "ekspresi" -> "expression" (Sesuai daftar acuan)
- "objek" -> "object" (Sesuai daftar acuan)
- "metode" -> "method" (Sesuai daftar acuan)
