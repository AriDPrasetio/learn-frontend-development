# Bagaimana Anda Dapat Menggunakan `method` `String` dan `Array` untuk Membalikkan Sebuah `string`?

Membalikkan sebuah `string` adalah sebuah tugas pemrograman yang umum yang dapat diselesaikan di dalam JavaScript menggunakan sebuah kombinasi dari `method` `string` dan `array`. Prosesnya melibatkan tiga langkah utama:

- Memisahkan `string` tersebut ke dalam sebuah `array` karakter.
- Membalikkan `array` tersebut.
- Menggabungkan kembali karakter-karakter tersebut ke dalam sebuah `string`.

Mari kita eksplorasi masing-masing dari langkah-langkah ini menggunakan `method` `split()`, `reverse()`, dan `join()`.

Langkah pertama dalam membalikkan sebuah `string` adalah mengubahnya menjadi sebuah `array` dari karakter-karakter individual. Kita dapat melakukan ini menggunakan `method` `split()`. `Method` `split()` membagi sebuah `string` ke dalam sebuah `array` `substring` dan menetapkan di mana setiap pemisahan harus terjadi berdasarkan pada sebuah `separator` yang diberikan. Jika tidak ada `separator` yang diberikan, `method` tersebut mengembalikan sebuah `array` yang berisi `string` aslinya sebagai sebuah `element` tunggal. Contoh-contoh dari `separator` yang umum mencakup:

- Sebuah `string` kosong (`""`), yang memisahkan `string` tersebut ke dalam karakter-karakter individual.
- Sebuah spasi tunggal (`" "`), yang memisahkan `string` tersebut di mana pun spasi muncul.
- Sebuah tanda hubung (`"-"`), yang memisahkan `string` tersebut pada setiap tanda hubung.

Berikut adalah sebuah contoh dari menggunakan `method` `split()` untuk membuat sebuah `array` karakter:

```javascript
let str = "hello";
let charArray = str.split("");
console.log(charArray); // ["h", "e", "l", "l", "o"]
```

Dalam contoh ini, kita menggunakan `split("")` (dengan sebuah `string` kosong sebagai `argument`) untuk mengubah `string` `hello` menjadi sebuah `array` dari karakter-karakter individualnya. Begitu kita memiliki sebuah `array` karakter, kita dapat menggunakan `method` `reverse()` untuk membalikkan urutan `element` di dalam `array` tersebut.

`Method` `reverse()` adalah sebuah `method` `array` yang membalikkan `element` dari sebuah `array` `in place`. Ini berarti ia memodifikasi `array` aslinya alih-alih membuat yang baru. Begini cara kita dapat menggunakannya:

```javascript
let charArray = ["h", "e", "l", "l", "o"];
charArray.reverse();
console.log(charArray); // ["o", "l", "l", "e", "h"]
```

Dalam contoh ini, `reverse()` mengubah urutan dari `element` di dalam `charArray`, membalikkannya dari `["h", "e", "l", "l", "o"]` menjadi `["o", "l", "l", "e", "h"]`.

Langkah terakhir adalah mengubah `array` karakter yang telah dibalik kembali menjadi sebuah `string`. Kita dapat menyelesaikan ini menggunakan `method` `join()`. `Method` `join()` membuat dan mengembalikan sebuah `string` baru dengan `concatenating` semua `element` di dalam sebuah `array`, dipisahkan oleh sebuah `string` `separator` yang ditetapkan. Jika Anda ingin menggabungkan karakter-karakter tersebut tanpa `separator` apa pun, Anda dapat menggunakan sebuah `string` kosong sebagai `argument`. Berikut adalah sebuah contoh:

```javascript
let reversedArray = ["o", "l", "l", "e", "h"];
let reversedString = reversedArray.join("");
console.log(reversedString); // "olleh"
```

Dalam contoh ini, `join("")` (dengan sebuah `string` kosong dilewatkan kepadanya sebagai sebuah `argument`) menggabungkan semua karakter di dalam `array` tersebut menjadi sebuah `string` tunggal tanpa `separator` apa pun di antara mereka.

Ingatlah bahwa `string` di dalam JavaScript adalah `immutable`, yang berarti Anda tidak dapat membalikkan sebuah `string` secara langsung dengan memodifikasinya. Itulah sebabnya mengapa kita perlu mengubahnya menjadi sebuah `array`, membalikkan `array` tersebut, dan kemudian mengubahnya kembali menjadi sebuah `string`. Kombinasi dari `method` `string` dan `array` ini menyediakan sebuah cara yang kuat dan fleksibel untuk memanipulasi `string` di dalam JavaScript.

## Pertanyaan (Questions)

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let str = "coding";
let reversed = str.split("").reverse().join("");
console.log(reversed);
```

- `coding`
- `gnidoc`
- `["g", "n", "i", "d", "o", "c"]`
- `undefined`

Apa yang akan menjadi hasil dari `"hello".split("")`?

- `"hello"`
- `["hello"]`
- `["h", "e", "l", "l", "o"]`
- `"h,e,l,l,o"`

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let word = "hello";
let chars = word.split("");
chars.reverse();
console.log(chars.join("-"));
```

- `hello`
- `o-l-l-e-h`
- `olleh`
- `["o", "l", "l", "e", "h"]`

---
[⬅️ Sebelumnya](5-what-is-array-destructuring-and-how-does-it-work.md) | [Selanjutnya ➡️](7-review-working-with-arrays.md)

