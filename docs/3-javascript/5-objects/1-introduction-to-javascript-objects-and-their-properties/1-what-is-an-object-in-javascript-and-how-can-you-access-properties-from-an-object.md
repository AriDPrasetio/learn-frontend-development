# Apa Itu Object dalam JavaScript, dan Bagaimana Cara Mengakses Property dari Sebuah Object?

Dalam `JavaScript`, sebuah `object` adalah struktur data fundamental yang memungkinkan Anda untuk menyimpan dan mengorganisasi data serta fungsi (`functionality`) yang saling terkait.

Anda dapat membayangkan sebuah `object` seperti sebuah wadah yang menampung berbagai informasi, mirip seperti lemari arsip yang menyimpan berbagai map dan dokumen.

Informasi-informasi ini disebut `properties` (`property`), dan mereka terdiri dari sebuah nama (atau `key`) dan sebuah nilai (`value`).

```javascript
const exampleObject = {
  propertyName: value,
};
```

`Object` sangat serbaguna dan membentuk tulang punggung dari `JavaScript`. Faktanya, hampir segala sesuatu dalam `JavaScript` adalah sebuah `object` atau dapat diperlakukan sebagai `object`. Ini mencakup `arrays`, `functions`, dan bahkan `primitive data types` seperti `strings` dan `numbers` ketika digunakan dengan cara tertentu.

Sifat `object-centric` dari `JavaScript` ini adalah salah satu alasan mengapa `JavaScript` menjadi bahasa yang sangat fleksibel dan kuat. Mari kita lihat bagaimana Anda dapat membuat sebuah `object`:

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};
```

Dalam contoh ini, kita telah membuat sebuah `object` bernama `person` dengan tiga `properties`: `name`, `age`, dan `city`. Setiap `property` memiliki nama dan nilai, yang dipisahkan oleh titik dua (`:`).

Sekarang, mari kita jelajahi bagaimana Anda dapat mengakses `properties` ini. Ada dua cara utama untuk mengakses `property` `object` dalam `JavaScript`: `dot notation` dan `bracket notation`.

`Dot notation` adalah cara yang paling umum dan mudah dipahami untuk mengakses `properties` dari sebuah `object`. Berikut adalah sintaks dasar untuk `dot notation`:

```javascript
objectName.propertyName
```

Berikut cara Anda menggunakan `dot notation` dengan `object` `person` kita:

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

console.log(person.name);  // Alice
console.log(person.age);   // 30
```

`Dot notation` ringkas dan mudah dibaca, menjadikannya pilihan yang lebih disukai ketika Anda mengetahui nama pasti dari `property` yang ingin diakses dan nama tersebut merupakan `identifier` `JavaScript` yang valid (artinya tidak diawali dengan angka dan tidak mengandung karakter khusus atau spasi).

`Bracket notation`, di sisi lain, memungkinkan Anda untuk mengakses `properties` `object` menggunakan sebuah `string` di dalam tanda kurung siku. Berikut cara Anda menggunakan `bracket notation`:

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};

console.log(person["name"]); // Alice
console.log(person["age"]);  // 30
```

`Bracket notation` lebih fleksibel daripada `dot notation` karena memungkinkan Anda menggunakan nama `property` yang bukan merupakan `identifier` `JavaScript` yang valid. Sebagai contoh, jika Anda memiliki nama `property` dengan spasi atau yang diawali dengan angka, Anda harus menggunakan `bracket notation`:

```javascript
const oddObject = {
  "1stProperty": "Hello",
  "property with spaces": "World"
};

console.log(oddObject["1stProperty"]);          // Hello
console.log(oddObject["property with spaces"]); // World
```

Keuntungan lain dari `bracket notation` adalah memungkinkan Anda menggunakan `variable` untuk mengakses `properties` secara dinamis:

```javascript
const person = {
  name: "Alice",
  age: 30,
  city: "Wonderland"
};

let propertyName = "city";
console.log(person[propertyName]); // Wonderland
```

Fleksibilitas ini membuat `bracket notation` sangat berguna ketika Anda tidak mengetahui nama pasti dari `property` pada saat menulis `code`, atau saat Anda bekerja dengan nama `property` yang berasal dari *user input* atau sumber dinamis lainnya.

Perlu dicatat bahwa `object` dalam `JavaScript` sangat kuat dan serbaguna. Mereka dapat menampung tidak hanya nilai sederhana seperti `strings` dan `numbers`, tetapi juga `arrays`, atau `objects` lainnya.

Memahami `object` dan cara bekerja dengannya sangat krusial dalam `JavaScript` karena mereka digunakan secara ekstensif di seluruh bahasa ini dan di banyak pustaka (*library*) serta *framework* `JavaScript`.

Seiring Anda terus belajar dan bekerja dengan `JavaScript`, Anda akan menemukan bahwa menguasai `object` membuka dunia kemungkinan untuk membangun aplikasi yang kompleks dan andal.

## Pertanyaan (Questions)

Notasi manakah yang akan Anda gunakan untuk mengakses sebuah `property` dari suatu `object` jika nama `property` tersebut mengandung spasi?

- [ ] Dot notation
- [x] Bracket notation
- [ ] Both dot and bracket notation
- [ ] Neither, it's not possible to have property names with spaces

Apa keuntungan menggunakan `bracket notation` dibandingkan `dot notation` saat mengakses `property` `object`?

- [ ] It's faster to type.
- [x] It allows you to use variables as property names.
- [ ] It's the only way to access nested properties.
- [ ] It automatically converts property names to uppercase.

Mengapa dikatakan bahwa sebagian besar hal di dalam `JavaScript` adalah `object`?

- [ ] Because everything in JavaScript has properties and methods.
- [ ] Because JavaScript was originally designed for object-oriented programming.
- [ ] Because objects are the only data type in JavaScript.
- [x] Because even primitive data types can be treated as objects in certain contexts.

---
⬅️ Sebelumnya | [Selanjutnya ➡️](2-how-can-you-remove-properties-from-an-object.md)
