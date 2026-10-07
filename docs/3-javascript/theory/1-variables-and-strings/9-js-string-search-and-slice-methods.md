# 📖 Panduan Belajar JavaScript: `method` `search` dan `slice` pada `string`

> Dokumen ini berisi panduan belajar komprehensif mengenai manipulasi dan pencarian `string` dalam JavaScript, khususnya penggunaan `method` `slice()` dan `includes()`, dilengkapi dengan kuis, kunci jawaban, soal esai, dan glosarium.

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

Dalam JavaScript, pemrosesan teks atau `string` sering kali memerlukan ekstraksi sebagian teks (`substring`) atau pemeriksaan apakah suatu kata/karakter ada di dalam teks tersebut. JavaScript menyediakan berbagai `method` bawaan untuk mempermudah tugas-tugas ini tanpa mengubah data asli.

### Konsep 1: `method` slice()

`method` `slice()` digunakan untuk mengambil atau mengekstrak bagian tertentu dari sebuah `string` dan me-`return`-nya sebagai `string` baru.

- **What (Apa):** `method` bawaan JavaScript yang mengekstrak bagian dari sebuah `string` dan me-`return` `string` baru tanpa mengubah `string` aslinya.
- **Why (Mengapa):** Diperlukan saat kita perlu mengambil sebagian kata, urutan karakter tertentu, atau potongan kalimat dari `string` yang lebih besar tanpa merusak atau mengubah `string` awal.
- **How (Bagaimana):** Menggunakan sintaks `string.slice(startIndex, endIndex)`:
  - `startIndex`: Posisi awal ekstraksi (dimulai dari `index` 0). Karakter pada `index` ini akan ikut diambil.
  - `endIndex` (opsional): Posisi akhir ekstraksi. Ekstraksi dilakukan hingga sebelum `index` ini (karakter pada `endIndex` tidak ikut diambil). Jika diabaikan, ekstraksi akan berjalan sampai akhir `string`.
  - **`index` Negatif:** Menggunakan angka negatif akan menghitung posisi secara mundur dari akhir `string`.

```js
// ✅ Ekstraksi standar dari index awal hingga sebelum index akhir
let message = "Hello, world!";
let greeting = message.slice(0, 5);
console.log(greeting); // "Hello"

// ✅ Mengabaikan parameter kedua (ekstraksi hingga akhir string)
let world = message.slice(7);
console.log(world); // "world!"

// ✅ Menggunakan index negatif (mengambil 4 karakter terakhir)
let message2 = "JavaScript is fun!";
let lastWord = message2.slice(-4);
console.log(lastWord); // "fun!"

// ✅ Ekstraksi bagian tengah string
let message3 = "I love JavaScript!";
let language = message3.slice(7, 17);
console.log(language); // "JavaScript"
```

- **When (Kapan):** Digunakan ketika Anda perlu memotong `string` di awal, tengah, atau akhir, serta saat membutuhkan `substring` baru tanpa memodifikasi data `string` yang asli.

### Konsep 2: `method` includes()

`method` `includes()` digunakan untuk menguji atau mengonfirmasi keberadaan suatu `substring` di dalam `string`.

- **What (Apa):** `method` pencarian `string` yang memeriksa apakah suatu `substring` terdapat di dalam `string` lain dan me-`return` nilai `boolean` (`true` jika ditemukan, `false` jika tidak).
- **Why (Mengapa):** Diperlukan untuk memvalidasi atau memeriksa apakah teks atau input dari pengguna mengandung kata atau karakter tertentu sebelum program menjalankan tindakan tertentu.
- **How (Bagaimana):** Menggunakan sintaks `string.includes(searchValue, startPosition)`:
  - `searchValue`: `substring` yang ingin dicari di dalam `string`.
  - `startPosition` (opsional): `index` posisi dimulainya pencarian. Pencarian akan melompati karakter sebelum `index` tersebut.
  - **Sifat Case-Sensitive:** Pencarian bersifat `case-sensitive`, sehingga bentuk dan kapitalisasi karakter harus persis sama.
  - **Keterbatasan:** `method` ini hanya me-`return` `true` atau `false`, tanpa memberikan informasi lokasi `index` atau jumlah kemunculan `substring` (untuk informasi lokasi, `method` seperti `indexOf()` lebih cocok).

```js
// ✅ Pencarian dasar (menghasilkan true)
let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");
console.log(result); // true

// ❌ Demonstrasi sifat case-sensitive (menghasilkan false)
let result2 = phrase.includes("Awesome");
console.log(result2); // false

// ✅ Pencarian dengan menentukan posisi awal index (posisi 7)
let text = "Hello, JavaScript world!";
let result3 = text.includes("JavaScript", 7);
console.log(result3); // true
```

> [!NOTE]
> Pencarian bersifat `case-sensitive`, pastikan kapitalisasi huruf sesuai ketika menggunakan `method` `includes()`.

- **When (Kapan):** Digunakan saat Anda hanya perlu memastikan ada atau tidaknya suatu `substring` dalam teks untuk keperluan `conditional logic` sederhana.

### Poin Kunci

- `slice()` mengekstrak bagian `string` dan me-`return` `string` baru tanpa mengubah `string` asli.
- `includes()` memeriksa apakah `substring` ada di dalam `string` dan me-`return` `boolean` (`true` atau `false`).
- Keduanya tidak memodifikasi `string` asli.
- `method` `includes()` bersifat `case-sensitive`.

---

## 2. Kuis

Jawablah pertanyaan-pertanyaan berikut dengan singkat dan jelas.

1. Apa `function` utama dari `method` `slice()` pada `string` JavaScript?
2. Apakah `method` `slice()` memodifikasi atau mengubah `string` asli tempat `method` tersebut dipanggil?
3. Apa yang akan terjadi jika `parameter` `endIndex` pada `method` `slice()` tidak diisi?
4. Bagaimana cara kerja `index` negatif saat digunakan di dalam `method` `slice()`?
5. Apakah `return value` dari `method` `includes()` ketika `substring` yang dicari ditemukan?
6. Mengapa eksekusi kode `"JavaScript is awesome!".includes("Awesome")` menghasilkan nilai `false`?
7. Apa kegunaan dari `parameter` kedua pada `method` `includes()`?
8. Berapakah hasil keluaran dari kode `let text = "JavaScript is awesome!"; console.log(text.slice(0, 9));`?
9. Berapakah hasil keluaran dari kode `let sentence = "Learning JavaScript is fun!"; console.log(sentence.slice(9, -5));`?
10. Apakah `method` `includes()` dapat memberi tahu posisi `index` tempat ditemukannya `substring` atau berapa kali `substring` itu muncul?

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details><summary><strong>1. `function` slice()</strong></summary>

`function` utama dari `method` `slice()` adalah untuk mengekstrak sebagian karakter atau `substring` dari `string` yang lebih besar. Hasil ekstraksi tersebut kemudian di-`return` sebagai `string` baru.

</details>

<details><summary><strong>2. Modifikasi `string` asli</strong></summary>

Tidak, `method` `slice()` tidak mengubah `string` asli sama sekali. `method` ini bekerja dengan membuat dan me-`return` `string` baru yang berisi potongan teks yang diekstrak.

</details>

<details><summary><strong>3. endIndex tidak diisi</strong></summary>

Jika `parameter` `endIndex` diabaikan atau tidak diisi, `method` `slice()` akan mengekstrak semua karakter mulai dari `startIndex` hingga mencapai akhir dari `string`.

</details>

<details><summary><strong>4. `index` negatif</strong></summary>

`index` negatif pada `method` `slice()` bekerja dengan cara menghitung posisi mundur dari karakter paling akhir `string`. Sebagai contoh, `index` `-4` berarti mengekstrak empat karakter terakhir dari `string`.

</details>

<details><summary><strong>5. `return value` includes()</strong></summary>

Ketika `substring` yang dicari ditemukan di dalam `string`, `method` `includes()` akan me-`return` nilai `boolean` `true`. Jika tidak ditemukan, `method` ini me-`return` `false`.

</details>

<details><summary><strong>6. `case-sensitive` includes()</strong></summary>

Kode tersebut me-`return` `false` karena `method` `includes()` bersifat `case-sensitive`. Kata "Awesome" dengan huruf kapital 'A' dianggap tidak cocok dengan kata "awesome" berhuruf kecil.

</details>

<details><summary><strong>7. `parameter` kedua includes()</strong></summary>

`parameter` kedua pada `method` `includes()` berfungsi untuk menentukan posisi `index` awal dimulainya pencarian. Hal ini membuat `method` melompati karakter-karakter yang berada sebelum `index` tersebut.

</details>

<details><summary><strong>8. Output slice(0, 9)</strong></summary>

Hasil keluarannya adalah "JavaScript". Ekstraksi dimulai dari `index` 0 hingga sebelum `index` 9 (karakter pada `index` 0 sampai 8).

</details>

<details><summary><strong>9. Output slice(9, -5)</strong></summary>

Hasil keluarannya adalah "JavaScript is". Ekstraksi dimulai dari `index` 9 dan berakhir di posisi 5 karakter sebelum akhir `string`.

</details>

<details><summary><strong>10. Keterbatasan includes()</strong></summary>

Tidak, `method` `includes()` tidak memberikan informasi lokasi `index` maupun jumlah kemunculannya. Untuk mendapatkan informasi detail mengenai lokasi `substring`, `method` lain seperti `indexOf()` lebih cocok digunakan.

</details>

---

## 4. Soal Esai

Jawablah pertanyaan-pertanyaan esai berikut berdasarkan pemahaman konsep dari materi. (Bagian ini bertujuan untuk menguji analisis kritis Anda, sehingga tidak disertai kunci jawaban).

1. Bandingkan `method` `slice()` dan `includes()` dari segi tujuan penggunaan, `return value`, dan efeknya terhadap `variable` `string` asli.
2. Analisis implikasi dari sifat `case-sensitive` pada `method` `includes()` ketika memproses input teks dari pengguna aplikasi. Masalah apa yang bisa muncul jika kapitalisasi teks tidak diperhatikan?
3. Mengapa `method` `slice()` dirancang untuk menyertakan karakter pada `startIndex` namun mengecualikan karakter pada `endIndex`? Jelaskan bagaimana aturan ini mempermudah perhitungan panjang `substring` yang diekstrak.
4. Dalam kondisi seperti apa penggunaan `index` negatif pada `method` `slice()` lebih efektif dan praktis dibandingkan menggunakan `index` positif? Berikan contoh skenario penggunaannya.
5. Jika sebuah program membutuhkan informasi mengenai posisi persis di mana suatu kata kunci berada di dalam kalimat, mengapa `method` `includes()` tidak memadai, dan `method` apa yang disebutkan dalam materi sebagai alternatif yang lebih sesuai?

---

## 5. Glosarium

| Istilah                                 | Definisi                                                                                                                                                         |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`case-sensitive`** (Peka Huruf Kapital) | Sifat pemrosesan teks yang membedakan antara huruf besar (kapital) dan huruf kecil, di mana huruf yang sama dengan kapitalisasi berbeda dianggap tidak cocok.    |
| **`includes`()**                          | `method` bawaan pada `string` JavaScript yang menguji apakah suatu `substring` ada di dalam `string` dan me-`return` nilai `boolean` (`true` atau `false`).              |
| **`index`**                               | Angka yang menunjukkan posisi urutan suatu karakter di dalam `string`, dimulai dari angka 0 untuk karakter pertama.                                                |
| **`indexOf`()**                           | `method` `string` dalam JavaScript yang digunakan untuk menemukan lokasi posisi tepat suatu `substring` berada di dalam `string`.                                        |
| **`parameter`**                           | Nilai masukan yang dimasukkan ke dalam `method` atau `function` untuk menentukan cara kerja atau batasan pemrosesan `method` tersebut.                                   |
| **`slice`()**                             | `method` bawaan pada `string` JavaScript yang mengekstrak sebagian teks dari `string` asal dan me-`return`-nya sebagai `string` baru tanpa memodifikasi `string` aslinya. |
| **`string`**                              | `data type` dalam JavaScript yang digunakan untuk merepresentasikan teks atau urutan karakter.                                                                     |
| **`substring`**                           | Bagian kecil atau potongan karakter yang merupakan bagian dari `string` yang lebih besar.                                                                          |

---
[⬅️ Sebelumnya](8-js-string-character-methods.md) | [Selanjutnya ➡️](10-js-string-formatting-methods.md)
