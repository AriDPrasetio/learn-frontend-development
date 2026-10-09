# Apa Itu Operator Perbandingan, dan Bagaimana Cara Kerjanya?

Operator perbandingan (`comparison operators`) memungkinkan Anda membandingkan dua nilai dan mengembalikan hasil `true` atau `false`. Anda kemudian dapat menggunakan hasil tersebut untuk membuat keputusan atau mengontrol alur program Anda. Anda menggunakan perbandingan dalam pernyataan `if`, perulangan (*loops*), dan banyak situasi lain di mana Anda perlu membuat keputusan berdasarkan kondisi tertentu. Mari kita pelajari operator perbandingan yang paling umum dan melihat cara kerjanya.

Operator lebih besar dari (`greater than operator`), yang direpresentasikan oleh kurung sudut kanan (`>`), memeriksa apakah nilai di sebelah kiri lebih besar daripada nilai di sebelah kanan:

```javascript
let a = 6;
let b = 9;

console.log(a > b); // false
console.log(b > a); // true
```

Operator lebih besar dari atau sama dengan (`greater than or equal operator`), yang direpresentasikan oleh tanda kurung sudut kanan dan tanda sama dengan (`>=`), memeriksa apakah nilai di sebelah kiri lebih besar dari atau sama dengan nilai di sebelah kanan:

```javascript
let a = 6;
let b = 9;
let c = 6;

console.log(a >= b); // false
console.log(b >= a); // true
console.log(a >= c); // true
```

Operator lebih kecil dari (`lesser than operator`), yang direpresentasikan oleh kurung sudut kiri (`<`), bekerja mirip dengan `>`, tetapi sebaliknya. Ini memeriksa apakah nilai di sebelah kiri lebih kecil daripada nilai di sebelah kanan:

```javascript
let a = 6;
let b = 9;

console.log(a < b); // true
console.log(b < a); // false
```

Operator lebih kecil dari atau sama dengan (`less than or equal operator`), yang direpresentasikan oleh kurung sudut kiri dan tanda sama dengan (`<=`), memeriksa apakah nilai di sebelah kiri lebih kecil dari atau sama dengan nilai di sebelah kanan:

```javascript
let a = 6;
let b = 9;
let c = 6;

console.log(a <= b); // true
console.log(b <= a); // false
console.log(a <= c); // true
```

---

## Pertanyaan

### Apa yang dilakukan operator lebih besar dari atau sama dengan (>=) di JavaScript?
- [ ] Memeriksa apakah nilai di sebelah kiri benar-benar lebih besar secara ketat daripada nilai di sebelah kanan.
- [x] Memeriksa apakah nilai di sebelah kiri lebih besar dari atau sama dengan nilai di sebelah kanan.
- [ ] Memeriksa apakah nilai di sebelah kanan lebih besar daripada nilai di sebelah kiri.
- [ ] Memeriksa apakah kedua nilai bernilai sama.

### Di mana Anda biasanya menggunakan operator perbandingan di JavaScript?
- [ ] Hanya dalam operasi aritmetika.
- [x] Dalam pernyataan `if`, perulangan (*loops*), dan situasi lain yang membutuhkan keputusan berdasarkan kondisi.
- [ ] Hanya saat bekerja dengan string.
- [ ] Saat mendefinisikan fungsi.

### Dua operator manakah di JavaScript yang menghindari pemaksaan tipe data (type coercion)?
- [ ] `==` dan `!=`.
- [x] `===` dan `!==`.
- [ ] `>` dan `<`.
- [ ] `<=` dan `>=`.

---
[⬅️ Sebelumnya](1-what-are-booleans-and-how-do-they-work-with-equality-and-inequality-operators.md) | [Selanjutnya ➡️](../4-working-with-unary-and-bitwise-operators/1-what-are-unary-operators-and-how-do-they-work.md)
