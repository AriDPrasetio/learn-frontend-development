# Apa Itu JSON, dan Bagaimana Cara Mengakses Nilai Menggunakan Notasi Kurung Siku dan Notasi Titik?

Apa itu JSON dan bagaimana cara Anda mengakses nilai menggunakan `bracket notation` dan `dot notation`?

JSON adalah singkatan dari *JavaScript Object Notation*. Ini adalah format data berbasis teks yang ringan (*lightweight*) yang umum digunakan untuk bertukar data antara server dan aplikasi web.

Salah satu alasan mengapa JSON sangat populer dalam pengembangan web adalah karena ia dapat diuraikan oleh mesin (*machine-parseable*) sekaligus mudah dibaca oleh manusia (*human-readable*).

Karena JSON bersifat independen dari bahasa pemrograman (*language-independent*), Anda dapat dengan mudah mengirimkan data JSON dari aplikasi Java ke aplikasi Python, atau dari aplikasi `JavaScript` ke aplikasi C#.

JSON mendukung banyak tipe data termasuk `objects`, `arrays`, `strings`, `booleans`, `null`, dan `numbers`.

Berikut adalah contoh dari sebuah `object` JSON:

```json
{
  "name": "Alice",
  "age": 30,
  "isStudent": false,
  "list of courses": ["Mathematics", "Physics", "Computer Science"]
}
```

Seperti yang Anda lihat, JSON menggunakan pasangan kunci-nilai (*key-value pairs*) untuk menyimpan informasi dan setiap pasangan dipisahkan oleh tanda koma. Setiap kunci (*key*) harus dibungkus dengan tanda kutip ganda (`"`), jika tidak, Anda akan mendapatkan pesan kesalahan (*error*).

Untuk mengakses data dari sebuah `object` JSON, Anda dapat menggunakan `dot notation` atau `bracket notation`. Dalam contoh ini, kita menggunakan `dot notation` untuk mengakses `age` dari `object` JSON:

```javascript
import data from "./example.json" with { type: "json" };

console.log(data.age);
```

Contoh khusus ini menggunakan apa yang dikenal sebagai `import statement`, yang mengimpor `object` JSON ke dalam file ini sehingga kita memiliki akses terhadapnya. Anda akan mempelajari lebih banyak tentang `import statement` pada pelajaran mendatang.

Anda juga dapat menggunakan `bracket notation` untuk mengakses informasi dari `objects` JSON. Berikut adalah contoh mengakses `array` `list of courses`:

```javascript
import data from "./example.json" with { type: "json" };

console.log(data["list of courses"]);
```

Penggunaan `bracket notation` sangat berguna di sini karena `key` tersebut mengandung beberapa kata yang dipisahkan oleh spasi. Jika kita mencoba menggunakan `dot notation`, hal tersebut akan menghasilkan *error*.

Singkatnya, JSON adalah format serbaguna yang dapat menyimpan banyak tipe data, termasuk `arrays` dan `nested objects`. Dengan menggunakan `dot notation` atau `bracket notation`, Anda dapat dengan mudah mengakses nilai-nilai yang tersimpan di dalam sebuah `object` JSON.

## Pertanyaan (Questions)

Manakah dari berikut ini yang benar tentang JSON?

- [ ] JSON is only used in JavaScript.
- [x] JSON is a lightweight data format used for data exchange between servers and web applications.
- [ ] JSON does not support arrays.
- [ ] JSON must include functions.

Bagaimana cara Anda mengakses nilai dari `key` `name` pada `object` JSON berikut menggunakan `dot notation`?

```json
{
  "name": "Alice",
  "age": 30
}
```

- [ ] `data("name")`
- [ ] `data["name"]`
- [x] `data.name`
- [ ] `data.name[]`

Manakah dari `keys` berikut yang mengharuskan Anda menggunakan `bracket notation` untuk mengakses nilainya?

```json
{
  "first name": "Alice",
  "age": 30
}
```

- [ ] "age"
- [x] "first name"
- [ ] Both of the above.
- [ ] None of the above.

---
[⬅️ Sebelumnya](../1-introduction-to-javascript-objects-and-their-properties/7-what-is-the-object-constructor-and-when-should-you-use-it.md) | [Selanjutnya ➡️](2-how-do-json-parse-and-json-stringify-work.md)
