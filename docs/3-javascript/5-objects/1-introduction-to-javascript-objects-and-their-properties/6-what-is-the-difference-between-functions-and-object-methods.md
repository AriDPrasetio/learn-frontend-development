# Apa Perbedaan Antara Function dan Object Method?

Dalam `JavaScript`, `functions` dan `object methods` keduanya merupakan cara untuk mengenkapsulasi kode yang dapat digunakan kembali (*reusable code*), tetapi mereka memiliki beberapa perbedaan utama dalam cara mereka didefinisikan, digunakan, dan konteks tempat mereka beroperasi. Memahami perbedaan ini sangat penting untuk menulis kode `JavaScript` yang efektif dan terorganisir.

Seperti yang telah Anda pelajari pada modul-modul sebelumnya, `functions` adalah blok kode yang dapat digunakan kembali yang melakukan tugas tertentu:

```javascript
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // "Hello, Alice!"
```

`Object methods`, di sisi lain, adalah fungsi-fungsi yang diasosiasikan dengan sebuah `object`. Mereka didefinisikan sebagai `properties` dari sebuah `object` dan dapat mengakses serta memanipulasi data milik `object` tersebut. Berikut adalah contoh dari sebuah `object` dengan sebuah `method`:

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

Dalam contoh ini, `sayHello` adalah sebuah `method` dari `object` `person`. Kata kunci `this` memungkinkan `method` `sayHello` untuk mengakses `properties` dari `object` bernama `person`. Anda akan mempelajari lebih banyak tentang kata kunci `this` pada pelajaran-pelajaran mendatang.

Perbedaan nyata antara `functions` dan `methods` adalah bagaimana mereka dipanggil (*invoked*). `Functions` dipanggil berdasarkan namanya secara langsung, sedangkan `methods` dipanggil menggunakan `dot notation` pada `object` tempat mereka bernaung. Sebagai contoh, kita memanggil `function` `greet` sebagai `greet("Alice")`, tetapi kita memanggil `method` `sayHello` sebagai `person.sayHello()`.

Perbedaan penting lainnya adalah konteks tempat mereka beroperasi. `Functions` biasa memiliki cakupan (*scope*) tersendiri, namun tidak memiliki referensi bawaan ke `object` tertentu. Sebaliknya, `methods` terikat pada `object`-nya dan dapat mengakses `properties` serta `methods` lain milik `object` tersebut menggunakan kata kunci `this`.

Poin utama yang perlu dicatat adalah bahwa `methods` membantu dalam mengorganisasi kode ke dalam `objects` yang logis, sedangkan `functions` digunakan untuk kode yang lebih umum dan dapat digunakan kembali (*general reusable code*).

Memahami perbedaan antara `functions` dan `object methods` sangat penting seiring kemajuan Anda dalam perjalanan belajar `JavaScript`. Meskipun pada awalnya mungkin terlihat serupa, mengenali kapan harus menggunakan masing-masing akan membantu Anda menulis kode yang lebih terorganisir, efisien, dan lebih baik.

## Pertanyaan (Questions)

Apa perbedaan utama antara sebuah `function` dan sebuah `object method`?

- [ ] Functions can take parameters, but methods cannot.
- [x] Methods are associated with objects, while functions are standalone.
- [ ] Functions can return values, but methods cannot.
- [ ] Methods can use the this keyword, but functions cannot.

Diberikan kode berikut, bagaimana cara Anda memanggil `method` `greet` dengan benar?

```javascript
let person = {
    name: "Alice",
    greet: function() {
        console.log("Hello, I'm " + this.name);
    }
};
```

- [ ] `greet();`
- [ ] `person.greet;`
- [x] `person.greet();`
- [ ] `person(greet);`

Apa yang akan menjadi `output` dari kode berikut?

```javascript
function sayHello() {
    return "Hello!";
}

let obj = {
    sayHello: function() {
        return "Hi there!";
    }
};

console.log(sayHello());
console.log(obj.sayHello());
```

- [ ] "Hello!", "Hello!"
- [ ] "Hi there!", "Hi there!"
- [x] "Hello!", "Hi there!"
- [ ] This will throw an error.

---
[⬅️ Sebelumnya](5-what-is-the-difference-between-primitive-and-non-primitive-data-types.md) | [Selanjutnya ➡️](7-what-is-the-object-constructor-and-when-should-you-use-it.md)
