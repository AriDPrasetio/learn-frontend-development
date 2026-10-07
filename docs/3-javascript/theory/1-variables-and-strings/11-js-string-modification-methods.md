# 📖 Panduan Belajar JavaScript: Method Modifikasi String

> Panduan belajar ini dirancang khusus untuk pemula yang ingin memahami konsep pemrosesan dan modifikasi `string` dalam JavaScript, dengan fokus utama pada penggunaan `built-in function` `repeat()` dan `replace()`.

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

Modifikasi `string` adalah salah satu tugas paling umum dalam pemrograman JavaScript. Karakteristik utama `string` dalam JavaScript yang wajib dipahami adalah sifatnya yang `immutable`. Artinya, `method` modifikasi `string` tidak mengubah `variable` `string` asli, melainkan me-`return` `string` baru yang telah dimodifikasi. Panduan ini membahas dua `method` penting untuk manipulasi `string`: `repeat()` dan `replace()`.

### Konsep 1: Method repeat()

- **What (Apa):** `Method` `repeat()` adalah `built-in function` dalam JavaScript yang digunakan untuk mengulang sebuah `string` sebanyak jumlah (`count`) tertentu yang ditentukan, lalu me-`return` `string` baru hasil pengulangan tersebut.
- **Why (Mengapa):** `Method` ini menyederhanakan tugas duplikasi teks atau pembuatan pola karakter berulang. Dengan menggunakan `repeat()`, kode menjadi lebih `concise` dan `readable` tanpa perlu menulis `loop` atau kode yang rumit.
- **How (Bagaimana):** Sintaks dasar dari `method` ini adalah: `string.repeat(count);`
  - `string`: `String` yang ingin diulang.
  - `count`: Angka yang menunjukkan berapa kali `string` tersebut akan diulang.

```js
// ✅ Contoh Penggunaan dasar
let word = "Hello!";
let repeatedWord = word.repeat(3);
console.log(repeatedWord); // Menghasilkan: "Hello!Hello!Hello!"
```

Aturan Khusus dan Batasan `count`:

1. **Angka Negatif**: Nilai `count` harus berupa angka non-negatif. Jika diisi angka negatif, JavaScript akan melemparkan kesalahan `RangeError`.

```js
// ❌ Menggunakan angka negatif
let word = "Test";
console.log(word.repeat(-1)); // Throws RangeError: Invalid count value
```

2. **Nilai Infinity**: Nilai `count` harus berupa `finite number`. `Infinity` adalah nilai khusus dalam JavaScript yang mewakili kuantitas tak terbatas. Menggunakan `Infinity` akan memicu `RangeError`.

```js
// ❌ Menggunakan nilai Infinity
let word = "Test";
console.log(word.repeat(Infinity)); // Throws RangeError: Invalid count value
```

3. **Angka Desimal**: Jika `count` berupa angka desimal (seperti 2.5), `method` `repeat()` akan melakukan `round down` ke `integer` terdekat.

```js
// ✅ Menggunakan angka desimal (dibulatkan ke bawah menjadi 2)
let word = "Test";
console.log(word.repeat(2.5)); // Menghasilkan: "TestTest"
```

4. **Nol (0)**: Jika `count` bernilai 0, `method` akan me-`return` `string` kosong `""`.

```js
// ✅ Menggunakan angka nol
let word = "Test";
console.log(word.repeat(0)); // Menghasilkan: ""
```

5. **Penggunaan Variabel**: Parameter `count` tidak harus ditulis langsung sebagai angka, melainkan dapat menggunakan `variable` yang menyimpan nilai angka.

```js
// ✅ Penggunaan variable untuk count dinamis
let count = 4;
let word = "Test";
let repeatedWord = word.repeat(count);
console.log(repeatedWord); // Menghasilkan: "TestTestTestTest"
```

> [!WARNING]
> Jangan pernah memasukkan angka negatif atau nilai `Infinity` ke dalam `method` `repeat()` karena akan menyebabkan program Anda `error` dan berhenti berjalan dengan `RangeError`.

- **When (Kapan):** `Method` `repeat()` digunakan ketika Anda perlu membuat pola teks berulang, mengisi `space` dengan karakter tertentu, atau ketika jumlah pengulangan bersifat dinamis berdasarkan `user input` atau logika lain dalam program.

### Konsep 2: Method replace()

- **What (Apa):** `Method` `replace()` adalah `built-in function` JavaScript yang digunakan untuk mencari nilai tertentu dalam sebuah `string` dan menggantinya dengan nilai baru. Karena `string` bersifat `immutable`, `method` ini me-`return` `string` baru yang memuat hasil penggantian, sementara `string` aslinya tidak mengalami perubahan.
- **Why (Mengapa):** `Method` ini sangat berguna untuk memproses dan memperbarui data teks, seperti memperbarui informasi pengguna dalam URL, mengubah format tanggal, atau mengoreksi kesalahan pada `user-generated content`.
- **How (Bagaimana):** Sintaks dasar dari `method` ini adalah: `string.replace(searchValue, newValue);`
  - `searchValue`: Nilai yang dicari dalam `string`. Dapat berupa `string` biasa atau `regular expression`.
  - `newValue`: Nilai baru yang akan menggantikan `searchValue`.

```js
// ✅ Contoh penggunaan dasar penggantian string
let text = "I love JavaScript!";
let newText = text.replace("JavaScript", "coding");
console.log(newText); // Menghasilkan: "I love coding!"
```

Perilaku Penting Method `replace()`:

1. **Peka Huruf Besar/Kecil (`case-sensitive`)**: Pencarian dilakukan secara eksak. Jika kapitalisasi tidak sesuai, nilai tidak akan ditemukan dan penggantian tidak terjadi.

```js
// ❌ Penggantian tidak terjadi karena ketidakcocokan huruf kapital
let sentence = "I enjoy working with JavaScript.";
let updatedSentence = sentence.replace("javascript", "coding");
console.log(updatedSentence); // Tetap: "I enjoy working with JavaScript."
```

2. **Penggantian Kemunculan Pertama (`first occurrence`)**: Secara `default`, `method` ini hanya mengganti kemunculan pertama dari `searchValue`.

```js
// ❌ Hanya kemunculan pertama ("world" yang pertama) yang diganti
let phrase = "Hello, world! Welcome to the world of coding.";
let updatedPhrase = phrase.replace("world", "universe");
console.log(updatedPhrase); // Menghasilkan: "Hello, universe! Welcome to the world of coding."
```

- **When (Kapan):** `Method` ini digunakan ketika Anda perlu mengganti karakter tunggal, kata tertentu, atau pola teks kompleks (dengan `regular expression`) dalam sebuah `string` secara efisien.

### Poin Kunci

- JavaScript `string` bersifat `immutable` (`method` `string` tidak mengubah nilai asli, melainkan me-`return` `string` baru).
- `repeat(count)` menyalin `string` sebanyak angka yang ditentukan, dan `count` harus bernilai positif berhingga.
- Nilai negatif dan `Infinity` pada `repeat()` akan menyebabkan `RangeError`. Angka desimal dilakukan `round down`.
- `replace(searchValue, newValue)` mengganti `string` lama dengan yang baru.
- Bawaan `replace()` hanya mengganti kemunculan pertama dan bersifat `case-sensitive`.

---

## 2. Kuis

Jawablah pertanyaan-pertanyaan singkat berikut untuk menguji pemahaman Anda:

1. Apa `function` utama dari `method` `repeat()` pada JavaScript?
2. Apa yang akan terjadi jika Anda memasukkan angka negatif sebagai parameter `count` pada `method` `repeat()`?
3. Hasil apakah yang di-`return` oleh `expression` `"JS".repeat(0)`?
4. Bagaimana cara `method` `repeat()` menangani parameter `count` yang bernilai desimal, misalnya `3.8`?
5. Mengapa penggunaan `Infinity` sebagai nilai `count` pada `repeat()` menghasilkan pesan kesalahan `RangeError`?
6. Apa `function` dari `method` `replace()` dalam pemrosesan `string` JavaScript?
7. Mengapa `string` asli tidak berubah setelah kita menjalankan `method` `replace()` pada `string` tersebut?
8. Secara `default`, berapa banyak kemunculan `searchValue` yang akan diganti oleh `method` `replace()` jika nilai tersebut muncul beberapa kali?
9. Mengapa pemanggilan `"Belajar JavaScript".replace("javascript", "coding")` tidak akan mengganti kata `"JavaScript"`?
10. Sebutkan dua tipe data yang dapat diterima sebagai parameter `searchValue` dalam `method` `replace()`!

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details><summary><strong>1. Function utama repeat()</strong></summary>

`Function` utama `method` `repeat()` adalah untuk mengulang suatu `string` sebanyak jumlah tertentu sesuai dengan parameter `count` yang diberikan. `Method` ini me-`return` `string` baru yang berisi gabungan dari pengulangan tersebut.

</details>

<details><summary><strong>2. Parameter count negatif</strong></summary>

Jika parameter `count` diisi dengan angka negatif, JavaScript akan melemparkan kesalahan berupa `RangeError` (Invalid count value). Hal ini terjadi karena jumlah pengulangan wajib berupa angka non-negatif.

</details>

<details><summary><strong>3. Hasil repeat(0)</strong></summary>

`Expression` `"JS".repeat(0)` akan me-`return` `string` kosong `""`. Hal ini terjadi karena mengulang `string` sebanyak nol kali berarti tidak ada karakter yang dihasilkan.

</details>

<details><summary><strong>4. Penanganan angka desimal</strong></summary>

Jika parameter `count` berupa angka desimal seperti 3.8, `method` `repeat()` akan melakukan `round down` ke `integer` terdekat. Oleh karena itu, angka 3.8 dibulatkan menjadi 3 dan `string` akan diulang sebanyak tiga kali.

</details>

<details><summary><strong>5. Penggunaan Infinity</strong></summary>

`Infinity` adalah nilai khusus JavaScript yang mewakili kuantitas tak terbatas dan lebih besar dari angka terhingga mana pun. Karena `method` `repeat()` mewajibkan `finite number`, penggunaan `Infinity` memicu kesalahan `RangeError`.

</details>

<details><summary><strong>6. Function utama replace()</strong></summary>

`Function` dari `method` `replace()` adalah untuk mencari nilai tertentu (`searchValue`) di dalam suatu `string` dan menggantinya dengan nilai baru (`newValue`). Hasil dari operasi ini adalah sebuah `string` baru dengan teks yang telah diperbarui.

</details>

<details><summary><strong>7. Mengapa string asli tidak berubah</strong></summary>

`String` asli tidak mengalami perubahan karena `string` dalam JavaScript memiliki sifat `immutable`. Oleh karena itu, `method` `replace()` tidak memodifikasi `variable` asal, melainkan me-`return` nilai berupa `string` baru.

</details>

<details><summary><strong>8. Kemunculan yang diganti secara default</strong></summary>

Secara `default`, `method` `replace()` hanya mengganti `first occurrence` dari `searchValue`. Kemunculan berikutnya dari nilai yang sama dalam `string` tidak akan ikut terubah.

</details>

<details><summary><strong>9. Kegagalan replace("javascript")</strong></summary>

Penggantian tidak terjadi karena `method` `replace()` bersifat `case-sensitive`. Kata "javascript" dengan huruf kecil tidak cocok secara eksak dengan kata "JavaScript" yang menggunakan huruf kapital 'J' dan 'S'.

</details>

<details><summary><strong>10. Tipe data searchValue yang didukung</strong></summary>

Parameter `searchValue` pada `method` `replace()` dapat berupa `string` biasa atau `regular expression`. Penggunaan `regular expression` memungkinkan pencarian pola teks yang lebih fleksibel dan kompleks.

</details>

---

## 4. Soal Esai

Jawablah pertanyaan-pertanyaan esai berikut untuk melatih analisis dan pemikiran kritis Anda berdasarkan materi yang telah dipelajari:

1. Analisis bagaimana sifat `immutable` pada `string` JavaScript memengaruhi cara pemrogram mengelola `variable` saat melakukan operasi modifikasi teks menggunakan `replace()` atau `repeat()`. Apa yang terjadi pada `memory` dan `variable` jika `return value` `method` tidak disimpan?
2. Bandingkan perilaku `method` `repeat()` saat menerima berbagai jenis nilai parameter `count` (`integer` positif, desimal, nol, angka negatif, dan `Infinity`). Jelaskan alasan logis di balik batasan-batasan (`constraints`) yang diterapkan oleh JavaScript tersebut!
3. Anda diminta untuk memperbarui data URL dan teks masukan dari pengguna (`user input`). Berdasarkan karakteristik bawaan `method` `replace()` (seperti `case-sensitive` dan penggantian `first occurrence`), kendala apa saja yang mungkin timbul jika Anda hanya menggunakan `string` biasa sebagai `searchValue`?
4. Mengapa penggunaan `method` `repeat()` dianggap lebih unggul dalam hal efisiensi penulisan kode dan keterbacaan (`readability`) dibandingkan jika pemrogram membuat `function` pengulangan `string` manual menggunakan `loop`?
5. Dalam aplikasi nyata, parameter `count` pada `method` `repeat()` sering diambil dari `variable` dinamis (misalnya masukan jumlah dari pengguna). Analisis bagaimana penggunaan `variable` pada `repeat()` dapat meningkatkan fleksibilitas program dibandingkan dengan menuliskan angka secara langsung (`hardcoding`)!

---

## 5. Glosarium

| Istilah                        | Definisi                                                                                                                                       |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **Case-sensitive**             | Sifat dari suatu proses pemrosesan teks yang membedakan huruf besar (kapital) dan huruf kecil secara eksak.                                    |
| **Count**                      | Parameter berjenis angka pada `method` `repeat()` yang menentukan berapa kali suatu `string` akan diulang.                                         |
| **Default behavior**           | Perilaku bawaan atau standar dari suatu `function`/`method` ketika dijalankan tanpa konfigurasi khusus tambahan.                                     |
| **Immutable**                  | Sifat dari nilai atau data yang tidak dapat diubah setelah diciptakan; pada JavaScript, semua `string` bersifat `immutable`.                     |
| **Infinity**                   | Nilai numerik khusus dalam JavaScript yang mewakili kuantitas tak terbatas dan lebih besar dari angka terhingga apa pun.                       |
| **NewValue**                   | Parameter kedua pada `method` `replace()` yang berisi `string` pengganti untuk dimasukkan ke dalam `string` target.                                  |
| **RangeError**                 | Jenis kesalahan (`error`) dalam JavaScript yang dilemparkan ketika sebuah nilai berada di luar rentang atau batas yang diperbolehkan.          |
| **Regex (Regular Expression)** | Pola karakter yang digunakan untuk mencocokkan kombinasi karakter dalam `string`, dapat digunakan sebagai `searchValue` pada `method` `replace()`. |
| **Repeat()**                   | `Method` bawaan `string` di JavaScript untuk mengulang `string` sebanyak jumlah (`count`) tertentu.                                                  |
| **Replace()**                  | `Method` bawaan `string` di JavaScript untuk mencari nilai tertentu dan menggantinya dengan nilai baru.                                            |
| **SearchValue**                | Parameter pertama pada `method` `replace()` yang menentukan nilai atau pola teks yang ingin dicari di dalam `string`.                              |

---
**Navigasi Modul 1: Variables and Strings**
- ?? Sebelumnya: [String Formatting Methods](./10-js-string-formatting-methods.md)
