# 📦 Panduan Belajar JavaScript: Bekerja dengan Angka dan arithmetic operators

> Dalam JavaScript, data type Number mencakup semua jenis angka, mulai dari integer hingga floating point, bahkan nilai khusus seperti Infinity dan NaN. Memahami bagaimana angka berinteraksi dengan arithmetic operators dan data type lain (seperti string) sangat penting untuk menghindari hasil perhitungan yang tak terduga (seperti bug type coercion) saat membangun aplikasi.

## Daftar Isi

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

### Konsep 1: data type Number di JavaScript

- **What (Apa):** data type `Number` di JavaScript adalah data type tunggal yang digunakan untuk merepresentasikan semua jenis angka, baik itu integer, floating point, maupun nilai numerik khusus seperti `Infinity` dan `NaN` (Not a Number). JavaScript juga mendukung angka dalam basis lain seperti biner (basis 2), oktal (basis 8), dan heksadesimal (basis 16).
- **Why (Mengapa):** Tidak seperti bahasa pemrograman lain yang memisahkan tipe untuk integer (misal: `int`) dan desimal (misal: `float`), JavaScript menggunakan satu tipe universal (`Number`). Hal ini menyederhanakan deklarasi variable, namun menuntut pengembang untuk memahami bagaimana batas presisi dan nilai khusus ditangani.
- **How (Bagaimana):**

```js
// integer (Integer)
const positiveInteger = 100;
const negativeInteger = -25;
const zero = 0;

// floating point (Floating point)
const floatingPointNumber = 4.5;
const anotherFloat = 89.56;

// Nilai Infinity (didapat dari pembagian dengan nol)
const infiniteNumber = 1 / 0;
console.log(infiniteNumber); // Infinity

// NaN (Not a Number) - hasil operasi matematika yang tidak valid
const notANumber = "hello world" / 2;
console.log(notANumber); // NaN
console.log(typeof notANumber); // number
```

- **Who (Siapa):** JavaScript engine yang mengatur alokasi dan penentuan tipe `Number` secara otomatis.
- **When (Kapan):** Digunakan saat kita perlu menyimpan nilai untuk keperluan perhitungan matematika, ukuran, harga, pengukuran presisi, dsb.
- **Where (Di mana):** Disimpan dalam memori sebagai primitive data type `Number`.

### Konsep 2: arithmetic operators Dasar

- **What (Apa):** arithmetic operators adalah simbol yang digunakan untuk melakukan operasi matematika dasar seperti penjumlahan (`+`), pengurangan (`-`), perkalian (`*`), pembagian (`/`), remainder/modulo (`%`), dan eksponensial/pangkat (`**`).
- **Why (Mengapa):** Operator ini adalah alat utama untuk melakukan manipulasi numerik dan kalkulasi di dalam aplikasi, seperti menghitung total harga keranjang belanja atau mencari sisa hasil bagi untuk logika genap/ganjil.
- **How (Bagaimana):**

```js
// Penjumlahan dan Pengurangan
const sum = 10 + 5; // 15
const difference = 10 - 5; // 5

// Perkalian dan Pembagian
const product = 10 * 5; // 50
const quotient = 10 / 2; // 5

// remainder (Modulo) dan Eksponensial (Pangkat)
const remainder = 10 % 3; // 1 (sisa dari 10 dibagi 3)
const exponent = 2 ** 3; // 8 (2 pangkat 3)

// expression Gabungan
const mixed = 10 + 5 * 2 - 8 / 4; // 18 (mengikuti operator precedence)
```

- **Who (Siapa):** Pengembang menuliskan operator, dan JavaScript engine mengevaluasi operasi matematika dengan mengikuti aturan operator precedence.
- **When (Kapan):** Digunakan setiap kali aplikasi membutuhkan perhitungan, perubahan nilai, atau evaluasi matematis dari beberapa variable.
- **Where (Di mana):** Operator ditulis di antara variable numerik (operand) dalam expression JavaScript.

### Konsep 3: Type Coercion (Manipulasi Campuran Angka dan String)

- **What (Apa):** Type coercion adalah konversi otomatis sebuah data type ke data type lain yang dilakukan JavaScript saat memproses operasi antar tipe yang berbeda. Misalnya, mencampur operasi antara `Number` dan `String` atau `Boolean`.
- **Why (Mengapa):** JavaScript berusaha bersikap toleran agar kode tidak mudah crash, namun jika tidak dipahami, perilaku ini sering menjadi sumber bug tersembunyi (misalnya hasil `5 + '10'` menjadi `'510'` alih-alih `15`).
- **How (Bagaimana):**

```js
// Penjumlahan (Concatenation / String Concatenation)
// Operator + dengan string akan selalu mengubah operand lain menjadi string
const addition = 5 + "10";
console.log(addition); // "510" (String)

// Pengurangan, Perkalian, Pembagian
// JavaScript akan mencoba mengubah string menjadi angka
const subtraction = "10" - 5; // 5 (Number)
const multiplication = "10" * 2; // 20 (Number)
const division = "20" / 2; // 10 (Number)

// Konversi Gagal menghasilkan NaN
const failMath = "abc" - 5; // NaN

// Operasi dengan Boolean (true = 1, false = 0)
const boolMath = true + 1; // 2

// Operasi dengan null dan undefined (null = 0, undefined = NaN)
const nullMath = null + 5; // 5
const undefinedMath = undefined + 5; // NaN
```

- **Who (Siapa):** _JavaScript engine_ melakukan _coercion_ (pemaksaan/konversi tipe) di belakang layar saat menemui expression campuran.
- **When (Kapan):** Terjadi otomatis kapan pun variable berbeda tipe dioperasikan bersama, terutama saat input pengguna (yang biasanya berupa teks dari antarmuka web) dikalkulasi tanpa konversi eksplisit terlebih dahulu.
- **Where (Di mana):** Berlaku pada proses evaluasi runtime di semua operasi aritmetika yang melibatkan tipe non-numerik.

### Poin Kunci

- Di JavaScript, semua angka (bulat maupun desimal) menggunakan satu data type yang sama yaitu `Number`.
- Pembagian dengan nol tidak menyebabkan error/crash, tetapi akan menghasilkan `Infinity`.
- Operasi matematika yang tidak valid dengan data type tak terduga (seperti teks non-angka dikurangi angka) akan menghasilkan nilai khusus `NaN` (_Not a Number_).
- Anehnya, hasil evaluasi `typeof NaN` adalah `"number"`.
- Operator `+` berfungsi ganda sebagai penjumlahan matematika dan string concatenation (string concatenation). Jika salah satu operand adalah `String`, maka `+` akan melakukan string concatenation.
- arithmetic operators lain (`-`, `*`, `/`, `%`, `**`) akan selalu mencoba mengubah operand tipe string menjadi tipe angka (proses type coercion) sebelum dikalkulasi.

---

## 2. Kuis

Bagian kuis ini dirancang sebagai instrumen evaluasi mandiri (self-assessment) untuk menguji daya ingat dan pemahaman konseptual Anda terhadap aturan data type `Number` dan arithmetic operators JavaScript yang telah dipelajari.

1. Apa saja jenis-jenis angka yang termasuk ke dalam data type `Number` di JavaScript?
2. Apakah yang akan terjadi dan nilai apa yang akan dikembalikan jika kita melakukan pembagian sebuah angka dengan angka `0` (nol) di JavaScript?
3. Apakah singkatan dari `NaN` dan pada kondisi apa nilai tersebut biasanya dihasilkan?
4. Manakah operator yang harus digunakan untuk mendapatkan remainder (remainder), dan apa contoh simbolnya?
5. Mengapa hasil dari operasi `5 + '10'` di JavaScript adalah `'510'` alih-alih `15`?
6. Apa yang akan dihasilkan jika kita menjalankan perintah `'20' / 2`? Mengapa hasilnya demikian?
7. Berapakah hasil operasi matematika tak valid seperti `'abc' * 2`, dan apakah hasil dari pengecekan `typeof` pada luaran tersebut?
8. Bagaimana JavaScript memandang nilai tipe `Boolean` (`true` dan `false`) jika diikutkan ke dalam sebuah operasi aritmetika?
9. Apakah yang dimaksud dengan istilah Type coercion di JavaScript?
10. Berapakah hasil dari `null + 5` dan `undefined + 5` di JavaScript?

> Silakan selesaikan seluruh pertanyaan di atas secara mandiri sebelum Anda melihat kunci jawaban resmi pada bagian selanjutnya.

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details>
<summary><strong>1. Jenis Angka di JavaScript</strong></summary>

JavaScript menggunakan satu tipe tunggal `Number` yang mencakup semua jenis nilai numerik, seperti integer (integers), floating point (floating-point), serta nilai khusus seperti `Infinity` dan `NaN`. Angka berbasis lain seperti bilangan biner, oktal, dan heksadesimal juga tergolong dalam tipe `Number`.

</details>

<details>
<summary><strong>2. Pembagian dengan Angka 0</strong></summary>

Tidak seperti bahasa lain yang mungkin mengembalikan error, membagi angka positif dengan nol di JavaScript tidak akan menyebabkan program crash, melainkan akan mengembalikan nilai khusus berupa `Infinity` (Infinity). data type dari `Infinity` tetaplah `Number`.

</details>

<details>
<summary><strong>3. Pengertian NaN</strong></summary>

`NaN` merupakan singkatan dari _Not a Number_. Nilai ini dihasilkan oleh JavaScript engine saat kita mencoba melakukan operasi matematika (seperti perkalian atau pengurangan) yang melibatkan data atau tipe _String_ yang tidak valid untuk dikonversi menjadi angka (contoh: `'hello' / 2`).

</details>

<details>
<summary><strong>4. Operator remainder (Remainder)</strong></summary>

Operator remainder di JavaScript disimbolkan dengan tanda persentase (`%`). Operator ini berguna untuk mengembalikan sisa nilai sesudah pembagian matematis selesai dilakukan, misalnya `10 % 3` menghasilkan angka `1`.

</details>

<details>
<summary><strong>5. Perilaku Operator + pada Campuran Tipe</strong></summary>

Ketika mendapati operasi antara angka `5` dan string `'10'`, JavaScript melihat adanya operator `+` yang juga berfungsi sebagai string concatenation (string concatenation). JavaScript kemudian mengubah `5` menjadi teks dan menggabungkannya sehingga menjadi teks `'510'`, bukan melakukan penjumlahan matematis.

</details>

<details>
<summary><strong>6. Hasil dan Alasan dari '20' / 2</strong></summary>

Hasilnya adalah angka `10`. Untuk operator pengurangan, perkalian, dan pembagian (`-`, `*`, `/`), JavaScript menerapkan mekanisme type coercion di mana nilai string `'20'` secara paksa dan otomatis diubah (dikonversi) menjadi angka murni sebelum pembagian matematika dieksekusi.

</details>

<details>
<summary><strong>7. Hasil Teks Dikalikan Angka</strong></summary>

Karena `'abc'` tidak bisa direpresentasikan menjadi bentuk numerik, operasi `'abc' * 2` akan gagal dan menghasilkan `NaN`. Mengejutkannya, hasil dari pemanggilan `typeof NaN` tetap mengembalikan keluaran `"number"`.

</details>

<details>
<summary><strong>8. Operasi Matematika Bersama Boolean</strong></summary>

Dalam operasi aritmetika, JavaScript mengubah tipe boolean `true` menjadi angka `1`, sementara boolean `false` diubah menjadi angka `0`. Oleh karena itu, operasi seperti `true + 1` akan mengembalikan hasil berupa angka `2`.

</details>

<details>
<summary><strong>9. Definisi Type Coercion</strong></summary>

Type coercion adalah proses konversi data type otomatis dan implisit yang dilakukan di latar belakang oleh JavaScript engine kapan pun ia bertemu dengan operasi atau perbandingan antara dua operand dari data type yang berbeda, seperti mengkonversi string menjadi angka saat dikalikan.

</details>

<details>
<summary><strong>10. Operasi dengan null dan undefined</strong></summary>

Di dalam perhitungan matematis, JavaScript melakukan _coercion_ dengan cara menganggap variable bernilai `null` sebagai `0`, sehingga `null + 5` menghasilkan `5`. Sebaliknya, `undefined` tidak bisa dikonversi menjadi angka rasional, sehingga `undefined + 5` akan mengembalikan `NaN`.

</details>

---

## 4. Soal Esai

Soal esai berikut disusun untuk melatih penalaran analitis, kemampuan sintesis, serta evaluasi keputusan teknis (trade-offs) yang harus diambil oleh seorang pengembang perangkat lunak saat mengelola variable numerik dalam skenario pemrograman JavaScript.

1. **Analisis Risiko Type Coercion:** Jelaskan bagaimana sifat type coercion yang terlalu memaafkan (forgiving) pada bahasa pemrograman JavaScript (misalnya menghasilkan `NaN` ketimbang error application crash saat salah memanipulasi _string_) dapat menjadi pisau bermata dua saat melakukan _debugging_ aplikasi keuangan atau perpajakan berskala besar.
2. **Perbedaan Evaluasi Penggabungan (+) dan Aritmetika (-):** Bayangkan sebuah input HTML mengumpulkan nomor umur dari user, dan menghasilkan data bernilai _String_ `'18'`. Secara konseptual dan detail, apa perbedaan perilaku JavaScript engine jika kita memproses nilai ini dengan `umur + 2` dibanding dengan `umur - (-2)`? Solusi preventif apa yang bisa digunakan untuk mencegah anomali pada penjumlahan?
3. **Konsep Universalitas Tipe Number:** JavaScript tidak memisahkan `integer` dan `float` menjadi data type tersendiri seperti bahasa Java atau C. Menurut Anda, apa keuntungan dari kesederhanaan desain ini untuk pemula, dan apa kelemahan utamanya bagi perangkat lunak yang membutuhkan tingkat presisi desimal dan memori yang sangat ketat?
4. **Analisis Konsep Infinity dan NaN:** Nilai batas seperti `Infinity` maupun error mathematical operation seperti `NaN`, saat dianalisa dengan `typeof` tetap akan melaporkan diri mereka sebagai bagian dari keluarga tipe `"number"`. Uraikan penjelasan teknis dan logis mengapa entitas seperti _Not a Number_ (Bukan Sebuah Angka) justru tetap dikategorikan sebagai angka!

---

## 5. Glosarium

Penguasaan terminologi teknis (technical vocabulary) yang tepat sangat penting bagi pengembang JavaScript agar dapat berkomunikasi secara efektif, memahami dokumentasi resmi, serta berkolaborasi secara profesional dalam industri pengembangan perangkat lunak.

| Istilah Teknis                                  | Definisi Berdasarkan Teks Sumber                                                                                                                                                                                                        |
| :---------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Arithmetic Operators (arithmetic operators)** | Simbol matematis (seperti `+`, `-`, `*`, `/`, `%`, `**`) yang dipergunakan untuk melakukan kalkulasi pada nilai-nilai variable atau angka murni.                                                                                        |
| **Base / Basis (Sistem Bilangan)**              | Sebuah sistem perhitungan angka, seperti standar desimal (basis 10), biner (basis 2), oktal (basis 8), atau heksadesimal (basis 16), yang keseluruhannya dicakup dalam tipe Number JavaScript.                                          |
| **Floating-point / Float (floating point)**     | Sebuah nilai numerik yang memiliki komponen desimal atau pecahan (misalnya `4.5` atau `89.56`), yang di JavaScript tidak memiliki deklarasi khusus namun terintegrasi dalam tipe `Number`.                                              |
| **Infinity (Infinity)**                         | Entitas spesial pada tipe `Number` yang merepresentasikan suatu angka di luar batas maksimum dari yang bisa ditampung, atau bisa juga dihasilkan dari membagi bilangan positif dengan nol.                                              |
| **Integer (integer)**                           | Angka yang murni utuh dan tidak memiliki pecahan desimal, seperti integer positif (`100`), negatif (`-25`), maupun nol (`0`).                                                                                                           |
| **NaN (Not a Number)**                          | Singkatan dari "Not a Number", suatu nilai spesial dari tipe `Number` yang mendeskripsikan bahwa proses perhitungan matematika mengalami kegagalan (tidak valid), biasanya disebabkan operasi string yang tidak bisa diubah jadi angka. |
| **Operand**                                     | Sebuah data, variable, ataupun nilai spesifik yang diletakkan bersebelahan dengan operator dan dimanipulasi di dalam sebuah kalkulasi aritmetika.                                                                                       |
| **Operator Precedence**                         | Urutan penentuan prioritas matematika di dalam JavaScript engine (misal: perkalian didahulukan daripada penjumlahan) ketika menangani campuran beberapa operator berbeda dalam satu baris expression.                                   |
| **String Concatenation**                        | Proses teknis menautkan dua buah teks (`String`) menjadi satu teks yang lebih panjang. Di JavaScript, ini dilakukan menggunakan operator yang sama dengan penjumlahan angka yaitu `+`.                                                  |
| **Type Coercion (Konversi Paksa data type)**    | Mekanisme dari JavaScript engine yang secara tersembunyi merubah tipe dari suatu data (contohnya string menjadi angka) sebelum melanjutkan operasi yang tengah dikalkulasi.                                                             |
