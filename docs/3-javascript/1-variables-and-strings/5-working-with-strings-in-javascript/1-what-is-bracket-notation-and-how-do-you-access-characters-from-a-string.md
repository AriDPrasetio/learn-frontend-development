# Apa Itu Bracket Notation, dan Bagaimana Cara Mengakses Karakter dari Sebuah String?

Dalam `JavaScript`, `strings` diperlakukan sebagai urutan karakter, dan setiap karakter dalam sebuah `string` dapat diakses menggunakan `bracket notation`. Ini memungkinkan Anda untuk mengambil karakter tertentu dari sebuah `string` berdasarkan posisinya, yang disebut `index`-nya.

Sebuah `index` adalah posisi sebuah karakter di dalam `string`, dan bersifat `zero-based`. Ini berarti bahwa karakter pertama dari sebuah `string` memiliki `index` `0`, karakter kedua memiliki `index` `1`, dan seterusnya.

Sebagai contoh, dalam `string` `hello`, karakter `h` berada di `index` `0`, `e` berada di `index` `1`, `l` berada di `index` `2`, dan seterusnya.

`Bracket notation` menggunakan tanda kurung siku (`square brackets`) (`[]`) dan `index` dari karakter yang ingin Anda akses. Mari kita lihat sebuah contoh:

```javascript
let greeting = "hello";
console.log(greeting[1]); // "e"
```

Dalam contoh ini, kita dapat mengakses karakter pada `index` `1`, yaitu `e`.

Untuk mendapatkan karakter terakhir dari sebuah `string`, Anda dapat menggunakan panjang `string` dikurangi satu. `Property` `length` dari sebuah `string` memberi tahu Anda berapa banyak karakter yang dimuatnya, jadi untuk mengakses karakter terakhir, Anda akan mengurangi satu dari `length`:

```javascript
let greeting = "hello";
console.log(greeting[greeting.length - 1]); // "o"
```

Dalam kasus ini, `length` dari `hello` adalah `5`, dan karakter terakhir (`o`) berada pada `index` `4` yaitu `5 - 1`.

Jika Anda ingin mendapatkan beberapa karakter, Anda dapat menggunakan `bracket notation` seperti ini:

```javascript
let greeting = "hello";
let firstTwo = greeting[0] + greeting[1]; // "he"
console.log(firstTwo);
```

Dalam contoh ini, kita menggabungkan (`concatenating`) karakter pertama dan kedua menggunakan `bracket notation` untuk membentuk `string` `he`.

`Bracket notation` berguna saat Anda perlu mengakses karakter tertentu dalam sebuah `string`, seperti mengekstrak inisial dari sebuah nama atau memeriksa huruf tertentu untuk validasi.

## Pertanyaan (Questions)

Berapa `index` dari karakter `"r"` dalam `string` `"JavaScript"`?

- `2`
- `4`
- `6`
- `8`

Bagaimana cara Anda mengakses karakter terakhir dari sebuah `string` menggunakan `bracket notation`?

- `string[length]`
- `string[string.length]`
- `string[string.length - 1]`
- `string[string - 1]`

Apa yang memungkinkan Anda lakukan dengan `bracket notation` pada `strings` dalam `JavaScript`?

- Menambahkan karakter baru ke `string`.
- Mengubah `data type` dari `string`.
- Mengakses karakter tertentu dalam `string` menggunakan `index`-nya.
- Mengonversi `string` menjadi sebuah `array` karakter.

---
[⬅️ Sebelumnya](../4-working-with-data-types/2-how-does-the-typeof-operator-work-and-what-is-the-typeof-null-bug-in-javascript.md) | [Selanjutnya ➡️](2-how-do-you-create-a-newline-in-strings-and-escape-strings.md)
