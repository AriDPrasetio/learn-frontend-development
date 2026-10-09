# Bagaimana Cara Kerja Operator Increment dan Decrement?

Jika Anda bekerja dengan angka dan perlu menambah atau mengurangi suatu nilai sebanyak satu, operator *increment* dan *decrement* membuat pekerjaan tersebut menjadi lebih mudah. Mari kita uraikan dengan cara yang sederhana.

Operator *increment* dan *decrement* masing-masing direpresentasikan oleh `++` dan `--`. Keduanya memungkinkan Anda menyesuaikan nilai variabel sebesar 1.

Alih-alih menulis sesuatu seperti `x = x + 1` atau `x = x - 1`, Anda cukup menggunakan `x++` untuk menambah 1, atau `x--` untuk mengurangi 1. Cara ini lebih cepat, lebih rapi, dan lebih mudah dibaca.

Ada keunikan pada cara kerja operator *increment* dan *decrement*: mereka hadir dalam dua bentuk, yaitu *prefix* dan *postfix*, dengan perbedaannya terletak pada kapan nilainya diperbarui. Untuk operator *increment*, *prefix* adalah `++x` dan *postfix* adalah `x++`.

*Prefix* (`++x`) meningkatkan nilai variabel terlebih dahulu, lalu mengembalikan nilai baru tersebut. *Postfix* (`x++`) mengembalikan nilai variabel saat ini terlebih dahulu, lalu meningkatkannya:

```javascript
let x = 5;

console.log(++x); // 6
console.log(x); // 6
```

Pada kode di atas, `++x` berarti "tingkatkan nilai `x` terlebih dahulu, lalu gunakan". Jadi saat Anda mencetak `++x`, Anda langsung mendapatkan nilai yang telah ditingkatkan, yaitu 6.

Sekarang, mari kita lihat contoh yang menggunakan *postfix*:

```javascript
let y = 5;

console.log(y++); // 5
console.log(y); // 6
```

Pada contoh ini, `y++` berarti "gunakan nilai `y` terlebih dahulu, lalu tingkatkan". Saat Anda mencetak `y++`, Anda mendapatkan 5, tetapi `y` menjadi 6 setelah baris kode tersebut dieksekusi.

Operator *decrement* melakukan hal yang sama seperti *increment*, hanya saja ia mengurangi nilainya sebesar 1. Sekali lagi, ada dua bentuk: *prefix* (`--x`) mengurangi nilai variabel terlebih dahulu, lalu mengembalikan nilai baru. Dan *postfix* (`x--`) mengembalikan nilai saat ini terlebih dahulu, lalu menguranginya:

```javascript
let x = 5;
console.log(--x); // 4
console.log(x); // 4

let y = 5;
console.log(y--); // 5
console.log(y); // 4
```

Lantas, mana yang harus Anda gunakan: *prefix* atau *postfix*? Dalam banyak kasus, tidak masalah mana yang Anda gunakan. Keduanya menyelesaikan pekerjaan yang sama. Namun, jika Anda menggunakan nilainya secara langsung dalam sebuah ekspresi, perbedaan tersebut menjadi penting. Mari kita lihat contoh ini:

```javascript
let a = 5;
let b = ++a;
console.log(b); // 6 (a ditingkatkan nilainya sebelum penugasan)

let c = 5;
let d = c++;
console.log(d); // 5 (c ditingkatkan nilainya setelah penugasan)
```

Jadi, jika Anda membutuhkan nilai yang diperbarui secara langsung, gunakan *prefix*. Jika Anda menginginkan nilai saat ini terlebih dahulu dan tidak mempermasalahkan peningkatan nilai tersebut sampai nanti, gunakan *postfix*.

---

## Pertanyaan

### Operator manakah di JavaScript yang memungkinkan Anda menyesuaikan nilai suatu variabel sebesar 1?
- [ ] `+` dan `-`.
- [ ] `*` dan `/`.
- [x] `++` dan `--`.
- [ ] `&&` dan `||`.

### Bentuk operator increment atau decrement manakah yang harus Anda gunakan jika Anda membutuhkan nilai yang diperbarui secara langsung dalam suatu ekspresi?
- [ ] *Postfix* (`value++` atau `value--`).
- [x] *Prefix* (`++value` atau `--value`).
- [ ] Baik *prefix* maupun *postfix*, tidak masalah.
- [ ] Keduanya tidak, Anda harus menggunakan penjumlahan atau pengurangan sebagai gantinya.

### Dalam bentuk apa sajakah operator increment dan decrement hadir di JavaScript?
- [x] *Prefix* dan *postfix*.
- [ ] Penjumlahan dan pengurangan.
- [ ] Perkalian dan pembagian.
- [ ] Kiri dan kanan.

---
[⬅️ Sebelumnya](1-how-does-operator-precedence-work.md) | [Selanjutnya ➡️](3-what-are-compound-assignment-operators-in-javascript-and-how-do-they-work.md)
