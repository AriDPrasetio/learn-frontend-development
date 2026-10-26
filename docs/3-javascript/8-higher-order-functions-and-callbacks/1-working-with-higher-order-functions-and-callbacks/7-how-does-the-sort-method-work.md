# Bagaimana Cara Kerja Method Sort?

Ada banyak cara berbeda untuk mengurutkan data Anda dalam pemrograman. Dalam pelajaran ini, kita akan fokus pada `method` bawaan `sort` di dalam `JavaScript`.

`Method` `sort` digunakan untuk menyusun urutan elemen-elemen dari sebuah `array` dan mengembalikan referensi ke `array` yang telah diurutkan tersebut. Tidak ada salinan (*copy*) baru yang dibuat karena elemen-elemen tersebut diurutkan langsung di tempat (*in place*).

Berikut adalah sintaksis dasar untuk `method` `sort`:

```javascript
array.sort(compareFunction);
```

`compareFunction` adalah sebuah `parameter` opsional yang menentukan sebuah `function` yang mendefinisikan urutan pengurutan (*sort order*). Kita akan melihat nanti bagaimana cara menggunakan `compare function` saat mengurutkan angka.

## Mengurutkan String (Sorting Strings)

Dalam contoh pertama ini, kita memiliki sebuah `array` `string` dalam urutan acak:

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
```

Tujuan kita adalah mengurutkan `array` tersebut dalam urutan abjad (*alphabetical order*). Kita dapat melakukan ini dengan memanggil `method` `sort` pada `array` `fruits`:

```javascript
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]
```

Hasilnya adalah sebuah `array` buah-buahan yang terurut berdasarkan abjad, dimulai dengan buah `Apple`.

## Mengurutkan Angka (Sorting Numbers)

Dalam contoh berikutnya, kita ingin mengurutkan `array` angka berikut:

```javascript
const numbers = [414, 200, 5, 10, 3];
```

Jika kita mencoba menggunakan `method` `sort` secara langsung pada `array` `numbers` ini, kita akan mendapatkan hasil yang tidak diharapkan:

```javascript
const numbers = [414, 200, 5, 10, 3];
numbers.sort();

console.log(numbers); // [10, 200, 3, 414, 5]
```

Kita memperkirakan akan melihat hasil `[3, 5, 10, 200, 414]`, tetapi sebaliknya kita mendapatkan `[10, 200, 3, 414, 5]`.

Hal ini terjadi karena `method` `sort` mengonversi elemen-elemen menjadi `string` dan kemudian membandingkan urutan nilai unit kode UTF-16 (*UTF-16 code unit values*) miliknya.

Unit kode UTF-16 adalah nilai numerik yang mewakili karakter di dalam sebuah `string`. Contoh unit kode UTF-16 adalah angka `65`, `66`, dan `67` yang masing-masing mewakili karakter `A`, `B`, dan `C`.

Jadi, angka `200` muncul sebelum angka `3` di dalam `array`, karena `string` `"200"` muncul sebelum `string` `"3"` saat membandingkan unit kode UTF-16 miliknya.

Solusi untuk masalah ini adalah dengan menyediakan sebuah `compare function` ke dalam `method` `sort`.

Berikut adalah contoh cara mengurutkan `array` `numbers` menggunakan sebuah `compare function`:

```javascript
const numbers = [414, 200, 5, 10, 3];

numbers.sort((a, b) => a - b);

console.log(numbers); // [3, 5, 10, 200, 414]
```

`Parameter` `a` dan `b` adalah dua elemen yang sedang dibandingkan. `compare function` harus mengembalikan nilai negatif jika `a` harus berada sebelum `b`, nilai positif jika `a` harus berada setelah `b`, dan nol jika `a` dan `b` bernilai sama.

Perbandingan pertama adalah antara angka `414` dan `200`. Hasil dari `414 - 200` adalah `214`, yang merupakan nilai positif. Ini berarti bahwa `414` harus ditempatkan setelah `200` dalam `array` yang diurutkan.

Perbandingan berikutnya adalah antara angka `200` dan `5`. Hasil dari `200 - 5` adalah `195`, yang juga merupakan nilai positif. Ini berarti bahwa `200` harus berada setelah `5` dalam `array` yang diurutkan.

Kita mengulangi proses ini untuk seluruh elemen di dalam `array`, dan hasilnya adalah sebuah `array` angka yang terurut secara benar.

## Menangani Nilai undefined dan Slot Kosong (Handling undefined Values and Empty Slots)

Penting juga untuk memahami bagaimana `method` `sort` menangani nilai `undefined` dan slot kosong (*empty slots*) di dalam sebuah `array`.

Ketika `method` `sort` menemui nilai `undefined`, ia tidak meneruskan nilai tersebut ke `compare function`. Sebaliknya, nilai `undefined` secara otomatis dipindahkan ke bagian akhir dari `array`.

Berikut adalah contoh yang menunjukkan bagaimana `sort` menangani sebuah `array` dengan nilai `undefined`:

```javascript
const fruits = ["Banana", undefined, "Apple", "Mango"];
fruits.sort();

console.log(fruits); // ["Apple", "Banana", "Mango", undefined]
```

Perhatikan bahwa `undefined` ditempatkan di bagian akhir dari `array` yang telah diurutkan, setelah semua elemen lainnya.

Demikian pula, ketika `method` `sort` menemui sebuah slot kosong di dalam sebuah `sparse array`, ia mempertahankan slot kosong tersebut dan memindahkannya ke bagian paling akhir dari `array`. Jika nilai `undefined` dan slot kosong sama-sama ada, maka nilai `undefined` akan ditempatkan terlebih dahulu, diikuti oleh slot kosong di posisi paling akhir.

Berikut contoh yang mendemonstrasikan perilaku ini:

```javascript
const arr = [, undefined, "banana", "apple"];
arr.sort();

console.log(arr); // ["apple", "banana", undefined, ]
```

Dalam contoh ini, `string` `"apple"` dan `"banana"` diurutkan terlebih dahulu secara abjad. Kemudian nilai `undefined` ditempatkan setelahnya. Terakhir, slot kosong dipertahankan di posisi paling akhir dari `array`.

Meskipun ada banyak cara lain untuk mengurutkan data dalam pemrograman, `method` `sort` di `JavaScript` sangat berguna dan efisien dalam banyak kasus saat Anda perlu mengurutkan elemen-elemen di dalam sebuah `array`.

## Pertanyaan (Questions)

### Pertanyaan 1

Apa yang dilakukan oleh `method` `sort` dalam `JavaScript`?

- [ ] Membuat salinan dari `array` dan mengurutkan salinan tersebut.
- [x] Mengurutkan elemen-elemen dari sebuah `array` secara langsung di tempat (*in place*).
- [ ] Hanya mengurutkan angka.
- [ ] Mengurutkan elemen dalam urutan menurun (*descending*) secara *default*.

### Pertanyaan 2

Mengapa angka tidak terurut seperti yang diharapkan ketika menggunakan `method` `sort` tanpa sebuah `compare function`?

- [ ] `Method` `sort` tidak dapat mengurutkan angka.
- [x] Elemen-elemen dibandingkan sebagai `string` berdasarkan unit kode UTF-16 (*UTF-16 code units*).
- [ ] `Method` `sort` bersifat sensitif terhadap huruf besar/kecil (*case-sensitive*).
- [ ] `Method` ini hanya bekerja untuk `string`.

### Pertanyaan 3

Nilai apakah yang harus dikembalikan oleh sebuah `compare function` jika `a` harus berada setelah `b`?

- [ ] Nilai negatif.
- [ ] Nol.
- [x] Nilai positif.
- [ ] `undefined`

---
[⬅️ Sebelumnya](6-what-is-method-chaining-and-how-does-it-work.md) | [Selanjutnya ➡️](8-how-do-the-every-and-some-methods-work.md)
