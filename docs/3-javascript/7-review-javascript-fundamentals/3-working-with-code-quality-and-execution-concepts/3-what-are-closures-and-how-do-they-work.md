# Apa Itu Closure, dan Bagaimana Cara Kerjanya?

`Closure` adalah salah satu fitur paling kuat dan sering disalahpahami dalam `JavaScript`. Pada dasarnya, sebuah `closure` adalah sebuah `function` yang memiliki akses ke `variable` di dalam `lexical scope` pembungkus luarnya, bahkan setelah `outer function` tersebut selesai dieksekusi (*returned*). Hal ini mungkin terdengar rumit, tetapi ini adalah konsep dasar yang memungkinkan banyak pola pemrograman tingkat lanjut dalam `JavaScript`.

Untuk memahami `closure`, mari kita mulai dengan sebuah contoh:

```javascript
function outerFunction(x) {
    let y = 10;
    function innerFunction(){
        console.log(x + y);
    }
    return innerFunction;
}

let closure = outerFunction(5);
closure(); // 15
```

Dalam contoh ini, `outerFunction` menerima sebuah `parameter` `x` dan mendefinisikan sebuah `local variable` `y`. Kemudian ia mendefinisikan sebuah `innerFunction` yang menggunakan `x` dan `y`. Terakhir, fungsi tersebut mengembalikan `innerFunction`. Ketika kita memanggil `outerFunction(5)`, fungsi tersebut mengembalikan `innerFunction` yang kita simpan ke dalam `variable` `closure`. Ketika kita kemudian memanggil `closure()`, fungsi tersebut masih memiliki akses ke `x` dan `y` dari `outerFunction` meskipun `outerFunction` telah selesai dieksekusi. Inilah esensi dari sebuah `closure`.

`Inner function` mempertahankan referensi ke lingkungan leksikal luarnya (*outer lexical environment*), menjaga akses ke `variable` dalam lingkungan tersebut bahkan setelah `outer function` selesai dijalankan.

`Closure` sangat berguna untuk membuat `variable` dan `function` privat (*private*). Perhatikan contoh berikut:

```javascript
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

let counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

Dalam kasus ini, `createCounter` mengembalikan sebuah `function` yang menaikkan nilai dan mengembalikan sebuah `variable` `count`. `Variable` `count` tidak dapat diakses secara langsung dari luar `createCounter`, namun `function` yang dikembalikan (yaitu `closure` kita) memiliki akses ke `variable` tersebut. Setiap kali kita memanggil `counter()`, ia menaikkan dan mengembalikan nilai `count`.

`Closure` juga dapat menangkap beberapa `variable` dari `outer scope`-nya. Sebagai contoh:

```javascript
function multiply(x) {
    return function (y) {
        return x * y;
    };
}

let double = multiply(2);
console.log(double(5)); // 10
```

Di sini, `inner function` menangkap `parameter` `x` dari `multiply`. Ketika kita membuat `double` dengan memanggil `multiply(2)`, ia mengembalikan sebuah `function` yang selalu mengalikan `argument`-nya dengan angka `2`.

Satu hal penting yang perlu diperhatikan tentang `closure` adalah bahwa mereka menangkap `variable` berdasarkan referensi (*by reference*), bukan berdasarkan nilai (*by value*). Ini berarti jika nilai dari `variable` yang ditangkap berubah, `closure` akan melihat nilai baru tersebut. Sebagai contoh:

```javascript
function createIncrementer() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

let increment = createIncrementer();
increment(); // 1
increment(); // 2
```

Setiap kali kita memanggil `increment`, ia bekerja dengan `variable` `count` yang sama, bukan salinan dari nilai awalnya. `Closure` adalah alat yang ampuh dalam `JavaScript`. Seiring Anda terus bekerja dengan `JavaScript`, Anda akan mendapati bahwa memahami dan menggunakan `closure` secara efektif dapat sangat meningkatkan kemampuan Anda dalam menulis `code` yang bersih, efisien, dan andal.

## Pertanyaan (Questions)

### Pertanyaan 1

Apakah output dari `code` berikut?

```javascript
function outer(x) {
    return function(y) {
        return x + y;
    };
}

let add5 = outer(5);
console.log(add5(3));
```

- [ ] `5`
- [ ] `3`
- [x] `8`
- [ ] `undefined`

### Pertanyaan 2

Konsep apakah yang ditunjukkan oleh `code` berikut?

```javascript
function createGreeter(greeting) {
    return function(name) {
        console.log(greeting + ", " + name);
    };
}

let sayHello = createGreeter("Hello");
sayHello("Alice");
```

- [ ] `Hoisting`.
- [x] `Closure`.
- [ ] `Recursion`.
- [ ] `Prototype inheritance`.

### Pertanyaan 3

Apakah output dari `code` berikut?

```javascript
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

let increment = counter();
console.log(increment());
console.log(increment());
console.log(increment());
```

- [ ] ```javascript
1
1
1
```
- [x] ```javascript
1
2
3
```
- [ ] ```javascript
0
1
2
```
- [ ] ```javascript
undefined
undefined
undefined
```

---
[⬅️ Sebelumnya](2-what-is-memory-management-and-how-does-it-work-in-javascript.md) | [Selanjutnya ➡️](../4-the-var-keyword-and-hoisting/1-what-is-the-var-keyword-and-why-is-it-no-longer-suggested-to-use-it.md)
