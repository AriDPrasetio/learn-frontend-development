# 📝 Panduan Belajar JavaScript: `String Manipulation` dan Interaksi Pengguna

> Panduan ini membahas konsep-konsep dasar `string manipulation`, pencarian teks, penggunaan `template literals`, dan interaksi pengguna dasar dalam JavaScript.

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

### Konsep 1: `Method` `indexOf()`

- **What:** `indexOf()` adalah `built-in method` JavaScript yang digunakan untuk mencari posisi atau `index` dari kemunculan pertama suatu `substring` di dalam sebuah `string`. Jika `substring` ditemukan, `method` ini me-`return` angka `index`-nya; jika tidak ditemukan, `method` ini me-`return` `value` `-1`.
- **Why:** Konsep ini penting untuk memeriksa apakah suatu teks/karakter ada di dalam `string` sekaligus mengetahui lokasi persisnya agar dapat dilakukan operasi pemrosesan teks lebih lanjut.
- **How:** Dipanggil dengan `syntax` `string.indexOf(substring, startingPosition)`. `Argument` kedua bersifat opsional untuk menentukan dari `index` mana pencarian dimulai. `Method` ini bersifat `case sensitive`.
- **When:** Digunakan saat perlu mengecek keberadaan suatu kata/karakter di dalam teks atau mencari `index` awal dari `substring` tersebut.

``js
// ✅ Mencari posisi substring yang ada
let sentence = "JavaScript is awesome!";
let position = sentence.indexOf("awesome!");
console.log(position); // 14

// ❌ Mencari substring yang tidak ada
let notFound = sentence.indexOf("fantastic");
console.log(notFound); // -1

// ✅ Pencarian dengan posisi awal (argument kedua)
let longSentence = "JavaScript is awesome, and JavaScript is powerful!";
let secondOccurrence = longSentence.indexOf("JavaScript", 10);
console.log(secondOccurrence); // 27

// ❌ Contoh sifat case-sensitive
console.log("freeCodeCamp".indexOf("F")); // -1
``

### Konsep 2: `Escape Sequence` (`\n`) dan `Escaping Characters` (`\`)

- **What:** `Escape sequence` `\n` adalah karakter khusus untuk membuat baris baru (newline) di dalam `string`. `Escaping characters` adalah teknik menggunakan tanda garis miring terbalik (backslash `\`) untuk memberi tahu JavaScript agar memperlakukan karakter khusus (seperti tanda kutip) sebagai `literal character`.
- **Why:** Mencegah terjadinya `syntax error` akibat tanda kutip di dalam `string` yang dikira sebagai `string terminator` oleh `JavaScript engine`, serta memungkinkan pemformatan teks multi-baris.
- **How:** Gunakan `\n` di titik mana baris baru ingin dimulai, atau letakkan `\` tepat sebelum karakter khusus yang ingin di-escape (seperti `\"`, `\'`, atau `\\`).
- **When:** Digunakan ketika memformat keluaran teks multi-baris atau saat `string` mengandung karakter yang berbenturan dengan karakter pembungkus `string` tersebut.

``js
// ✅ Menggunakan \n untuk baris baru
let poem =
  "Roses are red,\nViolets are blue,\nJavaScript is fun,\nAnd so are you.";
console.log(poem);

// ✅ Mengisi tanda kutip ganda di dalam string yang dibungkus kutip ganda
let statement = 'She said, "Hello!"';
console.log(statement); // She said, "Hello!"

// ✅ Mengisi tanda kutip tunggal di dalam string yang dibungkus kutip tunggal
let quote = "It's a beautiful day!";
console.log(quote); // It's a beautiful day!
``

> [!NOTE]
> Penggunaan `escaping character` sangat penting untuk menghindari error ketika mengombinasikan berbagai jenis tanda kutip di dalam kode JavaScript.

### Konsep 3: `Template Literals` dan `String` Interpolation

- **What:** `Template literals` adalah cara membuat `string` menggunakan karakter backtick (`` ` ``). String interpolation adalah fitur di dalam template literals yang memungkinkan penyisipan variable atau expression JavaScript secara langsung ke dalam string menggunakan syntax `${`expression`}`.
- **Why:** Solusi ini mempermudah `string manipulation` secara signifikan, menghasilkan kode yang jauh lebih bersih dan mudah dibaca dibandingkan `concatenation` manual menggunakan `operator` tambah (`+`), serta mendukung `string` multi-baris secara alami.
- **How:** Gunakan backtick alih-alih tanda kutip tunggal/ganda, lalu masukkan `variable` atau `expression` matematika/kalkulasi di dalam tanda `${}`.
- **When:** Digunakan ketika membuat `string` yang menggabungkan banyak `variable`, membutuhkan pemformatan teks multi-baris, atau mengevaluasi `expression` di dalam teks.

```js
const name = "Alice";
const age = 25;

// ✅ Menggunakan template literals & string interpolation
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// ✅ Mendukung multi-baris secara langsung tanpa \n
let poem = `Roses are red,
Violets are blue,
JavaScript is fun,
And so are you.`;

// ✅ Menyisipkan expression JavaScript
const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${(score / highestScore) * 100}%.`;
console.log(output);
```

### Konsep 4: `Bracket Notation`

- **What:** `Bracket notation` adalah penggunaan tanda kurung siku `[]` yang berisi `index` `value` untuk mengakses karakter individual dari sebuah `string` berdasarkan posisinya.
- **Why:** Memungkinkan pengambilan karakter spesifik dari urutan karakter yang membentuk `string`.
- **How:** Dituliskan dengan nama `variable` `string` diikuti kurung siku dan zero-based `index`. Karakter pertama berada pada `index` 0, dan karakter terakhir dapat diakses dengan `index` `string.length - 1`.
- **When:** Digunakan saat perlu mengambil karakter tertentu dari `string`, seperti mengesktrak inisial nama atau memeriksa karakter pada posisi spesifik untuk validasi.

``js
let greeting = "hello";

// ✅ Mengakses karakter kedua (index 1)
console.log(greeting[1]); // "e"

// ✅ Mengakses karakter terakhir
console.log(greeting[greeting.length - 1]); // "o"

// ❌ Mengakses index di luar panjang string (undefined)
console.log(greeting[10]); // undefined

// ✅ Menggabungkan karakter hasil bracket notation
let firstTwo = greeting[0] + greeting[1]; // "he"
console.log(firstTwo);
``

### Konsep 5: `Method` `prompt()`

- **What:** `Built-in `method`` `browser environment` yang membuka kotak dialog pop-up untuk meminta input dari pengguna dan me-`return` teks input tersebut dalam bentuk `string`.
- **Why:** Menyediakan cara paling sederhana dan langsung untuk menerima input teks dari pengguna pada halaman web.
- **How:** Dipanggil dengan `syntax` `prompt(message, default)`. `Argument` pertama adalah pesan instruksi, dan `argument` kedua (opsional) adalah `default value` yang mengisi kolom input. Jika pengguna menekan tombol "OK", input di-`return` sebagai `string`. Jika pengguna menekan "Cancel", `method` me-`return` `value` `null`. `Script execution` akan terhenti (`halt`) sampai pengguna berinteraksi dengan dialog.
- **When:** Digunakan untuk pengujian cepat (quick testing) atau aplikasi web kecil.

> [!WARNING]
> Umumnya `prompt()` dihindari pada aplikasi web modern yang kompleks karena sifatnya yang mengganggu (`blocking`) `execution flow` dan inkonsisten antar-browser.

### Poin Kunci

- `Method` `indexOf()` dipakai untuk mencari `index` suatu `substring`, me-`return` `-1` jika tidak ada.
- `Escape sequence` `\n` dipakai untuk baris baru, dan backslash `\` dipakai untuk me-escape karakter khusus.
- `Template literals` menggunakan backtick (`` ` ``) untuk menyederhanakan string multi-baris dan mendukung string interpolation (`${}`).
- `Bracket notation` (`[index]`) mengambil karakter pada posisi tertentu dalam format zero-based `index`.
- `Method` `prompt()` menampilkan dialog input pada browser yang menghentikan `script execution` sementara, me-`return` `string` atau `null`.

---

## 2. Kuis

1. Apa yang akan di-`return` oleh `method` `indexOf()` jika `substring` yang dicari tidak ada di dalam `string`?
2. Bagaimana cara menggunakan `argument` kedua pada `method` `indexOf()`?
3. Mengapa execution `"freeCodeCamp".indexOf("F")` me-`return` `value` `-1`?
4. Karakter khusus apakah yang digunakan untuk membuat baris baru (newline) di dalam `string` biasa?
5. Mengapa teknik `escaping character` menggunakan garis miring terbalik (`\`) diperlukan saat membuat `string`?
6. Karakter pembungkus apakah yang digunakan untuk mendefinisikan template literal?
7. Apa fungsi utama dari `string` interpolation di dalam `template literals`?
8. Berapakah `index` `value` untuk karakter pertama dalam sebuah `string` ketika menggunakan `bracket notation`?
9. Bagaimana rumus/cara mengakses karakter paling terakhir dari sebuah `string` menggunakan `bracket notation`?
10. `Value` apa yang di-`return` oleh `method` `prompt()` jika pengguna menekan tombol "Cancel"?

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details><summary><strong>1. Hasil indexOf() jika `substring` tidak ditemukan</strong></summary>

`Method` `indexOf()` akan me-`return` `value` `-1` jika `substring` yang dicari tidak ditemukan di dalam `string`. `Value` ini menandakan bahwa proses pencarian teks tersebut tidak berhasil.

</details>

<details><summary><strong>2. Penggunaan `argument` kedua pada indexOf()</strong></summary>

`Argument` kedua pada `method` `indexOf()` digunakan untuk menentukan posisi/`index` awal dimulainya pencarian di dalam `string`. Pencarian `substring` akan mengabaikan karakter-karakter yang berada sebelum `index` tersebut.

</details>

<details><summary><strong>3. Mengapa "freeCodeCamp".indexOf("F") me-`return` -1</strong></summary>

`Method` `indexOf()` bersifat `case sensitive`. Karena huruf "F" kapital tidak terdapat pada `string` `"freeCodeCamp"` (yang ada adalah "C" kapital pada posisi tengah, namun huruf awal "f" adalah kecil), maka `method` me-`return` `-1`.

</details>

<details><summary><strong>4. Karakter khusus untuk newline</strong></summary>

Karakter khusus atau `escape sequence` yang digunakan untuk membuat baris baru adalah `\n`. Saat dimasukkan ke dalam `string`, perintah ini menginstruksikan JavaScript untuk memutus baris dan melanjutkan teks di baris berikutnya.

</details>

<details><summary><strong>5. Alasan perlunya `escaping character`</strong></summary>

`Escaping character` menggunakan backslash (`\`) diperlukan untuk mencegah terjadinya `syntax error` saat memasukkan karakter khusus seperti tanda kutip ke dalam `string`. Tanda backslash memberi tahu `JavaScript engine` untuk memperlakukan tanda kutip tersebut sebagai karakter teks biasa, bukan sebagai `string terminator`.

</details>

<details><summary><strong>6. Karakter pembungkus template literal</strong></summary>

Template literal didefinisikan dengan menggunakan karakter backtick (`` ` ``). Karakter ini berbeda dari string standar yang menggunakan tanda kutip tunggal (`'`) atau ganda (`"`).

</details>

<details><summary><strong>7. Fungsi utama `string` interpolation</strong></summary>

`String` interpolation berfungsi untuk menyisipkan `variable` atau `expression` JavaScript secara langsung ke dalam `string` menggunakan `syntax` `${expression}`. Fitur ini membuat penulisan kode menjadi lebih ringkas dan mudah dibaca dibandingkan `concatenation` dengan `operator` `+`.

</details>

<details><summary><strong>8. `Index` karakter pertama</strong></summary>

`Index` `value` untuk karakter pertama adalah `0`. Hal ini dikarenakan sistem `index` numbering dalam JavaScript bersifat zero-based.

</details>

<details><summary><strong>9. Cara mengakses karakter terakhir</strong></summary>

Karakter terakhir diakses dengan cara mengurangi panjang total `string` dengan angka satu, yaitu dituliskan `string[string.length - 1]`. Hal ini dilakukan karena `index` dimulai dari angka `0`, sehingga `index` karakter terakhir selalu memiliki `value` `length - 1`.

</details>

<details><summary><strong>10. `Return` `value` dari Cancel pada prompt()</strong></summary>

`Method` `prompt()` akan me-`return` `value` `null` jika pengguna membatalkan atau menekan tombol "Cancel" pada dialog. `Value` `null` ini menandakan bahwa tidak ada input teks yang diberikan oleh pengguna.

</details>

---

## 4. Soal Esai

1. **Analisis Pemformatan Teks:** Bandingkan penggunaan `escape sequence` `\n` pada `string` biasa dengan penggunaan `template literals` dalam hal pembuatan teks multi-baris. Apa kelebihan dan kekurangan dari masing-masing pendekatan tersebut berdasarkan keterbacaan kode?
2. **Studi Kasus Pencarian Teks:** Diberikan sebuah `string` `"JavaScript is awesome, and JavaScript is powerful!"`. Jelaskan langkah kerja `method` `indexOf()` ketika dipanggil dengan `argument` `indexOf("JavaScript", 10)` dan mengapa hasilnya berbeda jika `argument` kedua tidak dicantumkan.
3. **Analisis Dampak Perilaku Program:** `Method` `prompt()` diketahui menghentikan (`halt`) `script execution` sampai pengguna memberikan tindakan. Jelaskan dampak dari sifat `blocking`/`synchronous` ini terhadap user interface dan alur kerja aplikasi web modern.
4. **Evaluasi Batas Akses `String`:** Mengapa code execution `string[string.length]` tidak akan me-`return` karakter terakhir dari sebuah `string`? Jelaskan keterkaitannya dengan konsep `zero-based indexing`.
5. **Perbandingan `Concatenation` vs Interpolation:** Jelaskan mengapa penggunaan `string` interpolation `${}` lebih disarankan daripada `operator` `concatenation` `+` ketika menyusun `string` yang memuat hasil `expression` calculation matematika kompleks.

---

## 5. Glosarium

| Istilah                  | Definisi                                                                                                                                                                   |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`Argument`**   | `Value` yang diberikan kepada `function` atau `method` saat dipanggil, yang memungkinkan `function` atau `method` tersebut menjalankan tugasnya menggunakan informasi spesifik tersebut. |
| **Backslash (`\`)**      | Karakter garis miring terbalik yang digunakan untuk me-escape karakter khusus di dalam `string` agar dianggap sebagai `literal character`.                                  |
| **Backticks (`` ` ``)**  | Simbol khusus yang digunakan untuk membungkus dan mendefinisikan template literals.                                                                                      |
| **`Bracket Notation`**     | `Syntax` berupa tanda kurung siku `[]` yang digunakan untuk mengakses karakter tunggal dalam `string` berdasarkan posisi `index`-nya.                    |
| **`Escape Sequence`**      | Kombinasi karakter khusus (seperti `\n`) yang digunakan di dalam `string` untuk mewakili tindakan tertentu seperti membuat baris baru.                                     |
| **Escaping**             | Teknik menempatkan karakter backslash sebelum karakter khusus agar karakter tersebut diperlakukan sebagai teks biasa oleh JavaScript.                                    |
| **`Index`**       | Angka posisi zero-based yang menunjukkan letak suatu karakter di dalam `string`.                                                                          |
| **indexOf()**            | `Method` `string` yang me-`return` posisi `index` kemunculan pertama suatu `substring`, atau `-1` jika tidak ditemukan.                                                     |
| **Length**               | `Property` pada `string` yang menyimpan `value` total jumlah karakter di dalam `string` tersebut.                                                                              |
| **Null**                 | `Value` khusus yang di-`return` oleh `method` `prompt()` saat pengguna membatalkan atau menutup kotak dialog tanpa memberikan input.                                          |
| **Prompt()**             | `Method` browser yang menampilkan kotak dialog pop-up untuk meminta input teks dari pengguna dan me-`return`-nya dalam bentuk `string`.                                   |
| **`String`**               | `Data type` dalam JavaScript yang merepresentasikan urutan karakter teks.                                                                                                    |
| **`String` Interpolation** | Fitur dalam `template literals` yang memungkinkan penyisipan `variable` atau `expression` secara langsung di dalam `string` menggunakan `syntax` `${}`.                           |
| **`Substring`**            | Urutan karakter yang merupakan bagian dari `string` yang lebih besar.                                                                                                      |
| **`Template Literals`**    | Bentuk penulisan `string` yang lebih fleksibel menggunakan backtick, yang mendukung penyisipan `variable` dan pemformatan multi-baris secara langsung.                     |

CATATAN:
"mengembalikan" -> "me-`return`" (atau `return` `value` jika bertindak sebagai kata benda)
"metode" -> "`method`"
"argumen" -> "`argument`"
"nilai" -> "`value`"
"indeks" -> "`index`"
"fungsi" -> "`function`"
"eksekusi skrip" -> "`script execution`"
"kesalahan sintaks" -> "`syntax error`"
"penutup `string`" -> "`string terminator`"


CATATAN:
Istilah teknis bahasa Indonesia telah dihapus dan diganti dengan versi bahasa Inggrisnya dalam backtick.