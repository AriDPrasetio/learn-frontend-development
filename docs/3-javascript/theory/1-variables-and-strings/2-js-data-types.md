# 🔢 Panduan Belajar JavaScript: Tipe Data dan Konsep Dasar

> Ringkasan: JavaScript memiliki sifat pengetikan dinamis (_dynamically typed_) dengan 8 tipe data dasar (7 primitif dan 1 objek) yang aman terhadap kesalahan matematis fatal.

**Daftar Isi:**

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

JavaScript adalah bahasa yang bersifat _dynamically typed_ (pengetikan dinamis), yang berarti variabel digunakan sebagai wadah bernama untuk menyimpan nilai, tetapi variabel tersebut tidak terikat pada satu tipe data tertentu. Terdapat 8 tipe data dasar dalam JavaScript, yang terbagi menjadi 7 tipe data primitif (hanya dapat menyimpan satu nilai tunggal) dan 1 tipe data non-primitif (untuk struktur data yang lebih kompleks):

1. **Tipe Primitif**: `number`, `bigint`, `string`, `boolean`, `null`, `undefined`, dan `symbol`.
2. **Tipe Non-Primitif**: `object`.

Operasi matematika dalam JavaScript bersifat "aman" dan tidak akan menghentikan eksekusi skrip secara fatal (_die_); kesalahan perhitungan akan menghasilkan nilai numerik khusus seperti `NaN` atau `Infinity`. Untuk memeriksa tipe data dari suatu nilai atau variabel, JavaScript menyediakan operator `typeof`.

### Konsep 1: Pengetikan Dinamis (_Dynamic Typing_)

- **Apa (_What_):** Sifat bahasa pemrograman di mana variabel tidak terikat permanen pada suatu tipe data tertentu, sehingga variabel yang sama dapat menyimpan _string_ pada satu waktu dan angka di waktu berikutnya.
- **Mengapa (_Why_):** Memberikan fleksibilitas dalam penulisan kode tanpa perlu mendeklarasikan tipe data variabel secara eksplisit, memudahkan manipulasi data awal bagi pemula.
- **Bagaimana (_How_):** Mendeklarasikan variabel lalu mengisi ulang nilainya dengan tipe data berbeda:

```javascript
let message = "hello"; // ✅ Berisi string
message = 123456; // ✅ Tidak menghasilkan error, sekarang tipe data berubah menjadi number
```

- **Siapa (_Who_):** Komponen yang terlibat adalah Variabel, Nilai (_Value_), dan Mesin Eksekusi JavaScript (_JS Engine_).
- **Kapan (_When_):** Mekanisme ini bekerja secara otomatis setiap kali ada penetapan ulang (_re-assignment_) nilai baru ke variabel yang ada.
- **Di mana (_Where_):** Proses pembaruan Tipe Data dan Nilai terjadi di dalam alokasi memori konteks eksekusi (_Execution Context / Scope_).

### Konsep 2: Tipe Data Number & Special Numeric Values

- **Apa (_What_):** Tipe data yang merepresentasikan angka bulat (_integer_) dan angka desimal (_floating-point_), serta mencakup nilai numerik khusus: `Infinity`, `-Infinity`, dan `NaN`.
- **Mengapa (_Why_):** Digunakan untuk segala bentuk kalkulasi matematis. Sifat operasi matematika yang aman memastikan program tidak hancur (_crash_) ketika terjadi kesalahan hitung.
- **Bagaimana (_How_):**
  - **Nilai numerik biasa:** `let n = 123; n = 12.345;`
  - **Infinity:** Hasil pembagian dengan nol (`1 / 0`) atau pemanggilan langsung (`Infinity`).
  - **NaN:** Hasil kesalahan komputasi ("_not a number_" / pembagian string dengan angka). Sifatnya "lengket" (_sticky_); operasi lanjutan pada `NaN` mengembalikan `NaN` (kecuali `NaN ** 0` yang menghasilkan `1`).
- **Kapan (_When_):** Saat melakukan operasi aritmatika dasar (penjumlahan `+`, pengurangan `-`, perkalian `*`, pembagian `/`) atau manipulasi kuantitas.

> [!NOTE]
> Operasi matematika yang salah (misalnya teks dibagi angka) di JavaScript tidak akan menghentikan program, melainkan hanya akan menghasilkan nilai `NaN`.

### Konsep 3: Tipe Data BigInt

- **Apa (_What_):** Tipe data numerik untuk menyimpan bilangan bulat dengan panjang sembarang (_arbitrary length_) yang melebihi batas aman tipe `Number`.
- **Mengapa (_Why_):** Tipe `number` biasa hanya aman menyimpan _integer_ antara -(2⁵³-1) hingga (2⁵³-1) atau `-9007199254740991` hingga `9007199254740991`. Di luar batas tersebut, terjadi kesalahan presisi (_precision error_) karena keterbatasan penyimpanan 64-bit.
- **Bagaimana (_How_):** Dibuat dengan menambahkan huruf `n` di akhir bilangan bulat:

```javascript
// ✅ Tipe data BigInt untuk bilangan bulat ekstra besar
const bigInt = 1234567890123456789012345678901234567890n;
```

- **Kapan (_When_):** Digunakan dalam kasus khusus seperti kriptografi atau stempel waktu (_timestamp_) berpresisi mikrodetik.

### Konsep 4: Tipe Data String & Backticks (_Template Literals_)

- **Apa (_What_):** Urutan karakter atau teks yang diapit oleh tanda petik. JavaScript tidak memiliki tipe data khusus untuk satu karakter (_char_).
- **Mengapa (_Why_):** Digunakan untuk merepresentasikan teks seperti nama, label, pesan peringatan (_alert_), dan antarmuka pengguna.
- **Bagaimana (_How_):** Menggunakan 3 jenis tanda petik:
  1. Tanda petik ganda: `"Hello"`
  2. Tanda petik tunggal: `'Hello'`
  3. _Backticks_ (`` `Hello` ``): Memiliki fungsionalitas perluasan untuk menyisipkan variabel/ekspresi dengan sintaks `${...}`:

```javascript
let name = "John";

// ✅ Backticks memungkinkan injeksi variabel langsung di dalam string
alert(`Hello, ${name}!`); // Output: Hello, John!
alert(`Hasil: ${1 + 2}`); // Output: Hasil: 3

// ❌ Petik tunggal/ganda tidak akan memproses variabel
alert("Hello, ${name}!"); // Output: Hello, ${name}!
```

- **Kapan (_When_):** Digunakan saat mengelola data teks atau ketika perlu membangun kalimat dinamis yang menggabungkan variabel dan ekspresi.

### Konsep 5: Tipe Data Boolean (Tipe Logika)

- **Apa (_What_):** Tipe data logika yang hanya memiliki dua nilai: `true` (benar) atau `false` (salah).
- **Mengapa (_Why_):** Menyimpan status "ya/tidak" untuk mengontrol alur eksekusi dan logika dalam program.
- **Bagaimana (_How_):**

```javascript
let nameFieldChecked = true; // ✅ Variabel boolean secara eksplisit
let isGreater = 4 > 1; // ✅ Hasil evaluasi perbandingan bernilai true
```

- **Kapan (_When_):** Digunakan dalam pengecekan kondisi (misalnya mengecek apakah pengguna sudah login atau centang formulir telah dipilih).

### Konsep 6: Tipe Data null dan undefined

- **Apa (_What_):** Dua tipe data berdiri sendiri dengan nilai tunggalnya masing-masing:
  - **`null`**: Nilai khusus yang merepresentasikan "tidak ada", "kosong", atau "nilai tidak diketahui".
  - **`undefined`**: Berarti "nilai belum ditetapkan" (_value is not assigned_).
- **Mengapa (_Why_):** Membedakan antara variabel yang belum diberi nilai awal dengan variabel yang sengaja diisi nilai kosong oleh pengembang.
- **Bagaimana (_How_):**

```javascript
let age; // ✅ Otomatis bernilai undefined karena baru dideklarasi
let unknownAge = null; // ✅ Secara eksplisit diisi "kosong" / "tidak ada" oleh pengembang
```

- **Kapan (_When_):** `undefined` muncul sebagai nilai bawaan variabel tak terisi. `null` digunakan saat pengembang ingin mengosongkan nilai variabel secara sengaja.

> [!WARNING]
> Secara logis, jangan pernah mengisi `undefined` secara manual (seperti `let age = undefined;`). Selalu gunakan `null` jika Anda sengaja ingin mengosongkan variabel.

### Konsep 7: Tipe Data Object dan Symbol

- **Apa (_What_):**
  - **`object`**: Tipe data non-primitif untuk menyimpan kumpulan data atau entitas kompleks dalam bentuk pasangan kunci-nilai (_key-value pairs_).
  - **`symbol`**: Tipe data primitif untuk membuat pengenal unik (_unique identifier_) pada objek.
- **Mengapa (_Why_):** Tipe primitif hanya bisa menyimpan satu nilai tunggal, sedangkan objek memungkinkan pengelompokan banyak data terkait dalam satu variabel.
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

- **Kapan (_When_):** _Object_ digunakan saat mengelola data kompleks (seperti data pengguna), sedangkan _Symbol_ digunakan saat memerlukan properti unik yang tidak bentrok pada objek.

### Konsep 8: Operator typeof

- **Apa (_What_):** Operator bawaan yang mengembalikan tipe data dari suatu nilai/operand dalam bentuk _string_.
- **Mengapa (_Why_):** Membantu mengecek tipe data variabel secara cepat sebelum melakukan pemrosesan data spesifik.
- **Bagaimana (_How_):** Sintaks dapat berupa `typeof x` atau `typeof(x)`:

```javascript
typeof undefined; // ✅ "undefined"
typeof 0; // ✅ "number"
typeof 10n; // ✅ "bigint"
typeof true; // ✅ "boolean"
typeof "foo"; // ✅ "string"
typeof Symbol(); // ✅ "symbol"
typeof Math; // ✅ "object" (Math adalah objek bawaan)

typeof null; // ❌ "object" (Ini adalah error/bug resmi bawaan sejak awal bahasa JS dibuat)
typeof alert; // ✅ "function" (Fungsi tergolong objek, tetapi typeof mengembalikan spesifik "function")
```

- **Kapan (_When_):** Digunakan saat proses _debugging_ atau pembuatan fungsi yang perlu memproses berbagai tipe data secara berbeda.

> [!IMPORTANT]
> Hasil eksekusi `typeof null` yang mengembalikan `"object"` adalah _bug_ lama di JavaScript yang sengaja tidak diperbaiki hingga hari ini untuk menjaga kompatibilitas dengan program-program versi lampau (_backward compatibility_). `null` sebenarnya bukanlah _object_.

**Poin Kunci:**

- JavaScript memiliki pengetikan dinamis; sebuah variabel bisa diubah isinya dengan berbagai tipe data berbeda seiring berjalannya kode.
- Terdapat 7 tipe data primitif: `number`, `bigint`, `string`, `boolean`, `null`, `undefined`, dan `symbol`.
- Terdapat 1 tipe data non-primitif, yakni `object`.
- Operasi matematika fatal dihindari oleh kemunculan `NaN` atau `Infinity`.
- Gunakan `typeof` untuk memeriksa apa tipe data yang terkandung di dalam nilai atau variabel Anda.

---

## 2. Kuis

Jawablah pertanyaan-pertanyaan singkat berikut untuk menguji pemahaman Anda:

1. Apa yang dimaksud dengan sifat _dynamically typed_ pada JavaScript?
2. Berapa batas nilai integer teratas yang aman disimpan dalam tipe data _number_ sebelum terjadi kesalahan presisi (_precision error_)?
3. Apa hasil dari operasi aritmatika pembagian angka positif dengan nol (`1 / 0`) dalam JavaScript?
4. Mengapa nilai `NaN` disebut memiliki sifat "lengket" (_sticky_)?
5. Bagaimanakah cara membuat nilai bertipe `BigInt` dalam kode JavaScript?
6. Jenis tanda petik manakah yang memungkinkan penyisipan variabel atau ekspresi menggunakan sintaks `${...}`?
7. Apakah perbedaan arti mendasar antara tipe data `null` dan `undefined`?
8. Mengapa perintah `typeof null` mengembalikan hasil `"object"` meskipun `null` bukan merupakan sebuah objek?
9. Tipe data apakah yang digunakan untuk membuat pengenal unik (_unique identifiers_) pada objek?
10. Apakah fungsi dari perintah `console.log()` dan simbol `//` dalam penulisan kode JavaScript?

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details><summary><strong>1. Sifat Dynamically Typed</strong></summary>

_Dynamically typed_ berarti variabel di JavaScript tidak terikat permanen pada tipe data tertentu. Sebuah variabel dapat menyimpan tipe data _string_ pada satu saat, kemudian diisi ulang dengan nilai bertipe _number_ tanpa menyebabkan _error_.

</details>

<details><summary><strong>2. Batas Safe Integer</strong></summary>

Batas maksimum _integer_ yang aman pada tipe _number_ adalah (2⁵³ - 1) atau 9007199254740991. Angka di atas batas tersebut tidak dapat disimpan secara tepat karena keterbatasan ruang penyimpanan 64-bit.

</details>

<details><summary><strong>3. Pembagian dengan Nol</strong></summary>

Pembagian angka positif dengan nol (`1 / 0`) dalam JavaScript mengembalikan nilai numerik khusus yaitu `Infinity`. JavaScript menganggap operasi ini aman dan tidak akan menghentikan eksekusi program dengan _fatal error_.

</details>

<details><summary><strong>4. Sifat Lengket NaN</strong></summary>

`NaN` bersifat lengket karena setiap operasi matematika lanjutan yang melibatkan `NaN` akan terus menghasilkan `NaN`. Satu-satunya pengecualian untuk aturan ini adalah operasi pemangkatan `NaN ** 0` yang bernilai 1.

</details>

<details><summary><strong>5. Pembuatan BigInt</strong></summary>

Nilai `BigInt` dibuat dengan menambahkan akhiran huruf `n` di akhir bilangan bulat, misalnya `12345678901234567890n`. Tipe data ini digunakan untuk merepresentasikan bilangan bulat dengan panjang sembarang.

</details>

<details><summary><strong>6. Penggunaan Backticks</strong></summary>

Fitur penyisipan variabel atau ekspresi dengan sintaks `${...}` hanya bekerja pada _string_ yang diapit tanda _backticks_ (`` `...` ``). Tanda petik tunggal maupun ganda tidak memiliki fungsionalitas ini dan akan mencetak teks secara harfiah.

</details>

<details><summary><strong>7. Perbedaan null dan undefined</strong></summary>

`undefined` berarti sebuah variabel telah dideklarasikan tetapi belum diberi atau ditetapkan nilainya secara otomatis. Sedangkan `null` adalah nilai khusus yang sengaja ditetapkan oleh pengembang untuk menandai bahwa variabel tersebut "kosong" atau "tidak diketahui".

</details>

<details><summary><strong>8. Kesalahan typeof null</strong></summary>

Hasil `typeof null` yang bernilai `"object"` merupakan _error_ (bug) resmi yang berasal dari masa-masa awal pembuatan JavaScript. Perilaku ini tetap dipertahankan hingga sekarang demi menjaga kompatibilitas dengan kode-kode lama.

</details>

<details><summary><strong>9. Fungsi Symbol</strong></summary>

Tipe data yang digunakan untuk membuat pengenal unik pada objek adalah `Symbol`. Nilai bernilai `Symbol` dijamin selalu unik dan tidak dapat diubah setelah dibuat.

</details>

<details><summary><strong>10. Console.log dan Komentar</strong></summary>

`console.log()` adalah fungsi yang digunakan untuk menampilkan informasi ke konsol web browser guna keperluan _debugging_. Sementara itu, simbol `//` digunakan untuk menulis komentar yang akan diabaikan oleh mesin saat kode dijalankan.

</details>

---

## 4. Soal Esai

Gunakan pemahaman Anda dari sumber materi untuk menganalisis dan menjawab pertanyaan kritis berikut:

1. Analisis mengapa JavaScript memilih untuk mengembalikan nilai khusus seperti `Infinity` dan `NaN` saat terjadi kesalahan matematika ketimbang menghentikan program dengan fatal error. Jelaskan keuntungan serta potensi bahaya dari pendekatan ini bagi pengembang!
2. Bandingkan penggunaan tanda petik ganda (`"..."`), petik tunggal (`'...'`), dan _backticks_ (`` `...` ``) dalam pembuatan _string_. Dalam kondisi seperti apa seorang pengembang diwajibkan menggunakan _backticks_?
3. Mengapa pembuat JavaScript membedakan tipe data `null` dan `undefined` untuk mewakili konsep "ketidakadaan nilai"? Evaluasi skenario penggunaan yang tepat untuk masing-masing tipe data tersebut!
4. Jelaskan perbedaan mendasar antara tipe data primitif dan tipe data non-primitif (_object_) dari sudut pandang jumlah nilai yang dapat disimpan serta cara pengelompokan datanya!
5. Mengapa tipe data `BigInt` perlu ditambahkan ke dalam JavaScript padahal tipe _number_ biasa sudah mampu menyimpan angka desimal yang sangat besar hingga 1.7976931348623157 × 10³⁰⁸?

---

## 5. Glosarium

| Istilah                  | Penjelasan                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Backticks**            | Tanda petik khusus (`` ` ``) yang digunakan untuk mengapit _string_ dengan fungsionalitas perluasan, seperti penyisipan variabel atau ekspresi melalui sintaks `${...}`. |
| **BigInt**               | Tipe data primitif JavaScript yang digunakan untuk merepresentasikan bilangan bulat dengan panjang sembarang melebihi batas aman tipe _Number_.                          |
| **Boolean**              | Tipe data primitif logika yang hanya memiliki dua nilai, yaitu `true` (benar) atau `false` (salah).                                                                      |
| **Console.log()**        | Fungsi bawaan JavaScript yang berfungsi menampilkan informasi atau data ke konsol browser untuk keperluan _debugging_.                                                   |
| **Dynamic Typing**       | Pengetikan Dinamis; sifat bahasa pemrograman di mana variabel tidak terikat pada satu tipe data tertentu dan nilainya dapat diubah ke tipe lain saat eksekusi program.   |
| **Infinity**             | Nilai numerik khusus pada tipe _number_ yang mewakili konsep matematis tak terhingga dan bernilai lebih besar dari angka mana pun.                                       |
| **Komentar (Comments)**  | Catatan dalam kode program yang diawali dengan tanda `//` untuk memberi penjelasan kepada _programmer_ dan diabaikan oleh mesin saat kode dijalankan.                    |
| **NaN (Not a Number)**   | Nilai numerik khusus pada tipe _number_ yang merepresentasikan hasil dari kesalahan komputasi matematika yang tidak valid atau tidak terdefinisi.                        |
| **Null**                 | Tipe data primitif khusus yang hanya berisi satu nilai `null`, mewakili konsep "kosong", "tidak ada", atau "nilai tidak diketahui".                                      |
| **Number**               | Tipe data primitif yang merepresentasikan angka bulat (_integer_) maupun desimal (_floating-point_), terbatas pada rentang aman ±(2⁵³ - 1).                              |
| **Object**               | Tipe data non-primitif yang digunakan untuk menyimpan kumpulan data atau entitas kompleks dalam bentuk pasangan kunci-nilai (_key-value pairs_).                         |
| **Primitive Data Types** | Tipe Data Primitif; kelompok tipe data dasar dalam JavaScript yang nilainya hanya dapat berisi satu hal tunggal.                                                         |
| **String**               | Tipe data primitif berupa urutan karakter atau teks yang diapit oleh tanda petik tunggal, ganda, atau _backticks_.                                                       |
| **Symbol**               | Tipe data primitif yang digunakan untuk membuat pengenal unik (_unique identifiers_) yang tidak dapat diubah pada objek.                                                 |
| **Typeof**               | Operator khusus yang digunakan untuk memeriksa dan mengembalikan _string_ nama tipe data dari suatu operand atau variabel.                                               |
| **Undefined**            | Tipe data primitif khusus yang hanya berisi satu nilai `undefined`, mewakili kondisi di mana suatu variabel telah dideklarasikan tetapi belum diberi nilai.              |
| **Variable**             | Wadah bernama yang digunakan untuk menyimpan nilai data sehingga dapat dirujuk dan dimanipulasi di dalam program.                                                        |
