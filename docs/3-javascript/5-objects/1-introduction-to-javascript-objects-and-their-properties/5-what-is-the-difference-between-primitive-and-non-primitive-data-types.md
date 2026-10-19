# Apa Perbedaan Antara Tipe Data Primitif dan Non-Primitif?

Dalam `JavaScript`, memahami perbedaan antara `primitive` dan `non-primitive data types` sangat penting untuk menulis kode yang efisien dan bebas dari *bug*.

Kedua kategori tipe data ini berperilaku berbeda dalam hal bagaimana mereka disimpan di dalam memori dan bagaimana mereka dimanipulasi di dalam program Anda.

`Primitive data types` adalah bentuk data paling sederhana dalam `JavaScript`. Mereka mencakup `number`, `bigint`, `string`, `boolean`, `null`, `undefined`, dan `symbol`. Tipe-tipe ini disebut "primitif" karena merepresentasikan nilai tunggal (*single values*) dan bukan merupakan `objects`.

Ketika Anda bekerja dengan `primitive data types`, Anda berhadapan langsung dengan nilainya. Sebagai contoh, ketika Anda membuat sebuah `variable` dengan sebuah `primitive value`, nilai tersebut disimpan secara langsung di dalam `variable` tersebut.

Nilai primitif bersifat `immutable` (tidak dapat diubah), yang berarti begitu mereka dibuat, nilainya tidak dapat diubah di tempat. Namun, Anda dapat menetapkan (*reassign*) nilai baru ke `variable` tersebut. Berikut adalah contoh bekerja dengan `primitive data types`:

```javascript
let num1 = 5;
let num2 = num1;
num1 = 10;

console.log(num2); // 5
```

Dalam contoh ini, kita menetapkan sebuah nilai primitif (`5`) dari `num1` ke `num2`. Ini membuat salinan nilai yang sepenuhnya independen. Akibatnya, setiap perubahan yang dibuat pada `variable` asli (`num1`) tidak akan memengaruhi salinannya (`num2`).

`Non-primitive data types`, di sisi lain, lebih kompleks. Dalam `JavaScript`, tipe-tipe ini adalah `objects`, yang mencakup objek biasa (`regular objects`), `arrays`, dan `functions`. Tidak seperti tipe primitif, tipe non-primitif dapat menampung banyak nilai sebagai `properties` atau `elements`.

Ketika Anda membuat sebuah `variable` dengan nilai non-primitif, apa yang sebenarnya disimpan di dalam `variable` tersebut adalah sebuah referensi (*reference*) ke lokasi memori tempat `object` tersebut disimpan, bukan `object` itu sendiri. Hal ini memunculkan beberapa perbedaan penting dalam perilakunya. Berikut adalah contoh dengan tipe non-primitif:

```javascript
const originalPerson = { name: "John", age: 30 };
const copiedPerson = originalPerson;

originalPerson.age = 31;

console.log(copiedPerson.age); // 31
```

Dalam contoh ini, kita memiliki sebuah `object` bernama `originalPerson` dengan dua `properties` yaitu `name` dan `age`. Kita kemudian menugaskan `object` `originalPerson` ke sebuah `variable` bernama `copiedPerson`.

Kemudian kita memperbarui nilai `age` untuk `object` `originalPerson`. Ketika kita mencatat `property` `age` dari `object` `copiedPerson`, ia menampilkan nilai yang telah diperbarui.

Tetapi mengapa hal itu terjadi? Ini terjadi karena `originalPerson` dan `copiedPerson` mereferensikan `object` yang sama persis di dalam memori.

Dalam `JavaScript`, ketika Anda menugaskan sebuah `object` ke `variable` lain, Anda sedang menyalin referensi ke `object` tersebut, bukan menyalin `object` itu sendiri. Ini dikenal sebagai penyalinan dangkal melalui referensi (*shallow copying by reference*). Akibatnya, setiap perubahan yang dilakukan pada `object` melalui satu referensi akan tecermin di semua referensi lain yang mengarah ke `object` tersebut.

Seiring Anda terus bekerja dengan `JavaScript`, Anda akan menemui banyak situasi di mana pemahaman terhadap perbedaan antara tipe primitif dan non-primitif menjadi sangat krusial. Ini adalah konsep fundamental yang mendasari banyak aspek dari bahasa ini dan merupakan kunci untuk menulis kode yang efisien dan benar.

## Pertanyaan (Questions)

Manakah dari berikut ini yang BUKAN merupakan `primitive data type` dalam `JavaScript`?

- [ ] Number
- [ ] String
- [ ] Boolean
- [x] Array

Apa yang terjadi ketika Anda menugaskan sebuah `primitive value` ke sebuah `variable` baru?

- [ ] The new variable gets a reference to the original value.
- [x] The value is copied to the new variable.
- [ ] Both variables share the same memory location.
- [ ] The original variable becomes null.

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let x = 10;
let y = x;
x = 20;
console.log(y);
```

- [x] 10
- [ ] 20
- [ ] undefined
- [ ] This will throw an error.

---
[⬅️ Sebelumnya](4-how-do-you-work-with-accessing-properties-from-nested-objects-and-arrays-in-objects.md) | [Selanjutnya ➡️](6-what-is-the-difference-between-functions-and-object-methods.md)
