# Apa Itu Kata Kunci var, dan Mengapa Tidak Lagi Disarankan untuk Menggunakannya?

Kata kunci `var` dalam `JavaScript` adalah salah satu cara awal untuk mendeklarasikan `variable`. Kata kunci ini telah menjadi bagian dari bahasa ini sejak awal mula kemunculannya dan selama bertahun-tahun tetap menjadi metode utama untuk membuat `variable`. Namun, seiring berkembangnya `JavaScript` dan para pengembang yang memperoleh lebih banyak pengalaman dengan bahasa ini, kelemahan tertentu dari penggunaan `var` mulai terlihat jelas, yang mengarah pada diperkenalkannya `let` dan `const` pada tahun 2015.

Ketika Anda mendeklarasikan sebuah `variable` dengan `var`, `variable` tersebut menjadi berlingkup fungsi (*function-scoped*) atau berlingkup global (*globally-scoped*). Ini berarti bahwa jika Anda mendeklarasikan sebuah `variable` di dalam sebuah `function` menggunakan `var`, `variable` tersebut hanya dapat diakses di dalam `function` itu. Namun jika Anda mendeklarasikannya di luar `function` mana pun, `variable` tersebut menjadi sebuah `global variable` yang dapat diakses di seluruh skrip Anda. Perilaku ini terkadang dapat menyebabkan hasil yang tidak diharapkan dan membuat `code` Anda lebih sulit dipahami.

Masalah lain dengan `var` adalah memungkinkan Anda mendeklarasikan ulang `variable` yang sama berkali-kali tanpa menghasilkan *error*. Hal ini dapat menyebabkan penimpaan nilai secara tidak sengaja (*accidental overwrites*) dan membuat proses *debugging* menjadi lebih sulit:

```javascript
var num = 5;
console.log(num); // 5

// Ini diizinkan dan tidak menghasilkan error
var num = 10;
console.log(num); // 10
```

Masalah paling signifikan dengan `var` adalah kurangnya cakupan blok (*block scoping*). `Variable` yang dideklarasikan dengan `var` di dalam sebuah blok seperti `statement` `if` atau `loop` `for` masih dapat diakses di luar blok tersebut:

```javascript
if (true) {
  var num = 5;
}
console.log(num); // 5
```

Perilaku ini dapat menyebabkan kebocoran variabel yang tidak disengaja (*unintended variable leaks*) dan membuat `code` Anda lebih rentan terhadap *bug*.

Karena masalah-masalah ini, pengembangan `JavaScript` modern sebagian besar telah beralih meninggalkan `var` dan memilih menggunakan `let` serta `const`. Kata kunci ini menyediakan *block scoping* yang lebih selaras dengan cara kerja cakupan (*scoping*) di banyak bahasa pemrograman lainnya.

Mereka juga tidak mengizinkan deklarasi ulang dalam `scope` yang sama, membantu mencegah penimpaan nilai secara tidak sengaja.

Meskipun `var` masih merupakan bagian dari `JavaScript` dan berfungsi di semua peramban (*browsers*), umumnya disarankan untuk menggunakan `let` dan `const` dalam pengembangan `JavaScript` modern. Keduanya menyediakan aturan cakupan yang jelas, membantu mencegah jebakan umum, dan membuat perilaku `code` Anda lebih mudah diprediksi.

## Pertanyaan (Questions)

### Pertanyaan 1

Apakah cakupan (*scope*) dari sebuah `variable` yang dideklarasikan dengan `var` di luar `function` mana pun?

- [ ] *Block scope*.
- [ ] *Function scope*.
- [x] *Global scope*.
- [ ] *Module scope*.

### Pertanyaan 2

Apakah output dari `code` berikut?

```javascript
var x = 10;

if (true) {
  var x = 20;
  console.log(x);
}

console.log(x);
```

- [ ] ```javascript
10
10
```
- [x] ```javascript
20
20
```
- [ ] ```javascript
10
20
```
- [ ] ```javascript
20
10
```

### Pertanyaan 3

Manakah dari berikut ini yang BUKAN merupakan alasan untuk menghindari penggunaan `var` dalam `JavaScript` modern?

- [ ] `var` mengizinkan deklarasi ulang `variable` dalam `scope` yang sama.
- [x] `var` tidak didukung di peramban modern.
- [ ] `Variable` `var` berlingkup fungsi (*function-scoped*), bukan berlingkup blok (*block-scoped*).
- [ ] `Variable` `var` mengalami *hoisting*.

---
[⬅️ Sebelumnya](../3-working-with-code-quality-and-execution-concepts/3-what-are-closures-and-how-do-they-work.md) | [Selanjutnya ➡️](2-what-is-hoisting.md)
