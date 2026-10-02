# 📦 Panduan Belajar JavaScript: Konsep Dasar Variabel

> Dalam ranah pengembangan aplikasi modern menggunakan JavaScript—seperti platform toko online yang mengelola informasi barang dan keranjang belanja, hingga aplikasi obrolan (chat) yang mengelola profil pengguna dan pesan—program perangkat lunak secara konstan berinteraksi dengan data. Pemahaman mendalam mengenai variabel merupakan fondasi paling krusial bagi setiap pemula karena variabel berfungsi sebagai mekanisme utama untuk mengalokasikan ruang memori, menyimpan, serta memanipulasi data sepanjang skrip dieksekusi. Menguasai tata cara deklarasi, alokasi memori, dan konvensi penamaan variabel akan memberikan kepastian logika, mencegah timbulnya bug tersembunyi, serta membentuk landasan arsitektur perangkat lunak yang kokoh dan dapat dipelihara dalam jangka panjang.

## Daftar Isi

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

### Konsep 1: Variabel sebagai Wadah Data Memori (`let` & Reassignment)

- **What (Apa):** Variabel adalah "penyimpanan bernama" (_named storage_) di dalam memori komputer yang dapat dianalogikan sebagai sebuah "kotak" fisik dengan stiker berlabel unik. Kotak ini bertindak sebagai wadah untuk menyimpan nilai data (seperti angka atau teks) yang dapat dipanggil, dibaca, dan diperbarui sepanjang program berjalan.
- **Why (Mengapa):** Variabel memecahkan masalah pelacakan data yang dinamis selama eksekusi program. Skenario nyata seperti memperbarui skor poin dalam sebuah permainan (_game_), memantau item di keranjang belanja, atau mencatat pesan obrolan membutuhkan mekanisme fleksibel. Fitur reassignment (penugasan ulang) memungkinkan pengembang untuk memperbarui isi data di dalam wadah tanpa merusak label/stiker wadah tersebut maupun tanpa perlu membuat kotak baru.
- **How (Bagaimana):** Deklarasi variabel dinamis dilakukan dengan kata kunci `let`, diikuti nama variabel (_identifier_), dan operator penugasan (`=`) untuk memasukkan nilai ke dalam wadah.

```js
// ✅ Deklarasi, Inisialisasi, dan Penugasan Ulang (Reassignment):
// Deklarasi: Membuat kotak bernama 'age' di memori (stiker label = 'age', isi kotak = undefined)
let age;

// Inisialisasi: Memasukkan nilai pertama kali ke dalam kotak 'age'
age = 25; // Isi kotak 'age' sekarang adalah angka 25

// Reassignment: Mengubah isi nilai di dalam kotak 'age' tanpa menulis ulang 'let'
age = 30; // Nilai lama (25) dihapus dari memori, digantikan dengan angka 30

// ✅ Menggabungkan Deklarasi dan Inisialisasi dalam Satu Baris:
let message = "Hello!"; // Kotak 'message' diciptakan dan langsung diisi teks 'Hello!'

// ✅ Menyalin Data Antar-Variabel:
let hello = "Hello world!";
let newMessage;
newMessage = hello; // Nilai dari kotak 'hello' disalin ke dalam kotak 'newMessage'

// ❌ Larangan Deklarasi Ulang (Redeclaration Error):
let greeting = "This";
let greeting = "That"; // SyntaxError: Identifier 'greeting' has already been declared
```

- **Who (Siapa):** Komponen yang terlibat mencakup kata kunci deklarasi (`let`), nama variabel/label (_identifier_ seperti `age` atau `message`), operator penugasan (`=`), dan nilai/isi data (_literal_ seperti `25` atau `'Hello!'`). Seluruh alokasi ini dikelola secara otomatis oleh mesin (_engine_) JavaScript.
- **When (Kapan):** Kata kunci `let` digunakan ketika sebuah nilai diperkirakan akan berubah, diperbarui, atau dihitung ulang selama skrip berjalan (seperti pembaruan poin skor atau status koneksi pengguna).
- **Where (Di mana):** Nilai data dialokasikan dan disimpan di dalam ruang memori komputer (_memory area_) yang terhubung langsung dengan nama variabel tersebut selama sesi eksekusi skrip.

### Konsep 2: Perilaku Deklarasi Lama (`var`) dan Deklarasi Implisit Tanpa Strict Mode

- **What (Apa):** Kata kunci `var` adalah metode deklarasi variabel gaya lama (_old-school_). Selain `var`, JavaScript secara historis juga memungkinkan pembuatan variabel secara implisit, yaitu mengisi nilai ke suatu nama variabel tanpa mendahuluinya dengan kata kunci deklarasi apa pun.
- **Why (Mengapa):** Memahami `var` dan pemisahan mode deklarasi sangat penting ketika membaca dan memelihara kode legacy (_legacy code_). Pembuatan variabel secara implisit tanpa deklarasi merupakan praktik yang sangat berbahaya; pengembang yang enggan menuliskan kata kunci deklarasi mungkin menghemat sedikit waktu saat mengetik, namun berisiko kehilangan waktu hingga sepuluh kali lipat saat melacak kesalahan (_debugging_) akibat variabel liar yang tak terduga.
- **How (Bagaimana):**

```js
// ✅ Penulisan Gaya Lama (var):
var oldMessage = "Hello"; // Deklarasi variabel menggunakan sintaks old-school

// ❌ Penulisan Implisit Tanpa Strict Mode (Sangat Tidak Dianjurkan):
// Tanpa perintah "use strict"
num = 5; // Variabel "num" dibuat secara implisit oleh mesin jika belum ada

// ✅ Pencegahan Penugasan Implisit Menggunakan Strict Mode:
("use strict");
num2 = 5; // Uncaught ReferenceError: num2 is not defined
```

- **Who (Siapa):** Pengembang, mesin eksekusi JavaScript (_engine_), dan arahan eksekusi `"use strict"` yang bertindak sebagai penegak aturan tata bahasa kode modern.
- **When (Kapan):** Penggunaan `var` dan pembuatan variabel implisit banyak ditemukan pada skrip lama dari era awal web. Namun, dalam standar pemrograman JavaScript modern, pembuatan variabel implisit secara tegas dilarang dan wajib diganti dengan deklarasi formal (`let` atau `const`).
- **Where (Di mana):** Pembatasan perilaku ini terjadi pada konteks eksekusi skrip (_strict mode execution context_), di mana mesin JavaScript akan menolak penugasan nilai ke variabel yang belum pernah dideklarasikan.

### Konsep 3: Penggunaan Kata Kunci `const` dan Deklarasi Nilai Tetap

- **What (Apa):** Kata kunci `const` digunakan untuk mendeklarasikan variabel konstan, yaitu wadah penyimpanan bernama yang nilainya bersifat tetap, permanen, dan tidak dapat diubah kembali (_reassigned_) setelah penugasan awal.
- **Why (Mengapa):** Penggunaan `const` menjamin keamanan kode (_code safety_), mencegah ketidaksengajaan dalam mengubah nilai data kritis, serta menyampaikan niat (_intent_) yang jelas kepada pengembang lain bahwa nilai tersebut merupakan konstanta yang stabil. Sebagai contoh nyata, kode warna heksadesimal web atau batas nilai maksimum tidak boleh berubah secara tak terduga.
- **How (Bagaimana):**

```js
// ❌ Deklarasi Dasar dan Penolakan Reassignment:
const myBirthday = "18.04.1982";
myBirthday = "01.01.2001"; // TypeError: Assignment to constant variable.

// ✅ 1. Hard-coded Constants:
// Menggunakan huruf kapital seluruhnya dengan pemisah garis bawah (uppercase with underscore).
// Diterapkan pada nilai tetap yang sudah diketahui secara pasti sebelum skrip dieksekusi.
const COLOR_RED = "#F00";
const COLOR_ORANGE = "#FF7F00";
let color = COLOR_ORANGE; // Memudahkan pembacaan dibandingkan mengetik "#FF7F00"

// ✅ 2. Runtime Constants:
// Menggunakan gaya penulisan biasa (camelCase).
// Diterapkan pada nilai konstan yang tidak diketahui sebelum skrip berjalan,
// melainkan baru dihitung atau dievaluasi pada waktu eksekusi (run-time).
const pageLoadTime = 120; // waktu yang dibutuhkan halaman untuk memuat
const calculatedAge = someCode(myBirthday); // Usia dihitung saat run-time berdasarkan tanggal lahir
```

- **When (Kapan):** Kata kunci `const` harus digunakan sebagai pilihan utama setiap kali Anda yakin bahwa nilai variabel tersebut tidak perlu dan tidak boleh diubah sepanjang eksekusi program.

### Konsep 4: Aturan Sintaksis dan Konvensi Penamaan Variabel (Naming Conventions)

- **What (Apa):** Penamaan variabel dalam JavaScript terikat pada batasan hukum sintaksis mutlak dan aturan konvensi profesional:
  - **Batasan Sintaksis Mutlak:** Nama variabel hanya boleh terdiri dari huruf, angka, simbol tanda dolar (`$`), atau garis bawah (`_`). Karakter pertama tidak boleh berupa angka.
  - **Kata Kunci Terlarang (Reserved Keywords):** Nama variabel tidak boleh menggunakan kata kunci resmi milik bahasa JavaScript, seperti `let`, `const`, `function`, `class`, dan `return`.
  - **Karakter Terlarang:** Simbol khusus seperti tanda seru (`!`), at (`@`), atau tanda hubung (`-`) dilarang keras digunakan.
- **Why (Mengapa):** Penamaan variabel yang deskriptif dan logis (_human-readable_) sangat menentukan keterbacaan serta pemeliharaan kode jangka panjang. Penggunaan nama variabel abstrak yang singkat seperti `x`, `y`, `a`, `b`, `data`, atau `value` sangat tidak disarankan karena tidak menyampaikan konteks data yang jelas, sehingga menyulitkan kolaborasi tim.
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

// ✅ Demonstrasi Peka Huruf Besar/Kecil (Case Sensitivity):
let userAge = 25;
let UserAge = 30; // 'userAge' dan 'UserAge' adalah dua variabel yang sepenuhnya berbeda
let apple;
let APPLE; // Berbeda lokasi memori dengan 'apple'

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
> **Catatan Arsitektur:** Meskipun huruf non-Latin secara teknis diizinkan oleh mesin JavaScript, konvensi internasional mewajibkan penggunaan Bahasa Inggris dalam penamaan variabel agar kode dapat dibaca oleh pengembang dari seluruh dunia.

- **When (Kapan):** Aturan sintaksis ini wajib dipatuhi tanpa pengecualian dan konvensi penamaan deskriptif harus diterapkan setiap kali Anda mendeklarasikan variabel baru dalam proyek aplikasi apa pun.

### Poin Kunci

- Variabel adalah wadah data dalam memori; `let` digunakan untuk variabel yang nilainya bisa diubah (_reassignment_).
- Jangan membuat variabel secara implisit tanpa deklarasi, dan selalu gunakan `"use strict"` (Strict Mode).
- Hindari `var` dalam penulisan modern.
- Gunakan `const` untuk nilai yang tetap dan tidak boleh diubah (konstanta).
- Konstanta yang sudah diketahui sebelum _runtime_ (hard-coded) ditulis dengan huruf kapital bergaris bawah (`COLOR_RED`). Konstanta _runtime_ ditulis dengan _camelCase_ (`pageLoadTime`).
- Penamaan variabel terikat sintaksis mutlak (huruf, angka, `$`, `_`, dilarang diawali angka atau memakai _reserved keywords_).
- JavaScript bersifat _case-sensitive_ (membedakan huruf besar dan kecil).
- Variabel sebaiknya menggunakan nama deskriptif berbahasa Inggris dalam format _camelCase_.

---

## 2. Kuis

Bagian kuis ini dirancang sebagai instrumen evaluasi mandiri (_self-assessment_) untuk menguji daya ingat dan pemahaman konseptual Anda terhadap seluruh aturan deklarasi, sifat memori, serta konvensi penamaan variabel JavaScript yang telah dipelajari.

1. Apakah pengertian dan fungsi utama dari variabel dalam aplikasi JavaScript?
2. Kata kunci apakah yang digunakan untuk mendeklarasikan variabel jika nilainya direncanakan untuk diperbarui di masa mendatang?
3. Apakah hasil keluaran yang dikembalikan ketika sebuah variabel yang baru dideklarasikan menggunakan `let` dipanggil sebelum diberi nilai awal?
4. Apakah perbedaan konseptual antara operator penugasan (`=`) dengan pemeriksaan kesamaan (_equality_)?
5. Konsekuensi sintaksis apakah yang akan terjadi jika Anda mendeklarasikan ulang (_redeclare_) nama variabel yang sama dua kali menggunakan kata kunci `let` dalam cakupan yang sama?
6. Karakter simbol khusus apa sajakah yang diizinkan untuk digunakan sebagai karakter pertama dalam penamaan variabel JavaScript?
7. Jelaskan apa yang dimaksud dengan sifat _case-sensitivity_ pada penamaan variabel JavaScript dan berikan contoh sederhananya!
8. Apakah yang dimaksud dengan gaya penulisan _camelCase_ dan bagaimanakah cara penerapannya pada nama variabel yang terdiri dari beberapa kata?
9. Apakah perbedaan aturan penulisan huruf kapital (_uppercase_) pada variabel `const` yang nilainya _hard-coded_ dibandingkan dengan variabel `const` yang nilainya dihitung saat _run-time_?
10. Apakah dampak yang terjadi jika sebuah skrip menjalankan mode ketat (`"use strict"`) dan mencoba mengisi nilai ke dalam variabel tanpa mendeklarasikannya terlebih dahulu?

> Silakan selesaikan seluruh pertanyaan di atas secara mandiri sebelum Anda melihat kunci jawaban resmi pada bagian selanjutnya.

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details>
<summary><strong>1. Pengertian Variabel</strong></summary>

Variabel adalah wadah penyimpanan bernama (_named storage_) di dalam memori yang digunakan untuk menyimpan, mereferensikan, dan memanipulasi data selama program berjalan. Konsep ini memfasilitasi pelacakan informasi dinamis seperti angka atau teks dalam berbagai aplikasi seperti keranjang belanja atau obrolan. Dengan variabel, pengembang dapat mengakses dan memperbarui data tersebut di mana pun diperlukan dalam skrip.

</details>

<details>
<summary><strong>2. Kata Kunci untuk Variabel Dinamis</strong></summary>

Kata kunci yang digunakan untuk mendeklarasikan variabel yang nilainya akan diperbarui di masa mendatang adalah `let`. Kata kunci ini memungkinkan terjadinya proses penugasan ulang (_reassignment_) nilai baru ke variabel yang sudah ada. Penugasan ulang ini dilakukan cukup dengan memanggil nama variabelnya tanpa perlu menambahkan kata kunci `let` kembali.

</details>

<details>
<summary><strong>3. Variabel Tanpa Nilai Awal</strong></summary>

Hasil keluaran yang dikembalikan dari variabel yang baru dideklarasikan menggunakan `let` namun belum diberi nilai adalah `undefined`. Dalam spesifikasi JavaScript, nilai `undefined` ini secara khusus berarti bahwa variabel tersebut "tidak memiliki nilai" (_it has no value_). Jika variabel tersebut dipanggil menggunakan fungsi `console.log()`, sistem akan menampilkan pesan `undefined`.

</details>

<details>
<summary><strong>4. Operator Penugasan vs Pemeriksaan Kesamaan</strong></summary>

Operator penugasan (`=`) berfungsi untuk memasukkan atau menyimpan nilai dari sisi kanan ke dalam wadah variabel di sisi kiri. Operator ini sama sekali tidak digunakan untuk menguji atau memeriksa kesamaan nilai antara dua objek. Pemeriksaan kesamaan dalam JavaScript menggunakan operator pembanding khusus yang terpisah.

</details>

<details>
<summary><strong>5. Konsekuensi Deklarasi Ulang</strong></summary>

Mendeklarasikan ulang variabel yang sama lebih dari satu kali menggunakan `let` akan menyebabkan kesalahan sintaksis (`SyntaxError: 'message' has already been declared`). Aturan JavaScript menetapkan bahwa sebuah nama variabel hanya boleh dideklarasikan satu kali dalam cakupannya. Perubahan nilai selanjutnya wajib dilakukan melalui penugasan ulang tanpa menuliskan kembali kata kunci deklarasi.

</details>

<details>
<summary><strong>6. Karakter Khusus yang Diizinkan</strong></summary>

Karakter khusus yang diizinkan menjadi karakter pertama dalam nama variabel JavaScript adalah simbol tanda dolar (`$`) dan garis bawah (_underscore_ `_`). Kedua simbol khusus ini diperlakukan secara identik seperti huruf standar oleh mesin JavaScript tanpa memiliki makna operasional khusus. Selain huruf dan kedua simbol ini, karakter lain seperti angka tidak boleh diletakkan di posisi awal penamaan.

</details>

<details>
<summary><strong>7. Case-sensitivity</strong></summary>

Sifat _case-sensitivity_ berarti JavaScript membedakan secara tegas penggunaan huruf besar dan huruf kecil dalam nama variabel. Sebagai contoh, variabel bernama `age` dan `Age` dianggap sebagai dua variabel yang sepenuhnya berbeda dan terpisah di memori. Hal yang sama berlaku untuk pasangan nama variabel lain seperti `apple` dan `APPLE`.

</details>

<details>
<summary><strong>8. Gaya Penulisan camelCase</strong></summary>

Gaya penulisan _camelCase_ adalah konvensi penamaan variabel multi-kata di mana kata pertama ditulis dengan huruf kecil seluruhnya, kemudian setiap kata berikutnya diawali huruf kapital. Contoh penerapannya dapat dilihat pada variabel `userName`, `thisIsCamelCase`, atau `currentUserName`. Konvensi ini digunakan secara luas untuk menjaga keterbacaan kode agar tetap rapi dan konsisten.

</details>

<details>
<summary><strong>9. Aturan Kapitalisasi const</strong></summary>

Huruf kapital (_uppercase_) dengan garis bawah digunakan untuk variabel `const` bernilai _hard-coded_ yang nilainya sudah diketahui secara pasti sebelum eksekusi program, seperti `COLOR_RED`. Sementara itu, variabel `const` yang nilainya baru dihitung atau dievaluasi saat waktu berjalan (_run-time_), seperti `pageLoadTime` atau `age`, tetap ditulis menggunakan penulisan normal (_camelCase_). Meskipun keduanya bersifat konstan dan tidak dapat diubah kembali, pembedaan kapitalisasi ini menandai asal pemrosesan nilainya.

</details>

<details>
<summary><strong>10. Dampak Strict Mode pada Variabel Implisit</strong></summary>

Dalam mode ketat (`"use strict"`), melakukan penugasan nilai ke variabel yang belum dideklarasikan akan memicu kesalahan sistem (`Uncaught ReferenceError: num is not defined`). Mode ketat secara sengaja menghentikan pembuatan variabel implisit otomatis yang dahulu diperbolehkan pada skrip lama. Aturan ini diciptakan untuk mencegah praktik penulisan kode yang buruk serta memudahkan proses pelacakan kesalahan (_debugging_).

</details>

---

## 4. Soal Esai

Soal esai berikut disusun untuk melatih penalaran analitis, kemampuan sintesis, serta evaluasi keputusan teknis (_trade-offs_) yang harus diambil oleh seorang pengembang perangkat lunak saat mengelola variabel dalam skenario pemrograman JavaScript. Saat menjawab, Anda sangat dianjurkan untuk menuliskan penjelasan konseptual secara utuh dan mendalam, bukan sekadar ringkasan singkat, guna membangun kebiasaan komunikasi teknis yang profesional.

1. **Analisis Perbandingan (`let` vs `var` vs `const`):** Bandingkan penggunaan kata kunci `let`, `var`, dan `const` berdasarkan kemampuan pembaruan nilai (_reassignment_) serta standar penggunaannya dalam praktik pemrograman JavaScript modern!
2. **Studi Kasus Konvensi Kapitalisasi `const`:** Dalam sebuah aplikasi, seorang pengembang mendeklarasikan `const BIRTHDAY = '18.04.1982'` dan `const age = someCode(BIRTHDAY)`. Analisis mengapa variabel `BIRTHDAY` ditulis menggunakan huruf kapital seluruhnya, sedangkan `age` menggunakan huruf kecil (_camelCase_), meskipun keduanya sama-sama dideklarasikan menggunakan kata kunci `const`!
3. **Evaluasi Kualitas Penamaan dan Keterbacaan:** Bandingkan dampak jangka panjang terhadap pemeliharaan kode (_maintenance_) antara penggunaan nama variabel generik (seperti `x`, `y`, `data`, `value`) dengan nama variabel yang deskriptif (seperti `currentUserName`, `shoppingCart`) ketika bekerja dalam tim pengembang!
4. **Analisis Perilaku Rekayasa Kode (Menciptakan Baru vs Menggunakan Kembali Variabel):** Evaluasi dampak teknis dan risiko _debugging_ dari kebiasaan pengembang yang suka menghemat deklarasi dengan mendaur ulang satu variabel yang sama untuk berbagai jenis data yang berbeda, dibandingkan dengan membuat variabel baru untuk setiap nilai data!
5. **Studi Kasus Penegakan Aturan Mode Ketat (`"use strict"`):** Analisis perbedaan perilaku mesin JavaScript ketika menemukan perintah penugasan nilai tanpa deklarasi (contoh: `num = 5`) pada skrip tanpa `"use strict"` dibandingkan dengan skrip yang menggunakan `"use strict"`, serta mengapa aturan ini diciptakan!

---

## 5. Glosarium

Penguasaan terminologi teknis (_technical vocabulary_) yang tepat sangat penting bagi pengembang JavaScript agar dapat berkomunikasi secara efektif, memahami dokumentasi resmi, serta berkolaborasi secara profesional dalam industri pengembangan perangkat lunak.

| Istilah Teknis                                                  | Definisi Berdasarkan Teks Sumber                                                                                                                                                                                                       |
| :-------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Assignment Operator (Operator Penugasan)**                    | Simbol sama dengan (`=`) yang digunakan untuk memasukkan atau menyimpan suatu nilai data ke dalam wadah variabel, dan bukan untuk memeriksa kesamaan nilai.                                                                            |
| **CamelCase (Gaya Penulisan camelCase)**                        | Konvensi penamaan variabel multi-kata di mana kata pertama ditulis dengan huruf kecil dan setiap kata berikutnya diawali huruf kapital (contoh: `thisIsCamelCase`).                                                                    |
| **Comments (Komentar Kode)**                                    | Catatan instruksional yang ditulis dalam kode menggunakan simbol `//` yang berguna bagi pengembang tetapi diabaikan oleh mesin saat kode dijalankan.                                                                                   |
| **Console.log() (Fungsi Output Konsol Browser)**                | Fungsi bawaan JavaScript yang digunakan untuk menampilkan informasi atau nilai variabel ke konsol browser guna keperluan pelacakan kesalahan (_debugging_).                                                                            |
| **Const (Kata Kunci Konstan)**                                  | Kata kunci deklarasi untuk membuat variabel konstan yang nilainya bersifat tetap, permanen, dan tidak dapat diubah kembali (_reassigned_).                                                                                             |
| **Hard-coded Constants (Konstanta Nilai Tetap / Terpatri)**     | Konstanta yang nilainya sudah diketahui secara pasti sebelum program dieksekusi dan ditulis langsung ke dalam kode, yang dinamai dengan huruf kapital seluruhnya dan garis bawah (contoh: `COLOR_RED`).                                |
| **Initialization (Inisialisasi Variabel)**                      | Proses penugasan atau pemberian nilai awal ke dalam sebuah variabel untuk pertama kalinya.                                                                                                                                             |
| **Let (Kata Kunci Deklarasi Variabel Dinamis)**                 | Kata kunci modern yang digunakan untuk mendeklarasikan variabel yang nilainya dapat diubah atau diperbarui kembali (_reassigned_) sepanjang program berjalan.                                                                          |
| **Reassignment (Penugasan Ulang Nilai)**                        | Proses memberikan atau memasukkan nilai baru ke dalam variabel yang sebelumnya sudah memiliki nilai, tanpa perlu menuliskan kembali kata kunci deklarasi.                                                                              |
| **Reserved Keywords (Kata Kunci Terpesana/Terlarang)**          | Kata-kata khusus milik bahasa JavaScript (seperti `let`, `const`, `function`, `class`, dan `return`) yang dilarang digunakan sebagai nama variabel.                                                                                    |
| **Runtime Constants (Konstanta Waktu Eksekusi)**                | Konstanta yang nilainya baru dihitung atau dievaluasi saat skrip berjalan (_run-time_) dan dinamai menggunakan gaya penulisan biasa (_camelCase_).                                                                                     |
| **Strict Mode / "use strict" (Mode Ketat Eksekusi JavaScript)** | Arahan khusus yang digunakan untuk mengunci eksekusi skrip ke dalam aturan ketat, seperti memicu error jika terdapat variabel yang diisi nilai tanpa dideklarasikan.                                                                   |
| **SyntaxError (Kesalahan Sintaksis)**                           | Pesan kesalahan sistem yang muncul akibat adanya pelanggaran tata bahasa atau aturan penulisan sintaks JavaScript (seperti mendefinisikan ulang variabel `let` dua kali atau menggunakan kata kunci terpesana seperti `let let = 5;`). |
| **Undefined (Tipe/Kondisi Nilai Belum Terdefinisi)**            | Kondisi atau nilai bawaan yang dikembalikan oleh variabel yang telah dideklarasikan namun belum diberi isi/nilai data, yang secara khusus berarti "tidak memiliki nilai" (_has no value_).                                             |
| **Var (Kata Kunci Deklarasi Gaya Lama)**                        | Kata kunci deklarasi variabel gaya lama (_old-school_) yang ditemukan pada skrip JavaScript lama.                                                                                                                                      |
| **Variable (Variabel / Wadah Data)**                            | Penyimpanan bernama (_named storage_) atau wadah memori berlabel yang digunakan untuk menyimpan, mereferensikan, dan mengubah data dalam program.                                                                                      |

> Laporan dan catatan belajar komprehensif ini disusun sebagai panduan belajar mandiri yang utuh untuk memantapkan pemahaman dasar variabel dalam JavaScript.
