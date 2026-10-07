# 📝 Panduan Belajar JavaScript: Kejelasan Kode (`comment` dan `semicolon`)

> Ringkasan: Panduan ini membahas pentingnya menjaga kejelasan kode (`code clarity`) melalui penggunaan `comment` yang tepat, serta pemahaman aturan batas `statement` menggunakan `semicolon` (`;`) dan `Automatic Semicolon Insertion` (ASI).

**Daftar Isi:**

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

Kejelasan kode merupakan aspek krusial dalam pemrograman. Kode tidak hanya ditulis untuk dijalankan oleh `JavaScript engine`, tetapi juga untuk dibaca dan dipelihara oleh manusia (baik diri sendiri di masa depan maupun rekan tim). Penulisan `comment` yang tepat dan pemahaman terhadap batasan `statement` menggunakan `semicolon` akan membantu mencegah kemunculan `bug` serta meningkatkan kualitas kolaborasi dalam pengembangan perangkat lunak.

### Konsep 1: `single-line comment`

- **Apa (_What_):** Teks dalam kode yang diawali dengan dua tanda garis miring (`//`) dan seluruh isinya pada baris tersebut diabaikan oleh `JavaScript engine` saat eksekusi.
- **Mengapa (_Why_):** Digunakan untuk memberikan penjelasan singkat, klarifikasi ringkas, atau memberikan catatan kontekstual pada baris kode tertentu tanpa memengaruhi jalannya program.
- **Bagaimana (_How_):** Ditulis dengan menambahkan `//` di awal penjelasan.

```javascript
// ✅ Ini adalah single-line comment dalam JavaScript

// This is to allow English to build without having to download the i18n files.
// It fails when trying to resolve the i18n-curriculum path if they don't exist.
const curriculumLocale = process.env.CURRICULUM_LOCALE ?? "english";
```

- **Kapan (_When_):** Digunakan saat memerlukan penjelasan ringkas mengenai alasan suatu kode ditulis, terutama dalam konteks pengerjaan proyek tim agar mencegah perubahan atau penghapusan kode yang tidak perlu.

### Konsep 2: `multi-line comment`

- **Apa (_What_):** Blok teks `comment` yang diawali dengan tanda `/*` dan diakhiri dengan tanda `*/`, yang diabaikan sepenuhnya oleh `JavaScript engine`.
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

### Konsep 3: Aturan Penting Penggunaan `comment`

1. **Hindari Over-commenting:** Jangan memberikan `comment` pada kode yang sudah jelas dengan sendirinya (`self-explanatory`).

```javascript
// ❌ Komentar yang tidak perlu (Over-commenting)
// This code uses the const keyword to create a new variable called price.
// We are assigning the number 10 to the price variable.
const price = 10;
```

2. **Refactor, Jangan Tutupi Kode Buruk:** `comment` tidak boleh digunakan untuk sekadar menjelaskan kode yang membingungkan, terlalu rumit, atau ditulis dengan buruk. Solusi terbaik adalah melakukan `refactor` (mengubah dan merapikan struktur kode tersebut).

> [!TIP]
> Tulis kode sejelas mungkin melalui penamaan `variable` dan struktur yang baik. Gunakan `comment` hanya untuk menjelaskan **"mengapa"** (_why_) kode itu ada, bukan **"apa"** (_what_) yang dilakukan kode tersebut.

### Konsep 4: `semicolon`

- **Apa (_What_):** Karakter sintaksis (`;`) yang digunakan untuk menandai batas akhir dari sebuah `statement` dalam JavaScript.
- **Mengapa (_Why_):** Membantu memperjelas batas-batas `statement`, meningkatkan keterbacaan kode, serta mencegah terjadinya `error` tersembunyi (`subtle errors`) akibat interpretasi baris yang salah.
- **Bagaimana (_How_):** Ditambahkan langsung di akhir sebuah `statement` kode.

```javascript
// ✅ Statement ditutup dengan jelas menggunakan semicolon
let variableOne = 5;
let variableTwo = 10;
```

- **Kapan (_When_):** Digunakan di akhir setiap `statement` untuk secara eksplisit memisahkan satu `statement` dengan `statement` lainnya, terutama ketika ada potensi ambiguitas antarbeberapa baris kode.

### Konsep 5: `Automatic Semicolon Insertion` (ASI)

- **Apa (_What_):** Mekanisme internal pada bahasa JavaScript yang memungkinkan deklarasi kode tetap valid tanpa `semicolon` eksplisit, di mana `JavaScript engine` secara otomatis menyisipkan `semicolon` pada kondisi tertentu.
- **Mengapa (_Why_):** Memberikan fleksibilitas sintaksis sehingga kode dapat berjalan meskipun pengembang lupa atau tidak menuliskan `semicolon` secara manual pada setiap akhir baris.
- **Bagaimana (_How_):** `JavaScript engine` menganalisis baris kode dan menyisipkan `semicolon` secara otomatis di batas baris tertentu. Namun, ASI tidak sekadar menyisipkan `semicolon` di setiap pemisah baris (`line break`), yang dapat memicu perilaku tak terduga (`unexpected behavior`).

**Kasus `bug` 1: `statement` `return`**

```javascript
// ❌ Bermasalah karena ASI
function getValue() {
  return;
  {
    value: 42;
  }
}
// ASI otomatis menyisipkan semicolon tepat setelah 'return',
// sehingga function mengembalikan nilai 'undefined' dan blok object di bawahnya diabaikan.

// ✅ Perbaikan
function getValue() {
  return {
    value: 42,
  };
}
```

**Kasus `bug` 2: Pemanggilan `Immediately Invoked Function Expression` (IIFE)**

```javascript
// ❌ Bermasalah karena ASI
const message = "Hello"(function () {
  console.log(message);
})();
// ASI TIDAK menyisipkan semicolon setelah "Hello" karena tanda '('
// di baris bawah dianggap melanjutkan expression: "Hello"(...)
// Hal ini menyebabkan TypeError (mencoba memanggil string "Hello" sebagai function).

// ✅ Perbaikan dengan semicolon eksplisit
const message = "Hello";

(function () {
  console.log(message);
})();
```

- **Siapa, Kapan, Di mana:** Dieksekusi secara otomatis oleh `JavaScript engine` pada tahap pembacaan dan analisis sintaks (`parsing`) struktur kode (`source code parsing`).

> [!WARNING]
> Sangat disarankan untuk membiasakan diri menulis `semicolon` (`;`) secara manual di setiap akhir `statement` untuk menghindari jebakan mekanisme ASI yang tak terduga.

**Poin Kunci:**

- `comment` `//` dan `/* ... */` penting untuk meninggalkan catatan konteks pada kode.
- Jangan memberikan `comment` pada hal yang sangat jelas (contoh: "menambahkan x dan y"), sebaliknya berikan `comment` terkait konteks bisnis atau perbaikan `bug`.
- Jika suatu kode sangat membingungkan hingga butuh `comment` yang panjang untuk dijelaskan per barisnya, sebaiknya `refactor` (rapikan) kode tersebut.
- Walaupun `JavaScript engine` memiliki fitur ASI (`Automatic Semicolon Insertion`) yang bisa menambal `semicolon` secara otomatis, biasakan tetap menulis `semicolon` secara manual untuk mencegah terjadinya `bug` tersembunyi.

---

## 2. Kuis

Jawablah sepuluh pertanyaan singkat berikut berdasarkan materi di atas:

1. Apa fungsi utama dari `comment` dalam kode JavaScript?
2. Karakter apakah yang digunakan untuk membuat `single-line comment` dalam JavaScript?
3. Dalam situasi seperti apa seorang pengembang sebaiknya menggunakan `multi-line comment`?
4. Mengapa kita tidak disarankan untuk memberikan `comment` pada kode yang bersifat `self-explanatory`?
5. Apa tindakan yang benar yang harus dilakukan jika kita memiliki kode yang rumit atau sulit dipahami, alih-alih menutupinya dengan `comment`?
6. Apa peran utama dari penggunaan karakter `semicolon` (`;`) dalam JavaScript?
7. Apakah `statement` dalam JavaScript selalu sama dengan baris kode sumber (`lines of source code`)? Jelaskan singkat.
8. Apa yang dimaksud dengan `Automatic Semicolon Insertion` (ASI)?
9. Mengapa penulisan baris baru tepat setelah kata kunci `return` pada sebuah `function` dapat menyebabkan `function` tersebut mengembalikan nilai `undefined`?
10. Mengapa pemanggilan `Immediately Invoked Function Expression` (IIFE) yang diawali kurung buka `(` bisa menyebabkan `TypeError` jika baris sebelumnya tidak diakhiri `semicolon`?

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details><summary><strong>1. Fungsi `comment`</strong></summary>

Fungsi utama `comment` adalah memberikan konteks tambahan atau catatan bagi diri sendiri dan pengembang lain. `comment` diabaikan sepenuhnya oleh `JavaScript engine` saat kode dieksekusi, sehingga murni berguna untuk keterbacaan manusia dan membantu mencegah perubahan kode yang tidak disengaja dalam tim.

</details>

<details><summary><strong>2. Karakter `single-line comment`</strong></summary>

`single-line comment` dibuat menggunakan dua tanda garis miring ke depan (`//`). Tipe `comment` ini cocok untuk memberikan klarifikasi atau penjelasan singkat pada satu baris kode.

</details>

<details><summary><strong>3. Situasi `multi-line comment`</strong></summary>

`multi-line comment` (`/* ... */`) sebaiknya digunakan ketika pengembang perlu menuliskan deskripsi panjang, penjelasan detail, atau catatan menyeluruh. Jenis `comment` ini sangat membantu untuk menjelaskan bagian kode yang besar atau konteks kompleks.

</details>

<details><summary><strong>4. Alasan Menghindari Over-commenting</strong></summary>

Memberikan `comment` pada kode yang `self-explanatory` (seperti memberikan `comment` pada deklarasi `variable` sederhana) hanya akan mengotori (`clutter`) kode dan memperburuk keterbacaan. Tujuan utama `comment` adalah meningkatkan kejelasan, bukan mengulang apa yang sudah tampak jelas.

</details>

<details><summary><strong>5. `refactor` Kode Rumit</strong></summary>

Jika kode terlalu rumit atau membingungkan, tindakan yang tepat adalah melakukan `refactor` (mengubah atau merapikan struktur kode agar lebih lugas). `comment` tidak boleh dijadikan penutup atau pembenaran atas kualitas kode yang buruk.

</details>

<details><summary><strong>6. Peran `semicolon`</strong></summary>

Peran utama `semicolon` adalah untuk menandai batas akhir dari sebuah `statement` secara eksplisit. Penggunaannya mencegah `error` interpretasi otomatis dari `JavaScript engine`.

</details>

<details><summary><strong>7. `statement` vs Baris Kode</strong></summary>

Tidak selalu sama. Sebuah `statement` dapat membentang melintasi beberapa baris, dan sebaliknya, satu baris tunggal dapat memuat lebih dari satu `statement` asalkan dipisahkan oleh `semicolon`.

</details>

<details><summary><strong>8. Definisi ASI</strong></summary>

`Automatic Semicolon Insertion` (ASI) adalah mekanisme internal JavaScript yang menyisipkan `semicolon` secara otomatis di belakang layar agar `statement` tanpa `semicolon` tetap valid secara sintaks.

</details>

<details><summary><strong>9. Kasus `bug` `return` ASI</strong></summary>

Ketika terdapat baris baru persis setelah kata kunci `return`, ASI akan langsung menyisipkan `semicolon` secara otomatis tepat di akhir kata `return`. Hal ini membuat `function` seketika berhenti dan mengembalikan `undefined`, bukannya membaca nilai di baris bawahnya.

</details>

<details><summary><strong>10. Kasus `bug` IIFE ASI</strong></summary>

Tanpa `semicolon` pada deklarasi sebelumnya, `JavaScript engine` melihat karakter kurung buka `(` di awal baris sebagai kelanjutan pemanggilan `expression` pada `variable` sebelumnya (misal: `"Hello"(...)`). Akibatnya, JavaScript mencoba mengeksekusi `string` sebagai sebuah `function`, yang memicu `TypeError`.

</details>

---

## 4. Soal Esai

Jawablah pertanyaan-pertanyaan esai berikut untuk menguji pemahaman kritis Anda terhadap konsep yang telah dipelajari:

1. **Analisis Perilaku ASI:** Jelaskan bagaimana mekanisme `Automatic Semicolon Insertion` (ASI) dapat menyebabkan potensi `bug` tersembunyi pada kode JavaScript. Bandingkan dua skenario kasus yang ada pada materi (kasus `return` dan kasus IIFE).
2. **Evaluasi Kualitas Kode vs. `comment`:** Mengapa `refactoring` dianggap sebagai pendekatan yang lebih baik daripada menambahkan `comment` penjelas pada kode yang kompleks? Berikan analisis Anda mengenai kapan `comment` benar-benar memberikan nilai tambah (`value`) dan kapan `comment` justru menjadi pengotor (`clutter`).
3. **Kolaborasi Tim dan Kejelasan Kode:** Dalam pengembangan proyek berskala besar yang melibatkan banyak pengembang, jelaskan bagaimana `comment` kontekstual dapat mencegah `bug` atau penghapusan kode yang tidak disengaja.
4. **Struktur `statement` dalam JavaScript:** Uraikan perbedaan antara baris kode sumber (`lines of source code`) dan batasan `statement` (`statement boundaries`). Bagaimana penggunaan `semicolon` konsisten memengaruhi proses pemeliharaan kode (`code maintenance`)?
5. **Kompilasi dan Interpretasi:** Berdasarkan sumber materi, jelaskan peran umum `compiler` dalam penerjemahan kode sumber ke bentuk lain (seperti `machine code` atau `bytecode`), serta kaitannya dengan penentuan batasan `statement` menggunakan `semicolon` pada bahasa pemrograman.

---

## 5. Glosarium

| Istilah                                 | Penjelasan                                                                                                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`Anonymous Function`**                  | `function` dalam JavaScript yang didefinisikan tanpa memiliki nama pengenal (`identifier`).                                                                      |
| **`Automatic Semicolon Insertion` (ASI)** | Fitur bawaan `JavaScript engine` yang menyisipkan `semicolon` secara otomatis di tempat tertentu agar sintaks tetap valid.    |
| **`bug`**                                 | Kesalahan, cacat, atau kegagalan dalam kode program yang menyebabkan aplikasi menghasilkan luaran yang salah atau berperilaku tidak sesuai harapan.          |
| **`bytecode`**                            | Bentuk kode tingkat rendah (`intermediate representation`) yang dihasilkan oleh `compiler` sebagai hasil translasi dari kode sumber.                           |
| **`code clarity`**                        | Tingkat kemudahan suatu kode sumber untuk dibaca, dipahami, dan dipelihara oleh manusia.                                                     |
| **`comment`**                             | Baris atau blok teks di dalam kode sumber yang diabaikan oleh `JavaScript engine`, digunakan untuk memberikan catatan atau konteks bagi pembaca kode.                   |
| **`compiler`**                            | Program/alat yang menerjemahkan kode sumber menjadi bentuk lain, seperti `machine code` atau `bytecode`.                                                     |
| **IIFE**                                | `Immediately Invoked Function Expression`; `function` JavaScript yang langsung dieksekusi begitu `function` tersebut selesai didefinisikan.                          |
| **`JavaScript engine`**                   | Program atau komponen perangkat lunak yang membaca, mengompilasi, dan mengeksekusi kode JavaScript.                                          |
| **`machine code`**                        | Bahasa tingkat paling rendah yang terdiri dari instruksi biner dan dapat dieksekusi langsung oleh CPU komputer.                                  |
| **`multi-line comment`**                  | Penjelasan yang mencakup beberapa baris teks diapit oleh `/*` dan `*/`.                                                               |
| **`refactor`**              | Proses mengubah dan merapikan struktur internal kode sumber tanpa mengubah perilaku eksternalnya guna meningkatkan keterbacaan atau pemeliharaan.            |
| **`self-explanatory code`**               | Kode yang ditulis secara lugas dan jelas, sehingga fungsinya dapat dipahami dari kode itu sendiri tanpa perlu `comment` ekstra.                               |
| **`semicolon`**              | Karakter sintaksis (`;`) yang digunakan untuk menandai batas akhir `statement`.                                                                 |
| **`single-line comment`**                 | Penjelasan singkat dalam satu baris yang diawali dengan `//`.                                                                        |
| **`statement`**              | Satuan instruksi terkecil dalam program yang memerintahkan komputer untuk melakukan suatu tindakan tertentu.                                                 |
| **`TypeError`**                           | Jenis `error` pada JavaScript saat suatu operasi dilakukan pada `data type` yang tidak valid (contoh: mencoba menjalankan `string` layaknya `function`). |
