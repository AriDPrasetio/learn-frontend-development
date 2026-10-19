# Bagaimana Cara Kerja JSON.parse() dan JSON.stringify()?

Terdapat dua `method` yang sangat andal dalam `JavaScript` untuk menangani data JSON: `JSON.parse()` dan `JSON.stringify()`. `Method-method` ini umumnya digunakan untuk mengonversi antara `JSON strings` dan `JavaScript objects`.

`JSON.stringify()` digunakan untuk mengonversi sebuah `JavaScript object` menjadi sebuah `JSON string`. Ini berguna ketika Anda ingin menyimpan atau mengirimkan data dalam format yang dapat dengan mudah dibagikan atau ditransfer antar sistem.

Berikut cara Anda menggunakan `method` `JSON.stringify()`:

```javascript
const user = {
  name: "John",
  age: 30,
  isAdmin: true
};

const jsonString = JSON.stringify(user);
console.log(jsonString);
```

`Method` `JSON.stringify()` juga menerima `parameter` opsional yang disebut `replacer`, yang dapat berupa sebuah `function` atau sebuah `array`. Berikut adalah contoh penggunaan sebuah `array` untuk `parameter` `replacer` opsional:

```javascript
const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
};

// hasil: {"firstName":"Jessica","country":"USA"}
console.log(JSON.stringify(developerObj, ["firstName", "country"]));
```

Dalam contoh ini, kita memiliki sebuah `developerObj` dengan empat `properties`. Saat kita menggunakan `method` `JSON.stringify()`, kita dapat meneruskan sebuah `array` sebagai `parameter` kedua dan menentukan `properties` mana saja yang ingin kita jadikan *string*. Hasilnya adalah sebuah `stringified object` yang hanya berisi `properties` `firstName` dan `country`.

`Parameter` opsional lainnya untuk `method` `JSON.stringify()` adalah `spacer` `parameter`. Ini memungkinkan Anda untuk mengontrol spasi (*indentation*) untuk hasil *string*-nya:

```javascript
const developerObj = {
  firstName: "Jessica",
  isAwesome: true,
  isMusician: true,
  country: "USA",
};

console.log(JSON.stringify(developerObj, null, 2));

/* hasil
{
  "firstName": "Jessica",
  "isAwesome": true,
  "isMusician": true,
  "country": "USA"
}
*/
```

Sebagian besar waktu, Anda mungkin tidak akan menggunakan kedua `parameter` opsional ini untuk `method` `JSON.stringify()`, tetapi tetap sangat membantu untuk mengetahuinya.

`Method` lain yang akan sering Anda gunakan dalam pemrograman Anda adalah `method` `JSON.parse()`. `JSON.parse()` mengonversi sebuah `JSON string` kembali menjadi sebuah `JavaScript object`. Ini berguna saat Anda mengambil data JSON dari server web atau dari `localStorage` dan perlu memanipulasi data tersebut di dalam aplikasi Anda. Anda akan mempelajari lebih banyak tentang `localStorage` pada pelajaran mendatang.

Berikut adalah contoh cara bekerja dengan `method` `JSON.parse()`:

```javascript
const jsonString = '{"name":"John","age":30,"isAdmin":true}';
const userObject = JSON.parse(jsonString);
console.log(userObject);

// Hasil:
// { name: 'John', age: 30, isAdmin: true }
```

Ini memungkinkan Anda untuk bekerja dengan data di dalam program Anda sebagai `JavaScript object` normal, sehingga lebih mudah dimanipulasi dan digunakan.

Pada modul-modul mendatang, kita akan terus mempelajari lebih lanjut tentang cara bekerja dengan JSON serta `methods` `JSON.parse()` dan `JSON.stringify()`.

## Pertanyaan (Questions)

Apa yang dilakukan oleh `JSON.stringify()`?

- [ ] It converts a JSON string into a JavaScript object.
- [x] It converts a JavaScript object into a JSON string.
- [ ] It sends data to a web server.
- [ ] It converts an array into a string.

Apa yang dilakukan oleh `JSON.parse()`?

- [ ] It converts a JavaScript object into a JSON string.
- [ ] It stores data in local storage.
- [x] It converts a JSON string into a JavaScript object.
- [ ] It sends data over the network.

Diberikan `JSON string` berikut, bagaimana cara Anda mengonversinya kembali menjadi sebuah `JavaScript object` dan mengakses nilai `"age"`?

```javascript
const jsonString = '{"name":"Alice","age":25}';
```

- [ ] `jsonString.name`
- [ ] `JSON.stringify(jsonString).age`
- [x] `JSON.parse(jsonString).age`
- [ ] `jsonString[1]`

---
[⬅️ Sebelumnya](1-what-is-json-and-how-do-you-access-values-using-bracket-and-dot-notation.md) | [Selanjutnya ➡️](../3-working-with-optional-chaining-and-object-destructuring/1-what-is-the-optional-chaining-operator-and-how-does-it-work.md)
