# Bagaimana Cara Memeriksa Apakah Suatu Object Memiliki Property?

Dalam `JavaScript`, terdapat beberapa cara untuk memeriksa apakah suatu `object` memiliki `property` tertentu. Memahami metode-metode ini penting untuk bekerja secara efektif dengan `object`, terutama ketika Anda berhadapan dengan data dari sumber eksternal atau ketika Anda perlu memastikan `properties` tertentu ada sebelum menggunakannya.

Kita akan menjelajahi beberapa pendekatan umum: `method` `hasOwnProperty()`, `method` `Object.hasOwn()`, `in` `operator`, dan memeriksa terhadap `undefined`.

Mari kita mulai dengan `method` `hasOwnProperty()`. `Method` ini mengembalikan sebuah `boolean` yang menunjukkan apakah `object` tersebut memiliki `property` yang ditentukan sebagai `property` miliknya sendiri. Berikut adalah sebuah contoh:

```javascript
const person = {
  name: "Alice",
  age: 30
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job"));  // false
```

Dalam contoh ini, kita memiliki sebuah `object` bernama `person` dengan dua `properties`: `name` dan `age`. Untuk memeriksa apakah `name` adalah sebuah `property` dalam `object` `person`, kita menggunakan `method` `hasOwnProperty()`. Karena `name` adalah sebuah `property`, ia akan mengembalikan `true`. Namun ketika kita menggunakan `hasOwnProperty()` untuk memeriksa apakah `job` adalah sebuah `property`, ia akan mengembalikan `false` karena `job` tidak ada di dalam `object` tersebut.

`Object.hasOwn()` adalah cara modern yang direkomendasikan untuk memeriksa apakah sebuah `object` memiliki suatu `property` sebagai miliknya sendiri (bukan hasil warisan/*inherited*). Anggap ini sebagai versi yang ditingkatkan dan lebih aman dari `hasOwnProperty()`. Sintaksisnya adalah `Object.hasOwn(object, propertyName)` — Anda meneruskan `object` sebagai `argument` pertama dan nama `property` sebagai `argument` kedua.

Berikut adalah contoh dasarnya:

```javascript
const person = {
  name: "Alice",
  age: 30
};

console.log(Object.hasOwn(person, "name")); // true
console.log(Object.hasOwn(person, "job"));  // false
```

Dalam contoh ini, `Object.hasOwn(person, "name")` mengembalikan `true` karena `name` ada secara langsung pada `object` `person`. `Object.hasOwn(person, "job")` mengembalikan `false` karena `job` tidak pernah ditambahkan ke `object` tersebut.

Hal yang sangat penting untuk dipahami adalah bahwa `Object.hasOwn()` hanya memeriksa apakah `property` tersebut ada — ia tidak mempedulikan nilai (`value`) dari `property` tersebut. Ini berarti ia tetap mengembalikan `true` meskipun nilainya adalah `0`, `false`, `null`, atau `undefined`:

```javascript
const user = {
  username: "coder123",
  score: 0,
  isActive: false,
  nickname: null
};

// Object.hasOwn() dengan tepat melaporkan bahwa semuanya ada
console.log(Object.hasOwn(user, "score"));    // true  (nilai 0, tetapi property ada)
console.log(Object.hasOwn(user, "isActive")); // true  (nilai false, tetapi property ada)
console.log(Object.hasOwn(user, "nickname")); // true  (nilai null, tetapi property ada)
console.log(Object.hasOwn(user, "email"));    // false (property tidak pernah ditambahkan)

// Bahaya! Menggunakan if() secara langsung memberikan hasil keliru untuk falsy values
if (user.score) {
  console.log("Has score"); // Ini TIDAK akan tercetak meskipun score ada!
}

// Aman! Object.hasOwn() memberikan hasil yang tepat
if (Object.hasOwn(user, "score")) {
  console.log("Has score:", user.score); // Has score: 0
}
```

Cara lain untuk memeriksa keberadaan suatu `property` dalam sebuah `object` adalah menggunakan `in` `operator`. Seperti `hasOwnProperty()`, `in` `operator` akan mengembalikan `true` jika `property` tersebut ada pada `object`. Berikut cara Anda menggunakannya:

```javascript
const person = {
  name: "Bob",
  age: 25
};
console.log("name" in person); // true
```

Dalam contoh ini, `"name" in person` mengembalikan `true` karena `name` adalah sebuah `property` dari `person`.

Metode ketiga melibatkan pemeriksaan apakah suatu `property` bernilai `undefined`. Pendekatan ini bisa berguna, tetapi memiliki beberapa keterbatasan. Berikut adalah sebuah contoh:

```javascript
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020
};

console.log(car.brand !== undefined); // true
console.log(car.color !== undefined); // false
```

Dalam kode ini, kita memeriksa apakah `car.brand` dan `car.color` bukan `undefined`. Ini bekerja karena mengakses `property` yang tidak ada pada sebuah `object` akan mengembalikan `undefined`. Namun, metode ini dapat memberikan hasil negatif palsu (*false negatives*) jika suatu `property` secara eksplisit memang memiliki nilai `undefined`.

Dalam praktiknya, pilihan antara metode-metode ini sering kali bergantung pada kebutuhan spesifik dari kode Anda. Memahami perbedaan di antara mereka akan membantu Anda membuat pilihan yang tepat dalam berbagai skenario.

## Pertanyaan (Questions)

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let obj = {x: 0, y: null};
console.log(obj.hasOwnProperty("y"));
```

- [x] true
- [ ] false
- [ ] null
- [ ] undefined

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let person = {
    name: "Alice",
    age: 30
};

console.log("name" in person);
```

- [x] true
- [ ] false
- [ ] "Alice"
- [ ] undefined

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let obj = {a: undefined};
console.log(obj.a !== undefined);
```

- [ ] true
- [x] false
- [ ] undefined
- [ ] This will throw an error.

---
[⬅️ Sebelumnya](2-how-can-you-remove-properties-from-an-object.md) | [Selanjutnya ➡️](4-how-do-you-work-with-accessing-properties-from-nested-objects-and-arrays-in-objects.md)
