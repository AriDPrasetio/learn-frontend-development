# Bagaimana Cara Mengekstrak Substring dari Sebuah String?

Saat bekerja dengan `strings` dalam `JavaScript`, Anda sering kali perlu mengekstrak sebagian atau `substring` dari sebuah `string` yang lebih besar.

Sebagai contoh, Anda mungkin ingin mengekstrak bagian dari sebuah kata, urutan karakter tertentu, atau hanya sebuah penggalan kalimat.

`JavaScript` menyediakan beberapa `methods` untuk tugas ini, salah satu yang paling umum digunakan adalah `method` `slice()`.

`Method` `slice()` memungkinkan Anda mengekstrak sebagian dari sebuah `string` dan mengembalikan sebuah `string` baru, tanpa memodifikasi `string` aslinya. Ini membutuhkan dua `parameters`: `starting index` dan `ending index` opsional.

Berikut adalah sintaks dasarnya:

```javascript
string.slice(startIndex, endIndex);
```

`startIndex` adalah posisi di mana ekstraksi dimulai. `endIndex` adalah tempat di mana ekstraksi berakhir. Jika tidak disediakan, `slice()` mengekstrak hingga akhir `string`.

Mari kita lihat contoh sederhana mengekstrak bagian dari sebuah `string`:

```javascript
let message = "Hello, world!";
let greeting = message.slice(0, 5);

console.log(greeting);  // Hello
```

Dalam contoh ini, `slice(0, 5)` mengekstrak karakter mulai dari `index` 0 hingga tetapi tidak termasuk `index` 5. Hasilnya, kata `Hello` diekstrak.

Jika Anda menghilangkan `parameter` kedua, `slice()` akan mengekstrak semuanya mulai dari `start index` hingga akhir `string`:

```javascript
let message = "Hello, world!";
let world = message.slice(7);

console.log(world);  // world!
```

Di sini, `slice(7)` mengekstrak `string` dari `index` 7 hingga akhir `string`, menghasilkan `world!`.

Anda juga dapat menggunakan angka negatif sebagai `indexes`. Saat Anda menggunakan angka negatif, ia menghitung mundur dari akhir `string`:

```javascript
let message = "JavaScript is fun!";
let lastWord = message.slice(-4);

console.log(lastWord);  // fun!
```

Dalam kasus ini, `slice(-4)` mengekstrak empat karakter terakhir dari `string`, memberikan kita `fun!`.

Katakanlah Anda ingin mengekstrak bagian dari tengah-tengah `string`. Anda dapat memberikan `starting index` dan `ending index` untuk mengontrol secara tepat bagian `string` mana yang Anda inginkan:

```javascript
let message = "I love JavaScript!";
let language = message.slice(7, 17);

console.log(language);  // JavaScript
```

Di sini, `slice(7, 17)` mengekstrak `substring` yang dimulai dari `index` 7 dan berakhir tepat sebelum `index` 17, yaitu kata `JavaScript`.

`Method` `slice()` adalah alat yang ampuh untuk mengekstrak bagian dari sebuah `string` dalam `JavaScript`.

Anda menentukan `start` dan `end` `indexes`, dan `method` tersebut mengembalikan `string` baru yang memuat bagian yang diekstrak.

Dengan opsi untuk `indexes` positif, negatif, dan yang dihilangkan, Anda dapat menyesuaikannya dengan berbagai situasi tanpa mengubah `string` aslinya.

## Pertanyaan (Questions)

Apa yang akan dihasilkan oleh `code` berikut?

```javascript
let text = "JavaScript is awesome!";
let result = text.slice(0, 9);

console.log(result);
```

- `JavaScript`
- `JavaScrip`
- `Java`
- `awesome`

Manakah dari pernyataan berikut tentang `method` `slice()` yang benar?

- Ini memodifikasi `string` asli.
- Ini mengembalikan `string` baru yang memuat bagian yang diekstrak.
- Ini menyertakan `ending index` dalam `substring` yang diekstrak.
- Ini tidak dapat bekerja dengan `negative indexes`.

Apa yang akan dikembalikan oleh `code` berikut?

```javascript
let sentence = "Learning JavaScript is fun!";
let extracted = sentence.slice(9, -5);

console.log(extracted);
```

- `JavaScript is`
- `JavaScript`
- `Learning`
- `fun!`

---
[⬅️ Sebelumnya](1-how-can-you-test-if-a-string-contains-a-substring.md) | [Selanjutnya ➡️](../8-working-with-string-formatting-methods/1-how-can-you-change-the-casing-for-a-string.md)
