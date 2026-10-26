# Apa Itu Constructor Number, dan Bagaimana Cara Kerjanya untuk Type Coercion?

`Constructor` `Number()` digunakan untuk membuat sebuah `number object`. `Number object` berisi beberapa `property` dan `method` yang bermanfaat seperti `isNaN` dan `method` `toFixed`. Berikut adalah contoh penggunaan `constructor` `Number()` dengan kata kunci `new`:

```javascript
const myNum = new Number("34");
console.log(typeof myNum); // "object"
```

Dalam contoh ini, kita meneruskan sebuah `string literal` ke dalam `constructor` `Number()` dan tipe kembaliannya (*return type*) bertipe `object`, bukan `string`.

Ketika `constructor` `Number()` dipanggil sebagai sebuah `function` tanpa kata kunci `new`, maka nilai kembaliannya (*return value*) akan berupa tipe `primitive` `number`. Sebagian besar waktu Anda akan menggunakan `constructor` `Number()` untuk mengonversi tipe data lain ke tipe data `number`. Berikut adalah contoh mengonversi sebuah `string` menjadi sebuah `number`:

```javascript
const myNum = Number("100");
console.log(myNum); // 100

console.log(typeof myNum); // number
```

Hal ini sangat membantu ketika Anda menerima input dari pengguna dan Anda perlu mengonversi input `string` tersebut menjadi sebuah `number` sehingga Anda dapat melakukan kalkulasi matematika.

Jika Anda mencoba memanggil `constructor` `Number()` menggunakan sebuah `empty string` (string kosong), maka hasilnya akan bernilai angka `0`:

```javascript
const num = Number("");
console.log(num); // 0
```

Hal ini terjadi karena `JavaScript` akan mencoba menguraikan (*parse*) `string` tersebut, dan karena string tersebut tidak berisi digit apa pun, hasilnya adalah nol.

Jika Anda mencoba memasukkan sebuah `string` dengan karakter acak, maka hasilnya adalah `NaN` atau "*Not a Number*":

```javascript
const num = Number("random");
console.log(num); // NaN
```

Saat bekerja dengan `boolean`, `true` mengembalikan `1` karena `true` dikonversi menjadi satu, dan `false` mengembalikan `0` karena `false` dikonversi menjadi nol:

```javascript
const boolTrue = Number(true);
const boolFalse = Number(false);

console.log(boolTrue); // 1
console.log(boolFalse); // 0
```

Jika Anda memasukkan `null`, hasilnya akan menjadi `0`, dan jika Anda memasukkan `undefined`, hasilnya adalah `NaN`:

```javascript
const undefinedNum = Number(undefined);
const nullNum = Number(null);

console.log(undefinedNum); // NaN
console.log(nullNum); // 0
```

Saat bekerja dengan `array`, ada beberapa hal yang perlu dipertimbangkan:

Sebuah `empty array` (array kosong) akan mengembalikan `0`. Sebuah `array` dengan satu angka tunggal akan mengembalikan angka tersebut. Sebuah `array` dengan banyak angka mengembalikan `NaN`. Dan sebuah `array` yang berisi `string` juga akan mengembalikan `NaN`:

```javascript
const emptyArr = Number([]);
const arrOneNum = Number([7]);
const arrMultiNum = Number([7, 36, 12]);
const arrStr = Number(["str1"]);
const arrMultiStr = Number(["str1", "str2"]);

console.log(emptyArr); // 0
console.log(arrOneNum); // 7
console.log(arrMultiNum); // NaN
console.log(arrStr); // NaN
console.log(arrMultiStr); // NaN
```

Saat bekerja dengan `object`, hasilnya selalu `NaN`:

```javascript
const obj1 = Number({});
const obj2 = Number({2: 2});
const obj3 = Number({key: "val"});
const obj4 = Number({key: true});

console.log(obj1); // NaN
console.log(obj2); // NaN
console.log(obj3); // NaN
console.log(obj4); // NaN
```

Kesimpulannya, Anda akan lebih sering menggunakan `constructor` `Number()` untuk konversi tipe data (*type conversion*) daripada untuk membuat sebuah `number` atau `number object`.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa tujuan dari `constructor` `Number` dalam `JavaScript`?

- [ ] Hanya membuat `string`.
- [x] Mengonversi tipe data lain ke `number` dan membuat nilai `number` baru.
- [ ] Digunakan untuk memanipulasi `array`.
- [ ] Melakukan konkatenasi `string`.

### Pertanyaan 2

Bagaimana cara Anda membuat sebuah `number object` menggunakan `constructor` `Number` dalam `JavaScript`?

- [ ] Menggunakan `method` `Number.toString()`.
- [x] Menginisialisasinya dengan kata kunci `new` dan memberikan sebuah angka sebagai `argument`.
- [ ] Mendeklarasikan sebuah `variable` dengan kata kunci `var`.
- [ ] Memanggil `Number.parseInt()` dengan sebuah nilai `string`.

### Pertanyaan 3

Manakah dari pernyataan berikut yang merupakan salah satu cara tepat bagaimana `JavaScript` menangani `array` saat mengonversinya menjadi `number` menggunakan `constructor` `Number`?

- [ ] `Empty array` mengembalikan `NaN`.
- [ ] `Array` dengan banyak angka mengonversi nilainya menjadi jumlah totalnya.
- [x] `Array` dengan angka tunggal mengonversi ke angka tersebut, sedangkan `empty array` mengembalikan `0`.
- [ ] `Array` dengan `string` mengonversi ke `NaN`.

---
[⬅️ Sebelumnya](2-what-is-the-tostring-method-and-how-does-it-work.md) | [Selanjutnya ➡️](../2-working-with-arrays-variables-and-naming-practices/1-what-are-some-common-practices-for-naming-variables-and-functions.md)
