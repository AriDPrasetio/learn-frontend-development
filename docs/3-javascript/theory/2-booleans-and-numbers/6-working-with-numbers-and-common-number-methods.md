# 📖 Panduan Belajar JavaScript: Working with Numbers and Common Number Methods

> Ringkasan: Pahami cara mengidentifikasi nilai bukan angka (`NaN`), mengubah data type _string_ menjadi angka, dan mengatur format desimal pada JavaScript untuk manipulasi data yang akurat.

## Daftar Isi

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

### Konsep 1: Mengidentifikasi Not a Number (`NaN`)

- **Apa**: `NaN` singkatan dari "Not a Number", mewakili hasil perhitungan angka yang tidak dapat direpresentasikan atau tidak terdefinisi. Meskipun bernama bukan angka, data type dari `NaN` secara mengejutkan adalah _number_.
- **Mengapa**: Saat melakukan perhitungan matematis yang tidak terdefinisi bentuknya (seperti pembagian nol dengan nol, `0 / 0`), JavaScript akan mengembalikan nilai `NaN` daripada menyebabkan program rusak (berhenti secara tiba-tiba).
- **Bagaimana**: JavaScript menyediakan global function `isNaN()` untuk mengecek `NaN`. Namun `isNaN()` memiliki kelemahan di mana ia selalu berupaya mengonversi nilai menjadi _number_ terlebih dulu. Untuk method yang lebih aman, ES6 memperkenalkan `Number.isNaN()` yang memeriksa `NaN` secara presisi tanpa konversi.
- **Kapan**: Gunakan `Number.isNaN()` untuk memvalidasi angka atau merespons kesalahan ketika menangani hitungan matematika dari input pengguna agar program berjalan lebih aman.

```js
// ✅ Number.isNaN() tidak melakukan konversi dan sangat presisi
console.log(Number.isNaN(NaN)); // hasil: true
console.log(Number.isNaN(0 / 0)); // hasil: true
console.log(Number.isNaN("blabla")); // hasil: false

// ❌ isNaN() melakukan konversi ke number terlebih dulu yang seringkali keliru
console.log(isNaN("blabla")); // hasil: true (string gagal dikonversi menjadi angka sehingga menghasilkan nilai NaN)
console.log(isNaN(undefined)); // hasil: true (karena Number(undefined) adalah NaN)
console.log(isNaN("37")); // hasil: false (berhasil menjadi angka 37)
```

> [!WARNING]
> Nilai `NaN` adalah satu-satunya nilai di JavaScript yang tidak sama dengan dirinya sendiri. Jadi, eksekusi kode `console.log(NaN === NaN)` akan selalu bernilai `false`.

### Konsep 2: Mengonversi String ke Angka (`parseInt` dan `parseFloat`)

- **Apa**: `parseInt()` dan `parseFloat()` adalah method yang membantu memisahkan dan mengonversi karakter angka yang ada di dalam sebuah _string_ menjadi data type angka bulat (_integer_) atau angka pecahan desimal (_float_).
- **Mengapa**: Data yang didapat dari isian antarmuka, input form HTML, atau _file_ eksternal umumnya selalu terbaca sebagai _string_. Function ini menyelamatkan developer karena sanggup mengekstrak angkanya meski ada huruf di belakangnya.
- **Bagaimana**: Mulai membaca karakter _string_ satu persatu dari sebelah kiri ke kanan, mengabaikan karakter spasi kosong di awal, dan baru akan berhenti mengekstrak secara tiba-tiba pada huruf/karakter yang bukan angka pertama yang ditemukannya. Khusus untuk `parseFloat()`, method ini akan berhenti mengekstrak setelah titik desimal pertama.
- **Kapan**: Gunakan ketika hendak mengambil data metrik seperti `"42px"` (bawaan CSS) atau ketika mengekstraksi format teks dari API pihak ketiga dengan `parseFloat()` bila data perlu mengandung titik desimal atau `parseInt()` untuk mencampakkan desimal sepenuhnya.

```js
// ✅ parseInt mengabaikan semua karakter non-angka dan bagian pecahan
console.log(parseInt("42")); // hasil: 42
console.log(parseInt("  42px")); // hasil: 42
console.log(parseInt("3.14")); // hasil: 3

// ✅ parseFloat mampu membaca titik desimal
console.log(parseFloat("3.14 abc")); // hasil: 3.14
console.log(parseFloat("3.14.5")); // hasil: 3.14

// ❌ Jika huruf bukan angka muncul di paling awal, proses gagal
console.log(parseInt("abc123")); // hasil: NaN
console.log(parseFloat("abc 3.14")); // hasil: NaN
```

### Konsep 3: Memformat Angka Desimal (`toFixed`)

- **Apa**: Built-in function `.toFixed()` untuk memformat angka dengan menahan jumlah presisi desimalnya atau jumlah digit setelah titik desimal yang diinginkan.
- **Mengapa**: Penting digunakan untuk menampilkan uang atau hasil perhitungan yang panjang dan tidak rapi kepada pengguna, sembari menerapkan prinsip pembulatan.
- **Bagaimana**: Dipanggil langsung dari tipe _number_ dengan parameter digit presisinya (secara _default_ jika kosong akan bernilai 0). Ia mengembalikan data type baru, yaitu _string_.
- **Kapan**: Saat menampilkan rincian keranjang belanja dalam format mata uang (seperti dua angka di belakang koma) atau saat mencetak ukuran pada faktur. Bukan untuk melakukan perhitungan tingkat lanjut.

```js
let price = 19.99;
let taxRate = 0.08;
let total = price + price * taxRate; // 21.5892

// ✅ Menggunakan toFixed() untuk menata pembulatan
console.log(total.toFixed(2)); // hasil: "21.59" (data type adalah string)

let num = 3.14159;
// ✅ Pembulatan standar akan menaikkan ke atas bila >= 5
console.log((3.1455).toFixed(3)); // hasil: "3.146"

// ✅ Tanpa parameter argumen dianggap sebagai 0 desimal
console.log(num.toFixed()); // hasil: "3"
```

> [!NOTE]
> Karena luaran `.toFixed()` adalah _string_, bila Anda ingin menggunakan hasilnya untuk operasi matematika yang lain, Anda perlu mengonversinya kembali menjadi tipe angka (menggunakan `Number()`, `parseFloat()`, dsb.).

### Poin Kunci

- `NaN` menunjukkan sebuah operasi tak wajar dan `Number.isNaN()` lebih teliti dari `isNaN()` dalam identifikasinya karena ia tidak mencoba mengubahnya.
- `parseInt()` dan `parseFloat()` mampu menguraikan _string_ yang diawali angka dari kiri ke kanan.
- Function `.toFixed()` membundarkan desimal sekaligus mengubah hasil angkanya menjadi sebuah tipe format teks _string_.

---

## 2. Kuis

1. Apa data type yang dihasilkan dari pengecekan tipe `typeof NaN` di dalam JavaScript?
2. Apa return value dari eksekusi program `Number.isNaN("NaN")`?
3. Pada perbandingan ketat (`===`), apakah `NaN === NaN` bernilai `true` atau `false`?
4. Apa return value dari kode `parseInt("  10.99  ")`?
5. Apabila dipanggil pada angka `5.678` tanpa argument `(5.678).toFixed()`, apa luaran kodenya dan apa data type akhirnya?

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details>
<summary><strong>1. Data type dari NaN</strong></summary>

Secara teknis data type-nya adalah _number_ di dalam bahasa JavaScript, walau namanya adalah "Not a Number".

</details>

<details>
<summary><strong>2. Number.isNaN dari string</strong></summary>

Hasilnya adalah `false`. Mengapa? Sebab `Number.isNaN()` bekerja ketat, _string_ `"NaN"` tidak diubah oleh program dan string secara jelas bukanlah nilai mutlak `NaN`.

</details>

<details>
<summary><strong>3. Perbandingan nilai NaN</strong></summary>

Nilainya adalah `false`. Nilai `NaN` tidak pernah identik atau sepadan meskipun dengan dirinya yang sendiri.

</details>

<details>
<summary><strong>4. Hasil parseInt dan whitespace</strong></summary>

Return value-nya adalah angka `10`. `parseInt()` membuang titik putih spasi kosong dari awal kata, lalu langsung mencabut bagian angka hingga bertemu titik (bukan angka bilangan bulat).

</details>

<details>
<summary><strong>5. Pemakaian toFixed kosong</strong></summary>

Luarannya adalah `"6"`. Karena sifat standarnya tanpa argument adalah 0 presisi digit desimal, 5.678 dibulatkan terdekat ke atas, namun data type-nya kini menjadi tipe _string_.

</details>

---

## 4. Soal Esai

1. Terangkan masalah yang kerap muncul jika kita bergantung pada `isNaN()` dan bukan `Number.isNaN()` dalam memilah data yang dimasukkan oleh sembarang pengguna lewat form input HTML di aplikasi yang nyata.
2. Deskripsikan sebuah studi kasus e-commerce di mana pemrogram membutuhkan peran `parseFloat()` bersamaan dengan kombinasi function `.toFixed()` secara kolaboratif.
3. Jabarkan alasan teknis mengapa method untuk memformat bilangan yakni `.toFixed()` harus mengembalikan data type _string_, bukanlah mempertahankan esensinya sebagai _number_.

---

## 5. Glosarium

| Istilah                    | Definisi                                                                                                                                                         |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Float_                    | Bilangan pecahan atau desimal yang memiliki nilai di belakang tanda titik.                                                                                       |
| _Integer_                  | Bilangan utuh (bilangan bulat) tanpa adanya pecahan atau titik desimal.                                                                                          |
| ES6 (ECMAScript 6)         | Sebuah edisi pembaruan besar untuk sintaks JavaScript yang rilis pada tahun 2015, dan menyajikan bermacam tambahan fitur modern seperti global function tipe data. |
| Konversi (_Type Coercion_) | Perubahan otomatis data type yang dilakukan JavaScript di balik layar karena nilai tersebut dibutuhkan oleh operator.                                            |
| `NaN`                      | Singkatan Not a Number. Representasi yang membuktikan bahwa ekspresi matematika bernilai hampa, tidak valid, atau keliru.                                        |

CATATAN:
- "tipe data" -> "data type" (Sesuai daftar acuan)
- "fungsi" -> "function" (Sesuai daftar acuan)
- "fungsi bawaan" -> "built-in function" (Untuk menyebut fungsi bawaan native JS)
- "metode" -> "method" (Sesuai daftar acuan)
- "kembalian" -> "return value" (Sesuai daftar acuan)
- "argumen" -> "argument" (Sesuai daftar acuan)
