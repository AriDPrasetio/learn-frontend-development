# 📝 Panduan Belajar JavaScript: Kejelasan Kode (Komentar dan Titik Koma)

> Ringkasan: Panduan ini membahas pentingnya menjaga kejelasan kode (_code clarity_) melalui penggunaan komentar yang tepat, serta pemahaman aturan batas _statement_ menggunakan titik koma (;) dan _Automatic Semicolon Insertion_ (ASI).

**Daftar Isi:**

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

Kejelasan kode merupakan aspek krusial dalam pemrograman. Kode tidak hanya ditulis untuk dijalankan oleh mesin (_JavaScript engine_), tetapi juga untuk dibaca dan dipelihara oleh manusia (baik diri sendiri di masa depan maupun rekan tim). Penulisan komentar yang tepat dan pemahaman terhadap batasan pernyataan (_statement_) menggunakan titik koma akan membantu mencegah kemunculan _bug_ serta meningkatkan kualitas kolaborasi dalam pengembangan perangkat lunak.

### Konsep 1: Komentar Baris Tunggal (_Single-line Comment_)

- **Apa (_What_):** Teks dalam kode yang diawali dengan dua tanda garis miring (`//`) dan seluruh isinya pada baris tersebut diabaikan oleh _JavaScript engine_ saat eksekusi.
- **Mengapa (_Why_):** Digunakan untuk memberikan penjelasan singkat, klarifikasi ringkas, atau memberikan catatan kontekstual pada baris kode tertentu tanpa memengaruhi jalannya program.
- **Bagaimana (_How_):** Ditulis dengan menambahkan `//` di awal penjelasan.

```javascript
// ✅ Ini adalah komentar baris tunggal dalam JavaScript

// This is to allow English to build without having to download the i18n files.
// It fails when trying to resolve the i18n-curriculum path if they don't exist.
const curriculumLocale = process.env.CURRICULUM_LOCALE ?? "english";
```

- **Kapan (_When_):** Digunakan saat memerlukan penjelasan ringkas mengenai alasan suatu kode ditulis, terutama dalam konteks pengerjaan proyek tim agar mencegah perubahan atau penghapusan kode yang tidak perlu.

### Konsep 2: Komentar Banyak Baris (_Multi-line Comment_)

- **Apa (_What_):** Blok teks komentar yang diawali dengan tanda `/*` dan diakhiri dengan tanda `*/`, yang diabaikan sepenuhnya oleh _JavaScript engine_.
- **Mengapa (_Why_):** Memfasilitasi penulisan penjelasan yang lebih panjang, deskripsi mendalam, atau catatan terperinci yang membutuhkan lebih dari satu baris teks.
- **Bagaimana (_How_):** Ditulis dengan mengapit teks di antara `/*` dan `*/`.

```javascript
/* ✅ 
I am a multiline comment.
This is helpful for longer explanations.
*/

/*
Since there can be more than one way to complete a certification (using the
legacy curriculum or the new one, for instance), we need a certification
field to track which certification this belongs to.
*/
const dupeCertifications = [
  {
    certification: "responsive-web-design",
    dupe: "2022/responsive-web-design",
  },
];
```

- **Kapan (_When_):** Digunakan ketika perlu menjelaskan konteks tingkat tinggi, logika yang kompleks, atau memberikan informasi latar belakang yang detail kepada pengembang lain atau kontributor baru.

### Konsep 3: Aturan Penting Penggunaan Komentar

1. **Hindari _Over-commenting_:** Jangan mengomentari kode yang sudah jelas dengan sendirinya (_self-explanatory_).

```javascript
// ❌ Komentar yang tidak perlu (Over-commenting)
// This code uses the const keyword to create a new variable called price.
// We are assigning the number 10 to the price variable.
const price = 10;
```

2. **Refactor, Jangan Tutupi Kode Buruk:** Komentar tidak boleh digunakan untuk sekadar menjelaskan kode yang membingungkan, terlalu rumit, atau ditulis dengan buruk. Solusi terbaik adalah melakukan _refactor_ (mengubah dan merapikan struktur kode tersebut).

> [!TIP]
> Tulis kode sejelas mungkin melalui penamaan variabel dan struktur yang baik. Gunakan komentar hanya untuk menjelaskan **"mengapa"** (_why_) kode itu ada, bukan **"apa"** (_what_) yang dilakukan kode tersebut.

### Konsep 4: Titik Koma (_Semicolon_)

- **Apa (_What_):** Karakter sintaksis (`;`) yang digunakan untuk menandai batas akhir dari sebuah _statement_ (pernyataan) dalam JavaScript.
- **Mengapa (_Why_):** Membantu memperjelas batas-batas pernyataan, meningkatkan keterbacaan kode, serta mencegah terjadinya kesalahan tersembunyi (_subtle errors_) akibat interpretasi baris yang salah.
- **Bagaimana (_How_):** Ditambahkan langsung di akhir sebuah pernyataan kode.

```javascript
// ✅ Pernyataan ditutup dengan jelas menggunakan titik koma
let variableOne = 5;
let variableTwo = 10;
```

- **Kapan (_When_):** Digunakan di akhir setiap _statement_ untuk secara eksplisit memisahkan satu pernyataan dengan pernyataan lainnya, terutama ketika ada potensi ambiguitas antarbeberapa baris kode.

### Konsep 5: _Automatic Semicolon Insertion_ (ASI)

- **Apa (_What_):** Mekanisme internal pada bahasa JavaScript yang memungkinkan deklarasi kode tetap valid tanpa titik koma eksplisit, di mana _engine_ secara otomatis menyisipkan titik koma pada kondisi tertentu.
- **Mengapa (_Why_):** Memberikan fleksibilitas sintaksis sehingga kode dapat berjalan meskipun pengembang lupa atau tidak menuliskan titik koma secara manual pada setiap akhir baris.
- **Bagaimana (_How_):** _Engine_ menganalisis baris kode dan menyisipkan titik koma secara otomatis di batas baris tertentu. Namun, ASI tidak sekadar menyisipkan titik koma di setiap pemisah baris (_line break_), yang dapat memicu perilaku tak terduga (_unexpected behavior_).

**Kasus _Bug_ 1: Pernyataan `return`**

```javascript
// ❌ Bermasalah karena ASI
function getValue() {
  return;
  {
    value: 42;
  }
}
// ASI otomatis menyisipkan titik koma tepat setelah 'return',
// sehingga fungsi mengembalikan nilai 'undefined' dan blok objek di bawahnya diabaikan.

// ✅ Perbaikan
function getValue() {
  return {
    value: 42,
  };
}
```

**Kasus _Bug_ 2: Pemanggilan _Immediately Invoked Function Expression_ (IIFE)**

```javascript
// ❌ Bermasalah karena ASI
const message = "Hello"(function () {
  console.log(message);
})();
// ASI TIDAK menyisipkan titik koma setelah "Hello" karena tanda '('
// di baris bawah dianggap melanjutkan ekspresi: "Hello"(...)
// Hal ini menyebabkan TypeError (mencoba memanggil string "Hello" sebagai fungsi).

// ✅ Perbaikan dengan titik koma eksplisit
const message = "Hello";

(function () {
  console.log(message);
})();
```

- **Siapa, Kapan, Di mana:** Dieksekusi secara otomatis oleh _JavaScript Engine_ pada tahap pembacaan dan analisis sintaks (_parsing_) struktur kode (_source code parsing_).

> [!WARNING]
> Sangat disarankan untuk membiasakan diri menulis titik koma (`;`) secara manual di setiap akhir _statement_ untuk menghindari jebakan mekanisme ASI yang tak terduga.

**Poin Kunci:**

- Komentar `//` dan `/* ... */` penting untuk meninggalkan catatan konteks pada kode.
- Jangan mengomentari hal yang sangat jelas (contoh: "menambahkan x dan y"), sebaliknya berikan komentar terkait konteks bisnis atau perbaikan _bug_.
- Jika suatu kode sangat membingungkan hingga butuh komentar yang panjang untuk dijelaskan per barisnya, sebaiknya _refactor_ (rapikan) kode tersebut.
- Walaupun _JavaScript engine_ memiliki fitur ASI (_Automatic Semicolon Insertion_) yang bisa menambal titik koma secara otomatis, biasakan tetap menulis titik koma secara manual untuk mencegah terjadinya bug tersembunyi.

---

## 2. Kuis

Jawablah sepuluh pertanyaan singkat berikut berdasarkan materi di atas:

1. Apa fungsi utama dari komentar dalam kode JavaScript?
2. Karakter apakah yang digunakan untuk membuat komentar baris tunggal dalam JavaScript?
3. Dalam situasi seperti apa seorang pengembang sebaiknya menggunakan komentar banyak baris (_multi-line comment_)?
4. Mengapa kita tidak disarankan untuk memberikan komentar pada kode yang bersifat _self-explanatory_?
5. Apa tindakan yang benar yang harus dilakukan jika kita memiliki kode yang rumit atau sulit dipahami, alih-alih menutupinya dengan komentar?
6. Apa peran utama dari penggunaan karakter titik koma (`;`) dalam JavaScript?
7. Apakah _statement_ (pernyataan) dalam JavaScript selalu sama dengan baris kode sumber (_lines of source code_)? Jelaskan singkat.
8. Apa yang dimaksud dengan _Automatic Semicolon Insertion_ (ASI)?
9. Mengapa penulisan baris baru tepat setelah kata kunci `return` pada sebuah fungsi dapat menyebabkan fungsi tersebut mengembalikan nilai `undefined`?
10. Mengapa pemanggilan _Immediately Invoked Function Expression_ (IIFE) yang diawali kurung buka `(` bisa menyebabkan `TypeError` jika baris sebelumnya tidak diakhiri titik koma?

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details><summary><strong>1. Fungsi Komentar</strong></summary>

Fungsi utama komentar adalah memberikan konteks tambahan atau catatan bagi diri sendiri dan pengembang lain. Komentar diabaikan sepenuhnya oleh _JavaScript engine_ saat kode dieksekusi, sehingga murni berguna untuk keterbacaan manusia dan membantu mencegah perubahan kode yang tidak disengaja dalam tim.

</details>

<details><summary><strong>2. Karakter Komentar Baris Tunggal</strong></summary>

Komentar baris tunggal dibuat menggunakan dua tanda garis miring ke depan (`//`). Tipe komentar ini cocok untuk memberikan klarifikasi atau penjelasan singkat pada satu baris kode.

</details>

<details><summary><strong>3. Situasi Komentar Banyak Baris</strong></summary>

Komentar banyak baris (`/* ... */`) sebaiknya digunakan ketika pengembang perlu menuliskan deskripsi panjang, penjelasan detail, atau catatan menyeluruh. Jenis komentar ini sangat membantu untuk menjelaskan bagian kode yang besar atau konteks kompleks.

</details>

<details><summary><strong>4. Alasan Menghindari Over-commenting</strong></summary>

Memberikan komentar pada kode yang _self-explanatory_ (seperti mengomentari deklarasi variabel sederhana) hanya akan mengotori (_clutter_) kode dan memperburuk keterbacaan. Tujuan utama komentar adalah meningkatkan kejelasan, bukan mengulang apa yang sudah tampak jelas.

</details>

<details><summary><strong>5. Refactoring Kode Rumit</strong></summary>

Jika kode terlalu rumit atau membingungkan, tindakan yang tepat adalah melakukan _refactor_ (mengubah atau merapikan struktur kode agar lebih lugas). Komentar tidak boleh dijadikan penutup atau pembenaran atas kualitas kode yang buruk.

</details>

<details><summary><strong>6. Peran Titik Koma</strong></summary>

Peran utama titik koma adalah untuk menandai batas akhir dari sebuah _statement_ (pernyataan) secara eksplisit. Penggunaannya mencegah kesalahan interpretasi otomatis dari mesin.

</details>

<details><summary><strong>7. Statement vs Baris Kode</strong></summary>

Tidak selalu sama. Sebuah _statement_ dapat membentang melintasi beberapa baris, dan sebaliknya, satu baris tunggal dapat memuat lebih dari satu _statement_ asalkan dipisahkan oleh titik koma.

</details>

<details><summary><strong>8. Definisi ASI</strong></summary>

_Automatic Semicolon Insertion_ (ASI) adalah mekanisme internal JavaScript yang menyisipkan titik koma secara otomatis di belakang layar agar pernyataan tanpa titik koma tetap valid secara sintaks.

</details>

<details><summary><strong>9. Kasus Bug Return ASI</strong></summary>

Ketika terdapat baris baru persis setelah kata kunci `return`, ASI akan langsung menyisipkan titik koma secara otomatis tepat di akhir kata `return`. Hal ini membuat fungsi seketika berhenti dan mengembalikan `undefined`, bukannya membaca nilai di baris bawahnya.

</details>

<details><summary><strong>10. Kasus Bug IIFE ASI</strong></summary>

Tanpa titik koma pada deklarasi sebelumnya, _engine_ JS melihat karakter kurung buka `(` di awal baris sebagai kelanjutan pemanggilan ekspresi variabel sebelumnya (misal: `"Hello"(...)`). Akibatnya, JavaScript mencoba mengeksekusi string sebagai sebuah fungsi, yang memicu _TypeError_.

</details>

---

## 4. Soal Esai

Jawablah pertanyaan-pertanyaan esai berikut untuk menguji pemahaman kritis Anda terhadap konsep yang telah dipelajari:

1. **Analisis Perilaku ASI:** Jelaskan bagaimana mekanisme _Automatic Semicolon Insertion_ (ASI) dapat menyebabkan potensi bug tersembunyi pada kode JavaScript. Bandingkan dua skenario kasus yang ada pada materi (kasus `return` dan kasus IIFE).
2. **Evaluasi Kualitas Kode vs. Komentar:** Mengapa _refactoring_ dianggap sebagai pendekatan yang lebih baik daripada menambahkan komentar penjelas pada kode yang kompleks? Berikan analisis Anda mengenai kapan komentar benar-benar memberikan nilai tambah (_value_) dan kapan komentar justru menjadi pengotor (_clutter_).
3. **Kolaborasi Tim dan Kejelasan Kode:** Dalam pengembangan proyek berskala besar yang melibatkan banyak pengembang, jelaskan bagaimana komentar kontekstual dapat mencegah bug atau penghapusan kode yang tidak disengaja.
4. **Struktur Pernyataan dalam JavaScript:** Uraikan perbedaan antara baris kode sumber (_lines of source code_) dan batasan pernyataan (_statement boundaries_). Bagaimana penggunaan titik koma konsisten memengaruhi proses pemeliharaan kode (_code maintenance_)?
5. **Kompilasi dan Interpretasi:** Berdasarkan sumber materi, jelaskan peran umum kompiler (_compiler_) dalam penerjemahan kode sumber ke bentuk lain (seperti _machine code_ atau _bytecode_), serta kaitannya dengan penentuan batasan _statement_ menggunakan titik koma pada bahasa pemrograman.

---

## 5. Glosarium

| Istilah                                 | Penjelasan                                                                                                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Anonymous Function**                  | Fungsi dalam JavaScript yang didefinisikan tanpa memiliki nama pengenal (_identifier_).                                                                      |
| **Automatic Semicolon Insertion (ASI)** | Penyisipan Titik Koma Otomatis; fitur bawaan _JavaScript engine_ yang menyisipkan titik koma secara otomatis di tempat tertentu agar sintaks tetap valid.    |
| **Bug**                                 | Kesalahan, cacat, atau kegagalan dalam kode program yang menyebabkan aplikasi menghasilkan luaran yang salah atau berperilaku tidak sesuai harapan.          |
| **Bytecode**                            | Bentuk kode tingkat rendah (_intermediate representation_) yang dihasilkan oleh kompiler sebagai hasil translasi dari kode sumber.                           |
| **Code Clarity**                        | Kejelasan Kode; tingkat kemudahan suatu kode sumber untuk dibaca, dipahami, dan dipelihara oleh manusia.                                                     |
| **Comment**                             | Baris atau blok teks di dalam kode sumber yang diabaikan oleh _engine_, digunakan untuk memberikan catatan atau konteks bagi pembaca kode.                   |
| **Compiler**                            | Program/alat yang menerjemahkan kode sumber menjadi bentuk lain, seperti _machine code_ atau _bytecode_.                                                     |
| **IIFE**                                | _Immediately Invoked Function Expression_; fungsi JavaScript yang langsung dieksekusi begitu fungsi tersebut selesai didefinisikan.                          |
| **JavaScript Engine**                   | Mesin pemroses; program atau komponen perangkat lunak yang membaca, mengompilasi, dan mengeksekusi kode JavaScript.                                          |
| **Machine Code**                        | Kode Mesin; bahasa tingkat paling rendah yang terdiri dari instruksi biner dan dapat dieksekusi langsung oleh CPU komputer.                                  |
| **Multi-line Comment**                  | Komentar Banyak Baris; penjelasan yang mencakup beberapa baris teks diapit oleh `/*` dan `*/`.                                                               |
| **Refactor / Refactoring**              | Proses mengubah dan merapikan struktur internal kode sumber tanpa mengubah perilaku eksternalnya guna meningkatkan keterbacaan atau pemeliharaan.            |
| **Self-explanatory Code**               | Kode yang ditulis secara lugas dan jelas, sehingga fungsinya dapat dipahami dari kode itu sendiri tanpa perlu komentar ekstra.                               |
| **Semicolon (Titik Koma)**              | Karakter sintaksis (`;`) yang digunakan untuk menandai batas akhir pernyataan (_statement_).                                                                 |
| **Single-line Comment**                 | Komentar Baris Tunggal; penjelasan singkat dalam satu baris yang diawali dengan `//`.                                                                        |
| **Statement (Pernyataan)**              | Satuan instruksi terkecil dalam program yang memerintahkan komputer untuk melakukan suatu tindakan tertentu.                                                 |
| **TypeError**                           | Jenis kesalahan (_error_) pada JavaScript saat suatu operasi dilakukan pada tipe data yang tidak valid (contoh: mencoba menjalankan String layaknya Fungsi). |
