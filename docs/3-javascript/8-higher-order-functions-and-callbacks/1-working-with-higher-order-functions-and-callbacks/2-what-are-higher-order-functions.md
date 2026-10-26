# Apa Itu Higher-Order Functions?

`Higher-order function` (fungsi tingkat tinggi) adalah konsep yang ampuh dalam `JavaScript` yang dapat meningkatkan kemampuan *coding* Anda secara signifikan dan membuat `code` Anda lebih fleksibel serta dapat digunakan kembali (*reusable*).

Pada intinya, sebuah `higher-order function` adalah sebuah `function` yang menerima satu atau lebih `function` sebagai `argument`, mengembalikan sebuah `function`, atau keduanya.

Untuk memahami `higher-order function`, mari kita pertimbangkan terlebih dahulu `function` sebagai warga kelas satu (*first-class citizens*) dalam `JavaScript`. Ini berarti bahwa `function` dapat diperlakukan seperti nilai lainnya – mereka dapat ditetapkan ke `variable`, diteruskan sebagai `argument` ke `function` lain, dan dikembalikan dari sebuah `function`. Fleksibilitas inilah yang memungkinkan terciptanya dan digunakannya `higher-order function`.

Salah satu kegunaan umum dari `higher-order function` adalah untuk mengabstraksikan operasi yang kompleks.

Sebagai contoh, Anda mungkin memiliki sebuah `function` yang melakukan operasi tertentu pada setiap elemen dari sebuah `array`. Alih-alih menulis `function` terpisah untuk operasi yang berbeda-beda, Anda dapat membuat sebuah `higher-order function` yang menerima operasi tersebut sebagai sebuah `argument`. Hal ini memungkinkan Anda untuk menggunakan kembali struktur `function` yang sama dengan perilaku yang berbeda.

Berikut adalah contoh untuk mengilustrasikan konsep ini:

```javascript
function operateOnArray(arr, operation) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(operation(arr[i]));
  }
  return result;
}

function double(x) {
  return x * 2;
}

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = operateOnArray(numbers, double);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
```

Dalam contoh ini, `operateOnArray` adalah sebuah `higher-order function`. Fungsi ini menerima sebuah `array` dan sebuah `function` (`operation`) sebagai `argument`. Kemudian ia menerapkan operasi tersebut pada setiap elemen dari `array`. Fungsi `double` diteruskan sebagai `argument` ke `operateOnArray`, mendemonstrasikan bagaimana `function` dapat digunakan sebagai nilai.

`Higher-order function` juga dapat mengembalikan `function`. Hal ini sangat berguna untuk membuat fungsi-fungsi khusus (*specialized functions*) berdasarkan fungsi yang lebih umum. Konsep ini sering disebut sebagai *function factories*. Berikut adalah contohnya:

```javascript
function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  }
}

let double = multiplyBy(2);
let triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

Dalam kasus ini, `multiplyBy` adalah sebuah `higher-order function` yang mengembalikan sebuah `function` baru. Fungsi baru ini dikhususkan berdasarkan `factor` yang diteruskan ke `multiplyBy`. Hal ini memungkinkan kita untuk membuat fungsi perkalian kustom dengan mudah.

`Higher-order function` bukan sekadar konsep teoritis – mereka digunakan secara luas dalam `JavaScript`.

Banyak `method` bawaan untuk `array` dalam `JavaScript`, seperti `map()`, `filter()`, dan `reduce()`, adalah `higher-order function`. `Method-method` ini menerima sebuah `function` sebagai `argument` dan menerapkannya pada elemen-elemen `array` dalam berbagai cara. Anda akan mempelajari lebih lanjut tentang `method-method` ini pada pelajaran mendatang.

Penggunaan `higher-order function` dapat menghasilkan `code` yang lebih deklaratif dan lebih mudah dipahami.

Alih-alih menjelaskan langkah demi langkah bagaimana menyelesaikan suatu tugas (pemrograman imperatif), `higher-order function` memungkinkan Anda menjelaskan apa yang ingin Anda capai (pemrograman deklaratif). Ini dapat membuat `code` Anda lebih mudah dibaca dan dipelihara.

Seiring Anda terus bekerja dengan `JavaScript`, Anda akan sering menemui dan menggunakan `higher-order function`. Mereka adalah bagian penting dari pemrograman fungsional (*functional programming*) dalam `JavaScript` dan sangat penting untuk menulis `code` yang bersih, efisien, dan fleksibel.

Memahami dan memanfaatkan `higher-order function` akan meningkatkan kemampuan Anda secara signifikan dalam menulis program `JavaScript` yang canggih dan elegan.

## Pertanyaan (Questions)

### Pertanyaan 1

Manakah dari pernyataan berikut yang paling tepat menggambarkan sebuah `higher-order function`?

- [ ] Sebuah `function` yang hanya bekerja dengan angka.
- [ ] Sebuah `function` yang membutuhkan waktu lama untuk dieksekusi.
- [x] Sebuah `function` yang menerima `function` lain sebagai `argument` atau mengembalikan sebuah `function`.
- [ ] Sebuah `function` yang hanya dapat dipanggil satu kali.

### Pertanyaan 2

Apa manfaat utama dari penggunaan `higher-order function`?

- [ ] Selalu membuat `code` berjalan lebih cepat.
- [x] Memungkinkan penulisan `code` yang lebih fleksibel dan dapat digunakan kembali (*reusable*).
- [ ] Mengurangi jumlah `variable` yang dibutuhkan dalam sebuah program.
- [ ] Menghilangkan kebutuhan akan `loop` dalam `JavaScript`.

### Pertanyaan 3

Dalam konteks `higher-order function`, apa artinya `function` merupakan "*first-class citizens*" dalam `JavaScript`?

- [ ] `Function` lebih penting dibandingkan tipe data lainnya.
- [ ] `Function` hanya dapat didefinisikan pada tingkat atas (*top level*) sebuah program.
- [x] `Function` dapat diperlakukan seperti nilai lainnya, termasuk diteruskan sebagai `argument`.
- [ ] `Function` secara otomatis memiliki performa lebih tinggi daripada `code` lainnya.

---
[⬅️ Sebelumnya](1-what-is-a-callback-function-and-how-does-it-work-with-the-foreach-method.md) | [Selanjutnya ➡️](3-what-is-the-map-method-and-how-does-it-work.md)
