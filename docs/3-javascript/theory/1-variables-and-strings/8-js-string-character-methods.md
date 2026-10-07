# 📝 Panduan Belajar JavaScript: String Character Methods dan Pengodean ASCII

> Panduan ini membahas standar `character encoding` ASCII dan cara memanipulasi `numeric value` karakter dalam JavaScript menggunakan `charCodeAt()` dan `String.fromCharCode()`.

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

Dalam dunia `programming`, pemahaman mengenai bagaimana karakter direpresentasikan sebagai angka merupakan hal yang sangat mendasar. Komputer menyimpan dan memanipulasi teks menggunakan sistem `character encoding`.

> [!NOTE]
> Meskipun `string` pada JavaScript secara internal menggunakan standar Unicode (UTF-16), `value` dari 128 karakter pertama pada Unicode sama persis dengan kode ASCII. Oleh karena itu, logika `programming` berbasis ASCII dapat bekerja secara langsung di JavaScript.

### Konsep 1: ASCII (American Standard Code for Information Interchange)

- **What:** Standar `character encoding` yang digunakan komputer untuk merepresentasikan teks dengan cara memetakan setiap karakter (huruf, angka, simbol) ke suatu `numeric value` universal.
- **Why:** Komputer secara fundamental bekerja dengan angka. ASCII dibutuhkan agar komputer dapat menyimpan, mengolah, dan memanipulasi data teks secara konsisten.
- **How:** ASCII mencakup total 128 karakter yang dipetakan ke angka tertentu. Kategori karakter ini meliputi:
  - Huruf besar dan kecil dalam bahasa Inggris (A-Z, a-z) — contoh: 'A' = 65, 'a' = 97.
  - Angka (0-9).
  - Tanda baca dan simbol umum (seperti !, @, #) — contoh: '!' = 33.
  - Control characters (seperti newline dan tab).
- **When:** Digunakan ketika data teks perlu disimpan atau diproses dalam bentuk angka, serta ketika memanfaatkan 128 karakter pertama dalam Unicode UTF-16 pada JavaScript.

### Konsep 2: Method `charCodeAt()`

- **What:** `Method` `string` pada JavaScript yang me-`return` `code unit` UTF-16 (`numeric value`) dari karakter yang berada pada `index` tertentu.
- **Why:** `Method` ini memecahkan masalah kebutuhan `programmer` untuk mengambil `numeric value` dari suatu karakter agar dapat dibandingkan atau dimanipulasi.
- **How:** Dipanggil langsung dari `variable` atau `value` `string` dengan memasukkan posisi `index` sebagai `argument`.
- **When:** Digunakan saat perlu memeriksa `property` karakter, seperti menentukan apakah sebuah karakter merupakan huruf kapital, huruf kecil, atau digit angka dengan cara membandingkan `value` ASCII-nya.

```js
// ✅ Mengambil kode ASCII dari huruf kapital
let letter = "A";
console.log(letter.charCodeAt(0)); // Output: 65

// ✅ Mengambil kode ASCII dari simbol
let symbol = "!";
console.log(symbol.charCodeAt(0)); // Output: 33
```

### Konsep 3: Method `String.fromCharCode()`

- **What:** `Static method` dari `object` `String` di JavaScript yang meng-`convert` `code unit` UTF-16 (`numeric value` ASCII) menjadi karakter `string` yang bersesuaian.
- **Why:** Berfungsi sebagai kebalikan dari `charCodeAt()`, memungkinkan `programmer` membuat atau merekonstruksi karakter teks secara dinamis dari `value` angkanya.
- **How:** Dipanggil melalui `global object` `String` dengan melakukan `passing` angka kode numerik sebagai `argument`-nya.
- **When:** Digunakan ketika aplikasi perlu menghasilkan karakter atau teks secara dinamis berdasarkan perhitungan atau deret kode numerik.

```js
// ✅ Meng-convert kode numerik kembali menjadi huruf kapital
let char1 = String.fromCharCode(65);
console.log(char1); // Output: "A"

// ✅ Meng-convert kode numerik kembali menjadi huruf kecil
let char2 = String.fromCharCode(97);
console.log(char2); // Output: "a"
```

### Poin Kunci

- Komputer merepresentasikan teks menggunakan angka melalui sistem `character encoding` seperti ASCII dan Unicode (UTF-16).
- 128 karakter pertama pada UTF-16 JavaScript memiliki `numeric value` yang identik dengan tabel standar ASCII.
- `charCodeAt(index)` dipakai untuk membaca `numeric value` (ASCII) dari suatu karakter dalam `string`.
- `String.fromCharCode(kodeNumerik)` dipakai untuk mengubah kode numerik ASCII kembali menjadi bentuk karakter teks.

---

## 2. Kuis

1. Apa kepanjangan dari singkatan ASCII?
2. Berapa total jumlah karakter yang dicakup dalam standar ASCII dasar?
3. Sebutkan empat jenis/kategori karakter yang ada di dalam standar ASCII!
4. Mengapa contoh `encoding` berbasis ASCII dapat berjalan dengan cocok pada `string` JavaScript?
5. Berapa `value` kode ASCII untuk huruf kapital "A" dan huruf kecil "a"?
6. Apa fungsi utama dari `method` `charCodeAt()` dalam JavaScript?
7. Berapa `value` yang di-`return` saat menjalankan `console.log("!".charCodeAt(0));`?
8. Apa fungsi utama dari `method` `String.fromCharCode()` dalam JavaScript?
9. Apa hasil `output` dari kode `console.log(String.fromCharCode(66));`?
10. Sebutkan salah satu contoh skenario penggunaan `character encoding` dalam `programming`!

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details><summary><strong>1. Kepanjangan ASCII</strong></summary>

ASCII merupakan singkatan dari _American Standard Code for Information Interchange_. Standar ini digunakan dalam komputer untuk merepresentasikan teks dengan memetakan karakter ke `numeric value`.

</details>

<details><summary><strong>2. Jumlah karakter dasar ASCII</strong></summary>

Standar ASCII dasar mencakup total 128 karakter. Setiap karakter dipetakan secara unik ke sebuah `numeric value` universal.

</details>

<details><summary><strong>3. Kategori karakter ASCII</strong></summary>

Empat kategori karakter dalam ASCII adalah huruf bahasa Inggris kapital dan kecil (A-Z, a-z), angka (0-9), tanda baca dan simbol umum (seperti !, @, #), serta `control characters` (seperti `newline` dan `tab`).

</details>

<details><summary><strong>4. Kompatibilitas dengan JavaScript</strong></summary>

Contoh berbasis ASCII bekerja di JavaScript karena meskipun JavaScript menggunakan Unicode (UTF-16) secara internal, `value` 128 karakter pertama dalam Unicode sangat cocok dan identik dengan kode ASCII.

</details>

<details><summary><strong>5. Nilai ASCII "A" dan "a"</strong></summary>

`Numeric value` ASCII untuk huruf kapital "A" adalah 65. Sedangkan `numeric value` ASCII untuk huruf kecil "a" adalah 97.

</details>

<details><summary><strong>6. Fungsi charCodeAt()</strong></summary>

Fungsi utama `method` `charCodeAt()` adalah me-`return` `code unit` UTF-16 (`numeric value`) dari karakter yang berada pada `index` yang ditentukan dalam sebuah `string`.

</details>

<details><summary><strong>7. Hasil output "!".charCodeAt(0)</strong></summary>

`Value` yang di-`return` adalah angka 33. Angka ini merupakan `value` kode numerik ASCII/UTF-16 untuk simbol tanda seru (!).

</details>

<details><summary><strong>8. Fungsi String.fromCharCode()</strong></summary>

Fungsi utama `method` `String.fromCharCode()` adalah meng-`convert` `code unit` UTF-16 (`numeric value`) kembali menjadi karakter `string` yang sesuai.

</details>

<details><summary><strong>9. Hasil output String.fromCharCode(66)</strong></summary>

Hasil `output` dari kode tersebut adalah huruf kapital "B". Hal ini disebabkan oleh `value` kode numerik 66 yang merepresentasikan karakter "B" dalam standar ASCII/UTF-16.

</details>

<details><summary><strong>10. Skenario penggunaan</strong></summary>

Salah satu contoh skenario penggunaannya adalah untuk memanipulasi atau membandingkan karakter berdasarkan `numeric value`-nya. `Programmer` dapat menggunakannya untuk mengecek apakah suatu karakter tergolong huruf besar, huruf kecil, atau digit angka.

</details>

---

## 4. Soal Esai

1. **Analisis Interoperabilitas:** Jelaskan hubungan antara `encoding` Unicode (UTF-16) yang digunakan JavaScript dengan standar ASCII, serta mengapa `developer` JavaScript dapat memanfaatkan `value` ASCII tanpa terjadi hambatan kompatibilitas pada 128 karakter pertama.
2. **Perbandingan Method:** Bandingkan peran, cara pemanggilan `syntax`, dan alur kerja antara `method` `charCodeAt()` dan `String.fromCharCode()` dalam pemrosesan data `string`.
3. **Penerapan Logika:** Terangkan bagaimana prinsip pembandingan `numeric value` ASCII dapat digunakan untuk mendeteksi jenis karakter (apakah berupa huruf kapital, huruf kecil, atau angka) tanpa menguji karakternya satu per satu secara langsung.
4. **Studi Kasus Representasi Data:** Mengapa sistem komputer tidak menyimpan karakter teks secara langsung dalam bentuk visualnya, melainkan harus di-`convert` terlebih dahulu ke dalam `numeric value` seperti ASCII?
5. **Evaluasi Pembuatan Karakter Dinamis:** Analisis skenario di mana penggunaan `method` `String.fromCharCode()` lebih efisien digunakan dibandingkan penulisan karakter `string` secara manual (`literal string`).

---

## 5. Glosarium

| Istilah                                                          | Definisi                                                                                                                                              |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ASCII (_American Standard Code for Information Interchange_)** | Standar `character encoding` universal berbasis numerik yang digunakan oleh komputer untuk merepresentasikan teks.                                      |
| **Character Encoding**                                           | Sistem pemetaan karakter (huruf, angka, simbol) ke dalam `numeric value` agar dapat disimpan dan diproses oleh mesin komputer.                          |
| **`charCodeAt()`**                                               | `Method` `string` pada JavaScript yang me-`return` `numeric value` (`code unit` UTF-16) dari karakter pada `index` tertentu.                               |
| **Control Characters**                                           | Karakter non-cetak dalam standar ASCII yang digunakan untuk mengontrol format atau pemrosesan teks, seperti baris baru (`newline`) dan `tab`.         |
| **`fromCharCode()`**                                             | `Static method` dari `global object` `String` di JavaScript yang meng-`convert` kode numerik UTF-16/ASCII menjadi karakter teks.                              |
| **Index (Indeks)**                                               | Posisi angka berurutan yang menunjukkan letak suatu karakter dalam `string` (dimulai dari `index` 0).                                                  |
| **Unicode (UTF-16)**                                             | Standar `character encoding` internasional yang digunakan oleh JavaScript secara internal, di mana 128 karakter pertamanya sesuai dengan standar ASCII. |

---
[⬅️ Sebelumnya](7-js-work-with-string.md) | [Selanjutnya ➡️](9-js-string-search-and-slice-methods.md)
