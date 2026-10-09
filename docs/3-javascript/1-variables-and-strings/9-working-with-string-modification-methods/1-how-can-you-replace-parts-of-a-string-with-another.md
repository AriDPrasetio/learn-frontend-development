# Bagaimana Cara Mengganti Bagian dari Sebuah String dengan Bagian Lain?

Dalam `JavaScript`, ada banyak skenario di mana Anda mungkin perlu mengganti sebagian dari sebuah `string` dengan `string` lainnya.

Misalnya, Anda mungkin perlu memperbarui informasi pengguna dalam sebuah `URL`, mengubah pemformatan tanggal, atau memperbaiki kesalahan dalam konten buatan pengguna.

`Method` `replace()` dalam `JavaScript` memungkinkan Anda menemukan `value` tertentu (seperti kata atau karakter) dalam sebuah `string` dan menggantinya dengan `value` lain. `Method` ini mengembalikan sebuah `string` baru dengan penggantian tersebut dan membiarkan `string` asli tidak berubah karena `strings` `JavaScript` bersifat `immutable`.

Berikut adalah sintaks dasarnya:

```javascript
string.replace(searchValue, newValue);
```

`searchValue` adalah `value` yang ingin Anda cari di dalam `string`. Ini bisa berupa `string` atau `regular expression` (`regex`), yang mendeskripsikan pola dalam teks. Ini memungkinkan Anda untuk mencari dan memanipulasi `strings` dengan cara yang fleksibel dan kuat. Anda akan mempelajari lebih lanjut tentang `regular expressions` pada pelajaran-pelajaran mendatang.

`newValue` adalah `value` yang akan menggantikan `searchValue`. Berikut adalah contoh sederhana:

```javascript
let text = "I love JavaScript!";
console.log(text); // "I love JavaScript!"
let newText = text.replace("JavaScript", "coding");
console.log(newText);  // "I love coding!"
```

Dalam contoh ini, kata `JavaScript` ditemukan di dalam `string` dan diganti dengan `coding`.

`Method` `replace()` bersifat `case-sensitive`, artinya ia hanya akan menemukan kecocokan persis dari `searchValue`. Sebagai contoh:

```javascript
let sentence = "I enjoy working with JavaScript.";
console.log(sentence);  // "I enjoy working with JavaScript."
let updatedSentence = sentence.replace("javascript", "coding");
console.log(updatedSentence);  // "I enjoy working with JavaScript."
```

Di sini, karena `javascript` (dengan huruf kecil `j`) tidak cocok dengan `JavaScript` (dengan huruf kapital `J`), penggantian tidak dilakukan.

Secara *default*, `method` `replace()` hanya akan mengganti kemunculan pertama dari `searchValue`. Jika `value` tersebut muncul beberapa kali dalam `string`, hanya yang pertama yang akan diganti:

```javascript
let phrase = "Hello, world! Welcome to the world of coding.";
console.log(phrase);  // "Hello, world! Welcome to the world of coding."
let updatedPhrase = phrase.replace("world", "universe");
console.log(updatedPhrase);  // "Hello, universe! Welcome to the world of coding."
```

Perhatikan bahwa hanya kemunculan pertama dari `world` yang diganti dengan `universe`.

`Method` `replace()` dalam `JavaScript` adalah alat yang ampuh dan fleksibel untuk manipulasi `string`.

Ini memungkinkan Anda mengganti bagian tertentu dari sebuah `string`, apakah Anda berhadapan dengan karakter individual, kata-kata, atau pola kompleks menggunakan `regular expressions`.

Meskipun ideal untuk penggantian sederhana, memahami kepekaan huruf besar/kecil (`case sensitivity`) dan perilaku *default*-nya (seperti hanya mengganti kemunculan pertama) dapat membantu Anda menggunakannya secara lebih efektif.

## Pertanyaan (Questions)

Apa perilaku *default* dari `method` `replace()` dalam `JavaScript`?

- Ini menggantikan semua kemunculan dari `search value`.
- Ini hanya menggantikan kemunculan pertama dari `search value`.
- Ini tidak melakukan apa pun jika `search value` tidak ditemukan.
- Ini menggantikan setiap kemunculan berselang dari `search value`.

Apa yang akan dihasilkan oleh `code` berikut?

```javascript
let phrase = "freeCodeCamp is awesome!";
let updatedPhrase = phrase.replace("freecodecamp", "fCC");

console.log(updatedPhrase);
```

- `"fcc is awesome!"`
- `"fCC is awesome!"`
- `"freeCodeCamp is awesome!"`
- `undefined`

Apa yang akan dihasilkan oleh `code` berikut?

```javascript
let phrase = "Good morning, morning people!";
let updatedPhrase = phrase.replace("morning", "evening");

console.log(updatedPhrase);
```

- `"Good morning, evening people!"`
- `"Good evening, morning people!"`
- `"Good evening, evening people!"`
- `"Good morning, morning people!"`

---
[⬅️ Sebelumnya](../8-working-with-string-formatting-methods/2-how-can-you-trim-whitespace-from-a-string.md) | [Selanjutnya ➡️](2-how-can-you-repeat-a-string-x-number-of-times.md)
