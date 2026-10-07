# 📖 Panduan Belajar JavaScript: `String Formatting Methods`

> Dokumen ini berisi ringkasan detail mengenai `string formatting methods` dalam JavaScript berdasarkan materi pembelajaran. Fokus utama materi ini mencakup pengubahan `casing` dan pembersihan `whitespace` pada `string`.

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

### A. Pengubahan `String Casing`

### Konsep 1: `Method` `toUpperCase()`

- **What (Apa):** `Built-in method` JavaScript yang mengubah seluruh karakter dalam sebuah `string` menjadi `uppercase` dan me-`return` `string` baru.
- **Why (Mengapa):** Konsep ini penting untuk memberikan penekanan pada teks, memformat judul, atau menciptakan konsistensi format tampilan `string`.
- **How (Bagaimana):** Dipanggil langsung pada `variable` atau nilai `string`. `Method` ini tidak mengubah `string` asli (`immutable`), melainkan menghasilkan `string` baru.

```js
// ✅ Mengubah string menjadi huruf kapital
let greeting = "Hello, World!";
let uppercaseGreeting = greeting.toUpperCase();
console.log(uppercaseGreeting); // Output: "HELLO, WORLD!"
```

- **When (Kapan):** Digunakan saat Anda perlu mengubah seluruh teks menjadi huruf besar untuk kebutuhan estetika antarmuka, penekanan teks, atau penataan format.

### Konsep 2: `Method` `toLowerCase()`

- **What (Apa):** `Built-in method` JavaScript yang mengubah seluruh karakter dalam sebuah `string` menjadi `lowercase` dan me-`return` `string` baru.
- **Why (Mengapa):** Konsep ini berguna untuk menstandardisasi masukan data (`input`) teks, sehingga memudahkan proses perbandingan teks tanpa terpengaruh oleh perbedaan huruf besar dan kecil (`case-insensitive checks`).
- **How (Bagaimana):** Dipanggil pada `variable` `string`. `String` asli tidak mengalami perubahan setelah `method` ini dijalankan.

```js
// ✅ Mengubah string menjadi huruf kecil
let shout = "I AM LEARNING JAVASCRIPT!";
let lowercaseShout = shout.toLowerCase();
console.log(lowercaseShout); // Output: "i am learning javascript!"
```

- **When (Kapan):** Digunakan ketika menerima masukan dari pengguna (`user-provided text`) yang perlu diseragamkan sebelum dibandingkan atau disimpan.

### B. Pembersihan `Whitespace`

### Konsep 3: Konsep `Whitespace`

- **What (Apa):** `Whitespace` merujuk pada karakter tak kasat mata di dalam `string`, seperti spasi (`spaces`), tab (`tabs`), atau pemisah baris (`line breaks`).
- **Why (Mengapa):** `Whitespace` yang tidak diinginkan di awal atau akhir `string` dapat mengganggu operasi perbandingan data, penyimpanan database, maupun penayangan teks pada antarmuka.
- **How (Bagaimana):** Terbentuk saat terdapat spasi sebelum atau sesudah teks kasat mata.

```js
// ❌ Contoh string dengan whitespace berlebih yang dapat mengganggu operasi
let greeting = " Hello, world! ";
```

- **When (Kapan):** Sering ditemui saat menangani masukan data mentah dari pengguna atau sistem eksternal.

### Konsep 4: `Method` `trim()`

- **What (Apa):** `Method` yang menghapus seluruh `whitespace` di bagian awal (`leading`) dan bagian akhir (`trailing`) dari sebuah `string`.
- **Why (Mengapa):** Menyediakan cara paling umum dan efisien untuk membersihkan spasi luar yang tidak diperlukan pada kedua sisi `string` secara sekaligus.
- **How (Bagaimana):** Dipanggil pada `variable` `string`. Spasi di dalam `string` (di antara kata) tidak akan terhapus.

```js
// ✅ Menghapus whitespace di kedua sisi string
let message = " Hello! ";
let trimmedMessage = message.trim();
console.log(trimmedMessage); // Output: "Hello!"
```

- **When (Kapan):** Digunakan saat Anda ingin memastikan teks benar-benar bersih dari spasi tambahan di kedua ujungnya sebelum diproses lebih lanjut.

### Konsep 5: `Method` `trimStart()`

- **What (Apa):** `Method` yang menghapus `whitespace` hanya dari bagian awal (`leading`) sebuah `string`.
- **Why (Mengapa):** Memberikan kontrol yang lebih presisi jika spasi di bagian akhir `string` masih diperlukan, tetapi spasi di bagian depan harus dibuang.
- **How (Bagaimana):** Dipanggil pada `variable` `string`.

```js
// ✅ Menghapus whitespace hanya di awal string
let greeting = " Hello! ";
let trimmedStart = greeting.trimStart();
console.log(trimmedStart); // Output: "Hello! "
```

- **When (Kapan):** Digunakan dalam situasi khusus ketika pembersihan spasi hanya dibutuhkan pada sisi depan/awal `string`.

### Konsep 6: `Method` `trimEnd()`

- **What (Apa):** `Method` yang menghapus `whitespace` hanya dari bagian akhir (`trailing`) sebuah `string`.
- **Why (Mengapa):** Memberikan kontrol spesifik untuk membuang spasi di ujung akhir `string` tanpa mengubah spasi di bagian awal.
- **How (Bagaimana):** Dipanggil pada `variable` `string`.

```js
// ✅ Menghapus whitespace hanya di akhir string
let str = " Code ";
console.log(str.trimEnd()); // Output: " Code"
```

- **When (Kapan):** Digunakan saat spasi di bagian akhir `string` perlu dibuang, namun spasi di bagian awal harus tetap dipertahankan.

### Poin Kunci

- `toUpperCase()` dan `toLowerCase()` digunakan untuk mengubah kapitalisasi huruf dalam `string` secara keseluruhan.
- Pembersihan ruang kosong tidak terlihat (seperti spasi, tab, dan baris baru) disebut dengan `trimming whitespace`.
- `trim()` membuang spasi di awal dan akhir `string` sekaligus.
- `trimStart()` membuang spasi di awal `string`.
- `trimEnd()` membuang spasi di akhir `string`.
- Seluruh `method` pemformatan `string` me-`return` `string` baru (tidak mengubah `string` asli).

---

## 2. Kuis

Jawablah sepuluh pertanyaan singkat berikut berdasarkan materi di atas:

1. Apa `function` utama dari `method` `toUpperCase()` pada sebuah `string` di JavaScript?
2. Mengapa `variable` `string` asli tidak mengalami perubahan setelah kita memanggil `method` `toUpperCase()` atau `toLowerCase()`?
3. Berapakah hasil `output` dari kode `let phrase = "JavaScript is Fun!"; console.log(phrase.toLowerCase());`?
4. Sebutkan skenario utama di mana penggunaan `method` `toLowerCase()` sangat disarankan!
5. Apa yang dimaksud dengan istilah `whitespace` dalam pemrosesan `string` JavaScript?
6. Bagaimana perilaku `method` `trim()` terhadap spasi yang berada di antara kata dalam sebuah kalimat?
7. `Method` apakah yang harus digunakan jika Anda hanya ingin menghapus spasi di bagian awal `string`?
8. Berapakah `output` yang dihasilkan oleh kode `let str = " Code "; console.log(str.trimEnd());`?
9. Sebutkan tiga operasi dalam JavaScript yang dapat terganggu oleh keberadaan `whitespace` berlebih pada `string`!
10. Apa perbedaan antara `function` `trim()`, `trimStart()`, dan `trimEnd()`?

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details><summary><strong>1. `Function` `toUpperCase()`</strong></summary>

`Method` `toUpperCase()` berfungsi untuk mengonversi seluruh karakter huruf dalam sebuah `string` menjadi `uppercase`. `Method` ini me-`return` `string` baru yang sudah diubah tanpa memodifikasi `string` aslinya.

</details>

<details><summary><strong>2. Alasan `string` asli tidak berubah</strong></summary>

`String` asli tidak berubah karena `method` pemformatan `string` dalam JavaScript me-`return` `string` baru alih-alih mengubah nilai aslinya secara langsung. Hal ini menjaga data `string` asal tetap stabil dan terprediksi.

</details>

<details><summary><strong>3. `Output` `toLowerCase()`</strong></summary>

`Output` dari kode tersebut adalah "javascript is fun!". `Method` `toLowerCase()` mengubah setiap huruf kapital dalam `string` `phrase` menjadi huruf kecil seluruhnya.

</details>

<details><summary><strong>4. Skenario `toLowerCase()`</strong></summary>

`Method` `toLowerCase()` paling sering digunakan ketika Anda perlu menstandardisasi teks masukan dari pengguna (`user input`). Hal ini sangat berguna untuk melakukan perbandingan teks yang tidak sensitif terhadap huruf besar atau kecil (`case-insensitive checks`).

</details>

<details><summary><strong>5. Definisi `whitespace`</strong></summary>

`Whitespace` adalah karakter tak kasat mata di dalam `string` yang meliputi spasi, tab, atau `line breaks`. Karakter ini sering kali muncul di awal atau akhir teks dan perlu dibersihkan.

</details>

<details><summary><strong>6. Perilaku `trim()` pada spasi antarkata</strong></summary>

`Method` `trim()` tidak akan menghapus atau mengubah spasi yang berada di antara kata-kata. `Method` ini hanya fokus menghapus `whitespace` yang terletak di bagian awal (`leading`) dan bagian akhir (`trailing`) `string`.

</details>

<details><summary><strong>7. Menghapus spasi di awal `string`</strong></summary>

Jika Anda hanya ingin menghapus spasi kosong di bagian awal `string`, Anda harus menggunakan `method` `trimStart()`. `Method` ini membuang spasi di bagian depan dan membiarkan spasi di bagian akhir tetap ada.

</details>

<details><summary><strong>8. `Output` `trimEnd()`</strong></summary>

`Output` dari kode tersebut adalah " Code". `Method` `trimEnd()` membuang spasi di bagian akhir `string`, sementara spasi di bagian awal tetap dipertahankan.

</details>

<details><summary><strong>9. Operasi yang terganggu oleh `whitespace`</strong></summary>

Keberadaan `whitespace` berlebih dapat mengganggu operasi perbandingan teks (`comparison`), penyimpanan data (`storage`), dan penayangan teks (`display`) pada antarmuka. Oleh karena itu, `whitespace` perlu dibersihkan menggunakan `method` pemotong yang tepat.

</details>

<details><summary><strong>10. Perbedaan `trim()`, `trimStart()`, dan `trimEnd()`</strong></summary>

`Method` `trim()` menghapus `whitespace` di kedua sisi `string` (awal dan akhir) secara bersamaan. Sementara itu, `trimStart()` hanya membersihkan spasi di bagian awal, dan `trimEnd()` hanya membersihkan spasi di bagian akhir `string`.

</details>

---

## 4. Soal Esai

Kerjakan soal-soal esai berikut untuk melatih analisis dan pemahaman kritis Anda terhadap konsep yang telah dipelajari:

1. Jelaskan alasan teknis mengapa `method` pemformatan `string` seperti `toUpperCase()` dan `trim()` me-`return` `string` baru alih-alih mengubah nilai `variable` aslinya!
2. Dalam pemrosesan data `input` formulir oleh pengguna, bandingkan efektivitas penggunaan `trim()` dibandingkan dengan kombinasi `trimStart()` dan `trimEnd()`!
3. Sebuah aplikasi membutuhkan proses validasi di mana masukan pengguna seperti `" Admin "` harus dicocokkan dengan kata kunci `"admin"`. Analisislah urutan penggunaan `method` `string` yang paling tepat untuk menyelesaikan kasus ini!
4. Mengapa karakter `whitespace` seperti tab atau `line breaks` dapat menyebabkan kegagalan dalam logika perbandingan `string`, meskipun teks terlihat sama secara visual oleh pengguna?
5. Evaluasilah dampak dari tidak dilakukannya standardisasi kapitalisasi (`casing`) dan pembersihan `whitespace` pada data masukan pengguna terhadap konsistensi penyimpanan data di sistem!

---

## 5. Glosarium

Berikut adalah daftar istilah teknis JavaScript yang terdapat dalam materi beserta definisinya:

| Istilah                    | Definisi                                                                                                      |
| -------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **`Case-insensitive check`** | Proses pemeriksaan atau perbandingan teks yang tidak membedakan antara huruf besar (kapital) dan huruf kecil. |
| **`Line break`**             | Karakter pemisah baris yang tergolong sebagai salah satu bentuk `whitespace` tak kasat mata di dalam `string`.  |
| **`Lowercase`**              | Format penulisan teks yang menggunakan huruf kecil seluruhnya.                                                |
| **`String`**                 | `Data type` dalam JavaScript yang digunakan untuk merepresentasikan dan menampung urutan karakter teks.         |
| **`Tab`**                    | Karakter jarak indentasi horizontal yang termasuk dalam kategori `whitespace`.                                |
| **`toLowerCase()`**          | `Built-in method` JavaScript untuk mengubah seluruh karakter dalam `string` menjadi huruf kecil.                    |
| **`toUpperCase()`**          | `Built-in method` JavaScript untuk mengubah seluruh karakter dalam `string` menjadi huruf kapital (huruf besar).    |
| **`Trim`**                   | Proses menghapus atau memotong karakter spasi kosong (`whitespace`) yang tidak diinginkan pada ujung `string`.  |
| **`trim()`**                 | `Built-in method` JavaScript untuk membuang seluruh `whitespace` di bagian awal dan akhir `string`.                 |
| **`trimEnd()`**              | `Built-in method` JavaScript untuk membuang `whitespace` hanya pada bagian akhir (`trailing`) `string`.             |
| **`trimStart()`**            | `Built-in method` JavaScript untuk membuang `whitespace` hanya pada bagian awal (`leading`) `string`.               |
| **`Uppercase`**              | Format penulisan teks yang menggunakan huruf kapital (huruf besar) seluruhnya.                                |
| **`Whitespace`**             | Karakter tidak kasat mata seperti spasi, tab, atau pemisah baris yang berada di dalam sebuah `string`.          |

CATATAN: Beberapa istilah langsung diganti bahasa Inggrisnya tanpa tanda kurung penjelas untuk menyederhanakan teks, misalnya "awal (leading)" menjadi "`leading`", dan "akhir (trailing)" menjadi "`trailing`".
