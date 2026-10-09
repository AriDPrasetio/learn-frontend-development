# Apa Itu Pernyataan Kondisional, dan Bagaimana Cara Kerja Pernyataan If/Else If/Else?

Pernyataan kondisional (*conditional statements*) memungkinkan Anda membuat keputusan dalam kode JavaScript Anda. Mereka memungkinkan program Anda mengalir dengan cara tertentu berdasarkan kondisi-kondisi tertentu. Mari kita lihat bagaimana `if`, `else if`, `else`, dan operator *ternary* bekerja untuk memungkinkan Anda mengontrol alur kode Anda.

## Nilai Truthy dan Falsy

Pernyataan `if` menerima sebuah kondisi dan menjalankan blok kode jika kondisi tersebut bernilai *truthy*. Nilai *truthy* adalah nilai apa pun yang menghasilkan `true` saat dievaluasi dalam konteks Boolean seperti pernyataan `if`. Berikut adalah contoh nilai-nilai *truthy*:

- string yang tidak kosong, misalnya `hello`
- angka apa pun selain `0` dan `-0`, misalnya `4`, `-5`, dan lainnya
- *array*
- *object*
- nilai boolean `true`

Di sisi lain, nilai *falsy* adalah nilai yang dievaluasi menjadi `false` dalam konteks boolean. JavaScript memiliki sedikit nilai *falsy*, yang membuatnya mudah diingat. Berikut beberapa nilai *falsy*:

- boolean `false`
- `0` (nol)
- `""` (string kosong)
- `null`
- `undefined`
- `NaN` (Not a Number)

## Pernyataan if

Sekarang setelah kita memiliki pemahaman dasar tentang nilai *truthy* dan *falsy*, mari kita lihat cara kerjanya dengan pernyataan `if`. Pada contoh pertama ini, kita menggunakan beberapa pernyataan `if` untuk memeriksa nilai *truthy* dan *falsy*:

```javascript
if (null) {
  console.log("This will not run.");
}

if ("freeCodeCamp") {
  console.log("This will run.");
}
```

Karena `null` adalah nilai *falsy*, pesan di dalam blok tersebut tidak akan pernah dicetak ke konsol. Namun untuk pernyataan `if` kedua, string `"freeCodeCamp"` adalah nilai *truthy*, dan akan dianggap `true` dalam konteks boolean dari pernyataan `if` ini. Hasilnya, pesan `This will run.` akan dicetak ke konsol.

Mari kita lihat beberapa contoh lagi tentang cara kerja pernyataan `if` dengan operator perbandingan yang berbeda. Berikut adalah contoh penggunaan pernyataan `if` untuk memeriksa apakah pengguna berhak memilih:

```javascript
const age = 22;

if (age >= 18) {
  console.log("You're eligible to vote"); // You're eligible to vote
}
```

Pada contoh ini, karena `age` bernilai 22, ini berarti kondisi akan dievaluasi menjadi `true` karena 22 lebih besar dari atau sama dengan 18. Jadi pesan `You're eligible to vote` akan dicetak ke konsol. Jika kita mengubah contohnya sehingga `age` sekarang bernilai 15, maka kondisi akan dievaluasi menjadi `false` dan pesan tidak akan dicetak ke konsol:

```javascript
const age = 15;

if (age >= 18) {
  console.log("You're eligible to vote"); // Code not running because age is less than 18
}
```

## Klausa else

Ketika suatu kondisi bernilai `false`, maka Anda dapat menggunakan klausa `else`:

```javascript
const age = 15;

if (age >= 18) {
  console.log("You're eligible to vote");
} else {
  console.log("You're not eligible to vote"); // You're not eligible to vote
}
```

Pada contoh ini, 15 tidak lebih besar dari atau sama dengan 18, sehingga kondisinya bernilai `false`. Kode di dalam blok `else` yang akan dijalankan dalam kasus ini.

## Blok else if

Jika Anda ingin memeriksa beberapa kondisi, Anda dapat menggunakan blok `else if`. Ini memungkinkan program Anda memilih di antara lebih dari dua jalur.

```javascript
const score = 87;

if (score >= 90) {
  console.log('You got an A'); 
} else if (score >= 80) {
  console.log('You got a B'); // You got a B
} else if (score >= 70) {
  console.log('You got a C');
} else {
  console.log('You failed! You need to study more!');
}
```

Karena skor saat ini adalah 87, maka pesan `You got a B` yang akan dicetak ke konsol.

## Operator Ternary

Operator *ternary* adalah cara ringkas untuk menulis pernyataan `if/else` sederhana. Operator ini memiliki tiga bagian: kondisi, hasil jika kondisi bernilai `true`, dan hasil jika kondisi bernilai `false`. Berikut adalah sintaks dasarnya:

```javascript
condition ? expressionIfTrue : expressionIfFalse;
```

Berikut adalah contoh yang berhubungan dengan suhu cuaca dalam Celsius:

```javascript
const temperature = 30;
const weather = temperature > 25 ? 'sunny' : 'cool';

console.log(`It's a ${weather} day!`);
```

Jika `temperature` lebih besar dari 25, kode di atas mencetak `It's a sunny day!`. Jika `temperature` bernilai kurang dari atau sama dengan 25, kode mencetak `It's a cool day!`.

## if/else vs. Ternary: Mana yang Harus Digunakan?

Lantas, mana yang sebaiknya Anda gunakan antara pernyataan `if` dan *ternary*? Gunakan *ternary* saat berurusan dengan kondisi tunggal atau ekspresi tunggal, atau saat Anda menginginkan sintaks yang ringkas untuk logika sederhana. Gunakan pernyataan `if/else` saat Anda berurusan dengan kondisi yang rumit dan banyak pernyataan, karena kode akan menjadi sulit dibaca jika Anda membuat *ternary* bersarang (*nested ternaries*).

---

## Pertanyaan

### Apa cara yang ringkas untuk menulis pernyataan if/else sederhana?
- [ ] Menggunakan pernyataan `switch`.
- [ ] Menggunakan perulangan `while`.
- [ ] Menggunakan beberapa pernyataan `if`.
- [x] Menggunakan operator *ternary*.

### Bagaimana cara memeriksa beberapa kondisi dalam sebuah pernyataan if?
- [ ] Hanya dengan menggunakan pernyataan `switch`.
- [ ] Dengan menggunakan perulangan `while`.
- [x] Dengan menggunakan blok `else if` untuk memilih di antara lebih dari dua jalur.
- [ ] Dengan menggunakan operator *ternary*.

### Apa tujuan dari blok else dalam sebuah pernyataan if?
- [ ] Berjalan ketika kondisi dalam pernyataan `if` bernilai `true`.
- [x] Menjalankan sebuah blok kode ketika kondisi dalam pernyataan `if` tidak bernilai `true`.
- [ ] Memeriksa apakah beberapa kondisi bernilai `true`.
- [ ] Selalu berjalan sebelum blok `if`.

---
[⬅️ Sebelumnya](../4-working-with-unary-and-bitwise-operators/2-what-are-bitwise-operators-and-how-do-they-work.md) | [Selanjutnya ➡️](2-what-are-binary-logical-operators-and-how-do-they-work.md)
