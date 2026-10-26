# Apa Itu For...in Loop, dan Kapan Anda Harus Menggunakannya?

## Apa Itu `for...in` Loop?

Sebuah `for...in` loop paling baik digunakan ketika Anda perlu melakukan perulangan terhadap `properties` dari sebuah `object`. `Loop` ini akan mengulang ke seluruh `enumerable properties` dari sebuah `object`, termasuk `inherited properties` dan `non-numeric properties`.

Sebuah `inherited property` adalah `property` yang diwarisi dari `prototype chain` milik `object`. Sebuah `non-numeric property` adalah `property` yang bukan berupa angka (`number`) atau `string` yang dapat dikonversi menjadi angka.

## Sintaks `for...in` Loop

Berikut adalah sintaks dasar dari sebuah `for...in` loop:

```javascript
for (variable in object) {
  // code block to be executed
}
```

`Variable` dalam contoh mewakili `property` saat ini dari `object` yang sedang diulang.

## Melakukan Perulangan pada Property Object

Mari kita lihat beberapa contoh agar Anda dapat lebih memahami cara kerja `for...in` loop.

Pada contoh pertama ini kita memiliki sebuah `object` `fruit` dan ingin mengulang setiap `property` serta mencatat nilainya ke `console`.

```javascript
const fruit = {
  name: 'apple',
  color: 'red',
  price: 0.99
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}
```

`Variable` `prop` mewakili `property` saat ini dari `object`. `fruit[prop]` digunakan untuk mengakses nilai dari setiap `property`.

Untuk `iteration` pertama, `prop` akan bernilai `name`. Untuk `iteration` kedua, `prop` akan bernilai `color`, dan seterusnya.

Hasil yang dicatat ke `console` akan berupa `apple`, `red`, dan `0.99`.

## Melakukan Perulangan pada Nested Object

Pada contoh kedua ini, kita memiliki sebuah `nested object` dan ingin melakukan perulangan pada setiap `property` serta mencatat nilainya ke `console`.

```javascript
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

for (const prop in person) {
  console.log(person[prop]);
}
```

`Property` `address` adalah sebuah `object` itu sendiri. `for...in` loop juga akan mengulang `properties` dari `object` `person` dan mencatat keseluruhan `object` `address` ke `console`.

Berikut adalah tampilan hasilnya di dalam `console`:

```text
John
30
{ street: '123 Main St', city: 'Anytown', state: 'CA' }
```

## Bersarang (Nesting) `for...in` Loops

Jika Anda ingin melakukan perulangan pada `properties` dari `object` `address`, Anda dapat menyarangkan (`nest`) `for...in` loop lainnya di dalam `loop` pertama.

```javascript
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

function isObject(obj) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

for (const prop in person) {
  if (isObject(person[prop])) {
    for (const nestedProp in person[prop]) {
      console.log(person[prop][nestedProp]);
    }
  } else {
    console.log(person[prop]);
  }
}
```

Dalam contoh ini, kita memiliki sebuah `function` kustom `isObject` yang memeriksa apakah nilainya adalah sebuah `object`.

`Method` `Array.isArray` digunakan untuk memeriksa apakah nilainya adalah sebuah `array`. Dengan menempatkan operator logika NOT (`!`) di depan `method` tersebut, kita memeriksa apakah nilainya bukan sebuah `array`.

Alasan mengapa kita tidak bisa hanya menggunakan `typeof` sama dengan `'object'` adalah karena `arrays` juga dianggap sebagai `objects` dalam `JavaScript`. Kita ingin mengecualikan `arrays` dari pemeriksaan tersebut.

Selain itu, karena adanya *bug* historis dalam `JavaScript`, `typeof null` mengembalikan `'object'`. Jadi kita juga ingin mengecualikan nilai `null` dari pemeriksaan.

Jika `condition` bernilai `true`, kita menyarangkan `for...in` loop lain yang akan mengulang `properties` dari `nested object` dan mencatat nilainya ke `console`.

`Variable` `nestedProp` mewakili `property` saat ini dari `nested object`.

Berikut adalah tampilan hasil yang telah dimodifikasi di dalam `console`:

```text
"John"
30
"123 Main St"
"Anytown"
"CA"
```

## Kapan Menggunakan `for...in` Loop

Sebuah `for...in` loop berguna ketika Anda perlu melakukan perulangan terhadap `properties` dari sebuah `object`.

Tidak disarankan menggunakan `for...in` loop untuk melakukan perulangan pada elemen-elemen dari sebuah `array`. Sebaliknya, gunakan `for...of` loop atau `array methods` lainnya seperti `forEach`, `map`, `filter`, dan `reduce`, yang akan Anda pelajari dalam pelajaran-pelajaran mendatang.

## Pertanyaan (Questions)

### Pertanyaan 1

Apakah *output* dari `code` berikut?

```javascript
const fruit = {
  name: 'apple',
  color: 'red',
  price: 0.99
};

for (const prop in fruit) {
  console.log(fruit[prop]);
}
```

- [ ] 
  ```text
  apple
  apple
  apple
  ```
- [ ] 
  ```text
  name
  color
  price
  ```
- [x] 
  ```text
  apple
  red
  0.99
  ```
- [ ] 
  ```text
  fruit
  fruit
  fruit
  ```

### Pertanyaan 2

Mengapa umumnya tidak disarankan menggunakan `for...in` loop untuk melakukan iterasi terhadap elemen-elemen sebuah `array`?

- [ ] `for...in` hanya mengulang `array methods`, bukan elemen-elemennya.
- [x] `for...in` mengulang ke seluruh `enumerable properties`, termasuk `inherited properties` dan `non-numeric properties`, yang dapat menyebabkan hasil yang tidak diharapkan.
- [ ] `for...in` loops lebih lambat dibandingkan metode iterasi `array` lainnya.
- [ ] `for...in` tidak dapat menangani `arrays` dengan indeks non-numerik.

### Pertanyaan 3

Mengapa fungsi `isObject` diperlukan dalam contoh `nested loop`?

- [ ] Untuk memeriksa apakah nilainya adalah sebuah `string`.
- [x] Untuk memastikan bahwa nilainya bukan sebuah `array` maupun `null`.
- [ ] Untuk memverifikasi bahwa nilainya adalah sebuah *integer*.
- [ ] Untuk mengonversi nilainya menjadi sebuah `object`.

---
[⬅️ Sebelumnya](2-how-does-the-for-of-loop-work-and-when-should-you-use-it.md) | [Selanjutnya ➡️](4-what-is-a-while-loop-and-how-does-it-differ-from-the-do-while-loop.md)
