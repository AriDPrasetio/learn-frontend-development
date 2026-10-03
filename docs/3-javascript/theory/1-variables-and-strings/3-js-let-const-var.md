# 📦 Panduan Belajar JavaScript: let, const, dan var

> Ringkasan: Materi ini membahas konsep dasar deklarasi, pengisian nilai (_assignment_), dan pengisian nilai ulang (_reassignment_) variabel menggunakan `let`, `const`, dan sejarah penggunaan `var`.

**Daftar Isi:**

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

Materi ini membahas konsep dasar deklarasi, pengisian nilai (_assignment_), dan pengisian nilai ulang (_reassignment_) variabel dalam JavaScript modern. Pemahaman terhadap perbedaan kata kunci `let`, `const`, dan `var` sangat krusial untuk mengelola data program secara efisien dan mencegah terjadinya kesalahan (_error_) saat program dijalankan.

### Konsep 1: Deklarasi dan Pengisian Variabel dengan `let`

- **Apa (_What_):** `let` adalah kata kunci dalam JavaScript modern yang digunakan untuk mendeklarasikan variabel yang nilainya bersifat fleksibel, di mana nilai tersimpan tersebut dapat diperbarui atau diisi ulang (_reassigned_) di kemudian hari.
- **Mengapa (_Why_):** Konsep ini memecahkan kebutuhan akan kontainer data yang dinamis. Dalam pemrograman, banyak nilai data yang perlu diperbarui seiring berjalannya aplikasi. `let` memungkinkan perubahan tersebut tanpa perlu membuat variabel baru.
- **Bagaimana (_How_):** Deklarasi dilakukan dengan menuliskan kata kunci `let` diikuti nama variabel. Variabel dapat dideklarasikan tanpa nilai awal (akan bernilai `undefined`), atau langsung diisi nilai dengan operator penugasan `=`. Nilai variabel dapat diisi ulang kapan saja. Namun, variabel yang sama tidak boleh dideklarasikan ulang (_redeclared_).

```javascript
// ✅ Deklarasi dan pengisian nilai (assignment)
let score = 10;
console.log(score); // 10

// ✅ Pengisian ulang nilai (reassignment) berhasil dilakukan
score = 20;
console.log(score); // 20

// ✅ Deklarasi tanpa nilai awal menghasilkan nilai bawaan `undefined`
let age;
console.log(age); // undefined
age = 25;
console.log(age); // 25

// ❌ Mendeklarasikan ulang variabel bernama sama memicu error
let score = 30; // Error: Identifier 'score' has already been declared
```

- **Kapan (_When_):** Digunakan ketika Anda mengetahui bahwa nilai dari variabel tersebut akan berubah atau perlu diperbarui sepanjang eksekusi program.

### Konsep 2: Deklarasi dan Pengisian Variabel Konstan dengan `const`

- **Apa (_What_):** `const` adalah kata kunci dalam JavaScript modern untuk mendeklarasikan variabel konstanta, yaitu variabel yang nilainya bersifat tetap dan tidak dapat diisi ulang (_immutable_) setelah ditetapkan.
- **Mengapa (_Why_):** Konsep ini mencegah nilai-nilai penting dalam program berubah secara tidak sengaja (_accidentally_) selama eksekusi kode, sehingga menjaga integritas data dan mencegah bahaya bug.
- **Bagaimana (_How_):** Deklarasi dilakukan dengan menulis kata kunci `const`, nama variabel, operator `=`, dan nilai awalnya. Variabel `const` **wajib** diinisialisasi (diberi nilai) pada saat deklarasi dilakukan. Jika mencoba mendeklarasikan `const` tanpa nilai awal, memuat ulang nilainya, atau mendeklarasikan ulang, JavaScript akan melempar pesan kesalahan (_error_).

```javascript
// ✅ Variabel `const` wajib diinisialisasi saat deklarasi
const maxScore = 100;
console.log(maxScore); // 100

// ❌ Kesalahan pengisian ulang nilai (TypeError)
maxScore = 200; // Error: Assignment to constant variable.

// ❌ Kesalahan deklarasi tanpa nilai awal (SyntaxError)
const maxAge; // Error: Missing initializer in const declaration
```

- **Kapan (_When_):** Digunakan saat mendeklarasikan variabel yang nilainya harus konstan dan tidak boleh diubah sepanjang program berjalan, seperti nilai konfigurasi atau pengaturan aplikasi.

> [!TIP]
> Jadikan `const` sebagai pilihan _default_ pertama Anda dalam mendeklarasikan variabel. Hanya ganti ke `let` jika kelak Anda menyadari nilainya harus diperbarui.

### Konsep 3: Deklarasi Variabel dengan Kata Kunci `var`

- **Apa (_What_):** `var` adalah kata kunci deklarasi variabel tradisional/lama dalam JavaScript yang memiliki kemiripan fungsi dengan `let`, namun memiliki cakupan (_scope_) yang lebih luas.
- **Mengapa (_Why_):** Dahulu `var` digunakan sebagai satu-satunya cara untuk membuat variabel sebelum hadirnya standar JavaScript modern (ES6 yang memperkenalkan `let` dan `const`).
- **Bagaimana (_How_):** Dituliskan sebelum nama variabel untuk menyimpan data secara serupa dengan `let`.
- **Kapan (_When_):** Tidak lagi direkomendasikan untuk digunakan dalam pengembangan JavaScript modern, dan disarankan untuk diganti secara penuh dengan `let` atau `const`.

> [!WARNING]
> Penggunaan `var` dapat memicu masalah pada program karena sifat cakupannya (_wider scope_) serta berpotensi mendeklarasikan ulang nilai tanpa peringatan error dari _engine_ JavaScript.

**Poin Kunci:**

- Gunakan kata kunci `let` bila nilai variabel diestimasi dapat berubah atau diperbarui secara berkala (_reassignment_).
- Gunakan `const` bila nilainya diproyeksikan sebagai nilai tetap konstan (_immutable_) yang mutlak tidak akan berubah setelah dibuat.
- Mengubah isi dari variabel `const` atau mendeklarasikan variabel `const` tanpa nilai awal memicu kesalahan (_Error_).
- Keduanya (`let` & `const`) melarang ketat adanya deklarasi ulang (_redeclaration_) menggunakan nama variabel yang sama di lingkup yang sama.
- Kata kunci lama, `var`, sudah usang dan dapat menyebabkan _bug_, gunakan `let` dan `const` alih-alih `var` di era modern.

---

## 2. Kuis

Jawablah pertanyaan-pertanyaan singkat berikut berdasarkan materi yang telah dipelajari:

1. Apa perbedaan mendasar antara kata kunci `let` dan `const` dalam hal pengisian ulang nilai (_reassignment_)?
2. Apa yang akan terjadi jika Anda mencoba mengisi ulang nilai variabel yang dideklarasikan dengan `const`?
3. Bagaimanakah status nilai awal dari sebuah variabel `let` yang dideklarasikan tanpa diberikan nilai secara langsung?
4. Mengapa deklarasi variabel `const` tanpa memberikan nilai awal akan menghasilkan kesalahan (_error_)?
5. Apa pesan kesalahan (_SyntaxError_) yang muncul apabila Anda mencoba mendeklarasikan ulang variabel `let` yang sudah ada?
6. Dalam kasus penggunaan seperti apa kata kunci `let` paling tepat untuk diterapkan?
7. Dalam situasi apa kata kunci `const` sebaiknya digunakan dibanding `let`?
8. Mengapa kata kunci `var` tidak lagi direkomendasikan dalam JavaScript modern?
9. Manakah penulisan sintaks yang benar untuk memberikan nilai 100 pada variabel `const` bernama `maxScore`?
10. Apakah variabel yang dideklarasikan dengan `const` atau `let` dapat dideklarasikan ulang (_redeclared_) di dalam cakupan kode yang sama?

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details><summary><strong>1. Perbedaan Utama let dan const</strong></summary>

Perbedaan utamanya terletak pada kemampuan fleksibilitas nilainya. Variabel yang dideklarasikan dengan `let` dapat diubah atau diisi ulang (_reassigned_) nilainya sewaktu-waktu. Sebaliknya, variabel yang dideklarasikan dengan `const` bernilai konstan dan tidak dapat diisi ulang setelah penetapan nilai awal.

</details>

<details><summary><strong>2. Percobaan Reassignment const</strong></summary>

Jika Anda mencoba mengisi ulang nilai variabel `const`, konsol JavaScript akan melempar pesan kesalahan (_TypeError_). Hal ini dikarenakan variabel `const` bersifat tidak dapat diubah (_immutable_) setelah diisi. Nilai awal variabel tersebut akan tetap dipertahankan dan tidak berubah.

</details>

<details><summary><strong>3. Status Awal let Kosong</strong></summary>

Variabel `let` yang dideklarasikan tanpa nilai awal secara otomatis bernilai `undefined`. Nilai ini menandakan bahwa variabel telah terdaftar tetapi belum memiliki isi. Nilai tersebut baru akan berubah setelah ada operasi pengisian nilai (_assignment_) di baris kode selanjutnya.

</details>

<details><summary><strong>4. Kesalahan Deklarasi const Kosong</strong></summary>

Deklarasi `const` menghasilkan kesalahan karena bahasa JavaScript mewajibkan inisialisasi nilai pada saat deklarasi dilakukan. Kegagalan memberikan nilai awal memicu pesan kesalahan `Error: Missing initializer in const declaration`. Mekanisme ini memastikan konstanta tidak pernah berada dalam kondisi tanpa nilai.

</details>

<details><summary><strong>5. SyntaxError Redeclaration let</strong></summary>

Pesan kesalahan yang muncul adalah `SyntaxError: Identifier '...' has already been declared` (misal: _Identifier 'age' has already been declared_ jika nama variabelnya adalah age). Pesan ini menandakan bahwa sistem melarang deklarasi ulang variabel dengan nama yang persis sama.

</details>

<details><summary><strong>6. Situasi Penggunaan let</strong></summary>

Kata kunci `let` paling tepat digunakan dalam kondisi di mana nilai variabel diperkirakan akan mengalami perubahan seiring berjalannya program. Contoh kasus penggunaannya adalah untuk melacak perubahan skor pertandingan atau memperbarui nilai pencacah (counter) dari waktu ke waktu.

</details>

<details><summary><strong>7. Situasi Penggunaan const</strong></summary>

Kata kunci `const` sebaiknya digunakan ketika Anda ingin membuat variabel dengan nilai tetap yang tidak boleh diubah secara tidak sengaja. Contoh situasi idealnya adalah penyimpanan variabel konfigurasi, batas maksimum nilai, atau pengaturan program yang bersifat permanen.

</details>

<details><summary><strong>8. Penurunan Rekomendasi var</strong></summary>

Kata kunci `var` tidak lagi direkomendasikan karena memiliki cakupan (_scope_) yang lebih luas dibandingkan `let` dan `const`, serta membolehkan _redeclaration_ tanpa peringatan. Hal ini meningkatkan risiko _bug_ program. JavaScript modern menggantikannya dengan `let` dan `const` yang lebih aman.

</details>

<details><summary><strong>9. Penulisan Sintaks const</strong></summary>

Penulisan sintaks yang benar adalah `const maxScore = 100;` dengan menggunakan operator penugasan tunggal `=`. Penggunaan operator perbandingan seperti `==`, `===`, atau `<=` adalah salah secara sintaksis untuk pengisian nilai variabel.

</details>

<details><summary><strong>10. Redeclaration let dan const</strong></summary>

Tidak, baik variabel `let` maupun `const` tidak dapat dideklarasikan ulang (_redeclared_) menggunakan nama yang sama di cakupan yang sama. Jika upaya deklarasi ulang dilakukan, JavaScript akan menghentikan program dan menampilkan _SyntaxError_.

</details>

---

## 4. Soal Esai

Petunjuk: Jawablah pertanyaan esai analitis berikut untuk menguji pemahaman mendalam Anda mengenai konsep variabel dalam JavaScript.

1. Analisis implikasi keamanan kode antara penggunaan variabel yang dapat diisi ulang (`let`) dan variabel konstan (`const`). Mengapa membuat variabel menjadi tidak dapat diubah (_immutable_) secara _default_ menggunakan `const` dianggap sebagai praktik yang lebih aman dalam pemrograman modern?
2. Bandingkan dampak perilaku variabel yang dideklarasikan tanpa nilai awal pada `let` (menghasilkan `undefined`) dengan perilaku penolakan deklarasi tanpa nilai pada `const`. Mengapa JavaScript membedakan perlakuan ini?
3. Dalam sebuah pembuatan aplikasi permainan, tentukan penggunaan deklarasi yang tepat untuk elemen-elemen berikut: skor pemain saat ini, batas waktu permainan (_time limit_), nama pengguna (_username_), dan jumlah nyawa tersisa. Berikan alasan teknis berdasarkan materi untuk setiap pilihan Anda.
4. Jelaskan risiko teknis yang mungkin timbul saat pengembang tetap menggunakan kata kunci `var` dalam JavaScript modern berkaitan dengan masalah cakupan (_scope_) yang luas!
5. Evaluasi kesalahan sintaks berikut: `const maxScore === 100;`. Jelaskan mengapa operator `===` salah dalam konteks deklarasi variabel dan bedakan peran operator penugasan (`=`) dengan operator kesetaraan (`===`).

---

## 5. Glosarium

| Istilah                          | Penjelasan                                                                                                                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Assignment (Pengisian Nilai)** | Proses memasukkan atau menetapkan nilai data ke dalam suatu variabel menggunakan operator penugasan `=`.                                                                             |
| **const**                        | Kata kunci dalam JavaScript modern untuk mendeklarasikan variabel yang nilainya tetap, wajib diinisialisasi saat deklarasi, serta tidak dapat diisi ulang atau dideklarasikan ulang. |
| **Constant (Konstanta)**         | Jenis variabel yang nilainya tidak diizinkan untuk berubah sepanjang eksekusi program.                                                                                               |
| **Declaration (Deklarasi)**      | Proses mendaftarkan atau membuat nama variabel baru di dalam program menggunakan kata kunci `let`, `const`, atau `var`.                                                              |
| **Error (Kesalahan)**            | Kondisi di mana program JavaScript menghentikan eksekusi normalnya dan menampilkan pesan gangguan akibat pelanggaran aturan bahasa.                                                  |
| **Immutable**                    | Sifat Tidak Dapat Diubah; karakteristik data atau variabel yang nilainya tidak dapat dimodifikasi atau diisi ulang setelah dibuat.                                                   |
| **Initializer**                  | Nilai awal yang diberikan kepada variabel pada saat deklarasi variabel tersebut dibuat.                                                                                              |
| **let**                          | Kata kunci dalam JavaScript modern untuk mendeklarasikan variabel fleksibel yang nilainya dapat diisi ulang (_reassigned_), tetapi tidak dapat dideklarasikan ulang (_redeclared_).  |
| **Reassignment**                 | Pengisian Nilai Ulang; proses memperbarui nilai yang tersimpan di dalam variabel yang sudah dideklarasikan sebelumnya.                                                               |
| **Redeclaration**                | Deklarasi Ulang; tindakan mendeklarasikan kembali variabel dengan nama yang sama di cakupan yang sama, yang menyebabkan kesalahan (_error_).                                         |
| **Scope (Cakupan)**              | Batasan atau jangkauan area dalam struktur kode di mana suatu variabel dapat diakses dan digunakan.                                                                                  |
| **SyntaxError**                  | Jenis kesalahan spesifik pada JavaScript yang terjadi akibat pelanggaran aturan tata bahasa atau sintaksis kode.                                                                     |
| **Undefined**                    | Nilai bawaan (_default_) yang dimiliki oleh variabel `let` yang telah dideklarasikan namun belum diberi isi/nilai.                                                                   |
| **var**                          | Kata kunci deklarasi variabel lama dalam JavaScript yang memiliki cakupan lebih luas dan tidak direkomendasikan lagi dalam standar modern.                                           |
