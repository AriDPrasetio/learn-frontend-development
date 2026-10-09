# Apa Saja Berbagai Operator Aritmetika di JavaScript?

JavaScript menyediakan alat untuk melakukan operasi aritmetika dasar pada angka, seperti penjumlahan, pengurangan, perkalian, dan pembagian. JavaScript juga menyertakan operator untuk operasi aritmetika yang lebih kompleks, seperti sisa bagi (`remainder`) dan perpangkatan (`exponentiation`).

Semua alat ini disebut operator aritmetika (`arithmetic operators`). Mari kita pelajari operator-operator ini secara rinci, cara menggunakannya, dan cara menggabungkannya.

Operator penjumlahan (`addition operator`) adalah tanda tambah (`+`). Operator penjumlahan memungkinkan Anda menemukan jumlah total dari dua angka atau lebih. Dalam operasi penjumlahan, urutan angka tidak memengaruhi hasil:

```javascript
const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 + num2;
const result2 = num2 + num1;
const result3 = num2 + num1 + num3;

console.log(result1); // 15
console.log(result2); // 15
console.log(result3); // 30
```

Operator pengurangan (`subtraction operator`) adalah tanda minus (`-`). Ini memungkinkan Anda menemukan selisih antara dua angka. Gunakan tanda minus saat Anda ingin mengurangkan sebuah angka dari angka lainnya, biasanya angka yang lebih kecil dari angka yang lebih besar:

```javascript
const difference = 10 - 5;
console.log(difference); // 5
```

Jika angka yang lebih kecil berada di awal, Anda akan mendapatkan hasil negatif:

```javascript
const difference = 5 - 10;
console.log(difference); // -5
```

Anda juga dapat menetapkan angka ke dalam variabel dan melakukan pengurangan dengan nama variabel tersebut:

```javascript
const num1 = 10;
const num2 = 5;
const result = num1 - num2;

console.log(result); // 5
```

Di JavaScript, operator perkalian (`multiplication operator`) direpresentasikan oleh tanda bintang (`*`) dan digunakan untuk mencari hasil kali dari dua angka atau lebih. Urutan angka yang Anda kalikan tidak memengaruhi hasil:

```javascript
const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 * num2;
const result2 = num2 * num1;
const result3 = num2 * num1 * num3;

console.log(result1); // 50
console.log(result2); // 50
console.log(result3); // 750
```

Di JavaScript, operator pembagian (`division operator`) adalah garis miring (`/`), yang berbeda dari simbol pembagian yang digunakan dalam matematika tradisional (÷). Anda melakukan operasi pembagian dengan operator pembagian. Urutan angka yang Anda bagi berpengaruh dalam kasus ini:

```javascript
const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 / num2;
const result2 = num2 / num1;
const result3 = num2 / num1 / num3;

console.log(result1); // 2
console.log(result2); // 0.5
console.log(result3); // 0.03333333333333333
```

Penting untuk dicatat bahwa jika Anda mencoba membagi dengan nol, JavaScript akan mengembalikan `Infinity`:

```javascript
const result = 10 / 0; 

console.log(result); // Infinity
```

Pastikan untuk menghindari jenis perhitungan tersebut agar Anda tidak berakhir dengan hasil yang tidak terduga pada kode Anda.

Operator sisa bagi (`remainder operator`), yang direpresentasikan oleh tanda persen (`%`), mengembalikan sisa dari suatu pembagian. Sisa bagi dalam matematika adalah nilai yang tersisa setelah melakukan pembagian:

```javascript
const num1 = 10;
const num2 = 3;
const remainder = num1 % num2;

console.log(remainder); // 1
```

Operator perpangkatan (`exponentiation operator`), yang direpresentasikan oleh tanda bintang ganda (`**`), memangkatkan satu angka dengan angka lainnya:

```javascript
const num1 = 2;
const num2 = 3;

const exponent = num1 ** num2;
console.log(exponent); // 8
```

Dimungkinkan juga untuk mencampur beberapa operator dalam satu operasi atau ekspresi:

```javascript
const result = 10 + 5 * 2 - 8 / 4;
console.log(result); // 18
```

Ketika Anda mencampur operator yang berbeda dalam satu ekspresi, mesin JavaScript mengikuti sistem yang disebut prioritas operator (`operator precedence`) untuk menentukan urutan operasi. Prioritas operator menentukan urutan eksekusi operasi dalam ekspresi. Anda akan mempelajari lebih lanjut tentang prioritas operator pada pelajaran-pelajaran berikutnya.

---

## Pertanyaan

### Manakah dari operator berikut yang harus Anda gunakan untuk mengurangkan satu angka dari angka lainnya?
- [ ] `+`
- [x] `-`
- [ ] `*`
- [ ] `/`

### Apa keluaran dari kode berikut?
```javascript
const result = 4 / 0;
console.log(result);
```
- [x] `Infinity`
- [ ] `4`
- [ ] `1`
- [ ] `16`

### Apa keluaran dari kode berikut?
```javascript
const remainder = 5 % 3;
console.log(remainder);
```
- [ ] `15`
- [x] `2`
- [ ] `3`
- [ ] `1.6666666666666667`

---
[⬅️ Sebelumnya](1-what-is-the-number-type-in-javascript-and-what-are-the-different-types-of-numbers-available.md) | [Selanjutnya ➡️](3-what-happens-when-you-try-to-do-calculations-with-numbers-and-strings.md)
