# Apa Itu Operator Bitwise, dan Bagaimana Cara Kerjanya?

## Bit dan Biner

Operator *bitwise* di JavaScript adalah operator khusus yang bekerja pada representasi biner dari angka. Untuk memahami operator *bitwise*, pertama-tama kita perlu memahami konsep bit dan bilangan biner. Dalam komputasi, bit adalah unit informasi paling mendasar. Bit hanya dapat memiliki dua nilai: 0 atau 1. Biner adalah sistem bilangan yang hanya menggunakan kedua digit ini untuk merepresentasikan semua angka.

### Contoh Biner

Sebagai contoh, representasi biner dari bilangan desimal 10 adalah 1010. Dalam sistem ini, setiap digit merepresentasikan perpangkatan dari 2, dimulai dari digit paling kanan dan meningkat seiring kita bergerak ke kiri.

| 1 | 0 | 1 | 0 |
| :---: | :---: | :---: | :---: |
| $1 \cdot 2^3$ | $0 \cdot 2^2$ | $1 \cdot 2^1$ | $0 \cdot 2^0$ |
| 8 | 0 | 2 | 0 |

Pada tabel di atas, baris pertama menunjukkan bilangan biner 1010, baris kedua menunjukkan perpangkatan 2 yang diwakili oleh setiap posisi biner, dan baris ketiga menunjukkan hasil dari setiap perkalian. Jika Anda menjumlahkan semua nilai pada baris ketiga, totalnya adalah 10.

## Ikhtisar Operator Bitwise

Sekarang, mari kita pelajari operator *bitwise*. Operator-operator ini melakukan operasi pada representasi biner angka. JavaScript menyediakan beberapa operator *bitwise*, termasuk AND (`&`), OR (`|`), XOR (`^`), NOT (`~`), pergeseran ke kiri / *left shift* (`<<`), dan pergeseran ke kanan / *right shift* (`>>`).

### Bitwise AND

Operator *bitwise* AND (`&`) mengembalikan 1 pada setiap posisi bit yang mana bit terkait dari kedua operan bernilai 1. Berikut contohnya:

```javascript
let a = 5;  // Biner: 101
let b = 3;  // Biner: 011
console.log(a & b);  // 1 (Biner: 001)
```

Pada contoh ini, kita melakukan operasi *bitwise* AND pada 5 (101 dalam biner) dan 3 (011 dalam biner). Hasilnya adalah 1 (001 dalam biner) karena hanya bit paling kanan yang bernilai 1 pada kedua angka tersebut.

### Bitwise OR

Operator *bitwise* OR (`|`) mengembalikan 1 pada setiap posisi bit yang mana bit terkait dari salah satu atau kedua operan bernilai 1. Sebagai contoh:

```javascript
let a = 5;  // Biner: 101
let b = 3;  // Biner: 011
console.log(a | b);  // 7 (Biner: 111)
```

Di sini, hasilnya adalah 7 (111 dalam biner) karena setidaknya salah satu bit bernilai 1 pada setiap posisi.

### Bitwise XOR

Operator *bitwise* XOR (`^`) mengembalikan 1 pada setiap posisi bit yang mana bit terkait dari salah satu operan bernilai 1, tetapi tidak keduanya. Misalnya:

```javascript
let a = 5;  // Biner: 101
let b = 3;  // Biner: 011
console.log(a ^ b);  // 6 (Biner: 110)
```

Hasilnya adalah 6 (110 dalam biner) karena bit pertama dan kedua dari kanan berbeda pada kedua angka tersebut.

### Bitwise NOT

Operator *bitwise* NOT (`~`) membalikkan semua bit dari operannya. Sebagai contoh:

```javascript
let a = 5;  // Biner: 101
console.log(~a);  // -6
```

Ini mungkin tampak mengejutkan, tetapi hal ini terjadi karena bagaimana angka negatif direpresentasikan dalam biner menggunakan *two's complement*.

### Pergeseran ke Kiri (Left Shift)

Operator *left shift* (`<<`) menggeser semua bit ke kiri sebanyak jumlah posisi yang ditentukan. Sebagai contoh:

```javascript
let a = 5;  // Biner: 101
console.log(a << 1);  // 10 (Biner: 1010)
```

Di sini, semua bit digeser satu posisi ke kiri, yang secara efektif mengalikan angka tersebut dengan 2.

### Pergeseran ke Kanan (Right Shift)

Operator *right shift* (`>>`) menggeser semua bit ke kanan. Sebagai contoh:

```javascript
let a = 5;  // Biner: 101
console.log(a >> 1);  // 2 (Biner: 10)
```

Di sini, semua bit digeser satu posisi ke kanan, yang secara efektif membagi angka tersebut dengan 2 dan membulatkannya ke bawah.

## Kasus Penggunaan (Use Cases)

Operator *bitwise* sering digunakan dalam pemrograman tingkat rendah (*low-level programming*) dan kriptografi. Meskipun mungkin tidak begitu sering digunakan dalam pemrograman JavaScript sehari-hari, memahaminya dapat bermanfaat untuk tugas-tugas khusus tertentu dan dapat memperdalam pemahaman Anda tentang cara kerja komputer pada tingkat fundamental.

---

## Pertanyaan

### Apa keluaran dari kode berikut?
```javascript
let a = 5;  // Biner: 101
let b = 3;  // Biner: 011
console.log(a & b);
```
- [ ] `8`
- [x] `1`
- [ ] `7`
- [ ] `15`

### Apa hasil dari operasi berikut?
```javascript
let x = 8;  // Biner: 1000
console.log(x << 2);
```
- [ ] `4`
- [ ] `16`
- [x] `32`
- [ ] `2`

### Apa representasi biner dari angka 6?
- [ ] `101`
- [x] `110`
- [ ] `111`
- [ ] `100`

---
[⬅️ Sebelumnya](1-what-are-unary-operators-and-how-do-they-work.md) | [Selanjutnya ➡️](../5-working-with-conditional-logic-and-math-methods/1-what-are-conditional-statements-and-how-do-if-else-if-else-statements-work.md)
