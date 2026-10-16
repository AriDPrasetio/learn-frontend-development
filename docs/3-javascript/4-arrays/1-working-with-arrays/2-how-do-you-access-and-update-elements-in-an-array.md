# Bagaimana Anda Mengakses dan Memperbarui `Element` dalam Sebuah `Array`?

Pada pelajaran sebelumnya, Anda telah diperkenalkan dengan bekerja menggunakan `array` dan mengakses `element` yang berbeda dalam `array`. Berikut adalah sebuah pengingat bagaimana cara mengakses `element` kedua dalam sebuah `array`:

```javascript
const fruits = ["apple", "banana", "cherry"];

console.log(fruits[1]); // "banana"
```

Karena `array` `zero-based indexed`, `element` pertama akan berada pada `index` `0`, `element` kedua berada pada `index` `1`, dan seterusnya. Penting untuk dicatat bahwa jika Anda mencoba untuk mengakses sebuah `index` yang tidak ada di dalam `array`, JavaScript akan mengembalikan `undefined`.

```javascript
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[3]); // undefined
```

Dalam contoh ini, tidak ada `element` pada `index` `3` untuk `array` `fruits`. Jadi `log` akan menampilkan `undefined`. Sekarang, mari kita lihat bagaimana cara memperbarui `element` dalam sebuah `array`. Anda dapat memperbarui sebuah `element` dengan menugaskan sebuah nilai baru ke sebuah `index` spesifik.

```javascript
let fruits = ["apple", "banana", "cherry"];
fruits[1] = "blueberry";
console.log(fruits); // ["apple", "blueberry", "cherry"]
```

Dalam contoh ini, kita mengganti `banana` dengan `blueberry` pada `index` `1`. Metode ini memungkinkan Anda untuk mengubah `element` apa pun di dalam `array`, selama Anda mengetahui `index`-nya. Anda juga dapat menambahkan `element` baru ke sebuah `array` dengan menugaskan sebuah nilai pada sebuah `index` yang belum ada:

```javascript
let fruits = ["apple", "banana", "cherry"];
fruits[3] = "date";
console.log(fruits); // ["apple", "banana", "cherry", "date"]
```

> [!WARNING]
> Namun, berhati-hatilah ketika melakukan hal ini. Jika Anda menugaskan sebuah nilai pada sebuah `index` yang jauh lebih besar daripada panjang `array` saat ini, Anda akan membuat `element` `undefined` untuk `index` di antaranya, yang dapat mengarah pada perilaku yang tidak terduga. 

Seiring Anda terus bekerja dengan JavaScript, Anda akan menemukan bahwa metode-metode mengakses dan memperbarui `element` `array` ini fundamental bagi banyak tugas pemrograman. Baik Anda sedang membangun sebuah `todo list` yang sederhana atau memproses `data structure` yang kompleks, keterampilan-keterampilan ini akan sangat berharga.

## Pertanyaan (Questions)

Jika Anda memiliki sebuah `array` `let numbers = [10, 20, 30, 40, 50]`, apa yang akan dikembalikan oleh `numbers[2]`?

- `20`
- `30`
- `40`
- `2`

Apa yang terjadi jika Anda mencoba untuk mengakses sebuah `element` `array` pada sebuah `index` yang tidak ada?

- Ia melempar sebuah `error`.
- Ia mengembalikan `null`.
- Ia mengembalikan `undefined`.
- Ia mengembalikan `element` terakhir dari `array` tersebut.

Berapa nomor `index` yang digunakan untuk merepresentasikan `element` pertama dari sebuah `array`?

- `5`
- `2`
- `0`
- `1`

---
[⬅️ Sebelumnya](1-what-are-the-key-characteristics-of-javascript-arrays.md) | [Selanjutnya ➡️](3-how-do-you-add-and-remove-elements-from-the-beginning-and-end-of-an-array.md)

