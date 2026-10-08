# ⚙️ Panduan Belajar JavaScript: Perilaku Operator

> Saat sebuah expression JavaScript memuat banyak operator, JavaScript engine harus menentukan operator mana yang dievaluasi lebih dulu. Panduan ini membahas aturan urutan evaluasi (_operator precedence_ dan associativity), operator increment dan decrement (`++` dan `--`) beserta bentuk prefix dan postfix-nya, serta operator compound assignment (seperti `+=`) yang meringkas operasi sekaligus penyimpanan hasilnya.

## Daftar Isi

1. [Panduan Belajar](#1-panduan-belajar)
2. [Kuis](#2-kuis)
3. [Kunci Jawaban](#3-kunci-jawaban)
4. [Soal Esai](#4-soal-esai)
5. [Glosarium](#5-glosarium)

---

## 1. Panduan Belajar

### Konsep 1: Operator Precedence dan Associativity

- **What (Apa):** _Operator precedence_ (operator precedence) menentukan urutan operasi dievaluasi dalam sebuah expression. Operator dengan prioritas lebih tinggi dievaluasi lebih dulu daripada operator berprioritas lebih rendah. Jika beberapa operator memiliki prioritas yang sama, JavaScript memakai associativity (associativity) untuk menentukan apakah evaluasi berjalan dari kiri ke kanan atau dari kanan ke kiri.
- **Why (Mengapa):** Tanpa aturan ini, hasil perhitungan bisa salah, sama seperti persamaan matematika yang dihitung tanpa mengikuti urutan operasi. Aturan prioritas membuat hasil expression dapat diprediksi, sedangkan tanda kurung `()` memberi kita cara untuk mengubah urutan itu sesuai kebutuhan.
- **How (Bagaimana):**

<!-- prettier-ignore -->
```js
// Perkalian dan pembagian lebih tinggi daripada penjumlahan dan pengurangan
const result1 = 2 + 3 * 4;
console.log(result1); // 14 (bukan 20)

const result2 = 2 + 6 / 3;
console.log(result2); // 4 (bukan 2.67)

// Tanda kurung mengubah urutan evaluasi
const result3 = (2 + 3) * 4;
console.log(result3); // 20

// Associativity kiri ke kanan (prioritas sama)
const result4 = 10 - 2 + 3;
console.log(result4); // 11 -> (10 - 2) + 3

// Associativity kanan ke kiri pada assignment operator (=)
let a, b;
a = b = 5;
console.log(a); // 5
console.log(b); // 5
console.log(a + b); // 10

// Associativity kanan ke kiri pada operator eksponen
const result5 = 2 ** 3 ** 2;
console.log(result5); // 512 -> 2 ** (3 ** 2) = 2 ** 9
```

- **Who (Siapa):** JavaScript engine menerapkan aturan prioritas dan associativity secara otomatis, sedangkan pengembang dapat menyisipkan tanda kurung untuk mengambil alih urutan evaluasi.
- **When (Kapan):** Aturan ini berlaku setiap kali satu expression memuat lebih dari satu operator. Tanda kurung dipakai saat urutan bawaan tidak sesuai dengan maksud perhitungan.
- **Where (Di mana):** Berlaku pada setiap expression JavaScript yang dievaluasi, misalnya perhitungan harga, penugasan nilai berantai, dan perpangkatan.

### Konsep 2: Operator Increment dan Decrement

- **What (Apa):** Operator increment (`++`) menambah nilai variable sebanyak 1, sedangkan operator decrement (`--`) menguranginya sebanyak 1. Keduanya memiliki dua bentuk: prefix (operator di depan variable, mis. `++x`) dan postfix (operator di belakang variable, mis. `x++`). Perbedaannya terletak pada kapan nilai variable diperbarui relatif terhadap nilai yang dikembalikan.
- **Why (Mengapa):** Menulis `x++` lebih singkat dan lebih mudah dibaca daripada `x = x + 1`. Selain itu, memahami perbedaan prefix dan postfix penting ketika nilai expression langsung dipakai, misalnya saat disimpan ke variable lain.
- **How (Bagaimana):**

```js
// Prefix: ubah dulu, baru kembalikan nilai baru
let x = 5;
console.log(++x); // 6
console.log(x); // 6

// Postfix: kembalikan nilai saat ini, baru ubah
let y = 5;
console.log(y++); // 5
console.log(y); // 6

// Decrement bekerja dengan cara yang sama, tetapi mengurangi 1
let p = 5;
console.log(--p); // 4
console.log(p); // 4

let q = 5;
console.log(q--); // 5
console.log(q); // 4

// Perbedaan terlihat saat hasilnya disimpan ke variable lain
let a = 5;
let b = ++a;
console.log(b); // 6 (a ditambah dulu, baru disimpan ke b)

let c = 5;
let d = c++;
console.log(d); // 5 (nilai c disimpan ke d dulu, baru c ditambah)
```

- **Who (Siapa):** Pengembang memilih bentuk prefix atau postfix, lalu JavaScript engine mengatur kapan nilai variable diperbarui.
- **When (Kapan):** Gunakan prefix jika membutuhkan nilai yang sudah diperbarui secara langsung. Gunakan postfix jika membutuhkan nilai saat ini lebih dulu dan pembaruan boleh terjadi setelahnya. Jika nilai expression tidak dipakai, kedua bentuk memberi hasil akhir yang sama pada variabelnya.
- **Where (Di mana):** Dipakai pada variable yang berisi angka, misalnya penghitung (counter) atau nilai yang naik dan turun satu per satu.

### Konsep 3: Compound Assignment Operators

- **What (Apa):** _Compound assignment operators_ (assignment operator gabungan) adalah bentuk singkat untuk melakukan operasi pada sebuah variable lalu menyimpan hasilnya kembali ke variable yang sama. Misalnya, `x += y` setara dengan `x = x + y`. Setiap arithmetic operators memiliki bentuk compound assignment-nya.
- **Why (Mengapa):** Bentuk ini menghemat penulisan karena nama variable tidak perlu diulang, sehingga kode lebih ringkas dan tidak berantakan.
- **How (Bagaimana):**

```js
// Tanpa compound assignment
let num = 5;
num = num + 2;
console.log(num); // 7

// Dengan compound assignment
let num2 = 5;
num2 += 2;
console.log(num2); // 7

// Penjumlahan
let total = 10;
total += 5;
console.log(total); // 15

// Pengurangan
let score = 20;
score -= 7;
console.log(score); // 13

// Perkalian
let points = 5;
points *= 3;
console.log(points); // 15

// Pembagian
let balance = 100;
balance /= 4;
console.log(balance); // 25
```

- **Who (Siapa):** Pengembang menuliskan bentuk singkat ini, dan JavaScript engine mengevaluasinya sebagai operasi diikuti penugasan.
- **When (Kapan):** Dipakai saat nilai sebuah variable diperbarui berdasarkan nilainya sendiri, misalnya menambah total, mengurangi skor, atau membagi saldo.
- **Where (Di mana):** Dipakai pada variable yang nilainya boleh diubah ulang (pada contoh di atas dideklarasikan dengan `let`).

#### Ringkasan Operator Compound Assignment

Berikut ringkasan seluruh operator compound assignment yang disebut dalam materi:

| Operator | Nama                      | Fungsi                                                                       |
| :------- | :------------------------ | :--------------------------------------------------------------------------- |
| `+=`     | Addition assignment       | Menambahkan nilai ke variable, lalu menyimpan hasilnya                       |
| `-=`     | Subtraction assignment    | Mengurangi variable dengan nilai tertentu, lalu menyimpan hasilnya           |
| `*=`     | Multiplication assignment | Mengalikan variable dengan nilai tertentu, lalu menyimpan hasilnya           |
| `/=`     | Division assignment       | Membagi variable dengan nilai tertentu, lalu menyimpan hasilnya              |
| `%=`     | Remainder assignment      | Membagi variable dengan nilai tertentu, lalu menyimpan sisa baginya          |
| `**=`    | Exponent assignment       | Memangkatkan variable dengan nilai tertentu, lalu menyimpan hasilnya         |
| `&=`     | Bitwise AND assignment    | Melakukan operasi bitwise AND dengan nilai tertentu, lalu menyimpan hasilnya |
| `\|=`    | Bitwise OR assignment     | Melakukan operasi bitwise OR dengan nilai tertentu, lalu menyimpan hasilnya  |

### Poin Kunci

- Perkalian dan pembagian dievaluasi sebelum penjumlahan dan pengurangan, sama seperti urutan operasi dalam matematika.
- Tanda kurung `()` memaksa bagian expression di dalamnya dievaluasi lebih dulu.
- Operator berprioritas sama dievaluasi menurut associativity: kebanyakan operator dari kiri ke kanan, sedangkan penugasan (`=`) dan eksponen (`**`) dari kanan ke kiri.
- `++` dan `--` menambah atau mengurangi nilai variable sebanyak 1.
- _Prefix_ (`++x`) memperbarui nilai dulu lalu mengembalikan nilai baru, sedangkan postfix (`x++`) mengembalikan nilai saat ini lalu memperbaruinya.
- `x += y` setara dengan `x = x + y`; bentuk gabungan tersedia untuk arithmetic operators lain, termasuk `%=` dan `**=`.

---

## 2. Kuis

Bagian kuis ini dirancang sebagai instrumen evaluasi mandiri (self-assessment) untuk menguji daya ingat dan pemahaman konseptual Anda terhadap perilaku operator JavaScript yang telah dipelajari.

1. Apa yang dimaksud dengan _operator precedence_ dalam JavaScript?
2. Berapakah hasil `2 + 3 * 4`, dan mengapa hasilnya bukan `20`?
3. Bagaimana cara mengubah urutan evaluasi bawaan dalam sebuah expression?
4. Apa fungsi associativity, dan apa arah evaluasinya pada kebanyakan operator seperti `+` dan `*`?
5. Berapakah hasil `2 ** 3 ** 2`, dan bagaimana JavaScript mengevaluasinya?
6. Apa perbedaan antara `++x` dan `x++`?
7. Jika `let a = 5; let b = ++a;`, berapakah nilai `a` dan `b`? Bagaimana jika yang dipakai `let c = 5; let d = c++;`?
8. Kapan sebaiknya memakai bentuk prefix dan kapan bentuk postfix?
9. Tuliskan bentuk compound assignment dari `num = num + 2`.
10. Apa fungsi operator `%=` dan `**=`?

> Silakan selesaikan seluruh pertanyaan di atas secara mandiri sebelum Anda melihat kunci jawaban resmi pada bagian selanjutnya.

---

## 3. Kunci Jawaban

> Coba jawab dulu sebelum membuka jawabannya!

<details>
<summary><strong>1. Pengertian Operator Precedence</strong></summary>

_Operator precedence_ adalah aturan yang menentukan urutan operasi dievaluasi dalam sebuah expression. Operator berprioritas lebih tinggi dievaluasi lebih dulu daripada operator berprioritas lebih rendah.

</details>

<details>
<summary><strong>2. Hasil 2 + 3 * 4</strong></summary>

Hasilnya `14`. Perkalian memiliki prioritas lebih tinggi daripada penjumlahan, sehingga `3 * 4` dievaluasi lebih dulu menjadi `12`, lalu `2 + 12` menghasilkan `14`. Hasil `20` hanya akan muncul jika expression dievaluasi murni dari kiri ke kanan (`2 + 3 = 5`, lalu `5 * 4 = 20`), padahal JavaScript tidak bekerja demikian.

</details>

<details>
<summary><strong>3. Mengubah Urutan Evaluasi</strong></summary>

Gunakan tanda kurung `()`. Bagian expression di dalam tanda kurung dievaluasi lebih dulu. Contohnya, `(2 + 3) * 4` menghasilkan `20`.

</details>

<details>
<summary><strong>4. Fungsi Associativity</strong></summary>

_Associativity_ menentukan arah evaluasi (kiri ke kanan atau kanan ke kiri) ketika beberapa operator memiliki prioritas yang sama. Pada kebanyakan operator seperti `+` dan `*`, arahnya dari kiri ke kanan. Contohnya, `10 - 2 + 3` dievaluasi sebagai `(10 - 2) + 3` sehingga hasilnya `11`.

</details>

<details>
<summary><strong>5. Hasil 2 ** 3 ** 2</strong></summary>

Hasilnya `512`. Operator eksponen berasosiasi dari kanan ke kiri, sehingga `3 ** 2` dievaluasi lebih dulu (hasilnya `9`), lalu `2 ** 9` menghasilkan `512`. Jika arahnya dari kiri ke kanan, hasilnya akan `64` (`2 ** 3 = 8`, lalu `8 ** 2 = 64`).

</details>

<details>
<summary><strong>6. Perbedaan ++x dan x++</strong></summary>

`++x` (prefix) menambah nilai `x` terlebih dahulu, lalu mengembalikan nilai yang baru. `x++` (postfix) mengembalikan nilai `x` saat ini terlebih dahulu, baru kemudian menambahnya. Setelah baris kode selesai, nilai `x` sama-sama bertambah 1.

</details>

<details>
<summary><strong>7. Nilai pada let b = ++a dan let d = c++</strong></summary>

Pada `let a = 5; let b = ++a;`, nilai `a` dan `b` sama-sama `6` karena `a` ditambah dulu sebelum disimpan ke `b`. Pada `let c = 5; let d = c++;`, nilai `d` adalah `5` (nilai `c` sebelum ditambah), sedangkan `c` menjadi `6`.

</details>

<details>
<summary><strong>8. Memilih Prefix atau Postfix</strong></summary>

Gunakan prefix (`++x`) jika membutuhkan nilai yang sudah diperbarui secara langsung dalam expression. Gunakan postfix (`x++`) jika membutuhkan nilai saat ini terlebih dahulu dan pembaruan baru diperlukan setelahnya. Jika nilai ekspresinya tidak dipakai, kedua bentuk memberi hasil akhir yang sama pada variabelnya.

</details>

<details>
<summary><strong>9. Bentuk Compound Assignment dari num = num + 2</strong></summary>

Bentuknya adalah `num += 2`. Operator `+=` menggabungkan operasi penjumlahan dan penugasan ke dalam satu statement.

</details>

<details>
<summary><strong>10. Fungsi %= dan **=</strong></summary>

Operator `%=` (_remainder assignment_) membagi variable dengan angka yang ditentukan, lalu menyimpan sisa baginya ke variable tersebut. Operator `**=` (_exponent assignment_) memangkatkan variable dengan angka yang ditentukan, lalu menyimpan hasilnya ke variable tersebut.

</details>

---

## 4. Soal Esai

Soal esai berikut disusun untuk melatih penalaran analitis, kemampuan sintesis, serta evaluasi keputusan teknis yang harus diambil oleh seorang pengembang saat menulis expression dengan banyak operator dalam JavaScript.

1. **Menelusuri Urutan Evaluasi:** Telusuri evaluasi expression `2 + 6 / 3` dan `10 - 2 + 3` langkah demi langkah. Jelaskan peran _precedence_ pada expression pertama dan peran associativity pada expression kedua, serta mengapa keduanya merupakan konsep yang berbeda.
2. **Kurung untuk Keterbacaan:** Meskipun aturan _precedence_ sudah menentukan urutan evaluasi, pengembang sering menambahkan tanda kurung. Jelaskan manfaat dan kemungkinan kerugian dari kebiasaan tersebut bagi tim yang membaca kode yang sama.
3. **Penugasan Berantai:** Pada `let a, b; a = b = 5;`, JavaScript mengevaluasi sisi kanan lebih dulu. Jelaskan urutan langkahnya dan hubungkan dengan konsep associativity kanan ke kiri.
4. **Prefix vs Postfix dalam expression:** Bayangkan sebuah penghitung `let count = 5;` dipakai dalam expression `const label = count++;` dan `const label2 = ++count;`. Jelaskan nilai `label`, `label2`, dan `count` pada akhir tiap statement (anggap `count` dimulai dari `5` pada masing-masing kasus), lalu jelaskan risiko kebingungan yang bisa muncul bagi pembaca kode.
5. **Efisiensi Compound Assignment:** Bandingkan `score = score - 7` dengan `score -= 7`. Selain lebih singkat, apakah ada manfaat lain dalam hal keterbacaan atau risiko kesalahan penulisan? Jelaskan pendapat Anda.

---

## 5. Glosarium

Penguasaan terminologi teknis (technical vocabulary) yang tepat sangat penting bagi pengembang JavaScript agar dapat berkomunikasi secara efektif, memahami dokumentasi resmi, serta berkolaborasi secara profesional.

| Istilah Teknis                                                 | Definisi Berdasarkan Teks Sumber                                                                                                                          |
| :------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Associativity (associativity)**   | Aturan yang menentukan apakah operator berprioritas sama dievaluasi dari kiri ke kanan atau dari kanan ke kiri.                                           |
| **Compound Assignment Operator (assignment operator Gabungan)** | Bentuk singkat yang menggabungkan sebuah operasi dengan penugasan ulang hasilnya ke variable yang sama, misalnya `x += y` yang setara dengan `x = x + y`. |
| **Decrement Operator (decrement operator)**                  | Operator `--` yang mengurangi nilai variable sebanyak 1.                                                                                                  |
| **Exponent Assignment Operator** (`**=`)                       | Operator yang memangkatkan variable dengan angka tertentu lalu menyimpan hasilnya kembali ke variable tersebut.                                           |
| **Increment Operator (increment operator)**                   | Operator `++` yang menambah nilai variable sebanyak 1.                                                                                                    |
| **Operator Precedence**                   | Aturan yang menentukan urutan evaluasi operasi dalam sebuah expression; operator berprioritas lebih tinggi dievaluasi lebih dulu.                           |
| **Parentheses (Tanda Kurung)**                                 | Simbol `()` yang dipakai untuk memaksa bagian expression di dalamnya dievaluasi lebih dulu, terlepas dari aturan operator precedence.                        |
| **Postfix**                                                    | Bentuk operator `++` atau `--` yang ditulis setelah variable (`x++`); mengembalikan nilai saat ini lebih dulu, lalu memperbarui variable.                 |
| **Prefix**                                                     | Bentuk operator `++` atau `--` yang ditulis sebelum variable (`++x`); memperbarui variable lebih dulu, lalu mengembalikan nilai barunya.                  |
| **Remainder Assignment Operator (`%=`)**                       | Operator yang membagi variable dengan angka tertentu lalu menyimpan sisa baginya kembali ke variable tersebut.                                            |
