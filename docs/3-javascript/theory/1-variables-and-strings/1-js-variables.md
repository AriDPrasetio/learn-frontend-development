# 📦 Panduan Belajar JavaScript: Konsep Dasar `Variable`

> Dalam ranah pengembangan aplikasi modern menggunakan JavaScript—seperti platform toko online yang mengelola informasi barang dan keranjang belanja, hingga aplikasi obrolan (chat) yang mengelola profil pengguna dan pesan—program perangkat lunak secara konstan berinteraksi dengan data. Pemahaman mendalam mengenai `variable` merupakan fondasi paling krusial bagi setiap pemula karena `variable` berfungsi sebagai mekanisme utama untuk mengalokasikan ruang `memory`, menyimpan, serta memanipulasi data sepanjang `script` dieksekusi. Menguasai tata cara `declaration`, alokasi `memory`, dan `naming convention` `variable` akan memberikan kepastian logika, mencegah timbulnya `bug` tersembunyi, serta membentuk landasan arsitektur perangkat lunak yang kokoh dan dapat dipelihara dalam jangka panjang.

## Daftar Isi

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

### Konsep 1: `Variable` sebagai Wadah Data `Memory` (`let` & `Reassignment`)

- **What (Apa):** `Variable` adalah "penyimpanan bernama" (_named storage_) di dalam `memory` komputer yang dapat dianalogikan sebagai sebuah "kotak" fisik dengan stiker berlabel unik. Kotak ini bertindak sebagai wadah untuk menyimpan `value` data (seperti angka atau teks) yang dapat dipanggil, dibaca, dan diperbarui sepanjang program berjalan.
- **Why (Mengapa):** `Variable` memecahkan masalah pelacakan data yang dinamis selama eksekusi program. Skenario nyata seperti memperbarui skor poin dalam sebuah permainan (_game_), memantau item di keranjang belanja, atau mencatat pesan obrolan membutuhkan mekanisme fleksibel. Fitur `reassignment` memungkinkan pengembang untuk memperbarui isi data di dalam wadah tanpa merusak label/stiker wadah tersebut maupun tanpa perlu membuat kotak baru.
- **How (Bagaimana):** `Declaration` `variable` dinamis dilakukan dengan `keyword` `let`, diikuti `identifier`, dan `assignment operator` (`=`) untuk memasukkan `value` ke dalam wadah.

```js
// ✅ Declaration, Initialization, dan Reassignment:
// Declaration: Membuat kotak bernama 'age' di memory (stiker label = 'age', isi kotak = undefined)
let age;

// Initialization: Memasukkan value pertama kali ke dalam kotak 'age'
age = 25; // Isi kotak 'age' sekarang adalah angka 25

// Reassignment: Mengubah isi value di dalam kotak 'age' tanpa menulis ulang 'let'
age = 30; // Value lama (25) dihapus dari memory, digantikan dengan angka 30

// ✅ Menggabungkan Declaration dan Initialization dalam Satu Baris:
let message = "Hello!"; // Kotak 'message' diciptakan dan langsung diisi teks 'Hello!'

// ✅ Menyalin Data Antar-Variable:
let hello = "Hello world!";
let newMessage;
newMessage = hello; // Value dari kotak 'hello' disalin ke dalam kotak 'newMessage'

// ❌ Larangan Redeclaration (Redeclaration Error):
let greeting = "This";
let greeting = "That"; // SyntaxError: Identifier 'greeting' has already been declared
```

- **Who (Siapa):** Komponen yang terlibat mencakup `keyword` `declaration` (`let`), `identifier` (seperti `age` atau `message`), `assignment operator` (`=`), dan `literal` (seperti `25` atau `'Hello!'`). Seluruh alokasi ini dikelola secara otomatis oleh `engine` JavaScript.
- **When (Kapan):** `Keyword` `let` digunakan ketika sebuah `value` diperkirakan akan berubah, diperbarui, atau dihitung ulang selama `script` berjalan (seperti pembaruan poin skor atau status koneksi pengguna).
- **Where (Di mana):** `Value` data dialokasikan dan disimpan di dalam ruang `memory` komputer (_memory area_) yang terhubung langsung dengan nama `variable` tersebut selama sesi eksekusi `script`.

### Konsep 2: Perilaku `Declaration` Lama (`var`) dan `Declaration` Implisit Tanpa `Strict Mode`

- **What (Apa):** `Keyword` `var` adalah metode `declaration` `variable` `old-school`. Selain `var`, JavaScript secara historis juga memungkinkan pembuatan `variable` secara implisit, yaitu mengisi `value` ke suatu nama `variable` tanpa mendahuluinya dengan `keyword` `declaration` apa pun.
- **Why (Mengapa):** Memahami `var` dan pemisahan mode `declaration` sangat penting ketika membaca dan memelihara `legacy code`. Pembuatan `variable` secara implisit tanpa `declaration` merupakan praktik yang sangat berbahaya; pengembang yang enggan menuliskan `keyword` `declaration` mungkin menghemat sedikit waktu saat mengetik, namun berisiko kehilangan waktu hingga sepuluh kali lipat saat melacak `debugging` akibat `variable` liar yang tak terduga.
- **How (Bagaimana):**

```js
// ✅ Penulisan Gaya Lama (var):
var oldMessage = "Hello"; // Declaration variable menggunakan sintaks old-school

// ❌ Penulisan Implisit Tanpa Strict Mode (Sangat Tidak Dianjurkan):
// Tanpa perintah "use strict"
num = 5; // Variable "num" dibuat secara implisit oleh engine jika belum ada

// ✅ Pencegahan Penugasan Implisit Menggunakan Strict Mode:
("use strict");
num2 = 5; // Uncaught ReferenceError: num2 is not defined
```

- **Who (Siapa):** Pengembang, `engine` eksekusi JavaScript (_engine_), dan arahan eksekusi `"use strict"` yang bertindak sebagai penegak aturan tata bahasa kode modern.
- **When (Kapan):** Penggunaan `var` dan pembuatan `variable` implisit banyak ditemukan pada `script` lama dari era awal web. Namun, dalam standar pemrograman JavaScript modern, pembuatan `variable` implisit secara tegas dilarang dan wajib diganti dengan `declaration` formal (`let` atau `const`).
- **Where (Di mana):** Pembatasan perilaku ini terjadi pada `context` eksekusi `script` (_strict mode execution context_), di mana `engine` JavaScript akan menolak penugasan `value` ke `variable` yang belum pernah dideklarasikan.

### Konsep 3: Penggunaan `Keyword` `const` dan `Declaration` `Value` Tetap

- **What (Apa):** `Keyword` `const` digunakan untuk mendeklarasikan `variable` `constant`, yaitu wadah penyimpanan bernama yang `value`-nya bersifat tetap, permanen, dan tidak dapat `reassigned` setelah penugasan awal.
- **Why (Mengapa):** Penggunaan `const` menjamin `code safety`, mencegah ketidaksengajaan dalam mengubah `value` data kritis, serta menyampaikan `intent` yang jelas kepada pengembang lain bahwa `value` tersebut merupakan `constant` yang stabil. Sebagai contoh nyata, kode warna heksadesimal web atau batas `value` maksimum tidak boleh berubah secara tak terduga.
- **How (Bagaimana):**

```js
// ❌ Declaration Dasar dan Penolakan Reassignment:
const myBirthday = "18.04.1982";
myBirthday = "01.01.2001"; // TypeError: Assignment to constant variable.

// ✅ 1. Hard-coded Constants:
// Menggunakan huruf kapital seluruhnya dengan pemisah garis bawah (uppercase with underscore).
// Diterapkan pada value tetap yang sudah diketahui secara pasti sebelum script dieksekusi.
const COLOR_RED = "#F00";
const COLOR_ORANGE = "#FF7F00";
let color = COLOR_ORANGE; // Memudahkan pembacaan dibandingkan mengetik "#FF7F00"

// ✅ 2. Runtime Constants:
// Menggunakan gaya penulisan biasa (camelCase).
// Diterapkan pada value constant yang tidak diketahui sebelum script berjalan,
// melainkan baru dihitung atau dievaluasi pada `runtime`.
const pageLoadTime = 120; // waktu yang dibutuhkan halaman untuk memuat
const calculatedAge = someCode(myBirthday); // Usia dihitung saat run-time berdasarkan tanggal lahir
```

- **When (Kapan):** `Keyword` `const` harus digunakan sebagai pilihan utama setiap kali Anda yakin bahwa `value` `variable` tersebut tidak perlu dan tidak boleh diubah sepanjang eksekusi program.

### Konsep 4: Aturan Sintaksis dan `Naming Convention` `Variable` (`Naming Conventions`)

- **What (Apa):** Penamaan `variable` dalam JavaScript terikat pada batasan hukum sintaksis mutlak dan aturan konvensi profesional:
  - **Batasan Sintaksis Mutlak:** Nama `variable` hanya boleh terdiri dari huruf, angka, simbol tanda dolar (`$`), atau garis bawah (`_`). Karakter pertama tidak boleh berupa angka.
  - **`Keyword` Terlarang (`Reserved Keywords`):** Nama `variable` tidak boleh menggunakan `keyword` resmi milik bahasa JavaScript, seperti `let`, `const`, `function`, `class`, dan `return`.
  - **Karakter Terlarang:** Simbol khusus seperti tanda seru (`!`), at (`@`), atau tanda hubung (`-`) dilarang keras digunakan.
- **Why (Mengapa):** Penamaan `variable` yang deskriptif dan `human-readable` sangat menentukan keterbacaan serta pemeliharaan kode jangka panjang. Penggunaan nama `variable` abstrak yang singkat seperti `x`, `y`, `a`, `b`, `data`, atau `value` sangat tidak disarankan karena tidak menyampaikan konteks data yang jelas, sehingga menyulitkan kolaborasi tim.
- **How (Bagaimana):**

```js
// ✅ Contoh Nama Valid
let userName;
let _score;
let $total;
let test123;

// ❌ Tidak Valid (Menghasilkan SyntaxError)
let 1stPlace; // SyntaxError: diawali oleh angka
let my-name;  // SyntaxError: tanda hubung '-' tidak diizinkan
let let = 5;  // SyntaxError: 'let' adalah reserved keyword

// ✅ Demonstrasi `Case Sensitivity`:
let userAge = 25;
let UserAge = 30; // 'userAge' dan 'UserAge' adalah dua variable yang sepenuhnya berbeda
let apple;
let APPLE; // Berbeda lokasi memory dengan 'apple'

// ✅ Kasus Khusus Huruf Non-Latin (Valid secara teknis, tapi hindari):
let имя = 'John'; // Cyrillic
let 我 = 'Earth'; // Karakter Mandarin

// ✅ Penggunaan camelCase untuk Multi-kata:
let thisIsCamelCase;
let currentUserName;
let ourPlanetName = "Earth";

// ❌ Perbandingan Penamaan Buruk (Abstrak dan tidak memberikan konteks)
let x = 10;
let y = "John";

// ✅ Perbandingan Penamaan Baik (Deskriptif dan konsisten)
let age = 10;
let currentPersonName = "John";
let shoppingCart = ["book", "pen"];
```

> [!NOTE]
> **Catatan Arsitektur:** Meskipun huruf non-Latin secara teknis diizinkan oleh `engine` JavaScript, konvensi internasional mewajibkan penggunaan Bahasa Inggris dalam penamaan `variable` agar kode dapat dibaca oleh pengembang dari seluruh dunia.

- **When (Kapan):** Aturan sintaksis ini wajib dipatuhi tanpa pengecualian dan `naming convention` deskriptif harus diterapkan setiap kali Anda mendeklarasikan `variable` baru dalam proyek aplikasi apa pun.

### Poin Kunci

- `Variable` adalah wadah data dalam `memory`; `let` digunakan untuk `variable` yang `value`-nya bisa `reassignment`.
- Jangan membuat `variable` secara implisit tanpa `declaration`, dan selalu gunakan `"use strict"` (`Strict Mode`).
- Hindari `var` dalam penulisan modern.
- Gunakan `const` untuk `value` yang tetap dan tidak boleh diubah (`constant`).
- `Constant` yang sudah diketahui sebelum _runtime_ (`hard-coded`) ditulis dengan huruf kapital bergaris bawah (`COLOR_RED`). `Constant` _runtime_ ditulis dengan _camelCase_ (`pageLoadTime`).
- Penamaan `variable` terikat sintaksis mutlak (huruf, angka, `$`, `_`, dilarang diawali angka atau memakai _reserved keywords_).
- JavaScript bersifat _case-sensitive_ (membedakan huruf besar dan kecil).
- `Variable` sebaiknya menggunakan nama deskriptif berbahasa Inggris dalam format _camelCase_.

---

## 2. Kuis

Bagian kuis ini dirancang sebagai instrumen `self-assessment` untuk menguji daya ingat dan pemahaman konseptual Anda terhadap seluruh aturan `declaration`, sifat `memory`, serta `naming convention` `variable` JavaScript yang telah dipelajari.

1. Apakah pengertian dan `function` utama dari `variable` dalam aplikasi JavaScript?
2. `Keyword` apakah yang digunakan untuk mendeklarasikan `variable` jika `value`-nya direncanakan untuk diperbarui di masa mendatang?
3. Apakah hasil keluaran yang di-`return` ketika sebuah `variable` yang baru dideklarasikan menggunakan `let` dipanggil sebelum diberi `value` awal?
4. Apakah perbedaan konseptual antara `assignment operator` (`=`) dengan `equality check` (_equality_)?
5. Konsekuensi sintaksis apakah yang akan terjadi jika Anda `redeclare` nama `variable` yang sama dua kali menggunakan `keyword` `let` dalam `scope` yang sama?
6. Karakter simbol khusus apa sajakah yang diizinkan untuk digunakan sebagai karakter pertama dalam penamaan `variable` JavaScript?
7. Jelaskan apa yang dimaksud dengan sifat _case-sensitivity_ pada penamaan `variable` JavaScript dan berikan contoh sederhananya!
8. Apakah yang dimaksud dengan gaya penulisan _camelCase_ dan bagaimanakah cara penerapannya pada nama `variable` yang terdiri dari beberapa kata?
9. Apakah perbedaan aturan penulisan `uppercase` pada `variable` `const` yang `value`-nya _hard-coded_ dibandingkan dengan `variable` `const` yang `value`-nya dihitung saat _run-time_?
10. Apakah dampak yang terjadi jika sebuah `script` menjalankan `strict mode` (`"use strict"`) dan mencoba mengisi `value` ke dalam `variable` tanpa mendeklarasikannya terlebih dahulu?

> Silakan selesaikan seluruh pertanyaan di atas secara mandiri sebelum Anda melihat kunci jawaban resmi pada bagian selanjutnya.

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details>
<summary><strong>1. Pengertian `Variable`</strong></summary>

`Variable` adalah wadah `named storage` di dalam `memory` yang digunakan untuk menyimpan, mereferensikan, dan memanipulasi data selama program berjalan. Konsep ini memfasilitasi pelacakan informasi dinamis seperti angka atau teks dalam berbagai aplikasi seperti keranjang belanja atau obrolan. Dengan `variable`, pengembang dapat mengakses dan memperbarui data tersebut di mana pun diperlukan dalam `script`.

</details>

<details>
<summary><strong>2. `Keyword` untuk `Variable` Dinamis</strong></summary>

`Keyword` yang digunakan untuk mendeklarasikan `variable` yang `value`-nya akan diperbarui di masa mendatang adalah `let`. `Keyword` ini memungkinkan terjadinya proses `reassignment` `value` baru ke `variable` yang sudah ada. `Reassignment` ini dilakukan cukup dengan memanggil nama `variable`-nya tanpa perlu menambahkan `keyword` `let` kembali.

</details>

<details>
<summary><strong>3. `Variable` Tanpa `Value` Awal</strong></summary>

Hasil keluaran yang di-`return` dari `variable` yang baru dideklarasikan menggunakan `let` namun belum diberi `value` adalah `undefined`. Dalam spesifikasi JavaScript, `value` `undefined` ini secara khusus berarti bahwa `variable` tersebut "tidak memiliki `value`" (_it has no value_). Jika `variable` tersebut dipanggil menggunakan `function` `console.log()`, sistem akan menampilkan pesan `undefined`.

</details>

<details>
<summary><strong>4. `Assignment Operator` vs `Equality Check`</strong></summary>

`Assignment operator` (`=`) berfungsi untuk memasukkan atau menyimpan `value` dari sisi kanan ke dalam wadah `variable` di sisi kiri. `Operator` ini sama sekali tidak digunakan untuk menguji atau memeriksa kesamaan `value` antara dua `object`. `Equality check` dalam JavaScript menggunakan `comparison operator` khusus yang terpisah.

</details>

<details>
<summary><strong>5. Konsekuensi `Redeclaration`</strong></summary>

`Redeclare` `variable` yang sama lebih dari satu kali menggunakan `let` akan menyebabkan `syntax error` (`SyntaxError: 'message' has already been declared`). Aturan JavaScript menetapkan bahwa sebuah nama `variable` hanya boleh dideklarasikan satu kali dalam `scope`-nya. Perubahan `value` selanjutnya wajib dilakukan melalui `reassignment` tanpa menuliskan kembali `keyword` `declaration`.

</details>

<details>
<summary><strong>6. Karakter Khusus yang Diizinkan</strong></summary>

Karakter khusus yang diizinkan menjadi karakter pertama dalam nama `variable` JavaScript adalah simbol tanda dolar (`$`) dan `underscore` (`_`). Kedua simbol khusus ini diperlakukan secara identik seperti huruf standar oleh `engine` JavaScript tanpa memiliki makna operasional khusus. Selain huruf dan kedua simbol ini, karakter lain seperti angka tidak boleh diletakkan di posisi awal penamaan.

</details>

<details>
<summary><strong>7. `Case-sensitivity`</strong></summary>

Sifat _case-sensitivity_ berarti JavaScript membedakan secara tegas penggunaan huruf besar dan huruf kecil dalam nama `variable`. Sebagai contoh, `variable` bernama `age` dan `Age` dianggap sebagai dua `variable` yang sepenuhnya berbeda dan terpisah di `memory`. Hal yang sama berlaku untuk pasangan nama `variable` lain seperti `apple` dan `APPLE`.

</details>

<details>
<summary><strong>8. Gaya Penulisan `camelCase`</strong></summary>

Gaya penulisan _camelCase_ adalah `naming convention` `variable` multi-kata di mana kata pertama ditulis dengan huruf kecil seluruhnya, kemudian setiap kata berikutnya diawali huruf kapital. Contoh penerapannya dapat dilihat pada `variable` `userName`, `thisIsCamelCase`, atau `currentUserName`. Konvensi ini digunakan secara luas untuk menjaga keterbacaan kode agar tetap rapi dan konsisten.

</details>

<details>
<summary><strong>9. Aturan Kapitalisasi const</strong></summary>

`Uppercase` dengan garis bawah digunakan untuk `variable` `const` bernilai _hard-coded_ yang `value`-nya sudah diketahui secara pasti sebelum eksekusi program, seperti `COLOR_RED`. Sementara itu, `variable` `const` yang `value`-nya baru dihitung atau dievaluasi saat `runtime`, seperti `pageLoadTime` atau `age`, tetap ditulis menggunakan penulisan normal (_camelCase_). Meskipun keduanya bersifat `constant` dan tidak dapat diubah kembali, pembedaan kapitalisasi ini menandai asal pemrosesan `value`-nya.

</details>

<details>
<summary><strong>10. Dampak `Strict Mode` pada `Variable` Implisit</strong></summary>

Dalam `strict mode` (`"use strict"`), melakukan penugasan `value` ke `variable` yang belum dideklarasikan akan memicu kesalahan sistem (`Uncaught ReferenceError: num is not defined`). `Strict mode` secara sengaja menghentikan pembuatan `variable` implisit otomatis yang dahulu diperbolehkan pada `script` lama. Aturan ini diciptakan untuk mencegah praktik penulisan kode yang buruk serta memudahkan proses pelacakan `debugging`.

</details>

---

## 4. Soal Esai

Soal esai berikut disusun untuk melatih penalaran analitis, kemampuan sintesis, serta evaluasi `trade-offs` yang harus diambil oleh seorang pengembang perangkat lunak saat mengelola `variable` dalam skenario pemrograman JavaScript. Saat menjawab, Anda sangat dianjurkan untuk menuliskan penjelasan konseptual secara utuh dan mendalam, bukan sekadar ringkasan singkat, guna membangun kebiasaan komunikasi teknis yang profesional.

1. **Analisis Perbandingan (`let` vs `var` vs `const`):** Bandingkan penggunaan `keyword` `let`, `var`, dan `const` berdasarkan kemampuan pembaruan `value` (_reassignment_) serta standar penggunaannya dalam praktik pemrograman JavaScript modern!
2. **Studi Kasus Konvensi Kapitalisasi `const`:** Dalam sebuah aplikasi, seorang pengembang mendeklarasikan `const BIRTHDAY = '18.04.1982'` dan `const age = someCode(BIRTHDAY)`. Analisis mengapa `variable` `BIRTHDAY` ditulis menggunakan huruf kapital seluruhnya, sedangkan `age` menggunakan huruf kecil (_camelCase_), meskipun keduanya sama-sama dideklarasikan menggunakan `keyword` `const`!
3. **Evaluasi Kualitas Penamaan dan Keterbacaan:** Bandingkan dampak jangka panjang terhadap `maintenance` antara penggunaan nama `variable` generik (seperti `x`, `y`, `data`, `value`) dengan nama `variable` yang deskriptif (seperti `currentUserName`, `shoppingCart`) ketika bekerja dalam tim pengembang!
4. **Analisis Perilaku Rekayasa Kode (Menciptakan Baru vs Menggunakan Kembali `Variable`):** Evaluasi dampak teknis dan risiko _debugging_ dari kebiasaan pengembang yang suka menghemat `declaration` dengan mendaur ulang satu `variable` yang sama untuk berbagai jenis data yang berbeda, dibandingkan dengan membuat `variable` baru untuk setiap `value` data!
5. **Studi Kasus Penegakan Aturan `Strict Mode` (`"use strict"`):** Analisis perbedaan perilaku `engine` JavaScript ketika menemukan perintah penugasan `value` tanpa `declaration` (contoh: `num = 5`) pada `script` tanpa `"use strict"` dibandingkan dengan `script` yang menggunakan `"use strict"`, serta mengapa aturan ini diciptakan!

---

## 5. Glosarium

Penguasaan `technical vocabulary` yang tepat sangat penting bagi pengembang JavaScript agar dapat berkomunikasi secara efektif, memahami dokumentasi resmi, serta berkolaborasi secara profesional dalam industri pengembangan perangkat lunak.

| Istilah Teknis                                                        | Definisi Berdasarkan Teks Sumber                                                                                                                                                                                              |
| :-------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`Assignment Operator` (`Assignment Operator`)**                     | Simbol sama dengan (`=`) yang digunakan untuk memasukkan atau menyimpan suatu `value` data ke dalam wadah `variable`, dan bukan untuk memeriksa kesamaan `value`.                                                             |
| **`CamelCase` (Gaya Penulisan `camelCase`)**                          | `Naming convention` `variable` multi-kata di mana kata pertama ditulis dengan huruf kecil dan setiap kata berikutnya diawali huruf kapital (contoh: `thisIsCamelCase`).                                                       |
| **Comments (Comment Kode)**                                           | Catatan instruksional yang ditulis dalam kode menggunakan simbol `//` yang berguna bagi pengembang tetapi diabaikan oleh `engine` saat kode dijalankan.                                                                       |
| **`Console`.log() (`Function` Output `Console` Browser)**             | `Function` bawaan JavaScript yang digunakan untuk menampilkan informasi atau `value` `variable` ke `console` browser guna keperluan pelacakan `debugging`.                                                                    |
| **Const (`Keyword` `Constant`)**                                      | `Keyword` `declaration` untuk membuat `variable` `constant` yang `value`-nya bersifat tetap, permanen, dan tidak dapat `reassigned`.                                                                                          |
| **`Hard-coded` `Constants` (`Constant` `Value` Tetap / Terpatri)**    | `Constant` yang `value`-nya sudah diketahui secara pasti sebelum program dieksekusi dan ditulis langsung ke dalam kode, yang dinamai dengan huruf kapital seluruhnya dan garis bawah (contoh: `COLOR_RED`).                   |
| **`Initialization` (`Initialization` `Variable`)**                    | Proses penugasan atau pemberian `value` awal ke dalam sebuah `variable` untuk pertama kalinya.                                                                                                                                |
| **Let (`Keyword` `Declaration` `Variable` Dinamis)**                  | `Keyword` modern yang digunakan untuk mendeklarasikan `variable` yang `value`-nya dapat diubah atau diperbarui kembali (_reassigned_) sepanjang program berjalan.                                                             |
| **`Reassignment` (`Reassignment` `Value`)**                           | Proses memberikan atau memasukkan `value` baru ke dalam `variable` yang sebelumnya sudah memiliki `value`, tanpa perlu menuliskan kembali `keyword` `declaration`.                                                            |
| **`Reserved Keywords` (`Keyword` Terpesan/Terlarang)**                | Kata-kata khusus milik bahasa JavaScript (seperti `let`, `const`, `function`, `class`, dan `return`) yang dilarang digunakan sebagai nama `variable`.                                                                         |
| **`Runtime` `Constants` (`Constant` Waktu Eksekusi)**                 | `Constant` yang `value`-nya baru dihitung atau dievaluasi saat `script` berjalan (_run-time_) dan dinamai menggunakan gaya penulisan biasa (_camelCase_).                                                                     |
| **`Strict Mode` / "use strict" (`Strict Mode` Execution JavaScript)** | Arahan khusus yang digunakan untuk mengunci eksekusi `script` ke dalam aturan ketat, seperti memicu `error` jika terdapat `variable` yang diisi `value` tanpa dideklarasikan.                                                 |
| **SyntaxError (`Syntax Error`)**                                      | Pesan kesalahan sistem yang muncul akibat adanya pelanggaran tata bahasa atau aturan penulisan sintaks JavaScript (seperti `redeclare` `variable` `let` dua kali atau menggunakan `keyword` terpesan seperti `let let = 5;`). |
| **`Undefined` (Data `Type`/Kondisi `Value` Belum Terdefinisi)**       | Kondisi atau `value` bawaan yang di-`return` oleh `variable` yang telah dideklarasikan namun belum diberi isi/`value` data, yang secara khusus berarti "tidak memiliki `value`" (_has no value_).                             |
| **Var (`Keyword` `Declaration` Gaya Lama)**                           | `Keyword` `declaration` `variable` `old-school` yang ditemukan pada `script` JavaScript lama.                                                                                                                                 |
| **`Variable` (`Variable` / Wadah Data)**                              | Penyimpanan bernama (_named storage_) atau wadah `memory` berlabel yang digunakan untuk menyimpan, mereferensikan, dan mengubah data dalam program.                                                                           |

> Laporan dan catatan belajar komprehensif ini disusun sebagai panduan belajar mandiri yang utuh untuk memantapkan pemahaman dasar `variable` dalam JavaScript.

---
⬅️ Sebelumnya | [Selanjutnya ➡️](2-js-data-types.md)
