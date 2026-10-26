# Bagaimana Cara Kerja For...of Loop, dan Kapan Anda Harus Menggunakannya?

Sebuah `for...of` loop digunakan ketika Anda perlu melakukan perulangan (`loop`) terhadap nilai-nilai dari sebuah `iterable`. Contoh dari `iterables` adalah `arrays` dan `strings`.

Berikut adalah sintaks dasar untuk sebuah `for...of` loop:

```javascript
for (variable of iterable) {
  // code block to be executed
}
```

`Variable` dalam contoh tersebut mewakili nilai saat ini dari `iterable` yang sedang diulang.

Jika Anda memiliki sebuah `array` berisi angka (`numbers`), `variable` tersebut akan menjadi angka saat ini di dalam `array`. Jika Anda memiliki sebuah `string`, `variable` tersebut akan menjadi karakter saat ini di dalam `string`.

Mari kita lihat beberapa contoh agar Anda dapat lebih memahami cara kerja `for...of` loop.

Pada contoh pertama ini kita memiliki sebuah `array` angka dan kita ingin melakukan perulangan terhadap setiap angka serta mencatatnya ke `console`.

```javascript
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}
```

Kita telah membuat sebuah `variable` bernama `num` yang akan mewakili angka saat ini di dalam `array`. Untuk `iteration` 1, `num` akan bernilai `1`, untuk `iteration` 2, `num` akan bernilai `2`, dan seterusnya.

Di dalam `loop`, kita mencatat angka saat ini ke `console`.

Berikut adalah contoh lain di mana kita memiliki sebuah `string` dan ingin melakukan perulangan terhadap setiap karakter serta mencatatnya ke `console`.

```javascript
const str = 'freeCodeCamp';

for (let char of str) {
  console.log(char);
}
```

Dalam contoh ini, kita telah membuat sebuah `variable` bernama `char` yang akan mewakili karakter saat ini di dalam `string`.

Untuk setiap `iteration`, `loop` akan mencatat karakter saat ini ke `console`.

Penting untuk dicatat bahwa Anda dapat menggunakan `let`, atau `const` saat mendeklarasikan `variable` di dalam sebuah `for...of` loop.

Namun, jika Anda akan menggunakan `const`, pastikan nilai dari `variable` tersebut tidak berubah di dalam `loop`. Jika nilainya diubah, Anda akan mendapatkan pesan kesalahan (*error*).

Berikut adalah contoh penggunaan `const` yang menghasilkan kesalahan (*error*):

```javascript
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
  num = num + 1; // Ini akan menyebabkan error
}
```

Dalam contoh ini, kita mencoba mengubah nilai `num` di dalam `loop`. Karena kita mendeklarasikan `num` dengan `const`, kita akan mendapatkan sebuah *error*. Jadi, jika Anda perlu mengubah nilai `variable` di dalam `loop`, gunakanlah `let`.

Mari kita lihat satu contoh terakhir yang berurusan dengan sebuah `array of objects`.

```javascript
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Jim', age: 40 }
];

for (const person of people) {
  console.log(`${person.name} is ${person.age} years old`);
}
```

Dalam contoh ini, kita memiliki sebuah `array of objects` bernama `people`. Setiap `object` memiliki `property` `name` dan `age`.

Saat kita melakukan perulangan melewati `array`, kita membuat sebuah `variable` bernama `person` yang akan mewakili `object` saat ini di dalam `array`.

Di dalam `loop`, kita menampilkan pesan ke `console`.

Pesan pertama akan berupa `John is 30 years old`, pesan kedua berupa `Jane is 25 years old`, dan pesan ketiga berupa `Jim is 40 years old`.

`for...of` loops sangat berguna ketika Anda perlu melakukan perulangan terhadap nilai dari sebuah `iterable` seperti `array` atau `string`. Mereka juga mudah dibaca dan dapat membuat `code` Anda lebih ringkas.

## Pertanyaan (Questions)

### Pertanyaan 1

Apakah *output* dari `code` berikut?

```javascript
const colors = ['red', 'green', 'blue'];

for (const color of colors) {
  console.log(color);
}
```

- [x] 
  ```text
  red
  green
  blue
  ```
- [ ] 
  ```text
  red
  red
  red
  ```
- [ ] 
  ```text
  color
  color
  color
  ```
- [ ] 
  ```text
  blue
  blue
  red
  red
  green
  green
  ```

### Pertanyaan 2

Apa yang terjadi jika Anda mencoba menetapkan kembali (*reassign*) suatu nilai ke `variable` yang dideklarasikan dengan `const` di dalam sebuah `for...of` loop?

- [ ] Nilai berhasil ditetapkan kembali (*reassigned*).
- [ ] `Loop` akan melompati `iteration` di mana penetapan kembali terjadi.
- [x] Sebuah *error* akan terjadi.
- [ ] `Loop` akan langsung dihentikan.

### Pertanyaan 3

Dalam cuplikan `code` berikut, apa yang dicatat ke `console`?

```javascript
const fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits) {
  console.log(fruit.toUpperCase());
}
```

- [ ] 
  ```text
  APPLE
  APPLE
  APPLE
  ```
- [ ] 
  ```text
  apple
  banana
  cherry
  ```
- [x] 
  ```text
  APPLE
  BANANA
  CHERRY
  ```
- [ ] 
  ```text
  FRUIT
  FRUIT
  FRUIT
  ```

---
[⬅️ Sebelumnya](1-how-do-loops-and-iteration-work-in-javascript.md) | [Selanjutnya ➡️](3-what-is-the-for-in-loop-and-when-should-you-use-it.md)
