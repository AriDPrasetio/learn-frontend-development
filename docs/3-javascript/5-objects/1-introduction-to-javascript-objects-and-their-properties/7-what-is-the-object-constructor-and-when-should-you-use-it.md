# Apa Itu Object() Constructor, dan Kapan Sebaiknya Anda Menggunakannya?

Dalam `JavaScript`, sebuah `constructor` adalah tipe khusus dari `function` yang digunakan untuk membuat dan menginisialisasi `objects`. Ia dipanggil dengan kata kunci `new` dan dapat menginisialisasi `properties` serta `methods` pada `object` yang baru dibuat.

Dalam pelajaran ini, kita akan melihat bagaimana cara bekerja dengan `Object()` `constructor`. `Object()` `constructor` membuat sebuah `object` kosong baru. Berikut adalah contohnya:

```javascript
new Object()
```

Ketika Anda memanggil `new Object()`, ia mengembalikan sebuah `object` baru yang dapat digunakan untuk menyimpan nilai-nilai.

`Object()` `constructor` dapat digunakan dengan atau tanpa kata kunci `new`. Ketika dipanggil sebagai sebuah `function` tanpa `new`, perilakunya berbeda tergantung pada tipe nilai yang diteruskan kepadanya. Berikut adalah contoh penggunaan `Object()` `constructor` tanpa kata kunci `new`:

```javascript
const num = 42;
const numObj = Object(num); // Membuat object wrapper untuk number tersebut

console.log(numObj);
console.log(typeof numObj); // "object"
```

Seperti yang dapat Anda lihat pada `console.log` kedua, `numObj` adalah sebuah `object`. Hal ini terjadi karena kita menggunakan `Object()` `constructor` untuk mengubah masukan berupa sebuah `number` menjadi sebuah `object`.

Apa yang terjadi jika kita mencoba meneruskan `null` atau `undefined` ke `Object()` `constructor`?

```javascript
const newObj = new Object(undefined);
console.log(newObj); // {}
```

Hasilnya akan berupa sebuah `object` kosong. Kasus penggunaan lain untuk `Object()` `constructor` adalah ketika Anda bekerja dengan nilai yang tipenya tidak diketahui dan Anda perlu memastikan bahwa nilai tersebut adalah sebuah `object`. Mari kita lihat contoh berikut:

```javascript
function toObject(value) {
  if (value === null || value === undefined) {
    return {};
  }

  if (typeof value === "object") {
    return value;
  }

  return Object(value);
}

console.log(toObject(null));
console.log(toObject(true));
console.log(toObject([1, 2, 3]));
```

Dalam contoh ini, kita memiliki sebuah `function` bernama `toObject`. Kondisi kedua akan memeriksa apakah nilainya merupakan tipe `object` dan akan mengembalikan nilai tersebut jika kondisinya bernilai benar (`true`). Kondisi ini akan memeriksa `objects` maupun `arrays`, karena `arrays` adalah tipe khusus dari `objects`.

Jika kedua kondisi tersebut tidak terpenuhi, `function` mengembalikan `Object(value)`, yang mengonversi masukan menjadi sebuah `object`. Ini bekerja untuk nilai seperti `numbers`, `strings`, dan `booleans`.

Sebagian besar waktu, Anda tidak akan menggunakan `Object()` `constructor` untuk membuat `object` baru karena Anda akan menggunakan sintaksis `object literal` (sebagai contoh, `const objectLiteral = { name: "Beau" }`). Namun tetap penting untuk memahami dasar-dasar bekerja dengan `Object` `constructor`.

## Pertanyaan (Questions)

Apa yang akan menjadi `output` dari kode berikut?

```javascript
let obj = Object(42);
console.log(typeof obj);
```

- [ ] "number"
- [x] "object"
- [ ] 42
- [ ] This will throw an error.

Apa perbedaan antara `new Object()` dan `{}`?

- [ ] new Object() creates an empty object, while {} does not.
- [ ] {} creates an empty object, while new Object() does not.
- [x] There is no difference, they both create an empty object.
- [ ] new Object() is faster than {}.

Kapan Anda mungkin menggunakan `Object()` `constructor` alih-alih notasi `object literal`?

- [ ] When you need better performance.
- [x] When you want to create an object wrapper for a primitive value.
- [ ] When you're working with JSON data.
- [ ] When you're creating nested objects.

---
[⬅️ Sebelumnya](6-what-is-the-difference-between-functions-and-object-methods.md) | [Selanjutnya ➡️](../2-working-with-json/1-what-is-json-and-how-do-you-access-values-using-bracket-and-dot-notation.md)
