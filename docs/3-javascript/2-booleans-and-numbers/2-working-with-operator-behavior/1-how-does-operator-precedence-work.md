# Bagaimana Cara Kerja Prioritas Operator (Operator Precedence)?

Jika Anda menulis sebuah ekspresi dengan beberapa operator di JavaScript, bagaimana JavaScript memutuskan mana yang harus dievaluasi terlebih dahulu? Di sinilah prioritas operator (`operator precedence`) berperan. Mari kita pelajari prioritas operator secara rinci dengan contoh kode, serta apa yang terjadi saat operator-operator memiliki prioritas yang sama.

Prioritas operator (`operator precedence`) menentukan urutan bagaimana operasi dievaluasi dalam sebuah ekspresi. Operator dengan prioritas lebih tinggi dievaluasi sebelum operator dengan prioritas lebih rendah. Bayangkan prioritas operator seperti dalam matematika, di mana pembagian dan perkalian dilakukan sebelum penjumlahan dan pengurangan.

Tanpa mengikuti aturan ini, persamaan dasar akan memberi Anda jawaban yang salah. JavaScript bekerja dengan cara yang sama. JavaScript memiliki aturannya sendiri mengenai operator mana yang dieksekusi pertama, kedua, dan seterusnya.

## Prioritas dalam Ekspresi Aritmetika

### Prioritas Perkalian

Sebagai contoh, perhatikan ekspresi di bawah ini:

```javascript
const result = 2 + 3 * 4;

console.log(result); // 14
```

Jika JavaScript mengevaluasi ekspresi ini dari kiri ke kanan, Anda mungkin mengharapkan `2 + 3 = 5`, kemudian `5 * 4 = 20`. Namun karena perkalian memiliki prioritas yang lebih tinggi daripada penjumlahan, JavaScript mengevaluasi bagian `3 * 4` terlebih dahulu, menghasilkan `2 + 12 = 14`.

### Prioritas Pembagian

Operator pembagian juga memiliki prioritas lebih tinggi daripada penjumlahan atau pengurangan:

```javascript
const result = 2 + 6 / 3;

console.log(result); // 4
```

Jika JavaScript mengevaluasi ekspresi ini dari kiri ke kanan, Anda mungkin mengharapkan `2 + 6 = 8`, kemudian `8 / 3 = 2.67`. Namun karena pembagian memiliki prioritas lebih tinggi daripada penjumlahan, JavaScript mengevaluasi pembagian terlebih dahulu: `6 / 3 = 2`, lalu menambahkan `2 + 2`, menghasilkan `4`.

## Menggunakan Tanda Kurung untuk Mengabaikan Prioritas

Terkadang, Anda mungkin ingin bagian tertentu dari ekspresi Anda dieksekusi terlebih dahulu, terlepas dari aturan prioritas. Anda dapat menggunakan tanda kurung (`parentheses`), `()`, untuk melakukan ini. Apa pun yang ada di dalam tanda kurung akan dievaluasi terlebih dahulu, apa pun yang terjadi. Mari buat bagian `2 + 3` dari contoh perkalian dievaluasi terlebih dahulu:

```javascript
const result = (2 + 3) * 4;

console.log(result); // 20
```

Pada contoh di atas, tanda kurung memaksa JavaScript untuk mengevaluasi `2 + 3` terlebih dahulu, lalu mengalikan hasilnya dengan 4. Ini memberi Anda nilai 20, bukan 14.

Jadi, baik pada perkalian maupun pembagian, operasi-operasi tersebut akan selalu dilakukan sebelum penjumlahan dan pengurangan kecuali Anda menggunakan tanda kurung untuk mengubah urutannya. Lantas apa yang terjadi jika operator-operator memiliki tingkat prioritas yang sama? JavaScript menggunakan asosisativitas (`associativity`) untuk mencari tahu urutan evaluasinya.

## Memahami Asosiativitas (Associativity)

Asosiativitas (`associativity`) adalah hal yang memberi tahu JavaScript apakah harus mengevaluasi operator dari kiri ke kanan (*left-to-right*) atau kanan ke kiri (*right-to-left*). Untuk sebagian besar operator seperti penjumlahan dan perkalian, asosiativitasnya adalah dari kiri ke kanan. Jadi, JavaScript memproses ini dari sisi paling kiri ekspresi ke kanan:

```javascript
const result = 10 - 2 + 3;

console.log(result); // 11
```

Pertama, `10 - 2 = 8`, kemudian `8 + 3 = 11`. JavaScript bergerak dari kiri ke kanan dalam kasus ini. Beberapa operator, seperti penugasan (`=`), bersifat asosiatif dari kanan ke kiri (*right-to-left associative*). Ini berarti sisi kanan ekspresi akan dievaluasi terlebih dahulu:

```javascript
let a, b;
a = b = 5;

console.log(a); // 5
console.log(b); // 5
console.log(a + b); // 10
```

Pada contoh di atas, JavaScript menetapkan 5 ke `b` terlebih dahulu, lalu menetapkan `b` (yang sekarang bernilai 5) ke `a`.

### Operator Perpangkatan (Exponent)

Operator perpangkatan juga bersifat asosiatif dari kanan ke kiri:

```javascript
const result = 2 ** 3 ** 2;

console.log(result); // 512
```

Pertama, JavaScript mengevaluasi `3 ** 2`, yang menghasilkan 9, kemudian mengevaluasi `2 ** 9`, yang menghasilkan 512. Jika operator eksponen memiliki asosiativitas kiri-ke-kanan, JavaScript akan menghitung `2 ** 3` terlebih dahulu hingga mendapatkan 8, lalu `8 ** 2` hingga mendapatkan 64.

---

## Pertanyaan

### Bagaimana prioritas operator di JavaScript dibandingkan dengan matematika?
- [ ] Penjumlahan dilakukan sebelum perkalian dan pembagian.
- [x] Pembagian dan perkalian dilakukan sebelum penjumlahan dan pengurangan, sama seperti dalam matematika.
- [ ] Semua operasi dilakukan sesuai urutan kemunculannya.
- [ ] Pengurangan mengambil prioritas di atas semua operasi lainnya.

### Bagaimana cara mengabaikan prioritas operator di JavaScript?
- [ ] Dengan menggunakan operator penjumlahan (`+`) untuk mengubah urutan operasi.
- [x] Dengan menggunakan tanda kurung untuk memaksa bagian tertentu dari ekspresi dievaluasi terlebih dahulu.
- [ ] Dengan membalikkan operator dalam ekspresi.
- [ ] Dengan melakukan semua operasi dari kiri ke kanan, terlepas dari prioritasnya.

### Bagaimana JavaScript mengevaluasi ekspresi dengan operator eksponen (`**`)?
- [ ] Dari kiri ke kanan.
- [x] Dari kanan ke kiri, yang berarti mengevaluasi perpangkatan paling kanan terlebih dahulu.
- [ ] Dengan mengalikan basis dengan dirinya sendiri sebanyak angka yang ditunjukkan.
- [ ] Dengan menjumlahkan eksponen terlebih dahulu, lalu menghitung hasilnya.

---
[⬅️ Sebelumnya](../1-working-with-numbers-and-arithmetic-operators/3-what-happens-when-you-try-to-do-calculations-with-numbers-and-strings.md) | [Selanjutnya ➡️](2-how-do-the-increment-and-decrement-operators-work.md)
