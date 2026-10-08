# 📖 Panduan Belajar JavaScript: Understanding Comparisons and Conditionals

> Ringkasan: Pelajari keunikan evaluasi perbandingan nilai `null` dan `undefined`, serta kapan waktu yang tepat memilih `switch` statement dibanding rantai `if/else`.

## Daftar Isi

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

### Konsep 1: Karakteristik `null` dan `undefined` dalam Perbandingan

- **Apa**: Nilai `undefined` berarti variable telah dideklarasikan tetapi belum diberi isi, sedangkan `null` adalah nilai yang secara sengaja ditugaskan untuk bermakna "kosong" atau "tanpa isi".
- **Mengapa**: Penting untuk memahami bedanya agar Anda dapat menulis logika conditional yang mendeteksi ada atau tidaknya suatu data secara teliti dan bebas bug (_bug_).
- **Bagaimana**: Saat membandingkan menggunakan _loose equality_ (`==`), JavaScript menganggap `null` dan `undefined` sepadan. Namun dengan _strict equality_ (`===`), keduanya tidak setara karena data type-nya berbeda. Terhadap nilai _falsy_ lainnya (seperti `0` atau empty string `""`), mereka berdua tidak dianggap sama.
- **Kapan**: Saat memeriksa apakah optional parameter telah disediakan pengguna atau belum, gunakan `=== undefined`. Gunakan `=== null` untuk mendeteksi data yang memang sengaja dikosongkan.

```js
// ✅ Dengan == mereka setara karena sama-sama menandakan kekosongan
console.log(null == undefined); // hasil: true

// ✅ Dengan === mereka tidak setara (data type berbeda)
console.log(null === undefined); // hasil: false

// ❌ Tidak ada satu pun dari mereka yang sama dengan angka nol atau empty string
console.log(null == 0); // hasil: false
console.log(undefined == ""); // hasil: false
```

### Konsep 2: Konversi Angka dalam Relasi `null` dan `undefined`

- **Apa**: Perilaku saat nilai `null` dan `undefined` dipertemukan dengan relational operators atau arithmetic operators (seperti `>`, `<`, `>=`).
- **Mengapa**: Banyak developer pemula tersandung oleh perubahan data type secara implisit di bahasa JavaScript yang mengubah cara `null` dan `undefined` dioperasikan dengan angka.
- **Bagaimana**: Saat masuk ke konteks matematis relasional, `null` akan dikonversi menjadi angka `0`, sehingga `null >= 0` secara unik menghasilkan nilai `true`. Sebaliknya, `undefined` akan dikonversi menjadi tipe nilai `NaN` (Not a Number), yang berakibat semua relational comparison-nya dengan angka apa pun selalu gagal (`false`).
- **Kapan**: Harap hindari membandingkan nilai `null` atau `undefined` secara langsung memakai operator `>`, `<`, atau `>=` dengan angka. Selalu biasakan memakai strict equality check (`===`) dahulu di logika `if` Anda.

```js
// ❌ Hati-hati dengan perilaku null jika disandingkan dengan relational operators
console.log(null > 0); // hasil: false (0 > 0)
console.log(null == 0); // hasil: false (tidak dikonversi karena ==)
console.log(null >= 0); // hasil: true (secara spesifik dikonversi menjadi 0 >= 0)

// ✅ undefined lebih konsisten karena akan berubah jadi NaN
console.log(undefined > 0); // hasil: false
console.log(undefined < 0); // hasil: false
console.log(undefined == 0); // hasil: false
```

> [!TIP]
> Biasakan memakai _strict equality_ (`===`) ketimbang (`==`) kapan pun memungkinkan, agar tebakan logika Anda tidak meleset akibat sistem JavaScript yang mengubah tipe nilai secara otomatis.

### Konsep 3: Menggunakan `switch` Statement vs `if/else`

- **Apa**: Statement `switch` mencocokkan satu nilai variable terhadap bermacam kasus (`case`), sedangkan `if/else if/else` melakukan tes _boolean_ (benar/salah) berantai yang bisa lebih kompleks.
- **Mengapa**: Menulis rangkaian `if/else` yang sangat panjang untuk mengecek variable yang sama dapat menjadi berantakan, dan penggunaan `switch` memecahkan kendala keterbacaan tersebut dengan gaya _syntax_ yang ringkas.
- **Bagaimana**: Masukkan variable (expression) ke dalam kurung `switch (variabel)`. JavaScript lalu melakukan komparasi _strict_ (`===`) terhadap tiap-tiap `case`. Gunakan perintah `break` setelah statement dalam block agar mesin berhenti mengeksekusi sisa block di bawahnya (_fall-through_). Jika ada compound conditions dengan operator `&&` atau `||`, gunakan block `if/else if` yang lebih fleksibel.
- **Kapan**: Pakai `switch` jika mengecek satu variable status tunggal yang kemungkinannya sudah tetap, misalnya variable `hari`, `bulan`, atau status barang. Pakai `if/else` bila ada tes lebih dari satu variable atau butuh cek lebih besar/kecil (`>`).

```js
let hariIni = 3;

// ✅ Switch sangat rapi untuk memeriksa satu variable
switch (hariIni) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break; // Ini sangat penting agar eksekusi berhenti!
  default:
    console.log("Hari tidak valid");
}

let gaji = 60000;
let batasUmur = 25;

// ✅ If / Else ideal untuk kondisi multi-variable dan relasional
if (gaji >= 50000 && batasUmur >= 21) {
  console.log("Pinjaman disetujui.");
} else if (gaji < 50000) {
  console.log("Penolakan otomatis.");
} else {
  console.log("Butuh peninjauan manual.");
}
```

> [!WARNING]
> Jika Anda melupakan perintah `break` dalam block `switch`, maka JavaScript tidak peduli apakah `case` selanjutnya cocok atau tidak, ia akan terus menjalankan semua sisa instruksi hingga mencapai titik henti `break` atau akhir block, sebuah perilaku buruk bernama _fall-through_.

### Poin Kunci

- `null == undefined` adalah `true`, tapi bukan sebaliknya jika ditambahkan tanda sama dengan ketiga.
- `null` bertindak menyerupai bilangan `0` pada perbandingan matematis tertentu (`>=`), sedang `undefined` merosot menjadi `NaN`.
- `switch` menguji kecocokan (_strict_ `===`) suatu expression terhadap aneka _case_, dan akan terus dieksekusi ke bawah (_fall-through_) jika lupa disetop oleh kata kunci `break`.
- `if/else if` paling tepat untuk tes relasional yang luwes, melibatkan lebih dari satu patokan, atau rentang hitung.

---

## 2. Kuis

1. Apa hasil eksekusi dari perbandingan `null === undefined`?
2. Berdasarkan prinsip pengonversian bilangan, apa hasil evaluasi dari expression `null >= 0` di layar terminal Anda?
3. Mana yang mengeluarkan nilai `false`: `undefined == null` atau `undefined == 0`?
4. Apa yang akan terjadi jika developer lupa (atau lalai) menyematkan statement `break` di struktur internal `switch` miliknya?
5. Equality operator apakah yang digunakan secara otomatis oleh struktur conditional `switch` saat menakar kecocokan expression variable dengan barisan `case`?

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details>
<summary><strong>1. Strict equality null dan undefined</strong></summary>

Jawabannya adalah `false`. Sebab biarpun menyimbolkan hal hampa yang serupa, `null` ber-tipe _object_, sementara `undefined` tipenya adalah _undefined_.

</details>

<details>
<summary><strong>2. Operasi Relasional >= dengan null</strong></summary>

Tercetak luaran bernilai `true`. Pada relational operators, mesin mengonversi bentuk `null` ke angka `0`, dan relasi matematis dari 0 lebih besar atau sama dengan 0 bernilai wajar (_true_).

</details>

<details>
<summary><strong>3. undefined dan angka 0</strong></summary>

Pernyataan `undefined == 0` adalah `false`. Hanya nilai ketiadaan `null` saja yang memiliki kesetaraan _loose_ dengan nilai `undefined`.

</details>

<details>
<summary><strong>4. Efek lupa break di switch</strong></summary>

Program akan jatuh melompati _case-case_ di baris bawahnya (_fall-through_), mengeksekusi instruksi dari kasus lain tanpa mempedulikan kecocokan _case_-nya lagi.

</details>

<details>
<summary><strong>5. Kesetaraan Switch case</strong></summary>

Menggunakan _strict equality_ atau tanda `===`. Artinya tidak terjadi type coercion di sini (angka 1 tidak akan cocok dengan _string_ "1").

</details>

---

## 4. Soal Esai

1. Mengapa `null == 0` dapat mengembalikan `false` sedangkan eksekusi relasional `null >= 0` malah mengembalikan nilai `true`? Terangkan apa yang sesungguhnya terjadi di balik algoritma eksekutor mesin JavaScript tersebut.
2. Bisakah kita sepenuhnya menggantikan fungsi `if/else` menggunakan `switch`? Terangkan dan berikan contoh _logic_ skenario di mana `switch` murni tak bisa menjawab kebutuhan spesifik Anda.
3. Ceritakan sebuah skenario _coding_ yang membuktikan mengapa _strict equality_ (`===`) lebih sering dijunjung sebagai _best practice_ dibanding _loose equality_ (`==`) terkhusus pada situasi mendeteksi _input_ variable kosong.

---

## 5. Glosarium

| Istilah         | Definisi                                                                                                                                              |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| _Break_         | Sebuah kata kunci penyetop program yang dipakai di dalam _case_ `switch` (dan juga _looping_) untuk menyuruh mesin melompat keluar dari block kendali. |
| _Fall-through_  | Sebuah perilaku kebocoran eksekusi ke bawah pada sebuah rantai perintah `switch` ketika mesin tidak menemukan titik henti (`break`).                  |
| _Falsy_         | Nilai-nilai di JavaScript yang bila dikonversi menjadi operasi boolean (benar/salah) akan bermuara menjadi `false` (misal: 0, "", null, undefined).   |
| `null`          | Representasi data yang dengan sengaja ditugaskan oleh manusia untuk menjadi "tidak ada nilai".                                                        |
| _Type Coercion_ | Usaha otomatis dan implisit oleh _runtime_ JavaScript untuk mengubah paksa satu tipe ke tipe lainnya demi sukses beroperasi.                          |
| `undefined`     | Kondisi _default_ yang melekat bila suatu ruang memori atau variable telah disiapkan tempatnya namun mesin belum merekam apa isinya sama sekali.      |

CATATAN: 
- "variabel" -> "variable"
- "pengkondisian" -> "conditional"
- "tipe data" -> "data type"
- "parameter opsional" -> "optional parameter"
- "operator relasional" -> "relational operators"
- "operator matematika" -> "arithmetic operators"
- "pengembang" -> "developer"
- "pernyataan" -> "statement"
- "ekspresi" -> "expression"
- "blok" -> "block"
- "persyaratan majemuk" -> "compound conditions"
- "operator kesamaan" -> "equality operator"
- "koersi tipe" -> "type coercion"
