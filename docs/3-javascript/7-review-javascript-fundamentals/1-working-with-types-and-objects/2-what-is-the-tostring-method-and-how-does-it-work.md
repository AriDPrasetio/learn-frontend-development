# Apa Itu Method toString(), dan Bagaimana Cara Kerjanya?

`Method` `toString()` adalah fitur fundamental dalam `JavaScript` yang mengonversi sebuah nilai ke representasi `string`-nya. Ini adalah `method` yang dapat Anda gunakan untuk `number`, `boolean`, `array`, dan `object`. Salah satu penggunaan paling umum dari `toString()` adalah untuk mengonversi sebuah `number` ke representasi `string`-nya. Berikut adalah contohnya:

```javascript
const num = 10;
console.log(num.toString()); // "10"
```

`Method` ini menerima sebuah `radix` opsional yang merupakan `number` dari `2` hingga `36`. `Radix` ini mewakili basis (*base*), seperti basis 2 untuk biner atau basis 8 untuk oktal. Jika `radix` tidak ditentukan, maka nilainya secara *default* adalah basis 10, yaitu desimal. Berikut adalah contoh memberikan `2` sebagai `argument` ke `method` `toString()`:

```javascript
const num = 10;
console.log(num.toString(2)); // "1010"
```

Hasilnya adalah `1010` yang merupakan representasi biner untuk angka desimal `10`.

Anda juga dapat menggunakan `method` `toString()` untuk mengonversi `array` dan `object` menjadi `string`. `Array` memiliki implementasi khusus dari `toString()` yang mengonversi setiap elemen menjadi sebuah `string` dan menggabungkannya dengan tanda koma. Berikut contohnya:

```javascript
const arr = [1, 2, 3];
console.log(arr.toString()); // "1,2,3"
```

Dalam contoh ini, semua elemen dari `array` digabungkan bersama untuk membentuk `string` `"1,2,3"`.

Ketika `method` `toString()` digunakan dengan `object`, hasilnya tidak akan berupa versi representasi teks dari `property` `object` tersebut:

```javascript
const person = {
  name: "John",
  age: 30,
  isStudent: true
};

console.log(person.toString()); // "[object Object]"
```

Dalam contoh ini, hasilnya adalah representasi `string` bawaan untuk `object`, yaitu `[object Object]`. Untuk mendapatkan versi representasi string dari `property` `object` `person`, Anda perlu menggunakan `JSON.stringify()`, yang akan Anda pelajari lebih lanjut di pelajaran mendatang.

Kesimpulannya, `method` `toString()` digunakan untuk mengonversi nilai menjadi `string`. Memahami cara kerjanya dengan berbagai tipe data (*data types*) yang berbeda dan cara menyesuaikannya untuk `object` buatan Anda sendiri dapat sangat meningkatkan kemampuan Anda dalam memanipulasi dan menampilkan data dalam aplikasi `JavaScript` Anda.

## Pertanyaan (Questions)

### Pertanyaan 1

Apakah output dari `code` berikut?

```javascript
let num = 5.7;
console.log(num.toString());
```

- [ ] `"5"`
- [x] `"5.7"`
- [ ] `5.7`
- [ ] `Error`

### Pertanyaan 2

Apakah output dari `code` berikut?

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.toString());
```

- [ ] `"[object Array]"`
- [x] `"1,2,3,4,5"`
- [ ] `"12345"`
- [ ] `Error`

### Pertanyaan 3

Apakah output dari `code` berikut?

```javascript
let obj = { name: "John", age: 30 };
console.log(obj.toString());
```

- [ ] `"{ name: 'John', age: 30 }"`
- [x] `"[object Object]"`
- [ ] `"John30"`
- [ ] `Error`

---
[⬅️ Sebelumnya](1-what-is-a-string-object-and-how-does-it-differ-from-string-primitive.md) | [Selanjutnya ➡️](3-what-is-the-number-constructor-and-how-does-it-work-for-type-coercion.md)
