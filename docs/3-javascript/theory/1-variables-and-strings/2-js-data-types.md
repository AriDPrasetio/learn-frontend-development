# 🔢 Panduan Belajar JavaScript: `data type` dan Konsep Dasar

> Ringkasan: JavaScript memiliki sifat dynamic typed dengan 8 `data type` dasar (7 `primitive` dan 1 `object`) yang aman terhadap kesalahan matematis fatal.

**Daftar Isi:**

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

JavaScript adalah bahasa yang bersifat `dynamically typed`, yang berarti `variable` digunakan sebagai wadah bernama untuk menyimpan `value`, tetapi `variable` tersebut tidak terikat pada satu `data type` tertentu. Terdapat 8 `data type` dasar dalam JavaScript, yang terbagi menjadi 7 `primitive` `data type` (hanya dapat menyimpan satu `value` tunggal) dan 1 non-`primitive` `data type` (untuk struktur data yang lebih kompleks):

1. **`primitive type`**: `number`, `bigint`, `string`, `boolean`, `null`, `undefined`, dan `symbol`.
2. **Non-`primitive type`**: `object`.

Operasi matematika dalam JavaScript bersifat "aman" dan tidak akan menghentikan eksekusi `script` secara fatal (_die_); kesalahan perhitungan akan menghasilkan `numeric` `value` khusus seperti `NaN` atau `Infinity`. Untuk memeriksa `data type` dari suatu `value` atau `variable`, JavaScript menyediakan operator `typeof`.

### Konsep 1: `dynamic typing`

- **Apa (_What_):** Sifat bahasa pemrograman di mana `variable` tidak terikat permanen pada suatu `data type` tertentu, sehingga `variable` yang sama dapat menyimpan `string` pada satu waktu dan angka di waktu berikutnya.
- **Mengapa (_Why_):** Memberikan fleksibilitas dalam penulisan kode tanpa perlu mendeklarasikan `data type` `variable` secara eksplisit, memudahkan manipulasi data awal bagi pemula.
- **Bagaimana (_How_):** Mendeklarasikan `variable` lalu mengisi ulang value-nya dengan `data type` berbeda:

```javascript
let message = "hello"; // ✅ Berisi string
message = 123456; // ✅ Tidak menghasilkan error, sekarang data type berubah menjadi number
```

- **Siapa (_Who_):** Komponen yang terlibat adalah `variable`, `value`, dan JavaScript `engine` (`JS Engine`).
- **Kapan (_When_):** Mekanisme ini bekerja secara otomatis setiap kali ada `reassignment` `value` baru ke `variable` yang ada.
- **Di mana (_Where_):** Proses pembaruan `data type` dan `value` terjadi di dalam alokasi `execution context`.

### Konsep 2: `data type` `number` & Special `numeric` Values

- **Apa (_What_):** `data type` yang merepresentasikan angka bulat (`integer`) dan angka desimal (`floating-point`), serta mencakup `numeric` `value` khusus: `Infinity`, `-Infinity`, dan `NaN`.
- **Mengapa (_Why_):** Digunakan untuk segala bentuk kalkulasi matematis. Sifat operasi matematika yang aman memastikan program tidak `crash` ketika terjadi kesalahan hitung.
- **Bagaimana (_How_):**
  - **`numeric` `value` biasa:** `let n = 123; n = 12.345;`
  - **Infinity:** Hasil pembagian dengan nol (`1 / 0`) atau pemanggilan langsung (`Infinity`).
  - **NaN:** Hasil kesalahan komputasi (`NaN` / pembagian `string` dengan angka). Sifatnya `sticky`; operasi lanjutan pada `NaN` `me-return` `NaN` (kecuali `NaN ** 0` yang menghasilkan `1`).
- **Kapan (_When_):** Saat melakukan operasi aritmatika dasar (penjumlahan `+`, pengurangan `-`, perkalian `*`, pembagian `/`) atau manipulasi kuantitas.

> [!NOTE]
> Operasi matematika yang salah (misalnya teks dibagi angka) di JavaScript tidak akan menghentikan program, melainkan hanya akan menghasilkan `value` `NaN`.

### Konsep 3: `data type` `bigint`

- **Apa (_What_):** `data type` numerik untuk menyimpan bilangan bulat dengan `arbitrary length` yang melebihi batas aman tipe `Number`.
- **Mengapa (_Why_):** Tipe `number` biasa hanya aman menyimpan `integer` antara -(2⁵³-1) hingga (2⁵³-1) atau `-9007199254740991` hingga `9007199254740991`. Di luar batas tersebut, terjadi `precision error` karena keterbatasan penyimpanan 64-bit.
- **Bagaimana (_How_):** Dibuat dengan menambahkan huruf `n` di akhir bilangan bulat:

```javascript
// ✅ Data type BigInt untuk bilangan bulat ekstra besar
const bigInt = 1234567890123456789012345678901234567890n;
```

- **Kapan (_When_):** Digunakan dalam kasus khusus seperti kriptografi atau `timestamp` berpresisi mikrodetik.

### Konsep 4: `data type` `string` & Backticks (_Template Literals_)

- **Apa (_What_):** Urutan `character` atau teks yang diapit oleh tanda petik. JavaScript tidak memiliki `data type` khusus untuk satu `character` (`char`).
- **Mengapa (_Why_):** Digunakan untuk merepresentasikan teks seperti nama, label, `alert`, dan antarmuka pengguna.
- **Bagaimana (_How_):** Menggunakan 3 jenis tanda petik:
  1. Tanda petik ganda: `"Hello"`
  2. Tanda petik tunggal: `'Hello'`
  3. _Backticks_ (`` `Hello` ``): Memiliki fungsionalitas perluasan untuk menyisipkan `variable`/`expression` dengan sintaks `${...}`:

```javascript
let name = "John";

// ✅ Backticks memungkinkan injeksi variable langsung di dalam string
alert(`Hello, ${name}!`); // Output: Hello, John!
alert(`Hasil: ${1 + 2}`); // Output: Hasil: 3

// ❌ Petik tunggal/ganda tidak akan memproses variable
alert("Hello, ${name}!"); // Output: Hello, ${name}!
```

- **Kapan (_When_):** Digunakan saat mengelola data teks atau ketika perlu membangun kalimat dinamis yang menggabungkan `variable` dan `expression`.

### Konsep 5: `data type` `boolean` (Tipe Logika)

- **Apa (_What_):** `data type` logika yang hanya memiliki dua `value`: `true` (benar) atau `false` (salah).
- **Mengapa (_Why_):** Menyimpan status "ya/tidak" untuk mengontrol alur eksekusi dan logika dalam program.
- **Bagaimana (_How_):**

```javascript
let nameFieldChecked = true; // ✅ Variable boolean secara eksplisit
let isGreater = 4 > 1; // ✅ Hasil evaluasi perbandingan bernilai true
```

- **Kapan (_When_):** Digunakan dalam pengecekan kondisi (misalnya mengecek apakah pengguna sudah login atau centang formulir telah dipilih).

### Konsep 6: `data type` `null` dan `undefined`

- **Apa (_What_):** Dua `data type` berdiri sendiri dengan `value` tunggalnya masing-masing:
  - **`null`**: `value` khusus yang merepresentasikan "tidak ada", "kosong", atau "`value` tidak diketahui".
  - **`undefined`**: Berarti "`value` belum ditetapkan" (_`value is not assigned`_).
- **Mengapa (_Why_):** Membedakan antara `variable` yang belum diberi `value` awal dengan `variable` yang sengaja diisi `value` kosong oleh pengembang.
- **Bagaimana (_How_):**

```javascript
let age; // ✅ Otomatis bernilai undefined karena baru dideklarasi
let unknownAge = null; // ✅ Secara eksplisit diisi "kosong" / "tidak ada" oleh pengembang
```

- **Kapan (_When_):** `undefined` muncul sebagai `value` bawaan `variable` tak terisi. `null` digunakan saat pengembang ingin mengosongkan `value` `variable` secara sengaja.

> [!WARNING]
> Secara logis, jangan pernah mengisi `undefined` secara manual (seperti `let age = undefined;`). Selalu gunakan `null` jika Anda sengaja ingin mengosongkan `variable`.

### Konsep 7: `data type` `object` dan `symbol`

- **Apa (_What_):**
  - **`object`**: Non-`primitive` `data type` untuk menyimpan kumpulan data atau entitas kompleks dalam bentuk `key-value pairs`.
  - **`symbol`**: `primitive` `data type` untuk membuat `unique identifier` pada `object`.
- **Mengapa (_Why_):** `primitive` type hanya bisa menyimpan satu `value` tunggal, sedangkan `object` memungkinkan pengelompokan banyak data terkait dalam satu `variable`.
- **Bagaimana (_How_):**

```javascript
// ✅ Deklarasi Object
let user = {
  name: "Alice",
  age: 30,
};

// ✅ Deklarasi Symbol
let id = Symbol("id");
```

- **Kapan (_When_):** `Object` digunakan saat mengelola data kompleks (seperti data pengguna), sedangkan `Symbol` digunakan saat memerlukan property unik yang tidak bentrok pada `object`.

### Konsep 8: Operator typeof

- **Apa (_What_):** Operator bawaan yang `me-return` `data type` dari suatu `value`/operand dalam bentuk `string`.
- **Mengapa (_Why_):** Membantu mengecek `data type` `variable` secara cepat sebelum melakukan pemrosesan data spesifik.
- **Bagaimana (_How_):** Sintaks dapat berupa `typeof x` atau `typeof(x)`:

```javascript
typeof undefined; // ✅ "undefined"
typeof 0; // ✅ "number"
typeof 10n; // ✅ "bigint"
typeof true; // ✅ "boolean"
typeof "foo"; // ✅ "string"
typeof Symbol(); // ✅ "symbol"
typeof Math; // ✅ "object" (Math adalah object bawaan)

typeof null; // ❌ "object" (Ini adalah error/bug resmi bawaan sejak awal bahasa JS dibuat)
typeof alert; // ✅ "function" (Function tergolong object, tetapi typeof me-return spesifik "function")
```

- **Kapan (_When_):** Digunakan saat proses `debugging` atau pembuatan `function` yang perlu memproses berbagai `data type` secara berbeda.

> [!IMPORTANT]
> Hasil eksekusi `typeof null` yang `me-return` `"object"` adalah `bug` lama di JavaScript yang sengaja tidak diperbaiki hingga hari ini untuk menjaga `backward compatibility`. `null` sebenarnya bukanlah `object`.

**Poin Kunci:**

- JavaScript memiliki dynamic typing; sebuah `variable` bisa diubah isinya dengan berbagai `data type` berbeda seiring berjalannya kode.
- Terdapat 7 `primitive` `data type`: `number`, `bigint`, `string`, `boolean`, `null`, `undefined`, dan `symbol`.
- Terdapat 1 non-`primitive` `data type`, yakni `object`.
- Operasi matematika fatal dihindari oleh kemunculan `NaN` atau `Infinity`.
- Gunakan `typeof` untuk memeriksa apa `data type` yang terkandung di dalam `value` atau `variable` Anda.

---

## 2. Kuis

Jawablah pertanyaan-pertanyaan singkat berikut untuk menguji pemahaman Anda:

1. Apa yang dimaksud dengan sifat `dynamically typed` pada JavaScript?
2. Berapa batas `value` `integer` teratas yang aman disimpan dalam `data type` `number` sebelum terjadi `precision error`?
3. Apa hasil dari operasi aritmatika pembagian angka positif dengan nol (`1 / 0`) dalam JavaScript?
4. Mengapa `value` `NaN` disebut memiliki sifat `sticky`?
5. Bagaimanakah cara membuat `value` bertipe `BigInt` dalam kode JavaScript?
6. Jenis tanda petik manakah yang memungkinkan penyisipan `variable` atau `expression` menggunakan sintaks `${...}`?
7. Apakah perbedaan arti mendasar antara `data type` `null` dan `undefined`?
8. Mengapa perintah `typeof null` `me-return` hasil `"object"` meskipun `null` bukan merupakan sebuah `object`?
9. `data type` apakah yang digunakan untuk membuat `unique identifier` pada `object`?
10. Apakah `function` dari perintah `console.log()` dan simbol `//` dalam penulisan kode JavaScript?

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details><summary><strong>1. Sifat Dynamically Typed</strong></summary>

_Dynamically typed_ berarti `variable` di JavaScript tidak terikat permanen pada `data type` tertentu. Sebuah `variable` dapat menyimpan `data type` `string` pada satu saat, kemudian diisi ulang dengan `value` bertipe `number` tanpa menyebabkan `error`.

</details>

<details><summary><strong>2. Batas Safe `integer`</strong></summary>

Batas maksimum `integer` yang aman pada tipe `number` adalah (2⁵³ - 1) atau 9007199254740991. Angka di atas batas tersebut tidak dapat disimpan secara tepat karena keterbatasan ruang penyimpanan 64-bit.

</details>

<details><summary><strong>3. Pembagian dengan Nol</strong></summary>

Pembagian angka positif dengan nol (`1 / 0`) dalam JavaScript `me-return` `numeric` `value` khusus yaitu `Infinity`. JavaScript menganggap operasi ini aman dan tidak akan menghentikan eksekusi program dengan `fatal error`.

</details>

<details><summary><strong>4. Sifat Lengket NaN</strong></summary>

`NaN` bersifat lengket karena setiap operasi matematika lanjutan yang melibatkan `NaN` akan terus menghasilkan `NaN`. Satu-satunya pengecualian untuk aturan ini adalah operasi pemangkatan `NaN ** 0` yang bernilai 1.

</details>

<details><summary><strong>5. Pembuatan `bigint`</strong></summary>

`value` `BigInt` dibuat dengan menambahkan akhiran huruf `n` di akhir bilangan bulat, misalnya `12345678901234567890n`. `data type` ini digunakan untuk merepresentasikan bilangan bulat dengan panjang sembarang.

</details>

<details><summary><strong>6. Penggunaan Backticks</strong></summary>

Fitur penyisipan `variable` atau `expression` dengan sintaks `${...}` hanya bekerja pada `string` yang diapit tanda _backticks_ (`` `...` ``). Tanda petik tunggal maupun ganda tidak memiliki fungsionalitas ini dan akan mencetak teks secara harfiah.

</details>

<details><summary><strong>7. Perbedaan `null` dan `undefined`</strong></summary>

`undefined` berarti sebuah `variable` telah dideklarasikan tetapi belum diberi atau ditetapkan value-nya secara otomatis. Sedangkan `null` adalah `value` khusus yang sengaja ditetapkan oleh pengembang untuk menandai bahwa `variable` tersebut "kosong" atau "tidak diketahui".

</details>

<details><summary><strong>8. Kesalahan typeof `null`</strong></summary>

Hasil `typeof null` yang bernilai `"object"` merupakan `error` (bug) resmi yang berasal dari masa-masa awal pembuatan JavaScript. Perilaku ini tetap dipertahankan hingga sekarang demi menjaga kompatibilitas dengan kode-kode lama.

</details>

<details><summary><strong>9. Fungsi `symbol`</strong></summary>

`data type` yang digunakan untuk membuat `unique identifier` pada `object` adalah `Symbol`. `value` bernilai `Symbol` dijamin selalu unik dan tidak dapat diubah setelah dibuat.

</details>

<details><summary><strong>10. `console`.log dan Comment</strong></summary>

`console.log()` adalah `function` yang digunakan untuk menampilkan informasi ke `console` web browser guna keperluan `debugging`. Sementara itu, simbol `//` digunakan untuk menulis comment yang akan diabaikan oleh `engine` saat kode dijalankan.

</details>

---

## 4. Soal Esai

Gunakan pemahaman Anda dari sumber materi untuk menganalisis dan menjawab pertanyaan kritis berikut:

1. Analisis mengapa JavaScript memilih untuk `me-return` `value` khusus seperti `Infinity` dan `NaN` saat terjadi kesalahan matematika ketimbang menghentikan program dengan fatal error. Jelaskan keuntungan serta potensi bahaya dari pendekatan ini bagi pengembang!
2. Bandingkan penggunaan tanda petik ganda (`"..."`), petik tunggal (`'...'`), dan _backticks_ (`` `...` ``) dalam pembuatan `string`. Dalam kondisi seperti apa seorang pengembang diwajibkan menggunakan _backticks_?
3. Mengapa pembuat JavaScript membedakan `data type` `null` dan `undefined` untuk mewakili konsep "ketidakadaan `value`"? Evaluasi skenario penggunaan yang tepat untuk masing-masing `data type` tersebut!
4. Jelaskan perbedaan mendasar antara `primitive` `data type` dan non-`primitive` `data type` (`object`) dari sudut pandang jumlah `value` yang dapat disimpan serta cara pengelompokan datanya!
5. Mengapa `data type` `BigInt` perlu ditambahkan ke dalam JavaScript padahal tipe `number` biasa sudah mampu menyimpan angka desimal yang sangat besar hingga 1.7976931348623157 × 10³⁰⁸?

---

## 5. Glosarium

| Istilah                  | Penjelasan                                                                                                                                                                 |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Backticks**            | Tanda petik khusus (`` ` ``) yang digunakan untuk mengapit `string` dengan fungsionalitas perluasan, seperti penyisipan variable atau expression melalui sintaks `${...}`. |
| **BigInt**               | Primitive data type JavaScript yang digunakan untuk merepresentasikan bilangan bulat dengan panjang sembarang melebihi batas aman tipe _Number_.                           |
| **Boolean**              | Primitive data type logika yang hanya memiliki dua value, yaitu `true` (benar) atau `false` (salah).                                                                       |
| **Console.log()**        | Function bawaan JavaScript yang berfungsi menampilkan informasi atau data ke console browser untuk keperluan `debugging`.                                                  |
| **Dynamic Typing**       | Dynamic Typing; sifat bahasa pemrograman di mana variable tidak terikat pada satu data type tertentu dan value-nya dapat diubah ke tipe lain saat eksekusi program.        |
| **Infinity**             | Numeric value khusus pada tipe `number` yang mewakili konsep matematis tak terhingga dan bernilai lebih besar dari angka mana pun.                                         |
| **Komentar (Comments)**  | Catatan dalam kode program yang diawali dengan tanda `//` untuk memberi penjelasan kepada `programmer` dan diabaikan oleh engine saat kode dijalankan.                     |
| **NaN (Not a Number)**   | Numeric value khusus pada tipe `number` yang merepresentasikan hasil dari kesalahan komputasi matematika yang tidak valid atau tidak terdefinisi.                          |
| **Null**                 | Primitive data type khusus yang hanya berisi satu value `null`, mewakili konsep "kosong", "tidak ada", atau "value tidak diketahui".                                       |
| **Number**               | Primitive data type yang merepresentasikan angka bulat (`integer`) maupun desimal (`floating-point`), terbatas pada rentang aman ±(2⁵³ - 1).                               |
| **Object**               | Non-primitive data type yang digunakan untuk menyimpan kumpulan data atau entitas kompleks dalam bentuk `key-value pairs`.                                                 |
| **Primitive Data Types** | ``primitive` `data type``; kelompok data type dasar dalam JavaScript yang value-nya hanya dapat berisi satu hal tunggal.                                                   |
| **String**               | Primitive data type berupa urutan character atau teks yang diapit oleh tanda petik tunggal, ganda, atau _backticks_.                                                       |
| **Symbol**               | Primitive data type yang digunakan untuk membuat `unique identifier` yang tidak dapat diubah pada object.                                                                  |
| **Typeof**               | Operator khusus yang digunakan untuk memeriksa dan me-return `string` nama data type dari suatu operand atau variable.                                                     |
| **Undefined**            | Primitive data type khusus yang hanya berisi satu value `undefined`, mewakili kondisi di mana suatu `variable` telah dideklarasikan tetapi belum diberi `value`.           |
| **`variable`**           | Wadah bernama yang digunakan untuk menyimpan `value` data sehingga dapat dirujuk dan dimanipulasi di dalam program.                                                        |

CATATAN:

- "tipe data" -> "`data type`" (kategori data dalam JS)
- "pengetikan dinamis" -> "dynamic typing" (fitur bahasa JS)
- "variabel" -> "`variable`" (wadah penyimpanan)
- "nilai" -> "`value`" (isi data)
- "primitif" -> "`primitive`" (tipe data tunggal)
- "non-primitif" -> "non-`primitive`" (tipe data kompleks)
- "objek" -> "`object`" (struktur data JS)
- "skrip" -> "`script`" (kode program)
- "eksekusi" -> "`execution`" (proses menjalankan program)
- "penetapan ulang" -> "`reassignment`" (mengganti nilai variabel)
- "memori" -> "`memory`" (ruang penyimpanan)
- "konteks eksekusi" -> "`execution context`" (lingkungan jalannya kode)
- "numerik" -> "`numeric`" (berkaitan dengan angka)
- "ekspresi" -> "`expression`" (potongan kode yang menghasilkan nilai)
- "fungsi" -> "`function`" (blok kode yang dapat dieksekusi)
- "bawaan" -> "`built-in`" (fitur asli bahasa)
- "konsol" -> "`console`" (antarmuka command-line)
- "karakter" -> "`character`" (elemen tunggal `string`)
- "mengembalikan" -> "`me-return`" (memberikan hasil dari fungsi/operator)
- "dideklarasikan" -> "dideklarasikan" (akar kata: declaration)
- "pasangan kunci-nilai" -> "`key-value pairs`" (struktur data objek)
- "pengenal unik" -> "`unique identifier`" (konsep properti eksklusif)
- "mesin" -> "`engine`" (program pengeksekusi)
