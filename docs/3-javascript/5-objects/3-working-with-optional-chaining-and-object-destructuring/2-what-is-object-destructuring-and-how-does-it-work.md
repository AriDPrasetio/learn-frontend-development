# Apa Itu Object Destructuring, dan Bagaimana Cara Kerjanya?

`Object destructuring` adalah fitur canggih dalam `JavaScript` yang memungkinkan Anda mengekstrak nilai dari `objects` dan menugaskannya ke dalam `variables` dengan cara yang lebih ringkas dan mudah dibaca.

Fitur ini merupakan bagian dari spesifikasi ES6 (ECMAScript 2015) dan telah menjadi alat penting bagi banyak pengembang `JavaScript`.

`Destructuring` dapat menyederhanakan kode Anda, terutama ketika bekerja dengan `objects` yang kompleks atau ketika Anda perlu mengekstrak beberapa nilai sekaligus.

Pada intinya, `object destructuring` adalah tentang membongkar (*unpacking*) nilai dari `objects` ke dalam `variables` yang terpisah. Alih-alih mengakses `properties` `object` satu per satu, Anda dapat mengekstrak banyak `properties` dalam satu pernyataan tunggal. Hal ini dapat membuat kode Anda lebih bersih dan efisien.

Mari kita mulai dengan sebuah contoh untuk mengilustrasikan cara kerja `object destructuring`:

```javascript
const person = { name: "Alice", age: 30, city: "New York" };

const { name, age } = person;

console.log(name); // Alice
console.log(age);  // 30
```

Dalam contoh ini, kita mengekstrak `properties` `name` dan `age` dari `object` `person` dan menugaskannya ke `variables` dengan nama yang sama.

Salah satu aspek yang sangat berguna dari `object destructuring` adalah Anda dapat menugaskan nilai yang diekstrak ke `variables` dengan nama yang berbeda. Ini sangat berguna ketika Anda bekerja dengan `objects` yang memiliki nama `property` yang berpotensi konflik dengan `variables` yang sudah ada, atau ketika Anda ingin menggunakan nama yang berbeda:

```javascript
let person = { name: "Alice", age: 30, city: "New York" };

let { name: personName, age: personAge } = person;

console.log(personName); // Alice
console.log(personAge);  // 30
```

Dalam kasus ini, kita mengekstrak `property` `name` dan menugaskannya ke sebuah `variable` bernama `personName`, serta melakukan hal yang sama untuk `age` dan `personAge`.

`Object destructuring` juga memungkinkan Anda menetapkan nilai *default* (`default values`). Jika sebuah `property` tidak ada di dalam `object` yang sedang Anda bongkar, Anda dapat menentukan nilai cadangan (*fallback value*):

```javascript
let person = { name: "Alice", age: 30, city: "New York" };
let { name, age, country = "Unknown" } = person;

console.log(country); // Unknown
```

Di sini, karena `country` tidak ada di dalam `object` `person` kita, ia mendapatkan nilai *default* `"Unknown"`.

Kasus umum lainnya adalah pembongkaran objek bersarang (*nested object destructuring*). Anda dapat membongkar `properties` yang tersarang di dalam `objects` lain dengan menggunakan pasangan kurung kurawal tambahan:

```javascript
const recipe = {
  name: "Chocolate Cake",
  ingredients: {
    flour: "2 cups",
    sugar: "1 cup"
  }
};

// Mengekstrak `flour` dari `ingredients`
const { ingredients: { flour } } = recipe;

console.log(flour); // "2 cups"
```

Ini setara dengan mengakses `property` tersebut secara langsung:

```javascript
const flour = recipe.ingredients.flour;
console.log(flour); // "2 cups"
```

Sekarang, mari kita bahas tentang notasi steno (*shorthand notation*) dalam pembentukan `object`. Ketika Anda membuat `objects`, terutama ketika nama `property` cocok dengan nama `variable`, Anda dapat menggunakan sintaksis *shorthand*:

```javascript
let name = "Bob";
let age = 25;

let person = { name, age };

console.log(person); // { name: "Bob", age: 25 }
```

Kode di atas mengambil `properties` dengan nama yang sama seperti `variables` kita dan menetapkan nilai dari `variables` tersebut kepadanya.

Notasi *shorthand* ini sangat berguna saat Anda mengembalikan `objects` dari `functions` atau membuat `objects` dengan banyak `properties`:

```javascript
function createPerson(name, age) {
  return { name, age };
}

let person = createPerson("Charlie", 35);
console.log(person); // { name: "Charlie", age: 35 }
```

`Object destructuring` dan notasi *shorthand* `object` adalah fitur andal yang dapat membuat kode Anda lebih ringkas dan lebih mudah dibaca.

Mereka sangat berguna ketika bekerja dengan struktur data yang rumit, atau ketika Anda perlu meneruskan banyak `parameters` ke dalam `functions`.

Seiring Anda terus bekerja dengan `JavaScript`, Anda akan menemukan banyak situasi di mana teknik-teknik ini dapat menyederhanakan kode Anda dan membuatnya lebih ekspresif.

## Pertanyaan (Questions)

Apa tujuan utama dari `object destructuring` dalam `JavaScript`?

- [ ] To create new objects.
- [x] To extract values from objects and assign them to variables.
- [ ] To merge multiple objects.
- [ ] To delete properties from objects.

Bagaimana cara Anda menetapkan sebuah nilai *default* ke sebuah `variable` saat membongkar (*destructuring*) sebuah `object`?

- [x] `{ property = defaultValue } = object`
- [ ] `{ property: defaultValue } = object`
- [ ] `{ property || defaultValue } = object`
- [ ] `{ property ? defaultValue } = object`

Apa yang dilakukan oleh notasi ringkas (*shorthand notation*) `{ name, age }` saat membuat sebuah `object`?

- [ ] It creates an object with undefined properties.
- [ ] It creates an object with null values for name and age.
- [x] It creates an object with properties named name and age, assigning them the values of variables with the same names.
- [ ] It throws an error because it's invalid syntax.

---
[⬅️ Sebelumnya](1-what-is-the-optional-chaining-operator-and-how-does-it-work.md) | [Selanjutnya ➡️](../4-review-javascript-objects/1-review-javascript-objects.md)
