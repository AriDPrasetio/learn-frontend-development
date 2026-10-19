# Apa Itu Optional Chaining Operator, dan Bagaimana Cara Kerjanya?

`Optional chaining operator` (`?.`) adalah alat yang sangat berguna dalam `JavaScript` yang memungkinkan Anda mengakses `properties` dari suatu `object` atau memanggil `methods` dengan aman tanpa perlu khawatir apakah mereka ada atau tidak. Ini seperti jaring pengaman saat bekerja dengan `objects` yang mungkin memiliki bagian yang hilang.

```javascript
const person = {
  name: "Alice",
  age: 30
};

console.log(person.name); // "Alice"
console.log(person.job);  // undefined
```

Dalam contoh ini, `person.name` ada, sehingga ia mencatat "Alice". Tetapi `person.job` tidak ada, sehingga ia memberikan kita `undefined`.

Sekarang, katakanlah kita ingin mengakses sebuah `property` dari suatu `object` yang mungkin tidak ada:

```javascript
const person = {
  name: "Alice",
  age: 30
};

console.log(person.address.street); // Ini akan memicu error!
```

Contoh ini akan memicu pesan kesalahan `Uncaught TypeError`. Karena `person.address` bernilai `undefined`, kita tidak dapat mengakses `property` `street`. Di sinilah `optional chaining operator` menjadi sangat berguna. Berikut adalah contoh penggunaan `optional chaining operator`:

```javascript
const user = {
  name: "John",
  profile: {
    email: "john@example.com",
    address: {
      street: "123 Main St",
      city: "Somewhere"
    }
  }
};

console.log(user?.profile?.address?.street); // "123 Main St"
console.log(user?.profile?.phone?.number);   // undefined
```

Dengan menggunakan `optional chaining operator`, kita memberi tahu `JavaScript` untuk hanya melanjutkan operasi jika `object` (atau nilai sebelum tanda `?.`) memang ada dan tidak bernilai `null` atau `undefined`.

Jika nilai sebelum tanda `?.` adalah `null` atau `undefined`, `JavaScript` akan langsung mengembalikan `undefined` daripada mencoba melanjutkan operasi dan memicu *error*.

Ingatlah, `optional chaining operator` paling berguna ketika Anda tidak yakin apakah sebuah `property` atau `method` benar-benar ada. Ini membantu mencegah *error* dan membuat kode Anda jauh lebih tangguh (*robust*).

## Pertanyaan (Questions)

Apa yang dilakukan oleh `optional chaining operator` (`?.`) dalam `JavaScript`?

- [ ] It assigns a default value when a property is missing.
- [ ] It prevents undefined values from appearing in objects.
- [x] It safely accesses nested properties and returns undefined instead of throwing an error if a value is missing.
- [ ] It forces JavaScript to evaluate missing properties even if they don't exist.

Apa yang akan menjadi `output` dari kode berikut?

```javascript
const person = {
  name: "Alice",
  age: 30
};

console.log(person.address.street);
```

- [ ] undefined
- [ ] street
- [ ] {}
- [x] A TypeError is thrown because person.address is undefined.

Apa yang akan menjadi `output` dari kode berikut?

```javascript
const user = {
  name: "John",
  profile: {
    email: "john@example.com",
    "home address": {
      street: "123 Main St",
      city: "Somewhere"
    }
  }
};

console.log(user?.profile?.address?.street);
```

- [x] undefined
- [ ] "123 Main St"
- [ ] null
- [ ] A TypeError is thrown.

---
[⬅️ Sebelumnya](../2-working-with-json/2-how-do-json-parse-and-json-stringify-work.md) | [Selanjutnya ➡️](2-what-is-object-destructuring-and-how-does-it-work.md)
