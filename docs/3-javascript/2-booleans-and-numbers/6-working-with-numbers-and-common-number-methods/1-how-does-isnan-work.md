# Bagaimana Cara Kerja isNaN?

Di JavaScript, `NaN` adalah singkatan dari "Not a Number". Ini adalah nilai khusus yang merepresentasikan hasil numerik yang tidak dapat direpresentasikan atau tidak terdefinisi. `NaN` adalah properti dari objek global (*global object*), dan ini juga dianggap sebagai sebuah tipe angka (`number`) di JavaScript, yang mungkin tampak berlawanan dengan intuisi pada awalnya.

`NaN` biasanya merupakan hasil dari operasi yang seharusnya mengembalikan angka tetapi tidak dapat menghasilkan nilai numerik yang bermakna. Sebagai contoh:

```javascript
let result = 0 / 0;
console.log(result); // NaN
```

Dalam kasus ini, membagi nol dengan nol tidak terdefinisi secara matematis, sehingga JavaScript mengembalikan `NaN`. Salah satu sifat aneh dari `NaN` adalah ia tidak sama dengan apa pun, termasuk dirinya sendiri:

```javascript
console.log(NaN === NaN); // false
```

Perilaku unik ini membuatnya menantang untuk memeriksa apakah suatu nilai adalah `NaN` menggunakan operator perbandingan standar. Untuk mengatasi hal ini, JavaScript menyediakan fungsi `isNaN()`. Properti fungsi `isNaN()` digunakan untuk menentukan apakah suatu nilai adalah `NaN` atau bukan. Namun, penting untuk memahami cara kerja `isNaN()`, karena terkadang fungsi ini dapat menghasilkan hasil yang tidak terduga. Berikut adalah perilaku `isNaN()`:

```javascript
console.log(isNaN(NaN));       // true
console.log(isNaN(undefined)); // true
console.log(isNaN({}));        // true

console.log(isNaN(true));      // false
console.log(isNaN(null));      // false
console.log(isNaN(37));        // false

console.log(isNaN("37"));      // false: "37" dikonversi ke 37
console.log(isNaN("37.37"));   // false: "37.37" dikonversi ke 37.37
console.log(isNaN(""));        // false: string kosong dikonversi ke 0
console.log(isNaN(" "));       // false: string dengan spasi dikonversi ke 0

console.log(isNaN("blabla"));  // true: "blabla" bukan angka
```

Seperti yang Anda lihat, `isNaN()` pertama-tama mencoba mengonversi parameter menjadi sebuah angka. Jika tidak dapat dikonversi, fungsi ini mengembalikan `true`. Perilaku ini dapat menyebabkan beberapa hasil yang mengejutkan, terutama saat berhadapan dengan string yang dapat dipaksa (*coerced*) menjadi angka.

Karena potensi inkonsistensi ini, ES6 (edisi keenam JavaScript yang dirilis pada tahun 2015) memperkenalkan `Number.isNaN()`. *Method* ini tidak mencoba mengonversi parameter menjadi angka sebelum mengujinya. Ini hanya mengembalikan `true` jika nilainya tepat `NaN`:

```javascript
console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN(Number.NaN)); // true
console.log(Number.isNaN(0 / 0));      // true

console.log(Number.isNaN("NaN"));      // false
console.log(Number.isNaN(undefined));  // false
console.log(Number.isNaN({}));         // false
console.log(Number.isNaN("blabla"));   // false
```

`Number.isNaN()` menyediakan cara yang lebih andal untuk memeriksa nilai `NaN`, terutama dalam kasus-kasus di mana pemaksaan tipe data (*type coercion*) dapat menyebabkan hasil tak terduga dengan fungsi global `isNaN()`. Dalam praktiknya, saat berurusan dengan operasi numerik atau masukan pengguna yang seharusnya berupa angka, sering kali perlu memeriksa `NaN` untuk menangani kesalahan atau masukan yang tidak terduga secara baik (*gracefully*). Sebagai contoh:

```javascript
let a = 0;
let b = 0;
let result = a / b;

if (Number.isNaN(result)) {
  result = "Error: Division resulted in NaN";
}

console.log(result); // "Error: Division resulted in NaN"
```

Dalam contoh ini, kita menggunakan `Number.isNaN()` untuk menangkap kasus di mana operasi pembagian menghasilkan `NaN`, memungkinkan kita menangani skenario ini dengan tepat. Memahami `NaN` dan cara memeriksanya dengan benar sangat penting untuk menulis kode JavaScript yang tangguh, terutama saat berurusan dengan operasi matematika atau mem-parsing masukan pengguna.

---

## Pertanyaan

### Apa keluaran dari kode berikut?
```javascript
console.log(isNaN("123"));
```
- [ ] `true`
- [x] `false`
- [ ] `undefined`
- [ ] `NaN`

### Manakah dari berikut ini yang memeriksa dengan benar apakah suatu nilai tepat NaN?
- [ ] `value === NaN`
- [ ] `isNaN(value)`
- [x] `Number.isNaN(value)`
- [ ] `value.isNaN()`

### Apa hasil dari NaN === NaN?
- [ ] `true`
- [x] `false`
- [ ] `undefined`
- [ ] `Error`

---
[⬅️ Sebelumnya](../5-working-with-conditional-logic-and-math-methods/3-what-is-the-math-object-in-javascript-and-what-are-some-common-methods.md) | [Selanjutnya ➡️](2-how-do-the-parsefloat-and-parseint-methods-work.md)
