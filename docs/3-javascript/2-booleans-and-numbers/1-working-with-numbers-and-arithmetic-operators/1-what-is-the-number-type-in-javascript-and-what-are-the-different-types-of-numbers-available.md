# Apa Itu Tipe Number di JavaScript, dan Apa Saja Berbagai Tipe Angka yang Tersedia?

Tipe `Number` adalah salah satu tipe data yang paling sering digunakan di JavaScript dan bahasa pemrograman lainnya. Angka mungkin tampak sederhana, tetapi ada banyak hal yang bisa dieksplorasi terkait angka di JavaScript. Jadi, mari kita pelajari lebih dalam. Di JavaScript, tipe data `Number` merepresentasikan sebuah nilai numerik.

Tidak seperti banyak bahasa pemrograman lain yang memisahkan `integer` dan `floating-point numbers` ke dalam tipe yang berbeda, JavaScript menggunakan satu tipe `Number` yang terpadu untuk menangani angka. Ini berarti Anda dapat bekerja dengan bilangan bulat, desimal, dan bahkan nilai numerik khusus, semuanya di bawah satu payung tipe data `Number`.

Berikut adalah contoh dasar yang menunjukkan kepada Anda bahwa `integer`, `floating-point numbers`, dan bilangan negatif semuanya bertipe `number`:

```javascript
const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber); // number
console.log(typeof decimalNumber); // number
console.log(typeof negativeNumber); // number
```

Tipe `Number` di JavaScript mencakup berbagai jenis nilai numerik, mulai dari `integer` sederhana dan `floating-point numbers` hingga kasus khusus seperti `Infinity` dan `NaN`, atau "Not a Number". Mari kita uraikan tipe-tipe utama yang akan Anda temui.

`Integer` adalah bilangan bulat tanpa bagian pecahan atau desimal. Mereka bisa bernilai positif, negatif, atau nol. Berikut beberapa contohnya:

```javascript
const positiveInteger = 100;
const negativeInteger = -25;
const zero = 0;

console.log(typeof positiveInteger); // number
console.log(typeof negativeInteger); // number
console.log(typeof zero); // number
```

`Floating-point numbers` adalah angka dengan titik desimal. Mereka sering disebut hanya sebagai "floats" oleh para pengembang JavaScript. `Floats` berguna ketika Anda membutuhkan presisi lebih, seperti saat menangani pengukuran atau mata uang. Berikut beberapa contohnya:

```javascript
const floatingPointNumber = 4.5;
const anotherFloat = 89.56;
const oneMoreFloat = 16.462;

console.log(typeof floatingPointNumber); // number
console.log(typeof anotherFloat); // number
console.log(typeof oneMoreFloat); // number
```

JavaScript dapat merepresentasikan angka yang melampaui batas maksimum dengan `Infinity`. Anda akan menemui ini saat mencoba membagi angka dengan nol atau pada kesempatan langka, melampaui batas atas dari tipe `Number`. Berikut contohnya:

```javascript
const infiniteNumber = 1 / 0;
console.log(infiniteNumber); // Infinity
console.log(typeof infiniteNumber); // number
```

Terkadang di JavaScript, beberapa operasi matematika tidak menghasilkan angka yang valid. Misalnya, jika Anda mencoba melakukan operasi matematika pada sesuatu yang bukan angka, Anda akan mendapatkan `NaN`, yang merupakan singkatan dari "Not a Number":

```javascript
const notANumber = 'hello world' / 2;
console.log(notANumber); // NaN
```

Secara mengejutkan, tipe dari `NaN` juga adalah `Number`:

```javascript
const notANumber = 'hello world' / 2;
console.log(typeof notANumber); // number
```

Selain sistem desimal standar (basis 10), JavaScript juga mendukung angka dalam berbagai basis seperti biner (`binary`), oktal (`octal`), dan heksadesimal (`hexadecimal`). Biner adalah sistem basis 2 yang hanya menggunakan digit 1 dan 0. Oktal adalah sistem basis 8 yang hanya menggunakan digit 0 hingga 7. Heksadesimal adalah sistem basis 16 yang menggunakan digit 0 hingga 9 dan huruf a hingga f, seperti yang Anda lihat pada kode warna heksadesimal di CSS.

---

## Pertanyaan

### Manakah dari berikut ini yang paling tepat mendeskripsikan tipe Number di JavaScript?
- [ ] Ini hanya mencakup `integer`.
- [x] Ini mencakup `integer` dan `floating-point numbers`, serta kasus khusus seperti `Infinity` dan `NaN`.
- [ ] Ini terbatas pada operasi aritmetika sederhana.
- [ ] Ini mengecualikan nilai-nilai khusus seperti `Infinity` dan `NaN`.

### Kapan floating-point numbers paling berguna di JavaScript?
- [ ] Saat berurusan dengan bilangan bulat (`whole numbers`).
- [ ] Saat Anda perlu melakukan aritmetika sederhana.
- [x] Saat Anda membutuhkan presisi lebih, seperti dalam pengukuran atau mata uang.
- [ ] Saat bekerja secara eksklusif dengan `integer`.

### Kapan Anda mungkin menjumpai nilai Infinity di JavaScript?
- [ ] Saat mengalikan sembarang dua angka.
- [ ] Saat sebuah angka melampaui batas bawah dari tipe `Number`.
- [ ] Saat melakukan penggabungan string (`string concatenation`).
- [x] Saat membagi angka dengan nol atau melampaui batas atas dari tipe `Number`.

---
⬅️ Sebelumnya | [Selanjutnya ➡️](2-what-are-the-different-arithmetic-operators-in-javascript.md)
