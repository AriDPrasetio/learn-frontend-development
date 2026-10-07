# 📦 Panduan Belajar JavaScript: `let`, `const`, dan `var`

> Ringkasan: Materi ini membahas konsep dasar `declaration`, `assignment`, dan `reassignment` `variable` menggunakan `let`, `const`, dan sejarah penggunaan `var`.

**Daftar Isi:**

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

Materi ini membahas konsep dasar `declaration`, `assignment`, dan `reassignment` `variable` dalam JavaScript modern. Pemahaman terhadap perbedaan kata kunci `let`, `const`, dan `var` sangat krusial untuk mengelola data program secara efisien dan mencegah terjadinya `error` saat program dijalankan.

### Konsep 1: `Declaration` dan `Assignment` `Variable` dengan `let`

- **Apa (_What_):** `let` adalah kata kunci dalam JavaScript modern yang digunakan untuk mendeklarasikan `variable` yang nilainya bersifat fleksibel, di mana nilai tersimpan tersebut dapat diperbarui atau `reassigned` di kemudian hari.
- **Mengapa (_Why_):** Konsep ini memecahkan kebutuhan akan kontainer data yang dinamis. Dalam pemrograman, banyak nilai data yang perlu diperbarui seiring berjalannya aplikasi. `let` memungkinkan perubahan tersebut tanpa perlu membuat `variable` baru.
- **Bagaimana (_How_):** `Declaration` dilakukan dengan menuliskan kata kunci `let` diikuti nama `variable`. `Variable` dapat dideklarasikan tanpa `initial value` (akan bernilai undefined), atau langsung diisi nilai dengan `assignment operator` `=`. Nilai `variable` dapat `reassigned` kapan saja. Namun, `variable` yang sama tidak boleh `redeclared`.

```javascript
// ✅ Declaration dan assignment
let score = 10;
console.log(score); // 10

// ✅ reassignment berhasil dilakukan
score = 20;
console.log(score); // 20

// ✅ Declaration tanpa initial value menghasilkan default value `undefined`
let age;
console.log(age); // undefined
age = 25;
console.log(age); // 25

// ❌ Mendeklarasikan ulang variable bernama sama memicu error
let score = 30; // Error: Identifier 'score' has already been declared
```

- **Kapan (_When_):** Digunakan ketika Anda mengetahui bahwa nilai dari `variable` tersebut akan berubah atau perlu diperbarui sepanjang eksekusi program.

### Konsep 2: `Declaration` dan `Assignment` `Variable` `Constant` dengan `const`

- **Apa (_What_):** `const` adalah kata kunci dalam JavaScript modern untuk mendeklarasikan `variable` `constant`, yaitu `variable` yang nilainya bersifat tetap dan `immutable` setelah ditetapkan.
- **Mengapa (_Why_):** Konsep ini mencegah nilai-nilai penting dalam program berubah secara accidentally selama eksekusi kode, sehingga menjaga integritas data dan mencegah bahaya bug.
- **Bagaimana (_How_):** `Declaration` dilakukan dengan menulis kata kunci `const`, nama `variable`, operator `=`, dan `initial value`-nya. `Variable` `const` **wajib** diinisialisasi (diberi nilai) pada saat `declaration` dilakukan. Jika mencoba mendeklarasikan `const` tanpa `initial value`, memuat ulang nilainya, atau mendeklarasikan ulang, JavaScript akan melempar `error`.

```javascript
// ✅ Variable ``const`` wajib diinisialisasi saat declaration
const maxScore = 100;
console.log(maxScore); // 100

// ❌ Error reassignment (TypeError)
maxScore = 200; // Error: Assignment to constant variable.

// ❌ Error declaration tanpa initial value (SyntaxError)
const maxAge; // Error: Missing initializer in const declaration
```

- **Kapan (_When_):** Digunakan saat mendeklarasikan `variable` yang nilainya harus `constant` dan tidak boleh diubah sepanjang program berjalan, seperti nilai konfigurasi atau pengaturan aplikasi.

> [!TIP]
> Jadikan `const` sebagai pilihan default pertama Anda dalam mendeklarasikan `variable`. Hanya ganti ke `let` jika kelak Anda menyadari nilainya harus diperbarui.

### Konsep 3: `Declaration` `Variable` dengan Kata Kunci `var`

- **Apa (_What_):** `var` adalah kata kunci `declaration` `variable` tradisional/lama dalam JavaScript yang memiliki kemiripan fungsi dengan `let`, namun memiliki `scope` yang lebih luas.
- **Mengapa (_Why_):** Dahulu `var` digunakan sebagai satu-satunya cara untuk membuat `variable` sebelum hadirnya standar JavaScript modern (ES6 yang memperkenalkan `let` dan `const`).
- **Bagaimana (_How_):** Dituliskan sebelum nama `variable` untuk menyimpan data secara serupa dengan `let`.
- **Kapan (_When_):** Tidak lagi direkomendasikan untuk digunakan dalam pengembangan JavaScript modern, dan disarankan untuk diganti secara penuh dengan `let` atau `const`.

> [!WARNING]
> Penggunaan `var` dapat memicu masalah pada program karena sifat `scope`-nya (_wider scope_) serta berpotensi mendeklarasikan ulang nilai tanpa peringatan `error` dari JavaScript engine.

**Poin Kunci:**

- Gunakan kata kunci `let` bila nilai `variable` diestimasi dapat berubah atau diperbarui secara berkala (`reassignment`).
- Gunakan `const` bila nilainya diproyeksikan sebagai nilai tetap `constant` (`immutable`) yang mutlak tidak akan berubah setelah dibuat.
- Mengubah isi dari `variable` `const` atau mendeklarasikan `variable` `const` tanpa `initial value` memicu `error`.
- Keduanya (`let` & `const`) melarang ketat adanya redeclaration menggunakan nama `variable` yang sama di `scope` yang sama.
- Kata kunci lama, `var`, sudah usang dan dapat menyebabkan bug, gunakan `let` dan `const` alih-alih `var` di era modern.

---

## 2. Kuis

Jawablah pertanyaan-pertanyaan singkat berikut berdasarkan materi yang telah dipelajari:

1. Apa perbedaan mendasar antara kata kunci `let` dan `const` dalam hal `reassignment`?
2. Apa yang akan terjadi jika Anda mencoba mengisi ulang nilai `variable` yang dideklarasikan dengan `const`?
3. Bagaimanakah status `initial value` dari sebuah `variable` `let` yang dideklarasikan tanpa diberikan nilai secara langsung?
4. Mengapa `declaration` `variable` `const` tanpa memberikan `initial value` akan menghasilkan `error`?
5. Apa `error` (_SyntaxError_) yang muncul apabila Anda mencoba mendeklarasikan ulang `variable` `let` yang sudah ada?
6. Dalam kasus penggunaan seperti apa kata kunci `let` paling tepat untuk diterapkan?
7. Dalam situasi apa kata kunci `const` sebaiknya digunakan dibanding `let`?
8. Mengapa kata kunci `var` tidak lagi direkomendasikan dalam JavaScript modern?
9. Manakah penulisan sintaks yang benar untuk memberikan nilai 100 pada `variable` `const` bernama `maxScore`?
10. Apakah `variable` yang dideklarasikan dengan `const` atau `let` dapat `redeclared` di dalam `scope` kode yang sama?

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details><summary><strong>1. Perbedaan Utama `let` dan `const`</strong></summary>

Perbedaan utamanya terletak pada kemampuan fleksibilitas nilainya. `Variable` yang dideklarasikan dengan `let` dapat diubah atau `reassigned` nilainya sewaktu-waktu. Sebaliknya, `variable` yang dideklarasikan dengan `const` bernilai `constant` dan tidak dapat `reassigned` setelah penetapan `initial value`.

</details>

<details><summary><strong>2. Percobaan `Reassignment` `const`</strong></summary>

Jika Anda mencoba mengisi ulang nilai `variable` `const`, `console` JavaScript akan melempar `error` (_TypeError_). Hal ini dikarenakan `variable` `const` bersifat `immutable` setelah diisi. `Initial value` `variable` tersebut akan tetap dipertahankan dan tidak berubah.

</details>

<details><summary><strong>3. Status Awal `let` Kosong</strong></summary>

`Variable` `let` yang dideklarasikan tanpa `initial value` secara otomatis bernilai undefined. Nilai ini menandakan bahwa `variable` telah terdaftar tetapi belum memiliki isi. Nilai tersebut baru akan berubah setelah ada operasi `assignment` di baris kode selanjutnya.

</details>

<details><summary><strong>4. `Error` `Declaration` `const` Kosong</strong></summary>

`Declaration` `const` menghasilkan `error` karena bahasa JavaScript mewajibkan inisialisasi nilai pada saat `declaration` dilakukan. Kegagalan memberikan `initial value` memicu `error` `Error: Missing initializer in const declaration`. Mekanisme ini memastikan `constant` tidak pernah berada dalam kondisi tanpa nilai.

</details>

<details><summary><strong>5. `SyntaxError` Redeclaration `let`</strong></summary>

`Error` yang muncul adalah `SyntaxError: Identifier '...' has already been declared` (misal: _Identifier 'age' has already been declared_ jika nama `variable`-nya adalah age). Pesan ini menandakan bahwa sistem melarang `declaration` ulang `variable` dengan nama yang persis sama.

</details>

<details><summary><strong>6. Situasi Penggunaan `let`</strong></summary>

Kata kunci `let` paling tepat digunakan dalam kondisi di mana nilai `variable` diperkirakan akan mengalami perubahan seiring berjalannya program. Contoh kasus penggunaannya adalah untuk melacak perubahan skor pertandingan atau memperbarui nilai pencacah (counter) dari waktu ke waktu.

</details>

<details><summary><strong>7. Situasi Penggunaan `const`</strong></summary>

Kata kunci `const` sebaiknya digunakan ketika Anda ingin membuat `variable` dengan nilai tetap yang tidak boleh diubah secara tidak sengaja. Contoh situasi idealnya adalah penyimpanan `variable` konfigurasi, batas maksimum nilai, atau pengaturan program yang bersifat permanen.

</details>

<details><summary><strong>8. Penurunan Rekomendasi `var`</strong></summary>

Kata kunci `var` tidak lagi direkomendasikan karena memiliki `scope` yang lebih luas dibandingkan `let` dan `const`, serta membolehkan redeclaration tanpa peringatan. Hal ini meningkatkan risiko bug program. JavaScript modern menggantikannya dengan `let` dan `const` yang lebih aman.

</details>

<details><summary><strong>9. Penulisan Sintaks `const`</strong></summary>

Penulisan sintaks yang benar adalah `const maxScore = 100;` dengan menggunakan `assignment operator` tunggal `=`. Penggunaan `comparison operators` seperti `==`, `===`, atau `<=` adalah salah secara sintaksis untuk `assignment` `variable`.

</details>

<details><summary><strong>10. Redeclaration `let` dan `const`</strong></summary>

Tidak, baik `variable` `let` maupun `const` tidak dapat `redeclared` menggunakan nama yang sama di `scope` yang sama. Jika upaya redeclaration dilakukan, JavaScript akan menghentikan program dan menampilkan _SyntaxError_.

</details>

---

## 4. Soal Esai

Petunjuk: Jawablah pertanyaan esai analitis berikut untuk menguji pemahaman mendalam Anda mengenai konsep `variable` dalam JavaScript.

1. Analisis implikasi keamanan kode antara penggunaan `variable` yang dapat `reassigned` (`let`) dan `variable` `constant` (`const`). Mengapa membuat `variable` menjadi `immutable` secara default menggunakan `const` dianggap sebagai praktik yang lebih aman dalam pemrograman modern?
2. Bandingkan dampak perilaku `variable` yang dideklarasikan tanpa `initial value` pada `let` (menghasilkan undefined) dengan perilaku penolakan `declaration` tanpa nilai pada `const`. Mengapa JavaScript membedakan perlakuan ini?
3. Dalam sebuah pembuatan aplikasi permainan, tentukan penggunaan `declaration` yang tepat untuk elemen-elemen berikut: skor pemain saat ini, batas waktu permainan (_time limit_), nama pengguna (_username_), dan jumlah nyawa tersisa. Berikan alasan teknis berdasarkan materi untuk setiap pilihan Anda.
4. Jelaskan risiko teknis yang mungkin timbul saat pengembang tetap menggunakan kata kunci `var` dalam JavaScript modern berkaitan dengan masalah `scope` yang luas!
5. Evaluasi `error` sintaks berikut: `const maxScore === 100;`. Jelaskan mengapa operator `===` salah dalam konteks `declaration` `variable` dan bedakan peran `assignment operator` (`=`) dengan `equality operator` (`===`).

---

## 5. Glosarium

| Istilah            | Penjelasan                                                                                                                                                                          |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`Assignment`**   | Proses memasukkan atau menetapkan nilai data ke dalam suatu `variable` menggunakan `assignment operator` `=`.                                                                       |
| **`const`**        | Kata kunci dalam JavaScript modern untuk mendeklarasikan `variable` yang nilainya tetap, wajib diinisialisasi saat `declaration`, serta tidak dapat `reassigned` atau `redeclared`. |
| **`Constant`**     | Jenis `variable` yang nilainya tidak diizinkan untuk berubah sepanjang eksekusi program.                                                                                            |
| **`Declaration`**  | Proses mendaftarkan atau membuat nama `variable` baru di dalam program menggunakan kata kunci `let`, `const`, atau `var`.                                                           |
| **`Error`**        | Kondisi di mana program JavaScript menghentikan eksekusi normalnya dan menampilkan pesan gangguan akibat pelanggaran aturan bahasa.                                                 |
| **`Immutable`**    | Sifat Tidak Dapat Diubah; karakteristik data atau `variable` yang nilainya tidak dapat dimodifikasi atau `reassigned` setelah dibuat.                                               |
| **`Initializer`**  | `Initial value` yang diberikan kepada `variable` pada saat `declaration` `variable` tersebut dibuat.                                                                                |
| **`let`**          | Kata kunci dalam JavaScript modern untuk mendeklarasikan `variable` fleksibel yang nilainya dapat `reassigned`, tetapi tidak dapat `redeclared`.                                    |
| **`Reassignment`** | Proses memperbarui nilai yang tersimpan di dalam `variable` yang sudah dideklarasikan sebelumnya.                                                                                   |
| **Redeclaration**  | Tindakan mendeklarasikan kembali `variable` dengan nama yang sama di `scope` yang sama, yang menyebabkan `error`.                                                                   |
| **`Scope`**        | Batasan atau jangkauan area dalam struktur kode di mana suatu `variable` dapat diakses dan digunakan.                                                                               |
| **`SyntaxError`**  | Jenis `error` spesifik pada JavaScript yang terjadi akibat pelanggaran aturan tata bahasa atau sintaksis kode.                                                                      |
| **`Undefined`**    | `Default value` yang dimiliki oleh `variable` `let` yang telah dideklarasikan namun belum diberi isi/nilai.                                                                         |
| **`var`**          | Kata kunci `declaration` `variable` lama dalam JavaScript yang memiliki `scope` lebih luas dan tidak direkomendasikan lagi dalam standar modern.                                    |

---
**Navigasi Modul 1: Variables and Strings**
- ?? Sebelumnya: [Data Types](./2-js-data-types.md)
- Selanjutnya: [String Introduction](./4-js-string-introduction.md) ??
