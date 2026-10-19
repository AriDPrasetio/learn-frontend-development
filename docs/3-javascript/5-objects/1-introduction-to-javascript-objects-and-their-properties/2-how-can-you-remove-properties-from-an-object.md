# Bagaimana Cara Menghapus Property dari Sebuah Object?

Terdapat beberapa cara untuk menghapus `properties` dari sebuah `object`, dengan `delete` `operator` menjadi metode yang paling mudah dan paling umum digunakan.

Saat Anda menggunakan `delete`, `operator` ini akan menghapus `property` yang dipilih dari `object` tersebut. Berikut adalah contoh cara menggunakan `delete` `operator`:

```javascript
const person = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};

delete person.job;

console.log(person.job); // undefined
```

Dalam contoh ini, kita memulai dengan sebuah `object` `person` yang memiliki tiga `properties`: `name`, `age`, dan `job`. Kemudian, kita menggunakan `delete` `operator` untuk menghapus `property` `job`. Setelah penghapusan, `object` `person` tidak lagi memiliki `property` `job`.

Cara lain untuk menghapus `properties` adalah dengan menggunakan `destructuring assignment` bersama `rest parameters`. Pendekatan ini sebenarnya tidak menghapus `property` secara langsung di tempat, melainkan membuat sebuah `object` baru tanpa `properties` yang ditentukan:

```javascript
const person = {
  name: "Bob",
  age: 25,
  job: "Designer",
  city: "New York"
};

const { job, city, ...remainingProperties } = person;

// { name: "Bob", age: 25 }
console.log(remainingProperties);
```

Dalam contoh ini, kita menggunakan `destructuring` untuk mengekstrak `job` dan `city` dari `object` `person`, lalu mengumpulkan sisa `properties` ke dalam sebuah `object` baru bernama `remainingProperties`. Ini menghasilkan sebuah `object` baru tanpa `properties` `job` dan `city`.

Memahami cara menghapus `properties` dari `object` merupakan keterampilan penting dalam pemrograman `JavaScript`. Ini memungkinkan Anda memanipulasi `object` secara dinamis dan membersihkan data yang tidak lagi diperlukan.

## Pertanyaan (Questions)

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let obj = {a: 1, b: 2, c: 3};
delete obj.b;
console.log(obj);
```

- [x] `{a: 1, c: 3}`
- [ ] `{a: 1, b: undefined, c: 3}`
- [ ] `{a: 1, b: 2, c: 3}`
- [ ] This will throw an error.

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020
};

delete car.year;
console.log(car.year);
```

- [ ] `2020`
- [x] `undefined`
- [ ] `null`
- [ ] This will throw an error.

`Operator` manakah yang umumnya digunakan untuk menghapus `properties` dari sebuah `object` dalam `JavaScript`?

- [ ] remove
- [x] delete
- [ ] erase
- [ ] clear

---
[⬅️ Sebelumnya](1-what-is-an-object-in-javascript-and-how-can-you-access-properties-from-an-object.md) | [Selanjutnya ➡️](3-how-to-check-if-an-object-has-a-property.md)
