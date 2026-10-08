# 📖 Panduan Belajar JavaScript: Unary dan Bitwise Operators

> Dokumen ini membahas unary operator (`+`, `-`, `!`, `~`, `void`, `typeof`) dan bitwise operators (`&`, `|`, `^`, `~`, `<<`, `>>`, `>>>`) dalam JavaScript, lengkap dengan kuis, kunci jawaban, soal esai, dan glosarium.

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

Operator adalah simbol atau kata kunci yang memproses nilai. Dokumen ini membahas dua kelompok operator: _unary operator_, yang bekerja pada **satu** nilai, dan _bitwise operators_, yang bekerja pada representasi biner dari number.

### Konsep 1: Unary Operator

- **What (Apa):** _Unary operator_ adalah operator yang bekerja pada satu _operand_ (nilai yang diproses). Operator ini dipakai untuk mengonversi tipe, mengubah nilai, atau memeriksa kondisi tertentu.
- **Why (Mengapa):** Banyak pekerjaan sehari-hari hanya melibatkan satu nilai, misalnya mengubah teks berisi number menjadi tipe `number`, membalik tanda, atau membalik nilai _boolean_.
- **How (Bagaimana):** Semua _unary operator_ yang dibahas di sini ditulis di depan _operand_ (_prefix_). Berikut operator yang dibahas:

| Operator | Nama            | Fungsi                                                                                               |
| -------- | --------------- | ---------------------------------------------------------------------------------------------------- |
| `+`      | Unary plus      | Mengonversi _operand_ menjadi number (number tetap number)                                              |
| `-`      | Unary negation  | Mengonversi _operand_ menjadi number lalu membalik tandanya (positif menjadi negatif, dan sebaliknya) |
| `!`      | Logical NOT     | Membalik nilai _boolean_: `true` menjadi `false`, dan sebaliknya                                     |
| `~`      | Bitwise NOT     | Membalik setiap [bit](#konsep-2-bit-dan-biner) pada representasi biner number                         |
| `void`   | Void operator   | Mengevaluasi expression lalu mengembalikan `undefined`                                                 |
| `typeof` | Typeof operator | Mengembalikan tipe _operand_ sebagai _string_                                                        |

```js
// ✅ Unary plus: mengonversi string menjadi number
const str = "42";
const strToNum = +str;

console.log(strToNum); // 42
console.log(typeof str); // "string"
console.log(typeof strToNum); // "number"

// ✅ Unary negation: mengonversi lalu membalik tanda
const strToNegativeNum = -str;

console.log(strToNegativeNum); // -42
console.log(typeof strToNegativeNum); // "number"

// ✅ Logical NOT: membalik nilai boolean
let isOnline = true;
console.log(!isOnline); // false

let isOffline = false;
console.log(!isOffline); // true
```

Perhatikan bahwa variable `str` tidak berubah: unary plus dan negation menghasilkan nilai baru, sedangkan `str` tetap _string_ `'42'`.

**Pengayaan: Kasus Tepi (Edge Cases)**
Bagaimana jika nilai yang dikonversi tidak sesuai harapan?

- `+'abc'` menghasilkan `NaN` (Not-a-Number), karena teks tidak valid sebagai number.
- `+''` (string kosong) atau `+false` menghasilkan `0`, sedangkan `+true` menghasilkan `1`.
- `!0` atau `!''` menghasilkan `true`, sedangkan `!'abc'` menghasilkan `false`, karena operator `!` mengonversi nilai tersebut ke _boolean_ terlebih dahulu sebelum membaliknya.

- **When (Kapan):** Gunakan unary plus ketika kamu perlu memastikan nilai bertipe `number` (hasilnya `NaN` jika teks tidak dapat dikonversi), `!` untuk membalik kondisi _boolean_, dan `typeof` untuk memeriksa tipe sebuah nilai.

#### Operator `void`

Kata kunci `void` mengevaluasi sebuah expression, lalu selalu mengembalikan `undefined`.

```js
// ✅ Expression dievaluasi, tetapi hasilnya dibuang
const result = void (2 + 2);

console.log(result); // undefined
```

Pola `void` ini terkadang ditemukan pada tautan HTML lama untuk mencegah _browser_ berpindah halaman:

```html
<!-- Ditemui pada kode lama. Untuk aksi tanpa navigasi, sebaiknya gunakan <button>. -->
<a href="javascript:void(0);">Click Me</a>
```

#### Operator `typeof`

Operator `typeof` digunakan untuk mengetahui data type suatu nilai dengan mengembalikannya dalam bentuk _string_.

```js
const value = "Hello world";

console.log(typeof value); // "string"
```

> [!NOTE]
> Operator `~` termasuk _unary operator_ sekaligus _bitwise operator_. Cara kerjanya dibahas pada Konsep 3 setelah konsep biner dijelaskan.

### Konsep 2: Bit dan Biner

- **What (Apa):** _Bit_ adalah satuan informasi paling dasar di komputer dan hanya bernilai `0` atau `1`. _Biner_ adalah sistem bilangan yang hanya memakai dua number itu untuk mewakili semua bilangan.
- **Why (Mengapa):** _Bitwise operators_ bekerja pada representasi biner suatu number, sehingga biner perlu dipahami lebih dulu.
- **How (Bagaimana):** Setiap digit biner mewakili pangkat 2, dimulai dari digit paling kanan, lalu naik ke kiri. Contoh: bilangan desimal 10 ditulis `1010` dalam biner.

| Digit biner | 1      | 0      | 1      | 0      |
| ----------- | ------ | ------ | ------ | ------ |
| Pangkat 2   | 1 · 2³ | 0 · 2² | 1 · 2¹ | 0 · 2⁰ |
| Hasil       | 8      | 0      | 2      | 0      |

Jumlah nilai pada baris Hasil adalah 8 + 0 + 2 + 0 = 10.

- **When (Kapan):** Konsep ini dipakai setiap kali membaca hasil operasi _bitwise_, karena operasinya dihitung _bit_ demi _bit_.

### Konsep 3: Bitwise Operators

- **What (Apa):** _Bitwise operators_ adalah operator yang bekerja pada representasi biner number. JavaScript menyediakan antara lain AND (`&`), OR (`|`), XOR (`^`), NOT (`~`), _left shift_ (`<<`), _right shift_ (`>>`), dan _unsigned right shift_ (`>>>`).
- **Why (Mengapa):** Operator ini dipakai pada pemrograman tingkat rendah (_low-level_) dan kriptografi. Dalam pemrograman JavaScript sehari-hari operator ini jarang dipakai, tetapi memahaminya membantu mengerti cara komputer bekerja.
- **How (Bagaimana):** Contoh pada tabel dan blok kode pertama memakai `a = 5` (biner `101`) dan `b = 3` (biner `011`).

| Operator           | Aturan                                                    | Contoh   | Hasil (desimal dan biner) |
| ------------------ | --------------------------------------------------------- | -------- | ------------------------- |
| `&` (AND)          | Bit hasil `1` jika bit kedua _operand_ sama-sama `1`      | `a & b`  | `1` (`001`)               |
| `\|` (OR)          | Bit hasil `1` jika salah satu atau kedua bit bernilai `1` | `a \| b` | `7` (`111`)               |
| `^` (XOR)          | Bit hasil `1` jika hanya salah satu bit bernilai `1`      | `a ^ b`  | `6` (`110`)               |
| `~` (NOT)          | Membalik semua bit                                        | `~a`     | `-6`                      |
| `<<` (left shift)  | Menggeser semua bit ke kiri                               | `a << 1` | `10` (`1010`)             |
| `>>` (right shift) | Menggeser semua bit ke kanan                              | `a >> 1` | `2` (`10`)                |

```js
let a = 5; // Binary: 101
let b = 3; // Binary: 011

// ✅ AND: hanya bit paling kanan yang bernilai 1 pada kedua angka
console.log(a & b); // 1 (Binary: 001)

// ✅ OR: setidaknya satu bit bernilai 1 di setiap posisi
console.log(a | b); // 7 (Binary: 111)

// ✅ XOR: bit pertama dan kedua dari kanan berbeda pada kedua angka
console.log(a ^ b); // 6 (Binary: 110)

// ✅ NOT: membalik semua bit
console.log(~a); // -6

// ✅ Left shift: menggeser satu posisi ke kiri
console.log(a << 1); // 10 (Binary: 1010)

// ✅ Right shift: menggeser satu posisi ke kanan
console.log(a >> 1); // 2 (Binary: 10)
```

Tiga catatan penting dari contoh di atas:

- **Batas 32-bit:** _Bitwise operators_ memperlakukan number sebagai bilangan bulat bertanda 32-bit (_32-bit signed integer_). Aturan di bawah ini hanya berlaku untuk bilangan dalam rentang tersebut dan bagian pecahan pada angka desimal akan diabaikan.
- **`~x` menghasilkan `-(x + 1)`.** Menerapkan `~` pada `5` menghasilkan `-6`, sedangkan `~-6` akan menghasilkan `5`. Ini karena komputer membalik setiap _bit_ (misalnya dari representasi 8-bit `00000101` menjadi `11111010`) dan membacanya sebagai representasi _two's complement_ untuk number negatif.
- **Left shift** satu posisi sama dengan mengalikan number dengan 2.
- **Right shift** satu posisi sama dengan membagi number dengan 2 dan membulatkan ke bawah.

```js
const num = 5; // Binary: 00000101

// ✅ ~num sama dengan -(num + 1)
console.log(~num); // -6

// ✅ Berlaku juga sebaliknya
console.log(~-6); // 5
```

> [!TIP]
> Untuk memeriksa representasi biner suatu number positif di konsol, gunakan `(5).toString(2)`, yang menghasilkan `"101"`. Namun, untuk melihat pola _bit_ asli dari number negatif seperti `-6`, gunakan `(~5 >>> 0).toString(2)`.

- **When (Kapan):** _Bitwise operators_ dipakai pada tugas khusus seperti memanipulasi _bit_ secara langsung. Untuk logika program biasa, comparison operators dan logical operators (`&&`, `||`, `!`) lebih umum dipakai.

### Poin Kunci

- _Unary operator_ bekerja pada satu _operand_; _bitwise operators_ bekerja pada representasi biner number bertanda 32-bit.
- `+` mengonversi ke number, `-` mengonversi lalu membalik tanda, `!` membalik _boolean_.
- `void` mengevaluasi expression dan mengembalikan `undefined`; `typeof` mengembalikan tipe _operand_ sebagai _string_.
- _Bit_ hanya bernilai `0` atau `1`; setiap digit biner mewakili pangkat 2.
- _Bitwise operators_ utama yang dibahas: `&`, `|`, `^`, `~`, `<<`, `>>`.
- `~x` menghasilkan `-(x + 1)` pada bilangan bulat 32-bit.
- `<< 1` mengalikan dengan 2; `>> 1` membagi dengan 2 dan membulatkan ke bawah (keduanya terbatas pada bilangan bulat 32-bit).

---

## 2. Kuis

Jawablah pertanyaan-pertanyaan berikut dengan singkat dan jelas.

1. Apa yang dilakukan oleh _unary operator_?
2. Berapa hasil `+'42'`, dan bertipe apa hasilnya?
3. Berapa hasil `-'42'`, dan bertipe apa hasilnya?
4. Apa hasil `!true`?
5. Mengapa `~5` menghasilkan `-6`?
6. Apa hasil `void (2 + 2)`?
7. Mengapa pola `javascript:void(0);` tidak lagi direkomendasikan untuk aksi klik tanpa navigasi?
8. Bilangan desimal 10 ditulis `1010` dalam biner. Tuliskan representasi biner dari angka desimal 6.
9. Jika `a = 5` (biner `101`) dan `b = 3` (biner `011`), berapakah hasil `a & b`, `a | b`, dan `a ^ b`?
10. Berapakah hasil `8 << 2`, dan berapakah hasil `5 >> 1`?
11. Apa hasil operasi dari `typeof 'Hello world'`?
12. Apa hasil dari operasi konversi paksa `+'abc'`?

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details><summary><strong>1. Fungsi unary operator</strong></summary>

_Unary operator_ bekerja pada satu _operand_ untuk melakukan tugas seperti konversi tipe, manipulasi nilai, atau pemeriksaan kondisi.

</details>

<details><summary><strong>2. Hasil +'42'</strong></summary>

Hasilnya `42` dengan tipe `number`. Unary plus mengonversi _operand_ menjadi number, sedangkan variable aslinya tetap berupa _string_.

</details>

<details><summary><strong>3. Hasil -'42'</strong></summary>

Hasilnya `-42` dengan tipe `number`. Unary negation bekerja seperti unary plus, tetapi membalik tanda bilangannya (positif menjadi negatif, atau sebaliknya).

</details>

<details><summary><strong>4. Hasil !true</strong></summary>

Hasilnya `false`. Operator logical NOT membalik nilai _boolean_ _operand_-nya.

</details>

<details><summary><strong>5. Alasan ~5 menghasilkan -6</strong></summary>

Operator `~` membalik semua _bit_ number (misalnya `00000101` menjadi `11111010`). Hasilnya bernilai `-6` karena JavaScript membaca hasil balikan bit tersebut memakai sistem _two's complement_ untuk merepresentasikan bilangan bulat bertanda negatif. Hasil akhirnya sama dengan formula `-(5 + 1)`.

</details>

<details><summary><strong>6. Hasil void (2 + 2)</strong></summary>

Hasilnya `undefined`. Expression `2 + 2` tetap dievaluasi, tetapi `void` selalu mengembalikan `undefined`.

</details>

<details><summary><strong>7. Masalah javascript:void(0);</strong></summary>

Meskipun dulu banyak dipakai untuk mencegah tautan berpindah halaman, praktik modern lebih menyarankan memakai elemen `<button>` untuk elemen interaktif yang bukan bertujuan navigasi, yang lebih baik bagi keamanan dan aksesibilitas.

</details>

<details><summary><strong>8. Biner dari 6</strong></summary>

Representasi binernya adalah `110`. (Cara menghitungnya kembali ke desimal: `1·2² + 1·2¹ + 0·2⁰ = 4 + 2 + 0 = 6`).

</details>

<details><summary><strong>9. Hasil AND, OR, XOR</strong></summary>

`a & b` menghasilkan `1` (biner `001`), `a | b` menghasilkan `7` (biner `111`), dan `a ^ b` menghasilkan `6` (biner `110`).

</details>

<details><summary><strong>10. Hasil shift</strong></summary>

`8 << 2` menghasilkan `32`: setiap pergeseran satu posisi ke kiri mengalikan dengan 2, sehingga dua pergeseran mengalikan dengan 4. `5 >> 1` menghasilkan `2`: pergeseran satu posisi ke kanan membagi dengan 2 dan membulatkan ke bawah.

</details>

<details><summary><strong>11. Hasil typeof</strong></summary>

Hasilnya adalah _string_ `"string"`, karena _operand_-nya adalah sebuah teks (_string_).

</details>

<details><summary><strong>12. Hasil +'abc'</strong></summary>

Hasilnya `NaN` (Not-a-Number), karena nilai _string_ tersebut tidak berisi karakter number valid yang dapat dikonversi.

</details>

---

## 4. Soal Esai

Jawablah pertanyaan-pertanyaan esai berikut berdasarkan pemahaman konsep dari materi. (Bagian ini bertujuan menguji analisis kritis, sehingga tidak disertai kunci jawaban.)

1. Jelaskan perbedaan antara _unary operator_ dan operator yang bekerja pada dua _operand_. Berikan satu contoh _unary operator_ yang ada di materi ini.
2. Jelaskan mengapa _unary_ plus berguna ketika sebuah nilai harus dipastikan bertipe number. Skenario apa yang mungkin membuat sebuah number tersimpan sebagai _string_ (misalnya dari elemen HTML tertentu)?
3. Mengapa `~` disebut _unary operator_ sekaligus _bitwise operator_? Jelaskan hubungan kedua sifat tersebut.
4. Jelaskan mengapa pergeseran _bit_ ke kiri satu posisi sama dengan mengalikan number dengan 2, dengan merujuk pada konsep pangkat 2 pada bilangan biner.
5. Jika `a << 1` menghasilkan nilai yang sama dengan `a * 2`, apa yang harus menjadi pertimbangan (_trade-off_) saat kamu memutuskan apakah menggunakan `<<` atau `*` pada logika program sehari-hari di JavaScript?

---

## 5. Glosarium

| Istilah                          | Definisi                                                                                                                                       |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| **AND (`&`)**                    | _Bitwise operator_ yang menghasilkan _bit_ `1` jika _bit_ pada kedua _operand_ sama-sama `1`.                                                  |
| **Biner**                        | Sistem bilangan yang hanya memakai angka `0` dan `1`, dengan setiap digit mewakili pangkat 2.                                                  |
| **Bit**                          | Satuan informasi paling dasar di komputer yang hanya bernilai `0` atau `1`.                                                                    |
| **Bitwise NOT (`~`)**            | _Unary operator_ dan _bitwise operator_ yang membalik semua _bit_ number.                                                                                |
| **Bitwise operator**             | Operator yang bekerja pada representasi biner number (diubah ke format 32-bit bertanda), yaitu `&`, `\|`, `^`, `~`, `<<`, `>>`, `>>>`.          |
| **Left shift (`<<`)**            | Operator yang menggeser semua _bit_ ke kiri; pergeseran satu posisi sama dengan mengalikan number dengan 2.                                     |
| **Logical NOT (`!`)**            | _Unary operator_ yang membalik nilai _boolean_ _operand_-nya.                                                                                  |
| **Operand**                      | Nilai yang diproses oleh sebuah operator.                                                                                                      |
| **OR (`\|`)**                    | _Bitwise operator_ yang menghasilkan _bit_ `1` jika salah satu atau kedua _bit_ bernilai `1`.                                                  |
| **Right shift (`>>`)**           | Operator yang menggeser semua _bit_ ke kanan; pergeseran satu posisi sama dengan membagi number dengan 2 dan membulatkan ke bawah.              |
| **Two's complement**             | Cara komputer merepresentasikan number negatif dalam sistem biner; menjelaskan mengapa `~5` menghasilkan `-6`.                                  |
| **Typeof operator**              | _Unary operator_ yang mengembalikan tipe _operand_ dalam bentuk _string_.                                                                      |
| **Unary negation (`-`)**         | _Unary operator_ yang mengonversi _operand_ menjadi number lalu membalik tandanya (positif menjadi negatif, dan sebaliknya).                    |
| **Unary operator**               | Operator yang bekerja pada satu _operand_.                                                                                                     |
| **Unary plus (`+`)**             | _Unary operator_ yang mengonversi _operand_ non-angka menjadi tipe number.                                                           |
| **Unsigned right shift (`>>>`)** | _Bitwise operator_ yang menggeser semua bit ke kanan tetapi memperlakukan nilainya sebagai bilangan tak bertanda (di luar cakupan materi ini). |
| **Void operator**                | _Unary operator_ yang mengevaluasi expression lalu selalu mengembalikan `undefined`.                                                             |
| **XOR (`^`)**                    | _Bitwise operator_ yang menghasilkan _bit_ `1` jika hanya salah satu dari dua _bit_ bernilai `1`.                                              |

CATATAN:
- "Operator Unary" -> "Unary Operator"
- "Operator Bitwise" -> "Bitwise Operators"
- "angka" -> "number"
- "variabel" -> "variable"
- "tipe data" -> "data type"
- "operator perbandingan dan logika" -> "comparison operators dan logical operators"
- "ekspresi" -> "expression"
