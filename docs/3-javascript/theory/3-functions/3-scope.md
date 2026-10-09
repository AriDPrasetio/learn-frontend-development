# Apa Itu `scope` dalam Pemrograman, dan Bagaimana `global scope`, `local scope`, dan `block scope` Bekerja?

`scope` dalam pemrograman merujuk pada visibilitas dan aksesibilitas `variable` di berbagai bagian `code`-mu. Ia menentukan di mana `variable` bisa diakses atau dimodifikasi. Dalam JavaScript, memahami `scope` sangatlah krusial untuk menulis `code` yang bersih, efisien, dan bebas dari `bug`. Ada tiga jenis utama `scope`: `global scope`, `local scope`, dan `block scope`.

`global scope` adalah `scope` paling luar dalam sebuah program JavaScript. `variable` yang dideklarasikan di `global scope` dapat diakses dari mana saja di dalam `code`-mu, termasuk dari dalam `function` dan blok. `variable`-`variable` ini sering disebut `global variable`. Meskipun `global variable` bisa menjadi hal yang praktis, mereka sebaiknya digunakan secukupnya karena dapat menyebabkan konflik penamaan dan membuat `code`-mu lebih sulit dikelola. Berikut adalah contoh sebuah `global variable`:

```javascript
let globalVar = "I'm a global variable";

function printGlobalVar() {
    console.log(globalVar);
}

printGlobalVar(); // "I'm a global variable"
```

Pada contoh ini, `globalVar` dideklarasikan di `global scope` dan dapat diakses dari dalam `function` `printGlobalVar`.

`local scope`, di sisi lain, merujuk pada `variable` yang hanya dapat diakses di dalam sebuah `function`. Berikut adalah contoh dari `local scope`:

```javascript
function greet() {
    let message = "Hello, local scope!";
    console.log(message);
}

greet(); // "Hello, local scope!"
// console.log(message); // This will throw an error
```

Dalam `code` ini, `message` adalah `local variable` di dalam `function` `greet`. Ia bisa digunakan di dalam `function` tersebut, tetapi mencoba mengaksesnya di luar `function` akan menghasilkan `error`.

`block scope` adalah sebuah konsep yang diperkenalkan dengan `keyword` `let` dan `const` di ES6. Sebuah `block` adalah setiap bagian `code` di dalam kurung kurawal, {}, seperti di dalam `if statement`, `for loop`, atau `while loop`. Konsep `loop` akan diajarkan pada pelajaran mendatang.

`variable` yang dideklarasikan dengan `let` atau `const` di dalam sebuah `block` hanya dapat diakses di dalam `block` tersebut. Berikut adalah contoh dari `block scope`:

```javascript
if (true) {
    let blockVar = "I'm in a block";
    console.log(blockVar); // "I'm in a block"
}
console.log(blockVar); // This will throw an error
```

Pada contoh ini, `blockVar` hanya dapat diakses di dalam `block` `if`. Mencoba mengaksesnya di luar `block` akan menghasilkan `error`. Memahami berbagai jenis `scope` ini sangat penting untuk mengelola aksesibilitas `variable` dan menghindari efek samping tak terduga dalam `code`-mu.

> [!TIP]
> `global variable` sebaiknya digunakan secukupnya, karena mereka bisa menyebabkan konflik penamaan dan membuat `code`-mu lebih sulit dikelola. `local variable` membantu menjaga agar berbagai bagian dari `code`-mu tetap terisolasi, yang mana ini sangat berguna pada program yang lebih besar. `block scoping` dengan `let` dan `const` memberikan kontrol yang lebih halus terhadap aksesibilitas `variable`, membantu mencegah `error` dan membuat `code`-mu lebih dapat diprediksi. Menguasai konsep-konsep dasar mengenai `global scope`, `local scope`, dan `block scope` ini akan memberikan fondasi yang kuat untuk memahami topik-topik yang lebih lanjut.

## Pertanyaan

Apa yang akan menjadi `output` dari `code` berikut?

```javascript
let x = 10;

function printX() {
    let x = 20;
    console.log(x);
}

printX();
console.log(x);
```

- 20, 20
- 20, 10
- 10, 10
- 10, 20

Apa yang akan menjadi hasil dari mencoba mengakses `blockVar` di luar `block`-nya pada `code` berikut?

```javascript
if (true) {
    let blockVar = "Hello";
}
console.log(blockVar);
```

- It will print "Hello".
- It will print `undefined`.
- It will throw a `ReferenceError`.
- It will print `null`.

Manakah dari berikut ini yang dengan benar mendeskripsikan `scope` dari `variable` yang dideklarasikan dengan `let` pada `top level` sebuah skrip (di luar `function` atau `block` mana pun)?

- `function scope`.
- `block scope`.
- `global scope`.
- `local scope`.

