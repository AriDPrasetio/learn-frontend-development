# Review: JavaScript Objects

Dokumen review ini merangkum seluruh konsep penting, sintaksis, dan teknik manipulasi `object` yang dipelajari pada modul **Objects**.

---

## Dasar-Dasar Object (Object Basics)

- **Definisi**: Sebuah `object` adalah struktur data yang tersusun dari `properties`. Sebuah `property` terdiri dari sebuah `key` dan sebuah `value`.
- **Mengakses Data**: Untuk mengakses data dari sebuah `object`, Anda dapat menggunakan `dot notation` atau `bracket notation`.

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

console.log(person.name);    // Alice
console.log(person["name"]); // Alice
```

- **Menetapkan Property**: Untuk menetapkan sebuah `property` pada `object` yang sudah ada, Anda dapat menggunakan `dot notation` atau `bracket notation` bersama dengan operator penugasan (`assignment operator` `=`).

```javascript
const person = {
  name: "Alice",
  age: 30
};

person.job = "Engineer";
person["hobby"] = "Knitting";
console.log(person); // {name: 'Alice', age: 30, job: 'Engineer', hobby: 'Knitting'}
```

---

## Menghapus Property dari Sebuah Object (Removing Properties From an Object)

- **Operator `delete`**: `Operator` ini digunakan untuk menghapus sebuah `property` dari suatu `object`.

```javascript
const person = {
  name: "Alice",
  age: 30,
  job: "Engineer"
};

delete person.job;

console.log(person.job); // undefined
```

---

## Memeriksa Apakah Suatu Object Memiliki Property (Checking if an Object has a Property)

- **Method `hasOwnProperty()`**: `Method` ini mengembalikan sebuah `boolean` yang menunjukkan apakah `object` tersebut memiliki `property` yang ditentukan sebagai `property` miliknya sendiri.

```javascript
const person = {
  name: "Alice",
  age: 30
};

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("job"));  // false
```

- **Method `Object.hasOwn()`**: Ini adalah cara modern yang direkomendasikan untuk memeriksa apakah sebuah `object` memiliki suatu `property` sebagai miliknya sendiri (bukan hasil pewarisan). Sintaksisnya adalah `Object.hasOwn(object, propertyName)`. `Method` ini mengembalikan `true` jika `property` tersebut ada pada `object` dan `false` jika tidak, terlepas dari apa pun nilai `property` tersebut. Hal ini menjadikannya lebih aman daripada `hasOwnProperty()` dan lebih dapat diandalkan dibandingkan pemeriksaan `if (obj.prop)` saat nilainya bernilai `0`, `false`, `null`, atau `undefined`.

```javascript
const person = {
  name: "Alice",
  age: 30
};

console.log(Object.hasOwn(person, "name")); // true
console.log(Object.hasOwn(person, "job"));  // false
```

Berikut adalah contoh lebih mendalam yang menunjukkan mengapa `Object.hasOwn()` lebih andal dibandingkan memeriksa nilainya secara langsung:

```javascript
const settings = {
  darkMode: false,
  fontSize: 0,
  language: null
};

// Object.hasOwn() dengan benar mendeteksi bahwa properties ini ada
console.log(Object.hasOwn(settings, "darkMode")); // true (nilai false, tetapi property ada)
console.log(Object.hasOwn(settings, "fontSize")); // true (nilai 0, tetapi property ada)
console.log(Object.hasOwn(settings, "theme"));    // false (property tidak pernah ditambahkan)

// Menggunakan if() secara langsung tidak aman untuk falsy values!
if (settings.darkMode) {
  console.log("Dark mode on"); // TIDAK tercetak — menyesatkan!
}

// Object.hasOwn() adalah cara yang aman
if (Object.hasOwn(settings, "darkMode")) {
  console.log("darkMode exists, value is:", settings.darkMode); // darkMode exists, value is: false
}
```

- **Operator `in`**: `Operator` ini akan mengembalikan `true` jika `property` tersebut ada di dalam `object`.

```javascript
const person = {
  name: "Bob",
  age: 25
};

console.log("name" in person); // true
```

---

## Mengakses Property dari Nested Object (Accessing Properties From Nested Objects)

- **Akses Data Berantai**: Mengakses `properties` dari `nested objects` melibatkan penggunaan `dot notation` atau `bracket notation`, mirip seperti mengakses `properties` dari `objects` sederhana. Namun, Anda perlu merangkai pengakses ini untuk menelusuri ke dalam struktur bersarang.

```javascript
const person = {
  name: "Alice",
  age: 30,
  contact: {
    email: "alice@example.com",
    phone: {
      home: "123-456-7890",
      work: "098-765-4321"
    }
  }
};

console.log(person.contact.phone.work); // "098-765-4321"
```

---

## Tipe Data Primitif dan Non-Primitif (Primitive and Non-Primitive Data Types)

- **Primitive Data Types**: Tipe data ini mencakup `numbers`, `strings`, `booleans`, `null`, `undefined`, dan `symbols`. Tipe-tipe ini disebut "primitif" karena merepresentasikan nilai tunggal dan bukan merupakan `objects`. Nilai primitif bersifat `immutable` (tidak dapat diubah di tempat), yang berarti begitu dibuat, nilainya tidak dapat diubah.
- **Non-Primitive Data Types**: Dalam `JavaScript`, tipe non-primitif adalah `objects`, yang mencakup `objects` biasa, `arrays`, dan `functions`. Berbeda dari tipe primitif, tipe non-primitif dapat menampung banyak nilai sebagai `properties` atau `elements`, dan ditugaskan melalui referensi memori (*by reference*).

---

## Method Object (Object Methods)

- **Definisi**: `Object methods` adalah fungsi-fungsi yang diasosiasikan dengan sebuah `object`. Mereka didefinisikan sebagai `properties` dari suatu `object` dan dapat mengakses serta memanipulasi data milik `object` tersebut. Kata kunci `this` di dalam `method` merujuk ke `object` itu sendiri, memungkinkan akses langsung ke `properties` miliknya.

```javascript
const person = {
  name: "Bob",
  age: 30,
  sayHello: function() {
    return "Hello, my name is " + this.name;
  }
};

console.log(person.sayHello()); // "Hello, my name is Bob"
```

---

## Object Constructor

- **Definisi**: Dalam `JavaScript`, sebuah `constructor` adalah tipe fungsi khusus yang digunakan untuk membuat dan menginisialisasi `objects`. Ia dipanggil dengan kata kunci `new` dan dapat menginisialisasi `properties` serta `methods` pada `object` yang baru dibuat. `Object()` `constructor` membuat sebuah `object` kosong baru.

```javascript
new Object()
```

---

## Bekerja dengan Optional Chaining Operator (?.) (Working with the Optional Chaining Operator)

- **Definisi**: `Operator` ini memungkinkan Anda mengakses `properties` `object` atau memanggil `methods` dengan aman tanpa khawatir apakah mereka ada atau tidak. Jika bagian sebelum `?.` bernilai `null` atau `undefined`, ekspresi akan dievaluasi ke `undefined` tanpa melempar kesalahan *runtime*.

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

console.log(user.profile?.address?.street); // "123 Main St"
console.log(user.profile?.phone?.number);   // undefined
```

---

## Object Destructuring

- **Definisi**: `Object destructuring` memungkinkan Anda mengekstrak nilai dari `objects` dan menugaskannya ke dalam `variables` dengan cara yang lebih ringkas dan mudah dibaca.

```javascript
const person = { name: "Alice", age: 30, city: "New York" };

const { name, age } = person;

console.log(name); // Alice
console.log(age);  // 30
```

---

## Bekerja dengan JSON (Working with JSON)

- **Definisi**: JSON adalah singkatan dari *JavaScript Object Notation*. Ini adalah format data berbasis teks yang ringan dan umum digunakan untuk pertukaran data antara server dan aplikasi web.

```json
{
  "name": "Alice",
  "age": 30,
  "isStudent": false,
  "list of courses": ["Mathematics", "Physics", "Computer Science"]
}
```

- **JSON.stringify()**: `Method` ini digunakan untuk mengonversi sebuah `JavaScript object` menjadi sebuah `JSON string`. Ini berguna ketika Anda ingin menyimpan atau mengirimkan data dalam format yang dapat dengan mudah dibagikan atau ditransfer antar sistem.

```javascript
const user = {
  name: "John",
  age: 30,
  isAdmin: true
};

const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"John","age":30,"isAdmin":true}'
```

- **JSON.parse()**: `Method` ini mengonversi sebuah `JSON string` kembali menjadi sebuah `JavaScript object`. Ini berguna saat Anda mengambil data JSON dari server web atau `localStorage` dan perlu memanipulasi data tersebut di dalam aplikasi Anda.

```javascript
const jsonString = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString);

// hasil: { name: 'John', age: 30, isAdmin: true }
console.log(userObject);
```

---

## Tugas (Assignment)

Tinjau kembali topik dan konsep `JavaScript` `Objects`.

---
[⬅️ Sebelumnya](../3-working-with-optional-chaining-and-object-destructuring/2-what-is-object-destructuring-and-how-does-it-work.md) | Selanjutnya ➡️
